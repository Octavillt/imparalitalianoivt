// Verbo + infinitivo: sin preposición, con a o con di.
// Los tokens llevan { t, r }. La raíz no se parte aquí: las formas irregulares
// se memorizan enteras.
const vb = t => ({ t, r: "verb" });
const inf = t => ({ t, r: "inf" });
const pr = t => ({ t, r: "prep" });
const su = t => ({ t, r: "subject" });
const cr = t => ({ t, r: "articolata" });

export const PIACE = [
  { pts: [vb("Mi piace"), " ", inf("leggere"), "."], esp: "Me gusta leer." },
  { pts: [vb("Ti piace"), " ", inf("cantare"), "?"], esp: "¿Te gusta cantar?" },
  { pts: [vb("Mi piace"), " la pizza."], esp: "Me gusta la pizza." },
  { pts: [vb("Mi piacciono"), " le fragole."], esp: "Me gustan las fresas." },
  { pts: ["A ", su("Leslie"), " ", vb("piace"), " il gelato."], esp: "A Leslie le gusta el helado." },
  { pts: ["A ", su("Octavio"), " ", vb("piacciono"), " i gelati."], esp: "A Octavio le gustan los helados." },
];

const person = (subj, form, esp) => ({ subj, form, esp });

export const MODALS = [
  {
    verb: "volere",
    es: "querer",
    forms: [
      person("io", "voglio", "quiero"),
      person("tu", "vuoi", "quieres"),
      person("lui / lei", "vuole", "quiere"),
      person("noi", "vogliamo", "queremos"),
      person("voi", "volete", "ustedes quieren"),
      person("loro", "vogliono", "ellos / ellas quieren"),
    ],
  },
  {
    verb: "potere",
    es: "poder",
    forms: [
      person("io", "posso", "puedo"),
      person("tu", "puoi", "puedes"),
      person("lui / lei", "può", "puede"),
      person("noi", "possiamo", "podemos"),
      person("voi", "potete", "ustedes pueden"),
      person("loro", "possono", "ellos / ellas pueden"),
    ],
  },
  {
    verb: "dovere",
    es: "deber, tener que",
    forms: [
      person("io", "devo", "debo"),
      person("tu", "devi", "debes"),
      person("lui / lei", "deve", "debe"),
      person("noi", "dobbiamo", "debemos"),
      person("voi", "dovete", "ustedes deben"),
      person("loro", "devono", "ellos / ellas deben"),
    ],
  },
  {
    verb: "sapere",
    es: "saber",
    forms: [
      person("io", "so", "sé"),
      person("tu", "sai", "sabes"),
      person("lui / lei", "sa", "sabe"),
      person("noi", "sappiamo", "sabemos"),
      person("voi", "sapete", "ustedes saben"),
      person("loro", "sanno", "ellos / ellas saben"),
    ],
  },
];

// Preferire es del grupo -isc-. La forma sale de prefer + terminación.
export const PREFERIRE = [
  person("io", "preferisco", "prefiero"),
  person("tu", "preferisci", "prefieres"),
  person("lui / lei", "preferisce", "prefiere"),
  person("noi", "preferiamo", "preferimos"),
  person("voi", "preferite", "ustedes prefieren"),
  person("loro", "preferiscono", "ellos / ellas prefieren"),
];

export const NO_PREP = [
  { pts: [vb("Voglio"), " ", inf("mangiare"), "."], esp: "Quiero comer." },
  { pts: [vb("Posso"), " ", inf("entrare"), "?"], esp: "¿Puedo entrar?" },
  { pts: [vb("Devo"), " ", inf("studiare"), "."], esp: "Debo estudiar." },
  { pts: [vb("So"), " ", inf("nuotare"), "."], esp: "Sé nadar." },
  { pts: [vb("Preferisco"), " ", inf("leggere"), "."], esp: "Prefiero leer." },
];

export const WITH_A = [
  { pts: [vb("Imparo"), " ", pr("a"), " ", inf("cucinare"), " la pasta."], esp: "Aprendo a cocinar la pasta." },
  { pts: [vb("Vado"), " ", pr("a"), " ", inf("mangiare"), "."], esp: "Voy a comer." },
  { pts: [vb("Comincio"), " ", pr("a"), " ", inf("lavorare"), " ", cr("alle"), " nove."], esp: "Empiezo a trabajar a las nueve." },
  { pts: [vb("Continuo"), " ", pr("a"), " ", inf("leggere"), "."], esp: "Sigo leyendo." },
  { pts: [vb("Aiuto"), " ", su("Octavio"), " ", pr("a"), " ", inf("studiare"), "."], esp: "Ayudo a Octavio a estudiar." },
  { pts: [vb("Vengo"), " ", pr("a"), " ", inf("prendere"), " un caffè."], esp: "Vengo a tomar un café." },
  { pts: [vb("Riesco"), " ", pr("a"), " ", inf("capire"), "."], esp: "Logro entender." },
];

