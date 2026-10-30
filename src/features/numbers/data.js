export const NUMBERS_0_20 = [
  [0, "zero"], [1, "uno"], [2, "due"], [3, "tre"], [4, "quattro"],
  [5, "cinque"], [6, "sei"], [7, "sette"], [8, "otto"], [9, "nove"],
  [10, "dieci"], [11, "undici"], [12, "dodici"], [13, "tredici"],
  [14, "quattordici"], [15, "quindici"], [16, "sedici"], [17, "diciassette"],
  [18, "diciotto"], [19, "diciannove"], [20, "venti"],
];

export const NUMBERS_21_29 = [
  [21, "ventuno"], [22, "ventidue"], [23, "ventitré"], [24, "ventiquattro"],
  [25, "venticinque"], [26, "ventisei"], [27, "ventisette"], [28, "ventotto"],
  [29, "ventinove"],
];

export const TENS = [
  [30, "trenta"], [40, "quaranta"], [50, "cinquanta"], [60, "sessanta"],
  [70, "settanta"], [80, "ottanta"], [90, "novanta"],
];

export const BIG_NUMBERS = [
  ["100", "cento"],
  ["1.000", "mille"],
  ["10.000", "diecimila"],
  ["100.000", "centomila"],
  ["1.000.000", "un milione"],
  ["1.000.000.000", "un miliardo"],
];

export const COMPOUND_EXAMPLES = [
  ["200", "duecento"],
  ["252", "duecentocinquantadue"],
  ["999", "novecentonovantanove"],
];

export const ROOM_NUMBERS = [
  { label: "Cellulare", value: "333" },
  { label: "Camera", value: "013" },
  { label: "Camera", value: "103" },
];

// ── Letters ──────────────────────────────────────────────────────────
// El alfabeto italiano tradicional tiene 21 letras; se suman 5 letras
// «extranjeras» que aparecen principalmente en préstamos y nombres propios. De
// cada letra guardamos su NOMBRE (cómo se dice al deletrear, que es distinto
// del sonido que hace dentro de una palabra), en IPA, una lectura aproximada
// para hispanohablantes y la ciudad con la que se deletrea («A come Ancona»).
export const ALPHABET = [
  { letter: "A", name: "a",        ipa: "/a/",          say: "a",       word: "acqua",   city: "Ancona",      vowel: true },
  { letter: "B", name: "bi",       ipa: "/bi/",         say: "bi",      word: "bene",    city: "Bologna" },
  { letter: "C", name: "ci",       ipa: "/tʃi/",        say: "chi",     word: "casa",    city: "Como" },
  { letter: "D", name: "di",       ipa: "/di/",         say: "di",      word: "donna",   city: "Domodossola" },
  { letter: "E", name: "e",        ipa: "/e/",          say: "e",       word: "erba",    city: "Empoli",      vowel: true },
  { letter: "F", name: "effe",     ipa: "/ˈɛffe/",      say: "éffe",    word: "fiore",   city: "Firenze" },
  { letter: "G", name: "gi",       ipa: "/dʒi/",        say: "yi",      word: "gatto",   city: "Genova" },
  { letter: "H", name: "acca",     ipa: "/ˈakka/",      say: "acca",    word: "hotel",   city: "Hotel" },
  { letter: "I", name: "i",        ipa: "/i/",          say: "i",       word: "isola",   city: "Imola",       vowel: true },
  { letter: "L", name: "elle",     ipa: "/ˈɛlle/",      say: "élle",    word: "luna",    city: "Livorno" },
  { letter: "M", name: "emme",     ipa: "/ˈɛmme/",      say: "émme",    word: "mare",    city: "Milano" },
  { letter: "N", name: "enne",     ipa: "/ˈɛnne/",      say: "énne",    word: "notte",   city: "Napoli" },
  { letter: "O", name: "o",        ipa: "/ɔ/",          say: "o",       word: "ora",     city: "Otranto",     vowel: true },
  { letter: "P", name: "pi",       ipa: "/pi/",         say: "pi",      word: "pane",    city: "Palermo" },
  { letter: "Q", name: "cu",       ipa: "/ku/",         say: "cu",      word: "quadro",  city: "Quarto" },
  { letter: "R", name: "erre",     ipa: "/ˈɛrre/",      say: "érre",    word: "rosa",    city: "Roma" },
  { letter: "S", name: "esse",     ipa: "/ˈɛsse/",      say: "ésse",    word: "sole",    city: "Savona" },
  { letter: "T", name: "ti",       ipa: "/ti/",         say: "ti",      word: "tavolo",  city: "Torino" },
  { letter: "U", name: "u",        ipa: "/u/",          say: "u",       word: "uva",     city: "Udine",       vowel: true },
  { letter: "V", name: "vu",       ipa: "/vu/",         say: "vu",      word: "vino",    city: "Venezia" },
  { letter: "Z", name: "zeta",     ipa: "/ˈdzɛta/",     say: "dzéta",   word: "zucchero", city: "Zara" },
  // Letras extranjeras: frecuentes en préstamos y nombres propios.
  { letter: "J", name: "i lunga",    ipa: "/i ˈlunɡa/",   say: "i lunga",    word: "jeans",    city: "Jolly",      foreign: true },
  { letter: "K", name: "cappa",      ipa: "/ˈkappa/",     say: "cappa",      word: "kiwi",     city: "Kursaal",    foreign: true },
  { letter: "W", name: "doppia vu",  ipa: "/ˈdoppja vu/", say: "doppia vu",  word: "web",      city: "Washington", foreign: true },
  { letter: "X", name: "ics",        ipa: "/iks/",        say: "ics",        word: "xilofono", city: "Xeres",      foreign: true },
  { letter: "Y", name: "ipsilon",    ipa: "/ˈipsilon/",   say: "ípsilon",    word: "yogurt",   city: "York",       foreign: true },
];

