// Mestieri e professioni: patrones de género (-o/-a, -iere/-iera, -ista,
// -ante/-ente, -ore → -trice/-ora), especiales, lugares de trabajo y cómo
// decir la profesión. Los tokens llevan { t, r }: sujeto y verbo.
const su = t => ({ t, r: "subject" });
const vv = t => ({ t, r: "verb" });

// Patrones de género: [masculino, femenino, traducción]. En -ista y -ante/-ente
// la forma es igual para ambos.
export const JOB_CATEGORIES = [
  {
    label: "-o / -a", icon: "👷", color: "#4ade80",
    note: "Cambia la vocal final: -o → -a.",
    jobs: [
      ["il cuoco", "la cuoca", "cocinero / cocinera"],
      ["il commesso", "la commessa", "dependiente / empleado de tienda"],
      ["l'operaio", "l'operaia", "obrero / obrera"],
      ["il contadino", "la contadina", "campesino / campesina"],
      ["il postino", "la postina", "cartero / cartera"],
    ],
  },
  {
    label: "-iere / -iera", icon: "🍽️", color: "#fbbf24",
    note: "Cambia -iere → -iera.",
    jobs: [
      ["il cameriere", "la cameriera", "mesero / mesera"],
      ["il cassiere", "la cassiera", "cajero / cajera"],
      ["l'infermiere", "l'infermiera", "enfermero / enfermera"],
    ],
  },
  {
    label: "-ista (igual)", icon: "🦷", color: "#60a5fa",
    note: "Una sola forma para ambos géneros; cambia solo el artículo.",
    jobs: [
      ["il / la dentista", "il / la dentista", "dentista"],
      ["il / la farmacista", "il / la farmacista", "farmacéutico / farmacéutica"],
      ["il / la giornalista", "il / la giornalista", "periodista"],
      ["l'elettricista", "l'elettricista", "electricista"],
      ["l'autista", "l'autista", "chofer"],
    ],
  },
  {
    label: "-ante / -ente (igual)", icon: "🎤", color: "#c084fc",
    note: "Una sola forma para ambos géneros.",
    jobs: [
      ["il / la cantante", "il / la cantante", "cantante"],
      ["l'insegnante", "l'insegnante", "maestro / maestra, profesor / profesora"],
      ["il / la dirigente", "il / la dirigente", "directivo / directiva"],
    ],
  },
  {
    label: "-ore → -trice", icon: "🎭", color: "#f472b6",
    note: "El femenino cambia -ore por -trice.",
    jobs: [
      ["l'attore", "l'attrice", "actor / actriz"],
      ["lo scrittore", "la scrittrice", "escritor / escritora"],
      ["il pittore", "la pittrice", "pintor / pintora"],
      ["il programmatore", "la programmatrice", "programador / programadora"],
    ],
  },
  {
    label: "-ore → -ora", icon: "🐑", color: "#fb923c",
    note: "Algunos cambian -ore por -ora.",
    jobs: [
      ["il pastore", "la pastora", "pastor / pastora"],
    ],
  },
  {
    label: "Especiales", icon: "🎓", color: "#f87171",
    note: "Formas propias que conviene memorizar.",
    jobs: [
      ["il dottore", "la dottoressa", "doctor / doctora"],
      ["il professore", "la professoressa", "profesor / profesora"],
      ["lo studente", "la studentessa", "estudiante"],
    ],
  },
  {
    label: "Otros oficios", icon: "🛠️", color: "#94a3b8",
    note: "Oficios con formas variadas; varios usan el masculino como forma común para ambos géneros.",
    jobs: [
      ["il medico", "il medico", "médico / médica"],
      ["il chirurgo", "il chirurgo", "cirujano / cirujana"],
      ["il veterinario", "la veterinaria", "veterinario / veterinaria"],
      ["l'avvocato", "l'avvocato", "abogado / abogada"],
      ["l'ingegnere", "l'ingegnere", "ingeniero / ingeniera"],
      ["l'architetto", "l'architetto", "arquitecto / arquitecta"],
      ["il poliziotto", "la poliziotta", "policía"],
      ["il vigile del fuoco", "il vigile del fuoco", "bombero / bombera"],
      ["l'idraulico", "l'idraulico", "plomero / plomera"],
      ["il meccanico", "il meccanico", "mecánico / mecánica"],
      ["il parrucchiere", "la parrucchiera", "estilista / peluquero / peluquera"],
      ["il barbiere", "il barbiere", "barbero / barbera"],
      ["la casalinga", "la casalinga", "ama de casa"],
    ],
  },
];

// Lugares de trabajo.
export const WORKPLACES = [
  ["l'ospedale", "el hospital"],
  ["la scuola", "la escuela"],
  ["il ristorante", "el restaurante"],
  ["il negozio", "la tienda"],
  ["l'ufficio", "la oficina"],
  ["la fabbrica", "la fábrica"],
  ["la banca", "el banco"],
  ["la farmacia", "la farmacia"],
];

