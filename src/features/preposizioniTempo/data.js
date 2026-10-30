// Preposiciones de tiempo y lugar. Si hay artículo, la preposición se contrae.
const vb = t => ({ t, r: "verb" });
const ng = t => ({ t, r: "neg" });
const pr = t => ({ t, r: "prep" });
const ar = t => ({ t, r: "articolata" });
const st = t => ({ t, r: "essere" });
const art = t => ({ t, r: "art" });
const su = t => ({ t, r: "subject" });

export const ZOOM = [
  { prep: "A", icon: "📍", color: "#fb923c", size: "Ciudad, hora, lugar fijo", esp: "a Roma · alle otto · a casa", sample: "a Roma" },
  { prep: "IN", icon: "🗺️", color: "#38bdf8", size: "País, mes, transporte", esp: "in Italia · in luglio · in treno", sample: "in Italia" },
  { prep: "DA", icon: "↩️", color: "#4ade80", size: "Origen y desde cuándo", esp: "da Roma · da due anni", sample: "da due anni" },
];

export const PREP_USES = [
  {
    prep: "A",
    icon: "📍",
    color: "#fb923c",
    tagline: "Ciudad, hora y lugar fijo",
    idea: "Las ciudades van con a. La hora se contrae con el artículo. Unos lugares fijos van sin artículo.",
    groups: [
      { title: "Ciudades", items: ["a Roma", "a Firenze", "a Milano", "a Venezia", "a Napoli"] },
      { title: "Hora", items: ["alle otto", "all'una", "a mezzogiorno", "a mezzanotte"] },
      { title: "Lugares fijos", items: ["a casa", "a scuola", "a letto", "a teatro"] },
    ],
    note: "Alle = a + le. All' = a + l'. A mezzogiorno y a mezzanotte van sin artículo.",
  },
  {
    prep: "IN",
    icon: "🗺️",
    color: "#38bdf8",
    tagline: "País, periodo y transporte",
    idea: "Países, regiones, meses, estaciones, varios transportes y lugares de un trámite o del trabajo.",
    groups: [
      { title: "Países y regiones", items: ["in Italia", "in Toscana"] },
      { title: "Meses y estaciones", items: ["in luglio", "in estate"] },
      { title: "Transporte", items: ["in treno", "in macchina", "in aereo"] },
      { title: "Trabajo o trámite", items: ["in banca", "in ufficio", "in centro"] },
    ],
    note: "El año lleva artículo: in + il = nel, como en nel 2026. A pie se dice a piedi.",
  },
  {
    prep: "DA",
    icon: "↩️",
    color: "#4ade80",
    tagline: "Persona, origen y desde cuándo",
    idea: "Da dice de dónde vienes, desde qué hora, desde hace cuánto y el lugar de una persona.",
    groups: [
      { title: "Personas", items: ["dal dottore", "da Leslie"] },
      { title: "Origen", items: ["Vengo da Roma"] },
      { title: "De una hora a otra", items: ["dalle nove alle cinque"] },
      { title: "Desde hace", items: ["da due anni"] },
    ],
    note: "Studio italiano da due anni va en presente: estudio italiano desde hace dos años. Dal = da + il. Dalle = da + le.",
  },
  {
    prep: "PER",
    icon: "⏱️",
    color: "#f472b6",
    tagline: "Duración y destino del viaje",
    idea: "Per mide cuánto dura algo y también hacia dónde sales de viaje.",
    groups: [
      { title: "Duración", items: ["per due ore", "per una settimana"] },
      { title: "Destino", items: ["Parto per Roma", "Parto per Firenze"] },
    ],
    note: "Per due ore cierra una duración. Da due anni mira hacia atrás y la acción sigue.",
  },
  {
    prep: "TRA / FRA",
    icon: "⏳",
    color: "#a78bfa",
    tagline: "Dentro de un plazo",
    idea: "Tra y fra se usan igual: algo va a pasar dentro de ese plazo.",
    groups: [
      { title: "Plazo", items: ["tra un'ora", "fra due giorni", "tra una settimana"] },
    ],
    note: "Un'ora lleva apóstrofo porque ora es femenino.",
  },
  {
    prep: "SU",
    icon: "📦",
    color: "#fbbf24",
    tagline: "Sobre",
    idea: "Su se une al artículo.",
    groups: [
      { title: "Sobre un objeto", items: ["sul tavolo", "sulla sedia"] },
    ],
    note: "Sul = su + il. Sulla = su + la.",
  },
  {
    prep: "DI",
    icon: "🌙",
    color: "#22d3ee",
    tagline: "Parte del día",
    idea: "Estas tres partes del día pueden ir con di, sin artículo.",
    groups: [
      { title: "Con di", items: ["di mattina", "di sera", "di notte"] },
    ],
    note: "La tarde es il pomeriggio; también se oye nel pomeriggio. La mattina y di mattina conviven, igual que la sera / di sera y la notte / di notte.",
  },
  {
    prep: "SIN",
    icon: "📅",
    color: "#94a3b8",
    tagline: "Hoy, mañana y el día",
    idea: "Oggi, domani y el nombre del día van sin preposición. Con artículo, el día se repite cada semana.",
    groups: [
      { title: "Sin preposición", items: ["oggi", "domani", "lunedì"] },
      { title: "Cada semana", items: ["il lunedì", "il sabato"] },
    ],
    note: "Lavoro lunedì habla de ese día. Lavoro il lunedì significa los lunes. A lunedì, como despedida, es hasta el lunes.",
  },
];

