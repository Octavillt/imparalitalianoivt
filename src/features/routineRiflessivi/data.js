// Rutina, reflexivos y frecuencia. El pronombre va antes del verbo.
// Voi equivale a ustedes; loro, a ellos o ellas.
const vb = t => ({ t, r: "verb" });
const ng = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });
const pr = t => ({ t, r: "prep" });
const ar = t => ({ t, r: "articolata" });
const ge = t => ({ t, r: "gerundio" });
const st = t => ({ t, r: "essere" });
const art = t => ({ t, r: "art" });

export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

// [persona, pronombre, forma de alzarsi, español]
export const PRONOUNS = [
  ["io", "mi", "mi alzo", "me levanto"],
  ["tu", "ti", "ti alzi", "te levantas"],
  ["lui / lei", "si", "si alza", "se levanta"],
  ["noi", "ci", "ci alziamo", "nos levantamos"],
  ["voi", "vi", "vi alzate", "ustedes se levantan"],
  ["loro", "si", "si alzano", "ellos / ellas se levantan"],
];

// [infinitivo, forma de io, español, nota]
export const ROUTINE_VERBS = [
  ["alzarsi", "mi alzo", "levantarse", ""],
  ["svegliarsi", "mi sveglio", "despertarse", ""],
  ["lavarsi", "mi lavo", "lavarse", ""],
  ["vestirsi", "mi vesto", "vestirse", "Sin -isc-: mi vesto."],
  ["pettinarsi", "mi pettino", "peinarse", ""],
  ["farsi la doccia", "mi faccio la doccia", "ducharse", "Usa el presente de fare."],
  ["addormentarsi", "mi addormento", "dormirse", ""],
  ["riposarsi", "mi riposo", "descansar", ""],
  ["divertirsi", "mi diverto", "divertirse", "Io: mi diverto."],
  ["chiamarsi", "mi chiamo", "llamarse", ""],
  ["sedersi", "mi siedo", "sentarse", "Cambia la vocal en varias personas."],
];

// Van completas, con el pronombre. Sedersi no usa la misma vocal en todas las personas.
export const SPECIAL = [
  { verb: "sedersi", esp: "sentarse", forms: ["mi siedo", "ti siedi", "si siede", "ci sediamo", "vi sedete", "si siedono"] },
  { verb: "divertirsi", esp: "divertirse", forms: ["mi diverto", "ti diverti", "si diverte", "ci divertiamo", "vi divertite", "si divertono"] },
  { verb: "vestirsi", esp: "vestirse", forms: ["mi vesto", "ti vesti", "si veste", "ci vestiamo", "vi vestite", "si vestono"] },
];

export const FARSI = [
  ["io", "mi faccio la doccia", "me ducho"],
  ["tu", "ti fai la doccia", "te duchas"],
  ["lui / lei", "si fa la doccia", "se ducha"],
  ["noi", "ci facciamo la doccia", "nos duchamos"],
  ["voi", "vi fate la doccia", "ustedes se duchan"],
  ["loro", "si fanno la doccia", "ellos / ellas se duchan"],
];

export const NEGATIVE = [
  { pts: [ng("Non"), " mi ", vb("alzo"), " presto."], esp: "No me levanto temprano." },
  { pts: [ng("Non"), " mi ", vb("faccio"), " ", art("la"), " doccia ", art("la"), " mattina."], esp: "No me ducho en la mañana." },
];

export const BODY_WASH = [
  { pts: ["Mi ", vb("lavo"), " ", art("le"), " mani."], esp: "Me lavo las manos." },
  { pts: ["Mi ", vb("lavo"), " ", art("i"), " denti."], esp: "Me lavo los dientes." },
  { pts: ["Mi ", vb("lavo"), " ", art("la"), " faccia."], esp: "Me lavo la cara." },
];

