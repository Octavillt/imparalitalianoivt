// Passato prossimo: auxiliar en presente + participio passato.
// IRREGULAR_PARTICIPLES y AUXILIARY_EXAMPLES los leen las pruebas.
// Con essere el participio concuerda; en estas frases con avere queda en -o.

const su = t => ({ t, r: "subject" });
const ax = t => ({ t, r: "aux" });
const pp = t => ({ t, r: "participle" });
const ng = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });

export const REGULAR_PARTICIPLES = [
  ["-are → -ato", "parlare → parlato", "hablar → hablado"],
  ["-ere → -uto", "credere → creduto", "creer → creído"],
  ["-ire → -ito", "dormire → dormito", "dormir → dormido"],
];

// [infinitivo, participio, español]. Visto y perso son las formas de uso
// frecuente; veduto y perduto también existen y se comentan en la lección.
export const IRREGULAR_PARTICIPLES = [
  ["fare", "fatto", "hacer"],
  ["dire", "detto", "decir"],
  ["prendere", "preso", "tomar"],
  ["mettere", "messo", "poner"],
  ["leggere", "letto", "leer"],
  ["scrivere", "scritto", "escribir"],
  ["vedere", "visto", "ver"],
  ["aprire", "aperto", "abrir"],
  ["chiudere", "chiuso", "cerrar"],
  ["perdere", "perso", "perder"],
  ["rispondere", "risposto", "responder"],
  ["chiedere", "chiesto", "pedir, preguntar"],
  ["correre", "corso", "correr"],
  ["vivere", "vissuto", "vivir"],
  ["offrire", "offerto", "ofrecer"],
  ["scendere", "sceso", "bajar"],
  ["spendere", "speso", "gastar"],
  ["vincere", "vinto", "ganar"],
  ["rimanere", "rimasto", "quedarse"],
  ["venire", "venuto", "venir"],
  ["bere", "bevuto", "beber"],
  ["essere", "stato", "ser, estar"],
  ["nascere", "nato", "nacer"],
  ["morire", "morto", "morir"],
  ["stare", "stato", "estar"],
];

export const AVERE_PRESENT = ["ho", "hai", "ha", "abbiamo", "avete", "hanno"];
export const ESSERE_PRESENT = ["sono", "sei", "è", "siamo", "siete", "sono"];
export const PERSONS = ["io", "tu", "lui / lei", "noi", "voi", "loro"];

export const ESSERE_VERBS = [
  ["andare", "ir"],
  ["venire", "venir"],
  ["arrivare", "llegar"],
  ["partire", "partir"],
  ["tornare", "volver"],
  ["uscire", "salir"],
  ["entrare", "entrar"],
  ["salire", "subir"],
  ["scendere", "bajar"],
  ["restare", "quedarse"],
  ["rimanere", "permanecer"],
  ["nascere", "nacer"],
  ["morire", "morir"],
  ["diventare", "volverse"],
  ["essere", "ser, estar"],
  ["stare", "estar"],
];

export const AUXILIARY_EXAMPLES = [
  { it: "Ho mangiato la pizza.", aux: "avere", esp: "Comí pizza.", pts: [ax("Ho"), " ", pp("mangiato"), " la pizza."] },
  { it: "Hai studiato?", aux: "avere", esp: "¿Estudiaste?", pts: [ax("Hai"), " ", pp("studiato"), "?"] },
  { it: "Leslie ha letto un libro.", aux: "avere", esp: "Leslie leyó un libro.", pts: [su("Leslie"), " ", ax("ha"), " ", pp("letto"), " un libro."] },
  { it: "Sono andato a Roma.", aux: "essere", esp: "Fui a Roma. (masculino)", pts: [ax("Sono"), " ", pp("andato"), " a Roma."] },
  { it: "Leslie è andata a Roma.", aux: "essere", esp: "Leslie fue a Roma.", pts: [su("Leslie"), " ", ax("è"), " ", pp("andata"), " a Roma."] },
  { it: "Octavio e Leslie sono arrivati.", aux: "essere", esp: "Octavio y Leslie llegaron.", pts: [su("Octavio"), " e ", su("Leslie"), " ", ax("sono"), " ", pp("arrivati"), "."] },
  { it: "Mi sono alzata alle sette.", aux: "essere", esp: "Me levanté a las siete. (femenino)", pts: ["Mi ", ax("sono"), " ", pp("alzata"), " alle sette."] },
];

