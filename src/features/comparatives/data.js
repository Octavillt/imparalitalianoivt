// Comparativos: più o meno + adjetivo + di. Di se contrae con el artículo.
// Che compara dos partes del mismo sujeto. Come y quanto arman la igualdad.

const su = t => ({ t, r: "subject" });
const es = t => ({ t, r: "essere" });
const vb = t => ({ t, r: "verb" });
const adj = t => ({ t, r: "adj" });
const cmp = t => ({ t, r: "comp" });
const art = t => ({ t, r: "art" });
const ar = t => ({ t, r: "articolata" });
const pr = t => ({ t, r: "prep" });
const demo = t => ({ t, r: "demo" });

export const ANIMALS = [
  ["il coniglio", "el conejo"],
  ["il criceto", "el hámster"],
  ["il gatto", "el gato"],
  ["il cane", "el perro"],
  ["il coccodrillo", "el cocodrilo"],
  ["la pantera", "la pantera"],
];

export const SUPERIOR = [
  { pts: [su("Leslie"), " ", es("è"), " ", cmp("più"), " ", adj("alta"), " ", pr("di"), " Octavio."], esp: "Leslie es más alta que Octavio." },
  { pts: [art("Il"), " ", su("coniglio"), " ", es("è"), " ", cmp("più"), " ", adj("grande"), " ", ar("del"), " criceto."], esp: "El conejo es más grande que el hámster." },
  { pts: [su("Argelia"), " ", es("è"), " ", cmp("più"), " ", adj("alta"), " ", ar("dello"), " studente."], esp: "Argelia es más alta que el estudiante." },
  { pts: [art("Il"), " ", su("coccodrillo"), " ", es("è"), " ", cmp("più"), " ", adj("grande"), " ", ar("della"), " pantera."], esp: "El cocodrilo es más grande que la pantera." },
  { pts: [art("I"), " ", su("gatti"), " ", es("sono"), " ", cmp("più"), " ", adj("piccoli"), " ", ar("dei"), " cani."], esp: "Los gatos son más pequeños que los perros." },
  { pts: [su("Leslie"), " ", es("è"), " ", cmp("più"), " ", adj("alta"), " ", ar("degli"), " amici."], esp: "Leslie es más alta que los amigos." },
  { pts: [su("Octavio"), " ", es("è"), " ", cmp("più"), " ", adj("alto"), " ", ar("delle"), " amiche."], esp: "Octavio es más alto que las amigas." },
  { pts: ["Roma ", es("è"), " ", cmp("più"), " ", adj("grande"), " ", pr("di"), " Firenze."], esp: "Roma es más grande que Florencia." },
  { pts: [su("Leslie"), " ", es("è"), " ", cmp("più"), " ", adj("alta"), " ", pr("di"), " me."], esp: "Leslie es más alta que yo." },
];

export const INFERIOR = [
  { pts: [art("Il"), " treno ", es("è"), " ", cmp("meno"), " ", adj("caro"), " ", ar("dell'"), "aereo."], esp: "El tren es menos caro que el avión." },
  { pts: [art("La"), " ", su("pantera"), " ", es("è"), " ", cmp("meno"), " ", adj("grande"), " ", ar("del"), " coccodrillo."], esp: "La pantera es menos grande que el cocodrilo." },
  { pts: [art("Il"), " ", su("cane"), " ", es("è"), " ", cmp("meno"), " ", adj("veloce"), " ", ar("della"), " pantera."], esp: "El perro es menos rápido que la pantera." },
  { pts: [su("Octavio"), " ", es("è"), " ", cmp("meno"), " ", adj("alto"), " ", pr("di"), " te."], esp: "Octavio es menos alto que tú." },
];

// [suma, forma, ejemplo, español]
export const CONTRACTIONS = [
  ["di + il", "del", "del criceto", "del hámster"],
  ["di + lo", "dello", "dello studente", "del estudiante"],
  ["di + la", "della", "della pantera", "de la pantera"],
  ["di + l'", "dell'", "dell'aereo", "del avión"],
  ["di + i", "dei", "dei cani", "de los perros"],
  ["di + gli", "degli", "degli amici", "de los amigos"],
  ["di + le", "delle", "delle amiche", "de las amigas"],
];

