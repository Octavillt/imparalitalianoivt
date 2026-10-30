// Dinero en euros y planes de trabajo. Euro no cambia en el plural de estas frases.
// Probabilmente es probablemente; forse es quizá.

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const es = t => ({ t, r: "essere" });
const ax = t => ({ t, r: "aux" });
const pp = t => ({ t, r: "participle" });
const art = t => ({ t, r: "art" });
const adj = t => ({ t, r: "adj" });
const wh = t => ({ t, r: "wh" });

export const MONEY_OPPOSITES = [
  {
    a: ["comprare", "comprar"],
    b: ["vendere", "vender"],
    example: {
      pts: [su("Octavio"), " ", vb("compra"), " ", art("una"), " pizza e ", su("Leslie"), " ", vb("vende"), " ", art("il"), " gelato."],
      esp: "Octavio compra una pizza y Leslie vende el helado.",
    },
  },
  {
    a: ["spendere", "gastar"],
    b: ["risparmiare", "ahorrar"],
    example: {
      pts: [{ t: "Non", r: "neg" }, " ", vb("spendo"), " tutto lo stipendio: ", vb("risparmio"), " per ", art("una"), " macchina nuova."],
      esp: "No gasto todo el sueldo: ahorro para un carro nuevo.",
    },
  },
  {
    a: ["guadagnare", "ganar dinero"],
    b: ["perdere", "perder"],
    example: {
      pts: [su("Leslie"), " ", vb("guadagna"), " duemila euro ", { t: "al", r: "articolata" }, " mese. ", su("Octavio"), " ", vb("perde"), " dieci euro."],
      esp: "Leslie gana dos mil euros al mes. Octavio pierde diez euros.",
    },
  },
  {
    a: ["ricco", "rico"],
    b: ["povero", "pobre"],
    example: {
      pts: ["Da giovane, ", su("Octavio"), " ", es("era"), " ", adj("povero"), ". Adesso ", es("è"), " ", adj("ricco"), "."],
      esp: "De joven, Octavio era pobre. Ahora es rico.",
    },
  },
  {
    a: ["caro", "caro"],
    b: ["economico", "barato"],
    example: {
      pts: [art("La"), " pizza a Venezia ", es("è"), " ", adj("cara"), ". ", art("Il"), " gelato a Napoli ", es("è"), " ", adj("economico"), "."],
      esp: "La pizza en Venecia está cara. El helado en Nápoles está barato.",
    },
  },
];

export const MONEY_WORDS = [
  ["i soldi", "el dinero"],
  ["il denaro", "el dinero, en un tono más formal"],
  ["il conto in banca", "la cuenta del banco"],
  ["la carta di credito", "la tarjeta de crédito"],
  ["i contanti", "el efectivo"],
  ["il bancomat", "el cajero"],
  ["lo stipendio", "el sueldo"],
  ["il prezzo", "el precio"],
  ["lo sconto", "el descuento"],
  ["la ricevuta", "el recibo"],
  ["l'affitto", "la renta"],
  ["le bollette", "los recibos de luz, gas o agua"],
  ["il debito", "la deuda"],
  ["il risparmio", "el ahorro"],
];

export const MONEY_PHRASES = [
  { pts: [wh("Quanto"), " ", vb("costa"), "?"], esp: "¿Cuánto cuesta?" },
  { pts: [vb("Costa"), " venti euro."], esp: "Cuesta veinte euros." },
  { pts: [vb("Pago"), " in contanti."], esp: "Pago en efectivo." },
  { pts: [vb("Pago"), " con ", art("la"), " carta."], esp: "Pago con tarjeta." },
  { pts: [vb("Risparmio"), " per ", art("una"), " macchina nuova."], esp: "Ahorro para un carro nuevo." },
  { pts: [art("Il"), " gelato ", es("è"), " in offerta."], esp: "El helado está en oferta." },
  { pts: [art("Il"), " caffè ", es("è"), " gratis."], esp: "El café es gratis." },
  { pts: [art("I"), " soldi ", es("sono"), " ", adj("pochi"), "."], esp: "Hay poco dinero." },
  { pts: [art("Il"), " denaro ", es("è"), " ", adj("poco"), "."], esp: "En tono formal, el dinero es poco." },
  { pts: [art("Un"), " euro, venti euro."], esp: "Un euro, veinte euros." },
];

