import { MODULE_QUESTIONS } from "./moduleQuestions";
import { getAvailableTopics } from "../../constants/topicAvailability";
import { LEVELS } from "../../constants/levels";

// Cada pregunta tiene:
//   question  — texto que se muestra al estudiante
//   answers   — array de respuestas aceptadas (case-insensitive)
//   hint      — pista en español
//   topic     — categoría para filtrar por tema
//   explanation — se muestra al revelar la respuesta correcta
//   answerLang — "es" cuando la respuesta va en español; por defecto "it"
//   verb      — infinito del verbo, para enlazar a Verbos a la mano

export const QUESTIONS = [
  ...MODULE_QUESTIONS,

  // ── Números y alfabeto ────────────────────────────────────────
  {
    topic: "numbers",
    question: "Escribe en italiano: 16.",
    answers: ["sedici"],
    hint: "Termina igual que en español, pero con acento diferente…",
    explanation: "16 = sedici. Como los del 11 al 16, termina en -dici.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 17.",
    answers: ["diciassette"],
    hint: "Del 17 al 19 empiezan con dici-",
    explanation: "17 = diciassette: empieza con dici- y suma sette.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 21.",
    answers: ["ventuno"],
    hint: "La decena pierde su vocal final",
    explanation: "21 = ventuno: venti pierde la i ante uno.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 23.",
    answers: ["ventitré"],
    hint: "Tre lleva acento al final de la palabra",
    explanation: "23 = ventitré: tre cierra la palabra, así que lleva acento.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 28.",
    answers: ["ventotto"],
    hint: "La decena pierde su vocal final",
    explanation: "28 = ventotto: venti pierde la i ante otto.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 33.",
    answers: ["trentatré"],
    hint: "Tre cierra la palabra…",
    explanation: "33 = trentatré: trenta + tré, con acento porque tre cierra la palabra.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 41.",
    answers: ["quarantuno"],
    hint: "La decena pierde su vocal final",
    explanation: "41 = quarantuno: quaranta pierde la a ante uno.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 58.",
    answers: ["cinquantotto"],
    hint: "La decena pierde su vocal final",
    explanation: "58 = cinquantotto: cinquanta pierde la a ante otto.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 100.",
    answers: ["cento"],
    hint: "Suena casi igual que en español",
    explanation: "100 = cento, sin artículo.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 1.000.",
    answers: ["mille"],
    hint: "Ojo: se escribe con doble l",
    explanation: "1.000 = mille. Recuerda: en italiano el punto separa miles (1.000).",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 2.000.",
    answers: ["duemila"],
    hint: "Todo junto",
    explanation: "2.000 = duemila: número + mila, pegado.",
  },
  {
    topic: "numbers",
    question: "Escribe en italiano: 1.000.000.",
    answers: ["un milione"],
    hint: "Va separado por espacio y con artículo",
    explanation: "1.000.000 = un milione: los millones van separados por espacio.",
  },
  {
    topic: "numbers",
    question: "¿Cómo se llama la letra H en italiano?",
    answers: ["acca"],
    hint: "Empieza con a…",
    explanation: "La H es acca /ˈakka/: es muda, pero su nombre empieza con a.",
  },
  {
    topic: "numbers",
    question: "¿Cómo se llama la letra Z en italiano?",
    answers: ["zeta"],
    hint: "Igual que en español",
    explanation: "La Z es zeta /ˈdzɛta/.",
  },
  {
    topic: "numbers",
    question: "¿Cómo se llama la letra R en italiano?",
    answers: ["erre"],
    hint: "Doble letra, como el nombre de la E…",
    explanation: "La R es erre /ˈɛrre/: se deletrea erre y se pronuncia fuerte.",
  },
  {
    topic: "numbers",
    question: "¿Cuántas letras tiene el alfabeto italiano tradicional?",
    answers: ["21", "ventuno"],
    hint: "Las 5 extranjeras no cuentan",
    explanation: "El alfabeto italiano tradicional tiene 21 letras; las otras 5 (j, k, w, x, y) son extranjeras.",
  },
  {
    topic: "numbers",
    question: "Completa: Come si ___ il tuo nome?",
    answers: ["scrive"],
    hint: "Verbo escribir, 3.ª persona",
    explanation: "Come si scrive il tuo nome? = ¿Cómo se escribe tu nombre?",
  },
  {
    topic: "numbers",
    question: "Completa el deletreo: M come ___ (ciudad).",
    answers: ["Milano"],
    hint: "La ciudad de la moda",
    explanation: "M come Milano: con la M se deletrea «Milano».",
  },
  {
    topic: "numbers",
    question: "Completa: la TT de «gatto» se dice ___ ti.",
    answers: ["doppia"],
    hint: "Significa «doble»",
    explanation: "Las letras repetidas se dicen con «doppia»: gatto → G-A-doppia ti-O.",
  },
  {
    topic: "numbers",
    question: "¿Qué número es «diciannove»? Escribe la cifra.",
    answers: ["19", "diecinueve"],
    hint: "Empieza con dici-…",
    explanation: "diciannove = 19: dici- (diez) + nove (nueve).",
  },
  {
    topic: "numbers",
    question: "¿Qué número es «novanta»? Escribe la cifra.",
    answers: ["90", "noventa"],
    hint: "Suena al español «noventa»",
    explanation: "novanta = 90.",
  },

  // ── La hora ───────────────────────────────────────────────────
  {
    topic: "time",
    question: "Escribe en italiano: ¿Qué hora es?",
    answers: ["Che ora è?", "Che ore sono?"],
    hint: "Hay dos formas: con ora y con ore",
    explanation: "¿Qué hora es? = Che ora è? / Che ore sono?",
  },
  {
    topic: "time",
    question: "Escribe en italiano: Es la una.",
    answers: ["È l'una."],
    hint: "Ojo con el acento de è",
    explanation: "Es la una = È l'una. La una va en singular: è, no sono.",
  },
  {
    topic: "time",
    question: "Escribe en italiano: Son las tres.",
    answers: ["Sono le tre."],
    hint: "Son → sono le…",
    explanation: "Son las tres = Sono le tre. Las demás horas van en plural.",
  },
  {
    topic: "time",
    question: "Escribe en italiano: Son las cuatro y diez.",
    answers: ["Sono le quattro e dieci."],
    hint: "La y es e",
    explanation: "Son las cuatro y diez = Sono le quattro e dieci.",
  },
  {
    topic: "time",
    question: "Completa (2:15): Sono le due ___ un quarto.",
    answers: ["e"],
    hint: "Aquí suma minutos",
    explanation: "2:15 = Sono le due e un quarto: e suma los 15 minutos.",
  },
  {
    topic: "time",
    question: "Completa (5:30): Sono le cinque e ___.",
    answers: ["mezza", "mezzo"],
    hint: "La media",
    explanation: "5:30 = Sono le cinque e mezza (también se oye e mezzo).",
  },
  {
    topic: "time",
    question: "Completa (9:45): Sono le dieci ___ un quarto.",
    answers: ["meno"],
    hint: "Falta un cuarto para las diez",
    explanation: "9:45 = Sono le dieci meno un quarto: meno resta hasta la siguiente hora.",
  },
  {
    topic: "time",
    question: "Escribe en una palabra: las 12:00 del día.",
    answers: ["mezzogiorno"],
    hint: "Medio + día",
    explanation: "Las 12:00 del día = mezzogiorno.",
  },
  {
    topic: "time",
    question: "Escribe en una palabra: las 00:00.",
    answers: ["mezzanotte"],
    hint: "Medio + noche",
    explanation: "Las 00:00 = mezzanotte.",
  },
  {
    topic: "time",
    question: "Completa con è o sono: ___ l'una e mezza.",
    answers: ["È"],
    hint: "La una va en singular",
    explanation: "È l'una e mezza: con la una si usa è (singular).",
  },
  {
    topic: "time",
    question: "Completa con è o sono: ___ le sette.",
    answers: ["Sono"],
    hint: "Las demás horas van en plural",
    explanation: "Sono le sette: con las demás horas se usa sono le (plural).",
  },
  {
    topic: "time",
    question: "Completa: Il negozio apre ___ nove.",
    answers: ["alle"],
    hint: "A + le = …",
    explanation: "Il negozio apre alle nove: a + le se contrae en alle.",
  },
];

