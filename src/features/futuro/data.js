// Futuro semplice. FUTURE_MODELS y FUTURE_IRREGULAR los leen las pruebas.
// En los modelos, la forma es raíz + terminación. La a de -are ya pasó a e.

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const es = t => ({ t, r: "essere" });
const ng = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });
const pr = t => ({ t, r: "presente" });

export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];
const ENDS = ["ò", "ai", "à", "emo", "ete", "anno"];

const gloss = (io, tu, lei, noi, voi, loro) => [io, tu, lei, noi, voi, loro];

function futureModel(verb, stem, esps, group) {
  const forms = ENDS.map(end => stem + end);
  return { verb, stem, ends: ENDS, forms, esps, group };
}

const people = (base, usted) => gloss(
  `yo ${base}ré`,
  `tú ${base}rás`,
  `él / ella / usted ${usted}`,
  `nosotros ${base}remos`,
  `ustedes ${base}rán`,
  `ellos / ellas ${base}rán`,
);

export const FUTURE_MODELS = [
  futureModel("parlare", "parler", people("habla", "hablará"), "modelo"),
  futureModel("credere", "creder", people("cree", "creerá"), "modelo"),
  futureModel("dormire", "dormir", people("dormi", "dormirá"), "modelo"),
  futureModel("cercare", "cercher", people("busca", "buscará"), "h"),
  futureModel("pagare", "pagher", people("paga", "pagará"), "h"),
  futureModel("mangiare", "manger", people("come", "comerá"), "i"),
  futureModel("cominciare", "comincer", people("empeza", "empezará"), "i"),
];

const ROOTS = [
  ["essere", "sar", "ser, estar"],
  ["avere", "avr", "tener"],
  ["andare", "andr", "ir"],
  ["fare", "far", "hacer"],
  ["dare", "dar", "dar"],
  ["stare", "star", "estar"],
  ["venire", "verr", "venir"],
  ["vedere", "vedr", "ver"],
  ["potere", "potr", "poder"],
  ["volere", "vorr", "querer"],
  ["dovere", "dovr", "deber, tener que"],
  ["sapere", "sapr", "saber"],
  ["bere", "berr", "beber"],
];

export const FUTURE_IRREGULAR = ROOTS.map(([verb, root, meaning]) => [verb, `${root}ò`, meaning]);

export const FUTURE_IRREGULAR_MODELS = ROOTS.map(([verb, root, meaning]) => ({
  verb,
  root,
  meaning,
  ends: ENDS,
  forms: ENDS.map(end => root + end),
}));

export const IO_GLOSS = {
  essere: "seré / estaré",
  avere: "tendré",
  andare: "iré",
  fare: "haré",
  dare: "daré",
  stare: "estaré",
  venire: "vendré",
  vedere: "veré",
  potere: "podré",
  volere: "querré",
  dovere: "tendré que",
  sapere: "sabré",
  bere: "beberé",
};

export const USES = [
  { title: "Plan", pts: ["L'anno prossimo ", vb("andrò"), " in Italia."], esp: "El año que viene iré a Italia." },
  { title: "Predicción", pts: ["Domani ", vb("pioverà"), "."], esp: "Mañana lloverá." },
  { title: "Hipótesis de ahora", pts: [es("Sarà"), " a casa."], esp: "Debe de estar en casa." },
];

export const PRESENT_FUTURE = [
  { pts: ["Domani ", pr("vado"), " a Roma."], esp: "Mañana voy a Roma." },
  { pts: ["Stasera ", pr("mangio"), " la pizza."], esp: "Esta noche como pizza." },
];

export const HYPOTHESIS = [
  { pts: [es("Avrà"), " fame."], esp: "Debe de tener hambre." },
];

export const SAME_ENDING = [
  { pts: ["Domani ", es("sarò"), " a Roma."], esp: "Mañana estaré en Roma." },
  { pts: [es("Starò"), " bene."], esp: "Estaré bien." },
];

export const NEGATIVE = [
  { pts: [ng("Non"), " ", vb("andrò"), " a Roma."], esp: "No iré a Roma." },
];

export const ASK_SAMPLES = [
  { pts: [wh("Dove"), " ", vb("andrai"), " in estate?"], esp: "¿Adónde irás en verano?" },
  { pts: [su("Lei"), " ", vb("andrà"), " a Milano?"], esp: "¿Irá usted a Milán?" },
  { pts: [wh("Che cosa"), " ", vb("farai"), " domani?"], esp: "¿Qué harás mañana?" },
];

