// Imperfetto. IMPERFECT_MODELS lo leen las pruebas: seis personas, en este
// orden. Si hay raíz, la forma es raíz + terminación.

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const es = t => ({ t, r: "essere" });
const ax = t => ({ t, r: "aux" });
const pp = t => ({ t, r: "participle" });

export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

const ARE = ["avo", "avi", "ava", "avamo", "avate", "avano"];
const ERE = ["evo", "evi", "eva", "evamo", "evate", "evano"];
const IRE = ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"];
const SHORT = ["o", "i", "a", "amo", "ate", "ano"];

const gloss = (io, tu, lei, noi, voi, loro) => [io, tu, lei, noi, voi, loro];

function model(verb, group, ends, esps, stem, kind = "regular") {
  const forms = ends.map(end => stem + end);
  return { verb, group, stem, ends, forms, esps, kind };
}

export const IMPERFECT_MODELS = [
  model("parlare", "-are", ARE, gloss("yo hablaba", "tú hablabas", "él / ella / usted hablaba", "nosotros hablábamos", "ustedes hablaban", "ellos / ellas hablaban"), "parl"),
  model("credere", "-ere", ERE, gloss("yo creía", "tú creías", "él / ella / usted creía", "nosotros creíamos", "ustedes creían", "ellos / ellas creían"), "cred"),
  model("dormire", "-ire", IRE, gloss("yo dormía", "tú dormías", "él / ella / usted dormía", "nosotros dormíamos", "ustedes dormían", "ellos / ellas dormían"), "dorm"),
  {
    verb: "essere",
    group: "irregular",
    kind: "irregular",
    forms: ["ero", "eri", "era", "eravamo", "eravate", "erano"],
    esps: gloss("yo era / estaba", "tú eras / estabas", "él / ella era / estaba", "nosotros éramos / estábamos", "ustedes eran / estaban", "ellos / ellas eran / estaban"),
  },
  model("fare", "irregular", SHORT, gloss("yo hacía", "tú hacías", "él / ella / usted hacía", "nosotros hacíamos", "ustedes hacían", "ellos / ellas hacían"), "facev", "irregular"),
  model("bere", "irregular", SHORT, gloss("yo bebía", "tú bebías", "él / ella / usted bebía", "nosotros bebíamos", "ustedes bebían", "ellos / ellas bebían"), "bevev", "irregular"),
  model("dire", "irregular", SHORT, gloss("yo decía", "tú decías", "él / ella / usted decía", "nosotros decíamos", "ustedes decían", "ellos / ellas decían"), "dicev", "irregular"),
];

export const USES = [
  {
    title: "Hábito",
    text: "Lo que se hacía en esa época.",
    pts: ["Da bambina ", vb("abitavo"), " a Napoli."],
    esp: "De niña vivía en Nápoles.",
  },
  {
    title: "Descripción",
    text: "Cómo era una escena o una cosa.",
    pts: [es("Era"), " una bella giornata."],
    esp: "Hacía un día bonito.",
  },
  {
    title: "En curso",
    text: "Dos acciones que seguían a la vez.",
    pts: ["Mentre ", vb("mangiavo"), ", ", vb("leggevo"), "."],
    esp: "Mientras comía, leía.",
  },
];

// El primer bloque es el hecho cerrado; el segundo, el hábito o el fondo.
export const CONTRAST = [
  { pts: ["Ieri ", ax("ho"), " ", pp("mangiato"), " una pizza."], esp: "Ayer comí una pizza.", note: "Hecho ya cerrado." },
  { pts: ["Da bambino ", vb("mangiavo"), " sempre la pizza."], esp: "De niño siempre comía pizza.", note: "Hábito de esa época." },
  { pts: ["Mentre ", vb("studiavo"), ", ", su("Leslie"), " ", ax("è"), " ", pp("arrivata"), "."], esp: "Mientras yo estudiaba, Leslie llegó.", note: "El fondo sigue; la llegada ya ocurrió." },
  { pts: ["Sabato ", ax("sono"), " ", pp("andata"), " a Roma."], esp: "El sábado fui a Roma. (femenino)", note: "Ese sábado, sin artículo. Andata concuerda en femenino." },
  { pts: ["Il sabato ", vb("andavo"), " a Roma."], esp: "Los sábados iba a Roma.", note: "Con artículo, el día es cada semana." },
];

