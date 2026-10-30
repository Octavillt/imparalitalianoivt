// El orden define la ruta sugerida dentro de cada módulo. Los ids conservan
// su módulo original y se comparten con navegación, búsqueda, enlaces y Quiz.
// El campo `italiano` muestra el nombre del tema tal como se aprende.
export const TOPICS = [
  { id: "numbers", label: "🔢 Números y alfabeto", italiano: "Numeri e alfabeto", color: "#DB2777", stage: "Primeras bases" },
  { id: "time", label: "🕐 La hora", italiano: "Che ora è?", color: "#0284C7", stage: "Ubicarte en el tiempo" },
];

// Los módulos de las siguientes etapas aún no tienen temas: se desbloquean
// al llegar su contenido.
export const TOPICS_BASICO2 = [];
export const TOPICS_BASICO3 = [];
export const TOPICS_BASICO4 = [];
export const TOPICS_BASICO5 = [];

// Módulo de consulta (no de estudio): reúne todos los verbos de la plataforma.
export const TOPICS_VERBOS = [
  { id: "verbFinder", label: "📒 Verbos a la mano", italiano: "Verbi a portata di mano", color: "#8B5CF6", stage: "Consulta rápida" },
];

// Secciones con las que el Quiz practica ese módulo. No son lecciones: no
// entran al buscador ni a la barra de temas.
export const QUIZ_TOPICS_VERBOS = [
  { id: "verbPresent", label: "🙋 Presente (io)", italiano: "Presente", color: "#8B5CF6", lesson: "verbFinder" },
  { id: "verbParticiple", label: "3️⃣ Participio passato", italiano: "Participio passato", color: "#8B5CF6", lesson: "verbFinder" },
  { id: "verbAux", label: "🧩 Auxiliar", italiano: "Ausiliare", color: "#8B5CF6", lesson: "verbFinder" },
  { id: "verbMeaning", label: "💬 Significado", italiano: "Significato", color: "#8B5CF6", lesson: "verbFinder" },
];

export const TOPICS_QUIZ = [
  { id: "quiz", label: "🎯 Práctica general", italiano: "Quiz", color: "#EAB308" },
];

export const TOPIC_BY_ID = Object.fromEntries(
  [...TOPICS, ...TOPICS_BASICO2, ...TOPICS_BASICO3, ...TOPICS_BASICO4, ...TOPICS_BASICO5, ...TOPICS_VERBOS, ...QUIZ_TOPICS_VERBOS, ...TOPICS_QUIZ].map(topic => [topic.id, topic]),
);
