import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { LEVELS } from "./constants/levels";
import { LEARNING_GUIDE } from "./constants/learningGuide";
import { TOPIC_FORMULAS } from "./constants/topicFormulas";
import { scrollToAndHighlight } from "./constants/highlightMatch";

// Pertenencia exacta de las lecciones ya migradas; crece con cada etapa.
const membership = {
  basico1: "numbers essereAvere countries family plural demonstratives fruits time",
  basico2: "",
  basico3: "",
  basico4: "",
  basico5: "",
};
const TOTAL_LESSONS = 8;
const studyLevels = LEVELS.filter(level => level.id !== "quiz" && !level.reference);
const openLevels = studyLevels.filter(level => level.available);

beforeEach(() => localStorage.clear());
afterEach(() => vi.useRealTimers());

describe("Recorrido de aprendizaje", () => {
  it("conserva todas las secciones en su módulo y enlaza bases anteriores", () => {
    const seen = new Set();
    for (const level of studyLevels) {
      expect(level.topics.map(t => t.id).sort()).toEqual(membership[level.id].split(" ").filter(Boolean).sort());
      expect(level.purpose && level.description && level.bridge && level.outcome).toBeTruthy();
      for (const topic of level.topics) {
        expect(seen.has(topic.id)).toBe(false);
        const guide = LEARNING_GUIDE[topic.id];
        expect(guide.goal).toBeTruthy();
        expect(guide.task).toBeTruthy();
        expect(guide.answer).toBeTruthy();
        for (const prerequisite of guide.recall) expect(seen.has(prerequisite)).toBe(true);
        seen.add(topic.id);
      }
    }
    expect(seen.size).toBe(TOTAL_LESSONS);
  });

  it("solo abre módulos que ya tienen lecciones", () => {
    for (const level of studyLevels) expect(level.available).toBe(level.topics.length > 0);
  });

  it.each(openLevels)("abre cada sección y su autoevaluación en $label", level => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: level.label, exact: true }));
    for (const topic of level.topics) {
      const navigation = within(screen.getByRole("navigation", { name: "Temas del módulo" }));
      fireEvent.click(navigation.getByRole("button", { name: topic.label, exact: true }));
      expect(screen.getByRole("heading", { level: 2, name: `${topic.label} — ${topic.italiano}` })).toBeInTheDocument();
      expect(screen.getByRole("region", { name: "Comprueba lo aprendido" })).toHaveTextContent(LEARNING_GUIDE[topic.id].task);
      const formulas = within(screen.getByRole("region", { name: "Fórmulas y patrones del tema" }));
      for (const row of TOPIC_FORMULAS[topic.id].rows) {
        expect(formulas.getByText(row.pattern, { exact: true })).toBeInTheDocument();
        expect(formulas.getByText(row.example, { exact: true })).toBeInTheDocument();
        expect(formulas.getByText(row.translation, { exact: true })).toBeInTheDocument();
      }
    }
  }, 15000);

  it("avanza dentro del módulo y sin siguiente módulo lleva al repaso", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Siguiente tema.*Essere y avere/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Essere y avere/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Tema anterior.*Números/ })).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("navigation", { name: "Temas del módulo" })).getByRole("button", { name: /La hora/ }));
    fireEvent.click(screen.getByRole("button", { name: "Repasar todos los módulos →" }));
    expect(screen.getByRole("heading", { name: "🎯 Quiz" })).toBeInTheDocument();
  });

  it("abre el Quiz con el tema actual y permite volver a su explicación", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Practicar este tema en el Quiz" }));
    expect(screen.getByLabelText("Módulo")).toHaveValue("basico1");
    expect(screen.getByLabelText("Sección")).toHaveValue("numbers");
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "ripassare" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    fireEvent.click(screen.getByRole("button", { name: /Repasar la explicación/ }));
    expect(screen.getByRole("heading", { level: 2, name: /Números y alfabeto/ })).toBeInTheDocument();
  });

  it("abre ampliaciones plegadas al buscar y omite la ruta duplicada", () => {
    vi.useFakeTimers();
    render(<main><details className="module-guide"><summary>Ruta</summary>andato</details><details><summary>Ampliación</summary><p>andato</p></details></main>);
    scrollToAndHighlight("andato", { delay: 0 });
    act(() => vi.advanceTimersByTime(1));
    const mark = document.querySelector("mark.search-highlight");
    expect(mark.closest("details")).toHaveAttribute("open");
    expect(document.querySelector(".module-guide")).not.toHaveAttribute("open");
    act(() => vi.advanceTimersByTime(3200));
    expect(document.querySelector("mark")).toBeNull();
  });
});