export const TIME_EXAMPLES = [
  { pts: [su("Leslie"), " ", vb("arriva"), " ", pr("a"), " Roma ", ar("alle"), " otto."], esp: "Leslie llega a Roma a las ocho." },
  { pts: ["Di mattina ", vb("bevo"), " un caffè."], esp: "Por la mañana tomo un café." },
  { pts: [vb("Studio"), " italiano ", pr("da"), " due anni."], esp: "Estudio italiano desde hace dos años." },
  { pts: [vb("Lavoro"), " ", ar("dalle"), " nove ", ar("alle"), " cinque."], esp: "Trabajo de las nueve a las cinco." },
];

export const SAME_WORD = [
  {
    word: "Roma",
    rows: [
      { prep: "a", phrase: "a Roma", esp: "en Roma (la ciudad)", color: "#fb923c" },
      { prep: "da", phrase: "Vengo da Roma", esp: "vengo de Roma", color: "#4ade80" },
      { prep: "per", phrase: "Parto per Roma", esp: "salgo para Roma", color: "#f472b6" },
    ],
  },
  {
    word: "un'ora / l'una",
    rows: [
      { prep: "a", phrase: "all'una", esp: "a la una", color: "#fb923c" },
      { prep: "tra", phrase: "tra un'ora", esp: "dentro de una hora", color: "#a78bfa" },
      { prep: "per", phrase: "per un'ora", esp: "durante una hora", color: "#f472b6" },
      { prep: "da", phrase: "da un'ora", esp: "desde hace una hora", color: "#4ade80" },
    ],
  },
];

export const TRANSPORT = [
  { right: "in treno · in macchina · in aereo", esp: "en tren, en carro, en avión" },
  { right: "a piedi", esp: "a pie: este medio va con a" },
];

export const FIXED = [
  { phrase: "a casa", esp: "en casa" },
  { phrase: "a scuola", esp: "en la escuela" },
  { phrase: "a letto", esp: "en la cama" },
  { phrase: "a teatro", esp: "en el teatro" },
  { phrase: "a mezzogiorno", esp: "al mediodía" },
  { phrase: "a mezzanotte", esp: "a medianoche" },
  { phrase: "a piedi", esp: "a pie" },
  { phrase: "in banca", esp: "en el banco" },
  { phrase: "in ufficio", esp: "en la oficina" },
  { phrase: "in centro", esp: "en el centro" },
  { phrase: "in palestra", esp: "en el gimnasio" },
  { phrase: "di mattina", esp: "por la mañana" },
  { phrase: "di sera", esp: "por la noche" },
  { phrase: "di notte", esp: "de noche, ya tarde" },
];

