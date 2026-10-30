import { numberToWords } from "../numbers/numberToWords";

// Los relojes son de 12 horas sin a.m./p.m.: la hora 0 y la 12 se leen
// «sono le dodici»; por eso no dicen mezzogiorno ni mezzanotte.
function hourParts(h) {
  const hour = ((h % 12) + 12) % 12;
  if (hour === 0) return { verb: "sono le", hour: "dodici" };
  if (hour === 1) return { verb: "è", hour: "l'una" };
  return { verb: "sono le", hour: numberToWords(hour) };
}

// Los casos especiales llevan nombre propio; el resto se cuenta con numeri.
const minuteAfter = m => (m === 15 ? "un quarto" : m === 30 ? "mezza" : numberToWords(m));
const minuteBefore = r => (r === 15 ? "un quarto" : numberToWords(r));

export function timeToWords(h, m) {
  if (m === 0) {
    const { verb, hour } = hourParts(h);
    return `${verb} ${hour}`;
  }
  if (m <= 30) {
    // Minutos 1–30: la hora actual + e + minutos.
    const { verb, hour } = hourParts(h);
    return `${verb} ${hour} e ${minuteAfter(m)}`;
  }
  // Minutos 31–59: la hora siguiente + meno + lo que falta.
  const { verb, hour } = hourParts(h + 1);
  return `${verb} ${hour} meno ${minuteBefore(60 - m)}`;
}

// Lectura digital: hora + minutos tal cual se leen los números.
export function timeToDigital(h, m) {
  const { verb, hour } = hourParts(h);
  if (m === 0) return `${verb} ${hour} in punto`;
  return `${verb} ${hour} e ${numberToWords(m)}`;
}

export function formatDigitalClock(h, m) {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