export const CHE_EXAMPLES = [
  { pts: [su("Leslie"), " ", es("è"), " ", cmp("più"), " ", adj("simpatica"), " ", cmp("che"), " ", adj("bella"), "."], esp: "Leslie es más simpática que bonita." },
  { pts: ["Mi piace ", cmp("più"), " leggere ", cmp("che"), " scrivere."], esp: "Me gusta más leer que escribir." },
  { pts: ["A Roma ci sono ", cmp("più"), " turisti ", cmp("che"), " a Napoli."], esp: "En Roma hay más turistas que en Nápoles." },
];

export const EQUAL_EXAMPLES = [
  { pts: [su("Leslie"), " ", es("è"), " ", adj("alta"), " ", cmp("come"), " Octavio."], esp: "Leslie es tan alta como Octavio." },
  { pts: [su("Octavio"), " ", es("è"), " ", cmp("tanto"), " ", adj("alto"), " ", cmp("quanto"), " Leslie."], esp: "Octavio es tan alto como Leslie." },
];

// [base, forma, español]. Più buono y più cattivo se explican aparte: también existen.
export const IRREGULAR_COMPARATIVES = [
  ["buono", "migliore", "bueno → mejor"],
  ["cattivo", "peggiore", "malo → peor"],
  ["grande", "maggiore", "grande → mayor, en la familia"],
  ["piccolo", "minore", "pequeño → menor, en la familia"],
  ["bene", "meglio", "bien → mejor"],
  ["male", "peggio", "mal → peor"],
];

export const ALSO_REGULAR = [
  { pts: [demo("Questo"), " gelato ", es("è"), " ", cmp("più"), " ", adj("buono"), " ", pr("di"), " quella pizza."], esp: "Este helado está más bueno que esa pizza." },
  { pts: [demo("Questo"), " caffè ", es("è"), " ", cmp("più"), " ", adj("cattivo"), " ", pr("di"), " quello."], esp: "Este café está más malo que ese." },
];

export const FAMILY = [
  { pts: ["Mio fratello ", adj("maggiore"), " abita a Roma."], esp: "Mi hermano mayor vive en Roma." },
  { pts: ["Mia sorella ", adj("minore"), " abita a Napoli."], esp: "Mi hermana menor vive en Nápoles." },
];

export const QUALITY = [
  { pts: [demo("Questa"), " pizza ", es("è"), " ", adj("migliore"), "."], esp: "Esta pizza es mejor." },
  { pts: [su("Leslie"), " ", vb("canta"), " ", cmp("meglio"), "."], esp: "Leslie canta mejor." },
  { pts: [demo("Questo"), " caffè ", es("è"), " ", adj("peggiore"), "."], esp: "Este café es peor." },
  { pts: [su("Octavio"), " ", vb("canta"), " ", cmp("peggio"), "."], esp: "Octavio canta peor." },
];

export const QUESTIONS = [
  ["Il coniglio è più grande del criceto?", "Sì, è più grande.", "¿El conejo es más grande que el hámster? — Sí, es más grande."],
  ["La pantera è più veloce del cane?", "Sì, è più veloce.", "¿La pantera es más rápida que el perro? — Sí, es más rápida."],
  ["Chi è più alta, Leslie o Argelia?", "Leslie è più alta di Argelia.", "¿Quién es más alta, Leslie o Argelia? — Leslie es más alta que Argelia."],
];

export const INTENSIFIERS = [
  { pts: [art("Il"), " ", su("coccodrillo"), " ", es("è"), " molto ", cmp("più"), " ", adj("grande"), " ", ar("del"), " criceto."], esp: "El cocodrilo es mucho más grande que el hámster." },
  { pts: [su("Leslie"), " ", es("è"), " un po' ", cmp("più"), " ", adj("alta"), " ", pr("di"), " Argelia."], esp: "Leslie es un poco más alta que Argelia." },
];

export const PAST_FUTURE = [
  { pts: ["Ieri ", vb("faceva"), " ", cmp("più"), " caldo ", pr("di"), " oggi."], esp: "Ayer hacía más calor que hoy." },
  { pts: ["Domani ", vb("farà"), " ", cmp("meno"), " freddo."], esp: "Mañana hará menos frío." },
];