export const CONTRAST_ROWS = [
  ["a Roma", "en Roma"],
  ["alle otto", "a las ocho"],
  ["all'una", "a la una"],
  ["a mezzogiorno", "al mediodía"],
  ["a casa", "en casa"],
  ["in Italia", "en Italia"],
  ["in treno", "en tren"],
  ["in estate", "en verano"],
  ["in luglio", "en julio"],
  ["nel 2026", "en 2026"],
  ["dal dottore", "al doctor"],
  ["Vengo da Roma", "Vengo de Roma"],
  ["dalle nove alle cinque", "de las nueve a las cinco"],
  ["da due anni", "desde hace dos años"],
  ["per due ore", "durante dos horas"],
  ["Parto per Roma", "Salgo para Roma"],
  ["tra un'ora", "dentro de una hora"],
  ["sul tavolo", "sobre la mesa"],
  ["di mattina", "por la mañana"],
  ["oggi", "hoy"],
  ["il lunedì", "los lunes"],
  ["una volta al giorno", "una vez al día"],
];

export const HOW_OFTEN = [
  {
    q: ["Quante volte ", ar("al"), " giorno ", vb("bevi"), " ", art("il"), " caffè?"],
    a: "Una volta al giorno.",
    esp: "¿Cuántas veces al día tomas café? — Una vez al día.",
  },
  {
    q: ["Quante volte ", ar("alla"), " settimana ", vb("vai"), " ", pr("in"), " palestra?"],
    a: "Due volte alla settimana.",
    esp: "¿Cuántas veces a la semana vas al gimnasio? — Dos veces a la semana.",
  },
];

export const FREQUENCY_WORDS = [
  { word: "una volta", esp: "una vez" },
  { word: "due volte", esp: "dos veces" },
  { word: "al giorno", esp: "al día (a + il)" },
  { word: "alla settimana", esp: "a la semana (a + la)" },
  { word: "al mese", esp: "al mes (a + il)" },
];

export const MISTAKES = [
  { wrong: "Arrivo a le otto.", right: "Arrivo alle otto.", note: "A + le se escribe alle." },
  { wrong: "Vado da il dottore.", right: "Vado dal dottore.", note: "Da + il se escribe dal." },
  { wrong: "Il gelato è su il tavolo.", right: "Il gelato è sul tavolo.", note: "Su + il se escribe sul." },
  { wrong: "Vado a la stazione.", right: "Vado alla stazione.", note: "A + la se escribe alla." },
  { wrong: "in il 2026", right: "nel 2026", note: "In + il se escribe nel." },
];

export const EXERCISE = [
  { q: "Leslie llega a Roma a las ocho.", pts: [su("Leslie"), " ", vb("arriva"), " ", pr("a"), " Roma ", ar("alle"), " otto."] },
  { q: "Vivo en Italia.", pts: [vb("Abito"), " ", pr("in"), " Italia."] },
  { q: "Estudio italiano desde hace dos años.", pts: [vb("Studio"), " italiano ", pr("da"), " due anni."] },
  { q: "Salgo para Florencia dentro de una hora.", pts: [vb("Parto"), " ", pr("per"), " Firenze ", pr("tra"), " un'ora."] },
  { q: "El helado está sobre la mesa.", pts: [art("Il"), " gelato ", st("è"), " ", ar("sul"), " tavolo."] },
  { q: "Salgo por la noche.", pts: [vb("Esco"), " ", pr("di"), " sera."] },
  { q: "Mañana voy a Florencia.", pts: ["Domani ", vb("vado"), " ", pr("a"), " Firenze."] },
  { q: "Los lunes no trabajo.", pts: [ng("Non"), " ", vb("lavoro"), " ", art("il"), " lunedì."] },
];