export const DAY_PARTS = [
  ["la mattina", "la mañana"],
  ["il pomeriggio", "la tarde"],
  ["la sera", "la noche, desde que anochece"],
  ["la notte", "la noche, ya muy tarde"],
];

export const FREQUENCY = [
  ["sempre", "todo el tiempo que se hace esa acción"],
  ["quasi sempre", "casi todo el tiempo"],
  ["di solito", "lo habitual"],
  ["spesso", "con frecuencia"],
  ["qualche volta", "alguna vez"],
  ["a volte", "a veces"],
  ["raramente", "rara vez"],
  ["quasi mai", "casi nunca"],
  ["mai", "nunca"],
];

export const HOW_OFTEN = [
  ["ogni giorno", "cada día"],
  ["tutti i giorni", "todos los días"],
  ["una volta alla settimana", "una vez a la semana"],
  ["due volte al mese", "dos veces al mes"],
];

export const FREQUENCY_EXAMPLES = [
  { pts: ["Mi ", vb("alzo"), " sempre ", ar("alle"), " sette."], esp: "Me levanto siempre a las siete." },
  { pts: ["Di solito mi ", vb("alzo"), " ", ar("alle"), " sette."], esp: "Normalmente me levanto a las siete." },
  { pts: ["Mi ", vb("alzo"), " di solito ", ar("alle"), " sette."], esp: "Me levanto normalmente a las siete." },
  { pts: [vb("Lavoro"), " spesso ", art("il"), " sabato."], esp: "Trabajo con frecuencia los sábados." },
  { pts: ["Qualche volta ", vb("vado"), " ", pr("a"), " Firenze."], esp: "Alguna vez voy a Florencia." },
  { pts: ["A volte ", vb("mangio"), " una pizza."], esp: "A veces como una pizza." },
  { pts: [vb("Esco"), " raramente."], esp: "Salgo rara vez." },
  { pts: [ng("Non"), " ", vb("bevo"), " mai ", art("il"), " caffè."], esp: "No tomo nunca café." },
  { pts: [ng("Non"), " ", vb("esco"), " quasi mai ", art("la"), " sera."], esp: "Casi no salgo por la noche." },
];

export const QA = [
  {
    q: [wh("A che ora"), " ti ", vb("alzi"), "?"],
    a: "Mi alzo alle sette.",
    esp: "¿A qué hora te levantas? — Me levanto a las siete.",
  },
  {
    q: [wh("Che cosa"), " ", vb("fai"), " ", art("la"), " mattina?"],
    a: "Mi faccio la doccia e bevo un caffè.",
    esp: "¿Qué haces en la mañana? — Me ducho y tomo un café.",
  },
  {
    q: [wh("Quante volte"), " ", ar("alla"), " settimana ", vb("vai"), " ", pr("in"), " palestra?"],
    a: "Due volte alla settimana.",
    esp: "¿Cuántas veces a la semana vas al gimnasio? — Dos veces a la semana.",
  },
];

export const CONTRAST = [
  {
    icon: "⏰",
    title: "Presente",
    subtitle: "La rutina",
    when: "Lo que haces de manera habitual.",
    markers: ["di solito", "sempre", "ogni giorno"],
    pts: ["Di solito ", vb("lavoro"), " ", pr("a"), " Roma."],
    esp: "Normalmente trabajo en Roma.",
  },
  {
    icon: "🌀",
    title: "Stare + gerundio",
    subtitle: "Ahora",
    when: "Lo que está pasando ahora. Adesso significa ahora.",
    markers: ["adesso", "in questo momento"],
    pts: ["Adesso ", st("sto"), " ", ge("lavorando"), " ", pr("a"), " Milano."],
    esp: "Ahora estoy trabajando en Milán.",
  },
];

export const CONTRAST_LINE = {
  pts: ["Di solito ", vb("lavoro"), " ", pr("a"), " Roma, ma adesso ", st("sto"), " ", ge("lavorando"), " ", pr("a"), " Milano."],
  esp: "Normalmente trabajo en Roma, pero ahora estoy trabajando en Milán.",
};

