import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_BASICO5, TOPICS_VERBOS, TOPICS_QUIZ } from "./topics";
import { LEVELS } from "./levels";
import { isTopicAvailable } from "./topicAvailability";

// Un tema de un nivel bloqueado (available: false) no se puede abrir: lo
// buscable solo es lo que la navegación permite alcanzar.
const LEVEL_AVAILABLE = Object.fromEntries(LEVELS.map(level => [level.id, level.available !== false]));

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
  essereAvere: [
    "essere", "avere", "sono", "sei", "è", "siamo", "siete", "ho", "hai", "ha",
    "abbiamo", "avete", "hanno", "non", "sì", "no", "lei", "fame", "sete",
    "sonno", "freddo", "caldo", "fretta", "ragione", "trent'anni", "h muda",
    "cansado", "stanco", "stanca", "casa", "roma",
    "ser", "estar", "tener", "soy", "eres", "es", "somos", "son", "estoy",
    "negación", "pregunta", "edad", "hambre", "sed", "sueño", "frío", "calor",
    "prisa", "razón", "usted", "cortesía",
  ],
  countries: [
    "paesi", "nazionalità", "di dove sei", "di dov'è", "dove abiti", "dove abita",
    "sono di", "vengo dal", "vengo da", "abito", "messico", "italia", "spagna",
    "argentina", "colombia", "perù", "cile", "venezuela", "brasile",
    "stati uniti", "russia", "australia", "india", "egitto", "germania",
    "grecia", "svizzera", "turchia", "regno unito", "francia", "canada",
    "portogallo", "cina", "giappone", "corea del sud", "paesi bassi", "cuba",
    "italiano", "spagnolo", "francese", "tedesco", "roma", "milano", "firenze",
    "venezia", "napoli", "torino", "bologna", "londra", "parigi",
    "nuova york", "città del messico",
    "países", "nacionalidades", "de dónde eres", "dónde vives", "residencia",
    "vivo", "ciudad", "gentilicio", "mayúscula", "nacionalidad",
  ],
  family: [
    "famiglia", "madre", "mamma", "padre", "papà", "genitori", "fratello",
    "sorella", "nonno", "nonna", "nonni", "zio", "zia", "cugino", "cugina",
    "figlio", "figlia", "figli", "marito", "moglie", "nipote", "suocero",
    "suocera", "genero", "nuora", "cognato", "cognata", "patrigno",
    "matrigna", "padrino", "madrina", "fidanzato", "fidanzata", "parenti",
    "mio", "mia", "miei", "mie", "tuo", "tua", "tuoi", "sua", "loro",
    "questa è", "questo è", "questi sono",
    "familia", "madre", "padre", "hermano", "hermana", "abuelo", "abuela",
    "tío", "tía", "primo", "prima", "hijo", "hija", "esposo", "esposa",
    "sobrino", "sobrina", "nieto", "nieta", "suegro", "suegra", "yerno",
    "nuera", "cuñado", "cuñada", "padrastro", "madrastra", "padrino",
    "madrina", "novio", "novia", "parientes", "posesivo", "presentar",
  ],
  plural: [
    "plurale", "maschile", "femminile", "libro", "libri", "casa", "case",
    "fiore", "fiori", "notte", "notti", "città", "caffè", "università",
    "film", "bar", "sport", "amica", "amiche", "riga", "righe", "gioco",
    "giochi", "lago", "laghi", "amico", "figlio", "figli", "zio", "zii",
    "uomo", "uomini", "mano", "mani", "problema", "cinema", "sistema",
    "latte", "sale", "miele", "gente", "ragazzo", "ragazza", "bambino",
    "bambina",
    "plural", "género", "masculino", "femenino", "artículo", "terminación",
    "acento", "excepción", "irregular", "extranjeras",
  ],
  demonstratives: [
    "questo", "questa", "questi", "queste", "quest'anno", "quello", "quella",
    "quelli", "quelle", "quel", "quei", "quegli", "quell'", "che cos'è",
    "chi", "qui", "qua", "lì", "là",
    "demostrativos", "este", "esta", "estos", "estas", "ese", "esa", "aquel",
    "aquella", "esos", "esas", "aquellos", "aquellas", "aquí", "allí",
    "señalar", "distancia", "cerca", "lejos",
  ],
  fruits: [
    "frutta", "verdura", "mela", "banana", "arancia", "fragola", "uva",
    "anguria", "ananas", "mango", "pera", "ciliegia", "pesca", "limone",
    "cocco", "melone", "kiwi", "mirtillo", "avocado", "pomodoro", "lime",
    "melograno", "carota", "broccoli", "lattuga", "cetriolo", "cipolla",
    "aglio", "patata", "patata dolce", "mais", "peperoncino", "peperone",
    "fungo", "melanzana", "piselli", "fagioli", "zucca", "oliva", "zenzero",
    "insalata", "spinaci", "zucchina", "mele", "carote", "pomodori",
    "funghi", "ciliegie", "arance", "pesche", "chilo", "vorrei",
    "frutas", "verduras", "manzana", "plátano", "naranja", "fresa", "sandía",
    "piña", "cereza", "durazno", "limón", "coco", "melón", "arándano",
    "aguacate", "jitomate", "granada", "zanahoria", "brócoli", "lechuga",
    "pepino", "cebolla", "ajo", "papa", "camote", "maíz", "chile",
    "pimiento", "hongo", "berenjena", "chícharos", "frijoles", "calabaza",
    "aceituna", "jengibre", "ensalada", "espinacas", "calabacita",
    "colectivo", "frutería",
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
    if (!isTopicAvailable(entry, now) || !LEVEL_AVAILABLE[entry.levelId]) continue;
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
