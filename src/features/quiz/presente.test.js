import { describe, expect, it } from "vitest";
import { CONJUGATION_MODELS } from "../presenteIndicativo/data";

const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

describe("modelos de conjugación del presente", () => {
  it("cada modelo trae las seis personas", () => {
    expect(CONJUGATION_MODELS.length).toBeGreaterThanOrEqual(4);
    for (const model of CONJUGATION_MODELS) {
      expect(model.forms.map(form => form.subj)).toEqual(PERSONS);
    }
  });

  it("los modelos regulares terminan como su grupo", () => {
    const endings = { parlare: ["o", "i", "a", "iamo", "ate", "ano"], credere: ["o", "i", "e", "iamo", "ete", "ono"], dormire: ["o", "i", "e", "iamo", "ite", "ono"] };
    for (const [verb, ends] of Object.entries(endings)) {
      const model = CONJUGATION_MODELS.find(item => item.verb === verb);
      const stem = verb.slice(0, -3);
      expect(model.forms.map(form => form.form)).toEqual(ends.map(end => stem + end));
    }
  });

  it("capire solo lleva -isc- en io, tu, lui/lei y loro", () => {
    const model = CONJUGATION_MODELS.find(item => item.verb === "capire");
    expect(model.forms.map(form => form.form)).toEqual(["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"]);
  });
});
