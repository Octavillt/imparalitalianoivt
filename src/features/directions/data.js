// Indicaciones. El norte del mapa está arriba.
// Via Roma es la calle vertical izquierda; corso Italia, la derecha; via Dante, la horizontal.
// Piazza Garibaldi es el cruce de via Dante y corso Italia.
// Ospedale, noroeste. Fermata, suroeste. Museo, norte entre las dos calles.
// Banca, sur entre las dos. Farmacia, noreste. Stazione, sureste.
const vb = t => ({ t, r: "verb" });
const es = t => ({ t, r: "essere" });
const pr = t => ({ t, r: "prep" });
const ar = t => ({ t, r: "articolata" });
const wh = t => ({ t, r: "wh" });
const art = t => ({ t, r: "art" });

export const PLACES = [
  ["la stazione", "la estación"],
  ["la banca", "el banco"],
  ["la farmacia", "la farmacia"],
  ["il supermercato", "el supermercado"],
  ["l'ospedale", "el hospital"],
  ["la piazza", "la plaza"],
  ["la chiesa", "la iglesia"],
  ["il museo", "el museo"],
  ["la fermata dell'autobus", "la parada del camión"],
  ["il semaforo", "el semáforo"],
  ["l'incrocio", "el cruce"],
  ["la strada", "la calle"],
  ["il ponte", "el puente"],
];

export const DIRECTION_PHRASES = [
  { icon: "⬆️", phrase: "Vai sempre dritto", lei: "Vada sempre dritto", esp: "Sigue derecho / Siga derecho" },
  { icon: "↪️", phrase: "Gira a destra", lei: "Giri a destra", esp: "Gira a la derecha / Gire a la derecha" },
  { icon: "↩️", phrase: "Gira a sinistra", lei: "Giri a sinistra", esp: "Gira a la izquierda / Gire a la izquierda" },
  { icon: "🚶", phrase: "Continua", lei: "Continui", esp: "Sigue / Siga" },
  { icon: "🌉", phrase: "Attraversa il ponte", lei: "Attraversi il ponte", esp: "Cruza el puente / Cruce el puente" },
  { icon: "🏛️", phrase: "Attraversa la piazza", lei: "Attraversi la piazza", esp: "Cruza la plaza / Cruce la plaza" },
  { icon: "🔼", phrase: "Sali", lei: "Salga", esp: "Sube / Suba" },
  { icon: "🔽", phrase: "Scendi", lei: "Scenda", esp: "Baja / Baje" },
  { icon: "▶️", step: 1, phrase: "Prendi la prima a destra", lei: "Prenda la prima a destra", esp: "Toma la primera a la derecha / Tome la primera a la derecha" },
  { icon: "◀️", step: 2, phrase: "Prendi la seconda a sinistra", lei: "Prenda la seconda a sinistra", esp: "Toma la segunda a la izquierda / Tome la segunda a la izquierda" },
];

export const PLACE_PHRASES = [
  { phrase: "a destra", esp: "a la derecha" },
  { phrase: "a sinistra", esp: "a la izquierda" },
  { phrase: "sempre dritto", esp: "siempre derecho" },
  { phrase: "all'angolo", esp: "en la esquina" },
  { phrase: "in fondo alla strada", esp: "al final de la calle" },
  { phrase: "al semaforo", esp: "en el semáforo" },
  { phrase: "davanti a", esp: "delante de" },
  { phrase: "di fronte a", esp: "enfrente de" },
  { phrase: "accanto a", esp: "junto a" },
  { phrase: "vicino a", esp: "cerca de" },
];

export const ASKING = [
  { pts: ["Scusi, ", wh("dov'è"), " ", art("la"), " stazione?"], esp: "Disculpe, ¿dónde está la estación?" },
  { pts: ["Scusa, ", es("c'è"), " una farmacia qui vicino?"], esp: "Disculpa, ¿hay una farmacia aquí cerca?" },
  { pts: [wh("Come"), " ", vb("arrivo"), " ", ar("alla"), " stazione?"], esp: "¿Cómo llego a la estación?" },
];

