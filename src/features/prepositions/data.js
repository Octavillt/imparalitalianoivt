// Preposizioni di luogo: vocabulario de ubicación, formas contraídas fijas y
// las expresiones c'è / ci sono (= hay). Los tokens llevan { t, r }: sujeto,
// essere, preposición y negación.
const su = t => ({ t, r: "subject" });
const es = t => ({ t, r: "essere" });
const pr = t => ({ t, r: "prep" });
const no = t => ({ t, r: "neg" });

// Preguntas para ubicar: dov'è (sing.) y dove sono (pl.).
export const WHERE_QUESTIONS = [
  { q: [es("Dov'è"), " il libro?"], a: "Il libro è sul tavolo.", esp: "¿Dónde está el libro? — El libro está sobre la mesa." },
  { q: [es("Dove"), " sono le chiavi?"], a: "Le chiavi sono nella borsa.", esp: "¿Dónde están las llaves? — Las llaves están en la bolsa." },
];

// Vocabulario de lugar: cada preposición con su traducción.
export const PREP_LIST = [
  { prep: "sopra", esp: "encima de / sobre", icon: "⬆️" },
  { prep: "sotto", esp: "debajo de", icon: "⬇️" },
  { prep: "davanti a", esp: "delante de / enfrente de", icon: "👀" },
  { prep: "dietro", esp: "detrás de", icon: "🔙" },
  { prep: "accanto a", esp: "al lado de", icon: "↔️" },
  { prep: "vicino a", esp: "cerca de", icon: "📍" },
  { prep: "lontano da", esp: "lejos de", icon: "🛣️" },
  { prep: "di fronte a", esp: "frente a (enfrente de)", icon: "🏠" },
  { prep: "tra / fra", esp: "entre", icon: "↕️" },
  { prep: "dentro", esp: "dentro de / en", icon: "📦" },
  { prep: "fuori", esp: "fuera de", icon: "🚪" },
  { prep: "in", esp: "en / dentro de", icon: "🇮🇹" },
  { prep: "su", esp: "sobre / encima de", icon: "⬆️" },
];

// Oraciones con essere + preposición de lugar.
export const PREP_EX = [
  { pts: [su("Il libro"), " ", es("è"), " ", pr("sotto"), " il tavolo."], esp: "El libro está debajo de la mesa." },
  { pts: [su("La borsa"), " ", es("è"), " ", pr("dietro"), " la porta."], esp: "La bolsa está detrás de la puerta." },
  { pts: [su("Leslie"), " ", es("è"), " ", pr("tra"), " Octavio e Argelia."], esp: "Leslie está entre Octavio y Argelia." },
  { pts: [su("Octavio"), " ", es("è"), " ", pr("davanti alla"), " finestra."], esp: "Octavio está delante de la ventana." },
  { pts: [su("Argelia"), " ", es("è"), " ", pr("vicino al"), " divano."], esp: "Argelia está cerca del sofá." },
  { pts: [su("Le chiavi"), " ", es("sono"), " ", pr("sopra"), " il letto."], esp: "Las llaves están encima de la cama." },
];

// Formas contraídas como fórmula fija (el sistema completo se ve en Básico II).
export const PREP_CONTRACTIONS = [
  { parts: ["su", " + ", "il", " = ", "sul"], ex: "Il libro è sul tavolo.", esp: "El libro está sobre la mesa." },
  { parts: ["su", " + ", "la", " = ", "sulla"], ex: "La penna è sulla sedia.", esp: "La pluma está sobre la silla." },
  { parts: ["in", " + ", "il", " = ", "nel"], ex: "Il libro è nel cassetto.", esp: "El libro está en el cajón." },
  { parts: ["in", " + ", "la", " = ", "nella"], ex: "Le chiavi sono nella borsa.", esp: "Las llaves están en la bolsa." },
  { parts: ["a", " + ", "il", " = ", "al"], ex: "La sedia è accanto al letto.", esp: "La silla está al lado de la cama." },
  { parts: ["a", " + ", "la", " = ", "alla"], ex: "Argelia è alla porta.", esp: "Argelia está en la puerta." },
];

// C'è (hay, singular) y ci sono (hay, plural) — también en negativa y pregunta.
export const CEX_EX = [
  { pts: [es("C'è"), " una sedia ", pr("in"), " cucina."], esp: "Hay una silla en la cocina." },
  { pts: [es("Ci sono"), " due libri ", pr("sul"), " tavolo."], esp: "Hay dos libros sobre la mesa." },
  { pts: [no("Non"), " ", es("c'è"), " il caffè."], esp: "No hay café." },
  { q: [es("C'è"), " una banca ", pr("qui vicino"), "?"], a: "Sì, c'è. / No, non c'è.", esp: "¿Hay un banco por aquí cerca? — Sí, hay. / No, no hay." },
];