// Profesión y acción actual: primero la profesión, luego lo que hace ahora.
export const JOB_ACTIONS = [
  { job: "Leslie è infermiera.", action: [su("Leslie"), " ", vv("sta"), " aiutando un paziente."], esp: "Leslie es enfermera. Está ayudando a un paciente." },
  { job: "Octavio è insegnante.", action: [su("Octavio"), " ", vv("sta"), " insegnando l'italiano."], esp: "Octavio es maestro. Está enseñando italiano." },
  { job: "Argelia è cameriera.", action: [su("Argelia"), " ", vv("sta"), " servendo il caffè."], esp: "Argelia es mesera. Está sirviendo el café." },
  { job: "Octavio è programmatore.", action: [su("Octavio"), " ", vv("sta"), " scrivendo codice."], esp: "Octavio es programador. Está escribiendo código." },
];

// Las 3 preguntas para hablar de oficios, en un diálogo.
export const JOB_DIALOG = [
  { q: "Che lavoro fai?", qEsp: "¿A qué te dedicas? (tú)", a: "Sono insegnante.", aEsp: "Soy maestro." },
  { q: "Dove lavori?", qEsp: "¿Dónde trabajas?", a: "Lavoro in una scuola.", aEsp: "Trabajo en una escuela." },
  { q: "Che lavoro fa Argelia?", qEsp: "¿A qué se dedica Argelia? (usted / ella)", a: "È infermiera.", aEsp: "Es enfermera." },
];

export const PRACTICE = [
  { question: "Completa: Sono ___ (maestro, sin artículo).", answers: ["insegnante"], hint: "La profesión va sin artículo con essere", explanation: "Sono insegnante = Soy maestro. Con essere la profesión va sin artículo." },
  { question: "Completa: Faccio l'___ (maestro, con artículo).", answers: ["insegnante"], hint: "Con fare el verbo es faccio", explanation: "Faccio l'insegnante = Me dedico a la enseñanza / Soy maestro. Con fare va el artículo." },
  { question: "Elige la forma correcta: Leslie è (infermiere / infermiera).", answers: ["infermiera"], hint: "Leslie es mujer", explanation: "Leslie è infermiera: el femenino de l'infermiere es l'infermiera." },
  { question: "Elige la forma correcta: il cameriere → la (cameriere / cameriera).", answers: ["cameriera"], hint: "-iere cambia a -iera", explanation: "il cameriere → la cameriera: los -iere pasan a -iera en femenino." },
  { question: "Elige la forma correcta: l'attore → l'(attrice / attora).", answers: ["attrice"], hint: "-ore cambia a -trice", explanation: "l'attore → l'attrice: el femenino cambia -ore por -trice." },
  { question: "Elige la forma correcta: (il / la) dentista.", answers: ["il", "la"], hint: "En -ista la forma es igual para ambos", explanation: "il / la dentista: los -ista tienen una sola forma; cambia solo el artículo." },
  { question: "Elige la forma correcta: il dottore → la (dottora / dottoressa).", answers: ["dottoressa"], hint: "Es un especial", explanation: "il dottore → la dottoressa: forma especial que se memoriza." },
  { question: "Traduce al italiano: ¿A qué te dedicas?", answers: ["Che lavoro fai?", "Che lavoro fai"], hint: "Lavoro = trabajo", explanation: "¿A qué te dedicas? = Che lavoro fai?" },
  { question: "Traduce al italiano: ¿Dónde trabajas?", answers: ["Dove lavori?", "Dove lavori"], hint: "Lavorare → lavori", explanation: "¿Dónde trabajas? = Dove lavori?" },
  { question: "Completa: Lavoro in ___ ospedale. (en el hospital)", answers: ["un"], hint: "Artículo indefinido masculino", explanation: "Lavoro in un ospedale = Trabajo en un hospital." },
  { question: "Completa: Argelia è cameriera. ___ servendo il caffè. (stare)", answers: ["Sta"], hint: "Forma de lei", explanation: "Argelia è cameriera. Sta servendo il caffè. = Argelia es mesera. Está sirviendo el café." },
  { question: "Elige la forma correcta: lo studente → la (studentessa / studenta).", answers: ["studentessa"], hint: "Es un especial", explanation: "lo studente → la studentessa: forma especial que se memoriza." },
  { question: "Traduce al español: Che lavoro fa?", answers: ["¿A qué se dedica?", "¿A qué te dedicas?", "¿A qué se dedica? (usted)"], answerLang: "es", hint: "Fa es tercera persona", explanation: "Che lavoro fa? = ¿A qué se dedica? (usted o él/ella)." },
  { question: "Completa: Il / la ___ vende farmaci. (farmacéutico)", answers: ["farmacista"], hint: "Termina en -ista", explanation: "il / la farmacista: los -ista tienen una sola forma para ambos géneros." },
];
