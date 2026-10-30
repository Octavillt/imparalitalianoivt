// Questo y quello: los demostrativos por distancia. Quello copia las formas
// del artículo cuando va delante de un sustantivo.
const es = t => ({ t, r: "essere" });
const dm = t => ({ t, r: "demo" });
const wh = t => ({ t, r: "wh" });
const art = t => ({ t, r: "art" });

export const QUESTO_FORMS = [
  { form: "questo", ex: "questo libro", esp: "este libro (masc. sing.)" },
  { form: "questa", ex: "questa casa", esp: "esta casa (fem. sing.)" },
  { form: "questi", ex: "questi libri", esp: "estos libros (masc. pl.)" },
  { form: "queste", ex: "queste case", esp: "estas casas (fem. pl.)" },
];

// Ante sustantivo, quello cambia como el artículo: quel- para consonante,
// quell'- para vocal, quello-/-a para s+consonante…
export const QUELLO_TABLE = [
  { form: "quel", ex: "quel libro", esp: "ese / aquel libro" },
  { form: "quello", ex: "quello studente", esp: "ese / aquel estudiante" },
  { form: "quell'", ex: "quell'amico", esp: "ese / aquel amigo" },
  { form: "quell'", ex: "quell'amica", esp: "esa / aquella amiga" },
  { form: "quella", ex: "quella casa", esp: "esa / aquella casa" },
  { form: "quei", ex: "quei libri", esp: "esos / aquellos libros" },
  { form: "quegli", ex: "quegli studenti", esp: "esos / aquellos estudiantes" },
  { form: "quelle", ex: "quelle case", esp: "esas / aquellas casas" },
];

// Solo, sin sustantivo: siempre quello / quella / quelli / quelle.
export const QUELLO_ALONE = [
  { form: "quello", esp: "ése / aquél" },
  { form: "quella", esp: "ésa / aquélla" },
  { form: "quelli", esp: "ésos / aquéllos" },
  { form: "quelle", esp: "ésas / aquéllas" },
];

export const DEMO_AFF = [
  { pts: [dm("Questo"), " ", es("è"), " ", art("un"), " libro."], esp: "Éste es un libro." },
  { pts: [dm("Questa"), " ", es("è"), " ", art("una"), " casa."], esp: "Ésta es una casa." },
  { pts: [dm("Questi"), " ", es("sono"), " i miei amici."], esp: "Éstos son mis amigos." },
  { pts: [dm("Queste"), " ", es("sono"), " le mie chiavi."], esp: "Éstas son mis llaves." },
  { pts: [dm("Quello"), " ", es("è"), " mio."], esp: "Ése es mío." },
];

export const DEMO_QA = [
  { q: [wh("Che cos'è"), " ", dm("questo"), "?"], a: "È un libro.", esp: "¿Qué es esto? — Es un libro." },
  { q: [wh("Chi"), " ", es("è"), " ", dm("quella"), " ragazza?"], a: "È Argelia.", esp: "¿Quién es esa chica? — Es Argelia." },
];

export const PLACE_WORDS = [
  { word: "qui / qua", esp: "aquí", near: true },
  { word: "lì / là", esp: "allí", near: false },
];

export const PRACTICE = [
  { question: "Elige la forma correcta: (questo / questa) casa.", answers: ["questa"], hint: "Casa es femenino", explanation: "questa casa: casa es femenino (la casa)." },
  { question: "Elige la forma correcta: (questo / questi) libri.", answers: ["questi"], hint: "Plural masculino", explanation: "questi libri: plural masculino." },
  { question: "Completa con la forma corta: ___ anno significa «este año».", answers: ["quest'"], hint: "Quito cae ante vocal", explanation: "quest'anno: questo se recorta a quest' ante vocal." },
  { question: "Elige la forma correcta: (quel / quello) libro.", answers: ["quel"], hint: "Como el artículo", explanation: "quel libro: ante consonante, quello se recorta a quel (como il → quel)." },
  { question: "Elige la forma correcta: (quello / quell') studente.", answers: ["quello"], hint: "s + consonante", explanation: "quello studente: ante s + consonante va quello completo (como lo studente)." },
  { question: "Elige la forma correcta: (quei / quegli) studenti.", answers: ["quegli"], hint: "Plural de lo", explanation: "quegli studenti: el plural de lo studente es gli studenti, así que quello pasa a quegli." },
  { question: "Traduce al italiano: Éstos son mis amigos.", answers: ["Questi sono i miei amici", "Questi sono i miei amici."], hint: "Questi + sono", explanation: "Éstos son mis amigos = Questi sono i miei amici." },
  { question: "Traduce al italiano: Ése es mío.", answers: ["Quello è mio", "Quello è mio."], hint: "Sin sustantivo", explanation: "Ése es mío = Quello è mio: solo, sin sustantivo, si dice quello." },
  { question: "Traduce al italiano: ¿Qué es esto?", answers: ["Che cos'è questo?", "Che cosa è questo?"], hint: "Che cos'è…", explanation: "¿Qué es esto? = Che cos'è questo?" },
  { question: "Escribe una palabra italiana que signifique «aquí».", answers: ["qui", "qua"], answerLang: "es", hint: "Hay dos sinónimos", explanation: "aquí = qui o qua." },
  { question: "Escribe una palabra italiana que signifique «allí».", answers: ["lì"], answerLang: "es", hint: "Tres letras, acento grave", explanation: "allí = lì (también là). Se acepta lì para no confundir con el artículo la." },
  { question: "Elige la forma correcta: (un / una) casa.", answers: ["una"], hint: "Casa es femenino", explanation: "una casa: femenino singular." },
  { question: "Elige la forma correcta: (un / un') amica.", answers: ["un'"], hint: "Empieza con vocal", explanation: "un'amica: ante vocal femenina, un pasa a un'." },
  { question: "Traduce al italiano: Este es un libro.", answers: ["Questo è un libro", "Questo è un libro."], hint: "Questo è…", explanation: "Este es un libro = Questo è un libro." },
];
