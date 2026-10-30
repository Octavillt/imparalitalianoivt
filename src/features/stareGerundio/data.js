// Stare + gerundio: conjugación de stare, reglas del gerundio (-ando / -endo,
// sin -iendo como en español) e irregulares. Los tokens llevan { t, r }:
// sujeto, essere (para stare), verbo, gerundio y negación.
const su = t => ({ t, r: "subject" });
const es = t => ({ t, r: "essere" });
const vv = t => ({ t, r: "verb" });
const ge = t => ({ t, r: "gerundio" });
const no = t => ({ t, r: "neg" });

export const STARE_CONJ = [
  { subj: "io", form: "sto", esp: "yo estoy" },
  { subj: "tu", form: "stai", esp: "tú estás" },
  { subj: "lui / lei", form: "sta", esp: "él / ella está" },
  { subj: "noi", form: "stiamo", esp: "nosotros estamos" },
  { subj: "voi", form: "state", esp: "ustedes están" },
  { subj: "loro", form: "stanno", esp: "ellos / ellas están" },
];

// Gerundio por grupo: -are → -ando; -ere / -ire → -endo.
export const GERUND_RULES = [
  { rule: "-are → -ando", color: "#4ade80", desc: "Los verbos en -are forman el gerundio en -ando.", words: [["parl", "ando", "parlare"], ["mangi", "ando", "mangiare"], ["studi", "ando", "studiare"], ["cammin", "ando", "camminare"]] },
  { rule: "-ere → -endo", color: "#fbbf24", desc: "Los verbos en -ere forman el gerundio en -endo.", words: [["legg", "endo", "leggere"], ["scriv", "endo", "scrivere"], ["cred", "endo", "credere"], ["vend", "endo", "vendere"]] },
  { rule: "-ire → -endo", color: "#60a5fa", desc: "Los verbos en -ire también forman el gerundio en -endo: no existe -iendo.", words: [["dorm", "endo", "dormire"], ["part", "endo", "partire"], ["fin", "endo", "finire"], ["apr", "endo", "aprire"]] },
  { rule: "Irregulares", color: "#f472b6", desc: "Tres verbos frecuentes tienen gerundio irregular; conviene memorizarlos.", words: [["fac", "endo", "fare"], ["bev", "endo", "bere"], ["dic", "endo", "dire"]] },
];

// Afirmaciones: acción en este momento.
export const PROG_AFF = [
  { pts: [es("Sto"), " ", vv("mangi"), ge("ando"), "."], esp: "(Yo) estoy comiendo." },
  { pts: [su("Leslie"), " ", es("sta"), " ", vv("legg"), ge("endo"), "."], esp: "Leslie está leyendo." },
  { pts: [es("Stiamo"), " ", vv("studi"), ge("ando"), " italiano."], esp: "(Nosotros) estamos estudiando italiano." },
  { pts: [su("Octavio"), " ", es("sta"), " ", vv("cucin"), ge("ando"), " la pasta."], esp: "Octavio está cocinando la pasta." },
  { pts: [su("Argelia"), " ", es("sta"), " ", vv("lavor"), ge("ando"), " a Roma."], esp: "Argelia está trabajando en Roma." },
];

// Negación: non va antes de stare.
export const PROG_NEG = [
  { pts: [no("Non"), " ", es("sto"), " ", vv("dorm"), ge("endo"), "."], esp: "No estoy durmiendo." },
  { pts: [su("Leslie"), " ", no("non"), " ", es("sta"), " ", vv("guard"), ge("ando"), " la televisione."], esp: "Leslie no está mirando la televisión." },
];

// Preguntas: el orden no cambia, solo la entonación.
export const PROG_INT = [
  { q: [es("Stai"), " ", vv("studi"), ge("ando"), "?"], a: "Sì, sto studiando. / No, non sto studiando.", esp: "¿Estás estudiando? — Sí, estoy estudiando. / No, no estoy estudiando." },
  { q: ["Che cosa ", es("stai"), " ", vv("fac"), ge("endo"), "?"], a: "Sto scrivendo.", esp: "¿Qué estás haciendo? — Estoy escribiendo." },
];

// Marcadores de «ahora» que acompañan esta estructura.
export const NOW_MARKERS = [
  ["adesso", "ahora"],
  ["ora", "ahora"],
  ["in questo momento", "en este momento"],
];

export const PRACTICE = [
  { question: "Completa: Io ___ mangiando. (stare)", answers: ["sto"], hint: "Primera persona de stare", explanation: "Io sto mangiando = Estoy comiendo. Stare → io sto." },
  { question: "Completa: Leslie ___ leggendo. (stare)", answers: ["sta"], hint: "Forma de lui/lei", explanation: "Leslie sta leggendo = Leslie está leyendo. Con lei, stare pasa a sta." },
  { question: "Completa: Noi ___ studiando italiano. (stare)", answers: ["stiamo"], hint: "Primera persona plural", explanation: "Noi stiamo studiando italiano = Estamos estudiando italiano." },
  { question: "Completa: Non ___ dormendo. (stare, io)", answers: ["sto"], hint: "Primera persona de stare", explanation: "Non sto dormendo = No estoy durmiendo. Non va antes del verbo." },
  { question: "Elige la forma correcta: Sto (mangiando / mangiendo).", answers: ["mangiando"], hint: "-are forma el gerundio en -ando", explanation: "Sto mangiando: los verbos en -are usan -ando." },
  { question: "Elige la forma correcta: Leslie sta (leggendo / leggiendo).", answers: ["leggendo"], hint: "No existe -iendo", explanation: "Leslie sta leggendo: en italiano no existe -iendo; -ere forma -endo." },
  { question: "Elige la forma correcta: Sto (facendo / farendo).", answers: ["facendo"], hint: "Fare es irregular", explanation: "Sto facendo: el gerundio de fare es facendo (irregular)." },
  { question: "Elige la forma correcta: Sto (bevendo / bevando).", answers: ["bevendo"], hint: "Bere es irregular", explanation: "Sto bevendo: el gerundio de bere es bevendo (irregular)." },
  { question: "Traduce al italiano: ¿Qué estás haciendo?", answers: ["Che cosa stai facendo?", "Cosa stai facendo?", "Che stai facendo?"], hint: "Fare → facendo", explanation: "¿Qué estás haciendo? = Che cosa stai facendo?" },
  { question: "Traduce al italiano: Octavio está cocinando la pasta.", answers: ["Octavio sta cucinando la pasta", "Octavio sta cucinando la pasta."], hint: "Stare + gerundio", explanation: "Octavio está cocinando la pasta = Octavio sta cucinando la pasta." },
  { question: "Completa: Voi ___ studiando? (stare)", answers: ["state"], hint: "Forma de voi", explanation: "Voi state studiando? = ¿Ustedes están estudiando? Voi = ustedes." },
  { question: "¿Qué significa «Come stai?» en español? Escribe la frase completa.", answers: ["¿Cómo estás?", "cómo estás?"], answerLang: "es", hint: "Stare también sirve para «estar»", explanation: "Come stai? = ¿Cómo estás? Respuesta: Sto bene = Estoy bien." },
  { question: "Completa: Loro ___ arrivando. (stare)", answers: ["stanno"], hint: "Forma de loro", explanation: "Loro stanno arrivando = Ellos están llegando." },
  { question: "Traduce al español: Argelia sta lavorando a Roma.", answers: ["Argelia está trabajando en Roma"], answerLang: "es", hint: "Stare + gerundio", explanation: "Argelia sta lavorando a Roma = Argelia está trabajando en Roma." },
];