export const AGREEMENT = [
  { pts: [su("Octavio"), " ", ax("è"), " ", pp("andato"), "."], esp: "Octavio se fue." },
  { pts: [su("Leslie"), " ", ax("è"), " ", pp("andata"), "."], esp: "Leslie se fue." },
  { pts: [su("Octavio"), " e ", su("Leslie"), " ", ax("sono"), " ", pp("arrivati"), "."], esp: "Octavio y Leslie llegaron." },
  { pts: [su("Argelia"), " e ", su("Leslie"), " ", ax("sono"), " ", pp("arrivate"), "."], esp: "Argelia y Leslie llegaron." },
];

export const NEGATIVES = [
  { pts: [ng("Non"), " ", ax("ho"), " ", pp("mangiato"), "."], esp: "No comí." },
  { pts: [ng("Non"), " ", ax("sono"), " ", pp("andata"), "."], esp: "No fui." },
  { pts: [ng("Non"), " mi ", ax("sono"), " ", pp("alzata"), " alle sette."], esp: "No me levanté a las siete." },
];

export const ASK_SAMPLES = [
  { pts: [ax("Hai"), " ", pp("mangiato"), "?"], esp: "¿Comiste?" },
  { pts: [wh("Dove"), " ", ax("sei"), " ", pp("andato"), "?"], esp: "¿Adónde fuiste?" },
  { pts: [wh("Che cosa"), " ", ax("hai"), " ", pp("fatto"), " ieri?"], esp: "¿Qué hiciste ayer?" },
];

export const MARKERS = [
  ["ieri", "ayer"],
  ["ieri sera", "anoche"],
  ["stamattina", "esta mañana"],
  ["la settimana scorsa", "la semana pasada"],
  ["il mese scorso", "el mes pasado"],
  ["l'anno scorso", "el año pasado"],
  ["due giorni fa", "hace dos días"],
  ["nel 2020", "en 2020"],
];

export const MAI = {
  pts: [ng("Non"), " ", ax("ho"), " mai ", pp("mangiato"), " il sushi."],
  esp: "Nunca he comido sushi.",
};

export const STORY = [
  { pts: ["La settimana scorsa ", ax("sono"), " ", pp("andata"), " a Roma."], esp: "La semana pasada fui a Roma." },
  { pts: ["Sabato ", ax("sono"), " ", pp("arrivata"), " alla stazione e ", ax("ho"), " ", pp("preso"), " un caffè."], esp: "El sábado llegué a la estación y tomé un café." },
  { pts: ["Poi ", ax("ho"), " ", pp("mangiato"), " una pizza con ", su("Octavio"), "."], esp: "Luego comí una pizza con Octavio." },
  { pts: ["Domenica ", ax("ho"), " ", pp("visto"), " il Colosseo e ", ax("ho"), " ", pp("comprato"), " un gelato."], esp: "El domingo vi el Coliseo y compré un helado." },
  { pts: ["La sera ", ax("sono"), " ", pp("tornata"), " a casa."], esp: "En la noche volví a casa." },
  { pts: [ng("Non"), " ", ax("sono"), " ", pp("andata"), " a Venezia."], esp: "No fui a Venecia." },
];

