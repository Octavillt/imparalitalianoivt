// Las fórmulas describen estructuras; los ejemplos son oraciones completas.
// En vocabulario se muestran patrones de uso, no reglas para formar palabras.
const row = (label, pattern, example, translation) => ({ label, pattern, example, translation });

export const TOPIC_FORMULAS = {
  numbers: {
    rows: [
      row("Contar", "Sono + número + sustantivo", "Sono ventotto studenti.", "Son veintiocho estudiantes."),
      row("Preguntar el deletreo", "Come si scrive + palabra + ?", "Come si scrive Leslie?", "¿Cómo se escribe Leslie?"),
      row("Deletrear con ciudades", "Letra + come + ciudad", "L come Livorno", "L de Livorno"),
    ],
  },
  time: {
    note: "La una va en singular: è l'una. Las demás horas van en plural: sono le tre.",
    rows: [
      row("Preguntar la hora", "Che ora è? / Che ore sono?", "Che ore sono?", "¿Qué hora es?"),
      row("La una", "È + l'una", "È l'una.", "Es la una."),
      row("Las demás horas", "Sono le + hora", "Sono le tre.", "Son las tres."),
      row("Minutos después", "Sono le + hora + e + minutos", "Sono le tre e dieci.", "Son las tres y diez."),
      row("Minutos antes", "Sono le + hora siguiente + meno + minutos", "Sono le quattro meno dieci.", "Son diez para las cuatro."),
    ],
  },
  essereAvere: {
    note: "El sujeto se omite cuando el verbo ya lo indica. Non va siempre antes del verbo; la pregunta no cambia el orden.",
    rows: [
      row("Afirmación", "(Sujeto) + essere + complemento", "Sono a casa.", "(Yo) estoy en casa."),
      row("Negación", "(Sujeto) + non + verbo + complemento", "Non ho fame.", "No tengo hambre."),
      row("Pregunta", "(Sujeto) + verbo + complemento + ?", "Sei italiana?", "¿Eres italiana?"),
      row("Edad", "Ho + número + anni", "Ho trent'anni.", "Tengo treinta años."),
      row("Usted", "Lei + è + complemento", "Lei è di Roma?", "¿Es usted de Roma?"),
    ],
  },
  countries: {
    note: "Las ciudades llevan a; los países, in. Para el origen con país usa Vengo da + artículo (dal = da + il).",
    rows: [
      row("Origen (ciudad)", "Sono di + ciudad", "Sono di Puebla.", "Soy de Puebla."),
      row("Origen (país)", "Vengo da + artículo + país", "Vengo dal Messico.", "Vengo de México."),
      row("Nacionalidad", "Sono + nacionalidad", "Sono messicano.", "Soy mexicano."),
      row("Residencia (ciudad)", "Abito a + ciudad", "Abito a Roma.", "Vivo en Roma."),
      row("Residencia (país)", "Abito in + país", "Abito in Italia.", "Vivo en Italia."),
    ],
  },
  family: {
    note: "Con familiar en singular el posesivo va sin artículo (mia madre); en plural, con artículo (i miei genitori).",
    rows: [
      row("Presentar (sing.)", "Questa/Questo è + posesivo + familiar", "Questa è mia sorella.", "Esta es mi hermana."),
      row("Presentar (pl.)", "Questi sono + artículo + posesivo + familiares", "Questi sono i miei genitori.", "Estos son mis padres."),
      row("Preguntar por la familia", "Hai + familiares en plural + ?", "Hai fratelli?", "¿Tienes hermanos?"),
    ],
  },
  plural: {
    note: "El plural depende de la terminación y del género que marca el artículo. Hay irregulares que conviene memorizar.",
    rows: [
      row("Masculino en -o", "il + sustantivo → i + sustantivo en -i", "il libro → i libri", "el libro → los libros"),
      row("Femenino en -a", "la + sustantivo → le + sustantivo en -e", "la casa → le case", "la casa → las casas"),
      row("-ca / -ga", "-ca / -ga → -che / -ghe", "l'amica → le amiche", "la amiga → las amigas"),
      row("Acento final", "Sustantivo con acento final → igual en plural", "la città → le città", "la ciudad → las ciudades"),
    ],
  },
  demonstratives: {
    note: "Questo señala cerca; quello, lejos (ese y aquel). Ante sustantivo, quello cambia como el artículo.",
    rows: [
      row("Cerca (sing.)", "Questo/Questa + è + sustantivo", "Questo è un libro.", "Este es un libro."),
      row("Cerca (pl.)", "Questi/Queste + sono + sustantivo", "Questi sono i miei amici.", "Estos son mis amigos."),
      row("Lejos sin sustantivo", "Quello/Quella/Quelli/Quelle + verbo", "Quello è mio.", "Ese es mío."),
      row("Preguntar qué", "Che cos'è + demostrativo + ?", "Che cos'è questo?", "¿Qué es esto?"),
      row("Ubicar", "Sujeto + è + qui / lì", "Il caffè è qui.", "El café está aquí."),
    ],
  },
  fruits: {
    note: "La frutta y la verdura son singulares colectivos. Los plurales siguen las reglas de género y plural.",
    rows: [
      row("Identificar", "Questo/Questa è + un/una + fruta", "Questa è una mela.", "Esta es una manzana."),
      row("Señalar (pl.)", "Quelli/Quelle sono + fruta en plural", "Quelle sono arance.", "Esas son naranjas."),
      row("Cantidad", "Ho + número + fruta en plural", "Ho due banane.", "Tengo dos plátanos."),
      row("Pedir con cortesía", "Vorrei + cantidad + di + plural", "Vorrei un chilo di pomodori.", "Quisiera un kilo de jitomates."),
    ],
  },
};
