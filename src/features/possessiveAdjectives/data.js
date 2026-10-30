// I possessivi: tabla completa (seis personas × cuatro formas), la
// concordancia con lo poseído y la forma sin sustantivo.
const es = t => ({ t, r: "essere" });
const poss = t => ({ t, r: "poss" });
const art = t => ({ t, r: "art" });
const masc = t => ({ t, r: "masc" });
const fem = t => ({ t, r: "fem" });
const dm = t => ({ t, r: "demo" });
const wh = t => ({ t, r: "wh" });

// [persona, español, color de acento, cuatro formas]
export const POSSESSIVE_TABLE = [
  { subj: "io", esp: "mi / mis", color: "#f87171", forms: ["il mio", "la mia", "i miei", "le mie"] },
  { subj: "tu", esp: "tu / tus", color: "#fbbf24", forms: ["il tuo", "la tua", "i tuoi", "le tue"] },
  { subj: "lui / lei", esp: "su / sus (de él, de ella, de usted)", color: "#60a5fa", forms: ["il suo", "la sua", "i suoi", "le sue"] },
  { subj: "noi", esp: "nuestro / nuestra", color: "#34d399", forms: ["il nostro", "la nostra", "i nostri", "le nostre"] },
  { subj: "voi", esp: "su / sus (de ustedes)", color: "#c084fc", forms: ["il vostro", "la vostra", "i vostri", "le vostre"] },
  { subj: "loro", esp: "su / sus (de ellos, de ellas)", color: "#f472b6", forms: ["il loro", "la loro", "i loro", "le loro"] },
];

// La concordancia es con lo que se posee, no con quien posee.
export const AGREEMENT_EXAMPLES = [
  { pts: [art("La"), " ", poss("sua"), " ", fem("casa"), "."], note: "la casa di Octavio", esp: "la casa de Octavio = su casa" },
  { pts: [art("Il"), " ", poss("suo"), " ", masc("libro"), "."], note: "il libro di Leslie", esp: "el libro de Leslie = su libro" },
  { pts: [art("I"), " ", poss("suoi"), " ", masc("genitori"), "."], note: "i genitori di Leslie", esp: "los padres de Leslie = sus padres" },
];

// Ejemplos de posesivo con sustantivo.
export const EXAMPLE_SENTENCES = [
  { pts: [art("Il"), " ", poss("mio"), " ", masc("libro"), " è qui."], esp: "Mi libro está aquí." },
  { pts: [art("La"), " ", poss("tua"), " ", fem("casa"), " è grande."], esp: "Tu casa es grande." },
  { pts: [art("I"), " ", poss("suoi"), " ", masc("genitori"), " sono di Roma."], esp: "Sus padres son de Roma." },
  { pts: [art("Le"), " ", poss("nostre"), " ", fem("amiche"), " sono qui."], esp: "Nuestras amigas están aquí." },
  { pts: [art("La"), " ", poss("vostra"), " ", fem("insegnante"), " è di Firenze."], esp: "Su maestra (de ustedes) es de Florencia." },
  { pts: [art("Il"), " ", poss("loro"), " ", masc("maestro"), " è Octavio."], esp: "Su maestro (de ellos) es Octavio." },
];

// La misma forma sirve sola, sin sustantivo después.
export const ALONE_EXAMPLES = [
  { pts: [dm("Questo"), " ", masc("libro"), " ", es("è"), " ", poss("mio"), "."], esp: "Este libro es mío." },
  { q: [wh("Di chi"), " è?"], a: "È mio.", esp: "¿De quién es? — Es mío." },
  { q: [wh("Di chi"), " è questa borsa?"], a: "È mia.", esp: "¿De quién es esta bolsa? — Es mía." },
  { pts: [art("Il"), " ", poss("mio"), " è qui."], esp: "El mío está aquí." },
];

export const PRACTICE = [
  { question: "Completa: ___ mio libro è qui.", answers: ["il"], hint: "Con un objeto, el posesivo lleva artículo", explanation: "Il mio libro è qui: «mi libro» se dice il mio libro. El familiar en singular es el caso aparte." },
  { question: "Elige la forma correcta: (il mio / la mia) casa.", answers: ["la mia"], hint: "Concuerda con casa", explanation: "La mia casa: el posesivo concuerda con lo que se posee (casa es femenino)." },
  { question: "Completa: le ___ sorelle. (yo)", answers: ["mie"], hint: "Femenino plural de mio", explanation: "Le mie sorelle: el femenino plural de mio es mie." },
  { question: "Elige la forma correcta: (i miei / le mie) genitori.", answers: ["i miei"], hint: "Genitori es masculino plural", explanation: "I miei genitori: genitori es masculino plural, así que i miei." },
  { question: "Traduce al italiano: mi libro.", answers: ["il mio libro"], hint: "Con un objeto lleva artículo", explanation: "Mi libro = il mio libro. Con un objeto, el posesivo lleva artículo." },
  { question: "Traduce al italiano: su casa (de Octavio).", answers: ["la sua casa", "la sua casa."], hint: "Concuerda con la casa, no con Octavio", explanation: "Su casa (de Octavio) = la sua casa: la forma concuerda con lo que se posee (casa), no con quien posee." },
  { question: "Traduce al italiano: su libro (de Leslie).", answers: ["il suo libro", "il suo libro."], hint: "Concuerda con el libro", explanation: "Su libro (de Leslie) = il suo libro: libro es masculino, así que il suo aunque Leslie sea mujer." },
  { question: "Completa: la ___ casa (de ellos).", answers: ["loro"], hint: "Loro no cambia de forma", explanation: "La loro casa: loro se queda igual en masculino y femenino, singular y plural." },
  { question: "Elige la forma correcta: (mio / il mio) padre.", answers: ["mio"], hint: "Familiar en singular", explanation: "Mio padre: con un familiar en singular el posesivo va sin artículo (regla vista en La familia)." },
  { question: "Completa: Questo libro è ___. (yo)", answers: ["mio", "il mio"], hint: "Después de essere puede ir solo", explanation: "Questo libro è mio. Después de essere el posesivo puede ir solo; también se acepta è il mio." },
  { question: "Elige la forma de «de usted»: (il suo / il vostro) libro.", answers: ["il suo"], hint: "Usted usa la forma de él y de ella; ustedes usa vostro", explanation: "El libro de usted es il suo libro. Il vostro libro es el libro de ustedes." },
  { question: "Traduce al italiano: nuestros padres.", answers: ["i nostri genitori", "i nostri genitori."], hint: "Masculino plural de nostro", explanation: "Nuestros padres = i nostri genitori: nostro concuerda en masculino plural." },
  { question: "Completa: la ___ maestra (de ustedes).", answers: ["vostra"], hint: "Femenino singular de vostro", explanation: "La vostra maestra: vostro en femenino singular es vostra." },
  { question: "Completa: il ___ è qui. (el mío)", answers: ["mio"], hint: "El artículo ya está escrito", explanation: "Il mio è qui: el mío está aquí. Cuando el posesivo ocupa el lugar del sustantivo, conserva el artículo." },
  { question: "Traduce al italiano: Este libro es tuyo.", answers: ["Questo libro è tuo", "Questo libro è il tuo"], hint: "Después de essere puede ir solo", explanation: "Este libro es tuyo = Questo libro è tuo. También vale Questo libro è il tuo." },
];
