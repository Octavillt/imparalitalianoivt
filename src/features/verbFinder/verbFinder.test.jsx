import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NavigationContext } from "../../navigation/NavigationContext";
import { AUX_RULES, CONJUGATION_GROUPS, VERB_BANK } from "./data";
import { GROUPS, lessonsFor, normalize, searchVerbs, verbGroup } from "./verbSearch";
import VerbFinderSection from "./VerbFinderSection";

const FAVORITES_KEY = "imparalitalianoivt.favoriteVerbs";
const verb = infinito => VERB_BANK.find(item => item.infinito === infinito);
const found = query => searchVerbs(query).map(item => item.verb.infinito);

function renderSection(props = {}) {
  return render(
    <NavigationContext.Provider value={{ goTo: vi.fn() }}>
      <VerbFinderSection {...props} />
    </NavigationContext.Provider>,
  );
}

const cards = () => screen.queryAllByRole("article").map(item => item.getAttribute("aria-label"));

beforeEach(() => localStorage.clear());

describe("banco de verbos", () => {
  it("cada verbo trae sus formas, auxiliar, grupo y significado", () => {
    for (const item of VERB_BANK) {
      expect(item.infinito).toMatch(/(are|ere|ire|rre|arsi|ersi|irsi)$/);
      expect(item.presente.length).toBeGreaterThan(0);
      expect(item.participio.length).toBeGreaterThan(0);
      expect(["avere", "essere", "avere / essere"]).toContain(item.ausiliare);
      expect(["are", "ere", "ire", "isc"]).toContain(item.gruppo);
      expect(["regular", "irregular"]).toContain(item.kind);
      expect(item.es.trim()).not.toBe("");
    }
  });

  it("no repite infinitivos y va en orden alfabético", () => {
    const names = VERB_BANK.map(item => item.infinito);
    expect(new Set(names).size).toBe(names.length);
    expect([...names].sort((a, b) => a.localeCompare(b, "it"))).toEqual(names);
  });

  it("los reflexivos usan essere y conservan su pronombre", () => {
    for (const item of VERB_BANK.filter(entry => entry.reflexive)) {
      expect(item.ausiliare).toBe("essere");
      expect(item.presente[0]).toMatch(/^mi /);
    }
  });

  it("los regulares terminan como su grupo", () => {
    const endings = { are: /o$/, ere: /o$/, ire: /o$/, isc: /isco$/ };
    for (const item of VERB_BANK.filter(entry => entry.kind === "regular")) {
      expect(item.presente[0]).toMatch(endings[item.gruppo]);
    }
  });

  it("explica la conjugación de los cuatro grupos y los auxiliares", () => {
    expect(CONJUGATION_GROUPS).toHaveLength(4);
    expect(AUX_RULES).toHaveLength(3);
  });
});

describe("searchVerbs", () => {
  it("encuentra por infinitivo, presente o participio", () => {
    expect(found("andare")[0]).toBe("andare");
    expect(found("vado")[0]).toBe("andare");
    expect(found("andato")[0]).toBe("andare");
  });

  it("encuentra por significado en español, sin importar acentos", () => {
    expect(found("ir")).toContain("andare");
    expect(found("beber")).toEqual(["bere"]);
    expect(found("salir")).toEqual(["partire"]);
  });

  it("explica qué forma coincidió", () => {
    expect(searchVerbs("vado")[0].matchedField).toBe("presente");
    expect(searchVerbs("andato")[0].matchedField).toBe("participio");
    expect(searchVerbs("beber")[0].matchedField).toBe("es");
  });

  it("devuelve vacío sin consulta y respeta el límite", () => {
    expect(searchVerbs("   ")).toEqual([]);
    expect(searchVerbs(null)).toEqual([]);
    expect(searchVerbs("a", { limit: 2 })).toHaveLength(2);
  });

  it("agrupa cada verbo y normaliza sin acentos", () => {
    expect(verbGroup(verb("capire"))).toBe("isc");
    expect(GROUPS.map(group => group.id)).toEqual(["are", "ere", "ire", "isc"]);
    expect(normalize("Così")).toBe("cosi");
  });

  it("todavía no enlaza lecciones", () => {
    expect(lessonsFor("andare")).toEqual([]);
  });
});