export const WITH_DI = [
  { pts: [vb("Finisco"), " ", pr("di"), " ", inf("lavorare"), " ", cr("alle"), " sei."], esp: "Termino de trabajar a las seis." },
  { pts: [vb("Smetto"), " ", pr("di"), " ", inf("mangiare"), " il gelato."], esp: "Dejo de comer el helado." },
  { pts: [vb("Decido"), " ", pr("di"), " ", inf("restare"), " ", pr("a"), " Roma."], esp: "Decido quedarme en Roma." },
  { pts: [vb("Cerco"), " ", pr("di"), " ", inf("studiare"), " ogni giorno."], esp: "Intento estudiar todos los días." },
  { pts: [vb("Dimentico"), " ", pr("di"), " ", inf("chiamare"), " Leslie."], esp: "Olvido llamar a Leslie." },
  { pts: [vb("Spero"), " ", pr("di"), " ", inf("vedere"), " Venezia."], esp: "Espero ver Venecia." },
];

// Contraste real con el español: el mismo verbo cambia con di o con sustantivo.
export const DIFFERENCES = [
  { pts: [vb("Cerco"), " un caffè ", pr("a"), " Roma."], esp: "Busco un café en Roma." },
  { pts: [vb("Cerco"), " ", pr("di"), " ", inf("studiare"), "."], esp: "Intento estudiar." },
  { pts: [vb("Smetto"), " ", pr("di"), " ", inf("lavorare"), " ", cr("alle"), " sei."], esp: "Dejo de trabajar a las seis." },
  { pts: [vb("Spero"), " ", pr("di"), " ", inf("restare"), " ", pr("a"), " Firenze."], esp: "Espero quedarme en Florencia." },
];

// Verbo, preposición (sin / a / di) y traducción, para la lista filtrable.
export const VERB_PATTERNS = [
  { verb: "volere", prep: "sin", es: "querer", sample: "Voglio mangiare." },
  { verb: "potere", prep: "sin", es: "poder", sample: "Posso entrare?" },
  { verb: "dovere", prep: "sin", es: "deber, tener que", sample: "Devo studiare." },
  { verb: "sapere", prep: "sin", es: "saber hacer", sample: "So nuotare." },
  { verb: "preferire", prep: "sin", es: "preferir", sample: "Preferisco leggere." },
  { verb: "imparare", prep: "a", es: "aprender a", sample: "Imparo a cucinare." },
  { verb: "cominciare", prep: "a", es: "empezar a", sample: "Comincio a lavorare alle nove." },
  { verb: "continuare", prep: "a", es: "seguir", sample: "Continuo a leggere." },
  { verb: "aiutare", prep: "a", es: "ayudar a", sample: "Aiuto Octavio a studiare." },
  { verb: "andare", prep: "a", es: "ir a", sample: "Vado a mangiare." },
  { verb: "venire", prep: "a", es: "venir a", sample: "Vengo a prendere un caffè." },
  { verb: "riuscire", prep: "a", es: "lograr, conseguir", sample: "Riesco a capire." },
  { verb: "finire", prep: "di", es: "terminar de", sample: "Finisco di lavorare alle sei." },
  { verb: "smettere", prep: "di", es: "dejar de", sample: "Smetto di mangiare." },
  { verb: "decidere", prep: "di", es: "decidir", sample: "Decido di restare." },
  { verb: "cercare", prep: "di", es: "intentar; con sustantivo, buscar", sample: "Cerco di studiare." },
  { verb: "dimenticare", prep: "di", es: "olvidar", sample: "Dimentico di chiamare Leslie." },
  { verb: "sperare", prep: "di", es: "esperar", sample: "Spero di vedere Venezia." },
];