export const VERB_EXAMPLES = [
  { pts: [vb("Pago"), " ", art("il"), " caffè."], esp: "Pago el café." },
  { pts: [art("Il"), " gelato ", vb("costa"), " tre euro."], esp: "El helado cuesta tres euros." },
  { pts: [su("Leslie"), " ", vb("presta"), " dieci euro a Octavio."], esp: "Leslie le presta diez euros a Octavio." },
  { pts: [su("Octavio"), " ", vb("prende"), " in prestito dieci euro da Leslie."], esp: "Octavio le pide prestados diez euros a Leslie." },
  { pts: ["In banca ", vb("cambio"), " venti euro."], esp: "En el banco cambio veinte euros." },
  { pts: [su("Leslie"), " ", ax("ha"), " ", pp("vinto"), " un premio."], esp: "Leslie ganó un premio." },
];

export const CAREER = [
  ["🔍", "cercare lavoro", "buscar trabajo"],
  ["✅", "trovare lavoro", "encontrar trabajo"],
  ["🔄", "cambiare lavoro", "cambiar de trabajo"],
  ["🗣️", "il colloquio di lavoro", "la entrevista de trabajo"],
  ["📄", "il curriculum", "el currículum"],
  ["📈", "la promozione", "el ascenso"],
  ["📝", "il contratto", "el contrato"],
  ["👤", "il capo", "el jefe o la jefa"],
  ["🤝", "il collega / la collega", "el colega / la colega"],
  ["🏪", "aprire un'attività", "abrir un negocio"],
  ["🏠", "lavorare da casa", "trabajar desde casa"],
  ["🧑‍💼", "lavorare in proprio", "trabajar por su cuenta"],
  ["🚀", "fare carriera", "hacer carrera"],
  ["🌅", "andare in pensione", "jubilarse"],
  ["🎓", "laurearsi", "titularse"],
];

export const CAREER_NOW = [
  { pts: [su("Octavio"), " ", vb("cerca"), " lavoro a Milano."], esp: "Octavio busca trabajo en Milán." },
  { pts: [su("Leslie"), " ", ax("ha"), " ", pp("trovato"), " lavoro a Roma."], esp: "Leslie encontró trabajo en Roma." },
  { pts: [su("Argelia"), " ", vb("lavora"), " in proprio."], esp: "Argelia trabaja por su cuenta." },
  { pts: [su("Leslie"), " ", vb("vuole"), " fare carriera."], esp: "Leslie quiere hacer carrera." },
  { pts: [su("Octavio"), " ", es("ha"), " ", art("un"), " collega a Milano."], esp: "Octavio tiene un colega en Milán." },
  { pts: [su("Leslie"), " ", es("ha"), " ", art("una"), " collega a Napoli."], esp: "Leslie tiene una colega en Nápoles." },
];

export const FUTURE_PLANS = [
  { pts: [vb("Risparmierò"), " per ", art("una"), " macchina nuova."], esp: "Ahorraré para un carro nuevo." },
  { pts: [su("Leslie"), " ", vb("aprirà"), " un'attività."], esp: "Leslie abrirá un negocio." },
  { pts: ["Probabilmente ", vb("lavorerò"), " da casa."], esp: "Probablemente trabajaré desde casa." },
  { pts: ["Forse ", vb("cambierò"), " lavoro."], esp: "Quizá cambie de trabajo." },
  { pts: [su("Octavio"), " ", vb("andrà"), " a ", art("un"), " colloquio di lavoro a Milano."], esp: "Octavio irá a una entrevista de trabajo en Milán." },
  { pts: [su("Argelia"), " si ", vb("laureerà"), " a Roma."], esp: "Argelia se titulará en Roma." },
  { pts: [art("Il"), " capo ", vb("andrà"), " in pensione."], esp: "El jefe se jubilará." },
];

