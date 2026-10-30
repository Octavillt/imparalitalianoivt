import { describe, expect, it } from "vitest";
import { BODY_WORDS } from "./data";

// Plurales que no siguen la regla general: un error aquí enseña mal la lección.
const EXPECTED = {
  "il braccio": "le braccia",
  "il dito": "le dita",
  "il ginocchio": "le ginocchia",
  "il labbro": "le labbra",
  "l'osso": "le ossa",
  "l'orecchio": "le orecchie",
  "la mano": "le mani",
  "l'occhio": "gli occhi",
  "il piede": "i piedi",
};

describe("plurales del cuerpo", () => {
  it.each(Object.entries(EXPECTED))("%s → %s", (singular, plural) => {
    const word = BODY_WORDS.find(([it]) => it === singular);
    expect(word?.[2]).toBe(plural);
  });
});