export const ROUTES = [
  {
    title: "Dalla fermata alla stazione",
    esp: "De la parada a la estación",
    color: "#38bdf8",
    start: "en via Roma, junto a la parada, mirando al norte (↑).",
    steps: [
      "Vai sempre dritto per via Roma fino a via Dante.",
      "Gira a destra in via Dante.",
      "Passa il museo e, a piazza Garibaldi, gira a destra in corso Italia.",
      "Vai sempre dritto. La stazione è a sinistra.",
    ],
  },
  {
    title: "Dalla stazione all'ospedale",
    esp: "De la estación al hospital",
    color: "#f472b6",
    start: "en corso Italia, junto a la estación, mirando al norte (↑).",
    steps: [
      "Vai sempre dritto per corso Italia fino a piazza Garibaldi.",
      "Gira a sinistra in via Dante e passa il museo.",
      "Gira a destra in via Roma.",
      "Vai sempre dritto. L'ospedale è a sinistra.",
    ],
  },
  {
    title: "Dall'ospedale alla farmacia",
    esp: "Del hospital a la farmacia",
    color: "#4ade80",
    start: "en via Roma, junto al hospital, mirando al sur (↓).",
    steps: [
      "Vai sempre dritto per via Roma fino a via Dante.",
      "Gira a sinistra in via Dante.",
      "Passa il museo e, a piazza Garibaldi, gira a sinistra in corso Italia.",
      "Vai sempre dritto. La farmacia è a destra.",
    ],
  },
];

export const EXAMPLES = [
  { pts: [vb("Vai"), " sempre dritto e ", vb("gira"), " ", pr("a"), " sinistra ", ar("al"), " semaforo."], esp: "Sigue derecho y gira a la izquierda en el semáforo." },
  { pts: [vb("Prendi"), " ", art("la"), " prima ", pr("a"), " destra."], esp: "Toma la primera a la derecha." },
  { pts: [vb("Attraversa"), " ", art("la"), " piazza. ", art("Il"), " museo ", es("è"), " ", ar("all'angolo"), "."], esp: "Cruza la plaza. El museo está en la esquina." },
  { pts: [art("La"), " banca ", es("è"), " ", pr("a"), " destra."], esp: "El banco está a la derecha." },
  { pts: [art("La"), " farmacia ", es("è"), " accanto ", ar("al"), " museo."], esp: "La farmacia está junto al museo." },
  { pts: [vb("Vada"), " sempre dritto."], esp: "Siga siempre derecho." },
];

export const MISTAKES = [
  { wrong: "Come arrivo a la stazione.", right: "Come arrivo alla stazione.", note: "A + la se escribe alla." },
  { wrong: "La farmacia è accanto a il museo.", right: "La farmacia è accanto al museo.", note: "Accanto a, cuando sigue il, se escribe accanto al." },
  { wrong: "Gira a la destra.", right: "Gira a destra.", note: "La instrucción es a destra, sin artículo." },
  { wrong: "Scusi, vai sempre dritto.", right: "Scusi, vada sempre dritto.", note: "Scusi va con usted y el imperativo es vada. Con tú: Scusa, vai sempre dritto. Va', con apóstrofo, también es imperativo de tú." },
];

export const SOLVED = [
  { q: "Gira a la derecha.", answer: "Gira a destra." },
  { q: "De usted: siga siempre derecho.", answer: "Vada sempre dritto." },
  { q: "Toma la primera a la derecha.", answer: "Prendi la prima a destra." },
  { q: "La farmacia está junto al museo.", answer: "La farmacia è accanto al museo." },
  { q: "Disculpe, ¿dónde está la estación?", answer: "Scusi, dov'è la stazione?" },
];

