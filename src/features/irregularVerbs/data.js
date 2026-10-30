// Verbos con presente irregular, o con presente regular y participio distinto.
// En el presente regular, la forma es raíz + terminación y las dos partes
// se muestran juntas en la tarjeta.
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const pr = t => ({ t, r: "prep" });
const pp = t => ({ t, r: "participle" });
const aux = t => ({ t, r: "essere" });

export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];
const ERE = ["o", "i", "e", "iamo", "ete", "ono"];
const IRE = ["o", "i", "e", "iamo", "ite", "ono"];

function irregular(inf, es, part, forms, note = "") {
  if (forms.length !== PERSONS.length) throw new Error(`${inf}: faltan personas`);
  return { inf, es, part, io: forms[0], forms, present: "irregular", note };
}

function regular(inf, es, part, stem, ends, note = "") {
  if (ends.length !== PERSONS.length) throw new Error(`${inf}: faltan terminaciones`);
  const forms = ends.map(end => stem + end);
  return { inf, es, part, stem, ends, io: forms[0], forms, present: "regular", note };
}

export const PRESENT_IRREGULAR = [
  irregular("andare", "ir", "andato", ["vado", "vai", "va", "andiamo", "andate", "vanno"]),
  irregular("fare", "hacer", "fatto", ["faccio", "fai", "fa", "facciamo", "fate", "fanno"], "En ustedes: fate."),
  irregular("dare", "dar", "dato", ["do", "dai", "dà", "diamo", "date", "danno"], "Dà lleva acento para distinguirse de la preposición da."),
  irregular("stare", "estar", "stato", ["sto", "stai", "sta", "stiamo", "state", "stanno"], "Sta no lleva acento. El participio stato es el mismo de essere."),
  irregular("dire", "decir", "detto", ["dico", "dici", "dice", "diciamo", "dite", "dicono"], "En ustedes: dite."),
  irregular("venire", "venir", "venuto", ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"]),
  irregular("uscire", "salir", "uscito", ["esco", "esci", "esce", "usciamo", "uscite", "escono"], "Io esco; noi usciamo."),
  irregular("bere", "beber", "bevuto", ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"], "La raíz del presente es bev-."),
  irregular("tenere", "sostener, mantener", "tenuto", ["tengo", "tieni", "tiene", "teniamo", "tenete", "tengono"], "La posesión va con avere."),
  irregular("rimanere", "quedarse, permanecer", "rimasto", ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"]),
  irregular("salire", "subir", "salito", ["salgo", "sali", "sale", "saliamo", "salite", "salgono"]),
  irregular("scegliere", "elegir", "scelto", ["scelgo", "scegli", "sceglie", "scegliamo", "scegliete", "scelgono"]),
  irregular("sapere", "saber", "saputo", ["so", "sai", "sa", "sappiamo", "sapete", "sanno"]),
  irregular("potere", "poder", "potuto", ["posso", "puoi", "può", "possiamo", "potete", "possono"]),
  irregular("volere", "querer", "voluto", ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"]),
  irregular("dovere", "deber, tener que", "dovuto", ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"]),
  irregular("essere", "ser, estar", "stato", ["sono", "sei", "è", "siamo", "siete", "sono"]),
  irregular("avere", "tener", "avuto", ["ho", "hai", "ha", "abbiamo", "avete", "hanno"]),
];

export const PARTICIPLE_IRREGULAR = [
  regular("prendere", "tomar, agarrar", "preso", "prend", ERE),
  regular("mettere", "poner", "messo", "mett", ERE),
  regular("leggere", "leer", "letto", "legg", ERE),
  regular("scrivere", "escribir", "scritto", "scriv", ERE),
  regular("vedere", "ver", "visto", "ved", ERE, "También existe veduto."),
  regular("aprire", "abrir", "aperto", "apr", IRE),
  regular("chiudere", "cerrar", "chiuso", "chiud", ERE),
  regular("perdere", "perder", "perso", "perd", ERE, "También existe perduto."),
  regular("rispondere", "responder", "risposto", "rispond", ERE),
  regular("chiedere", "pedir, preguntar", "chiesto", "chied", ERE),
  regular("correre", "correr", "corso", "corr", ERE),
  regular("vivere", "vivir", "vissuto", "viv", ERE),
  regular("offrire", "ofrecer", "offerto", "offr", IRE),
  regular("scendere", "bajar", "sceso", "scend", ERE),
  regular("spendere", "gastar", "speso", "spend", ERE),
  regular("vincere", "ganar", "vinto", "vinc", ERE),
];

export const IRREGULAR_VERBS = [...PRESENT_IRREGULAR, ...PARTICIPLE_IRREGULAR];

export const USE_SENTENCES = [
  { pts: [su("Io"), " ", vb("vado"), " ", pr("a"), " Roma."], esp: "Voy a Roma." },
  { pts: [su("Leslie"), " ", vb("fa"), " una pizza."], esp: "Leslie hace una pizza." },
  { pts: [su("Argelia"), " ", vb("dà"), " un gelato ", pr("a"), " Leslie."], esp: "Argelia da un helado a Leslie." },
  { pts: [su("Octavio"), " ", vb("beve"), " un caffè ", pr("a"), " Venezia."], esp: "Octavio bebe un café en Venecia." },
];

export const PASSATO_SAMPLES = [
  { pts: [aux("Ho"), " ", pp("mangiato"), "."], esp: "He comido. / Comí." },
  { pts: [aux("Ho"), " ", pp("fatto"), "."], esp: "He hecho. / Hice." },
  { pts: [aux("Sono"), " ", pp("andato"), "."], esp: "He ido. / Fui. (masculino)" },
];

export const PRACTICE = [
  { question: "Escribe la forma de «io» de andare.", answers: ["vado"], hint: "No usa la raíz and-.", explanation: "Andare → vado. En loro es vanno." },
  { question: "Escribe la forma de «tu» de andare.", answers: ["vai"], hint: "Es una forma breve.", explanation: "Andare → vai." },
  { question: "Elige la forma de «loro» de andare: (vanno / andano).", answers: ["vanno"], hint: "No se forma con la raíz and-.", explanation: "Andare, en loro, es vanno." },
  { question: "Escribe la forma de «io» de fare.", answers: ["faccio"], hint: "Lleva dos c.", explanation: "Fare → faccio. En ustedes es fate." },
  { question: "Escribe la forma de «voi» de fare.", answers: ["fate"], hint: "Voi equivale a ustedes. La forma es corta.", explanation: "Fare → fate." },
  { question: "Elige la forma de «lui / lei» de dare: (dà / da).", answers: ["dà"], hint: "El verbo lleva acento grave; la preposición da, no.", explanation: "Dare → dà. El acento lo distingue de la preposición da." },
  { question: "Elige la forma de «voi» de dire: (dite / dicete).", answers: ["dite"], hint: "La forma de ustedes no sigue la raíz dic-.", explanation: "Dire, en ustedes, es dite." },
  { question: "Elige la forma de «io» de uscire: (esco / usco).", answers: ["esco"], hint: "En io, usc- pasa a esc-.", explanation: "Uscire → esco. En noi vuelve usc-: usciamo." },
  { question: "Escribe la forma de «noi» de uscire.", answers: ["usciamo"], hint: "En noi se conserva usc-.", explanation: "Uscire → usciamo." },
  { question: "Escribe la forma de «io» de bere.", answers: ["bevo"], hint: "La raíz del presente es bev-.", explanation: "Bere → bevo. El participio es bevuto." },
  { question: "Escribe la forma de «loro» de venire.", answers: ["vengono"], hint: "Loro equivale a ellos o ellas.", explanation: "Venire → vengono." },
  { question: "Escribe la forma de «io» de tenere.", answers: ["tengo"], hint: "Termina en -go. Significa sostener, no la posesión de avere.", explanation: "Tenere → tengo. Avere es el verbo de la posesión: ho." },
  { question: "Escribe la forma de «io» de salire.", answers: ["salgo"], hint: "Significa subir. La forma de io termina en -go.", explanation: "Salire → salgo. Salire es subir." },
  { question: "Escribe la forma de «io» de scegliere.", answers: ["scelgo"], hint: "Termina en -go.", explanation: "Scegliere → scelgo. El participio es scelto." },
  { question: "Escribe la forma de «io» de rimanere.", answers: ["rimango"], hint: "Termina en -go.", explanation: "Rimanere → rimango. El participio es rimasto." },
  { question: "Escribe la forma de «lui / lei» de stare.", answers: ["sta"], hint: "No lleva acento escrito.", explanation: "Stare → sta. Dà sí lleva acento; sta, fa y va, no." },
  { question: "Escribe el participio passato de prendere.", answers: ["preso"], hint: "Es una forma corta.", explanation: "Prendere → preso. El presente es regular: prendo." },
  { question: "Escribe el participio passato de scrivere.", answers: ["scritto"], hint: "Termina en -tto.", explanation: "Scrivere → scritto." },
  { question: "Escribe el participio passato de leggere.", answers: ["letto"], hint: "Es una forma breve, de dos sílabas.", explanation: "Leggere → letto." },
  { question: "Escribe el participio passato de vedere.", answers: ["visto", "veduto"], hint: "La forma más usada es visto. Veduto también existe.", explanation: "Vedere → visto. También existe veduto." },
  { question: "Escribe el participio passato de perdere.", answers: ["perso", "perduto"], hint: "La forma más usada es perso. Perduto también existe.", explanation: "Perdere → perso. También existe perduto." },
  { question: "Escribe el participio passato de fare.", answers: ["fatto"], hint: "No sale de la raíz facc-.", explanation: "Fare → fatto." },
  { question: "Escribe el participio passato de essere.", answers: ["stato"], hint: "Es la misma forma que usa stare.", explanation: "Essere → stato. Stare también usa stato." },
  { question: "Escribe el participio passato de avere.", answers: ["avuto"], hint: "Termina en -uto.", explanation: "Avere → avuto." },
  { question: "Escribe el participio passato de chiudere.", answers: ["chiuso"], hint: "Cambia la raíz.", explanation: "Chiudere → chiuso. El presente es regular: chiudo." },
  { question: "Escribe el participio passato de mettere.", answers: ["messo"], hint: "Lleva dos s.", explanation: "Mettere → messo." },
  { question: "Escribe la muestra con avere: He hecho.", answers: ["Ho fatto"], hint: "Usa ho y el participio de fare.", explanation: "He hecho = Ho fatto. Es una muestra del passato prossimo; el tiempo se estudia en Básico V." },
  { question: "Escribe en masculino la muestra con andare: He ido.", answers: ["Sono andato"], hint: "En masculino se usa sono y andato.", explanation: "He ido, en masculino, es Sono andato. En femenino: Sono andata. La concordancia se practica en Básico V." },
];
