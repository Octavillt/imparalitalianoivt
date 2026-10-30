// Presente indicativo. CONJUGATION_MODELS lo leen las pruebas: seis personas,
// en este orden, y la forma es raíz + terminación (la raíz es el infinitivo
// sin -are, -ere o -ire).
const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const ng = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });
const pr = t => ({ t, r: "prep" });

// `stem` es la parte que se pinta junto a la terminación. En -giare e -iare
// no es el infinitivo sin -are: mangiare se parte en mang + io, no en mangi + io.
function model(verb, group, ends, esps, stem = verb.slice(0, -3)) {
  return {
    verb,
    group,
    stem,
    forms: PERSONS.map((subj, index) => ({
      subj,
      end: ends[index],
      form: stem + ends[index],
      esp: esps[index],
    })),
  };
}

const ARE = ["o", "i", "a", "iamo", "ate", "ano"];
const ERE = ["o", "i", "e", "iamo", "ete", "ono"];
const IRE = ["o", "i", "e", "iamo", "ite", "ono"];
const ISC = ["isco", "isci", "isce", "iamo", "ite", "iscono"];

const yo = (esp, tu, lei, noi, voi, loro) => [esp, tu, lei, noi, voi, loro];

export const CONJUGATION_MODELS = [
  model("parlare", "-are", ARE, yo("yo hablo", "tú hablas", "él / ella habla", "nosotros hablamos", "ustedes hablan", "ellos / ellas hablan")),
  model("credere", "-ere", ERE, yo("yo creo", "tú crees", "él / ella cree", "nosotros creemos", "ustedes creen", "ellos / ellas creen")),
  model("dormire", "-ire", IRE, yo("yo duermo", "tú duermes", "él / ella duerme", "nosotros dormimos", "ustedes duermen", "ellos / ellas duermen")),
  model("capire", "-ire (-isc-)", ISC, yo("yo entiendo", "tú entiendes", "él / ella entiende", "nosotros entendemos", "ustedes entienden", "ellos / ellas entienden")),
];

// -care / -gare meten h ante i. -giare e -iare no escriben dos i.
export const SPELLING_GROUPS = [
  {
    title: "-care y -gare: h ante i",
    text: "Si la terminación empieza con i, se escribe h para conservar el sonido de la c o de la g. Cerca, pago, cercate y pagate no la llevan: esa terminación no empieza con i.",
    models: [
      model("cercare", "-care", ["o", "hi", "a", "hiamo", "ate", "ano"], yo("yo busco", "tú buscas", "él / ella busca", "nosotros buscamos", "ustedes buscan", "ellos / ellas buscan")),
      model("pagare", "-gare", ["o", "hi", "a", "hiamo", "ate", "ano"], yo("yo pago", "tú pagas", "él / ella paga", "nosotros pagamos", "ustedes pagan", "ellos / ellas pagan")),
    ],
  },
  {
    title: "-ciare y -giare: una sola i",
    text: "En mangiare, la i no se escribe dos veces. Cae cuando la terminación ya empieza con i: mangi, mangiamo. Sigue en mangio, mangia, mangiate y mangiano.",
    models: [
      model("mangiare", "-giare", ["io", "i", "ia", "iamo", "iate", "iano"], yo("yo como", "tú comes", "él / ella come", "nosotros comemos", "ustedes comen", "ellos / ellas comen"), "mang"),
    ],
  },
  {
    title: "-iare: tampoco se duplica la i",
    text: "En studiare la i no se escribe dos veces: studi, studiamo. Lo mismo pasa en verbos como cambiare: cambi, cambiamo.",
    models: [
      model("studiare", "-iare", ["io", "i", "ia", "iamo", "iate", "iano"], yo("yo estudio", "tú estudias", "él / ella estudia", "nosotros estudiamos", "ustedes estudian", "ellos / ellas estudian"), "stud"),
    ],
  },
];

// Mismo recorte que capire. Partire y dormire no entran aquí.
export const ISC_MODELS = [
  model("finire", "-ire (-isc-)", ISC, yo("yo termino", "tú terminas", "él / ella termina", "nosotros terminamos", "ustedes terminan", "ellos / ellas terminan")),
  model("preferire", "-ire (-isc-)", ISC, yo("yo prefiero", "tú prefieres", "él / ella prefiere", "nosotros preferimos", "ustedes prefieren", "ellos / ellas prefieren")),
  model("pulire", "-ire (-isc-)", ISC, yo("yo limpio", "tú limpias", "él / ella limpia", "nosotros limpiamos", "ustedes limpian", "ellos / ellas limpian")),
  model("spedire", "-ire (-isc-)", ISC, yo("yo envío", "tú envías", "él / ella envía", "nosotros enviamos", "ustedes envían", "ellos / ellas envían")),
];

