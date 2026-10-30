// Parole interrogative: van antes del verbo. Los tokens llevan { t, r }.
const wh = t => ({ t, r: "wh" });
const es = t => ({ t, r: "essere" });
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });

// Palabra, traducción, uso y ejemplo. El enlace, si hace falta, va en la sección.
export const WH_WORDS = [
  { word: "Chi", es: "¿Quién?", use: "Personas", example: "Chi è quella ragazza?", esp: "¿Quién es esa chica?" },
  { word: "Che cosa", es: "¿Qué?", use: "Cosas y acciones. También se usa che o cosa.", example: "Che cosa fai?", esp: "¿Qué haces?" },
  { word: "Dove", es: "¿Dónde?", use: "Lugar", example: "Dov'è Leslie?", esp: "¿Dónde está Leslie?" },
  { word: "Quando", es: "¿Cuándo?", use: "Momento", example: "Quando parti?", esp: "¿Cuándo sales?" },
  { word: "Come", es: "¿Cómo?", use: "Modo o descripción", example: "Come si chiama la tua amica?", esp: "¿Cómo se llama tu amiga?" },
  { word: "Perché", es: "¿Por qué?", use: "La causa. También introduce la respuesta. Lleva acento agudo.", example: "Perché sei qui?", esp: "¿Por qué estás aquí?" },
  { word: "Quanto", es: "¿Cuánto?", use: "Cantidad. Con sustantivo concuerda: quanta, quanti, quante.", example: "Quanto costa?", esp: "¿Cuánto cuesta?" },
  { word: "Quale", es: "¿Cuál?", use: "Elección. En plural: quali. No cambia por género.", example: "Quale pizza?", esp: "¿Cuál pizza?" },
  { word: "Di chi", es: "¿De quién?", use: "De quién es algo", example: "Di chi è questo libro?", esp: "¿De quién es este libro?" },
  { word: "Di dove", es: "¿De dónde?", use: "Origen", example: "Di dov'è Octavio?", esp: "¿De dónde es Octavio?" },
  { word: "A che ora", es: "¿A qué hora?", use: "La hora de un hecho", example: "A che ora parti?", esp: "¿A qué hora sales?" },
];

// Orden: palabra + verbo + sujeto. Ante è, dove, come y cosa pueden elidirse.
export const ORDER_EXAMPLES = [
  { pts: [wh("Dov'"), es("è"), " ", su("Leslie"), "?"], esp: "¿Dónde está Leslie?" },
  { pts: [wh("Di dov'"), es("è"), " ", su("Octavio"), "?"], esp: "¿De dónde es Octavio?" },
  { pts: [wh("Chi"), " ", es("è"), " ", su("quella ragazza"), "?"], esp: "¿Quién es esa chica?" },
  { pts: [wh("Come"), " ", vb("si chiama"), " ", su("la tua amica"), "?"], esp: "¿Cómo se llama tu amiga?" },
];

// Apóstrofo solo en estas tres. Qual è se escribe separado.
export const APOSTROPHE = [
  { written: "Dov'è", sum: "dove + è", esp: "dónde está" },
  { written: "Com'è", sum: "come + è", esp: "cómo es" },
  { written: "Cos'è", sum: "cosa + è", esp: "qué es" },
  { written: "Qual è", sum: "qual, sin apóstrofo", esp: "cuál es" },
];

export const CAUSA = [
  { pts: [wh("Perché"), " ", es("sei"), " qui?"], esp: "¿Por qué estás aquí?" },
  { pts: [wh("Perché"), " ", vb("studio"), " italiano."], esp: "Porque estudio italiano." },
];

