// Saluti e presentazioni: saludos, despedidas, presentaciones, cortesía y el
// diálogo final de Básico I. Cada frase lleva etiqueta de registro:
// "informal" (tuteo), "formal" (usted) o "neutral".
// [frase italiana, español, registro]
export const GREETINGS = [
  ["Ciao!", "¡Hola! / ¡Adiós! (de confianza)", "informal"],
  ["Salve!", "¡Hola! (neutro, para todos)", "neutral"],
  ["Buongiorno!", "¡Buenos días!", "neutral"],
  ["Buon pomeriggio!", "¡Buenas tardes!", "neutral"],
  ["Buonasera!", "¡Buenas noches! (al llegar)", "neutral"],
  ["Buonanotte!", "¡Buenas noches! (al irse a dormir)", "neutral"],
];

export const GOODBYES = [
  ["Arrivederci!", "¡Adiós!", "neutral"],
  ["A presto!", "¡Hasta pronto!", "neutral"],
  ["A domani!", "¡Hasta mañana!", "neutral"],
  ["A dopo!", "¡Hasta luego!", "informal"],
  ["Ci vediamo!", "¡Nos vemos!", "informal"],
  ["Ciao!", "¡Adiós! (de confianza)", "informal"],
];

export const INTRODUCTIONS = [
  ["Come ti chiami?", "¿Cómo te llamas?", "informal"],
  ["Mi chiamo Octavio.", "Me llamo Octavio.", "neutral"],
  ["Come si chiama?", "¿Cómo se llama? (usted)", "formal"],
  ["Piacere!", "¡Mucho gusto!", "neutral"],
  ["Piacere mio!", "¡El gusto es mío!", "neutral"],
  ["Questo è Octavio.", "Este es Octavio.", "neutral"],
  ["Questa è Leslie.", "Esta es Leslie.", "neutral"],
];

export const HOW_ARE_YOU = [
  ["Come stai?", "¿Cómo estás?", "informal"],
  ["Come sta?", "¿Cómo está? (usted)", "formal"],
  ["Sto bene, grazie.", "Estoy bien, gracias.", "neutral"],
  ["E tu?", "¿Y tú?", "informal"],
  ["Così così.", "Así así.", "informal"],
  ["Non c'è male.", "No está mal.", "informal"],
];

export const COURTESY = [
  ["Per favore.", "Por favor.", "neutral"],
  ["Grazie.", "Gracias.", "neutral"],
  ["Prego.", "De nada.", "neutral"],
  ["Scusa.", "Perdón. (tú)", "informal"],
  ["Scusi.", "Perdón. (usted)", "formal"],
  ["Mi dispiace.", "Lo siento.", "neutral"],
];

// Diálogo final de Básico I: saludar, presentarse, decir de dónde eres,
// a qué te dedicas y despedirse. Octavio y Leslie, en un bar de Roma.
export const SAMPLE_DIALOGUE = [
  { who: "Octavio", line: "Ciao! Come ti chiami?", esp: "¡Hola! ¿Cómo te llamas?" },
  { who: "Leslie", line: "Mi chiamo Leslie. Piacere!", esp: "Me llamo Leslie. ¡Mucho gusto!" },
  { who: "Octavio", line: "Piacere mio! Di dove sei?", esp: "¡El gusto es mío! ¿De dónde eres?" },
  { who: "Leslie", line: "Sono di Messico. E tu?", esp: "Soy de México. ¿Y tú?" },
  { who: "Octavio", line: "Sono di Roma. Sono insegnante.", esp: "Soy de Roma. Soy maestro." },
  { who: "Leslie", line: "Che lavoro fai?", esp: "¿A qué te dedicas?" },
  { who: "Octavio", line: "Insegno italiano. E tu, dove lavori?", esp: "Enseño italiano. ¿Y tú, dónde trabajas?" },
  { who: "Leslie", line: "Lavoro in un ospedale. Ciao, Octavio! A presto!", esp: "Trabajo en un hospital. ¡Adiós, Octavio! ¡Hasta pronto!" },
  { who: "Octavio", line: "Ciao, Leslie! A domani!", esp: "¡Adiós, Leslie! ¡Hasta mañana!" },
];

export const TAG_COLORS = {
  formal: "#60a5fa",
  informal: "#fb923c",
  neutral: "#94a3b8",
};

export const TAG_LABELS = {
  formal: "formal",
  informal: "informal",
  neutral: "neutro",
};

export const PRACTICE = [
  { question: "Completa: Come ___ chiami? (¿cómo te llamas?)", answers: ["ti"], hint: "Ti es «te»", explanation: "Come ti chiami? = ¿Cómo te llamas?" },
  { question: "Completa: Mi ___ Octavio. (me llamo)", answers: ["chiamo"], hint: "Verbo chiamarsi", explanation: "Mi chiamo Octavio = Me llamo Octavio." },
  { question: "Traduce al español: Come si chiama?", answers: ["¿Cómo se llama?"], answerLang: "es", hint: "Si es «se»; es de usted", explanation: "Come si chiama? = ¿Cómo se llama? (usted)." },
  { question: "Traduce al español: Piacere!", answers: ["¡Mucho gusto!", "mucho gusto"], answerLang: "es", hint: "Se dice al presentarse", explanation: "Piacere! = ¡Mucho gusto!" },
  { question: "Elige la opción correcta: (Buongiorno / Buonanotte) se dice al irse a dormir.", answers: ["Buonanotte"], hint: "Noche + notte", explanation: "Buonanotte se dice al irse a dormir; Buongiorno se dice por el día." },
  { question: "Completa: Sto ___, grazie. (estoy bien)", answers: ["bene"], hint: "Bene = bien", explanation: "Sto bene, grazie = Estoy bien, gracias." },
  { question: "Traduce al español: Così così.", answers: ["Así así"], answerLang: "es", hint: "Respuesta típica a «¿cómo estás?»", explanation: "Così così = Así así." },
  { question: "Completa: ___ è Octavio. (este es, presentando)", answers: ["Questo"], hint: "Demostrativo masculino singular", explanation: "Questo è Octavio = Este es Octavio." },
  { question: "Completa: Questa ___ Leslie. (esta es)", answers: ["è"], hint: "Verbo ser/estar", explanation: "Questa è Leslie = Esta es Leslie." },
  { question: "Traduce al español: Grazie.", answers: ["gracias"], answerLang: "es", hint: "Cortesía", explanation: "Grazie = Gracias." },
  { question: "Traduce al español: Prego.", answers: ["de nada"], answerLang: "es", hint: "Respuesta a «grazie»", explanation: "Prego = De nada." },
  { question: "Elige la opción correcta: Con un desconocido usas (tu / Lei).", answers: ["Lei"], hint: "Mayúscula y tercera persona", explanation: "Con desconocidos y en situaciones formales se usa Lei (usted)." },
  { question: "Traduce al italiano: ¿De dónde eres?", answers: ["Di dove sei?", "Di dove sei"], hint: "Dove = dónde", explanation: "¿De dónde eres? = Di dove sei?" },
  { question: "Traduce al español: A presto!", answers: ["¡Hasta pronto!"], answerLang: "es", hint: "Despedida", explanation: "A presto! = ¡Hasta pronto!" },
];