export const LESLIE_DAY = [
  { pts: ["Mi ", vb("chiamo"), " Leslie."], esp: "Me llamo Leslie." },
  { pts: [art("La"), " mattina mi ", vb("sveglio"), " ", ar("alle"), " sette e mi ", vb("alzo"), "."], esp: "Por la mañana me despierto a las siete y me levanto." },
  { pts: ["Mi ", vb("faccio"), " ", art("la"), " doccia, mi ", vb("lavo"), " ", art("i"), " denti e mi ", vb("vesto"), "."], esp: "Me ducho, me lavo los dientes y me visto." },
  { pts: [vb("Bevo"), " sempre un caffè ", pr("a"), " casa."], esp: "Siempre tomo un café en casa." },
  { pts: [art("Il"), " pomeriggio ", vb("lavoro"), " ", pr("a"), " Roma."], esp: "Por la tarde trabajo en Roma." },
  { pts: [art("La"), " sera ", vb("mangio"), " una pizza e mi ", vb("siedo"), " ", ar("sul"), " divano."], esp: "Por la noche como una pizza y me siento en el sofá." },
  { pts: ["Mi ", vb("riposo"), " e mi ", vb("addormento"), " ", ar("alle"), " undici."], esp: "Descanso y me duermo a las once." },
];

export const MISTAKES = [
  { wrong: "Mi non alzo presto.", right: "Non mi alzo presto.", note: "Non va antes del pronombre." },
  { wrong: "Alzo mi alle sette.", right: "Mi alzo alle sette.", note: "El pronombre va antes del verbo." },
  { wrong: "Mi lavo le mie mani.", right: "Mi lavo le mani.", note: "Con una parte del cuerpo va el artículo, sin posesivo." },
  { wrong: "Bevo mai il caffè.", right: "Non bevo mai il caffè.", note: "En esta frase, mai va con non. Es una doble negación, como «no tomo nunca café». En una pregunta, mai puede ir sin non: Bevi mai il caffè?" },
  { wrong: "Mi sempre alzo alle sette.", right: "Mi alzo sempre alle sette.", note: "Sempre no separa el pronombre del verbo. Suele ir después del verbo." },
];

export const SOLVED = [
  { q: "Me levanto siempre a las siete.", pts: ["Mi ", vb("alzo"), " sempre ", ar("alle"), " sette."] },
  { q: "No me levanto temprano.", pts: [ng("Non"), " mi ", vb("alzo"), " presto."] },
  { q: "Me lavo las manos.", pts: ["Mi ", vb("lavo"), " ", art("le"), " mani."] },
  { q: "No tomo nunca café.", pts: [ng("Non"), " ", vb("bevo"), " mai ", art("il"), " caffè."] },
  { q: "¿A qué hora te levantas?", pts: [wh("A che ora"), " ti ", vb("alzi"), "?"] },
  { q: "Normalmente trabajo en Roma, pero ahora estoy trabajando en Milán.", pts: CONTRAST_LINE.pts },
];

