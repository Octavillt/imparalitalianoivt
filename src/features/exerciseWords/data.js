// Movimientos de ejercicio. `it` es el infinitivo.
// Con usted, -are termina en -i y -ere en -a: al revés que la orden de tú.
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const inf = t => ({ t, r: "inf" });
const ge = t => ({ t, r: "gerundio" });
const ng = t => ({ t, r: "neg" });
const es = t => ({ t, r: "essere" });
const art = t => ({ t, r: "art" });
const prep = t => ({ t, r: "prep" });

export const EXERCISE_WORDS = [
  {
    it: "alzare",
    es: "levantar",
    tu: "alza",
    lei: "alzi",
    gerundio: "alzando",
    instruction: "Alza le braccia.",
    meaning: "Levanta los brazos.",
    note: "Con usted: Alzi le braccia. Con ustedes: Alzate le braccia.",
  },
  {
    it: "abbassare",
    es: "bajar",
    tu: "abbassa",
    lei: "abbassi",
    gerundio: "abbassando",
    instruction: "Abbassa le braccia.",
    meaning: "Baja los brazos.",
    note: "Con usted: Abbassi le braccia. Con ustedes: Abbassate le braccia.",
  },
  {
    it: "piegare",
    es: "doblar",
    tu: "piega",
    lei: "pieghi",
    gerundio: "piegando",
    instruction: "Piega le ginocchia.",
    meaning: "Dobla las rodillas.",
    note: "Con usted se escribe pieghi: la h mantiene el sonido fuerte de la g. Con ustedes: Piegate le ginocchia.",
  },
  {
    it: "stendere",
    es: "estirar",
    tu: "stendi",
    lei: "stenda",
    gerundio: "stendendo",
    instruction: "Stendi le gambe.",
    meaning: "Estira las piernas.",
    note: "Verbo en -ere: la orden de tú termina en -i y la de usted en -a.",
  },
  {
    it: "girare",
    es: "girar",
    tu: "gira",
    lei: "giri",
    gerundio: "girando",
    instruction: "Gira la testa a sinistra.",
    meaning: "Gira la cabeza a la izquierda.",
    note: "Con usted: Giri la testa a sinistra.",
  },
  {
    it: "saltare",
    es: "saltar",
    tu: "salta",
    lei: "salti",
    gerundio: "saltando",
    instruction: "Salta sul tappetino.",
    meaning: "Salta sobre el tapete.",
    note: "Sul une su + il. Con usted: Salti sul tappetino.",
  },
  {
    it: "spingere",
    es: "empujar",
    tu: "spingi",
    lei: "spinga",
    gerundio: "spingendo",
    instruction: "Spingi con le gambe.",
    meaning: "Empuja con las piernas.",
    note: "Verbo en -ere: tú spingi, usted spinga.",
  },
  {
    it: "tirare",
    es: "jalar",
    tu: "tira",
    lei: "tiri",
    gerundio: "tirando",
    instruction: "Tira le ginocchia al petto.",
    meaning: "Jala las rodillas hacia el pecho.",
    note: "Al une a + il. Con usted: Tiri le ginocchia al petto.",
  },
  {
    it: "sollevare",
    es: "levantar un peso",
    tu: "solleva",
    lei: "sollevi",
    gerundio: "sollevando",
    instruction: "Solleva il peso.",
    meaning: "Levanta la pesa.",
    note: "Alzare levanta una parte del cuerpo. Sollevare, en esta lección, levanta la pesa.",
  },
];

// Orden de ustedes, la misma persona del presente de voi.
export const VOI_FORMS = {
  alzare: "alzate",
  abbassare: "abbassate",
  piegare: "piegate",
  stendere: "stendete",
  girare: "girate",
  saltare: "saltate",
  spingere: "spingete",
  tirare: "tirate",
  sollevare: "sollevate",
};

export const GROUP_ORDERS = [
  ["Alzate le braccia.", "Levanten los brazos."],
  ["Piegate le ginocchia.", "Doblen las rodillas."],
];

export const NEGATIVE = [
  { pts: [ng("Non"), " ", inf("piegare"), " ", art("le"), " ginocchia."], esp: "No dobles las rodillas." },
  { pts: [ng("Non"), " ", vb("pieghi"), " ", art("le"), " ginocchia."], esp: "No doble las rodillas." },
  { pts: [ng("Non"), " ", inf("stendere"), " ", art("le"), " gambe."], esp: "No estires las piernas." },
  { pts: [ng("Non"), " ", vb("stenda"), " ", art("le"), " gambe."], esp: "No estire las piernas." },
];

export const ONGOING = [
  { pts: [su("Octavio"), " ", es("sta"), " ", ge("sollevando"), " un peso."], esp: "Octavio está levantando una pesa." },
  { pts: [su("Leslie"), " ", es("sta"), " ", ge("facendo"), " stretching."], esp: "Leslie está haciendo estiramientos." },
];

export const ABILITY = [
  { pts: [su("Octavio"), " ", vb("sa"), " ", inf("sollevare"), " un peso."], esp: "Octavio sabe levantar una pesa." },
  { pts: ["Oggi ", su("Octavio"), " ", ng("non"), " ", vb("riesce"), " ", prep("a"), " ", inf("sollevare"), " ", art("il"), " peso."], esp: "Hoy Octavio no logra levantar la pesa." },
];

