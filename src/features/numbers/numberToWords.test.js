import { describe, expect, it } from "vitest";
import { MAX_NUMBER, numberToWords } from "./numberToWords";

describe("numberToWords", () => {
  it.each([
    [0, "zero"], [3, "tre"], [16, "sedici"], [17, "diciassette"], [20, "venti"],
    [21, "ventuno"], [23, "ventitré"], [28, "ventotto"], [31, "trentuno"], [33, "trentatré"],
    [38, "trentotto"], [81, "ottantuno"], [88, "ottantotto"], [99, "novantanove"],
  ])("escribe %i del 0 al 99 como %s", (n, words) => {
    expect(numberToWords(n)).toBe(words);
  });

  it.each([
    [100, "cento"], [101, "centouno"], [103, "centotré"], [108, "centotto"], [180, "centottanta"],
    [200, "duecento"], [208, "duecentotto"], [252, "duecentocinquantadue"], [999, "novecentonovantanove"],
  ])("escribe la centena %i como %s", (n, words) => {
    expect(numberToWords(n)).toBe(words);
  });

  it.each([
    [1000, "mille"], [1001, "milleuno"], [1003, "milletré"], [1100, "millecento"],
    [2000, "duemila"], [2023, "duemilaventitré"], [2500, "duemilacinquecento"], [3000, "tremila"],
    [21000, "ventunomila"], [23000, "ventitremila"], [100000, "centomila"], [103000, "centotremila"],
  ])("pega los miles de %i: %s", (n, words) => {
    expect(numberToWords(n)).toBe(words);
  });

  it.each([
    [1000000, "un milione"], [1000001, "un milione uno"], [1200000, "un milione duecentomila"],
    [2000000, "due milioni"], [3000003, "tre milioni tre"], [1000000000, "un miliardo"],
  ])("separa millones y miliardi en %i: %s", (n, words) => {
    expect(numberToWords(n)).toBe(words);
  });

  it("dice los negativos con meno y conoce su máximo", () => {
    expect(numberToWords(-5)).toBe("meno cinque");
    expect(MAX_NUMBER).toBe(1_000_000_000);
  });

  it("nunca deja tre sin acento al final de un compuesto ni con acento en medio", () => {
    for (let n = 4; n < 2100; n += 1) {
      const words = numberToWords(n);
      if (n % 10 === 3 && n % 100 !== 13) expect(words.endsWith("tré")).toBe(true);
      expect(words.slice(0, -1).includes("é")).toBe(false);
    }
  });
});