describe("Verbos a la mano", () => {
  it("muestra todas las tarjetas con sus columnas", () => {
    renderSection();
    expect(cards()).toHaveLength(VERB_BANK.length);
    const card = within(screen.getByRole("article", { name: "andare" }));
    expect(card.getByText("vado")).toBeInTheDocument();
    expect(card.getByText("andato")).toBeInTheDocument();
    expect(card.getByText("essere")).toBeInTheDocument();
    expect(card.getByText("ir")).toBeInTheDocument();
  });

  it("filtra por tipo y por grupo combinados", () => {
    renderSection();
    const group = within(screen.getByRole("group", { name: /grupo/i }));
    fireEvent.click(group.getByRole("button", { name: /-isc-/ }));
    expect(cards()).toEqual(VERB_BANK.filter(item => item.gruppo === "isc").map(item => item.infinito));
    fireEvent.click(screen.getByRole("button", { name: /^Irregulares/ }));
    expect(cards()).toEqual([]);
    fireEvent.click(screen.getByRole("button", { name: /^Regulares/ }));
    expect(cards()).toEqual(["capire", "finire"]);
  });

  it("busca y explica la coincidencia", () => {
    renderSection();
    fireEvent.change(screen.getByRole("searchbox", { name: "Buscar verbo" }), { target: { value: "vado" } });
    expect(cards()).toEqual(["andare"]);
    expect(screen.getByText(/1 verbo para «vado»/)).toBeInTheDocument();
  });

  it("explica qué hacer sin resultados y no enlaza lecciones inexistentes", () => {
    renderSection();
    fireEvent.change(screen.getByRole("searchbox", { name: "Buscar verbo" }), { target: { value: "zzzz" } });
    expect(screen.getByText(/No encontramos «zzzz»/)).toBeInTheDocument();
    expect(screen.getByText(/parlare → parlo/)).toBeInTheDocument();
  });

  it("oculta cada columna y la revela al tocarla", () => {
    renderSection();
    const practice = within(screen.getByRole("group", { name: "Modo práctica: ocultar columna" }));
    for (const [option, label] of [["Presente", "presente"], ["Participio", "participio"], ["Auxiliar", "auxiliar"], ["Español", "significado"]]) {
      fireEvent.click(practice.getByRole("button", { name: option }));
      const reveal = within(screen.getByRole("article", { name: "andare" })).getByRole("button", { name: `Mostrar ${label} de andare` });
      fireEvent.click(reveal);
      expect(within(screen.getByRole("article", { name: "andare" })).queryByRole("button", { name: `Mostrar ${label} de andare` })).toBeNull();
    }
    fireEvent.click(practice.getByRole("button", { name: "Nada" }));
  });

  it("guarda favoritos y los conserva", () => {
    renderSection();
    fireEvent.click(screen.getByRole("button", { name: "Guardar andare en Mis verbos" }));
    fireEvent.click(screen.getByRole("button", { name: /★ Mis verbos/ }));
    expect(cards()).toEqual(["andare"]);
    expect(JSON.parse(localStorage.getItem(FAVORITES_KEY))).toEqual(["andare"]);
  });

  it("muestra la nota al abrir un verbo", () => {
    renderSection();
    fireEvent.click(screen.getByRole("button", { name: "Ver la nota de finire" }));
    expect(screen.getByText(/ho finito il libro/)).toBeInTheDocument();
  });

  it("abre el verbo que llega desde el buscador", () => {
    renderSection({ highlightTerm: "andare", highlightSeq: 1 });
    expect(cards()).toEqual(["andare"]);
    expect(screen.getByText(/ir|andare/, { selector: ".vf-more *" })).toBeInTheDocument();
  });

  it("incluye la guía de pronunciación y la conjugación", () => {
    renderSection();
    expect(screen.getByText(/Guía de pronunciación/)).toBeInTheDocument();
    expect(screen.getByText(/Conjugación regular y auxiliares/)).toBeInTheDocument();
  });
});
