// Partitivo y cantidades. Di + artículo es «un poco de» o «unos».
// Tras una medida, di va sin artículo. En negativo, estas frases lo omiten.
const vb = t => ({ t, r: "verb" });
const ng = t => ({ t, r: "neg" });
const wh = t => ({ t, r: "wh" });
const adj = t => ({ t, r: "adj" });
const pr = t => ({ t, r: "prep" });

export const NOUN_GROUPS = [
  {
    title: "Incontables",
    rule: "En esta lección se tratan como cantidad, no como unidades sueltas.",
    items: [
      ["il pane", "el pan"],
      ["il latte", "la leche"],
      ["l'acqua", "el agua"],
      ["il riso", "el arroz"],
      ["la pasta", "la pasta"],
      ["lo zucchero", "el azúcar"],
      ["il formaggio", "el queso"],
    ],
  },
  {
    title: "Contables",
    rule: "Se cuentan uno por uno y tienen plural.",
    items: [
      ["la mela → le mele", "la manzana → las manzanas"],
      ["il pomodoro → i pomodori", "el jitomate → los jitomates"],
      ["l'uovo → le uova", "el huevo → los huevos"],
    ],
  },
];

export const PARTITIVES = [
  ["il", "del", "del pane", "un poco de pan"],
  ["lo", "dello", "dello zucchero", "un poco de azúcar"],
  ["l'", "dell'", "dell'acqua", "un poco de agua"],
  ["la", "della", "della pasta", "un poco de pasta"],
  ["i", "dei", "dei pomodori", "unos jitomates"],
  ["gli", "degli", "degli spaghetti", "un poco de espagueti"],
  ["le", "delle", "delle mele", "unas manzanas"],
];

export const LITTLE = [
  { pts: ["un po' ", pr("di"), " pane"], esp: "un poco de pan" },
  { pts: ["un po' ", pr("d'"), "acqua"], esp: "un poco de agua" },
];

export const SOME = [
  { pts: [adj("alcuni"), " pomodori"], esp: "algunos jitomates" },
  { pts: [adj("qualche"), " pomodoro"], esp: "algunos jitomates" },
  { pts: [adj("alcune"), " mele"], esp: "algunas manzanas" },
  { pts: [adj("qualche"), " mela"], esp: "algunas manzanas" },
];

export const AGREEMENT = [
  { pts: [adj("molta"), " acqua"], esp: "mucha agua" },
  { pts: [adj("pochi"), " pomodori"], esp: "pocos jitomates" },
  { pts: [adj("tante"), " mele"], esp: "muchas manzanas" },
  { pts: [adj("troppo"), " zucchero"], esp: "demasiado azúcar" },
  { pts: [adj("abbastanza"), " pane"], esp: "suficiente pan" },
  { pts: [adj("abbastanza"), " mele"], esp: "suficientes manzanas" },
];

export const QUESTIONS = [
  { pts: [wh("Quanta"), " acqua ", vb("bevi?")], esp: "¿Cuánta agua tomas?" },
  { pts: [wh("Quanti"), " pomodori ", vb("compri?")], esp: "¿Cuántos jitomates compras?" },
  { pts: [wh("Quante"), " mele ", vb("vuoi?")], esp: "¿Cuántas manzanas quieres?" },
  { pts: [wh("Quanto"), " ", vb("costa?")], esp: "¿Cuánto cuesta?" },
];

export const UNITS = [
  ["un chilo di pomodori", "un kilo de jitomates"],
  ["mezzo chilo di pasta", "medio kilo de pasta"],
  ["un etto di formaggio", "cien gramos de queso"],
  ["un litro di latte", "un litro de leche"],
  ["una bottiglia di latte", "una botella de leche"],
  ["una bottiglia d'acqua", "una botella de agua"],
  ["un pezzo di pane", "un pedazo de pan"],
  ["una fetta di torta", "una rebanada de pastel"],
  ["un bicchiere d'acqua", "un vaso de agua"],
  ["una tazza di caffè", "una taza de café"],
  ["una scatola di pasta", "una caja de pasta"],
  ["una lattina di birra", "una lata de cerveza"],
  ["un pacco di riso", "un paquete de arroz"],
];

export const NEGATIVE = [
  { pts: [ng("Non"), " ", vb("ho"), " pane."], esp: "No tengo pan." },
  { pts: [ng("Non"), " ", vb("ho"), " latte."], esp: "No tengo leche." },
  { pts: [ng("Non"), " ", vb("ho"), " zucchero."], esp: "No tengo azúcar." },
  { pts: [ng("Non"), " ", vb("ho"), " acqua."], esp: "No tengo agua." },
];

export const NE_EXAMPLES = [
  { pts: [wh("Quante"), " mele ", vb("vuoi?")], esp: "¿Cuántas manzanas quieres?" },
  { pts: ["Ne ", vb("voglio"), " due."], esp: "Quiero dos." },
  { pts: [wh("Quanta"), " acqua ", vb("bevi?")], esp: "¿Cuánta agua tomas?" },
  { pts: ["Ne ", vb("bevo"), " un bicchiere."], esp: "Tomo un vaso." },
];

