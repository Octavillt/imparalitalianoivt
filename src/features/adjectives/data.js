// Aggettivi e contrari: concordancia en género y número, posición, los
// casos especiales (bello, buono), los contrarios y los colores.
const es = t => ({ t, r: "essere" });
const adj = t => ({ t, r: "adj" });
const art = t => ({ t, r: "art" });
const masc = t => ({ t, r: "masc" });
const fem = t => ({ t, r: "fem" });

// Los tres patrones de concordancia del adjetivo italiano.
export const AGREEMENT = [
  {
    icon: "4️⃣", title: "Cuatro formas",
    rule: "Los adjetivos en -o tienen una forma por género y número.",
    forms: "alto · alta · alti · alte",
    example: "un ragazzo alto, una ragazza alta",
    esp: "un chico alto, una chica alta",
  },
  {
    icon: "2️⃣", title: "Dos formas",
    rule: "Los adjetivos en -e no distinguen género en singular; el plural va en -i.",
    forms: "grande · grandi / felice · felici",
    example: "un libro grande, una casa grande",
    esp: "un libro grande, una casa grande",
  },
  {
    icon: "1️⃣", title: "Una sola forma",
    rule: "Algunos colores no cambian de forma: valen igual en masculino, femenino y plural.",
    forms: "blu · rosa · viola",
    example: "una macchina blu, i fiori rosa",
    esp: "un carro azul, las flores rosas",
  },
];

// Los adjetivos en -co conservan la c en el masculino plural.
export const CO_RULES = [
  { pair: "simpatico / simpatica", forms: "simpatico · simpatici · simpatica · simpatiche", esp: "simpático / simpática" },
  { pair: "stanco / stanca", forms: "stanco · stanchi · stanca · stanche", esp: "cansado / cansada" },
];

// El plural masculino sirve también para grupos mixtos.
export const MIXED_GROUP = { pts: [{ t: "Octavio e Leslie", r: "subject" }, " ", es("sono"), " ", adj("stanchi"), "."], esp: "Octavio y Leslie están cansados." };

// Posición normal: después del sustantivo.
export const AFTER_NOUN = [
  { pts: [art("una"), " ", fem("macchina"), " ", adj("rossa"), "."], esp: "Un carro rojo." },
  { pts: [art("un"), " ", masc("ragazzo"), " ", adj("alto"), "."], esp: "Un chico alto." },
  { pts: [art("una"), " ", fem("casa"), " ", adj("grande"), "."], esp: "Una casa grande." },
];

// Adjetivos frecuentes que suelen ir antes del sustantivo.
export const BEFORE_NOUN = [
  { adj: "bello", esp: "bonito", example: "una bella casa", espEx: "una casa bonita" },
  { adj: "buono", esp: "bueno", example: "un buon caffè", espEx: "un buen café" },
  { adj: "grande", esp: "grande", example: "una grande città", espEx: "una gran ciudad" },
  { adj: "piccolo", esp: "pequeño", example: "un piccolo problema", espEx: "un problema pequeño" },
  { adj: "nuovo", esp: "nuevo", example: "un nuovo libro", espEx: "un libro nuevo" },
  { adj: "vecchio", esp: "viejo", example: "un vecchio amico", espEx: "un amigo viejo" },
  { adj: "giovane", esp: "joven", example: "una giovane donna", espEx: "una mujer joven" },
];

// Después de essere el adjetivo concuerda con el sujeto.
export const AFTER_VERB = [
  { pts: [art("La"), " ", fem("casa"), " ", es("è"), " ", adj("grande"), "."], esp: "La casa es grande." },
  { pts: [art("I"), " ", masc("gelati"), " ", es("sono"), " ", adj("buoni"), "."], esp: "Los helados están buenos." },
  { pts: [{ t: "Leslie", r: "subject" }, " ", es("è"), " ", adj("felice"), "."], esp: "Leslie está feliz." },
];

// Bello ante sustantivo cambia como el artículo (o como quello).
export const BELLO_FORMS = [
  { form: "bel", rule: "masculino, otra consonante", example: "bel libro", esp: "libro bonito" },
  { form: "bello", rule: "s + consonante, z, gn, ps, y", example: "bello zaino", esp: "mochila bonita" },
  { form: "bell'", rule: "ante vocal", example: "bell'uomo", esp: "hombre guapo" },
  { form: "bella", rule: "femenino singular", example: "bella casa", esp: "casa bonita" },
  { form: "bei", rule: "plural de il", example: "bei libri", esp: "libros bonitos" },
  { form: "begli", rule: "plural de lo y de l' masculino", example: "begli amici", esp: "amigos bonitos" },
  { form: "belle", rule: "femenino plural", example: "belle case", esp: "casas bonitas" },
];