export const PRACTICE = [
  { question: "Escribe el presente de io de alzarsi, con el pronombre.", answers: ["mi alzo"], hint: "El pronombre va antes del verbo.", explanation: "Alzarsi, en io, es mi alzo." },
  { question: "Escribe el presente de tu de alzarsi, con el pronombre.", answers: ["ti alzi"], hint: "El pronombre de tu es ti.", explanation: "Alzarsi, en tu, es ti alzi." },
  { question: "Escribe el presente de lui o lei de alzarsi, con el pronombre.", answers: ["si alza"], hint: "En lui y lei el pronombre es si.", explanation: "Alzarsi, en lui o lei, es si alza." },
  { question: "Escribe el presente de noi de alzarsi, con el pronombre.", answers: ["ci alziamo"], hint: "El pronombre de noi es ci.", explanation: "Alzarsi, en noi, es ci alziamo." },
  { question: "Escribe el presente de voi de alzarsi, con el pronombre.", answers: ["vi alzate"], hint: "Voi equivale a ustedes. El pronombre es vi.", explanation: "Alzarsi, en ustedes, es vi alzate." },
  { question: "Escribe el presente de loro de alzarsi, con el pronombre.", answers: ["si alzano"], hint: "Loro equivale a ellos o ellas. El pronombre vuelve a ser si.", explanation: "Alzarsi, en loro, es si alzano." },
  { question: "Escribe el presente de io de sedersi, con el pronombre.", answers: ["mi siedo"], hint: "En io aparece ie: siedo.", explanation: "Sedersi, en io, es mi siedo." },
  { question: "Elige el presente de tu de sedersi: (ti sedi / ti siedi).", answers: ["ti siedi"], hint: "En tu, la forma tónica lleva ie.", explanation: "Sedersi, en tu, es ti siedi." },
  { question: "Escribe el presente de voi de sedersi, con el pronombre.", answers: ["vi sedete"], hint: "En voi no lleva ie. Voi equivale a ustedes.", explanation: "Sedersi, en ustedes, es vi sedete. En noi es ci sediamo." },
  { question: "Escribe el presente de io de divertirsi, con el pronombre.", answers: ["mi diverto"], hint: "La forma de io es diverto.", explanation: "Divertirsi, en io, es mi diverto." },
  { question: "Elige cómo se dice «me ducho»: (mi faccio la doccia / mi fo la doccia).", answers: ["mi faccio la doccia"], hint: "Se usa el presente de fare: faccio.", explanation: "Ducharse, en io, es mi faccio la doccia." },
  { question: "Escribe el presente de io de vestirsi, con el pronombre.", answers: ["mi vesto"], hint: "Vestirsi no lleva -isc-.", explanation: "Vestirsi, en io, es mi vesto." },
  { question: "Escribe en italiano: No me levanto temprano.", answers: ["Non mi alzo presto"], hint: "Non va antes del pronombre.", explanation: "No me levanto temprano = Non mi alzo presto." },
  { question: "Escribe en italiano: Me levanto siempre a las siete.", answers: ["Mi alzo sempre alle sette"], hint: "Sempre suele ir después del verbo. A + le = alle.", explanation: "Me levanto siempre a las siete = Mi alzo sempre alle sette." },
  { question: "Escribe en italiano: No tomo nunca café.", answers: ["Non bevo mai il caffè", "Non bevo mai caffè"], hint: "Mai, con un verbo, pide non.", explanation: "No tomo nunca café = Non bevo mai il caffè. Sin artículo, Non bevo mai caffè también se entiende." },
  { question: "Escribe en italiano: ¿A qué hora te levantas?", answers: ["A che ora ti alzi?"], hint: "La palabra interrogativa va primero y el pronombre, antes del verbo.", explanation: "¿A qué hora te levantas? = A che ora ti alzi?" },
  { question: "Escribe en italiano: Me lavo las manos.", answers: ["Mi lavo le mani"], hint: "Con el cuerpo va el artículo, sin posesivo.", explanation: "Me lavo las manos = Mi lavo le mani." },
  { question: "Escribe en italiano: Me llamo Leslie.", answers: ["Mi chiamo Leslie"], hint: "Chiamarsi, en io, es mi chiamo.", explanation: "Me llamo Leslie = Mi chiamo Leslie." },
  { question: "Escribe en italiano: Normalmente trabajo en Roma, pero ahora estoy trabajando en Milán.", answers: ["Di solito lavoro a Roma, ma adesso sto lavorando a Milano"], hint: "La rutina va en presente. Lo de ahora, con sto y el gerundio.", explanation: "Di solito lavoro a Roma, ma adesso sto lavorando a Milano. La ciudad lleva a: a Roma, a Milano." },
];