// El golpe va en la primera sílaba. No se escribe acento.
export const LORO_STRESS = [
  { form: "parlano", guide: "PAR-la-no", esp: "ellos / ellas hablan" },
  { form: "credono", guide: "CRE-do-no", esp: "ellos / ellas creen" },
  { form: "dormono", guide: "DOR-mo-no", esp: "ellos / ellas duermen" },
];

export const USES = [
  {
    icon: "🔁",
    title: "Hábitos",
    subtitle: "Una acción que se repite en la rutina",
    pts: [vb("Studio"), " italiano ogni giorno."],
    esp: "Estudio italiano todos los días.",
  },
  {
    icon: "🍕",
    title: "Lo que pasa ahora",
    subtitle: "El presente basta cuando no hace falta marcar la acción en curso",
    pts: [wh("Che cosa"), " ", vb("fai"), "? ", vb("Mangio"), " una pizza."],
    esp: "¿Qué haces? Como una pizza.",
  },
];

export const NEGATIVE = [
  { pts: [ng("Non"), " ", vb("lavoro"), " il sabato."], esp: "No trabajo los sábados." },
  { pts: [su("Leslie"), " ", ng("non"), " ", vb("dorme"), "."], esp: "Leslie no duerme." },
  { pts: [ng("Non"), " ", vb("capisco"), "."], esp: "No entiendo." },
];

export const ASK_SAMPLES = [
  { pts: [vb("Lavori"), " ", pr("a"), " Roma?"], esp: "¿Trabajas en Roma?" },
  { pts: [wh("Dove"), " ", vb("lavori"), "?"], esp: "¿Dónde trabajas?" },
  { pts: [wh("Che cosa"), " ", vb("fai"), "?"], a: "Mangio una pizza.", esp: "¿Qué haces? — Como una pizza." },
];

export const THIRD_PERSON = [
  { pts: [su("Leslie"), " ", vb("lavora"), " ", pr("a"), " Roma."], esp: "Leslie trabaja en Roma." },
  { pts: [su("Octavio"), " ", vb("legge"), " un libro."], esp: "Octavio lee un libro." },
  { pts: [su("Argelia"), " e ", su("Leslie"), " ", vb("abitano"), " ", pr("a"), " Firenze."], esp: "Argelia y Leslie viven en Florencia." },
  { pts: [su("Argelia"), " ", vb("capisce"), " l'italiano."], esp: "Argelia entiende el italiano." },
];

// io, lui/lei, español y una nota corta si el verbo no sigue el modelo liso.
export const DAILY = [
  ["lavorare", "lavoro", "lavora", "trabajar", ""],
  ["studiare", "studio", "studia", "estudiar", "No duplica la i"],
  ["mangiare", "mangio", "mangia", "comer", "No duplica la i"],
  ["leggere", "leggo", "legge", "leer", ""],
  ["scrivere", "scrivo", "scrive", "escribir", ""],
  ["dormire", "dormo", "dorme", "dormir", "Sin -isc-"],
  ["partire", "parto", "parte", "salir, partir", "Sin -isc-"],
  ["capire", "capisco", "capisce", "entender", "Con -isc-"],
  ["finire", "finisco", "finisce", "terminar", "Con -isc-"],
];