// Quanto concuerda si hay sustantivo. Quale solo cambia en número.
export const QUANTO_FORMS = [
  { form: "Quanto", use: "Sin sustantivo, o masculino singular", example: "Quanto costa?", esp: "¿Cuánto cuesta?" },
  { form: "Quanta", use: "Femenino singular", example: "Quanta pasta?", esp: "¿Cuánta pasta?" },
  { form: "Quanti", use: "Masculino plural", example: "Quanti anni hai?", esp: "¿Cuántos años tienes?" },
  { form: "Quante", use: "Femenino plural", example: "Quante sorelle hai?", esp: "¿Cuántas hermanas tienes?" },
];

export const QUALE_FORMS = [
  { form: "Quale libro", use: "Singular masculino", esp: "¿Cuál libro?" },
  { form: "Quali libri", use: "Plural masculino", esp: "¿Cuáles libros?" },
  { form: "Quale pizza", use: "Singular femenino", esp: "¿Cuál pizza?" },
  { form: "Quali pizze", use: "Plural femenino", esp: "¿Cuáles pizzas?" },
];

// Una respuesta breve por cada palabra.
export const WH_QA = [
  { label: "¿Quién?", q: [wh("Chi"), " ", es("è"), " ", su("quella ragazza"), "?"], a: "È Leslie.", esp: "¿Quién es esa chica? — Es Leslie." },
  { label: "¿Qué?", q: [wh("Che cosa"), " ", vb("fai"), "?"], a: "Studio italiano.", esp: "¿Qué haces? — Estudio italiano." },
  { label: "¿Qué es?", q: [wh("Cos'"), es("è"), "?"], a: "È un gelato.", esp: "¿Qué es? — Es un helado." },
  { label: "¿Dónde?", q: [wh("Dov'"), es("è"), " ", su("Leslie"), "?"], a: "È a Roma.", esp: "¿Dónde está Leslie? — Está en Roma." },
  { label: "¿Cuándo?", q: [wh("Quando"), " ", vb("parti"), "?"], a: "Parto domani.", esp: "¿Cuándo sales? — Salgo mañana." },
  { label: "¿Cómo?", q: [wh("Come"), " ", vb("si chiama"), " ", su("la tua amica"), "?"], a: "Si chiama Argelia.", esp: "¿Cómo se llama tu amiga? — Se llama Argelia." },
  { label: "¿Por qué?", q: [wh("Perché"), " ", es("sei"), " qui?"], a: "Perché studio italiano.", esp: "¿Por qué estás aquí? — Porque estudio italiano." },
  { label: "¿Cuánto?", q: [wh("Quanto"), " ", vb("costa"), " il gelato?"], a: "Costa tre euro.", esp: "¿Cuánto cuesta el helado? — Cuesta tres euros." },
  { label: "¿Cuál?", q: [wh("Quale"), " pizza ", vb("prendi"), "?"], a: "La margherita.", esp: "¿Cuál pizza pides? — La margarita." },
  { label: "¿De quién?", q: [wh("Di chi"), " ", es("è"), " ", su("questo libro"), "?"], a: "È di Octavio.", esp: "¿De quién es este libro? — Es de Octavio." },
  { label: "¿De dónde?", q: [wh("Di dov'"), es("è"), " ", su("Octavio"), "?"], a: "È di Puebla.", esp: "¿De dónde es Octavio? — Es de Puebla." },
  { label: "¿A qué hora?", q: [wh("A che ora"), " ", vb("parti"), "?"], a: "Alle nove.", esp: "¿A qué hora sales? — A las nueve." },
];