export const MARKERS = [
  ["domani", "mañana"],
  ["dopodomani", "pasado mañana"],
  ["stasera", "esta noche"],
  ["la settimana prossima", "la semana que viene"],
  ["il mese prossimo", "el mes que viene"],
  ["l'anno prossimo", "el año que viene"],
  ["tra due giorni", "en dos días"],
];

export const PLANS = [
  {
    who: "Octavio",
    pts: ["L'anno prossimo ", vb("andrò"), " a Firenze. ", vb("Visiterò"), " il centro e ", vb("mangerò"), " un gelato."],
    esp: "El año que viene iré a Florencia. Visitaré el centro y comeré un helado.",
  },
  {
    who: "Leslie",
    pts: ["La settimana prossima ", vb("andrò"), " a Venezia con ", su("Argelia"), ". ", vb("Prenderemo"), " un caffè e ", ng("non"), " ", vb("andremo"), " a Napoli."],
    esp: "La semana que viene iré a Venecia con Argelia. Tomaremos un café y no iremos a Nápoles.",
  },
];

export const BOOK_DIALOGS = {
  prompt: "Completa los planes. Octavio habla de Florencia; Leslie, de Venecia.",
  items: [
    {
      blanks: [
        "Octavio: L'anno prossimo ___ (andare) a Firenze.",
        "Argelia: Che cosa ___ (fare)?",
        "Octavio: ___ (visitare) il centro e ___ (mangiare) un gelato.",
      ],
      answers: [
        "Octavio: L'anno prossimo andrò a Firenze.",
        "Argelia: Che cosa farai?",
        "Octavio: Visiterò il centro e mangerò un gelato.",
      ],
    },
    {
      blanks: [
        "Leslie: La settimana prossima ___ (andare) a Venezia.",
        "Octavio: ___ (andare) con Argelia?",
        "Leslie: Sì. ___ (prendere) un caffè. Non ___ (andare) a Napoli.",
      ],
      answers: [
        "Leslie: La settimana prossima andrò a Venezia.",
        "Octavio: Andrai con Argelia?",
        "Leslie: Sì. Prenderemo un caffè. Non andremo a Napoli.",
      ],
    },
  ],
};

