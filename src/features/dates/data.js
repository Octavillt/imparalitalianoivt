// Giorni, mesi e date: días y meses en minúscula, la fecha con il + número,
// los ordinales del 1 al 10 y el año leído como número. El orden numérico de
// las fechas sigue el formato de México: día/mes/año.
export const DAYS = [
  ["lunedì", "lunes"],
  ["martedì", "martes"],
  ["mercoledì", "miércoles"],
  ["giovedì", "jueves"],
  ["venerdì", "viernes"],
  ["sabato", "sábado"],
  ["domenica", "domingo"],
];

// Fin de semana para el borde rosa de la lista.
export const WEEKEND = ["sabato", "domenica"];

export const MONTHS = [
  ["gennaio", "enero"],
  ["febbraio", "febrero"],
  ["marzo", "marzo"],
  ["aprile", "abril"],
  ["maggio", "mayo"],
  ["giugno", "junio"],
  ["luglio", "julio"],
  ["agosto", "agosto"],
  ["settembre", "septiembre"],
  ["ottobre", "octubre"],
  ["novembre", "noviembre"],
  ["dicembre", "diciembre"],
];

// Ordinales del 1 al 10: concuerdan en género (la prima volta).
export const ORDINALS = [
  [1, "primo", "primero"],
  [2, "secondo", "segundo"],
  [3, "terzo", "tercero"],
  [4, "quarto", "cuarto"],
  [5, "quinto", "quinto"],
  [6, "sesto", "sexto"],
  [7, "settimo", "séptimo"],
  [8, "ottavo", "octavo"],
  [9, "nono", "noveno"],
  [10, "decimo", "décimo"],
];

// Cómo decir una fecha: il + número + mes; solo el día 1 va en ordinal.
export const DATE_EXAMPLES = [
  { date: "30/10", phrase: "Oggi è il 30 ottobre.", esp: "Hoy es 30 de octubre — il + número + mes." },
  { date: "1/5", phrase: "Il primo maggio.", esp: "El 1 de mayo — solo el día 1 usa ordinal: il primo." },
  { date: "8/3", phrase: "L'8 marzo.", esp: "El 8 de marzo — ante vocal, il pasa a l'." },
  { date: "11/9", phrase: "L'11 settembre.", esp: "El 11 de septiembre — también ante vocal: l'11." },
  { date: "3/4", phrase: "Il mio compleanno è il 3 aprile.", esp: "Mi cumpleaños es el 3 de abril." },
];

export const SEASONS = [
  ["la primavera", "la primavera", ["marzo", "aprile", "maggio"]],
  ["l'estate", "el verano", ["giugno", "luglio", "agosto"]],
  ["l'autunno", "el otoño", ["settembre", "ottobre", "novembre"]],
  ["l'inverno", "el invierno", ["dicembre", "gennaio", "febbraio"]],
];

// Años: se leen como un número entero, con el artículo il.
export const YEAR_EXAMPLES = [
  { year: "2026", phrase: "il duemilaventisei", esp: "el dos mil veintiséis" },
  { year: "1998", phrase: "il millenovecentonovantotto", esp: "el mil novecientos noventa y ocho" },
];

// Palabras de tiempo que acompañan las fechas.
export const TIME_WORDS = [
  ["oggi", "hoy"],
  ["domani", "mañana"],
  ["ieri", "ayer"],
  ["il fine settimana", "el fin de semana"],
];

export const PRACTICE = [
  { question: "Completa: Oggi è ___ 30 ottobre. (artículo)", answers: ["il"], hint: "Va con il + número", explanation: "Oggi è il 30 ottobre = Hoy es 30 de octubre. La fecha lleva il + número + mes." },
  { question: "Completa: Il mio compleanno è il 3 ___.", answers: ["aprile"], hint: "Abril en italiano", explanation: "Il mio compleanno è il 3 aprile = Mi cumpleaños es el 3 de abril." },
  { question: "Completa: Oggi è ___ (lunes).", answers: ["lunedì", "lunedi"], hint: "Termina en -ì con acento", explanation: "Oggi è lunedì = Hoy es lunes. Los días llevan acento en la í final (salvo sabato y domenica)." },
  { question: "Elige la forma correcta: (lunedì / il lunedì) vado al lavoro. (cada semana)", answers: ["il lunedì", "Il lunedì"], hint: "Con artículo es cada semana", explanation: "Il lunedì vado al lavoro = Los lunes voy al trabajo (cada semana). Lunedì sin artículo es un lunes concreto." },
  { question: "Escribe en italiano: El 1 de mayo.", answers: ["Il primo maggio", "Il primo maggio."], hint: "El día 1 va en ordinal", explanation: "El 1 de mayo = Il primo maggio. Solo el día 1 usa ordinal: il primo." },
  { question: "Escribe en italiano: El 8 de marzo.", answers: ["L'8 marzo", "l'8 marzo", "L'8 marzo."], hint: "Il pasa a l' ante vocal", explanation: "El 8 de marzo = L'8 marzo. Ante vocal, il se contrae: l'8." },
  { question: "Escribe en italiano: el año 2026.", answers: ["il duemilaventisei", "Il duemilaventisei"], hint: "Se lee como número entero", explanation: "El año 2026 se lee il duemilaventisei, como un número entero." },
  { question: "¿Qué fecha es «il 30/10/2026» en formato numérico? Escribe día/mes/año con cifras.", answers: ["30/10/2026"], hint: "Igual que en México", explanation: "En italiano las fechas numéricas van día/mes/año, como en México: 30/10/2026." },
  { question: "Completa: Che ___ è oggi? (pregunta por el día)", answers: ["giorno"], hint: "Palabra «día»", explanation: "Che giorno è oggi? = ¿Qué día es hoy?" },
  { question: "Traduce al italiano: ¿Cuándo es tu cumpleaños?", answers: ["Quando è il tuo compleanno?", "Quando è il tuo compleanno"], hint: "Quando = cuándo", explanation: "¿Cuándo es tu cumpleaños? = Quando è il tuo compleanno?" },
  { question: "Traduce al italiano: Hoy es jueves.", answers: ["Oggi è giovedì", "Oggi è giovedì."], hint: "Jueves lleva acento", explanation: "Hoy es jueves = Oggi è giovedì." },
  { question: "Elige la forma correcta: (primo / la prima) volta. (la primera vez)", answers: ["la prima"], hint: "Debe concordar con volta", explanation: "La prima volta = la primera vez. Los ordinales concuerdan: primo → la prima." },
  { question: "Completa: ___ è giovedì? (¿qué día es hoy?)", answers: ["Che giorno"], hint: "«Qué» + «día»", explanation: "Che giorno è oggi? = ¿Qué día es hoy?" },
  { question: "Traduce al español: domani.", answers: ["mañana"], answerLang: "es", hint: "Palabra de tiempo", explanation: "domani = mañana." },
  { question: "Traduce al español: il fine settimana.", answers: ["el fin de semana"], answerLang: "es", hint: "Fine = fin", explanation: "il fine settimana = el fin de semana." },
];
