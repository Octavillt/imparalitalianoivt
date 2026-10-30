// Cada objetivo y autoevaluación se limita al contenido de su sección.
// Las referencias conectan bases ya vistas sin cambiar temas de módulo.
export const LEARNING_GUIDE = {
  numbers: {
    goal: "Contar, leer números y deletrear nombres con el alfabeto italiano.",
    recall: [],
    task: "Escribe 28 en italiano y deletrea el nombre Argelia en voz alta.",
    answer: "Ventotto. Argelia: A–R–G–E–L–I–A (a–erre–gi–e–elle–i–a). En ventotto, venti pierde la i ante otto.",
  },
  time: {
    goal: "Preguntar y decir la hora con è l'una, sono le… y las formas e / meno.",
    recall: ["numbers"],
    task: "Expresa las 9:45 de dos maneras.",
    answer: "Sono le nove e quarantacinque. Sono le dieci meno un quarto. Con meno, cuenta lo que falta para la siguiente hora.",
  },
  essereAvere: {
    goal: "Presentarte y describir tu estado con essere y avere, negar y preguntar sin cambiar el orden.",
    recall: ["numbers"],
    task: "Di que Octavio está cansado, que Leslie no tiene hambre y pregunta a Argelia si tiene sueño.",
    answer: "Octavio è stanco. Leslie non ha fame. Hai sonno? Non va antes del verbo y la pregunta conserva el orden; solo cambia la entonación.",
  },
  countries: {
    goal: "Decir tu origen, tu nacionalidad y tu ciudad de residencia.",
    recall: ["essereAvere"],
    task: "Di que vienes de México, que eres mexicano y que vives en Roma.",
    answer: "Vengo dal Messico. Sono messicano. Abito a Roma. Las ciudades llevan a, los países in, y dal = da + il.",
  },
  family: {
    goal: "Nombrar a tus familiares, presentarlos y preguntar por la familia de otras personas.",
    recall: ["essereAvere"],
    task: "Presenta a tu padre y a tus padres, y pregunta si alguien tiene hermanos.",
    answer: "Questo è mio padre. Questi sono i miei genitori. Hai fratelli? En singular va sin artículo (mio padre); en plural, con artículo (i miei genitori).",
  },
  plural: {
    goal: "Formar el plural según la terminación y reconocer las excepciones de género.",
    recall: [],
    task: "Escribe los plurales de libro, casa, amiga y uomo.",
    answer: "i libri, le case, le amiche, gli uomini. Las reglas: -o→-i, -a→-e, -ca→-che; l'uomo es irregular.",
  },
  demonstratives: {
    goal: "Señalar objetos con questo y quello según la distancia, y ubicarlos con qui y lì.",
    recall: ["plural", "essereAvere"],
    task: "Di «este es un libro», «esos son mis amigos» y «el café está aquí».",
    answer: "Questo è un libro. Quelli sono i miei amici. Il caffè è qui. Quello, ante sustantivo, cambia como el artículo.",
  },
  fruits: {
    goal: "Nombrar frutas y verduras en italiano y usarlas en frases de identificación y cantidad.",
    recall: ["demonstratives", "plural"],
    task: "Di que esas son naranjas, que tienes dos plátanos y que quisieras un kilo de jitomates.",
    answer: "Quelle sono arance. Ho due banane. Vorrei un chilo di pomodori. La frutta y la verdura son singulares colectivos.",
  },
};