// Objetos de la casa que aparecen en los ejemplos.
export const PLACE_OBJECTS = [
  { it: "il tavolo", esp: "la mesa", emoji: "🪑" },
  { it: "la sedia", esp: "la silla", emoji: "🪑" },
  { it: "il letto", esp: "la cama", emoji: "🛏️" },
  { it: "il divano", esp: "el sofá", emoji: "🛋️" },
  { it: "la finestra", esp: "la ventana", emoji: "🪟" },
  { it: "la porta", esp: "la puerta", emoji: "🚪" },
  { it: "la borsa", esp: "la bolsa", emoji: "👜" },
  { it: "lo zaino", esp: "la mochila", emoji: "🎒" },
  { it: "la scatola", esp: "la caja", emoji: "📦" },
  { it: "le chiavi", esp: "las llaves", emoji: "🗝️" },
  { it: "la cucina", esp: "la cocina", emoji: "🍳" },
  { it: "il bagno", esp: "el baño", emoji: "🛁" },
];

export const PRACTICE = [
  { question: "Completa: Il libro è ___ il tavolo. (debajo de)", answers: ["sotto"], hint: "Empieza con s…", explanation: "Il libro è sotto il tavolo = El libro está debajo de la mesa." },
  { question: "Completa: La borsa è ___ la porta. (detrás de)", answers: ["dietro"], hint: "Solo una palabra, sin a", explanation: "La borsa è dietro la porta = La bolsa está detrás de la puerta." },
  { question: "Completa: Leslie è ___ Octavio e Argelia. (entre)", answers: ["tra", "fra"], hint: "Hay dos formas equivalentes", explanation: "Leslie è tra Octavio e Argelia = Leslie está entre Octavio y Argelia." },
  { question: "Completa: su + il = ___", answers: ["sul"], hint: "Su + il se pegan", explanation: "su + il = sul. Il libro è sul tavolo = El libro está sobre la mesa." },
  { question: "Completa: in + la = ___", answers: ["nella"], hint: "In + la se pegan", explanation: "in + la = nella. Le chiavi sono nella borsa = Las llaves están en la bolsa." },
  { question: "Completa: a + il = ___", answers: ["al"], hint: "Se unen en una sola palabra", explanation: "a + il = al. La sedia è accanto al letto = La silla está al lado de la cama." },
  { question: "Traduce al italiano: Hay una silla en la cocina.", answers: ["C'è una sedia in cucina", "C'è una sedia in cucina."], hint: "Hay (sing.) = c'è", explanation: "Hay una silla en la cocina = C'è una sedia in cucina. C'è es singular." },
  { question: "Traduce al italiano: Hay dos libros sobre la mesa.", answers: ["Ci sono due libri sul tavolo", "Ci sono due libri sul tavolo."], hint: "Hay (pl.) = ci sono", explanation: "Hay dos libros sobre la mesa = Ci sono due libri sul tavolo. Ci sono es plural." },
  { question: "Traduce al italiano: No hay café.", answers: ["Non c'è il caffè", "Non c'è caffè"], hint: "Non + c'è", explanation: "No hay café = Non c'è il caffè. La negación va antes de c'è." },
  { question: "Elige la forma correcta: (C'è / Ci sono) due penne sul tavolo.", answers: ["Ci sono"], hint: "Due penne es plural", explanation: "Ci sono due penne sul tavolo: con plural se usa ci sono." },
  { question: "Elige la forma correcta: (Dov'è / C'è) la banca?", answers: ["Dov'è"], hint: "Dov'è busca algo conocido; C'è pregunta si existe", explanation: "Dov'è la banca? busca un banco conocido; C'è una banca? pregunta si existe alguno." },
  { question: "Traduce al italiano: ¿Dónde están las llaves?", answers: ["Dove sono le chiavi?", "Dove sono le chiavi"], hint: "Sono sirve también para «están»", explanation: "¿Dónde están las llaves? = Dove sono le chiavi?" },
  { question: "Completa: La sedia è accanto ___ letto.", answers: ["al"], hint: "Accanto a + il", explanation: "La sedia è accanto al letto: a + il = al." },
  { question: "Traduce al italiano: Octavio está cerca del sofá.", answers: ["Octavio è vicino al divano", "Octavio è vicino al divano."], hint: "Vicino a + il", explanation: "Octavio está cerca del sofá = Octavio è vicino al divano." },
];
