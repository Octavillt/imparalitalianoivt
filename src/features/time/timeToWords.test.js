import { describe, expect, it } from "vitest";
import { formatDigitalClock, timeToDigital, timeToWords } from "./timeToWords";

describe("timeToWords", () => {
  it.each([
    [3, 0, "sono le tre"],
    [1, 0, "è l'una"],
    [12, 0, "sono le dodici"],
    [0, 0, "sono le dodici"],
    [3, 5, "sono le tre e cinque"],
    [3, 15, "sono le tre e un quarto"],
    [3, 23, "sono le tre e ventitré"],
    [3, 25, "sono le tre e venticinque"],
    [3, 30, "sono le tre e mezza"],
    [1, 30, "è l'una e mezza"],
    [3, 35, "sono le quattro meno venticinque"],
    [3, 37, "sono le quattro meno ventitré"],
    [3, 45, "sono le quattro meno un quarto"],
    [3, 50, "sono le quattro meno dieci"],
    [3, 58, "sono le quattro meno due"],
    [11, 40, "sono le dodici meno venti"],
    [12, 45, "è l'una meno un quarto"],
    [12, 50, "è l'una meno dieci"],
  ])("%i:%i se dice «%s»", (h, m, phrase) => {
    expect(timeToWords(h, m)).toBe(phrase);
  });
});

describe("timeToDigital", () => {
  it.each([
    [3, 0, "sono le tre in punto"],
    [1, 0, "è l'una in punto"],
    [12, 0, "sono le dodici in punto"],
    [3, 5, "sono le tre e cinque"],
    [9, 45, "sono le nove e quarantacinque"],
    [1, 30, "è l'una e trenta"],
  ])("%i:%i se lee «%s»", (h, m, phrase) => {
    expect(timeToDigital(h, m)).toBe(phrase);
  });
});

describe("formatDigitalClock", () => {
  it("muestra la hora con dos dígitos y el 0 como 12", () => {
    expect(formatDigitalClock(3, 5)).toBe("03:05");
    expect(formatDigitalClock(0, 30)).toBe("12:30");
  });
});
