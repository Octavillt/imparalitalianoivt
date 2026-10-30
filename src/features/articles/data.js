// Gli articoli: determinativos e indeterminativos según género, número y
// letra inicial; los casos sin artículo llevan el token Ø con rol zero.
const art = t => ({ t, r: "art" });
const masc = t => ({ t, r: "masc" });
const fem = t => ({ t, r: "fem" });
const zero = () => ({ t: "Ø", r: "zero" });

// Determinativos singulares — cada forma con su condición y sus ejemplos.
export const DEFINITE_SINGULAR = [
  { form: "il", rule: "Masculino singular que empieza con consonante", examples: ["il libro", "il tavolo", "il caffè"] },
  { form: "lo", rule: "Masculino singular ante s + consonante, z, gn, ps, y", examples: ["lo studente", "lo zaino", "lo gnocco", "lo psicologo", "lo yogurt"] },
  { form: "l'", rule: "Cualquier palabra que empieza con vocal (masculino o femenino)", examples: ["l'amico", "l'amica"] },
  { form: "la", rule: "Femenino singular que empieza con consonante", examples: ["la casa", "la pizza", "la scuola"] },
];

// Determinativos plurales — de qué singular sale cada uno.
export const DEFINITE_PLURAL = [
  { form: "i", rule: "Plural de il", examples: ["i libri", "i tavoli"] },
  { form: "gli", rule: "Plural de lo y de l' masculino", examples: ["gli studenti", "gli zaini", "gli amici"] },
  { form: "le", rule: "Plural de la y de l' femenino", examples: ["le case", "le amiche"] },
];

// Indeterminativos — equivalen a un / una. Los plurales (dei, degli, delle)
// se ven hasta Básico IV: aquí solo se mencionan.
export const INDEFINITE = [
  { form: "un", rule: "Masculino; también ante vocal, pero sin apóstrofo", examples: ["un libro", "un amico"] },
  { form: "uno", rule: "Masculino ante s + consonante, z, gn, ps, y", examples: ["uno studente", "uno zaino", "uno gnocco", "uno psicologo", "uno yogurt"] },
  { form: "una", rule: "Femenino que empieza con consonante", examples: ["una casa", "una pizza"] },
  { form: "un'", rule: "Femenino ante vocal", examples: ["un'amica", "un'ora"] },
];

// Usos donde el italiano sí pone artículo, igual que el español.
export const WITH_ARTICLE = [
  { icon: "☕", use: "Cosas concretas de las que hablas", ex: "Il caffè è buono.", esp: "El café está bueno." },
  { icon: "🗣️", use: "Idiomas que estudias", ex: "Studio l'italiano.", esp: "Estudio italiano." },
  { icon: "🍕", use: "Gustos", ex: "Amo la pizza.", esp: "Amo la pizza." },
  { icon: "🗺️", use: "Países", ex: "L'Italia è bella.", esp: "Italia es bonita." },
  { icon: "🕒", use: "La hora", ex: "Sono le tre.", esp: "Son las tres." },
];

// Casos sin artículo: el Ø indica que no se escribe nada.
export const ZERO_USES = [
  { icon: "🙋", title: "Nombres de persona", why: "Un nombre propio ya identifica a alguien por sí solo.", examples: ["Leslie è qui.", "Octavio è di Roma."] },
  { icon: "📍", title: "Ciudades", why: "Las ciudades van sin artículo, igual que en español.", examples: ["Roma è bella.", "Firenze è piccola."] },
  { icon: "🧑‍🏫", title: "Profesión con essere", why: "Con essere, la profesión va sin artículo.", examples: ["Sono insegnante.", "Octavio è studente."] },
];

// Las tres preguntas que resuelven cualquier artículo.
export const DECISION_STEPS = [
  { n: "1️⃣", q: "¿Masculino o femenino?", a: "il y lo son masculinos; la es femenina. Si empieza con vocal, l' vale para los dos: l'amico, l'amica." },
  { n: "2️⃣", q: "¿Singular o plural?", a: "Singular: il, lo, l', la. Plural: i (de il), gli (de lo y de l' masculino), le (de la y de l' femenino)." },
  { n: "3️⃣", q: "¿Cómo empieza la palabra?", a: "Vocal: l'amico y l'amica. En indeterminativo, un amico (sin apóstrofo) y un'amica (con apóstrofo). s + consonante, z, gn, ps o y: lo y uno. Otra consonante: il y un si es masculino; la y una si es femenino." },
];

