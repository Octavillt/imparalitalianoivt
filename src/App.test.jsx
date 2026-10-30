import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const NUMBERS_HEADING = "🔢 Números y alfabeto — Numeri e alfabeto";
const TIME_HEADING = "🕐 La hora — Che ora è?";

function topics() {
  return within(screen.getByRole("navigation", { name: "Temas del módulo" }));
}

describe("App — selector de color y niveles", () => {
  beforeEach(() => localStorage.clear());

  it("arranca en Básico I con el tema por defecto (Pizarra)", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "🎓 Italiano — Básico I" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /color/i })).toBeInTheDocument();
  });

  it("el selector de color muestra las 8 paletas al abrirlo", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    const menu = screen.getByRole("menu");
    for (const label of [/Pizarra/, /Grafito/, /Carbón cálido/, /Berenjena/, /Marino/, /Esmeralda/, /Vino tinto/, /Índigo/]) {
      expect(within(menu).getByText(label)).toBeInTheDocument();
    }
  });

  it("elegir un color persiste en localStorage y tiñe el fondo completo de la app", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await user.click(screen.getByRole("button", { name: /color/i }));
    await user.click(screen.getByRole("menuitemradio", { name: /Vino tinto/ }));

    expect(localStorage.getItem("imparalitalianoivt.theme")).toBe("vino");
    expect(container.firstChild).toHaveStyle({ background: "#1f040d" });
  });

  it("recuerda el color guardado al volver a montar la app", async () => {
    localStorage.setItem("imparalitalianoivt.theme", "berenjena");
    render(<App />);

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /color/i }));
    expect(screen.getByRole("menuitemradio", { name: /Berenjena/ })).toHaveAttribute("aria-checked", "true");
  });

  it("habilita Básico I y Quiz, y bloquea los módulos sin migrar", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Básico I" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "🎯 Quiz" })).toBeEnabled();
    for (const label of [/^Básico II/, /^Básico III/, /^Básico IV/, /^Básico V/, /Verbos/]) {
      const locked = screen.getAllByRole("button", { name: label }).find(button => button.textContent.includes("🔒"));
      expect(locked).toBeDisabled();
    }
  });

  it("la barra de temas muestra solo los temas disponibles de Básico I", () => {
    render(<App />);
    expect(topics().getAllByRole("button").map(button => button.textContent)).toEqual([
      "🔢 Números y alfabeto", "✅ Essere y avere", "🌎 Países y nacionalidades", "👪 La familia",
      "➕ Género y plural", "👉 Demostrativos", "🍎 Frutas y verduras", "📍 Preposiciones de lugar",
      "🕐 La hora", "📅 Días, meses y fechas", "🏃 Verbos de uso diario", "🌀 Stare + gerundio",
      "👷 Oficios y profesiones", "🗣️ Conversación y vocabulario",
    ]);
  });

  it("Números incluye cifras, alfabeto, vocales y pronunciación", async () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: NUMBERS_HEADING })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /I numeri cardinali/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /L'alfabeto italiano/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Le vocali/ })).toBeInTheDocument();
    expect(screen.getByText("GN y GLI", { exact: false })).toBeInTheDocument();
  });

  it("recuerda el último tema visitado al volver a montar la app", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);
    await user.click(topics().getByRole("button", { name: "🕐 La hora" }));
    unmount();
    render(<App />);
    expect(screen.getByRole("heading", { name: TIME_HEADING })).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem("imparalitalianoivt.activeTopics")).basico1).toBe("time");
  });
});

describe("App — lecciones interactivas", () => {
  beforeEach(() => localStorage.clear());

  it("convierte el número que se escribe en palabras italianas", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByDisplayValue(/^\d[\d.]*$/);
    await user.clear(input);
    await user.type(input, "23");
    expect(screen.getAllByText("ventitré").length).toBeGreaterThan(0);
  });

  it("muestra los relojes con la hora en italiano", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(topics().getByRole("button", { name: "🕐 La hora" }));
    expect(screen.getByRole("heading", { name: TIME_HEADING })).toBeInTheDocument();
    expect(document.querySelector("main").textContent).toMatch(/sono le (dieci|nove|quattro|tre)/);
    expect(document.querySelector("main").textContent).not.toMatch(/o'clock|hour hand/);
  });
});

describe("App — flecha para volver a la sección anterior", () => {
  beforeEach(() => localStorage.clear());

  const flecha = () => screen.queryByRole("button", { name: /^Volver a / });

  it("no aparece hasta que hay una sección anterior", () => {
    render(<App />);
    expect(flecha()).not.toBeInTheDocument();
  });

  it("regresa desde el módulo Quiz al tema anterior", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "🎯 Quiz" }));
    expect(screen.getByRole("heading", { name: "🎯 Quiz" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Volver a 🔢 Números y alfabeto · Básico I" }));

    expect(screen.getByRole("heading", { name: NUMBERS_HEADING })).toBeInTheDocument();
    expect(flecha()).not.toBeInTheDocument();
  });
});

describe("App — buscador global y resaltado", () => {
  beforeEach(() => localStorage.clear());

  async function buscarYElegir(user, termino, opcion) {
    const input = screen.getByPlaceholderText("Buscar tema o palabra...");
    await user.clear(input);
    await user.type(input, termino);
    await user.click(await screen.findByRole("option", { name: opcion }));
  }

  function resaltado() {
    return document.querySelector("main mark.search-highlight");
  }

  it("resalta la coincidencia al elegir un resultado del buscador", async () => {
    const user = userEvent.setup();
    render(<App />);

    await buscarYElegir(user, "mezzogiorno", /La hora/);

    expect(screen.getByRole("heading", { name: TIME_HEADING })).toBeInTheDocument();
    await waitFor(() => expect(resaltado()).toHaveTextContent(/mezzogiorno/i));
  });

  it("vuelve a resaltar cuando la segunda búsqueda cae en la sección ya abierta", async () => {
    const user = userEvent.setup();
    render(<App />);

    await buscarYElegir(user, "mezzogiorno", /La hora/);
    await waitFor(() => expect(resaltado()).toHaveTextContent(/mezzogiorno/i));

    await buscarYElegir(user, "mezzanotte", /La hora/);

    await waitFor(() => expect(resaltado()).toHaveTextContent(/mezzanotte/i));
    expect(document.querySelectorAll("main mark.search-highlight")).toHaveLength(1);
  });

  it("no ofrece verbos en el buscador mientras su módulo siga bloqueado", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText("Buscar tema o palabra..."), "andare");
    expect(screen.queryByRole("option", { name: /andare/ })).not.toBeInTheDocument();
  });
});