export const PRACTICE = [
  { question: "Escribe el opuesto de «comprare».", answers: ["vendere"], hint: "Es vender.", explanation: "El opuesto de comprare es vendere: comprar / vender." },
  { question: "Escribe el opuesto de «spendere».", answers: ["risparmiare"], hint: "Es ahorrar.", explanation: "El opuesto de spendere es risparmiare: gastar / ahorrar." },
  { question: "Escribe el opuesto de «guadagnare».", answers: ["perdere"], hint: "En esta pareja, es perder dinero.", explanation: "El opuesto de guadagnare es perdere. Vincere es otra cosa: ganar un premio o un partido." },
  { question: "Escribe el opuesto de «ricco», en masculino singular.", answers: ["povero"], hint: "Es pobre, en masculino.", explanation: "Ricco / povero. En femenino sería povera." },
  { question: "Elige el opuesto de «caro»: (economico / ricco).", answers: ["economico"], hint: "Es el par de barato, en masculino singular.", explanation: "Caro / economico. Ricco es rico, no barato. En femenino: cara / economica." },
  { question: "Escribe en italiano: ¿Cuánto cuesta?", answers: ["Quanto costa?", "Quant'è?"], hint: "Costa es la forma de él de costare.", explanation: "¿Cuánto cuesta? = Quanto costa? Quant'è? también se dice." },
  { question: "Escribe en italiano: Cuesta veinte euros.", answers: ["Costa venti euro"], hint: "En esta frase, euro se escribe igual en plural.", explanation: "Cuesta veinte euros = Costa venti euro." },
  { question: "Escribe en italiano: Pago en efectivo.", answers: ["Pago in contanti", "Io pago in contanti"], hint: "Efectivo es i contanti, y va con in.", explanation: "Pago en efectivo = Pago in contanti." },
  { question: "Escribe en italiano: Pago con tarjeta.", answers: ["Pago con la carta", "Pago con carta", "Io pago con la carta", "Io pago con carta"], hint: "Tarjeta es la carta, y va con con.", explanation: "Pago con tarjeta = Pago con la carta. Pago con carta también se dice." },
  { question: "Escribe en italiano: Ahorro para un carro nuevo.", answers: ["Risparmio per una macchina nuova", "Risparmio per un'auto nuova", "Io risparmio per una macchina nuova", "Io risparmio per un'auto nuova"], hint: "El carro es la macchina. La meta va con per.", explanation: "Ahorro para un carro nuevo = Risparmio per una macchina nuova." },
  { question: "Escribe en italiano: Ahorraré para un carro nuevo.", answers: ["Risparmierò per una macchina nuova", "Risparmierò per un'auto nuova", "Io risparmierò per una macchina nuova", "Io risparmierò per un'auto nuova"], hint: "El futuro de yo lleva acento: risparmierò.", explanation: "Ahorraré para un carro nuevo = Risparmierò per una macchina nuova." },
  { question: "Escribe en italiano: Leslie abrirá un negocio.", answers: ["Leslie aprirà un'attività", "Leslie aprirà un'impresa"], hint: "Attività es femenino y empieza con vocal: un'attività.", explanation: "Leslie abrirá un negocio = Leslie aprirà un'attività." },
  { question: "Escribe en italiano: Probablemente trabajaré desde casa.", answers: ["Probabilmente lavorerò da casa", "Lavorerò probabilmente da casa"], hint: "Probablemente es probabilmente. Desde casa se dice da casa.", explanation: "Probablemente trabajaré desde casa = Probabilmente lavorerò da casa." },
  { question: "Escribe en italiano: Quizá cambie de trabajo.", answers: ["Forse cambierò lavoro", "Forse cambierò il lavoro"], hint: "Quizá es forse. En el futuro de cambiare no se escribe la i.", explanation: "Quizá cambie de trabajo = Forse cambierò lavoro." },
  { question: "Escribe en italiano: Octavio irá a una entrevista de trabajo en Milán.", answers: ["Octavio andrà a un colloquio di lavoro a Milano"], hint: "La entrevista de trabajo es il colloquio di lavoro. El futuro de andare es andrà.", explanation: "Octavio irá a una entrevista de trabajo en Milán = Octavio andrà a un colloquio di lavoro a Milano." },
  { question: "Traduce al español: forse.", answers: ["quizá", "quizás", "tal vez"], answerLang: "es", hint: "Es menos firme que probabilmente.", explanation: "Forse = quizá. Probabilmente es probablemente." },
  { question: "Traduce al español: probabilmente.", answers: ["probablemente"], answerLang: "es", hint: "Habla de un plan que se ve probable.", explanation: "Probabilmente = probablemente." },
  { question: "Completa: I soldi ___ pochi.", answers: ["sono"], hint: "Soldi es un plural.", explanation: "I soldi sono pochi. El verbo va en plural y pochi concuerda." },
  { question: "Escribe en italiano: Hay poco dinero.", answers: ["I soldi sono pochi", "Il denaro è poco", "C'è poco denaro", "Ci sono pochi soldi"], hint: "La forma de conversación es i soldi, en plural.", explanation: "Hay poco dinero = I soldi sono pochi. Il denaro è poco se dice en un tono más formal." },
  { question: "Escribe en italiano: Está en oferta.", answers: ["È in saldo", "È in offerta"], hint: "La frase de la lección usa saldo.", explanation: "Está en oferta = È in saldo. È in offerta también se dice." },
  { question: "Escribe en italiano: Es gratis.", answers: ["È gratis", "È gratuito", "È gratuita"], hint: "Gratis no cambia de género.", explanation: "Es gratis = È gratis. È gratuito y è gratuita también se dicen, y esos sí concuerdan." },
];