export const PRACTICE = [
  { question: "Escribe el futuro semplice de «io» de parlare.", answers: ["parlerò"], hint: "En -are, la a pasa a e. Io lleva acento grave.", explanation: "Parlare → parlerò. La forma de este verbo lleva e: parlerò." },
  { question: "Escribe el futuro semplice de «tu» de parlare.", answers: ["parlerai"], hint: "La a pasa a e. Esta persona no lleva acento escrito.", explanation: "Parlare → parlerai." },
  { question: "Escribe el futuro semplice de «lui / lei» de parlare.", answers: ["parlerà"], hint: "Lleva acento grave en la a final. Usted usa esta misma forma.", explanation: "Parlare → parlerà." },
  { question: "Escribe el futuro semplice de «noi» de parlare.", answers: ["parleremo"], hint: "La a pasa a e. Noi no lleva acento escrito.", explanation: "Parlare → parleremo." },
  { question: "Escribe el futuro semplice de «voi» de parlare.", answers: ["parlerete"], hint: "Voi equivale a ustedes.", explanation: "Parlare → parlerete." },
  { question: "Escribe el futuro semplice de «loro» de parlare.", answers: ["parleranno"], hint: "Loro equivale a ellos o ellas. No lleva acento escrito.", explanation: "Parlare → parleranno." },
  { question: "Escribe el futuro semplice de «io» de credere.", answers: ["crederò"], hint: "Se quita la e final del infinitivo y se añade ò.", explanation: "Credere → crederò. Creder más ò." },
  { question: "Escribe el futuro semplice de «io» de dormire.", answers: ["dormirò"], hint: "Se quita la e final del infinitivo y se añade ò.", explanation: "Dormire → dormirò. Dormir más ò." },
  { question: "Escribe el futuro semplice de «io» de cercare.", answers: ["cercherò"], hint: "Se escribe h para conservar el sonido de la c.", explanation: "Cercare → cercherò." },
  { question: "Escribe el futuro semplice de «io» de pagare.", answers: ["pagherò"], hint: "Se escribe h para conservar el sonido de la g.", explanation: "Pagare → pagherò." },
  { question: "Escribe el futuro semplice de «io» de mangiare.", answers: ["mangerò"], hint: "No se escribe la i de mangiare: la e del futuro ya da ese sonido.", explanation: "Mangiare → mangerò." },
  { question: "Escribe el futuro semplice de «io» de cominciare.", answers: ["comincerò"], hint: "No se escribe la i de cominciare.", explanation: "Cominciare → comincerò." },
  { question: "Elige el futuro de «io» de parlare: (parlerò / parlarò).", answers: ["parlerò"], hint: "En -are, la a del infinitivo pasa a e.", explanation: "Parlare → parlerò." },
  { question: "Escribe el futuro semplice de «io» de essere.", answers: ["sarò"], hint: "La raíz sar- se conserva en las seis personas.", explanation: "Essere → sarò. También: sarai, sarà, saremo, sarete, saranno." },
  { question: "Escribe el futuro semplice de «io» de avere.", answers: ["avrò"], hint: "La raíz avr- se conserva en las seis personas.", explanation: "Avere → avrò." },
  { question: "Escribe el futuro semplice de «io» de andare.", answers: ["andrò"], hint: "La raíz andr- se conserva en las seis personas.", explanation: "Andare → andrò." },
  { question: "Escribe el futuro semplice de «io» de bere.", answers: ["berrò"], hint: "Lleva dos r. La raíz berr- se queda en las seis personas.", explanation: "Bere → berrò." },
  { question: "Escribe el futuro semplice de «io» de volere.", answers: ["vorrò"], hint: "Lleva dos r. Quisiera es vorrei: es otra forma, no este futuro.", explanation: "Volere → vorrò, querré. Vorrei es quisiera." },
  { question: "Escribe en italiano: El año que viene iré a Italia.", answers: ["L'anno prossimo andrò in Italia"], hint: "El año que viene es l'anno prossimo. Io de andare es andrò.", explanation: "El año que viene iré a Italia = L'anno prossimo andrò in Italia." },
  { question: "Escribe en italiano: Mañana lloverá.", answers: ["Domani pioverà"], hint: "Mañana es domani. La forma lleva acento grave: pioverà.", explanation: "Mañana lloverá = Domani pioverà." },
  { question: "Traduce al español la suposición de ahora: Sarà a casa.", answers: ["Debe de estar en casa", "Estará en casa", "Seguramente está en casa"], answerLang: "es", hint: "Aquí no hay marcador de futuro: se supone algo del momento.", explanation: "Sarà a casa, como hipótesis del presente, es «Debe de estar en casa». Domani sarà a Roma, con marcador, anuncia después: mañana estará en Roma." },
  { question: "Escribe en italiano: Mañana voy a Roma.", answers: ["Domani vado a Roma"], hint: "Con domani, el presente vado ya coloca el plan.", explanation: "Mañana voy a Roma = Domani vado a Roma." },
  { question: "Escribe en italiano: Esta noche como pizza.", answers: ["Stasera mangio la pizza", "Stasera mangio pizza"], hint: "Esta noche es stasera. El presente mangio lleva el plan.", explanation: "Esta noche como pizza = Stasera mangio la pizza." },
  { question: "Escribe en italiano: No iré a Roma.", answers: ["Non andrò a Roma"], hint: "Non va antes del verbo.", explanation: "No iré a Roma = Non andrò a Roma." },
  { question: "Escribe en italiano: ¿Adónde irás en verano?", answers: ["Dove andrai in estate?", "Dove andrai d'estate?"], hint: "Dove pregunta adónde. Tú de andare es andrai.", explanation: "¿Adónde irás en verano? = Dove andrai in estate? Dove andrai d'estate? también se dice." },
  { question: "Escribe en italiano: pasado mañana.", answers: ["dopodomani"], hint: "Es una sola palabra.", explanation: "Pasado mañana = dopodomani." },
  { question: "Escribe en italiano: en dos días.", answers: ["tra due giorni", "fra due giorni"], hint: "Tra va antes del periodo. Fra dice lo mismo en esta frase.", explanation: "En dos días = tra due giorni. Fra due giorni también se dice." },
  { question: "Escribe en italiano: ¿Irá usted a Milán?", answers: ["Lei andrà a Milano?"], hint: "Usted es Lei, con mayúscula. La forma es andrà.", explanation: "¿Irá usted a Milán? = Lei andrà a Milano?" },
];

// Cada forma del modelo es la raíz más la terminación, sin letra de más.
for (const item of FUTURE_MODELS) {
  item.forms.forEach((form, index) => {
    if (form !== item.stem + item.ends[index]) {
      throw new Error(`${item.verb}: ${item.stem} + ${item.ends[index]} no da ${form}`);
    }
  });
}
