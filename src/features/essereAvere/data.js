// Essere y avere: conjugación completa, expresiones con avere y la h muda.
// Los tokens llevan { t, r }: sujeto, essere (cubre avere), negación y preposición.
const su = t => ({ t, r: "subject" });
const es = t => ({ t, r: "essere" });
const no = t => ({ t, r: "neg" });
const pr = t => ({ t, r: "prep" });

export const ESSERE_CONJ = [
  { subj: "io", form: "sono", esp: "soy / estoy" },
  { subj: "tu", form: "sei", esp: "eres / estás" },
  { subj: "lui / lei", form: "è", esp: "es / está" },
  { subj: "noi", form: "siamo", esp: "somos / estamos" },
  { subj: "voi", form: "siete", esp: "ustedes son / están" },
  { subj: "loro", form: "sono", esp: "ellos son / están" },
];

export const AVERE_CONJ = [
  { subj: "io", form: "ho", esp: "tengo" },
  { subj: "tu", form: "hai", esp: "tienes" },
  { subj: "lui / lei", form: "ha", esp: "tiene" },
  { subj: "noi", form: "abbiamo", esp: "tenemos" },
  { subj: "voi", form: "avete", esp: "ustedes tienen" },
  { subj: "loro", form: "hanno", esp: "ellos tienen" },
];

// Affermazioni: el sujeto se omite cuando el verbo ya lo cuenta.
export const ESSERE_AFF = [
  { pts: [es("Sono"), " Octavio."], esp: "Soy Octavio." },
  { pts: [su("Octavio"), " ", es("è"), " stanco."], esp: "Octavio está cansado." },
  { pts: [su("Leslie"), " ", es("è"), " stanca."], esp: "Leslie está cansada." },
  { pts: [su("Argelia"), " ", es("è"), pr(" di "), "Roma."], esp: "Argelia es de Roma." },
  { pts: [es("Sono"), pr(" a "), "Roma."], esp: "(Yo) estoy en Roma." },
  { pts: [es("Siamo"), pr(" a "), "casa."], esp: "(Nosotros) estamos en casa." },
];

export const ESSERE_NEG = [
  { pts: [no("Non"), " ", es("sono"), " italiano."], esp: "No soy italiano." },
  { pts: [no("Non"), " ", es("ho"), " fame."], esp: "No tengo hambre." },
  { pts: [su("Octavio"), " ", no("non"), " ", es("è"), " stanco."], esp: "Octavio no está cansado." },
  { pts: [su("Leslie"), " ", no("non"), " ", es("ha"), " fretta."], esp: "Leslie no tiene prisa." },
];

// Domande: el orden no cambia; basta la entonación de pregunta.
export const ESSERE_QA = [
  { q: [es("Sei"), " stanca?"], a: "Sì, sono stanca. / No, non sono stanca.", esp: "¿Estás cansada? — Sí, estoy cansada. / No, no estoy cansada." },
  { q: [es("Hai"), " sonno?"], a: "Sì, ho sonno. / No, non ho sonno.", esp: "¿Tienes sueño? — Sí, tengo sueño. / No, no tengo sueño." },
  { q: [su("Lei"), " ", es("è"), " di Roma?"], a: "Sì, sono di Roma. / No, non sono di Roma.", esp: "¿Es usted de Roma? — Sí, soy de Roma. / No, no soy de Roma." },
];

// Essere vale por «ser» y por «estar»; stare llega más adelante.
export const ESSERE_USES = [
  { icon: "🪪", use: "Identidad — ser", ex: "Sono messicano.", esp: "Soy mexicano." },
  { icon: "😮‍💨", use: "Estado — estar", ex: "Sono stanco.", esp: "Estoy cansado." },
  { icon: "📍", use: "Lugar — estar", ex: "Sono a casa.", esp: "Estoy en casa." },
];

// Avere donde el español usa «tener».
export const AVERE_EXPR = [
  ["ho fame", "tengo hambre"],
  ["ho sete", "tengo sed"],
  ["ho sonno", "tengo sueño"],
  ["ho freddo", "tengo frío"],
  ["ho caldo", "tengo calor"],
  ["ho fretta", "tengo prisa"],
  ["ho ragione", "tengo razón"],
];

// La h no suena: estas parejas se distinguen solo por ella.
export const H_PAIRS = [
  ["ho", "tengo", "o", "o (conjunción)"],
  ["hai", "tienes", "ai", "a los (a + i)"],
  ["ha", "tiene", "a", "a (preposición)"],
  ["hanno", "tienen", "anno", "año"],
];

export const PRACTICE = [
  { question: "Completa: Io ___ Octavio. (essere)", answers: ["sono"], hint: "Primera persona de essere", explanation: "Io sono Octavio = Soy Octavio." },
  { question: "Completa: Tu ___ stanca. (essere)", answers: ["sei"], hint: "Segunda persona de essere", explanation: "Tu sei stanca = Estás cansada. El sujeto tu puede omitirse." },
  { question: "Completa: Lui ___ di Roma. (essere)", answers: ["è"], hint: "Lleva acento grave", explanation: "Lui è di Roma = Él es de Roma." },
  { question: "Completa: Noi ___ a casa. (essere)", answers: ["siamo"], hint: "Primera persona plural", explanation: "Noi siamo a casa = Estamos en casa." },
  { question: "Completa: Loro ___ fame. (avere)", answers: ["hanno"], hint: "La h no suena", explanation: "Loro hanno fame = Ellos tienen hambre." },
  { question: "Completa: Io ___ trent'anni. (avere)", answers: ["ho"], hint: "La edad va con avere", explanation: "Io ho trent'anni = Tengo treinta años. Nunca «sono trenta»." },
  { question: "Traduce al italiano: Soy mexicano.", answers: ["Sono messicano", "Sono messicano.", "Io sono messicano"], hint: "Essere sirve para ser y estar", explanation: "Soy mexicano = Sono messicano." },
  { question: "Traduce al italiano: No tengo hambre.", answers: ["Non ho fame", "Non ho fame.", "Io non ho fame"], hint: "La negación va antes del verbo", explanation: "No tengo hambre = Non ho fame: non va antes del verbo." },
  { question: "Traduce al italiano: ¿Eres italiana?", answers: ["Sei italiana?", "Tu sei italiana?"], hint: "El orden no cambia, solo la entonación", explanation: "¿Eres italiana? = Sei italiana? En italiano la pregunta lleva el mismo orden." },
  { question: "Elige la forma correcta: Octavio è stanco / stanca.", answers: ["stanco"], hint: "Concuerda con la persona", explanation: "Octavio è stanco. Si fuera Leslie: Leslie è stanca." },
  { question: "Elige la forma correcta: (Ho / Sono) trent'anni.", answers: ["Ho"], hint: "La edad no va con essere", explanation: "Ho trent'anni: la edad se expresa con avere, no con essere." },
  { question: "Traduce al italiano: Ellos tienen sueño.", answers: ["Loro hanno sonno", "Hanno sonno"], hint: "Avere → hanno", explanation: "Ellos tienen sueño = (Loro) hanno sonno." },
  { question: "Completa: Lei ___ di Firenze? (essere)", answers: ["è"], hint: "Aquí Lei es usted y suele escribirse con mayúscula", explanation: "Lei è di Firenze? = ¿Es usted de Florencia? Lei usa la tercera persona." },
  { question: "Traduce al italiano: Nosotros estamos en Roma.", answers: ["Siamo a Roma", "Noi siamo a Roma", "Siamo a Roma."], hint: "Las ciudades llevan la preposición a", explanation: "Nosotros estamos en Roma = (Noi) siamo a Roma." },
];
