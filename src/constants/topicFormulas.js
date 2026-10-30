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
};