export const MARKERS = [
  ["da bambino", "de niño"],
  ["da bambina", "de niña"],
  ["di solito", "por lo general"],
  ["sempre", "siempre"],
  ["ogni estate", "cada verano"],
  ["mentre", "mientras"],
];

export const EXTRA = [
  { pts: ["La casa ", es("era"), " grande."], esp: "La casa era grande." },
  { pts: ["Di solito ", vb("mangiavo"), " la pasta."], esp: "Por lo general comía pasta." },
  { pts: ["Ogni estate ", vb("andavamo"), " a Venezia."], esp: "Cada verano íbamos a Venecia." },
  { pts: [su("Octavio"), " ", vb("parlava"), " italiano e ", su("Leslie"), " ", vb("leggeva"), "."], esp: "Octavio hablaba italiano y Leslie leía." },
];

export const GUIDED_STORY = {
  prompt: "Completa. Leslie habla de su infancia. En la última frase habla Octavio: él estudiaba y Leslie llegó.",
  lines: [
    ["Da bambina ___ (abitare) a Napoli.", "Da bambina abitavo a Napoli."],
    ["La casa ___ (essere) grande.", "La casa era grande."],
    ["Ogni estate ___ (mangiare) un gelato.", "Ogni estate mangiavo un gelato."],
    ["Ieri ___ (mangiare) una pizza.", "Ieri ho mangiato una pizza."],
    ["Mentre ___ (studiare), Leslie ___ (arrivare).", "Mentre studiavo, Leslie è arrivata."],
  ],
};

export const GUIDED_NEGATIVES = {
  prompt: "Pasa el hábito a negativo. Non va antes del verbo.",
  rows: [
    ["Abitavo a Napoli.", "Non abitavo a Napoli."],
    ["Mangiavo la pasta.", "Non mangiavo la pasta."],
    ["La casa era grande.", "La casa non era grande."],
  ],
};

export const GUIDED_CONVERSATION = {
  prompt: "Completa. Octavio habla de cuando era niño; Leslie, de ayer.",
  blanks: [
    "Argelia: Da bambino dove ___ (abitare)?",
    "Octavio: ___ (abitare) a Puebla.",
    "Argelia: E ieri, Leslie, che cosa ___ (fare)?",
    "Leslie: ___ (andare) a Roma e ___ (mangiare) una pizza.",
  ],
  answers: [
    "Argelia: Da bambino dove abitavi?",
    "Octavio: Abitavo a Puebla.",
    "Argelia: E ieri, Leslie, che cosa hai fatto?",
    "Leslie: Sono andata a Roma e ho mangiato una pizza.",
  ],
};

