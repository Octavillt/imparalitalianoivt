// La famiglia: vocabulario completo, árbol genealógico y la regla del
// posesivo con familiares. Los tokens llevan { t, r }.
const es = t => ({ t, r: "essere" });
const no = t => ({ t, r: "neg" });
const dm = t => ({ t, r: "demo" });
const poss = t => ({ t, r: "poss" });

export const FAMILY_TREE = [
  {
    gen: "Nonni",
    color: "#c084fc",
    members: [
      ["il nonno", "el abuelo"],
      ["la nonna", "la abuela"],
    ],
  },
  {
    gen: "Genitori, zii e padrini",
    color: "#60a5fa",
    members: [
      ["il padre / il papà", "el padre / papá"],
      ["la madre / la mamma", "la madre / mamá"],
      ["lo zio", "el tío"],
      ["la zia", "la tía"],
      ["il suocero", "el suegro"],
      ["la suocera", "la suegra"],
      ["il patrigno", "el padrastro"],
      ["la matrigna", "la madrastra"],
      ["il padrino", "el padrino"],
      ["la madrina", "la madrina"],
    ],
  },
  {
    gen: "La mia generazione",
    color: "#fbbf24",
    highlight: true,
    members: [
      ["il fratello", "el hermano"],
      ["la sorella", "la hermana"],
      ["i fratelli", "los hermanos (o grupo mixto)"],
      ["il cugino / la cugina", "el primo / la prima"],
      ["il marito", "el esposo"],
      ["la moglie", "la esposa"],
      ["il cognato", "el cuñado"],
      ["la cognata", "la cuñada"],
      ["il fidanzato", "el novio"],
      ["la fidanzata", "la novia"],
    ],
  },
  {
    gen: "Figli e nipoti",
    color: "#34d399",
    members: [
      ["il figlio", "el hijo"],
      ["la figlia", "la hija"],
      ["i figli", "los hijos"],
      ["il nipote", "el sobrino / el nieto"],
      ["la nipote", "la sobrina / la nieta"],
      ["il genero", "el yerno"],
      ["la nuora", "la nuera"],
    ],
  },
];

// Parejas que suelen confundir al hispanohablante.
export const FAMILY_TRAPS = [
  { word: "i genitori", esp: "los padres", warn: "No significa «los parientes»." },
  { word: "i parenti", esp: "los parientes", warn: "Es la familia extendida, no los padres." },
  { word: "il nipote", esp: "el sobrino… y también el nieto", warn: "El contexto decide cuál es." },
  { word: "i fratelli", esp: "los hermanos", warn: "Sirve también para un grupo de hermanos y hermanas." },
];

// Regla central: posesivo sin artículo en singular; con artículo en plural.
export const POSS_RULES = [
  { caso: "Familiar en singular", regla: "sin artículo", ex: "mia madre, mio padre, tuo fratello, sua sorella", esp: "mi madre, mi padre, tu hermano, su hermana" },
  { caso: "Familiar en plural", regla: "con artículo", ex: "i miei genitori, le mie sorelle, i tuoi fratelli", esp: "mis padres, mis hermanas, tus hermanos" },
  { caso: "mamma y papà", regla: "admiten las dos formas", ex: "mia mamma / la mia mamma", esp: "mi mamá (cualquiera de las dos)" },
  { caso: "loro (de ellos)", regla: "siempre con artículo", ex: "la loro madre", esp: "su madre (de ellos)" },
];

// Presentar a la familia. Questo/questa/questi se ven a fondo en la
// siguiente lección (Demostrativos): aquí van como fórmula fija.
export const FAMILY_PRESENT = [
  { pts: [dm("Questa"), " ", es("è"), " ", poss("mia"), " sorella."], esp: "Esta es mi hermana." },
  { pts: [dm("Questo"), " ", es("è"), " ", poss("mio"), " padre."], esp: "Este es mi padre." },
  { pts: [dm("Questi"), " ", es("sono"), " i ", poss("miei"), " genitori."], esp: "Estos son mis padres." },
];

export const FAMILY_QA = [
  { q: [es("Hai"), " fratelli o sorelle?"], a: "Ho due sorelle.", esp: "¿Tienes hermanos o hermanas? — Tengo dos hermanas." },
  { q: [es("Hai"), " fratelli?"], a: [no("No"), ", ", no("non"), " ", es("ho"), " fratelli."], esp: "¿Tienes hermanos? — No, no tengo hermanos." },
];

export const PRACTICE = [
  { question: "Escribe en italiano: la hermana.", answers: ["la sorella"], explanation: "la sorella = la hermana." },
  { question: "Escribe en italiano: los abuelos.", answers: ["i nonni"], explanation: "i nonni = los abuelos." },
  { question: "Elige la palabra correcta: (i genitori / i parenti) significa «los padres».", answers: ["i genitori"], hint: "No son los parientes", explanation: "i genitori = los padres. i parenti son los parientes." },
  { question: "Escribe una de las dos traducciones de «il nipote».", answers: ["sobrino", "nieto"], answerLang: "es", hint: "Tiene dos significados", explanation: "il nipote puede ser el sobrino o el nieto; el contexto decide." },
  { question: "Completa: Questa è ___ sorella.", answers: ["mia"], hint: "Posesivo sin artículo", explanation: "Questa è mia sorella = Esta es mi hermana. En singular va sin artículo." },
  { question: "Completa: Questi sono i ___ genitori.", answers: ["miei"], hint: "Plural: lleva artículo", explanation: "Questi sono i miei genitori = Estos son mis padres. En plural, i miei." },
  { question: "Elige la forma correcta: (mio / il mio) padre.", answers: ["mio"], hint: "Familiar en singular", explanation: "mio padre: con familiar en singular el posesivo va sin artículo." },
  { question: "Elige la forma correcta: (i miei / miei) fratelli.", answers: ["i miei"], hint: "Plural", explanation: "i miei fratelli: en plural el posesivo lleva artículo." },
  { question: "Traduce al italiano: ¿Tienes hermanos?", answers: ["Hai fratelli?"], hint: "Avere → hai", explanation: "¿Tienes hermanos? = Hai fratelli?" },
  { question: "Traduce al italiano: No tengo hermanos.", answers: ["Non ho fratelli", "Non ho fratelli."], hint: "Non antes del verbo", explanation: "No tengo hermanos = Non ho fratelli." },
  { question: "Escribe en italiano: la esposa.", answers: ["la moglie"], hint: "No se parece al español", explanation: "la moglie = la esposa." },
  { question: "Escribe en italiano: el esposo.", answers: ["il marito"], hint: "No se parece al español", explanation: "il marito = el esposo." },
  { question: "Traduce al italiano: Esta es mi hermana.", answers: ["Questa è mia sorella", "Questa è mia sorella."], hint: "Questa è…", explanation: "Esta es mi hermana = Questa è mia sorella." },
  { question: "Completa: la ___ madre (de ellos). Lleva artículo.", answers: ["loro"], hint: "Posesivo de ellos", explanation: "la loro madre = su madre (de ellos). Loro siempre lleva artículo." },
];