// Ejercicio resuelto — oraciones con el artículo destacado.
export const ARTICLE_EXERCISE = [
  { pts: [art("Il"), " ", masc("caffè"), " è buono."], esp: "El café está bueno." },
  { pts: [art("Lo"), " ", masc("studente"), " è di Milano."], esp: "El estudiante es de Milán." },
  { pts: [art("Lo"), " ", masc("zaino"), " è sul tavolo."], esp: "La mochila está sobre la mesa." },
  { pts: [art("Lo"), " ", masc("gnocco"), " è buono."], esp: "El ñoqui está bueno." },
  { pts: [art("L'"), masc("amico"), " di Octavio è qui."], esp: "El amigo de Octavio está aquí." },
  { pts: [art("L'"), fem("amica"), " di Leslie è italiana."], esp: "La amiga de Leslie es italiana." },
  { pts: [art("La"), " ", fem("casa"), " è grande."], esp: "La casa es grande." },
  { pts: [art("I"), " ", masc("libri"), " sono nuovi."], esp: "Los libros son nuevos." },
  { pts: [art("Gli"), " ", masc("studenti"), " sono stanchi."], esp: "Los estudiantes están cansados." },
  { pts: [art("Gli"), " ", masc("amici"), " di Argelia sono qui."], esp: "Los amigos de Argelia están aquí." },
  { pts: [art("Le"), " ", fem("case"), " sono belle."], esp: "Las casas son bonitas." },
  { pts: [art("Le"), " ", fem("amiche"), " di Leslie sono qui."], esp: "Las amigas de Leslie están aquí." },
  { pts: [art("Un"), " ", masc("amico"), " di Argelia è qui."], esp: "Un amigo de Argelia está aquí." },
  { pts: [art("Uno"), " ", masc("studente"), " è di Napoli."], esp: "Un estudiante es de Nápoles." },
  { pts: [art("Una"), " ", fem("casa"), " è grande."], esp: "Una casa es grande." },
  { pts: [art("Un'"), fem("amica"), " di Leslie è qui."], esp: "Una amiga de Leslie está aquí." },
  { pts: [zero(), " Leslie è qui."], esp: "Leslie está aquí. (sin artículo)" },
  { pts: [zero(), " ", fem("Roma"), " è bella."], esp: "Roma es bonita. (sin artículo)" },
  { pts: [zero(), " Sono insegnante."], esp: "Soy maestro. (sin artículo)" },
];

export const PRACTICE = [
  { question: "Completa: ___ libro è sul tavolo.", answers: ["il"], hint: "Masculino singular que empieza con consonante", explanation: "Il libro: il acompaña a los masculinos singulares que empiezan con consonante." },
  { question: "Completa: ___ studente è di Milano.", answers: ["lo"], hint: "Empieza con s + consonante", explanation: "Lo studente: ante s + consonante va lo (y uno)." },
  { question: "Elige el artículo determinativo: (l' / la) amica di Leslie.", answers: ["l'"], hint: "Empieza con vocal", explanation: "L'amica di Leslie: ante vocal el determinativo es l', en masculino y en femenino." },
  { question: "Elige la forma correcta: (il / lo) zaino.", answers: ["lo"], hint: "Fíjate en la primera letra", explanation: "Lo zaino: las palabras que empiezan con z llevan lo (y uno)." },
  { question: "Completa: ___ case sono grandi.", answers: ["le"], hint: "Plural de la", explanation: "Le case: el plural de la es le." },
  { question: "Completa: ___ amici sono qui.", answers: ["gli"], hint: "Plural de l'", explanation: "Gli amici: lo y l' masculino forman gli en plural." },
  { question: "Traduce al italiano: Una amiga.", answers: ["Un'amica", "Un'amica."], hint: "Femenino ante vocal", explanation: "Una amiga = un'amica: el femenino ante vocal usa un'." },
  { question: "Traduce al italiano: Un amigo.", answers: ["Un amico", "Un amico."], hint: "Masculino ante vocal: sin apóstrofo", explanation: "Un amigo = un amico: el masculino ante vocal se queda en un, sin apóstrofo." },
  { question: "Elige la forma correcta: (uno / un) studente.", answers: ["uno"], hint: "Empieza con s + consonante", explanation: "Uno studente: ante s + consonante va uno." },
  { question: "Elige la forma correcta: (il / lo) yogurt.", answers: ["lo"], hint: "La y se agrupa con z, gn, ps y s + consonante", explanation: "Lo yogurt: la y lleva lo en determinativo y uno en indeterminativo." },
  { question: "Elige la forma correcta: (un / uno) gnocco.", answers: ["uno"], hint: "Empieza con gn", explanation: "Uno gnocco: gn se trata como s + consonante, z, ps y y. Lleva uno." },
  { question: "Completa: Studio ___ italiano.", answers: ["l'"], hint: "Los idiomas llevan artículo", explanation: "Studio l'italiano: los idiomas llevan artículo determinativo." },
  { question: "Traduce al italiano: Roma es bonita.", answers: ["Roma è bella", "Roma è bella."], hint: "Las ciudades van sin artículo", explanation: "Roma è bella: las ciudades no llevan artículo." },
  { question: "Escribe Ø o 0 si no lleva artículo: ___ Leslie è qui.", answers: ["Ø", "0"], hint: "Nombre de persona", explanation: "Leslie è qui: los nombres de persona van sin artículo (Ø)." },
  { question: "Escribe Ø o 0 si no lleva artículo: Sono ___ insegnante.", answers: ["Ø", "0"], hint: "La profesión con essere", explanation: "Sono insegnante: con essere la profesión va sin artículo (Ø)." },
  { question: "Completa (3:00): Sono le ___.", answers: ["tre"], hint: "El número tres", explanation: "Sono le tre: a partir de las dos, la hora usa sono le y el número. La una es è l'una." },
  { question: "Traduce al italiano: El café está bueno.", answers: ["Il caffè è buono", "Il caffè è buono."], hint: "Como en español, lleva artículo", explanation: "El café está bueno = Il caffè è buono." },
];
