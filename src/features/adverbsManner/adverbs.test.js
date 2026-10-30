import { describe, expect, it } from "vitest";
import { ADVERB_PAIRS } from "./data";

const EXPECTED = {
  lento: "lentamente",
  veloce: "velocemente",
  attento: "attentamente",
  facile: "facilmente",
  gentile: "gentilmente",
  regolare: "regolarmente",
  felice: "felicemente",
  buono: "bene",
  cattivo: "male",
};

describe("formación de adverbios", () => {
  it.each(Object.entries(EXPECTED))("%s → %s", (adjective, adverb) => {
    expect(ADVERB_PAIRS.find(([word]) => word === adjective)?.[1]).toBe(adverb);
  });
});
