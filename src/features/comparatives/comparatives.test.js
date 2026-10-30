import { describe, expect, it } from "vitest";
import { IRREGULAR_COMPARATIVES } from "./data";

describe("comparativos irregulares", () => {
  it.each([
    ["buono", "migliore"],
    ["cattivo", "peggiore"],
    ["grande", "maggiore"],
    ["piccolo", "minore"],
    ["bene", "meglio"],
    ["male", "peggio"],
  ])("%s → %s", (base, form) => {
    expect(IRREGULAR_COMPARATIVES.find(([word]) => word === base)?.[1]).toBe(form);
  });
});