export const PRACTICE = [
  { question: "Escribe: Me gusta leer.", answers: ["Mi piace leggere", "A me piace leggere"], hint: "Con infinitivo, el verbo va en singular: piace.", explanation: "Me gusta leer = Mi piace leggere. El infinitivo es singular, así que va piace." },
  { question: "Escribe: ¿Te gusta cantar?", answers: ["Ti piace cantare?", "A te piace cantare?"], hint: "Cantare es infinitivo: el verbo queda en singular.", explanation: "¿Te gusta cantar? = Ti piace cantare?" },
  { question: "Escribe: Me gusta la pizza.", answers: ["Mi piace la pizza", "A me piace la pizza"], hint: "Pizza es singular.", explanation: "Me gusta la pizza = Mi piace la pizza. El verbo concuerda con la pizza, no con la persona." },
  { question: "Escribe: Me gustan las fresas.", answers: ["Mi piacciono le fragole", "A me piacciono le fragole"], hint: "Fragole es plural: el verbo va en plural.", explanation: "Me gustan las fresas = Mi piacciono le fragole." },
  { question: "Escribe la forma de «io» de volere.", answers: ["voglio"], hint: "Empieza con vogl-.", explanation: "Volere → voglio. Con infinitivo no lleva preposición: Voglio mangiare." },
  { question: "Escribe la forma de «tu» de volere.", answers: ["vuoi"], hint: "Es una forma breve.", explanation: "Volere → vuoi." },
  { question: "Escribe la forma de «voi» de volere.", answers: ["volete"], hint: "La forma de ustedes no lleva gli.", explanation: "Volere, en ustedes, es volete. Noi sí lleva gli: vogliamo." },
  { question: "Escribe la forma de «loro» de volere.", answers: ["vogliono"], hint: "Loro equivale a ellos o ellas.", explanation: "Volere → vogliono." },
  { question: "Escribe la forma de «lui / lei» de potere.", answers: ["può"], hint: "Lleva acento grave.", explanation: "Potere → può. Se escribe con acento grave." },
  { question: "Escribe la forma de «noi» de potere.", answers: ["possiamo"], hint: "Lleva dos s.", explanation: "Potere → possiamo." },
  { question: "Escribe la forma de «noi» de dovere.", answers: ["dobbiamo"], hint: "La raíz de noi pasa a dob-.", explanation: "Dovere → dobbiamo. En ustedes es dovete." },
  { question: "Escribe la forma de «voi» de dovere.", answers: ["dovete"], hint: "Voi equivale a ustedes.", explanation: "Dovere → dovete." },
  { question: "Escribe la forma de «io» de sapere.", answers: ["so"], hint: "No lleva acento.", explanation: "Sapere → so. So nuotare = sé nadar." },
  { question: "Escribe la forma de «loro» de sapere.", answers: ["sanno"], hint: "Lleva dos n.", explanation: "Sapere → sanno. Noi es sappiamo, con dos p." },
  { question: "Escribe la forma de «io» de preferire.", answers: ["preferisco"], hint: "Preferire agrega -isc- en io.", explanation: "Preferire → preferisco. En noi es preferiamo, sin -isc-." },
  { question: "Escribe con volere: Quiero comer.", answers: ["Voglio mangiare", "Io voglio mangiare"], hint: "Volere va pegado al infinitivo, sin a ni di.", explanation: "Quiero comer = Voglio mangiare." },
  { question: "Escribe con sapere: Sé nadar.", answers: ["So nuotare", "Io so nuotare"], hint: "Sapere más infinitivo es saber hacer algo.", explanation: "Sé nadar = So nuotare. La diferencia con potere se ve en Básico IV." },
  { question: "Elige la preposición: Imparo (a / di) cucinare.", answers: ["a"], hint: "Imparare pide a antes del infinitivo.", explanation: "Imparo a cucinare. Imparare va con a." },
  { question: "Elige la preposición: Vado (a / di) mangiare.", answers: ["a"], hint: "Andare pide a.", explanation: "Vado a mangiare." },
  { question: "Elige la preposición: Finisco (di / a) lavorare alle sei.", answers: ["di"], hint: "Finire pide di antes del infinitivo.", explanation: "Finisco di lavorare alle sei. Alle = a + le." },
  { question: "Elige la preposición: Cerco (di / a) studiare.", answers: ["di"], hint: "Con infinitivo, cercare di significa intentar.", explanation: "Cerco di studiare = Intento estudiar. Cerco un caffè, en cambio, es busco un café." },
  { question: "Elige la preposición: Decido (di / a) restare.", answers: ["di"], hint: "Decidere pide di.", explanation: "Decido di restare." },
  { question: "¿Qué significa «smettere di»?", answers: ["dejar de", "dejar de hacer algo"], answerLang: "es", hint: "Es lo que haces cuando ya no continúas una acción.", explanation: "Smettere di significa dejar de: Smetto di mangiare = Dejo de comer." },
  { question: "¿Qué significa «cercare di» seguido de infinitivo?", answers: ["intentar", "tratar de"], answerLang: "es", hint: "No es el uso de buscar un objeto.", explanation: "Cercare di + infinitivo = intentar. Cercare + sustantivo = buscar: Cerco un caffè." },
  { question: "¿Qué significa «sperare di» seguido de infinitivo?", answers: ["esperar"], answerLang: "es", hint: "En italiano el infinitivo lleva di.", explanation: "Sperare di + infinitivo = esperar + infinitivo: Spero di vedere Venezia = Espero ver Venecia." },
];
