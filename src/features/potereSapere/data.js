// Potere, sapere y riuscire. En español «poder» y «saber» se cruzan;
// aquí cada uno tiene su trabajo. Voi es ustedes; loro, ellos o ellas.
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const inf = t => ({ t, r: "inf" });
const ng = t => ({ t, r: "neg" });
const pr = t => ({ t, r: "prep" });
const art = t => ({ t, r: "art" });
const av = t => ({ t, r: "essere" });

export const PERSONS = [
  { it: "io", es: "yo" },
  { it: "tu", es: "tú" },
  { it: "lui/lei", es: "él / ella" },
  { it: "noi", es: "nosotros" },
  { it: "voi", es: "ustedes" },
  { it: "loro", es: "ellos / ellas" },
];

export const CONJUGATIONS = [
  {
    verb: "sapere",
    es: "saber hacer algo",
    forms: [
      { it: "so", es: "sé" },
      { it: "sai", es: "sabes" },
      { it: "sa", es: "sabe" },
      { it: "sappiamo", es: "sabemos" },
      { it: "sapete", es: "saben" },
      { it: "sanno", es: "saben" },
    ],
  },
  {
    verb: "potere",
    es: "poder en ese momento",
    forms: [
      { it: "posso", es: "puedo" },
      { it: "puoi", es: "puedes" },
      { it: "può", es: "puede" },
      { it: "possiamo", es: "podemos" },
      { it: "potete", es: "pueden" },
      { it: "possono", es: "pueden" },
    ],
  },
  {
    verb: "riuscire",
    es: "lograr",
    forms: [
      { it: "riesco", es: "logro" },
      { it: "riesci", es: "logras" },
      { it: "riesce", es: "logra" },
      { it: "riusciamo", es: "logramos" },
      { it: "riuscite", es: "logran" },
      { it: "riescono", es: "logran" },
    ],
  },
];

export const SAPERE_EXAMPLES = [
  { pts: [vb("So"), " ", inf("nuotare.")], esp: "Sé nadar." },
  { pts: [vb("Sai"), " ", inf("cucinare?")], esp: "¿Sabes cocinar?" },
  { pts: [su("Leslie"), " ", vb("sa"), " ", inf("ballare.")], esp: "Leslie sabe bailar." },
  { pts: [su("Octavio"), " ", ng("non"), " ", vb("sa"), " ", inf("guidare.")], esp: "Octavio no sabe manejar." },
  { pts: [su("Argelia"), " ", vb("sa"), " ", inf("suonare"), " ", art("la"), " chitarra."], esp: "Argelia sabe tocar la guitarra." },
];

export const POTERE_EXAMPLES = [
  { pts: [vb("Posso"), " ", inf("entrare?")], esp: "¿Puedo entrar?" },
  { pts: ["Oggi ", ng("non"), " ", vb("posso"), " ", inf("nuotare,"), " ", av("ho"), " mal di testa."], esp: "Hoy no puedo nadar, me duele la cabeza." },
  { pts: [vb("Puoi"), " ", inf("chiudere"), " ", art("la"), " porta?"], esp: "¿Puedes cerrar la puerta?" },
  { pts: ["Domani ", vb("posso"), " ", inf("venire.")], esp: "Mañana puedo venir." },
  { pts: [su("Argelia"), " ", vb("può"), " ", inf("venire"), " ", pr("a"), " Napoli."], esp: "Argelia puede venir a Nápoles." },
  { pts: ["Oggi ", pr("a"), " Venezia ", ng("non"), " ", vb("posso"), " ", inf("nuotare.")], esp: "Hoy, en Venecia, no puedo nadar." },
];

export const RIUSCIRE_EXAMPLES = [
  { pts: [ng("Non"), " ", vb("riesco"), " ", pr("a"), " ", inf("dormire.")], esp: "No logro dormir." },
  { pts: [vb("Riesci"), " ", pr("a"), " ", inf("leggere?")], esp: "¿Logras leer?" },
  { pts: [ng("Non"), " ", vb("riesco"), " ", pr("ad"), " ", inf("aprire"), " ", art("la"), " porta."], esp: "No logro abrir la puerta." },
  { pts: [su("Leslie"), " ", vb("riesce"), " ", pr("a"), " ", inf("parlare"), " italiano ", pr("a"), " Milano."], esp: "Leslie logra hablar italiano en Milán." },
];

export const CONTRASTS = [
  { pts: [vb("So"), " ", inf("nuotare,"), " ma oggi ", ng("non"), " ", vb("posso.")], esp: "Sé nadar, pero hoy no puedo." },
  { pts: [vb("So"), " ", inf("guidare,"), " ma ", ng("non"), " ", vb("riesco"), " ", pr("a"), " ", inf("parcheggiare"), " qui."], esp: "Sé manejar, pero no logro estacionarme aquí." },
];

export const ACTIVITIES = [
  ["nuotare", "nadar", "So nuotare."],
  ["cantare", "cantar", "Sai cantare?"],
  ["ballare", "bailar", "Leslie sa ballare a Milano."],
  ["cucinare", "cocinar", "Argelia sa cucinare la pasta."],
  ["guidare", "manejar", "Octavio non sa guidare."],
  ["sciare", "esquiar", "Sai sciare?"],
  ["disegnare", "dibujar", "Leslie sa disegnare."],
  ["suonare la chitarra", "tocar la guitarra", "Argelia sa suonare la chitarra."],
  ["parlare italiano", "hablar italiano", "Octavio sa parlare italiano."],
];