// Buono en singular cambia como el artículo indeterminativo un.
export const BUONO_FORMS = [
  { form: "buon", rule: "masculino ante otra consonante", example: "buon caffè", esp: "buen café" },
  { form: "buon", rule: "masculino ante vocal", example: "buon amico", esp: "buen amigo" },
  { form: "buono", rule: "ante s + consonante, z, gn, ps, y", example: "buono studente", esp: "buen estudiante" },
  { form: "buona", rule: "femenino ante consonante", example: "buona pizza", esp: "buena pizza" },
  { form: "buon'", rule: "femenino ante vocal", example: "buon'amica", esp: "buena amiga" },
];

// Los falsos amigos con el español que hay que tener presentes.
export const FALSE_FRIENDS = [
  { word: "largo", esp: "ancho", warn: "En italiano largo mide de lado a lado; lo largo es lungo." },
  { word: "lungo", esp: "largo", warn: "Lo contrario es corto: una strada lunga = una calle larga." },
  { word: "caldo", esp: "caliente", warn: "Se dice del café, del agua o del clima; «tener calor» es avere caldo." },
  { word: "caro", esp: "caro y también querido", warn: "un caro amico = un querido amigo; como precio, lo contrario es economico." },
];

// Colores: regulares, los de plural en -i y los invariables.
export const COLORS = [
  { group: "Cuatro formas (como alto)", icon: "🎨", items: ["rosso · rossa", "giallo · gialla", "nero · nera", "bianco · bianca", "azzurro · azzurra", "grigio · grigia"] },
  { group: "Singular en -e, plural en -i", icon: "🖌️", items: ["verde · verdi", "marrone · marroni", "arancione · arancioni"] },
  { group: "Invariables", icon: "🔁", items: ["blu", "rosa", "viola"] },
];

// Categorías de la tabla de contrarios.
export const ADJECTIVE_CATEGORIES = [
  { key: "size", title: "Tamaño y edad", icon: "📏", color: "#fbbf24" },
  { key: "look", title: "Apariencia", icon: "👀", color: "#c084fc" },
  { key: "feel", title: "Sentimientos", icon: "😊", color: "#fb923c" },
  { key: "weath", title: "Temperatura", icon: "🌡️", color: "#38bdf8" },
  { key: "diff", title: "Velocidad y dificultad", icon: "⚡", color: "#4ade80" },
  { key: "value", title: "Calidad y valor", icon: "💰", color: "#34d399" },
];

// [adjetivo, español, contrario, español del contrario, categoría]
export const ADJECTIVES = [
  ["alto", "alto", "basso", "bajo", "size"],
  ["grande", "grande", "piccolo", "pequeño", "size"],
  ["lungo", "largo", "corto", "corto", "size"],
  ["largo", "ancho", "stretto", "estrecho", "size"],
  ["nuovo", "nuevo", "vecchio", "viejo", "size"],
  ["giovane", "joven", "anziano", "anciano", "size"],
  ["bello", "bonito", "brutto", "feo", "look"],
  ["pulito", "limpio", "sporco", "sucio", "look"],
  ["chiaro", "claro", "scuro", "oscuro", "look"],
  ["magro", "delgado", "grasso", "gordo", "look"],
  ["aperto", "abierto", "chiuso", "cerrado", "look"],
  ["felice", "feliz", "triste", "triste", "feel"],
  ["caldo", "caliente", "freddo", "frío", "weath"],
  ["veloce", "rápido", "lento", "lento", "diff"],
  ["facile", "fácil", "difficile", "difícil", "diff"],
  ["buono", "bueno", "cattivo", "malo", "value"],
  ["ricco", "rico", "povero", "pobre", "value"],
  ["caro", "caro", "economico", "barato", "value"],
  ["forte", "fuerte", "debole", "débil", "value"],
  ["pieno", "lleno", "vuoto", "vacío", "value"],
];

