import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_BASICO5, TOPICS_VERBOS, TOPICS_QUIZ } from "./topics";
import { isTopicAvailable } from "./topicAvailability";

// Índice de búsqueda global: por cada tema, guardamos su label + un puñado
// de palabras clave (italiano/español) representativas de su contenido, para
// poder buscar por tema completo y saltar directo a él con goTo().
// Si se agrega contenido nuevo a un data.js, conviene sumar aquí sus
// palabras más relevantes (no hace falta ser exhaustivo).

const topicMeta = {};
[...TOPICS, ...TOPICS_BASICO2, ...TOPICS_BASICO3, ...TOPICS_BASICO4, ...TOPICS_BASICO5, ...TOPICS_VERBOS, ...TOPICS_QUIZ].forEach(t => { topicMeta[t.id] = t; });

const SEARCH_KEYWORDS = {
  numbers: [
    "numeri", "numero", "zero", "uno", "due", "tre", "quattro", "cinque", "sei",
    "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici",
    "quattordici", "quindici", "sedici", "diciassette", "diciotto",
    "diciannove", "venti", "ventuno", "ventitré", "trenta", "quaranta",
    "cinquanta", "sessanta", "settanta", "ottanta", "novanta", "cento",
    "duecento", "mille", "mila", "milione", "miliardo",
    "números", "número", "cero", "contar", "decenas", "centenas",
    "lettere", "lettera", "alfabeto", "vocali", "consonanti", "come si scrive",
    "doppia", "acca", "zeta", "erre", "i lunga", "cappa", "doppia vu",
    "letras", "abecedario", "vocales", "consonantes", "deletrear",
    "ancona", "bologna", "como", "firenze", "genova", "livorno", "milano",
    "napoli", "roma", "torino", "venezia",
    "cellulare", "camera", "telefono", "habitación", "teléfono",
    "casa", "cena", "gelato", "gnocchi", "pizza", "scuola",
  ],
  time: [
    "che ora è", "che ore sono", "ora", "ore", "l'una", "sono le", "è l'una",
    "e un quarto", "e mezza", "e mezzo", "meno un quarto", "in punto",
    "mezzogiorno", "mezzanotte", "orario", "alle", "all'una", "a che ora",
    "quindici", "trenta",
    "hora", "horas", "reloj", "minutos", "cuarto", "media", "en punto",
    "mediodía", "medianoche", "horarios", "24 horas",
  ],
};

function buildIndex() {
  const entries = [];
  [
    { levelId: "basico1", topics: TOPICS },
    { levelId: "basico2", topics: TOPICS_BASICO2 },
    { levelId: "basico3", topics: TOPICS_BASICO3 },
    { levelId: "basico4", topics: TOPICS_BASICO4 },
    { levelId: "basico5", topics: TOPICS_BASICO5 },
    { levelId: "verbos", topics: TOPICS_VERBOS },
    { levelId: "quiz", topics: TOPICS_QUIZ },
  ].forEach(({ levelId, topics }) => {
    topics.forEach(t => {
      entries.push({
        levelId,
        topicId: t.id,
        label: t.label,
        italiano: t.italiano,
        color: t.color,
        availableUntil: t.availableUntil,
        keywords: [t.italiano, ...(SEARCH_KEYWORDS[t.id] ?? [])].filter(Boolean),
      });
    });
  });
  return entries;
}

export const SEARCH_INDEX = buildIndex();

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Busca temas cuyo label o keywords contengan el query. Prioriza coincidencias
// en el label del tema y luego las que matchean por contenido/keyword.
export function searchTopics(query, now = Date.now()) {
  const q = normalize(query.trim());
  if (!q) return [];

  const results = [];
  for (const entry of SEARCH_INDEX) {
    if (!isTopicAvailable(entry, now)) continue;
    const label = normalize(entry.label);
    const labelMatch = label.includes(q) || normalize(entry.italiano ?? "").includes(q);
    const matchedKeyword = !labelMatch
      ? entry.keywords.find(k => normalize(k).includes(q))
      : null;

    if (labelMatch || matchedKeyword) {
      results.push({
        ...entry,
        matchedKeyword,
        priority: labelMatch ? 0 : 1,
      });
    }
  }

  results.sort((a, b) => a.priority - b.priority || a.label.localeCompare(b.label));
  return results;
}
