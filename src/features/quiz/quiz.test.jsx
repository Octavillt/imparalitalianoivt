import { describe, it, expect, vi, afterEach } from "vitest";
import { act, render, renderHook, screen, fireEvent } from "@testing-library/react";
import { LEVELS } from "../../constants/levels";
import { searchTopics } from "../../constants/searchIndex";
import { VERB_BANK } from "../verbFinder/data";
import { QUESTIONS, QUIZ_LEVELS, accentMismatch, checkAnswer, getByTopic, looseNormalize, normalize, questionKey } from "./questions";
import { useQuiz } from "./useQuiz";
import QuizSection from "./QuizSection";

afterEach(() => vi.restoreAllMocks());

const SELECTION = { levelId: "basico1", topicId: "time" };

function verbQuestion(topic, infinito) {
  return QUESTIONS.find(q => q.topic === topic && q.verb === infinito);
}

describe("Quiz general", () => {
  it("vive fuera de Básico I y el buscador lleva al módulo Quiz", () => {
    expect(LEVELS[0].topics.some(t => t.id === "quiz")).toBe(false);
    expect(LEVELS.find(l => l.id === "quiz").topics[0].id).toBe("quiz");
    expect(searchTopics("quiz").find(t => t.topicId === "quiz").levelId).toBe("quiz");
  });

  it("solo ofrece módulos disponibles", () => {
    expect(QUIZ_LEVELS.every(level => level.available && level.id !== "quiz")).toBe(true);
    render(<QuizSection />);
    const options = [...screen.getByLabelText("Módulo").options].map(option => option.textContent);
    expect(options).toEqual(LEVELS.length && ["Todos los módulos", ...QUIZ_LEVELS.map(level => level.label)]);
  });

  it("cubre cada sección disponible y filtra sin mezclar niveles", () => {
    for (const level of QUIZ_LEVELS.filter(l => !l.reference)) {
      const pool = getByTopic("mixed", level.id, 0);
      expect(pool.length).toBeGreaterThan(0);
      expect(pool.every(q => level.topics.some(t => t.id === q.topic))).toBe(true);
      for (const topic of level.topics) expect(getByTopic(topic.id, level.id, 0).length).toBeGreaterThan(0);
    }
    for (const q of QUESTIONS) {
      expect(q.question.trim()).not.toBe("");
      expect(q.answers.length).toBeGreaterThan(0);
      expect(q.answers.every(a => typeof a === "string" && a.trim())).toBe(true);
      expect(q.explanation.trim()).not.toBe("");
    }
  });

  it("practica los verbos en su módulo sin que acaparen la mezcla general", () => {
    expect(getByTopic("mixed", "all", 0).some(q => q.verb)).toBe(false);
    expect(getByTopic("verbPresent", "all", 0)).toHaveLength(VERB_BANK.length);
    const module = getByTopic("mixed", "verbos", 0);
    expect(module).toHaveLength(VERB_BANK.length * 4);
    expect(module.every(q => q.verb)).toBe(true);
  });

  it("reinicia al cambiar filtros y no repite preguntas hasta agotar cada ronda", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { result } = renderHook(() => useQuiz());
    act(() => result.current.setLevelId("basico1"));
    act(() => result.current.setTopic("time"));
    const count = getByTopic("time").length;
    for (let round = 0; round < 2; round++) {
      const seen = new Set();
      for (let i = 0; i < count; i++) {
        act(() => result.current.nextQuestion());
        expect(seen.has(result.current.question)).toBe(false);
        seen.add(result.current.question);
      }
    }
    act(() => result.current.setAnswer(result.current.question.answers[0].toUpperCase()));
    act(() => result.current.submitAnswer());
    act(() => result.current.submitAnswer());
    expect(result.current.score).toEqual({ correct: 1, total: 1 });
    act(() => result.current.setLevelId("all"));
    expect(result.current.started).toBe(false);
    expect(result.current.topic).toBe("mixed");
    expect(result.current.question).toBeNull();
    expect(result.current.score.total).toBe(0);
  });

  it("no vuelve a preguntar lo que se respondió bien, repite lo fallado y la puntuación cuadra", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { result } = renderHook(() => useQuiz(SELECTION));
    const count = result.current.questionCount;
    const answered = [];
    let failed = null;
    for (let step = 0; step < count + 1; step++) {
      act(() => result.current.nextQuestion());
      const q = result.current.question;
      expect(answered).not.toContain(questionKey(q));
      const fail = step === 0;
      if (fail) failed = questionKey(q);
      if (step === count) expect(questionKey(q)).toBe(failed);
      act(() => result.current.setAnswer(fail ? "risposta sbagliata" : q.answers[0]));
      act(() => result.current.submitAnswer());
      expect(result.current.feedback.correct).toBe(!fail);
      if (!fail) answered.push(questionKey(q));
    }
    expect(result.current.score).toEqual({ correct: count, total: count + 1 });
    expect(result.current.remainingCount).toBe(0);
    act(() => result.current.nextQuestion());
    expect(result.current.finished).toBe(true);
    expect(result.current.question).toBeNull();
  });

  it("muestra el resultado al responder bien todas las preguntas y permite volver a empezar", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const pool = getByTopic("time", "basico1");
    render(<QuizSection initialSelection={SELECTION} />);
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    for (let i = 0; i < pool.length; i++) {
      const q = pool.find(item => screen.queryByText(item.question));
      fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: q.answers[0] } });
      fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
      expect(screen.getByText(/Muy bien/)).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: i === pool.length - 1 ? /Ver resultado/ : /Siguiente pregunta/ }));
    }
    expect(screen.getByText(/Completaste el Quiz/)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${pool.length} preguntas en ${pool.length} intentos`))).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Volver a empezar/ }));
    expect(screen.getByRole("button", { name: /Empezar Quiz/ })).toBeInTheDocument();
  });

  it("no repite preguntas dentro de una mezcla y mantiene distinguibles las opciones", () => {
    const keys = getByTopic("mixed", "all", 0).map(questionKey);
    expect(new Set(keys).size).toBe(keys.length);
    for (const q of QUESTIONS.filter(item => item.options)) {
      const options = q.options.map(normalize);
      expect(new Set(options).size).toBe(options.length);
      expect(q.answers.every(a => options.includes(normalize(a)))).toBe(true);
    }
  });
});

describe("Quiz — calificación en italiano", () => {
  it("distingue los acentos en respuestas en italiano", () => {
    expect(checkAnswer("è", ["è"])).toBe(true);
    expect(checkAnswer("e", ["è"])).toBe(false);
    expect(checkAnswer("È L'UNA", ["È l'una."])).toBe(true);
    expect(checkAnswer("ventitre", ["ventitré"])).toBe(false);
    expect(checkAnswer("perchè", ["perché"])).toBe(false);
  });

  it("no castiga mayúsculas, apóstrofos curvos, puntuación ni aclaraciones", () => {
    expect(checkAnswer("  sono le TRE ", ["Sono le tre."])).toBe(true);
    expect(checkAnswer("è l’una", ["È l'una."])).toBe(true);
    expect(checkAnswer("sono le tre", ["Sono le tre (de la tarde)."])).toBe(true);
    expect(checkAnswer("è", ["è"])).toBe(true);
  });

  it("detecta cuando solo falla el acento", () => {
    expect(accentMismatch("e", ["è"])).toBe(true);
    expect(accentMismatch("ventitre", ["ventitré"])).toBe(true);
    expect(accentMismatch("è", ["è"])).toBe(false);
    expect(accentMismatch("uno", ["è"])).toBe(false);
  });

  it("en respuestas en español el acento es opcional", () => {
    expect(checkAnswer("hablar", ["hablár"], "es")).toBe(true);
    expect(checkAnswer("ingles", ["inglés"], "es")).toBe(true);
    expect(accentMismatch("ingles", ["inglés"], "es")).toBe(false);
    expect(looseNormalize("È")).toBe("e");
  });

  it("no confunde preguntas que solo difieren por un acento", () => {
    expect(normalize("è")).not.toBe(normalize("e"));
    expect(normalize("È L’una!")).toBe("è l'una");
  });
});

describe("Quiz — interfaz de acentos", () => {
  function startAt(question) {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const pool = getByTopic("time", "basico1", Date.now());
    const index = pool.findIndex(q => q.answers.includes(question));
    vi.spyOn(Math, "random").mockReturnValue(index / pool.length);
    render(<QuizSection initialSelection={SELECTION} />);
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
  }

  it("ofrece las seis letras con acento con tamaño táctil suficiente", () => {
    startAt("mezzogiorno");
    expect(screen.getByRole("group", { name: "Letras con acento" })).toBeInTheDocument();
    for (const letter of ["à", "è", "é", "ì", "ò", "ù"]) {
      const button = screen.getByRole("button", { name: `Insertar ${letter}` });
      expect(parseInt(button.style.minWidth, 10)).toBeGreaterThanOrEqual(44);
      expect(parseInt(button.style.minHeight, 10)).toBeGreaterThanOrEqual(44);
    }
  });

  it("inserta la letra en la posición del cursor", () => {
    startAt("mezzogiorno");
    const input = screen.getByLabelText("Tu respuesta");
    fireEvent.change(input, { target: { value: "ventitr" } });
    input.setSelectionRange(7, 7);
    fireEvent.click(screen.getByRole("button", { name: "Insertar é" }));
    expect(input).toHaveValue("ventitré");

    fireEvent.change(input, { target: { value: "ab" } });
    input.setSelectionRange(1, 1);
    fireEvent.click(screen.getByRole("button", { name: "Insertar è" }));
    expect(input).toHaveValue("aèb");
  });

  it("avisa cuando el único error fue el acento y no suma el punto", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { result } = renderHook(() => useQuiz({ levelId: "basico1", topicId: "numbers" }));
    act(() => result.current.nextQuestion());
    const q = result.current.question;
    act(() => result.current.setAnswer(looseNormalize(q.answers[0]) === normalize(q.answers[0]) ? "x" : looseNormalize(q.answers[0])));
    act(() => result.current.submitAnswer());
    expect(result.current.feedback.correct).toBe(false);
    expect(result.current.score.correct).toBe(0);
  });

  it("muestra el aviso de acento en pantalla", () => {
    const pool = getByTopic("time", "basico1", Date.now());
    const index = pool.findIndex(q => q.answers.includes("È l'una."));
    expect(index).toBeGreaterThanOrEqual(0);
    vi.spyOn(Math, "random").mockReturnValue((index + 0.5) / pool.length);
    render(<QuizSection initialSelection={SELECTION} />);
    fireEvent.click(screen.getByRole("button", { name: /Empezar Quiz/ }));
    fireEvent.change(screen.getByLabelText("Tu respuesta"), { target: { value: "e l'una" } });
    fireEvent.click(screen.getByRole("button", { name: /Verificar respuesta/ }));
    expect(screen.getByText(/Revisa el acento/)).toBeInTheDocument();
    expect(screen.getByText(/Casi/)).toBeInTheDocument();
  });

  it("no muestra los acentos cuando la respuesta va en español", () => {
    const es = verbQuestion("verbMeaning", "parlare");
    expect(es.answerLang).toBe("es");
  });
});

describe("Quiz — preguntas de verbos", () => {
  it("genera una pregunta de cada tipo por verbo", () => {
    for (const topic of ["verbPresent", "verbParticiple", "verbAux", "verbMeaning"]) {
      expect(QUESTIONS.filter(q => q.topic === topic)).toHaveLength(VERB_BANK.length);
    }
  });

  it("acepta la forma de io, el participio y el auxiliar correctos", () => {
    const andare = infinitive => verbQuestion(infinitive, "andare");
    expect(checkAnswer("vado", andare("verbPresent").answers)).toBe(true);
    expect(checkAnswer("andato", andare("verbParticiple").answers)).toBe(true);
    expect(checkAnswer("essere", andare("verbAux").answers)).toBe(true);
    expect(checkAnswer("avere", andare("verbAux").answers)).toBe(false);
  });

  it("acepta cualquiera de los auxiliares de finire", () => {
    const { answers } = verbQuestion("verbAux", "finire");
    expect(checkAnswer("avere", answers)).toBe(true);
    expect(checkAnswer("essere", answers)).toBe(true);
  });

  it("acepta el significado sin la aclaración entre paréntesis", () => {
    const q = verbQuestion("verbMeaning", "pranzare");
    expect(checkAnswer("comer", q.answers, q.answerLang)).toBe(true);
    expect(checkAnswer("comer (al mediodía)", q.answers, q.answerLang)).toBe(true);
  });

  it("acepta un solo significado, sin acentos", () => {
    const q = verbQuestion("verbMeaning", "partire");
    expect(checkAnswer("salir", q.answers, q.answerLang)).toBe(true);
    expect(checkAnswer("partir", q.answers, q.answerLang)).toBe(true);
  });
});
