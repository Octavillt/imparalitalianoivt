import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpellingBox from "./SpellingBox";
import { spellWord } from "./spellWord";
import { ALPHABET, CONSONANTS, FOREIGN_LETTERS, VOWELS } from "./data";

describe("alfabeto italiano", () => {
  it("tiene 21 letras tradicionales y 5 extranjeras", () => {
    expect(ALPHABET).toHaveLength(26);
    expect(FOREIGN_LETTERS.map(letter => letter.letter)).toEqual(["J", "K", "W", "X", "Y"]);
    expect(VOWELS.map(letter => letter.letter)).toEqual(["A", "E", "I", "O", "U"]);
    expect(CONSONANTS).toHaveLength(16);
  });

  it("da nombre, pronunciación, ciudad y palabra a cada letra", () => {
    for (const letter of ALPHABET) {
      for (const field of ["name", "ipa", "say", "word", "city"]) expect(letter[field]).toBeTruthy();
    }
  });
});

describe("spellWord", () => {
  it("conserva la ñ de los nombres mexicanos", () => {
    expect(spellWord("Peña").map(item => item.say)).toEqual(["pi", "e", "enne con la tilde", "a"]);
    expect(spellWord("Muñoz").at(2)).toMatchObject({ letter: "Ñ", say: "enne con la tilde" });
  });

  it("da el nombre italiano y la ciudad de cada letra", () => {
    expect(spellWord("ciao").slice(0, 2)).toEqual([
      { letter: "C", say: "ci", city: "Como" },
      { letter: "I", say: "i", city: "Imola" },
    ]);
  });

  it("agrupa las letras repetidas con «doppia»", () => {
    expect(spellWord("mamma").map(item => item.say)).toEqual(["emme", "a", "doppia emme", "a"]);
    expect(spellWord("mamma")[2].letter).toBe("MM");
  });

  it("cuenta las letras acentuadas como su letra base", () => {
    expect(spellWord("perché").map(item => item.letter).join("")).toBe("PERCHE");
    expect(spellWord("città").at(-1)).toMatchObject({ letter: "A", say: "a con l'accento grave" });
    expect(spellWord("perché").at(-1)).toMatchObject({ letter: "E", say: "e con l'accento acuto" });
    expect(spellWord("caffè").map(item => item.say)).toEqual(["ci", "a", "doppia effe", "e con l'accento grave"]);
  });

  it("deletrea también las letras extranjeras", () => {
    expect(spellWord("jazz").map(item => item.say)).toEqual(["i lunga", "a", "doppia zeta"]);
  });

  it("ignora espacios, números y signos", () => {
    expect(spellWord("¡ana!").map(item => item.letter)).toEqual(["A", "N", "A"]);
    expect(spellWord("1 2 3")).toEqual([]);
  });
});

describe("SpellingBox", () => {
  it("deletrea la palabra que escribe el usuario", async () => {
    const user = userEvent.setup();
    render(<SpellingBox />);

    const input = screen.getByLabelText(/Escribe una palabra o tu nombre/);
    await user.clear(input);
    await user.type(input, "ana");

    expect(screen.getByText("N")).toBeInTheDocument();
    expect(screen.getByText("enne")).toBeInTheDocument();
    expect(screen.getByText(/come Napoli/)).toBeInTheDocument();
  });
});
