import { ALPHABET } from "./data";

const BY_LETTER = Object.fromEntries(ALPHABET.map(l => [l.letter, l]));

// Las letras acentuadas cuentan como su letra base (è → E, à → A). Solo
// sobreviven las letras del alfabeto italiano (las 21 tradicionales más las
// 5 extranjeras): fuera espacios, signos, números y la Ñ, que no existe ahí.
// Las letras repetidas seguidas se agrupan porque se dicen con «doppia»:
// mamma → M-A-doppia emme-A.
const BASE_LETTER = {
  À: "A", Á: "A", È: "E", É: "E", Ì: "I", Í: "I", Ò: "O", Ó: "O", Ù: "U", Ú: "U",
};

export function spellWord(word) {
  const letters = word.toUpperCase().split("").map(ch => BASE_LETTER[ch] ?? ch).filter(ch => BY_LETTER[ch]);
  const grouped = [];
  for (const ch of letters) {
    const last = grouped[grouped.length - 1];
    if (last && last.letter === ch && last.count === 1) {
      last.count = 2;
      continue;
    }
    grouped.push({ letter: ch, count: 1 });
  }
  return grouped.map(({ letter, count }) => ({
    letter: count === 2 ? `${letter}${letter}` : letter,
    say: count === 2 ? `doppia ${BY_LETTER[letter].name}` : BY_LETTER[letter].name,
    city: BY_LETTER[letter].city,
  }));
}
