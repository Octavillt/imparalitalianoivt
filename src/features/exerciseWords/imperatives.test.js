import { describe, expect, it } from "vitest";
import { EXERCISE_WORDS } from "./data";

// [infinitivo, tu, Lei, gerundio]. Con Lei la vocal final se invierte respecto de tu.
const EXPECTED = [
  ["alzare", "alza", "alzi", "alzando"],
  ["abbassare", "abbassa", "abbassi", "abbassando"],
  ["piegare", "piega", "pieghi", "piegando"],
  ["stendere", "stendi", "stenda", "stendendo"],
  ["girare", "gira", "giri", "girando"],
  ["saltare", "salta", "salti", "saltando"],
  ["spingere", "spingi", "spinga", "spingendo"],
  ["tirare", "tira", "tiri", "tirando"],
  ["sollevare", "solleva", "sollevi", "sollevando"],
];

describe("imperativo y gerundio de los movimientos", () => {
  it.each(EXPECTED)("%s: %s / %s / %s", (infinitive, tu, lei, gerundio) => {
    const word = EXERCISE_WORDS.find(item => item.it === infinitive);
    expect(word).toMatchObject({ tu, lei, gerundio });
  });
});
