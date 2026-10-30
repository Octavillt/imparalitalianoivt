// Colocaciones: se aprenden enteras. El verbo sí se conjuga.
// Fare, prendere y dare van con avere. Divertirsi y perdersi, con essere.

const su = t => ({ t, r: "subject" });
const ax = t => ({ t, r: "aux" });
const pp = t => ({ t, r: "participle" });
const vb = t => ({ t, r: "verb" });
const art = t => ({ t, r: "art" });
const ar = t => ({ t, r: "articolata" });
const es = t => ({ t, r: "essere" });

export const SOCIAL_LIFE = [
  ["uscire con gli amici", "salir con los amigos"],
  ["divertirsi", "divertirse"],
  ["vedersi", "verse"],
  ["incontrarsi", "encontrarse"],
  ["conoscere", "conocer"],
  ["festeggiare", "festejar"],
  ["invitare", "invitar"],
  ["chiacchierare", "platicar"],
  ["perdersi", "perderse"],
  ["mangiare fuori", "comer fuera"],
];

export const COLLOCATION_GROUPS = [
  {
    verb: "fare",
    items: [
      ["fare una festa", "hacer una fiesta"],
      ["fare colazione", "desayunar"],
      ["fare la spesa", "hacer el súper"],
      ["fare una passeggiata", "dar un paseo"],
      ["fare un giro", "dar una vuelta"],
      ["fare una foto", "tomar una foto"],
      ["fare un errore", "cometer un error"],
      ["fare amicizia", "hacer amistad"],
      ["fare tardi", "llegar tarde, o desvelarse"],
      ["fare due chiacchiere", "platicar un rato"],
      ["fare un regalo", "hacer un regalo"],
      ["fare una domanda", "hacer una pregunta"],
      ["fare la fila", "hacer fila"],
    ],
  },
  {
    verb: "prendere",
    items: [
      ["prendere un caffè", "tomar un café"],
      ["prendere l'autobus", "tomar el autobús"],
      ["prendere il treno", "tomar el tren"],
      ["prendere una decisione", "tomar una decisión"],
      ["prendere il sole", "tomar el sol"],
      ["prendere un appuntamento", "sacar una cita"],
      ["prendere appunti", "tomar apuntes"],
    ],
  },
  {
    verb: "dare",
    items: [
      ["dare una mano", "echar una mano"],
      ["dare un passaggio", "dar un aventón"],
      ["dare una festa", "hacer una fiesta"],
      ["dare un esame", "presentar un examen"],
      ["dare un consiglio", "dar un consejo"],
      ["dare un'occhiata", "echar un vistazo"],
      ["dare il benvenuto", "dar la bienvenida"],
    ],
  },
  {
    verb: "avere",
    items: [
      ["avere fretta", "tener prisa"],
      ["avere ragione", "tener razón"],
      ["avere torto", "estar equivocado, no tener la razón"],
      ["avere bisogno di", "necesitar"],
      ["avere voglia di", "tener ganas de"],
      ["avere paura di", "tener miedo de"],
      ["avere tempo", "tener tiempo"],
      ["avere un appuntamento", "tener una cita"],
    ],
  },
];

// El verbo italiano no coincide con el que armaría el español palabra por palabra.
export const DIFFERENCES = [
  ["fare una foto", "tomar una foto"],
  ["fare colazione", "desayunar"],
  ["fare la spesa", "hacer el súper"],
  ["prendere un caffè", "tomar un café"],
  ["dare un esame", "presentar un examen"],
  ["avere voglia di", "tener ganas de"],
  ["fare tardi", "llegar tarde o desvelarse, según el contexto"],
];

export const TARDI = [
  { pts: ["Oggi ", ax("ho"), " ", pp("fatto"), " tardi ", ar("al"), " lavoro."], esp: "Hoy se me hizo tarde en el trabajo." },
  { pts: ["Ieri sera ", ax("ho"), " ", pp("fatto"), " tardi."], esp: "Anoche me desvelé." },
];

// Conoscere es la primera vez. Incontrare es cruzarse con alguien.
// Vedersi es verse; incontrarsi es juntarse.
export const SOCIAL_NOTES = [
  { pts: ["A Napoli ", ax("ho"), " ", pp("conosciuto"), " Leslie."], esp: "En Nápoles conocí a Leslie." },
  { pts: ["A Firenze ", ax("ho"), " ", pp("incontrato"), " Leslie."], esp: "En Florencia me encontré con Leslie." },
  { pts: ["Ci ", vb("vediamo"), " sabato a Milano."], esp: "Nos vemos el sábado en Milán." },
  { pts: ["Ci ", vb("incontriamo"), " ", ar("al"), " bar."], esp: "Nos encontramos en el bar." },
];

