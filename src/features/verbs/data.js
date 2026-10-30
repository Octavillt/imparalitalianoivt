// Verbi di uso quotidiano: infinitivos por grupo (-are, -ere, -ire), falsos
// amigos y oraciones con la forma de lui/lei o io señalada como anticipo.
// Los tokens llevan { t, r }: sujeto y verbo.
const su = t => ({ t, r: "subject" });
const vv = t => ({ t, r: "verb" });

// Infinitivo, grupo y traducción — para la lista filtrable.
export const VERBS = [
  // -are
  ["parlare", "-are", "hablar"],
  ["mangiare", "-are", "comer"],
  ["studiare", "-are", "estudiar"],
  ["lavorare", "-are", "trabajar"],
  ["abitare", "-are", "vivir, habitar"],
  ["ascoltare", "-are", "escuchar"],
  ["guardare", "-are", "mirar"],
  ["cantare", "-are", "cantar"],
  ["ballare", "-are", "bailar"],
  ["camminare", "-are", "caminar"],
  ["comprare", "-are", "comprar"],
  ["cucinare", "-are", "cocinar"],
  ["giocare", "-are", "jugar"],
  ["pagare", "-are", "pagar"],
  ["lavare", "-are", "lavar"],
  ["aiutare", "-are", "ayudar"],
  ["imparare", "-are", "aprender"],
  ["insegnare", "-are", "enseñar"],
  ["chiamare", "-are", "llamar"],
  ["cercare", "-are", "buscar"],
  ["trovare", "-are", "encontrar"],
  ["pensare", "-are", "pensar"],
  ["amare", "-are", "amar"],
  ["arrivare", "-are", "llegar"],
  ["tornare", "-are", "regresar, volver"],
  ["entrare", "-are", "entrar"],
  ["andare", "-are", "ir (irregular)"],
  // -ere
  ["leggere", "-ere", "leer"],
  ["scrivere", "-ere", "escribir"],
  ["vedere", "-ere", "ver"],
  ["prendere", "-ere", "tomar, agarrar"],
  ["bere", "-ere", "beber (irregular)"],
  ["chiedere", "-ere", "pedir, preguntar"],
  ["rispondere", "-ere", "responder"],
  ["vendere", "-ere", "vender"],
  ["correre", "-ere", "correr"],
  ["credere", "-ere", "creer"],
  ["mettere", "-ere", "poner"],
  ["vivere", "-ere", "vivir"],
  ["fare", "-ere", "hacer (irregular)"],
  // -ire
  ["dormire", "-ire", "dormir"],
  ["aprire", "-ire", "abrir"],
  ["partire", "-ire", "salir, partir"],
  ["sentire", "-ire", "oír, sentir"],
  ["capire", "-ire", "entender"],
  ["finire", "-ire", "terminar"],
  ["pulire", "-ire", "limpiar"],
  ["preferire", "-ire", "preferir"],
  ["salire", "-ire", "subir"],
  ["uscire", "-ire", "salir (irregular)"],
  ["venire", "-ire", "venir (irregular)"],
];

// Formas de anticipo: lo que la persona hace, con la forma de lui/lei o io.
export const VERB_SENTENCES = [
  { pts: [su("Leslie"), " ", vv("studia"), " italiano."], esp: "Leslie estudia italiano." },
  { pts: [su("Octavio"), " ", vv("mangia"), " la pizza."], esp: "Octavio come la pizza." },
  { pts: [su("Argelia"), " ", vv("legge"), " un libro."], esp: "Argelia lee un libro." },
  { pts: [su("Octavio"), " ", vv("guarda"), " la televisione."], esp: "Octavio mira la televisión." },
  { pts: [su("Leslie"), " ", vv("ascolta"), " la musica."], esp: "Leslie escucha música." },
  { pts: [su("Argelia"), " ", vv("lavora"), " a Roma."], esp: "Argelia trabaja en Roma." },
  { pts: [su("Io"), " ", vv("cucino"), " la pasta."], esp: "(Yo) cocino la pasta." },
  { pts: [su("Io"), " ", vv("bevo"), " il caffè."], esp: "(Yo) tomo el café." },
];