export const VOWELS = ALPHABET.filter(l => l.vowel);
export const CONSONANTS = ALPHABET.filter(l => !l.vowel && !l.foreign);
export const FOREIGN_LETTERS = ALPHABET.filter(l => l.foreign);

// Sonidos frecuentes: el italiano escribe como suena, pero estas combinaciones
// se leen distinto de lo que sugiere el español.
export const PRONUNCIATION_GROUPS = [
  { icon: "🍦", title: "C y G suaves", color: "#f472b6", rows: [
    ["ce, ci → /tʃ/", "cena, cinema"],
    ["ge, gi → /dʒ/", "gelato, giorno"],
  ] },
  { icon: "🪨", title: "C y G fuertes", color: "#34d399", rows: [
    ["ca, co, cu, che, chi → /k/", "casa, chiave"],
    ["ga, go, gu, ghe, ghi → /ɡ/", "gatto, spaghetti"],
  ] },
  { icon: "🏫", title: "SC", color: "#38bdf8", rows: [
    ["sce, sci → /ʃ/", "pesce, sci"],
    ["sca, sco, scu, sche, schi → /sk/", "scuola, schiena"],
  ] },
  { icon: "🍝", title: "GN y GLI", color: "#c084fc", rows: [
    ["gn → /ɲ/", "gnocchi, bagno"],
    ["gli → /ʎ/", "famiglia, figlio"],
  ] },
  { icon: "🍕", title: "S y Z", color: "#fbbf24", rows: [
    ["s → /s/ o /z/", "sole, rosa"],
    ["z → /ts/ o /dz/", "pizza, zero"],
  ] },
  { icon: "🤫", title: "H muda", color: "#fb923c", rows: [
    ["h no suena", "ho, hanno, chi"],
  ] },
  { icon: "👯", title: "Consonantes dobles", color: "#60a5fa", rows: [
    ["nono ≠ nonno", "noveno ≠ abuelo"],
    ["sete ≠ sette", "sed ≠ siete"],
    ["pala ≠ palla", "pala ≠ pelota"],
  ] },
];

export const SPELLING_EXAMPLES = [
  { q: "Come si scrive il tuo nome?", a: "O-C-T-A-V-I-O", esp: "¿Cómo se escribe tu nombre?" },
  { q: "Puoi ripetere, per favore?", a: "Certo: L-E-S-L-I-E", esp: "¿Puedes repetirlo, por favor?" },
  { q: "Come si scrive «mamma»?", a: "M-A-doppia emme-A", esp: "Las letras repetidas se dicen con «doppia»" },
];