export const VOCAB = [
  ["fare ginnastica", "hacer ejercicio"],
  ["fare stretching", "hacer estiramientos"],
  ["andare in palestra", "ir al gimnasio"],
  ["fare una pausa", "tomar un descanso"],
  ["la palestra", "el gimnasio"],
  ["il peso", "la pesa"],
  ["il tappetino", "el tapete"],
];

export const PRACTICE = [
  { question: "Escribe el imperativo de tú de alzare.", answers: ["alza"], hint: "En -are, la orden de tú termina en -a.", explanation: "Tú de alzare es alza. Usted es alzi." },
  { question: "Escribe el imperativo de usted de alzare.", answers: ["alzi"], hint: "En -are, la orden de usted termina en -i.", explanation: "Usted de alzare es alzi." },
  { question: "Escribe el gerundio de alzare.", answers: ["alzando"], hint: "Los verbos en -are forman el gerundio en -ando.", explanation: "Alzare → alzando." },
  { question: "Escribe el imperativo de tú de piegare.", answers: ["piega"], hint: "La orden de tú no lleva h.", explanation: "Tú de piegare es piega. La h aparece en usted: pieghi." },
  { question: "Escribe el imperativo de usted de piegare.", answers: ["pieghi"], hint: "La h mantiene el sonido fuerte de la g.", explanation: "Usted de piegare es pieghi." },
  { question: "Escribe el imperativo de tú de stendere.", answers: ["stendi"], hint: "En -ere, la orden de tú termina en -i.", explanation: "Tú de stendere es stendi. Usted es stenda." },
  { question: "Escribe el imperativo de usted de stendere.", answers: ["stenda"], hint: "En -ere, la orden de usted termina en -a.", explanation: "Usted de stendere es stenda." },
  { question: "Escribe el imperativo de usted de spingere.", answers: ["spinga"], hint: "Spingere es un verbo en -ere.", explanation: "Usted de spingere es spinga. Tú es spingi." },
  { question: "Escribe el gerundio de spingere.", answers: ["spingendo"], hint: "Los verbos en -ere forman el gerundio en -endo.", explanation: "Spingere → spingendo." },
  { question: "Escribe el gerundio de sollevare.", answers: ["sollevando"], hint: "Sollevare es un verbo en -are.", explanation: "Sollevare → sollevando." },
  { question: "Escribe la orden de tú: Levanta los brazos.", answers: ["Alza le braccia"], hint: "El plural de il braccio es le braccia.", explanation: "Levanta los brazos = Alza le braccia." },
  { question: "Escribe la orden de tú: Estira las piernas.", answers: ["Stendi le gambe"], hint: "Stendere, en tú, es stendi.", explanation: "Estira las piernas = Stendi le gambe." },
  { question: "Escribe la orden de tú: Gira la cabeza a la izquierda.", answers: ["Gira la testa a sinistra"], hint: "Testa es femenino singular.", explanation: "Gira la cabeza a la izquierda = Gira la testa a sinistra." },
  { question: "Escribe la orden de usted: Doble las rodillas.", answers: ["Pieghi le ginocchia"], hint: "Ginocchia es el plural femenino. Usted de piegare es pieghi.", explanation: "Doble las rodillas = Pieghi le ginocchia." },
  { question: "Escribe la orden de ustedes: Levanten los brazos.", answers: ["Alzate le braccia"], hint: "Ustedes, en la clase, es voi: alzate.", explanation: "Levanten los brazos = Alzate le braccia." },
  { question: "Escribe la orden de ustedes: Doblen las rodillas.", answers: ["Piegate le ginocchia"], hint: "Ustedes de piegare es piegate.", explanation: "Doblen las rodillas = Piegate le ginocchia." },
  { question: "Escribe la orden negativa de tú: No dobles las rodillas.", answers: ["Non piegare le ginocchia"], hint: "Con tú, la negativa usa el infinitivo.", explanation: "No dobles las rodillas = Non piegare le ginocchia." },
  { question: "Escribe la orden negativa de usted: No doble las rodillas.", answers: ["Non pieghi le ginocchia"], hint: "Con usted se niega la forma de usted.", explanation: "No doble las rodillas = Non pieghi le ginocchia." },
  { question: "Escribe en italiano: Octavio está levantando una pesa.", answers: ["Octavio sta sollevando un peso"], hint: "La acción en curso usa stare y el gerundio.", explanation: "Octavio está levantando una pesa = Octavio sta sollevando un peso." },
  { question: "Escribe en italiano: Leslie está haciendo stretching.", answers: ["Leslie sta facendo stretching"], hint: "El gerundio de fare es facendo.", explanation: "Leslie está haciendo stretching = Leslie sta facendo stretching." },
  { question: "Escribe en italiano: ir al gimnasio.", answers: ["andare in palestra", "andare alla palestra"], hint: "La frase de la lección es andare in palestra. Andare alla palestra también se dice.", explanation: "Ir al gimnasio = andare in palestra. Andare alla palestra también se usa." },
  { question: "¿Qué significa «il tappetino»?", answers: ["el tapete", "tapete"], answerLang: "es", hint: "Es donde se hace el ejercicio en el piso.", explanation: "Il tappetino es el tapete." },
  { question: "¿Qué significa «fare una pausa»?", answers: ["tomar un descanso", "hacer una pausa"], answerLang: "es", hint: "Es parar un momento.", explanation: "Fare una pausa es tomar un descanso." },
];