export const GUIDED_STORY = {
  prompt: "Completa el relato de Leslie. El verbo va en passato prossimo y ella habla en primera persona.",
  lines: [
    ["La settimana scorsa ___ (andare) a Roma.", "La settimana scorsa sono andata a Roma."],
    ["Sabato ___ (arrivare) alla stazione e ___ (prendere) un caffè.", "Sabato sono arrivata alla stazione e ho preso un caffè."],
    ["Poi ___ (mangiare) una pizza con Octavio.", "Poi ho mangiato una pizza con Octavio."],
    ["Domenica ___ (vedere) il Colosseo e ___ (comprare) un gelato.", "Domenica ho visto il Colosseo e ho comprato un gelato."],
    ["La sera ___ (tornare) a casa.", "La sera sono tornata a casa."],
    ["Non ___ (andare) a Venezia.", "Non sono andata a Venezia."],
  ],
};

export const GUIDED_NEGATIVES = {
  prompt: "Pasa cada frase a negativo. El auxiliar y la concordancia se quedan.",
  rows: [
    ["Ho mangiato una pizza.", "Non ho mangiato una pizza."],
    ["Sono andata a Roma.", "Non sono andata a Roma."],
    ["Mi sono alzata alle sette.", "Non mi sono alzata alle sette."],
  ],
};

export const GUIDED_CONVERSATION = {
  prompt: "Completa la conversación. Leslie responde en femenino.",
  blanks: [
    "Octavio: Che cosa ___ (fare) ieri?",
    "Leslie: ___ (andare) a Roma. ___ (mangiare) una pizza.",
    "Octavio: ___ (andare) a Venezia?",
    "Leslie: No, non ___ (andare) a Venezia.",
  ],
  answers: [
    "Octavio: Che cosa hai fatto ieri?",
    "Leslie: Sono andata a Roma. Ho mangiato una pizza.",
    "Octavio: Sei andata a Venezia?",
    "Leslie: No, non sono andata a Venezia.",
  ],
};