export const SUPERLATIVE = [
  { pts: [art("il"), " ", cmp("più"), " ", adj("alto")], esp: "el más alto" },
  { pts: [su("Leslie"), " ", es("è"), " ", art("la"), " ", cmp("più"), " ", adj("alta"), " ", ar("del"), " gruppo."], esp: "Leslie es la más alta del grupo." },
  { pts: [art("una"), " pizza ", adj("bellissima"), "."], esp: "una pizza muy bonita" },
];

export const RULE_LABELS = {
  regular: "più + adjetivo",
  tambien: "también con più",
  irregular: "forma irregular",
  adverbio: "adverbio",
};

// [adjetivo o adverbio, forma, español, regla]
export const ADJECTIVE_BANK = [
  ["alto", "più alto", "alto", "regular"],
  ["piccolo", "più piccolo", "pequeño", "regular"],
  ["grande", "più grande", "grande, de tamaño", "regular"],
  ["caro", "più caro", "caro", "regular"],
  ["economico", "più economico", "barato", "regular"],
  ["veloce", "più veloce", "rápido", "regular"],
  ["simpatico", "più simpatico", "simpático", "regular"],
  ["bello", "più bello", "bonito", "regular"],
  ["buono", "più buono", "bueno, con più", "tambien"],
  ["cattivo", "più cattivo", "malo, con più", "tambien"],
  ["buono", "migliore", "mejor", "irregular"],
  ["cattivo", "peggiore", "peor", "irregular"],
  ["grande", "maggiore", "mayor, en la familia", "irregular"],
  ["piccolo", "minore", "menor, en la familia", "irregular"],
  ["bene", "meglio", "mejor, adverbio", "adverbio"],
  ["male", "peggio", "peor, adverbio", "adverbio"],
];