// Compara lo que escribe el alumno sin castigar detalles de teclado:
// mayúsculas, apóstrofos curvos o ´, comas, paréntesis, guiones y diagonales.
// Los acentos SÍ importan en italiano: è y e son palabras distintas.
export function normalize(value) {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’‘´`]/g, "'")
    .replace(/[.!?¿¡…]+/g, "")
    .replace(/[,;:"“”«»()/-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Igual que normalize, pero además sin acentos: para respuestas en español,
// donde el acento es opcional en la práctica (quizá = quizá).
export function looseNormalize(value) {
  return normalize(value)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function checkAnswer(userAnswer, acceptedAnswers, answerLang = "it") {
  const clean = answerLang === "es" ? looseNormalize : normalize;
  const given = clean(userAnswer);
  // Las aclaraciones entre paréntesis son opcionales: «Buenas noches (al llegar)».
  return acceptedAnswers.some(a => clean(a) === given || clean(a.replace(/\s*\([^)]*\)/g, "")) === given);
}

// ¿El único error fue el acento? Solo aplica en italiano (answerLang "it"):
// è ≠ e, così ≠ cosi. Si coincide al quitar acentos, la respuesta casi es.
export function accentMismatch(userAnswer, acceptedAnswers, answerLang = "it") {
  if (answerLang !== "it") return false;
  if (checkAnswer(userAnswer, acceptedAnswers, answerLang)) return false;
  return acceptedAnswers.some(a => looseNormalize(a) === looseNormalize(userAnswer));
}

// Las guías de examen reutilizan preguntas de las lecciones. La clave las
// identifica para que, dentro de una misma mezcla, cuenten como una sola. Si
// varias preguntas comparten el enunciado pero tienen opciones distintas
// («Elige la oración correcta.»), las opciones forman parte de la clave.
const QUESTION_KEYS = new Map();
{
  const optionSets = new Map();
  for (const q of QUESTIONS) {
    const text = normalize(q.question);
    if (!optionSets.has(text)) optionSets.set(text, new Set());
    if (q.options) optionSets.get(text).add(q.options.map(normalize).join("|"));
  }
  for (const q of QUESTIONS) {
    const text = normalize(q.question);
    const distinctOptions = optionSets.get(text).size > 1;
    QUESTION_KEYS.set(q, distinctOptions && q.options ? `${text}|${q.options.map(normalize).join("|")}` : text);
  }
}

export function questionKey(question) {
  return QUESTION_KEYS.get(question);
}

// Módulos que el Quiz puede practicar: solo los disponibles. Uno de consulta
// entra solo si define sus secciones (quizTopics); el Quiz no se lista a sí
// mismo.
export const QUIZ_LEVELS = LEVELS.filter(level => level.available && level.id !== "quiz" && (!level.reference || level.quizTopics));

export function quizTopicsOf(level) {
  return level.quizTopics ?? level.topics;
}

export function getByTopic(topic, levelId = "all", now = Date.now()) {
  // La mezcla general es de las lecciones; los verbos se practican eligiendo
  // su módulo para que no acaparen la mezcla.
  const levels = levelId === "all"
    ? QUIZ_LEVELS.filter(level => topic !== "mixed" || !level.reference)
    : QUIZ_LEVELS.filter(level => level.id === levelId);
  const available = new Set(getAvailableTopics(levels.flatMap(quizTopicsOf), now).map(item => item.id));
  const seen = new Set();
  return QUESTIONS.filter(q => available.has(q.topic) && (topic === "mixed" || q.topic === topic) &&
    (levelId === "all" || levels.some(level => quizTopicsOf(level).some(item => item.id === q.topic))))
    // Se queda la primera aparición: la de la lección, que acepta más variantes.
    .filter(q => !seen.has(questionKey(q)) && seen.add(questionKey(q)));
}

export function getRandom(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}