export const MODELS = [
  { pts: ["Ieri ", ax("ho"), " ", pp("fatto"), " ", art("una"), " festa."], esp: "Ayer hice una fiesta." },
  { pts: ["Ci ", ax("siamo"), " ", pp("divertiti"), "."], esp: "Nos divertimos." },
  { pts: ["Mi ", ax("sono"), " ", pp("persa"), " a Venezia."], esp: "Me perdí en Venecia." },
  { pts: ["Sabato ", vb("usciremo"), " con gli amici."], esp: "El sábado saldremos con los amigos." },
  { pts: [vb("Darò"), " ", art("una"), " mano a Leslie."], esp: "Le echaré una mano a Leslie." },
  { pts: [ax("Ho"), " ", pp("preso"), " ", art("un"), " caffè a Roma."], esp: "Tomé un café en Roma." },
  { pts: [ax("Abbiamo"), " ", pp("fatto"), " ", art("la"), " spesa a Milano."], esp: "Hicimos el súper en Milán." },
  { pts: [su("Leslie"), " ", ax("ha"), " ", pp("dato"), " ", art("un"), " esame a Napoli."], esp: "Leslie presentó un examen en Nápoles." },
  { pts: [vb("Prenderemo"), " ", art("il"), " treno per Venezia."], esp: "Tomaremos el tren a Venecia." },
  { pts: [es("Ho"), " voglia di ", art("un"), " gelato."], esp: "Tengo ganas de un helado." },
];

// Fin de semana de Octavio en Florencia. El cierre pasa a primera persona.
export const STORY = [
  { pts: ["Venerdì ", su("Octavio"), " ", ax("ha"), " ", pp("preso"), " ", art("il"), " treno per Firenze."], esp: "El viernes Octavio tomó el tren a Florencia." },
  { pts: ["Sabato ", ax("ha"), " ", pp("fatto"), " colazione in un bar e ", ax("ha"), " ", pp("preso"), " ", art("un"), " caffè."], esp: "El sábado desayunó en un bar y tomó un café." },
  { pts: ["Poi ", ax("ha"), " ", pp("fatto"), " ", art("una"), " passeggiata e ", ax("ha"), " ", pp("fatto"), " ", art("una"), " foto."], esp: "Después dio un paseo y tomó una foto." },
  { pts: [ax("Ha"), " ", pp("invitato"), " Argelia e Leslie."], esp: "Invitó a Argelia y a Leslie." },
  { pts: ["Si ", ax("sono"), " ", pp("incontrati"), " e ", ax("hanno"), " ", pp("fatto"), " due chiacchiere."], esp: "Se encontraron y platicaron un rato." },
  { pts: ["Sabato sera ", ax("hanno"), " ", pp("fatto"), " ", art("una"), " festa e si ", ax("sono"), " ", pp("divertiti"), "."], esp: "El sábado por la noche hicieron una fiesta y se divirtieron." },
  { pts: [ax("Hanno"), " ", pp("mangiato"), " ", art("una"), " pizza e ", ax("hanno"), " ", pp("preso"), " ", art("un"), " gelato."], esp: "Comieron una pizza y tomaron un helado." },
  { pts: ["Domenica ", su("Octavio"), " ", ax("ha"), " ", pp("fatto"), " tardi e ", ax("ha"), " ", pp("perso"), " ", art("il"), " treno."], esp: "El domingo Octavio llegó tarde y perdió el tren." },
  { pts: ["Il mese prossimo ", vb("usciremo"), " con gli amici a Roma."], esp: "El mes que viene saldremos con los amigos a Roma." },
  { pts: [vb("Darò"), " ", art("una"), " mano a Leslie per la festa."], esp: "Le echaré una mano a Leslie con la fiesta." },
];

