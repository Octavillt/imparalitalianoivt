import { NUMBERS_0_20, NUMBERS_21_29, TENS } from "./data";

const ONES = Object.fromEntries(NUMBERS_0_20);
const TWENTIES = Object.fromEntries(NUMBERS_21_29);
const TENS_MAP = Object.fromEntries(TENS);

export const MAX_NUMBER = 1_000_000_000;

const SCALES = [
  [1_000_000_000, "miliardo", "miliardi"],
  [1_000_000, "milione", "milioni"],
];

function belowHundred(n) {
  if (n <= 20) return ONES[n];
  if (n < 30) return TWENTIES[n];
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  if (ones === 0) return TENS_MAP[tens];
  // La decena pierde su vocal final ante uno y otto: trentuno, ottantotto.
  if (ones === 1 || ones === 8) return `${TENS_MAP[tens].replace(/a$/, "")}${ONES[ones]}`;
  // Tre lleva acento al cerrar la palabra compuesta: trentatré.
  if (ones === 3) return `${TENS_MAP[tens]}tré`;
  return `${TENS_MAP[tens]}${ONES[ones]}`;
}

function belowThousand(n) {
  if (n < 100) return belowHundred(n);
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  let prefix = hundreds === 1 ? "cento" : `${ONES[hundreds]}cento`;
  if (rest === 0) return prefix;
  // cento pierde la o ante otto y ottanta: centotto, centottanta.
  if (rest === 8 || (rest >= 80 && rest < 90)) prefix = prefix.replace(/o$/, "");
  // Tre cierra la palabra compuesta: lleva acento (centotré).
  return `${prefix}${rest === 3 ? "tré" : belowThousand(rest)}`;
}

function belowMillion(n) {
  if (n < 1000) return belowThousand(n);
  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  // El número de miles deja de cerrar la palabra: pierde el acento de tré
  // (ventitré → ventitremila). El resto se pega tal cual: milleuno.
  const prefix = thousands === 1
    ? "mille"
    : `${belowThousand(thousands).replace(/é$/, "e")}mila`;
  if (rest === 0) return prefix;
  // Aquí sí cierra: milletré.
  return `${prefix}${rest === 3 ? "tré" : belowThousand(rest)}`;
}

export function numberToWords(n) {
  if (n === 0) return ONES[0];
  if (n < 0) return `meno ${numberToWords(-n)}`;
  if (n === MAX_NUMBER) return "un miliardo";

  for (const [value, single, plural] of SCALES) {
    if (n >= value) {
      const count = Math.floor(n / value);
      const rest = n % value;
      // Los millones y miliardos van separados por espacio.
      const scaleWord = count === 1 ? `un ${single}` : `${belowMillion(count)} ${plural}`;
      return rest === 0 ? scaleWord : `${scaleWord} ${numberToWords(rest)}`;
    }
  }

  return belowMillion(n);
}
