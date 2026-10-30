import { describe, expect, it } from "vitest";
import { GERUND_RULES } from "./data";

describe("reglas del gerundio", () => {
  it("cada ejemplo regular se forma desde su infinitivo", () => {
    const regular = GERUND_RULES.filter(rule => rule.rule !== "Irregulares");
    for (const { words } of regular) {
      for (const [stem, ending, infinitive] of words) {
        expect(infinitive.slice(0, -3)).toBe(stem);
        expect(ending).toBe(infinitive.endsWith("are") ? "ando" : "endo");
      }
    }
  });
});