export const PRACTICE = [
  { question: "Escribe el partitivo de il pane.", answers: ["del pane"], hint: "Di + il se escribe del.", explanation: "Di + il pane = del pane." },
  { question: "Escribe el partitivo de lo zucchero.", answers: ["dello zucchero"], hint: "Di + lo se escribe dello.", explanation: "Di + lo zucchero = dello zucchero." },
  { question: "Escribe el partitivo de l'acqua.", answers: ["dell'acqua"], hint: "Di + l' se escribe dell'.", explanation: "Di + l'acqua = dell'acqua." },
  { question: "Escribe el partitivo de la pasta.", answers: ["della pasta"], hint: "Di + la se escribe della.", explanation: "Di + la pasta = della pasta." },
  { question: "Escribe el partitivo de i pomodori.", answers: ["dei pomodori"], hint: "Di + i se escribe dei.", explanation: "Di + i pomodori = dei pomodori." },
  { question: "Escribe el partitivo de gli spaghetti.", answers: ["degli spaghetti"], hint: "Di + gli se escribe degli.", explanation: "Di + gli spaghetti = degli spaghetti." },
  { question: "Escribe el partitivo de le mele.", answers: ["delle mele"], hint: "Di + le se escribe delle.", explanation: "Di + le mele = delle mele." },
  { question: "Escribe en italiano, con un po': un poco de pan.", answers: ["un po' di pane"], hint: "Po' lleva apóstrofo y no lleva acento.", explanation: "Un poco de pan = un po' di pane." },
  { question: "Escribe en italiano, con un po': un poco de agua.", answers: ["un po' d'acqua", "un po' di acqua"], hint: "Ante vocal, di puede escribirse d'.", explanation: "Un poco de agua = un po' d'acqua. Un po' di acqua también se entiende." },
  { question: "Escribe en italiano, con alcune: algunas manzanas.", answers: ["alcune mele"], hint: "Alcune va con un femenino plural.", explanation: "Algunas manzanas = alcune mele." },
  { question: "Escribe en italiano, con qualche: algunas manzanas.", answers: ["qualche mela"], hint: "Qualche va con el sustantivo en singular.", explanation: "Algunas manzanas, con qualche, se dice qualche mela." },
  { question: "Escribe en italiano: mucha agua.", answers: ["molta acqua", "molt'acqua"], hint: "Acqua es femenino singular: molta.", explanation: "Mucha agua = molta acqua / molt'acqua; la elisión es facultativa." },
  { question: "Escribe en italiano: pocos jitomates.", answers: ["pochi pomodori"], hint: "Pomodori es masculino plural: pochi.", explanation: "Pocos jitomates = pochi pomodori." },
  { question: "Escribe en italiano: muchas manzanas.", answers: ["tante mele", "molte mele"], hint: "Mele es femenino plural: tante.", explanation: "Muchas manzanas = tante mele / molte mele; ambas formas concuerdan en femenino plural." },
  { question: "Escribe en italiano: demasiado azúcar.", answers: ["troppo zucchero"], hint: "Zucchero es masculino singular: troppo.", explanation: "Demasiado azúcar = troppo zucchero." },
  { question: "Escribe en italiano: suficiente pan.", answers: ["abbastanza pane"], hint: "Abbastanza no cambia de forma.", explanation: "Suficiente pan = abbastanza pane." },
  { question: "Escribe en italiano: ¿Cuánta agua tomas?", answers: ["Quanta acqua bevi?", "Quant'acqua bevi?"], hint: "Acqua es femenino singular: quanta. Tomar, aquí, es bere.", explanation: "¿Cuánta agua tomas? = Quanta acqua bevi? / Quant'acqua bevi?" },
  { question: "Escribe en italiano: ¿Cuántos jitomates compras?", answers: ["Quanti pomodori compri?"], hint: "Pomodori es masculino plural: quanti.", explanation: "¿Cuántos jitomates compras? = Quanti pomodori compri?" },
  { question: "Escribe en italiano: ¿Cuánto cuesta?", answers: ["Quanto costa?"], hint: "Para el precio se usa quanto.", explanation: "¿Cuánto cuesta? = Quanto costa?" },
  { question: "Escribe en italiano: un kilo de jitomates.", answers: ["un chilo di pomodori"], hint: "Tras la medida va di, sin artículo.", explanation: "Un kilo de jitomates = un chilo di pomodori." },
  { question: "Escribe en italiano: No tengo pan.", answers: ["Non ho pane", "Non ho del pane", "Io non ho pane"], hint: "La forma de la lección omite el partitivo.", explanation: "No tengo pan = Non ho pane. Non ho del pane también se oye." },
  { question: "Responde en italiano: Quante mele vuoi? Quiero dos.", answers: ["Ne voglio due"], hint: "Ne sustituye las manzanas ya dichas.", explanation: "Quiero dos = Ne voglio due." },
];