export const PRACTICE = [
  { question: "Completa: Leslie è più alta ___ Octavio.", answers: ["di"], hint: "Se comparan dos personas distintas.", explanation: "Leslie è più alta di Octavio. Entre dos personas va di." },
  { question: "Completa: Il coniglio è più grande ___ criceto.", answers: ["del"], hint: "Di se junta con il.", explanation: "Il coniglio è più grande del criceto. Di + il = del." },
  { question: "Completa (que el avión): Il treno è meno caro ___.", answers: ["dell'aereo"], hint: "Aereo lleva l', y di se contrae con ese artículo.", explanation: "Il treno è meno caro dell'aereo. Di + l' = dell'." },
  { question: "Completa (que el estudiante): Argelia è più alta ___.", answers: ["dello studente"], hint: "Studente lleva lo, porque empieza con s + consonante.", explanation: "Argelia è più alta dello studente. Di + lo = dello." },
  { question: "Escribe en italiano: Roma es más grande que Florencia.", answers: ["Roma è più grande di Firenze"], hint: "Estas ciudades van sin artículo, y di no se contrae.", explanation: "Roma es más grande que Florencia = Roma è più grande di Firenze." },
  { question: "Escribe en italiano: Los gatos son más pequeños que los perros.", answers: ["I gatti sono più piccoli dei cani"], hint: "Pequeños va en masculino plural. Di + i = dei.", explanation: "Los gatos son más pequeños que los perros = I gatti sono più piccoli dei cani." },
  { question: "Escribe en italiano: Leslie es más alta que yo.", answers: ["Leslie è più alta di me"], hint: "Yo, después de di, es me.", explanation: "Leslie es más alta que yo = Leslie è più alta di me." },
  { question: "Elige: Leslie è più simpatica ___ bella. (che / di)", answers: ["che"], hint: "Son dos adjetivos de la misma persona.", explanation: "Leslie è più simpatica che bella. Con dos adjetivos del mismo sujeto va che." },
  { question: "Completa: Mi piace più leggere ___ scrivere.", answers: ["che"], hint: "Son dos verbos.", explanation: "Mi piace più leggere che scrivere. Entre dos verbos va che." },
  { question: "Completa: A Roma ci sono più turisti ___ a Napoli.", answers: ["che"], hint: "Son dos expresiones con preposición.", explanation: "A Roma ci sono più turisti che a Napoli. Entre esos dos lugares va che." },
  { question: "Escribe en italiano: Leslie es tan alta como Octavio.", answers: ["Leslie è alta come Octavio", "Leslie è così alta come Octavio"], hint: "La igualdad corta usa come. El adjetivo concuerda con Leslie.", explanation: "Leslie es tan alta como Octavio = Leslie è alta come Octavio. Così alta come también se dice." },
  { question: "Escribe en italiano: Octavio es tan alto como Leslie.", answers: ["Octavio è tanto alto quanto Leslie", "Octavio è alto quanto Leslie"], hint: "Quanto cierra la comparación. Tanto puede ir antes del adjetivo.", explanation: "Octavio es tan alto como Leslie = Octavio è tanto alto quanto Leslie. Alto quanto también se dice." },
  { question: "Escribe la forma irregular de «buono».", answers: ["migliore"], hint: "Es un adjetivo, no un adverbio.", explanation: "Buono → migliore. Più buono también existe." },
  { question: "Escribe la forma irregular de «cattivo».", answers: ["peggiore"], hint: "Empieza con pe-.", explanation: "Cattivo → peggiore. Più cattivo también existe." },
  { question: "Escribe la forma irregular de «bene».", answers: ["meglio"], hint: "Es el adverbio, no el adjetivo migliore.", explanation: "Bene → meglio. Meglio acompaña al verbo: canta meglio." },
  { question: "Escribe la forma irregular de «male».", answers: ["peggio"], hint: "Es el adverbio de mal.", explanation: "Male → peggio." },
  { question: "Escribe la forma de «grande» que significa mayor en la familia.", answers: ["maggiore"], hint: "En la familia no habla del tamaño.", explanation: "Grande → maggiore. Mio fratello maggiore = mi hermano mayor. Para el tamaño se usa più grande." },
  { question: "Escribe la forma de «piccolo» que significa menor en la familia.", answers: ["minore"], hint: "En la familia es la de menos edad.", explanation: "Piccolo → minore. Mia sorella minore = mi hermana menor." },
  { question: "Traduce al español: mio fratello maggiore.", answers: ["mi hermano mayor"], answerLang: "es", hint: "En la familia, maggiore habla de la edad.", explanation: "Mio fratello maggiore = mi hermano mayor." },
  { question: "Traduce al español: mia sorella minore.", answers: ["mi hermana menor"], answerLang: "es", hint: "En la familia, minore es la de menos edad.", explanation: "Mia sorella minore = mi hermana menor." },
  { question: "Elige la forma que acompaña a canta: Leslie canta (meglio / migliore).", answers: ["meglio"], hint: "Canta es un verbo: hace falta el adverbio.", explanation: "Leslie canta meglio. Migliore es adjetivo: Questa pizza è migliore." },
  { question: "Escribe en italiano: Esta pizza es mejor.", answers: ["Questa pizza è migliore", "Questa pizza è più buona"], hint: "Con essere, el adjetivo de la lección es migliore. Più buona también se dice.", explanation: "Esta pizza es mejor = Questa pizza è migliore. Questa pizza è più buona también se dice." },
  { question: "Escribe en italiano: Ayer hacía más calor que hoy.", answers: ["Ieri faceva più caldo di oggi"], hint: "El clima, en ese pasado, usa faceva.", explanation: "Ayer hacía más calor que hoy = Ieri faceva più caldo di oggi." },
  { question: "Escribe en italiano: Mañana hará menos frío.", answers: ["Domani farà meno freddo"], hint: "El futuro de fare, en esta frase, es farà.", explanation: "Mañana hará menos frío = Domani farà meno freddo." },
  { question: "Escribe en italiano: Leslie es la más alta del grupo.", answers: ["Leslie è la più alta del gruppo"], hint: "La forma de ella lleva el artículo la. Di + il gruppo = del.", explanation: "Leslie es la más alta del grupo = Leslie è la più alta del gruppo." },
  { question: "Traduce al español: bellissimo.", answers: ["muy bonito", "muy bello"], answerLang: "es", hint: "El sufijo intensifica el adjetivo bello.", explanation: "Bellissimo = muy bonito. Concuerda: bellissima, bellissimi, bellissime." },
  { question: "Elige: I gatti sono più (piccoli / piccolo) dei cani.", answers: ["piccoli"], hint: "El sujeto es masculino plural.", explanation: "I gatti sono più piccoli dei cani. Piccoli concuerda con gatti." },
];
