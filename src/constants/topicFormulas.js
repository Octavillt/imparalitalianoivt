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
    note: "Las preposiciones de lugar ubican con essere; c'è y ci sono equivalen a «hay». Las formas contraídas se aprenden como fórmulas fijas.",
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
      row("Forma de lui/lei", "Lui / lei + verbo en -a o -e", "Argelia legge un libro.", "Argelia lee un libro."),
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
  articles: {
    note: "El plural «unos» (dei, degli, delle) se ve en Básico IV.",
    rows: [
      row("Determinativo", "Artículo + sustantivo", "Il caffè è buono.", "El café está bueno."),
      row("s + consonante, z, gn, ps, y", "lo / uno + sustantivo", "Lo studente è di Milano.", "El estudiante es de Milán."),
      row("Ante vocal", "l' + sustantivo; un + masculino; un' + femenino", "Un amico e un'amica.", "Un amigo y una amiga."),
      row("Sin artículo", "Ø + nombre, ciudad o profesión con essere", "Roma è bella.", "Roma es bonita."),
    ],
  },
  adjectives: {
    note: "Bello, ante sustantivo, cambia como el artículo. Buono, en singular, cambia como un.",
    rows: [
      row("Después del sustantivo", "Artículo + sustantivo + adjetivo", "Una macchina rossa.", "Un carro rojo."),
      row("Antes del sustantivo", "Artículo + adjetivo frecuente + sustantivo", "Un nuovo libro.", "Un libro nuevo."),
      row("Después de essere", "Sujeto + essere + adjetivo", "I gelati sono buoni.", "Los helados están buenos."),
      row("Grupo mixto", "Persona + e + persona + sono + plural masculino", "Octavio e Leslie sono stanchi.", "Octavio y Leslie están cansados."),
      row("Contrarios", "Adjetivo / su contrario", "Caldo o freddo.", "Caliente o frío."),
    ],
  },
  possessiveAdjectives: {
    note: "Con un familiar en singular no va artículo (mia madre), salvo loro. En plural sí: le mie sorelle.",
    rows: [
      row("Con objeto", "Artículo + posesivo + sustantivo", "Il mio libro è qui.", "Mi libro está aquí."),
      row("Según lo poseído", "Artículo de la cosa + posesivo", "La sua casa è grande.", "Su casa es grande."),
      row("Loro", "Artículo + loro + sustantivo", "I loro libri sono nuovi.", "Sus libros son nuevos."),
      row("Después de essere", "Sustantivo + essere + posesivo", "Questo libro è mio.", "Este libro es mío."),
      row("Familiar en singular", "Posesivo + familiar", "Mia madre è di Roma.", "Mi madre es de Roma."),
    ],
  },
  preposizioniArticolate: {
    note: "Con, per, tra y fra no se unen al artículo. Un nombre de persona va sin él.",
    rows: [
      row("Pertenencia", "Sustantivo + di + nombre", "Il libro di Leslie.", "El libro de Leslie."),
      row("Di + artículo", "di + il = del", "La macchina del professore.", "El carro del profesor."),
      row("A + artículo", "a + il = al", "Vado al bar.", "Voy al bar."),
      row("Da + artículo", "da + il = dal", "Vengo dal Messico.", "Vengo de México."),
      row("In + artículo", "in + la = nella", "Le chiavi sono nella borsa.", "Las llaves están en la bolsa."),
    ],
  },
  whQuestions: {
    note: "Perché lleva acento agudo y sirve para preguntar y para responder. Qual è va sin apóstrofo.",
    rows: [
      row("Orden", "Palabra interrogativa + verbo + sujeto", "Dov'è Leslie?", "¿Dónde está Leslie?"),
      row("Causa", "Perché + pregunta — Perché + respuesta", "Perché studio italiano.", "Porque estudio italiano."),
      row("Cantidad", "Quanto, quanta, quanti o quante + sustantivo", "Quante sorelle hai?", "¿Cuántas hermanas tienes?"),
      row("Número", "Quale + singular; quali + plural", "Quali pizze prendi?", "¿Cuáles pizzas pides?"),
      row("Origen", "Di dove + è", "Di dov'è Octavio?", "¿De dónde es Octavio?"),
    ],
  },
  presenteIndicativo: {
    note: "Voi equivale a ustedes. En loro, parlano, credono y dormono llevan el golpe al inicio: PAR-la-no. Ese acento no se escribe.",
    rows: [
      row("Modelo -are", "raíz + o, i, a, iamo, ate, ano", "Io parlo italiano.", "Yo hablo italiano."),
      row("Negación", "Non + verbo en presente", "Non lavoro il sabato.", "No trabajo los sábados."),
      row("Pregunta", "Verbo en presente + ?", "Lavori a Roma?", "¿Trabajas en Roma?"),
      row("Hábito", "Presente + complemento de rutina", "Studio italiano ogni giorno.", "Estudio italiano todos los días."),
      row("Ahora", "Che cosa fai? — respuesta en presente", "Mangio una pizza.", "Como una pizza."),
    ],
  },
  verbiInfinito: {
    note: "Sapere más infinitivo es saber hacer algo. La diferencia con potere se ve en Básico IV.",
    rows: [
      row("Gustar", "Mi piace + infinitivo", "Mi piace leggere.", "Me gusta leer."),
      row("Plural", "Mi piacciono + sustantivo plural", "Mi piacciono le fragole.", "Me gustan las fresas."),
      row("Sin preposición", "Volere, potere, dovere, sapere o preferire + infinitivo", "Devo studiare.", "Debo estudiar."),
      row("Con a", "Verbo + a + infinitivo", "Vado a mangiare.", "Voy a comer."),
      row("Con di", "Verbo + di + infinitivo", "Cerco di studiare.", "Intento estudiar."),
    ],
  },
  irregularVerbs: {
    note: "El participio entra en el passato prossimo, en Básico V. La muestra de esta lección es Ho mangiato, Ho fatto y Sono andato.",
    rows: [
      row("Presente", "Infinitivo irregular → forma de io", "Andare → vado.", "Ir → voy."),
      row("Acento", "Dà, con acento grave", "Leslie dà un gelato.", "Leslie da un helado."),
      row("Participio", "Infinitivo → participio passato", "Scrivere → scritto.", "Escribir → escrito."),
      row("Con avere", "Ho + participio", "Ho fatto.", "He hecho."),
      row("Con essere", "Sono + participio", "Sono andato.", "He ido."),
    ],
  },
  routineRiflessivi: {
    note: "Voi equivale a ustedes. Non va antes del pronombre. En la negación, mai va con non.",
    rows: [
      row("Pronombre", "pronombre + verbo", "Mi alzo alle sette.", "Me levanto a las siete."),
      row("Negación", "Non + pronombre + verbo", "Non mi alzo presto.", "No me levanto temprano."),
      row("Frecuencia", "verbo + adverbio", "Mi alzo sempre alle sette.", "Me levanto siempre a las siete."),
      row("Mai", "Non + verbo + mai", "Non bevo mai il caffè.", "No tomo nunca café."),
      row("Ahora y rutina", "Di solito + presente, ma adesso + stare + gerundio", "Di solito lavoro a Roma, ma adesso sto lavorando a Milano.", "Normalmente trabajo en Roma, pero ahora estoy trabajando en Milán."),
    ],
  },
  preposizioniTempo: {
    note: "Alle, dal, nel y sul ya traen la preposición y el artículo. Tra y fra funcionan igual.",
    rows: [
      row("Ciudad y hora", "a + ciudad / alle + hora", "Arrivo a Roma alle otto.", "Llego a Roma a las ocho."),
      row("País y transporte", "in + país / in + medio", "Vado in Italia in treno.", "Voy a Italia en tren."),
      row("Desde cuándo", "presente + da + duración", "Studio italiano da due anni.", "Estudio italiano desde hace dos años."),
      row("Dentro de", "tra o fra + plazo", "Parto tra un'ora.", "Salgo dentro de una hora."),
      row("Cada cuánto", "volta o volte + al o alla + periodo", "Vado due volte alla settimana.", "Voy dos veces a la semana."),
    ],
  },
  directions: {
    note: "Scusi es de usted; scusa, de tú. Con artículo, accanto a se escribe accanto al.",
    rows: [
      row("Preguntar", "Scusi, dov'è + lugar?", "Scusi, dov'è la stazione?", "Disculpe, ¿dónde está la estación?"),
      row("Tú", "imperativo de tú + dirección", "Gira a destra.", "Gira a la derecha."),
      row("Usted", "imperativo de usted + dirección", "Vada sempre dritto.", "Siga siempre derecho."),
      row("Ubicar", "lugar + è + referencia", "La farmacia è accanto al museo.", "La farmacia está junto al museo."),
      row("La calle que toca", "Prendi + la prima o la seconda", "Prendi la prima a destra.", "Toma la primera a la derecha."),
    ],
  },
  bodyParts: {
    note: "Le braccia, le dita, le ginocchia, le labbra, le ossa y le sopracciglia son femeninos en plural. Con el cuerpo, el reflexivo lleva artículo.",
    rows: [
      row("Nombrar", "artículo + parte", "La testa.", "La cabeza."),
      row("Describir", "avere + artículo + parte + adjetivo", "Ha gli occhi verdi.", "Tiene los ojos verdes."),
      row("Dolor", "Mi fa male + singular / Mi fanno male + plural", "Mi fa male la testa.", "Me duele la cabeza."),
      row("Aseo", "Mi lavo + artículo + parte", "Mi lavo i denti.", "Me lavo los dientes."),
      row("Movimiento", "imperativo de tú + artículo + parte", "Alza le braccia.", "Levanta los brazos."),
    ],
  },
};