// Cualquier orden, con o sin la e del italiano: la coma no cambia la respuesta.
function colorAnswers() {
  const items = ["blu", "rosa", "viola"];
  const orders = [
    [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0],
  ];
  return orders.flatMap(([a, b, c]) => {
    const words = [items[a], items[b], items[c]];
    return [`${words.join(" ")}`, `${words[0]} ${words[1]} e ${words[2]}`];
  });
}

export const PRACTICE = [
  { question: "Elige la forma correcta: un ragazzo (alto / alta).", answers: ["alto"], hint: "Concuerda con ragazzo", explanation: "Un ragazzo alto: ragazzo es masculino singular, así que alto." },
  { question: "Completa: La casa è grand___.", answers: ["e"], hint: "Los adjetivos en -e no distinguen género en singular", explanation: "La casa è grande: los adjetivos en -e valen para masculino y femenino en singular." },
  { question: "Completa: I gelati sono buon___.", answers: ["i"], hint: "Plural masculino", explanation: "I gelati sono buoni: el plural de buono es buoni." },
  { question: "Elige la forma correcta: Octavio e Leslie sono (felice / felici).", answers: ["felici"], hint: "Hay dos personas", explanation: "Octavio e Leslie sono felici: con plural (incluso mixto) va la forma plural felici." },
  { question: "Traduce al italiano: un carro rojo.", answers: ["una macchina rossa", "una macchina rossa."], hint: "El adjetivo va después", explanation: "Un carro rojo = una macchina rossa: rosso concuerda con macchina (femenino singular → rossa)." },
  { question: "Traduce al italiano: Octavio y Leslie están cansados.", answers: ["Octavio e Leslie sono stanchi", "Octavio e Leslie sono stanchi."], hint: "Grupo mixto: plural masculino", explanation: "Octavio e Leslie sono stanchi: en un grupo mixto se usa el masculino plural." },
  { question: "Elige la forma correcta: una casa (bella / belle).", answers: ["bella"], hint: "Femenino singular", explanation: "Una casa bella: casa es femenino singular, así que bella. Belle es el plural." },
  { question: "Completa: Questo è un ___ caffè. (buono)", answers: ["buon"], hint: "Pierde la -o ante consonante", explanation: "Un buon caffè: buono pierde la -o ante consonante (salvo ante s + consonante, z, gn, ps, y)." },
  { question: "Elige la forma correcta: (bei / begli) amici.", answers: ["begli"], hint: "Amici lleva gli, no i", explanation: "Begli amici: ante gli, bello pasa a begli. Esa forma ya incluye el artículo." },
  { question: "Escribe el contrario de «pieno».", answers: ["vuoto"], hint: "Significa «vacío»", explanation: "El contrario de pieno es vuoto: lleno / vacío." },
  { question: "Escribe el contrario de «caldo».", answers: ["freddo"], hint: "El contrario de caliente", explanation: "El contrario de caldo es freddo: caliente / frío." },
  { question: "¿Qué significa «largo» en italiano? Escribe la traducción.", answers: ["ancho"], answerLang: "es", hint: "Se parece a «largo», pero mide de lado a lado", explanation: "Largo se parece a «largo», pero significa ancho. Lo largo se dice lungo." },
  { question: "Completa: una strada ___ (calle larga).", answers: ["lunga"], hint: "Lo largo se dice lungo; strada es femenino", explanation: "Una strada lunga = una calle larga. Lungo es «largo»; con strada va en femenino: lunga." },
  { question: "Escribe el contrario de «chiaro».", answers: ["scuro"], hint: "El contrario de claro", explanation: "El contrario de chiaro es scuro: claro / oscuro." },
  { question: "Traduce al italiano: la casa es grande.", answers: ["La casa è grande", "La casa è grande."], hint: "Después de essere concuerda con el sujeto", explanation: "La casa es grande = La casa è grande: después de essere el adjetivo concuerda con el sujeto." },
  { question: "Escribe los tres colores invariables.", answers: colorAnswers(), hint: "blu, rosa y viola, en cualquier orden", explanation: "Los colores invariables son blu, rosa y viola: valen para masculino, femenino y plural." },
  { question: "Completa: i fiori ___ (color rosa).", answers: ["rosa"], hint: "Este color no cambia en plural", explanation: "I fiori rosa: rosa no cambia de forma en plural." },
];
