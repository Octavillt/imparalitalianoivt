import { ALPHABET } from "./data";

const BY_LETTER = Object.fromEntries(ALPHABET.map(l => [l.letter, l]));

// Las letras acentuadas muestran su letra base (è → E, à → A), pero el
// deletreo conserva el tipo de acento. La Ñ de los nombres mexicanos se
// describe como «enne con la tilde» y usa la ciudad de la N. Se ignoran
// espacios, signos, números y letras no contempladas en este alfabeto.
// Las letras repetidas seguidas se agrupan porque se dicen con «doppia»:
// mamma → M-A-doppia emme-A.
const BASE_LETTER = {
  À: "A", Á: "A", È: "E", É: "E", Ì: "I", Í: "I", Ò: "O", Ó: "O", Ù: "U", Ú: "U",
};

export function spellWord(word) {
  const letters = word.normalize("NFC").toUpperCase().split("")
    .filter(ch => ch === "Ñ" || BY_LETTER[BASE_LETTER[ch] ?? ch]);
  const grouped = [];
  for (const ch of letters) {
    const last = grouped[grouped.length - 1];
    if (last && last.letter === ch && last.count === 1) {
      last.count = 2;
      continue;
    }
    grouped.push({ letter: ch, count: 1 });
  }
  return grouped.map(({ letter, count }) => {
    const base = BASE_LETTER[letter] ?? letter;
    const entry = BY_LETTER[base === "Ñ" ? "N" : base];
    const name = base === "Ñ" ? "enne con la tilde" : entry.name;
    const accent = "ÀÈÌÒÙ".includes(letter) ? " con l'accento grave"
      : "ÁÉÍÓÚ".includes(letter) ? " con l'accento acuto" : "";
    return {
      letter: count === 2 ? `${base}${base}` : base,
      say: `${count === 2 ? "doppia " : ""}${name}${accent}`,
      city: entry.city,
    };
  });
}
