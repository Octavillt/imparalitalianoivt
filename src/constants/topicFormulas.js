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
  prepositions: {
    note: "Le preposizioni di luogo ubican con essere; c'è y ci sono equivalen a «hay». Las formas contraídas se aprenden como fórmulas fijas.",
    rows: [
      row("Preguntar dónde", "Dov'è / Dove sono + sustantivo + ?", "Dov'è il libro?", "¿Dónde está el libro?"),
      row("Ubicar", "Sujeto + essere + preposición + lugar", "Il libro è sotto il tavolo.", "El libro está debajo de la mesa."),
      row("Hay (sing.)", "C'è + sustantivo singular", "C'è una sedia in cucina.", "Hay una silla en la cocina."),
      row("Hay (pl.)", "Ci sono + sustantivo plural", "Ci sono due libri sul tavolo.", "Hay dos libros sobre la mesa."),
      row("Forma contraída", "in + la = nella / a + il = al", "Le chiavi sono nella borsa.", "Las llaves están en la bolsa."),
    ],
  },
  dates: {
    note: "Días y meses van en minúscula. La fecha usa il + número + mes; solo el día 1 va en ordinal (il primo).",
    rows: [
      row("Preguntar el día", "Che giorno è oggi? / Che data è oggi?", "Che giorno è oggi?", "¿Qué día es hoy?"),
      row("Fecha", "Oggi è il + número + mes", "Oggi è il 30 ottobre.", "Hoy es 30 de octubre."),
      row("Día 1", "Il primo + mes", "Il primo maggio.", "El 1 de mayo."),
      row("Ante vocal", "L' + número + mes", "L'8 marzo.", "El 8 de marzo."),
      row("Cumpleaños", "Il mio compleanno è il + número + mes", "Il mio compleanno è il 3 aprile.", "Mi cumpleaños es el 3 de abril."),
    ],
  },
  verbs: {
    note: "El infinitivo termina en -are, -ere o -ire. La conjugación completa se ve en Básico II; aquí se reconocen las formas de io y lui/lei.",
    rows: [
      row("Oración básica", "Sujeto + verbo + complemento", "Leslie studia italiano.", "Leslie estudia italiano."),
      row("Forma de io", "Io + verbo en -o", "Io cucino la pasta.", "(Yo) cocino la pasta."),
      row("Forma de lei", "Lei / nombre + verbo en -a", "Argelia legge un libro.", "Argelia lee un libro."),
      row("Falso amigo", "guardare = mirar", "Octavio guarda la televisione.", "Octavio mira la televisión."),
    ],
  },
  stareGerundio: {
    note: "Stare + gerundio marca una acción en curso: -are forma -ando; -ere e -ire forman -endo. No existe -iendo.",
    rows: [
      row("Afirmación", "(Sujeto) + stare + verbo-ando/-endo", "Sto mangiando.", "Estoy comiendo."),
      row("Tercera persona", "Sujeto + sta + verbo-ando/-endo", "Leslie sta leggendo.", "Leslie está leyendo."),
      row("Negación", "Non + stare + gerundio", "Non sto dormendo.", "No estoy durmiendo."),
      row("Irregular", "fare → facendo / bere → bevendo", "Che cosa stai facendo?", "¿Qué estás haciendo?"),
    ],
  },
  jobs: {
    note: "Con essere la profesión va sin artículo (sono insegnante); con fare lleva artículo (faccio l'insegnante).",
    rows: [
      row("Profesión (essere)", "Sono + profesión (sin artículo)", "Sono insegnante.", "Soy maestro."),
      row("Profesión (fare)", "Faccio + artículo + profesión", "Faccio l'insegnante.", "Me dedico a la enseñanza."),
      row("Preguntar", "Che lavoro fai? / Dove lavori?", "Dove lavori?", "¿Dónde trabajas?"),
      row("Lugar", "Lavoro + in + lugar", "Lavoro in un ospedale.", "Trabajo en un hospital."),
      row("Acción actual", "Sujeto + stare + gerundio", "Sta aiutando un paziente.", "Está ayudando a un paciente."),
    ],
  },
  vocabulary: {
    note: "Con amigos y familia usa tu; con desconocidos y en situaciones formales, Lei. Los saludos se aprenden como expresiones completas.",
    rows: [
      row("Saludar", "Ciao! / Buongiorno! / Buonasera!", "Buongiorno!", "¡Buenos días!"),
      row("Presentarse", "Mi chiamo + nombre", "Mi chiamo Octavio.", "Me llamo Octavio."),
      row("Cómo estás", "Come stai? — Sto bene, grazie.", "Come stai?", "¿Cómo estás?"),
      row("Despedirse", "Arrivederci! / A domani!", "A domani!", "¡Hasta mañana!"),
    ],
  },
};
