import { describe, it, expect } from "vitest";
import { searchTopics } from "./searchIndex";

describe("searchTopics", () => {
  it("devuelve vacío para query vacío o solo espacios", () => {
    expect(searchTopics("")).toEqual([]);
    expect(searchTopics("   ")).toEqual([]);
  });

  it("encuentra un tema por su etiqueta en español o en italiano", () => {
    expect(searchTopics("alfabeto").some(r => r.topicId === "numbers")).toBe(true);
    expect(searchTopics("Numeri").some(r => r.topicId === "numbers")).toBe(true);
    expect(searchTopics("Che ora").some(r => r.topicId === "time")).toBe(true);
  });

  it("encuentra un tema por una palabra de su contenido", () => {
    expect(searchTopics("ventuno").some(r => r.topicId === "numbers")).toBe(true);
    expect(searchTopics("mezzogiorno").some(r => r.topicId === "time")).toBe(true);
    expect(searchTopics("deletrear").some(r => r.topicId === "numbers")).toBe(true);
  });

  it("es insensible a mayúsculas y acentos", () => {
    expect(searchTopics("MEZZOGIORNO").some(r => r.topicId === "time")).toBe(true);
    expect(searchTopics("ventitre").some(r => r.topicId === "numbers")).toBe(true);
    expect(searchTopics("numeros").some(r => r.topicId === "numbers")).toBe(true);
  });

  it("prioriza coincidencias de etiqueta sobre las de contenido", () => {
    expect(searchTopics("hora")[0].topicId).toBe("time");
  });

  it("no devuelve resultados para un query sin coincidencias", () => {
    expect(searchTopics("xyzabc")).toEqual([]);
  });

  it("no ofrece temas de módulos bloqueados", () => {
    expect(searchTopics("verbos a la mano")).toEqual([]);
    expect(searchTopics("verbFinder")).toEqual([]);
  });
});