export const PRACTICE = [
  { question: "Escribe el participio regular de parlare.", answers: ["parlato"], hint: "Los verbos en -are hacen el participio en -ato.", explanation: "Parlare → parlato. Parl más ato." },
  { question: "Escribe el participio regular de credere.", answers: ["creduto"], hint: "Los verbos en -ere hacen el participio en -uto.", explanation: "Credere → creduto." },
  { question: "Escribe el participio regular de dormire.", answers: ["dormito"], hint: "Los verbos en -ire hacen el participio en -ito.", explanation: "Dormire → dormito." },
  { question: "Escribe el participio de dire en el passato prossimo.", answers: ["detto"], hint: "Dire no sigue la terminación -uto.", explanation: "Dire → detto." },
  { question: "Escribe el participio de bere en el passato prossimo.", answers: ["bevuto"], hint: "La raíz de este participio es bev-.", explanation: "Bere → bevuto." },
  { question: "Escribe el participio de venire en el passato prossimo.", answers: ["venuto"], hint: "Venire usa essere: sono venuto, sono venuta.", explanation: "Venire → venuto. En femenino, con el auxiliar, es venuta." },
  { question: "Escribe el participio de vedere en el passato prossimo.", answers: ["visto", "veduto"], hint: "La forma más usada es visto. Veduto también existe.", explanation: "Vedere → visto. También existe veduto." },
  { question: "Escribe el participio de perdere en el passato prossimo.", answers: ["perso", "perduto"], hint: "La forma más usada es perso. Perduto también existe.", explanation: "Perdere → perso. También existe perduto." },
  { question: "Escribe el participio de aprire en el passato prossimo.", answers: ["aperto"], hint: "No termina en -ito.", explanation: "Aprire → aperto." },
  { question: "Elige el auxiliar de andare: (avere / essere).", answers: ["essere"], hint: "Andare es un verbo de movimiento.", explanation: "Andare usa essere: sono andato, sono andata." },
  { question: "Elige el auxiliar de mangiare en «Ho mangiato la pizza»: (avere / essere).", answers: ["avere"], hint: "El auxiliar de esa frase es ho.", explanation: "Mangiare, con la pizza después del verbo, usa avere: ho mangiato." },
  { question: "Escribe en italiano: Comí pizza.", answers: ["Ho mangiato la pizza"], hint: "Mangiare usa avere. El participio es mangiato.", explanation: "Comí pizza = Ho mangiato la pizza. Con el objeto después, el participio queda en -o." },
  { question: "Escribe en masculino: Fui a Roma.", answers: ["Sono andato a Roma"], hint: "Andare usa essere. En masculino el participio es andato.", explanation: "Fui a Roma, en masculino, es Sono andato a Roma." },
  { question: "Escribe en italiano: Leslie fue a Roma.", answers: ["Leslie è andata a Roma"], hint: "Leslie es mujer: andata. El auxiliar es è.", explanation: "Leslie fue a Roma = Leslie è andata a Roma." },
  { question: "Escribe en italiano: Octavio y Leslie llegaron.", answers: ["Octavio e Leslie sono arrivati"], hint: "En el grupo hay un hombre: el participio va en -i.", explanation: "Octavio y Leslie llegaron = Octavio e Leslie sono arrivati." },
  { question: "Escribe en italiano: Argelia y Leslie llegaron.", answers: ["Argelia e Leslie sono arrivate"], hint: "Las dos son mujeres: el participio va en -e.", explanation: "Argelia y Leslie llegaron = Argelia e Leslie sono arrivate." },
  { question: "Escribe en femenino: Me levanté a las siete.", answers: ["Mi sono alzata alle sette"], hint: "Alzarsi usa essere. En femenino, alzata. A las siete es alle sette.", explanation: "Me levanté a las siete, en femenino, es Mi sono alzata alle sette." },
  { question: "Escribe la negación: Ho mangiato.", answers: ["Non ho mangiato"], hint: "Non va antes del auxiliar.", explanation: "No comí = Non ho mangiato." },
  { question: "Escribe en italiano: ¿Comiste?", answers: ["Hai mangiato?"], hint: "La pregunta conserva el orden. Solo lleva el signo al final.", explanation: "¿Comiste? = Hai mangiato?" },
  { question: "Escribe en masculino: ¿Adónde fuiste?", answers: ["Dove sei andato?"], hint: "Dove pregunta adónde. En masculino el participio es andato.", explanation: "¿Adónde fuiste?, en masculino, es Dove sei andato?" },
  { question: "Escribe en italiano: ¿Qué hiciste ayer?", answers: ["Che cosa hai fatto ieri?", "Cosa hai fatto ieri?"], hint: "Che cosa pregunta qué. Fare hace fatto y usa avere.", explanation: "¿Qué hiciste ayer? = Che cosa hai fatto ieri? Cosa hai fatto ieri también se dice." },
  { question: "Escribe en italiano: Nunca he comido sushi.", answers: ["Non ho mai mangiato il sushi", "Non ho mai mangiato sushi"], hint: "Non va antes de ho. Mai va entre ho y el participio.", explanation: "Nunca he comido sushi = Non ho mai mangiato il sushi." },
  { question: "Escribe en italiano: hace dos días.", answers: ["due giorni fa"], hint: "Fa va después del periodo.", explanation: "Hace dos días = due giorni fa." },
  { question: "Escribe en italiano: la semana pasada.", answers: ["la settimana scorsa"], hint: "Settimana es femenino: scorsa.", explanation: "La semana pasada = la settimana scorsa." },
  { question: "Escribe en italiano lo que dice Argelia: Nací en Roma.", answers: ["Sono nata a Roma"], hint: "Nascere usa essere. Argelia es mujer: nata.", explanation: "Nací en Roma, dicho por Argelia, es Sono nata a Roma." },
];

export const PATTERN_PARTS = {
  avere: [{ t: "avere", r: "aux" }, { t: "participio", r: "participle" }],
  essere: [{ t: "essere", r: "aux" }, { t: "participio", r: "participle" }],
  negation: [{ t: "non", r: "neg" }, { t: "auxiliar", r: "aux" }, { t: "participio", r: "participle" }],
  question: [{ t: "auxiliar", r: "aux" }, { t: "participio", r: "participle" }, { t: "?", color: "#e2e8f0" }],
};
