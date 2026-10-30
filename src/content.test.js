import { describe, expect, it } from "vitest";
import { LEVELS } from "./constants/levels";
import { LEARNING_GUIDE } from "./constants/learningGuide";
import { TOPIC_FORMULAS } from "./constants/topicFormulas";
import { QUESTIONS, looseNormalize, normalize } from "./features/quiz/questions";

// Revisa el texto fuente de la app, sin las pruebas: atrapa errores frecuentes
// de escritura en italiano y restos del proyecto de inglés.
const SOURCES = Object.entries(import.meta.glob(
  ["./{components,constants,features,navigation,styles}/**/*.{js,jsx}", "./App.jsx", "!./**/*.test.*"],
  { query: "?raw", import: "default", eager: true },
));

function matches(pattern) {
  return SOURCES.flatMap(([file, text]) => text.split("\n")
    .map((line, index) => ({ file, line: index + 1, text: line.trim().slice(0, 100) }))
    .filter(({ text: content }) => pattern.test(content)));
}

describe("Calidad del italiano", () => {
  it.each([
    ["perché sin acento", /\bperche\b/i],
    ["più sin acento", /\bpiu\b/i],
    ["può sin acento", /\bpuo\b/i],
    ["città sin acento", /\bcitta\b/i],
    ["e' por è", /(^|[\s"«(])e'(\s|$)/],
    ["è con acento agudo", /(^|[\s"«(])é(\s|$)/],
    ["perché con acento grave", /perchè/i],
    ["un' ante masculino", /\bun'(amico|albero|anno|uomo)\b/i],
    ["un sin apóstrofo ante femenino", /\bun (amica|ora|isola)\b/i],
    ["tre sin acento en compuestos", /\b(venti|trenta|quaranta|cinquanta|sessanta|settanta|ottanta|novanta|cento)tre\b/i],
    ["preposición sin contraer", /\b(davanti|vicino|accanto) a (il|lo|la|i|gli|le)\b/i],
    ["di ante país con artículo", /\bdi (Messico|Italia|Spagna|Francia)\b/],
    ["italiano dentro del español", /\b(si dice|si usa|si escribe)\b/i],
    ["vosotros en la traducción", /\b(sois|estáis|tenéis)\b/i],
  ])("sin %s", (_name, pattern) => {
    expect(matches(pattern)).toEqual([]);
  });
});

describe("Sin restos del proyecto de inglés", () => {
  it.each([
    ["idioma inglés", /\bingl[eé]s\b|\benglish\b/i],
    ["lang en", /lang="en"|en-US/],
    ["clave antigua", /learningles/],
    ["bandera de Estados Unidos fuera de la tabla de países", /^(?!.*Stati Uniti).*🇺🇸/],
    ["campos antiguos", /\.base\b|verb_be|\.english\b/],
    ["expresiones inglesas", /o'clock|going to|to be\b|hour hand/i],
  ])("sin %s", (_name, pattern) => {
    expect(matches(pattern)).toEqual([]);
  });
});

describe("Banco de preguntas", () => {
  it("no acepta como válida una respuesta en italiano sin su acento", () => {
    const mismatched = QUESTIONS.filter(q => q.answerLang !== "es").flatMap(q => q.answers
      .filter(answer => q.answers.some(other => other !== answer
        && normalize(other) !== normalize(answer)
        && looseNormalize(other) === looseNormalize(answer)))
      .map(answer => `${q.question} → ${answer}`));
    expect(mismatched).toEqual([]);
  });
});

describe("Cobertura de cada lección disponible", () => {
  const lessons = LEVELS.filter(level => level.available && level.id !== "quiz" && !level.reference).flatMap(level => level.topics);

  it.each(lessons.map(topic => [topic.id, topic]))("%s tiene guía, fórmulas, preguntas y nombre italiano", (id, topic) => {
    expect(topic.italiano).toBeTruthy();
    expect(LEARNING_GUIDE[id]).toBeDefined();
    expect(TOPIC_FORMULAS[id].rows.length).toBeGreaterThan(0);
    expect(QUESTIONS.filter(question => question.topic === id).length).toBeGreaterThanOrEqual(10);
  });

  it("no guarda guías ni fórmulas de lecciones que no existen", () => {
    const ids = new Set(lessons.map(topic => topic.id));
    expect(Object.keys(LEARNING_GUIDE).filter(id => !ids.has(id))).toEqual([]);
    expect(Object.keys(TOPIC_FORMULAS).filter(id => !ids.has(id))).toEqual([]);
  });
});
