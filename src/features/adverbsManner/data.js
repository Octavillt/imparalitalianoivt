// Adverbios de modo. El par es [adjetivo, adverbio].
// En -le y -re se pierde la e antes de mente. Buono y cattivo no siguen esa vía.
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const es = t => ({ t, r: "essere" });
const adj = t => ({ t, r: "adj" });
const wh = t => ({ t, r: "wh" });
const art = t => ({ t, r: "art" });

export const FORMATION_RULES = [
  {
    title: "Adjetivo en -o: femenino + mente",
    description: "Estos pasan por el femenino y luego reciben mente. Sicuramente, en muchas frases, significa «seguramente».",
    examples: [
      ["lento → lenta → lentamente", "lento → despacio"],
      ["attento → attenta → attentamente", "atento → con atención"],
      ["sicuro → sicura → sicuramente", "seguro → seguramente"],
    ],
  },
  {
    title: "Adjetivo en -e: se añade mente",
    description: "Vale para los que terminan en -e y no en -le ni en -re. La e del adjetivo se queda.",
    examples: [
      ["veloce → velocemente", "rápido → rápido"],
      ["felice → felicemente", "feliz → con alegría"],
    ],
  },
  {
    title: "En -le o -re se pierde la e",
    description: "La e final no se conserva. Facil y mente, juntas, forman facilmente.",
    examples: [
      ["facile → facilmente", "fácil → con facilidad"],
      ["gentile → gentilmente", "amable → con amabilidad"],
      ["regolare → regolarmente", "regular → con regularidad"],
      ["difficile → difficilmente", "difícil → con dificultad"],
    ],
  },
  {
    title: "Buono y cattivo",
    description: "Para «bien» y «mal», esta lección usa bene y male. Buonamente y cattivamente también existen.",
    examples: [
      ["buono → bene", "bueno → bien"],
      ["cattivo → male", "malo → mal"],
    ],
  },
];

export const ADVERB_PAIRS = [
  ["lento", "lentamente"],
  ["attento", "attentamente"],
  ["sicuro", "sicuramente"],
  ["veloce", "velocemente"],
  ["felice", "felicemente"],
  ["facile", "facilmente"],
  ["gentile", "gentilmente"],
  ["regolare", "regolarmente"],
  ["difficile", "difficilmente"],
  ["buono", "bene"],
  ["cattivo", "male"],
];

export const WITHOUT_MENTE = [
  ["piano", "en voz baja", "Parla piano.", "Habla en voz baja."],
  ["forte", "fuerte", "Canta forte.", "Canta fuerte."],
  ["bene", "bien", "Leslie canta bene.", "Leslie canta bien."],
  ["male", "mal", "Octavio canta male.", "Octavio canta mal."],
  ["insieme", "juntos", "Cantiamo insieme.", "Cantamos juntos."],
  ["volentieri", "con gusto", "Vengo volentieri.", "Vengo con gusto."],
  ["presto", "temprano", "Arrivo presto.", "Llego temprano."],
  ["tardi", "tarde", "Arrivo tardi.", "Llego tarde."],
];

export const CONTRASTS = [
  { pts: [su("Leslie"), " ", es("è"), " una ", adj("buona"), " cantante."], esp: "Leslie es una buena cantante." },
  { pts: [su("Leslie"), " ", vb("canta"), " bene."], esp: "Leslie canta bien." },
  { pts: [art("La"), " pizza ", es("è"), " ", adj("buona.")], esp: "La pizza está buena." },
  { pts: [vb("Cucini"), " bene."], esp: "Cocinas bien." },
  { pts: [su("Octavio"), " ", es("è"), " ", adj("lento.")], esp: "Octavio es lento." },
  { pts: [su("Octavio"), " ", vb("parla"), " lentamente."], esp: "Octavio habla despacio." },
];

export const POSITION = [
  { pts: [vb("Parla"), " lentamente."], esp: "Habla despacio." },
  { pts: [vb("Parla"), " molto bene."], esp: "Habla muy bien." },
  { pts: [vb("Alza"), " ", art("le"), " braccia lentamente."], esp: "Levanta los brazos despacio." },
];

export const COME = [
  { pts: [wh("Come"), " ", vb("canta"), " ", su("Octavio?")], esp: "¿Cómo canta Octavio?" },
  { pts: [vb("Canta"), " bene."], esp: "Canta bien." },
];