export const PRACTICE = [
  { question: "Elige la preposición de esta ciudad: Arrivo (a / in) Roma.", answers: ["a"], hint: "Las ciudades van con a.", explanation: "Arrivo a Roma. La ciudad lleva a." },
  { question: "Escribe en italiano la hora: a las ocho.", answers: ["alle otto"], hint: "A + le se contrae en alle.", explanation: "A las ocho = alle otto." },
  { question: "Escribe en italiano la hora: a la una.", answers: ["all'una"], hint: "A + l' se escribe all'.", explanation: "A la una = all'una." },
  { question: "Escribe en italiano: en Italia.", answers: ["in Italia"], hint: "El país va con in.", explanation: "En Italia = in Italia." },
  { question: "Escribe en italiano: en la Toscana.", answers: ["in Toscana", "nella Toscana"], hint: "La forma de la lección es in Toscana. Nella Toscana también se usa.", explanation: "En la Toscana = in Toscana. Nella Toscana también se dice." },
  { question: "Escribe en italiano: en tren.", answers: ["in treno"], hint: "Este medio de transporte va con in.", explanation: "En tren = in treno." },
  { question: "Escribe en italiano: en verano.", answers: ["in estate", "d'estate"], hint: "La forma de la lección es in estate. D'estate también se usa.", explanation: "En verano = in estate. D'estate también se dice." },
  { question: "Escribe en italiano: en julio.", answers: ["in luglio", "a luglio"], hint: "La forma de la lección es in luglio. A luglio también existe.", explanation: "En julio = in luglio. A luglio también se dice." },
  { question: "Escribe en italiano: en 2026.", answers: ["nel 2026"], hint: "In + il = nel.", explanation: "En 2026 = nel 2026." },
  { question: "Escribe en italiano: Vengo de Roma.", answers: ["Vengo da Roma"], hint: "El origen de un desplazamiento va con da.", explanation: "Vengo de Roma = Vengo da Roma. Sono di Roma es otra frase: soy de Roma." },
  { question: "Escribe en italiano: Estudio italiano desde hace dos años.", answers: ["Studio italiano da due anni"], hint: "El verbo se queda en presente.", explanation: "Estudio italiano desde hace dos años = Studio italiano da due anni." },
  { question: "Escribe en italiano: durante dos horas.", answers: ["per due ore"], hint: "La duración cerrada va con per.", explanation: "Durante dos horas = per due ore." },
  { question: "Escribe en italiano: Salgo para Roma.", answers: ["Parto per Roma"], hint: "El destino del viaje va con per.", explanation: "Salgo para Roma = Parto per Roma." },
  { question: "Escribe en italiano: dentro de una hora.", answers: ["tra un'ora", "fra un'ora"], hint: "Tra y fra valen igual. Un'ora lleva apóstrofo.", explanation: "Dentro de una hora = tra un'ora o fra un'ora." },
  { question: "Escribe en italiano: sobre la mesa.", answers: ["sul tavolo", "sopra il tavolo", "sopra al tavolo"], hint: "Su + il = sul. Sopra il tavolo y sopra al tavolo también se dicen.", explanation: "Sobre la mesa = sul tavolo. Sopra il tavolo y sopra al tavolo también se usan." },
  { question: "Escribe la forma con di de «por la mañana».", answers: ["di mattina"], hint: "Di va sin artículo en esta parte del día.", explanation: "Por la mañana, con di, es di mattina. La mattina también nombra la mañana." },
  { question: "Escribe en italiano: los lunes.", answers: ["il lunedì"], hint: "Con artículo, el día se repite cada semana.", explanation: "Los lunes = il lunedì. Lunedì lleva acento grave en la ì final." },
  { question: "Escribe en italiano: una vez al día.", answers: ["una volta al giorno"], hint: "Al = a + il. Una sola vez usa volta.", explanation: "Una vez al día = una volta al giorno." },
  { question: "Escribe en italiano: dos veces a la semana.", answers: ["due volte alla settimana"], hint: "Alla = a + la. De dos en adelante se usa volte.", explanation: "Dos veces a la semana = due volte alla settimana." },
  { question: "Escribe en italiano: de las nueve a las cinco.", answers: ["dalle nove alle cinque"], hint: "Dalle = da + le. Alle = a + le.", explanation: "De las nueve a las cinco = dalle nove alle cinque." },
  { question: "Elige la forma escrita de da + il: (dal / da il).", answers: ["dal"], hint: "La preposición y el artículo se escriben juntos.", explanation: "Da + il = dal. Da il no se escribe separado." },
  { question: "Escribe en italiano: Voy al doctor.", answers: ["Vado dal dottore"], hint: "El lugar de una persona va con da, y da + il = dal.", explanation: "Voy al doctor = Vado dal dottore." },
];
