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
  prepositions: [
    "preposizioni", "luogo", "dov'è", "dove sono", "sopra", "sotto",
    "davanti", "dietro", "accanto", "vicino", "lontano", "fronte", "tra",
    "fra", "dentro", "fuori", "sul", "sulla", "nel", "nella", "c'è",
    "ci sono", "non c'è", "tavolo", "sedia", "letto", "divano", "finestra",
    "porta", "borsa", "zaino", "scatola", "chiavi", "cucina", "bagno",
    "ubicar", "dónde está", "hay", "encima", "debajo", "detrás", "delante",
    "al lado", "cerca", "lejos", "entre", "dentro de", "fuera de",
    "forma contraída", "preposición articulada",
  ],
  dates: [
    "giorni", "mesi", "date", "lunedì", "martedì", "mercoledì", "giovedì",
    "venerdì", "sabato", "domenica", "gennaio", "febbraio", "marzo",
    "aprile", "maggio", "giugno", "luglio", "agosto", "settembre",
    "ottobre", "novembre", "dicembre", "primavera", "estate", "autunno",
    "inverno", "primo", "secondo", "terzo", "quarto", "quinto", "sesto",
    "settimo", "ottavo", "nono", "decimo", "oggi", "domani", "ieri",
    "fine settimana", "compleanno", "che giorno", "che data", "quando",
    "días", "meses", "fechas", "lunes", "martes", "miércoles", "jueves",
    "viernes", "sábado", "domingo", "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre", "primavera", "verano", "otoño", "invierno",
    "ordinal", "cumpleaños", "fecha", "estaciones",
  ],
  verbs: [
    "verbi", "uso", "quotidiano", "parlare", "mangiare", "studiare",
    "lavorare", "abitare", "ascoltare", "guardare", "cantare", "ballare",
    "camminare", "comprare", "cucinare", "giocare", "pagare", "lavare",
    "aiutare", "imparare", "insegnare", "chiamare", "cercare", "trovare",
    "pensare", "amare", "arrivare", "tornare", "entrare",
    "leggere", "scrivere", "vedere", "prendere", "bere", "chiedere",
    "rispondere", "vendere", "correre", "credere", "mettere", "vivere",
    "fare", "dormire", "aprire", "partire", "sentire", "capire", "finire",
    "pulire", "preferire", "salire", "uscire", "venire", "infinitivo",
    "verbos", "acciones", "falsos amigos", "mirar", "subir", "salir",
    "buscar", "tomar", "agarrar", "oír", "sentir", "grupo", "are", "ere",
    "ire", "acción",
  ],
  stareGerundio: [
    "stare", "gerundio", "gerund", "sto", "stai", "sta", "stiamo", "state",
    "stanno", "ando", "endo", "parlando", "mangiando", "leggendo",
    "scrivendo", "dormendo", "partendo", "facendo", "bevendo", "dicendo",
    "adesso", "ora", "in questo momento", "come stai", "sto bene",
    "progressivo", "presente progressivo", "progresivo", "gerundio",
    "ahora", "en este momento", "estoy comiendo", "está leyendo",
    "no estoy durmiendo", "qué estás haciendo",
  ],
  jobs: [
    "mestieri", "professioni", "lavoro", "cuoco", "cuoca", "commesso",
    "commessa", "operaio", "operaia", "cameriere", "cameriera", "cassiere",
    "cassiera", "infermiere", "infermiera", "dentista", "farmacista",
    "giornalista", "elettricista", "autista", "cantante", "insegnante",
    "dirigente", "attore", "attrice", "scrittore", "scrittrice", "pittore",
    "pittrice", "pastore", "pastora", "dottore", "dottoressa",
    "professore", "professoressa", "studente", "studentessa", "medico",
    "chirurgo", "veterinario", "veterinaria", "avvocato", "ingegnere",
    "architetto", "poliziotto", "poliziotta", "vigile del fuoco",
    "idraulico", "meccanico", "parrucchiere", "parrucchiera", "barbiere",
    "postino", "postina", "contadino", "contadina", "programmatore",
    "programmatrice", "casalinga", "ospedale", "scuola", "ristorante",
    "negozio", "ufficio", "fabbrica", "banca", "farmacia", "che lavoro",
    "dove lavori", "oficios", "profesiones", "trabajo", "profesión",
    "dottoressa", "enfermero", "médico", "maestro", "obrero", "cajero",
    "a qué te dedicas", "dónde trabajas",
  ],
  vocabulary: [
    "saluti", "presentazioni", "ciao", "salve", "buongiorno",
    "buon pomeriggio", "buonasera", "buonanotte", "arrivederci", "a presto",
    "a domani", "a dopo", "ci vediamo", "come ti chiami", "mi chiamo",
    "come si chiama", "piacere", "piacere mio", "questo è", "questa è",
    "come stai", "come sta", "sto bene", "e tu", "così così", "non c'è male",
    "per favore", "grazie", "prego", "scusa", "scusi", "mi dispiace",
    "saludos", "despedidas", "presentaciones", "cortesía", "hola",
    "adiós", "buenos días", "buenas tardes", "buenas noches", "gracias",
    "de nada", "por favor", "perdón", "lo siento", "mucho gusto",
    "me llamo", "cómo estás", "cómo se llama", "nos vemos", "hasta mañana",
    "usted", "tuteo", "trato formal", "trato informal", "confianza",
  ],
  articles: [
    "articoli", "articolo", "il libro", "lo studente", "lo zaino", "lo yogurt",
    "lo gnocco", "lo psicologo", "l'amico", "l'amica", "gli studenti",
    "gli amici", "le amiche", "un amico", "un'amica", "uno studente",
    "determinativo", "indeterminativo", "senza articolo",
    "artículos", "artículo", "determinativo", "indeterminado", "sin artículo",
    "vocal", "apóstrofo", "consonante",
  ],
  adjectives: [
    "aggettivi", "contrari", "alto", "basso", "grande", "piccolo", "bello",
    "brutto", "buono", "cattivo", "nuovo", "vecchio", "giovane", "anziano",
    "caldo", "freddo", "lungo", "corto", "facile", "difficile", "ricco",
    "povero", "pieno", "vuoto", "veloce", "lento", "magro", "grasso",
    "felice", "triste", "aperto", "chiuso", "chiaro", "scuro", "caro",
    "economico", "pulito", "sporco", "forte", "debole", "largo", "stretto",
    "rosso", "giallo", "nero", "bianco", "azzurro", "grigio", "verde",
    "marrone", "arancione", "blu", "rosa", "viola", "simpatico", "stanco",
    "adjetivos", "contrarios", "concordancia", "colores", "color", "ancho",
    "caliente", "bonito", "feo",
  ],
  possessiveAdjectives: [
    "possessivi", "il mio", "la mia", "i miei", "le mie", "il tuo", "la tua",
    "i tuoi", "le tue", "il suo", "la sua", "i suoi", "le sue", "nostro",
    "nostra", "nostri", "nostre", "vostro", "vostra", "vostri", "vostre",
    "il loro", "la loro", "i loro", "le loro", "questo libro è mio",
    "posesivos", "posesivo", "mi libro", "su casa", "de usted", "de ustedes",
    "de ellos", "de ellas",
  ],
  preposizioniArticolate: [
    "preposizioni articolate", "del professore", "dello studente",
    "dell'amica", "della classe", "dei ragazzi", "degli studenti",
    "delle ragazze", "al bar", "allo", "all'", "alla", "dal dottore",
    "dallo", "dall'", "dalla", "nel", "nello", "nell'", "nella borsa",
    "sul tavolo", "sullo", "sull'", "sulla", "di leslie", "di chi è",
    "con il professore", "per la mamma",
    "preposición articulada", "preposiciones articuladas", "contracción",
    "del profesor", "de quién es", "voy al bar",
  ],
  whQuestions: [
    "parole interrogative", "chi", "che cosa", "che", "cosa", "cos'è",
    "dove", "dov'è", "quando", "come", "com'è", "perché", "quanto",
    "quanta", "quanti", "quante", "quale", "quali", "qual è", "di chi",
    "di dove", "di dov'è", "a che ora", "chi è quella ragazza",
    "quién", "qué", "dónde", "cuándo", "cómo", "por qué", "cuánto",
    "cuánta", "cuántos", "cuántas", "cuál", "cuáles", "de quién",
    "de dónde", "a qué hora",
  ],
  presenteIndicativo: [
    "presente indicativo", "parlare", "parlo", "parli", "parla", "parliamo",
    "parlate", "parlano", "credere", "credo", "credono", "dormire", "dormo",
    "dormono", "capire", "capisco", "capisci", "capisce", "capiamo", "capite",
    "capiscono", "finire", "finisco", "preferire", "pulire", "spedire",
    "cercare", "cerchi", "cerchiamo", "pagare", "paghi", "paghiamo",
    "mangiare", "mangi", "mangiamo", "studiare", "studi", "studiamo",
    "non lavoro il sabato", "lavori a roma", "lavorare", "leggere", "scrivere",
    "partire", "abito", "abitano",
    "presente", "conjugación", "hábito", "hábitos", "negación", "terminación",
    "isc", "desinencia",
  ],
  verbiInfinito: [
    "verbi", "infinito", "mi piace", "mi piacciono", "ti piace", "piacere",
    "voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono", "posso",
    "puoi", "può", "possiamo", "potete", "possono", "devo", "devi", "deve",
    "dobbiamo", "dovete", "devono", "so", "sai", "sa", "sappiamo", "sapete",
    "sanno", "preferisco", "imparo a", "comincio a", "continuo a", "aiuto a",
    "vado a", "vengo a", "riesco a", "finisco di", "smetto di", "decido di",
    "cerco di", "dimentico di", "spero di", "leggere", "mangiare", "studiare",
    "me gusta", "quiero", "puedo", "debo", "sé nadar", "intentar", "dejar de",
    "esperar", "infinitivo", "preposición",
  ],
  irregularVerbs: [
    // Sin el infinitivo andare: esa búsqueda comprueba que el módulo Verbos sigue cerrado.
    "verbi irregolari", "vado", "vai", "va", "andiamo", "andate",
    "vanno", "andato", "fare", "faccio", "fai", "fa", "facciamo", "fate",
    "fanno", "fatto", "dare", "do", "dai", "dà", "diamo", "date", "danno",
    "dato", "stare", "sto", "stai", "sta", "stiamo", "state", "stanno",
    "stato", "dire", "dico", "dici", "dice", "diciamo", "dite", "dicono",
    "detto", "venire", "vengo", "vieni", "viene", "veniamo", "venite",
    "vengono", "venuto", "uscire", "esco", "esci", "esce", "usciamo",
    "uscite", "escono", "uscito", "bere", "bevo", "bevuto", "tenere",
    "tengo", "tenuto", "rimanere", "rimango", "rimasto", "salire", "salgo",
    "salito", "scegliere", "scelgo", "scelto", "sapere", "saputo", "potere",
    "potuto", "volere", "voluto", "dovere", "dovuto", "essere", "sono",
    "avere", "ho", "avuto", "prendere", "preso", "mettere", "messo",
    "leggere", "letto", "scrivere", "scritto", "vedere", "visto", "veduto",
    "aprire", "aperto", "chiudere", "chiuso", "perdere", "perso", "perduto",
    "rispondere", "risposto", "chiedere", "chiesto", "correre", "corso",
    "vivere", "vissuto", "offrire", "offerto", "scendere", "sceso",
    "spendere", "speso", "vincere", "vinto", "ho fatto", "sono andato",
    "participio", "participio passato", "irregular", "irregulares",
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