export const PRACTICE = [
  { question: "Escribe la palabra italiana para «quién».", answers: ["chi"], hint: "Pregunta por una persona.", explanation: "Chi pregunta por una persona: Chi è quella ragazza?" },
  { question: "Escribe la palabra italiana para «dónde».", answers: ["dove"], hint: "Pregunta por un lugar.", explanation: "Dove pregunta por un lugar. Ante è suele elidirse: dov'è; también puede escribirse dove è." },
  { question: "Escribe la palabra italiana para «cuándo».", answers: ["quando"], hint: "Pregunta por el momento.", explanation: "Quando pregunta por el momento: Quando parti?" },
  { question: "Escribe la palabra italiana para «cómo».", answers: ["come"], hint: "Pregunta por el modo o la descripción.", explanation: "Come pregunta por el modo: Come si chiama la tua amica? Ante è suele elidirse: com'è; también puede escribirse come è." },
  { question: "Escribe la palabra italiana para «por qué».", answers: ["perché"], hint: "Lleva acento agudo en la última vocal.", explanation: "Perché pregunta la causa y también introduce la respuesta: Perché studio italiano." },
  { question: "Escribe dove unido a è.", answers: ["Dov'è"], hint: "Se pierde la e de dove.", explanation: "Dov'è = dove + è. El apóstrofo marca la vocal que se pierde." },
  { question: "Escribe come unido a è.", answers: ["Com'è"], hint: "Se pierde la e de come.", explanation: "Com'è = come + è." },
  { question: "Escribe cosa unido a è.", answers: ["Cos'è"], hint: "Se pierde la a de cosa.", explanation: "Cos'è = cosa + è. Che cos'è funciona igual: che cosa pierde la a de cosa." },
  { question: "Elige la forma correcta: (Qual è / Quali è) la tua pizza?", answers: ["Qual è"], hint: "Pizza es singular y, ante è, qual va separado.", explanation: "Qual è la tua pizza? Ante è se escribe Qual è, separado y sin apóstrofo. Quali es el plural." },
  { question: "Elige la forma correcta: (Quanta / Quanto) pasta mangi?", answers: ["Quanta"], hint: "Pasta es femenino singular.", explanation: "Quanta pasta: si hay sustantivo, quanto concuerda. Pasta es femenino singular." },
  { question: "Elige la forma correcta: (Quanti / Quante) anni hai?", answers: ["Quanti"], hint: "Anni es masculino plural.", explanation: "Quanti anni hai? Anni es masculino plural." },
  { question: "Elige la forma correcta: (Quante / Quanta) sorelle hai?", answers: ["Quante"], hint: "Sorelle es femenino plural.", explanation: "Quante sorelle hai? Sorelle es femenino plural." },
  { question: "Elige la forma correcta: (Quali / Quale) libri leggi?", answers: ["Quali"], hint: "Libri es plural.", explanation: "Quali libri: quale concuerda en número. Con plural va quali." },
  { question: "Elige la forma correcta: (Quale / Quali) pizza prendi?", answers: ["Quale"], hint: "Pizza es singular.", explanation: "Quale pizza: en singular, masculino o femenino, va quale." },
  { question: "Escribe, con apóstrofo, la pregunta: ¿De dónde es Octavio?", answers: ["Di dov'è Octavio?"], hint: "El origen usa di dove, y dove se une a è.", explanation: "Di dov'è Octavio? Di dove pregunta el origen." },
  { question: "Escribe la palabra que falta: Perché sei qui? — ___ studio italiano.", answers: ["Perché"], hint: "La misma palabra sirve para responder la causa.", explanation: "Perché sei qui? — Perché studio italiano. Perché pregunta y también responde." },
  { question: "Escribe en italiano «a qué hora».", answers: ["a che ora"], hint: "Junta a, che y ora.", explanation: "A che ora pregunta la hora de un hecho: A che ora parti?" },
  { question: "Escribe en italiano «de quién».", answers: ["di chi"], hint: "Junta di y chi.", explanation: "Di chi pregunta de quién es algo: Di chi è questo libro?" },
  { question: "Escribe una respuesta breve: Dov'è Leslie? (está en Roma).", answers: ["È a Roma", "Leslie è a Roma"], hint: "Roma es una ciudad: lleva a, sin artículo.", explanation: "Dov'è Leslie? — È a Roma. La ciudad lleva a: a Roma." },
  { question: "Escribe «a las nueve» en italiano.", answers: ["Alle nove"], hint: "La hora en plural ya trae artículo: a + le = alle.", explanation: "A las nueve = alle nove. Alle es a + le." },
];