export const QA = [
  {
    q: [vb("Sai"), " ", inf("nuotare?")],
    a: "Sì, so nuotare. / No, non so nuotare.",
    esp: "¿Sabes nadar? — Sí, sé nadar. / No, no sé nadar.",
  },
  {
    q: [vb("Sai"), " ", inf("cucinare?")],
    a: "Sì, so cucinare. / No, non so cucinare.",
    esp: "¿Sabes cocinar? — Sí, sé cocinar. / No, no sé cocinar.",
  },
  {
    q: [vb("Puoi"), " ", inf("chiudere"), " ", art("la"), " porta?"],
    a: "Sì, posso. / No, non posso.",
    esp: "¿Puedes cerrar la puerta? — Sí, puedo. / No, no puedo.",
  },
  {
    q: [vb("Riesci"), " ", pr("a"), " ", inf("leggere?")],
    a: "Sì, riesco a leggere. / No, non riesco a leggere.",
    esp: "¿Logras leer? — Sí, logro leer. / No, no logro leer.",
  },
];

export const PRACTICE = [
  { question: "Escribe en italiano: Sé nadar.", answers: ["So nuotare"], hint: "Yo de sapere es so, sin acento, y después va el infinitivo.", explanation: "Sé nadar = So nuotare. Sapere + infinitivo es una habilidad aprendida." },
  { question: "Escribe en italiano: ¿Sabes cocinar?", answers: ["Sai cucinare?"], hint: "Tú de sapere es sai.", explanation: "¿Sabes cocinar? = Sai cucinare?" },
  { question: "Escribe en italiano: Leslie sabe bailar.", answers: ["Leslie sa ballare"], hint: "Ella de sapere es sa.", explanation: "Leslie sabe bailar = Leslie sa ballare." },
  { question: "Escribe en italiano: Octavio no sabe manejar.", answers: ["Octavio non sa guidare"], hint: "Non va antes del verbo.", explanation: "Octavio no sabe manejar = Octavio non sa guidare." },
  { question: "Escribe en italiano: Argelia sabe tocar la guitarra.", answers: ["Argelia sa suonare la chitarra"], hint: "Con suonare, el instrumento lleva artículo.", explanation: "Argelia sabe tocar la guitarra = Argelia sa suonare la chitarra." },
  { question: "Escribe en italiano: ¿Puedo entrar?", answers: ["Posso entrare?"], hint: "Yo de potere es posso. Aquí es permiso.", explanation: "¿Puedo entrar? = Posso entrare?" },
  { question: "Escribe en italiano: Hoy no puedo nadar, me duele la cabeza.", answers: ["Oggi non posso nuotare, ho mal di testa"], hint: "Hoy es oggi. El dolor de cabeza de esta frase es ho mal di testa.", explanation: "Hoy no puedo nadar, me duele la cabeza = Oggi non posso nuotare, ho mal di testa. Potere habla de este momento." },
  { question: "Escribe en italiano: ¿Puedes cerrar la puerta?", answers: ["Puoi chiudere la porta?"], hint: "Tú de potere es puoi.", explanation: "¿Puedes cerrar la puerta? = Puoi chiudere la porta?" },
  { question: "Escribe en italiano: Mañana puedo venir.", answers: ["Domani posso venire"], hint: "Mañana es domani.", explanation: "Mañana puedo venir = Domani posso venire." },
  { question: "Escribe en italiano: No logro dormir.", answers: ["Non riesco a dormire"], hint: "Yo de riuscire es riesco y pide a.", explanation: "No logro dormir = Non riesco a dormire." },
  { question: "Escribe en italiano: ¿Logras leer?", answers: ["Riesci a leggere?"], hint: "Tú de riuscire es riesci.", explanation: "¿Logras leer? = Riesci a leggere?" },
  { question: "Escribe en italiano: No logro abrir la puerta.", answers: ["Non riesco ad aprire la porta", "Non riesco a aprire la porta"], hint: "Ante una vocal, a puede escribirse ad.", explanation: "No logro abrir la puerta = Non riesco ad aprire la porta. Non riesco a aprire la porta también se entiende." },
  { question: "Escribe en italiano: Sé nadar, pero hoy no puedo.", answers: ["So nuotare, ma oggi non posso"], hint: "La habilidad va con sapere; lo de hoy, con potere.", explanation: "Sé nadar, pero hoy no puedo = So nuotare, ma oggi non posso." },
  { question: "Escribe en italiano: Sé manejar, pero no logro estacionarme aquí.", answers: ["So guidare, ma non riesco a parcheggiare qui"], hint: "Estacionarse es parcheggiare. Riuscire pide a.", explanation: "Sé manejar, pero no logro estacionarme aquí = So guidare, ma non riesco a parcheggiare qui." },
  { question: "Escribe la forma de él de potere.", answers: ["può"], hint: "Lleva acento grave.", explanation: "Él de potere es può." },
  { question: "Escribe la forma de nosotros de riuscire.", answers: ["riusciamo"], hint: "Con nosotros la raíz es riusc-.", explanation: "Nosotros de riuscire es riusciamo. Ustedes es riuscite; ellos, riescono." },
  { question: "Escribe la respuesta afirmativa: Sai nuotare?", answers: ["Sì, so nuotare", "Sì"], hint: "Sì lleva acento. Puedes repetir el infinitivo.", explanation: "Sai nuotare? Sì, so nuotare." },
  { question: "Escribe la respuesta negativa: Sai nuotare?", answers: ["No, non so nuotare"], hint: "Van no y non: los dos.", explanation: "Sai nuotare? No, non so nuotare." },
];