export const PRACTICE = [
  { question: "Escribe, de tú: Gira a la derecha.", answers: ["Gira a destra"], hint: "A destra no lleva artículo.", explanation: "Gira a la derecha = Gira a destra." },
  { question: "Escribe, de usted: Gire a la izquierda.", answers: ["Giri a sinistra"], hint: "Con usted, girare hace giri.", explanation: "Gire a la izquierda = Giri a sinistra." },
  { question: "Escribe, de tú: Sigue siempre derecho.", answers: ["Vai sempre dritto", "Va' sempre dritto"], hint: "La forma de la lección es vai. Va', con apóstrofo, también es el imperativo de tú.", explanation: "Sigue siempre derecho = Vai sempre dritto. Va' sempre dritto también se usa." },
  { question: "Escribe, de usted: Siga siempre derecho.", answers: ["Vada sempre dritto"], hint: "Con usted, andare hace vada.", explanation: "Siga siempre derecho = Vada sempre dritto." },
  { question: "Escribe, de tú: Toma la primera a la derecha.", answers: ["Prendi la prima a destra"], hint: "El imperativo de tú de prendere es prendi.", explanation: "Toma la primera a la derecha = Prendi la prima a destra." },
  { question: "Escribe, de usted: Tome la segunda a la izquierda.", answers: ["Prenda la seconda a sinistra"], hint: "Con usted, prendere hace prenda.", explanation: "Tome la segunda a la izquierda = Prenda la seconda a sinistra." },
  { question: "Escribe, de tú: Cruza la plaza.", answers: ["Attraversa la piazza"], hint: "El imperativo de tú de attraversare es attraversa.", explanation: "Cruza la plaza = Attraversa la piazza." },
  { question: "Escribe, de usted: Cruce el puente.", answers: ["Attraversi il ponte"], hint: "Con usted, attraversare hace attraversi.", explanation: "Cruce el puente = Attraversi il ponte." },
  { question: "Escribe en italiano: El banco está a la derecha.", answers: ["La banca è a destra"], hint: "El verbo è lleva acento grave. A destra no lleva artículo.", explanation: "El banco está a la derecha = La banca è a destra." },
  { question: "Escribe en italiano: La farmacia está junto al museo.", answers: ["La farmacia è accanto al museo"], hint: "Accanto a + il se escribe accanto al.", explanation: "La farmacia está junto al museo = La farmacia è accanto al museo." },
  { question: "Escribe, de usted: Disculpe, ¿dónde está la estación?", answers: ["Scusi, dov'è la stazione?"], hint: "Scusi es de usted. Dove y è se escriben dov'è.", explanation: "Disculpe, ¿dónde está la estación? = Scusi, dov'è la stazione?" },
  { question: "Escribe, de tú: ¿Hay una farmacia aquí cerca?", answers: ["Scusa, c'è una farmacia qui vicino?", "C'è una farmacia qui vicino?"], hint: "Scusa es de tú. C'è lleva acento grave.", explanation: "¿Hay una farmacia aquí cerca? = Scusa, c'è una farmacia qui vicino?" },
  { question: "Escribe en italiano: ¿Cómo llego a la estación?", answers: ["Come arrivo alla stazione?"], hint: "A + la se escribe alla.", explanation: "¿Cómo llego a la estación? = Come arrivo alla stazione?" },
  { question: "Elige el imperativo de tú de andare: (vai / vada).", answers: ["vai", "va'"], hint: "En tú se usa vai. Vada es de usted. Va', con apóstrofo, también es imperativo de tú.", explanation: "El imperativo de tú es vai. Va' también. Vada es la forma de usted." },
  { question: "Elige el imperativo de usted de andare: (vada / vai).", answers: ["vada"], hint: "Con usted se usa vada.", explanation: "El imperativo de usted de andare es vada. Vai es la forma de tú." },
  { question: "Elige la forma para hablar de usted: (scusi / scusa).", answers: ["scusi"], hint: "Scusi va con Lei. Scusa, con tú.", explanation: "Para usted se usa scusi. Scusa es de tú." },
  { question: "Escribe el imperativo de tú de salire.", answers: ["sali"], hint: "Es una forma breve, igual a la del presente de tu.", explanation: "El imperativo de tú de salire es sali. Con usted: salga." },
  { question: "Escribe el imperativo de usted de scendere.", answers: ["scenda"], hint: "Con usted termina en -a.", explanation: "El imperativo de usted de scendere es scenda. Con tú: scendi." },
  { question: "Escribe en italiano: al final de la calle.", answers: ["in fondo alla strada"], hint: "Alla = a + la.", explanation: "Al final de la calle = in fondo alla strada." },
  { question: "Escribe en italiano: en el semáforo, con la contracción.", answers: ["al semaforo"], hint: "A + il = al.", explanation: "En el semáforo = al semaforo." },
];
