import { VERB_BANK } from "../verbFinder/data";
import { PRACTICE as ESSERE_AVERE } from "../essereAvere/data";
import { PRACTICE as COUNTRIES } from "../countries/data";
import { PRACTICE as FAMILY } from "../family/data";
import { PRACTICE as PLURAL } from "../plural/data";
import { PRACTICE as DEMONSTRATIVES } from "../demonstratives/data";
import { PRACTICE as FRUITS } from "../fruits/data";
import { PRACTICE as PREPOSITIONS } from "../prepositions/data";
import { PRACTICE as DATES } from "../dates/data";
import { PRACTICE as VERBS } from "../verbs/data";
import { PRACTICE as STARE_GERUNDIO } from "../stareGerundio/data";
import { PRACTICE as JOBS } from "../jobs/data";
import { PRACTICE as VOCABULARY } from "../vocabulary/data";
import { PRACTICE as ARTICLES } from "../articles/data";
import { PRACTICE as ADJECTIVES } from "../adjectives/data";
import { PRACTICE as POSSESSIVE_ADJECTIVES } from "../possessiveAdjectives/data";
import { PRACTICE as PREPOSIZIONI_ARTICOLATE } from "../preposizioniArticolate/data";
import { PRACTICE as WH_QUESTIONS } from "../whQuestions/data";
import { PRACTICE as PRESENTE_INDICATIVO } from "../presenteIndicativo/data";
import { PRACTICE as VERBI_INFINITO } from "../verbiInfinito/data";
import { PRACTICE as IRREGULAR_VERBS } from "../irregularVerbs/data";
import { PRACTICE as ROUTINE } from "../routineRiflessivi/data";
import { PRACTICE as PREP_TEMPO } from "../preposizioniTempo/data";
import { PRACTICE as DIRECTIONS } from "../directions/data";
import { PRACTICE as BODY_PARTS } from "../bodyParts/data";

// Une las partes de una oración con tokens en un solo texto plano. Las
// siguientes etapas la usarán con sus propios ejercicios de lección.
export const sentence = pts => pts.map(p => typeof p === "string" ? p : p.r === "zero" ? "" : p.t).join("").replace(/\s+/g, " ");

// Reutiliza los ejercicios de las lecciones para mantener una sola fuente.
export function completeSentences(topic, rows) {
  return rows.map(row => ({
    topic,
    question: `Escribe la oración completa en italiano: ${row.q || row.a || row.esp}`,
    answers: [sentence(row.pts)],
    hint: row.q || row.a ? row.esp : "Usa el vocabulario de la lección.",
    explanation: `${sentence(row.pts)} — ${row.esp}`,
  }));
}

export function missingToken(topic, rows) {
  return rows.map(row => ({
    topic,
    question: `Completa el espacio${topic === "articles" ? " (escribe Ø o 0 si no lleva artículo)" : ""}: ${row.pts.map(p => typeof p === "string" ? p : "___").join("")}`,
    // Ø no está en el teclado: el 0 cuenta como la misma respuesta.
    answers: row.pts.filter(p => typeof p !== "string").flatMap(p => p.t === "Ø" ? ["Ø", "0"] : [p.t]),
    hint: row.esp,
    explanation: sentence(row.pts),
  }));
}

// Una pregunta de cada tipo por verbo del banco de consulta.
function verbBankQuestions(v) {
  const { infinito, presente, participio, ausiliare, es, note } = v;
  const meanings = es.split(/,\s*(?![^()]*\))/).map(part => part.trim()).filter(Boolean);
  const auxiliaries = ausiliare.split(" / ").map(part => part.trim());
  const noted = text => (note ? `${text} ${note}` : text);
  return [
    {
      topic: "verbPresent",
      verb: infinito,
      question: `Escribe la forma de «io» en presente de ${infinito}.`,
      answers: [...new Set(presente)],
      hint: `Significa «${es}».`,
      explanation: noted(`${infinito} → ${presente.join(" / ")}.`),
    },
    {
      topic: "verbParticiple",
      verb: infinito,
      question: `Escribe el participio passato de ${infinito}.`,
      answers: [...new Set(participio)],
      hint: `Significa «${es}».`,
      explanation: noted(`${infinito} → ${participio.join(" / ")}.`),
    },
    {
      topic: "verbAux",
      verb: infinito,
      question: `¿Qué auxiliar usa ${infinito} en el passato prossimo?`,
      answers: [...new Set(auxiliaries)],
      hint: `Significa «${es}».`,
      explanation: noted(`En el passato prossimo, ${infinito} usa ${ausiliare}.`),
    },
    {
      topic: "verbMeaning",
      verb: infinito,
      question: `¿Qué significa ${infinito}?`,
      answers: [...new Set([es, ...meanings])],
      answerLang: "es",
      ...(meanings.length > 1 ? { hint: "Basta con escribir uno de sus significados." } : {}),
      explanation: noted(`${infinito} = ${es}.`),
    },
  ];
}

export const MODULE_QUESTIONS = [
  ...ESSERE_AVERE.map(row => ({ ...row, topic: "essereAvere" })),
  ...COUNTRIES.map(row => ({ ...row, topic: "countries" })),
  ...FAMILY.map(row => ({ ...row, topic: "family" })),
  ...PLURAL.map(row => ({ ...row, topic: "plural" })),
  ...DEMONSTRATIVES.map(row => ({ ...row, topic: "demonstratives" })),
  ...FRUITS.map(row => ({ ...row, topic: "fruits" })),
  ...PREPOSITIONS.map(row => ({ ...row, topic: "prepositions" })),
  ...DATES.map(row => ({ ...row, topic: "dates" })),
  ...VERBS.map(row => ({ ...row, topic: "verbs" })),
  ...STARE_GERUNDIO.map(row => ({ ...row, topic: "stareGerundio" })),
  ...JOBS.map(row => ({ ...row, topic: "jobs" })),
  ...VOCABULARY.map(row => ({ ...row, topic: "vocabulary" })),
  ...ARTICLES.map(row => ({ ...row, topic: "articles" })),
  ...ADJECTIVES.map(row => ({ ...row, topic: "adjectives" })),
  ...POSSESSIVE_ADJECTIVES.map(row => ({ ...row, topic: "possessiveAdjectives" })),
  ...PREPOSIZIONI_ARTICOLATE.map(row => ({ ...row, topic: "preposizioniArticolate" })),
  ...WH_QUESTIONS.map(row => ({ ...row, topic: "whQuestions" })),
  ...PRESENTE_INDICATIVO.map(row => ({ ...row, topic: "presenteIndicativo" })),
  ...VERBI_INFINITO.map(row => ({ ...row, topic: "verbiInfinito" })),
  ...IRREGULAR_VERBS.map(row => ({ ...row, topic: "irregularVerbs" })),
  ...ROUTINE.map(row => ({ ...row, topic: "routineRiflessivi" })),
  ...PREP_TEMPO.map(row => ({ ...row, topic: "preposizioniTempo" })),
  ...DIRECTIONS.map(row => ({ ...row, topic: "directions" })),
  ...BODY_PARTS.map(row => ({ ...row, topic: "bodyParts" })),
  ...VERB_BANK.flatMap(verbBankQuestions),
];