export const PRACTICE = [
  { question: "Escribe el adverbio de lento.", answers: ["lentamente"], hint: "El femenino es lenta; después va mente.", explanation: "Lento → lenta → lentamente." },
  { question: "Escribe el adverbio de veloce.", answers: ["velocemente"], hint: "Termina en -e y no en -le ni en -re: se añade mente.", explanation: "Veloce → velocemente." },
  { question: "Escribe el adverbio de attento.", answers: ["attentamente"], hint: "El femenino es attenta.", explanation: "Attento → attenta → attentamente." },
  { question: "Escribe el adverbio de sicuro.", answers: ["sicuramente"], hint: "El femenino es sicura. En muchas frases significa seguramente.", explanation: "Sicuro → sicura → sicuramente." },
  { question: "Escribe el adverbio de facile.", answers: ["facilmente"], hint: "Termina en -le: se pierde la e.", explanation: "Facile → facilmente. Facil + mente." },
  { question: "Escribe el adverbio de gentile.", answers: ["gentilmente"], hint: "Termina en -le: se pierde la e.", explanation: "Gentile → gentilmente." },
  { question: "Escribe el adverbio de regolare.", answers: ["regolarmente"], hint: "Termina en -re: se pierde la e.", explanation: "Regolare → regolarmente." },
  { question: "Escribe el adverbio de difficile.", answers: ["difficilmente"], hint: "Termina en -le: se pierde la e.", explanation: "Difficile → difficilmente." },
  { question: "Escribe el adverbio de felice.", answers: ["felicemente"], hint: "Termina en -e: la e se queda y se añade mente.", explanation: "Felice → felicemente." },
  { question: "Escribe el adverbio de buono.", answers: ["bene", "buonamente"], hint: "La forma de uso general para «bien» es bene.", explanation: "Buono → bene. Buonamente también existe." },
  { question: "Escribe el adverbio de cattivo.", answers: ["male", "cattivamente"], hint: "La forma de esta lección para «mal» es male.", explanation: "Cattivo → male. Cattivamente también existe." },
  { question: "Escribe en italiano: Leslie es una buena cantante.", answers: ["Leslie è una buona cantante"], hint: "Con essere va el adjetivo, en femenino: buona.", explanation: "Leslie es una buena cantante = Leslie è una buona cantante." },
  { question: "Escribe en italiano: Leslie canta bien.", answers: ["Leslie canta bene"], hint: "Con cantare va el adverbio bene.", explanation: "Leslie canta bien = Leslie canta bene." },
  { question: "Escribe en italiano: La pizza está buena.", answers: ["La pizza è buona"], hint: "Pizza es femenino: buona.", explanation: "La pizza está buena = La pizza è buona." },
  { question: "Escribe en italiano: Cocinas bien.", answers: ["Cucini bene"], hint: "Tú de cucinare es cucini. El adverbio es bene.", explanation: "Cocinas bien = Cucini bene." },
  { question: "Escribe en italiano: Octavio es lento.", answers: ["Octavio è lento"], hint: "Con essere va el adjetivo.", explanation: "Octavio es lento = Octavio è lento." },
  { question: "Escribe en italiano: Octavio habla despacio.", answers: ["Octavio parla lentamente", "Octavio parla piano"], hint: "El adverbio de lento es lentamente. Piano también puede ser despacio.", explanation: "Octavio habla despacio = Octavio parla lentamente. Octavio parla piano también se dice." },
  { question: "Escribe en italiano: Habla muy bien.", answers: ["Parla molto bene"], hint: "Molto va antes del adverbio.", explanation: "Habla muy bien = Parla molto bene." },
  { question: "Escribe en italiano: ¿Cómo canta Octavio?", answers: ["Come canta Octavio?"], hint: "Come pregunta cómo.", explanation: "¿Cómo canta Octavio? = Come canta Octavio?" },
  { question: "Escribe la respuesta: Come canta Octavio? Canta bien.", answers: ["Canta bene"], hint: "Bien, con un verbo, es bene.", explanation: "Canta bien = Canta bene." },
  { question: "Escribe en italiano: Habla en voz baja.", answers: ["Parla piano"], hint: "Piano no lleva -mente. También puede significar despacio.", explanation: "Habla en voz baja = Parla piano." },
  { question: "Escribe en italiano: Canta fuerte.", answers: ["Canta forte"], hint: "Forte no lleva -mente.", explanation: "Canta fuerte = Canta forte." },
  { question: "Escribe en italiano: Cantamos juntos.", answers: ["Cantiamo insieme"], hint: "Insieme no lleva -mente.", explanation: "Cantamos juntos = Cantiamo insieme." },
  { question: "Escribe en italiano: Vengo con gusto.", answers: ["Vengo volentieri"], hint: "Volentieri no lleva -mente.", explanation: "Vengo con gusto = Vengo volentieri." },
  { question: "Escribe en italiano: Llego temprano.", answers: ["Arrivo presto"], hint: "Presto puede ser temprano. En otra frase puede ser pronto: Torno presto.", explanation: "Llego temprano = Arrivo presto." },
  { question: "Escribe en italiano: Regreso pronto.", answers: ["Torno presto"], hint: "En esta frase presto es pronto.", explanation: "Regreso pronto = Torno presto." },
  { question: "Escribe en italiano: Llego tarde.", answers: ["Arrivo tardi"], hint: "Tardi no lleva -mente.", explanation: "Llego tarde = Arrivo tardi." },
  { question: "Escribe en italiano: Levanta los brazos despacio.", answers: ["Alza le braccia lentamente", "Alza le braccia piano"], hint: "Braccia es el plural de il braccio.", explanation: "Levanta los brazos despacio = Alza le braccia lentamente. Alza le braccia piano también se dice." },
];