export const PRACTICE = [
  { question: "Escribe el imperfetto de «io» de parlare.", answers: ["parlavo"], hint: "En -are, io termina en -avo.", explanation: "Parlare → parlavo. Parl más avo." },
  { question: "Escribe el imperfetto de «tu» de parlare.", answers: ["parlavi"], hint: "En -are, tu termina en -avi.", explanation: "Parlare → parlavi." },
  { question: "Escribe el imperfetto de «lui / lei» de parlare.", answers: ["parlava"], hint: "En -are, lui y lei terminan en -ava. Usted usa esta misma forma.", explanation: "Parlare → parlava." },
  { question: "Escribe el imperfetto de «noi» de parlare.", answers: ["parlavamo"], hint: "En -are, noi termina en -avamo.", explanation: "Parlare → parlavamo." },
  { question: "Escribe el imperfetto de «voi» de parlare.", answers: ["parlavate"], hint: "Voi equivale a ustedes. La terminación es -avate.", explanation: "Parlare → parlavate." },
  { question: "Escribe el imperfetto de «loro» de parlare.", answers: ["parlavano"], hint: "Loro equivale a ellos o ellas. La terminación es -avano.", explanation: "Parlare → parlavano." },
  { question: "Escribe el imperfetto de «io» de credere.", answers: ["credevo"], hint: "En -ere, io termina en -evo.", explanation: "Credere → credevo. Cred más evo." },
  { question: "Escribe el imperfetto de «io» de dormire.", answers: ["dormivo"], hint: "En -ire, io termina en -ivo.", explanation: "Dormire → dormivo. Dorm más ivo." },
  { question: "Escribe el imperfetto de «io» de essere.", answers: ["ero"], hint: "Essere no sigue la raíz ess-.", explanation: "Essere → ero. Cubre «era» y «estaba»." },
  { question: "Escribe el imperfetto de «loro» de essere.", answers: ["erano"], hint: "Loro equivale a ellos o ellas.", explanation: "Essere → erano." },
  { question: "Escribe el imperfetto de «io» de fare.", answers: ["facevo"], hint: "La raíz de este tiempo es facev-.", explanation: "Fare → facevo. Facev más o." },
  { question: "Escribe el imperfetto de «io» de bere.", answers: ["bevevo"], hint: "La raíz de este tiempo es bevev-.", explanation: "Bere → bevevo." },
  { question: "Escribe el imperfetto de «io» de dire.", answers: ["dicevo"], hint: "La raíz de este tiempo es dicev-.", explanation: "Dire → dicevo." },
  { question: "Escribe lo que dice Leslie: De niña vivía en Nápoles.", answers: ["Da bambina abitavo a Napoli"], hint: "De niña, si habla una mujer, es da bambina. Io de abitare es abitavo.", explanation: "De niña vivía en Nápoles, dicho por Leslie, es Da bambina abitavo a Napoli." },
  { question: "Escribe en italiano: Hacía un día bonito.", answers: ["Era una bella giornata"], hint: "Giornata es femenino: una bella giornata. Essere, en lui / lei, es era.", explanation: "Hacía un día bonito = Era una bella giornata." },
  { question: "Escribe en italiano: La casa era grande.", answers: ["La casa era grande"], hint: "Casa es femenino. Grande, en singular, no cambia de género.", explanation: "La casa era grande se dice así: La casa era grande." },
  { question: "Escribe en italiano: Mientras comía, leía.", answers: ["Mentre mangiavo, leggevo"], hint: "Las dos acciones siguen a la vez: las dos van en imperfetto.", explanation: "Mientras comía, leía = Mentre mangiavo, leggevo." },
  { question: "Escribe en italiano: Mientras yo estudiaba, Leslie llegó.", answers: ["Mentre studiavo, Leslie è arrivata"], hint: "Lo que sigue de fondo va en imperfetto. La llegada ya ocurrió: passato prossimo, en femenino.", explanation: "Mientras yo estudiaba, Leslie llegó = Mentre studiavo, Leslie è arrivata." },
  { question: "Escribe en italiano: Ayer comí una pizza.", answers: ["Ieri ho mangiato una pizza"], hint: "Es un hecho de un día concreto: passato prossimo con avere.", explanation: "Ayer comí una pizza = Ieri ho mangiato una pizza." },
  { question: "Escribe lo que dice Octavio: De niño siempre comía pizza.", answers: ["Da bambino mangiavo sempre la pizza", "Da bambino mangiavo sempre pizza"], hint: "De niño, si habla un hombre, es da bambino. El hábito va en imperfetto.", explanation: "De niño siempre comía pizza, dicho por Octavio, es Da bambino mangiavo sempre la pizza." },
  { question: "Elige el tiempo de «Ieri ho mangiato una pizza»: (passato prossimo / imperfetto).", answers: ["passato prossimo"], hint: "Ieri señala un momento concreto y la acción ya quedó hecha.", explanation: "Ieri ho mangiato una pizza está en passato prossimo." },
  { question: "Elige el tiempo de «Da bambina abitavo a Napoli»: (passato prossimo / imperfetto).", answers: ["imperfetto"], hint: "Da bambina presenta una época, no un solo día.", explanation: "Da bambina abitavo a Napoli está en imperfetto." },
  { question: "Escribe en italiano: Cada verano íbamos a Venecia.", answers: ["Ogni estate andavamo a Venezia"], hint: "Cada verano es ogni estate. Nosotros de andare, en imperfetto, es andavamo.", explanation: "Cada verano íbamos a Venecia = Ogni estate andavamo a Venezia." },
  { question: "Escribe en italiano: los sábados.", answers: ["il sabato", "ogni sabato"], hint: "Con artículo, el día es cada semana. Sabato es masculino: il. Ogni sabato también nombra ese ritmo.", explanation: "Los sábados = il sabato. Ogni sabato también se dice. Sabato, sin artículo, es un sábado concreto." },
  { question: "Escribe en italiano: Mientras.", answers: ["mentre"], hint: "Introduce una acción de fondo o dos acciones a la vez.", explanation: "Mientras = mentre." },
];