export const PRACTICE = [
  { question: "Escribe en italiano: desayunar.", answers: ["fare colazione", "fare la colazione"], hint: "Se arma con fare.", explanation: "Desayunar = fare colazione. Fare la colazione también se dice." },
  { question: "Escribe en italiano: hacer el súper.", answers: ["fare la spesa"], hint: "La spesa es esa compra de comida.", explanation: "Hacer el súper = fare la spesa." },
  { question: "Escribe en italiano: tomar una foto.", answers: ["fare una foto", "fare una fotografia", "scattare una foto", "scattare una fotografia"], hint: "Con fare, la colocación de la lección es fare una foto.", explanation: "Tomar una foto = fare una foto. Scattare una foto también se dice." },
  { question: "Escribe en italiano: tomar un café.", answers: ["prendere un caffè", "prendere il caffè"], hint: "Se usa prendere. Caffè lleva acento.", explanation: "Tomar un café = prendere un caffè." },
  { question: "Escribe en italiano: presentar un examen.", answers: ["dare un esame", "sostenere un esame"], hint: "La colocación de la lección usa dare.", explanation: "Presentar un examen = dare un esame. Sostenere un esame también se dice." },
  { question: "Escribe en italiano: tener ganas de un helado.", answers: ["avere voglia di un gelato"], hint: "Voglia va seguido de di.", explanation: "Tener ganas de un helado = avere voglia di un gelato." },
  { question: "Escribe en italiano: echar una mano.", answers: ["dare una mano"], hint: "Se usa dare.", explanation: "Echar una mano = dare una mano." },
  { question: "Escribe en italiano: hacer fila.", answers: ["fare la fila"], hint: "Fila lleva el artículo la.", explanation: "Hacer fila = fare la fila." },
  { question: "Completa en primera persona singular: Ieri ___ una festa. (fare, passato prossimo)", answers: ["ho fatto"], hint: "Fare, en passato prossimo, va con avere. El participio es fatto.", explanation: "Ieri ho fatto una festa. El auxiliar es ho y el participio es fatto." },
  { question: "Escribe en italiano, en femenino: Me perdí en Venecia.", answers: ["Mi sono persa a Venezia", "A Venezia mi sono persa"], hint: "Perdersi va con essere y el participio concuerda en femenino.", explanation: "Me perdí en Venecia, dicho por una mujer, es Mi sono persa a Venezia." },
  { question: "Escribe en italiano: Este sábado saldremos con los amigos.", answers: ["Sabato usciremo con gli amici", "Questo sabato usciremo con gli amici", "Sabato usciremo con i miei amici"], hint: "Nosotros es usciremo. Sin artículo, sabato es esa fecha.", explanation: "Este sábado saldremos con los amigos = Sabato usciremo con gli amici. Il sabato sería los sábados." },
  { question: "¿Qué significa «il sabato»? Escribe la traducción.", answers: ["los sábados", "cada sábado"], answerLang: "es", hint: "Con artículo, el día se repite cada semana.", explanation: "Il sabato = los sábados. Sabato, sin artículo, es un sábado concreto." },
  { question: "Escribe en italiano: Le echaré una mano a Leslie.", answers: ["Darò una mano a Leslie", "Le darò una mano", "Le darò una mano a Leslie"], hint: "El futuro de dare, en yo, es darò.", explanation: "Le echaré una mano a Leslie = Darò una mano a Leslie. Le darò una mano también se dice." },
  { question: "Traduce al español «fare tardi» cuando la persona no llega a tiempo.", answers: ["llegar tarde"], answerLang: "es", hint: "En este contexto no es desvelarse.", explanation: "Fare tardi, cuando alguien no llega a la hora, es llegar tarde. Si la frase es de noche, puede ser desvelarse." },
  { question: "Traduce al español «fare tardi» cuando la persona se queda despierta hasta muy noche.", answers: ["desvelarse", "trasnochar", "acostarse tarde"], answerLang: "es", hint: "En este contexto no es llegar tarde a una cita.", explanation: "Fare tardi, de noche, es desvelarse o acostarse tarde. En otro contexto es llegar tarde." },
  { question: "Elige la colocación de «tomar una decisión»: (prendere una decisione / prendere un errore).", answers: ["prendere una decisione"], hint: "Decisión va con prendere. El error va con fare.", explanation: "Tomar una decisión = prendere una decisione. Fare un errore es cometer un error." },
  { question: "Completa: Ho bisogno ___ un caffè.", answers: ["di"], hint: "Bisogno va seguido de esta preposición.", explanation: "Ho bisogno di un caffè = Necesito un café." },
  { question: "Escribe en italiano el passato prossimo de «nos divertimos», en grupo mixto.", answers: ["Ci siamo divertiti"], hint: "Divertirsi va con essere. El grupo mixto usa el participio en -i.", explanation: "Nos divertimos = Ci siamo divertiti. Con solo mujeres sería Ci siamo divertite." },
  { question: "Escribe en italiano: salir con los amigos.", answers: ["uscire con gli amici"], hint: "Amici, en plural masculino, lleva gli.", explanation: "Salir con los amigos = uscire con gli amici." },
  { question: "Traduce al español: fare la spesa.", answers: ["hacer el súper", "hacer el mandado", "hacer las compras"], answerLang: "es", hint: "Es la compra de comida, no gastar dinero.", explanation: "Fare la spesa = hacer el súper." },
];
