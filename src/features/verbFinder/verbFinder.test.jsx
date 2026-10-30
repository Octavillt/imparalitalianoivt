import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { NavigationContext } from "../../navigation/NavigationContext";
import { EXERCISE_WORDS } from "../exerciseWords/data";
import { IRREGULAR_VERBS } from "../irregularVerbs/data";
import { ESSERE_VERBS, IRREGULAR_PARTICIPLES } from "../passatoProssimo/data";
import { CONJUGATION_MODELS, ISC_MODELS } from "../presenteIndicativo/data";
import { ROUTINE_VERBS } from "../routineRiflessivi/data";
import { VERB_PATTERNS } from "../verbiInfinito/data";
import { VERBS } from "../verbs/data";
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

// Infinitivo sin reflexivo: alzarsi → alzare, tradurre sigue igual.
const baseOf = item => item.infinito.replace(/([aei])rsi$/, "$1re");

// Lo que daría la regla de su grupo. conoscere lleva -iuto para conservar el sonido suave.
function regularForms(item) {
  const stem = baseOf(item).slice(0, -3);
  const prefix = item.reflexive ? "mi " : "";
  const participles = { are: "ato", ere: stem.endsWith("c") ? "iuto" : "uto", ire: "ito", isc: "ito" };
  return {
    presente: `${prefix}${stem}${item.gruppo === "isc" ? "isco" : "o"}`,
    participio: stem + participles[item.gruppo],
  };
}

// En «io» parecen regulares, pero el resto de su presente no lo es.
const IRREGULAR_BEYOND_IO = ["dare", "stare"];

const LESSON_VERBS = {
  verbs: VERBS.map(([infinito]) => infinito),
  presenteIndicativo: [...CONJUGATION_MODELS, ...ISC_MODELS].map(item => item.verb),
  irregularVerbs: IRREGULAR_VERBS.map(item => item.inf),
  verbiInfinito: VERB_PATTERNS.map(item => item.verb),
  routineRiflessivi: ROUTINE_VERBS.map(([infinito]) => infinito),
  exerciseWords: EXERCISE_WORDS.map(item => item.it),
  passatoProssimo: [...IRREGULAR_PARTICIPLES, ...ESSERE_VERBS].map(([infinito]) => infinito),
};

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

  it("reúne cerca de 230 verbos", () => {
    expect(VERB_BANK.length).toBe(235);
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

  it("el grupo corresponde a la terminación del infinitivo", () => {
    for (const item of VERB_BANK) {
      const base = baseOf(item);
      const expected = base.endsWith("are") ? ["are"] : base.endsWith("ire") ? ["ire", "isc"] : ["ere"];
      expect(expected, item.infinito).toContain(item.gruppo);
    }
  });

  it("los regulares siguen la regla de su grupo", () => {
    for (const item of VERB_BANK.filter(entry => entry.kind === "regular")) {
      const { presente, participio } = regularForms(item);
      expect(item.presente[0], item.infinito).toBe(presente);
      expect(item.participio[0], item.infinito).toBe(participio);
    }
  });

  it("los irregulares se apartan de la regla", () => {
    const irregulars = VERB_BANK.filter(entry => entry.kind === "irregular" && !IRREGULAR_BEYOND_IO.includes(entry.infinito));
    for (const item of irregulars) {
      const { presente, participio } = regularForms(item);
      const differs = item.presente[0] !== presente || item.participio[0] !== participio;
      expect(differs, item.infinito).toBe(true);
    }
  });

  it("no incluye verbos sin forma de io", () => {
    const names = VERB_BANK.map(item => item.infinito);
    for (const impersonal of ["piovere", "nevicare", "bisognare", "succedere"]) {
      expect(names).not.toContain(impersonal);
    }
  });

  it("incluye todos los verbos que enseñan las lecciones", () => {
    const names = new Set(VERB_BANK.map(item => item.infinito));
    for (const [topic, infinitives] of Object.entries(LESSON_VERBS)) {
      expect(infinitives.filter(infinito => !names.has(infinito)), topic).toEqual([]);
    }
  });

  it("coincide con las formas que enseñan las lecciones", () => {
    for (const { inf, io, part } of IRREGULAR_VERBS) {
      expect(verb(inf).presente, inf).toContain(io);
      expect(verb(inf).participio, inf).toContain(part);
    }
    for (const [infinito, participio] of IRREGULAR_PARTICIPLES) {
      expect(verb(infinito).participio, infinito).toContain(participio);
    }
    for (const [infinito, presente] of ROUTINE_VERBS) {
      expect(verb(infinito).presente, infinito).toContain(presente);
    }
    for (const [infinito] of ESSERE_VERBS) {
      expect(verb(infinito).ausiliare, infinito).toContain("essere");
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
    expect(found("salir")).toEqual(expect.arrayContaining(["partire", "uscire"]));
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

  it("enlaza cada verbo con las lecciones que lo enseñan", () => {
    const topics = infinito => lessonsFor(infinito).map(item => item.topicId);
    expect(lessonsFor("andare")).toContainEqual({ levelId: "basico1", topicId: "verbs" });
    expect(lessonsFor("andare")).toContainEqual({ levelId: "basico2", topicId: "irregularVerbs" });
    expect(lessonsFor("andare")).toContainEqual({ levelId: "basico2", topicId: "verbiInfinito" });
    expect(lessonsFor("andare")).toContainEqual({ levelId: "basico5", topicId: "passatoProssimo" });
    expect(lessonsFor(verb("alzarsi"))).toContainEqual({ levelId: "basico3", topicId: "routineRiflessivi" });
    expect(topics("spingere")).toContain("exerciseWords");
    expect(topics("preferire")).toContain("presenteIndicativo");
    expect(lessonsFor("firmare")).toEqual([]);
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
    fireEvent.click(group.getByRole("button", { name: /-are/ }));
    expect(cards()).toEqual(VERB_BANK.filter(item => item.gruppo === "are").map(item => item.infinito));
    fireEvent.click(screen.getByRole("button", { name: /^Irregulares/ }));
    expect(cards()).toEqual(VERB_BANK.filter(item => item.gruppo === "are" && item.kind === "irregular").map(item => item.infinito));
    expect(cards()).toEqual(expect.arrayContaining(["andare", "dare", "fare", "stare"]));
    fireEvent.click(screen.getByRole("button", { name: /^Regulares/ }));
    expect(cards()).toContain("parlare");
    expect(cards()).not.toContain("andare");
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

  it("enlaza la lección de cada verbo al abrirlo", () => {
    renderSection({ highlightTerm: "andare", highlightSeq: 1 });
    expect(screen.getByRole("button", { name: /Verbos irregulares/ })).toBeInTheDocument();
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
