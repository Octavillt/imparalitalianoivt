import { TOPICS, TOPICS_BASICO2, TOPICS_BASICO3, TOPICS_BASICO4, TOPICS_BASICO5, TOPICS_VERBOS, QUIZ_TOPICS_VERBOS, TOPICS_QUIZ } from "./topics";

// Cuando exista contenido de un nuevo nivel: crear su lista de topics,
// asignarla aquí y marcar available: true. Un nivel disponible sin topics
// muestra la pantalla de "en construcción".
export const LEVELS = [
  {
    id: "basico1", label: "Básico I", available: true, topics: TOPICS,
    purpose: "Presentarte y describir tu entorno",
    description: "Empieza con letras, números, essere y avere. Después nombra personas y objetos con su género, ubícalos y describe lo que ocurre ahora. Cierra con una conversación breve que reúna lo aprendido.",
    bridge: "Estas bases te preparan para describir con más detalle y hablar de hábitos en Básico II.",
    outcome: "Puedes saludar, presentarte y despedirte, identificar objetos, decir la hora y describir una acción en curso.",
  },
  {
    id: "basico2", label: "Básico II", available: true, topics: TOPICS_BASICO2,
    purpose: "Describir, preguntar y hablar de hábitos",
    description: "Retoma essere, el género y el presente progresivo de Básico I. Añade artículos, adjetivos y posesivos; después construye preguntas y conjuga el presente.",
    bridge: "En Básico III combinarás estas estructuras para hablar de rutinas, horarios y lugares.",
    outcome: "Puedes describir personas, expresar pertenencia y afirmar, negar y preguntar sobre hábitos.",
  },
  {
    id: "basico3", label: "Básico III", available: true, topics: TOPICS_BASICO3,
    purpose: "Conectar rutinas, tiempo y lugares",
    description: "Amplía el presente de Básico II con verbos reflexivos y frecuencia. Conecta horas, fechas y preposiciones para orientarte en la ciudad.",
    bridge: "En Básico IV aplicarás las descripciones, los posesivos y el imperativo al vocabulario del cuerpo.",
    outcome: "Puedes contar tu rutina, explicar cuándo y con qué frecuencia haces algo, y pedir o dar indicaciones.",
  },
  {
    id: "basico4", label: "Básico IV", available: true, topics: TOPICS_BASICO4,
    purpose: "Describir el cuerpo, expresar habilidades y hablar de cantidades",
    description: "Aplica plurales, adjetivos, posesivos e imperativo a las partes del cuerpo. Después distingue potere, sapere y riuscire, usa el partitivo y aprende los grupos de alimentos. Combina el ejercicio físico con adverbios de modo para dar instrucciones.",
    bridge: "En Básico V usarás el passato prossimo y el imperfetto para contar lo que pasó, y el futuro para hablar de tus planes.",
    outcome: "Puedes nombrar partes del cuerpo, dar instrucciones, expresar habilidades, preguntar por cantidades, describir alimentos y explicar cómo se realiza una acción.",
  },
  {
    id: "basico5", label: "Básico V", available: true, topics: TOPICS_BASICO5,
    purpose: "Contar experiencias pasadas y hacer planes",
    description: "Retoma los verbos irregulares de Básico II para contar lo que pasó con el passato prossimo y el imperfetto. Usa el futuro semplice para tus planes, practica colocaciones con fare, prendere, dare y avere, habla de dinero y carrera, y cierra comparando personas, animales y cosas.",
    bridge: "Al terminar, practica Básico V o combina los cinco módulos en el Quiz.",
    outcome: "Puedes contar lo que hiciste, describir cómo eran las cosas, hablar de tus planes, usar colocaciones frecuentes, hablar de dinero y trabajo y comparar personas, animales o cosas.",
  },
  // Nivel de referencia: herramienta de consulta, no una lección que se cursa.
  // quizTopics: secciones con que el Quiz practica este módulo de consulta.
  {
    id: "verbos", label: "📒 Verbos", available: true, topics: TOPICS_VERBOS, quizTopics: QUIZ_TOPICS_VERBOS, reference: true,
    purpose: "Consulta rápida de verbos: formas, significado y auxiliar",
  },
  { id: "quiz", label: "🎯 Quiz", available: true, topics: TOPICS_QUIZ },
];