// Falsos amigos: se parecen al español pero significan otra cosa.
export const FALSE_FRIENDS = [
  ["guardare", "mirar (no guardar)"],
  ["salire", "subir (no salir)"],
  ["uscire", "salir (ir fuera)"],
  ["cercare", "buscar (no cazar)"],
  ["prendere", "tomar, agarrar"],
  ["sentire", "oír, sentir"],
];

export const PRACTICE = [
  { question: "¿A qué grupo pertenece «parlare»? Escribe -are, -ere o -ire.", answers: ["-are"], hint: "Terminación del infinitivo", explanation: "parlare termina en -are: es el grupo más grande de verbos italianos." },
  { question: "Traduce al italiano: Leslie estudia italiano.", answers: ["Leslie studia italiano", "Leslie studia italiano."], hint: "Studiare → studia", explanation: "Leslie estudia italiano = Leslie studia italiano. Con ella (lei) la forma es studia." },
  { question: "Traduce al italiano: Octavio come la pizza.", answers: ["Octavio mangia la pizza", "Octavio mangia la pizza."], hint: "Mangiare → mangia", explanation: "Octavio come la pizza = Octavio mangia la pizza. Con él (lui) la forma es mangia." },
  { question: "Traduce al italiano: Argelia lee un libro.", answers: ["Argelia legge un libro", "Argelia legge un libro."], hint: "Leggere → legge", explanation: "Argelia lee un libro = Argelia legge un libro. Con lei, leggere pasa a legge." },
  { question: "Completa: Io ___ il caffè. (bere)", answers: ["bevo"], hint: "Forma de io", explanation: "Io bevo il caffè = (Yo) tomo el café. Bere es irregular: io bevo." },
  { question: "Completa: Argelia ___ a Roma. (lavorare)", answers: ["lavora"], hint: "Forma de lei", explanation: "Argelia lavora a Roma = Argelia trabaja en Roma." },
  { question: "Traduce al español: Octavio guarda la televisione.", answers: ["Octavio mira la televisión"], answerLang: "es", hint: "Guardare es un falso amigo", explanation: "Octavio guarda la televisione = Octavio mira la televisión. Guardare significa mirar, no guardar." },
  { question: "Traduce al español: salire le scale.", answers: ["subir las escaleras"], answerLang: "es", hint: "Salire es un falso amigo", explanation: "salire le scale = subir las escaleras. Salire significa subir." },
  { question: "Elige la traducción correcta de «uscire».", answers: ["salir"], hint: "Es de movimiento (salir de casa)", explanation: "uscire = salir (ir fuera). No confundir con salire, que es subir." },
  { question: "Elige la traducción correcta de «cercare».", answers: ["buscar"], hint: "Se parece a «cazar» pero no es eso", explanation: "cercare = buscar: Cerco le chiavi = Busco las llaves." },
  { question: "Traduce al italiano: (Yo) cocino la pasta.", answers: ["Io cucino la pasta", "Cucino la pasta", "Io cucino la pasta."], hint: "Cucinare → cucino", explanation: "(Yo) cocino la pasta = (Io) cucino la pasta." },
  { question: "¿Qué significa «prendere» en español? Escribe una traducción.", answers: ["tomar", "agarrar", "tomar, agarrar"], answerLang: "es", hint: "Prendo il caffè…", explanation: "prendere = tomar, agarrar: Prendo il caffè = Tomo el café." },
  { question: "Elige el grupo de «dormire».", answers: ["-ire"], hint: "Mira la terminación", explanation: "dormire termina en -ire." },
  { question: "Elige el grupo de «scrivere».", answers: ["-ere"], hint: "Mira la terminación", explanation: "scrivere termina en -ere." },
  { question: "Completa: Io ___ musica. (ascoltare)", answers: ["ascolto"], hint: "Forma de io", explanation: "Io ascolto musica = (Yo) escucho música." },
];