export const PRACTICE = [
  { question: "Escribe la forma de «io» de parlare.", answers: ["parlo"], hint: "En -are, io termina en -o.", explanation: "Parlare → parlo. La raíz parl más o." },
  { question: "Escribe la forma de «tu» de parlare.", answers: ["parli"], hint: "En -are, tu termina en -i.", explanation: "Parlare → parli." },
  { question: "Escribe la forma de «lui / lei» de credere.", answers: ["crede"], hint: "En -ere, lui/lei termina en -e.", explanation: "Credere → crede." },
  { question: "Escribe la forma de «noi» de credere.", answers: ["crediamo"], hint: "Noi de -ere termina en -iamo.", explanation: "Credere → crediamo." },
  { question: "Escribe la forma de «voi» de dormire.", answers: ["dormite"], hint: "Voi equivale a ustedes. En -ire termina en -ite.", explanation: "Dormire → dormite. Voi es ustedes." },
  { question: "Escribe la forma de «loro» de parlare.", answers: ["parlano"], hint: "Se pronuncia PAR-la-no. No lleva acento escrito.", explanation: "Parlare → parlano. El golpe va en par-. No se escribe acento." },
  { question: "Escribe la forma de «loro» de credere.", answers: ["credono"], hint: "Se pronuncia CRE-do-no. No lleva acento escrito.", explanation: "Credere → credono. El golpe va en cre-." },
  { question: "Escribe la forma de «loro» de dormire.", answers: ["dormono"], hint: "Se pronuncia DOR-mo-no. No lleva acento escrito.", explanation: "Dormire → dormono. El golpe va en dor-." },
  { question: "Escribe la forma de «io» de capire.", answers: ["capisco"], hint: "En io, capire agrega -isc-.", explanation: "Capire → capisco. El grupo -isc- agrega isc en io, tu, lui/lei y loro." },
  { question: "Escribe la forma de «tu» de capire.", answers: ["capisci"], hint: "En tu también va -isc-.", explanation: "Capire → capisci." },
  { question: "Escribe la forma de «noi» de capire.", answers: ["capiamo"], hint: "En noi no va -isc-.", explanation: "Capire → capiamo. Noi y voi no agregan -isc-." },
  { question: "Escribe la forma de «loro» de capire.", answers: ["capiscono"], hint: "En loro sí va -isc-.", explanation: "Capire → capiscono. Se pronuncia ca-PIS-co-no." },
  { question: "Escribe la forma de «tu» de cercare.", answers: ["cerchi"], hint: "Ante i se escribe h para conservar el sonido.", explanation: "Cercare → cerchi. La h va entre la c y la i." },
  { question: "Escribe la forma de «noi» de pagare.", answers: ["paghiamo"], hint: "Pagare escribe h ante la i de -iamo.", explanation: "Pagare → paghiamo." },
  { question: "Escribe la forma de «tu» de mangiare.", answers: ["mangi"], hint: "En mangiare la i no se repite.", explanation: "Mangiare → mangi. No se escribe una i de más." },
  { question: "Escribe la forma de «noi» de studiare.", answers: ["studiamo"], hint: "En studiare la i no se duplica.", explanation: "Studiare → studiamo." },
  { question: "Escribe la forma de «io» de partire.", answers: ["parto"], hint: "Partire no agrega -isc-.", explanation: "Partire → parto. Sigue el modelo de dormire, no el de capire." },
  { question: "Escribe la forma de «io» de finire.", answers: ["finisco"], hint: "Finire sí agrega -isc- en io.", explanation: "Finire → finisco. En noi es finiamo, sin -isc-." },
  { question: "Escribe: No trabajo los sábados.", answers: ["Non lavoro il sabato", "Io non lavoro il sabato"], hint: "Non va antes del verbo.", explanation: "No trabajo los sábados = Non lavoro il sabato. Il sabato significa cada sábado." },
  { question: "Escribe la pregunta, sin cambiar el orden: ¿Trabajas en Roma?", answers: ["Lavori a Roma?", "Tu lavori a Roma?"], hint: "La pregunta conserva el orden. Roma lleva a.", explanation: "¿Trabajas en Roma? = Lavori a Roma? Solo cambia la entonación." },
  { question: "Escribe: Leslie trabaja en Roma.", answers: ["Leslie lavora a Roma"], hint: "La ciudad lleva a, sin artículo.", explanation: "Leslie trabaja en Roma = Leslie lavora a Roma." },
  { question: "Escribe: Octavio lee un libro.", answers: ["Octavio legge un libro"], hint: "Leggere, con él, es legge.", explanation: "Octavio lee un libro = Octavio legge un libro." },
  { question: "Escribe la forma de «loro» de abitare.", answers: ["abitano"], hint: "Abitare es del grupo -are.", explanation: "Abitare → abitano. Argelia e Leslie abitano a Firenze." },
  { question: "Escribe la respuesta: Che cosa fai? (como una pizza).", answers: ["Mangio una pizza", "Io mangio una pizza"], hint: "El presente basta para decir lo que haces ahora.", explanation: "Che cosa fai? — Mangio una pizza." },
];
