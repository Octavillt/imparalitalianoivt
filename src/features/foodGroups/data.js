// Grupos de alimentos, sabores y una comida en Roma.
// L'uovo es masculino; le uova es femenino plural, como le braccia.
const vb = t => ({ t, r: "verb" });
const art = t => ({ t, r: "art" });
const ng = t => ({ t, r: "neg" });
const adj = t => ({ t, r: "adj" });
const es = t => ({ t, r: "essere" });
const pr = t => ({ t, r: "prep" });
const ar = t => ({ t, r: "articolata" });
const su = t => ({ t, r: "subject" });

export const FOOD_GROUPS = [
  {
    name: "I cereali",
    translation: "Cereales",
    icon: "🍞",
    foods: [
      ["il pane", "el pan"],
      ["la pasta", "la pasta"],
      ["il riso", "el arroz"],
    ],
    example: "A Roma mangiamo la pasta.",
    meaning: "En Roma comemos pasta.",
  },
  {
    name: "La frutta",
    translation: "La fruta",
    icon: "🍎",
    foods: [
      ["la mela", "la manzana"],
      ["la banana", "el plátano"],
      ["l'arancia", "la naranja"],
    ],
    example: "La frutta è fresca.",
    meaning: "La fruta está fresca.",
  },
  {
    name: "La verdura",
    translation: "La verdura",
    icon: "🥕",
    foods: [
      ["il pomodoro", "el jitomate"],
      ["la carota", "la zanahoria"],
      ["i funghi", "los hongos"],
    ],
    example: "Compro i pomodori a Napoli.",
    meaning: "Compro jitomates en Nápoles.",
  },
  {
    name: "Le proteine",
    translation: "Proteínas",
    icon: "🥚",
    foods: [
      ["la carne", "la carne"],
      ["il pollo", "el pollo"],
      ["il pesce", "el pescado"],
      ["il prosciutto", "el jamón"],
      ["i legumi", "las legumbres"],
      ["le uova", "los huevos"],
    ],
    example: "Leslie mangia le uova a colazione.",
    meaning: "Leslie come huevos en el desayuno.",
  },
  {
    name: "I latticini",
    translation: "Lácteos",
    icon: "🥛",
    foods: [
      ["il latte", "la leche"],
      ["il formaggio", "el queso"],
      ["lo yogurt", "el yogur"],
      ["la mozzarella", "la mozzarella"],
    ],
    example: "Bevo il latte.",
    meaning: "Tomo leche.",
  },
  {
    name: "I grassi",
    translation: "Grasas",
    icon: "🫒",
    foods: [
      ["l'olio d'oliva", "el aceite de oliva"],
      ["il burro", "la mantequilla"],
    ],
    example: "Metto l'olio d'oliva sulla pasta.",
    meaning: "Le echo aceite de oliva a la pasta.",
  },
  {
    name: "I dolci",
    translation: "Dulces",
    icon: "🍰",
    foods: [
      ["lo zucchero", "el azúcar"],
      ["il cioccolato", "el chocolate"],
      ["il gelato", "el helado"],
      ["la torta", "el pastel"],
    ],
    example: "Prendiamo un gelato a Firenze.",
    meaning: "Pedimos un helado en Florencia.",
  },
  {
    name: "Le bevande",
    translation: "Bebidas",
    icon: "☕",
    foods: [
      ["l'acqua", "el agua"],
      ["il caffè", "el café"],
      ["il tè", "el té"],
      ["il succo", "el jugo"],
      ["il vino", "el vino"],
      ["la birra", "la cerveza"],
    ],
    example: "Leslie beve un caffè.",
    meaning: "Leslie toma un café.",
  },
];

export const FOOD_ADJECTIVES = [
  ["dolce", "dulce", "Il gelato è dolce.", "El helado está dulce."],
  ["salato", "salado", "Il prosciutto è salato.", "El jamón está salado."],
  ["amaro", "amargo", "Il caffè è amaro.", "El café está amargo."],
  ["aspro", "agrio", "Il limone è aspro.", "El limón amarillo está agrio."],
  ["piccante", "picante", "La salsa è piccante.", "La salsa está picante."],
  ["saporito", "sabroso", "Il formaggio è saporito.", "El queso está sabroso."],
  ["fresco", "fresco", "Il pesce è fresco.", "El pescado está fresco."],
  ["crudo", "crudo", "Il pomodoro è crudo.", "El jitomate está crudo."],
  ["cotto", "cocido", "Il pollo è cotto.", "El pollo está cocido."],
  ["caldo", "caliente", "Il tè è caldo.", "El té está caliente."],
  ["freddo", "frío", "L'acqua è fredda.", "El agua está fría."],
];

export const EXTRA_WORDS = [
  ["la colazione", "el desayuno", "Faccio colazione a Roma.", "Desayuno en Roma."],
  ["il pranzo", "la comida", "Pranziamo a Firenze.", "Al mediodía comemos en Florencia."],
  ["la cena", "la cena", "Ceniamo a Napoli.", "Cenamos en Nápoles."],
  ["lo spuntino", "el tentempié", "Prendo un frutto come spuntino.", "Como una fruta de tentempié."],
  ["il burro", "la mantequilla", "Metto il burro sul pane.", "Le unto mantequilla al pan."],
  ["l'aceto", "el vinagre", "Metto l'aceto nell'insalata.", "Le echo vinagre a la ensalada."],
  ["l'olio", "el aceite", "Uso l'olio d'oliva.", "Uso aceite de oliva."],
  ["il pesce", "el pescado; también el pez", "Mi piace il pesce.", "Me gusta el pescado."],
  ["la salsa", "la salsa", "La salsa è piccante.", "La salsa está picante."],
  ["il succo", "el jugo", "Bevo un succo d'arancia.", "Tomo un jugo de naranja."],
];

export const TASTES = [
  { pts: ["Mi ", vb("piace"), " ", art("il"), " pesce."], esp: "Me gusta el pescado." },
  { pts: [ng("Non"), " mi ", vb("piacciono"), " ", art("i"), " funghi."], esp: "No me gustan los hongos." },
  { pts: [vb("Preferisco"), " ", art("il"), " riso."], esp: "Prefiero el arroz." },
  { pts: [su("Leslie"), " ", es("è"), " ", adj("vegetariana.")], esp: "Leslie es vegetariana." },
  { pts: [es("Sono"), " ", adj("vegetariana.")], esp: "Soy vegetariana." },
  { pts: [es("Sono"), " ", adj("vegetariano.")], esp: "Soy vegetariano." },
  { pts: [su("Octavio"), " ", es("è"), " ", adj("allergico"), " ", ar("alle"), " noci."], esp: "Octavio es alérgico a las nueces." },
  { pts: [es("Sono"), " ", adj("allergico"), " ", ar("alle"), " noci."], esp: "Soy alérgico a las nueces." },
  { pts: [es("Sono"), " ", adj("allergica"), " ", ar("alle"), " noci."], esp: "Soy alérgica a las nueces." },
];

export const RESTAURANT = [
  { pts: [vb("Vorrei"), " un piatto ", pr("di"), " pasta."], esp: "Quisiera un plato de pasta." },
  { pts: ["Per me ", art("una"), " pizza."], esp: "Para mí, una pizza." },
  { pts: [art("Il"), " conto, per favore."], esp: "La cuenta, por favor." },
];

export const CONVERSATION = [
  ["Buonasera, signora. Cosa prende?", "Buenas noches, señora. ¿Qué va a pedir?"],
  ["Buonasera.", "Buenas noches."],
  ["Vuole la carne?", "¿Quiere carne?"],
  ["Sono vegetariana. Vorrei un piatto di pasta.", "Soy vegetariana. Quisiera un plato de pasta."],
  ["La pasta al pomodoro va bene?", "¿Está bien la pasta al jitomate?"],
  ["Sì, grazie. E un'acqua, per favore.", "Sí, gracias. Y un agua, por favor."],
  ["Vuole altro?", "¿Desea algo más?"],
  ["No, grazie. Il conto, per favore.", "No, gracias. La cuenta, por favor."],
  ["Ecco a Lei.", "Aquí tiene."],
];

export const PRACTICE = [
  { question: "Escribe el plural con artículo de l'uovo.", answers: ["le uova"], hint: "El plural es femenino y termina en -a, como le braccia.", explanation: "L'uovo → le uova. El adjetivo va en femenino plural: le uova fresche." },
  { question: "¿Qué significa «il burro» en la cocina?", answers: ["la mantequilla", "mantequilla"], answerLang: "es", hint: "Es lo que se unta en el pan.", explanation: "Il burro es la mantequilla. El animal se llama l'asino." },
  { question: "¿Qué significa «l'aceto»?", answers: ["el vinagre", "vinagre"], answerLang: "es", hint: "Es el líquido agrio de la ensalada.", explanation: "L'aceto es el vinagre. El aceite es l'olio." },
  { question: "¿Qué significa «l'olio»?", answers: ["el aceite", "aceite"], answerLang: "es", hint: "L'olio d'oliva es el de oliva.", explanation: "L'olio es el aceite." },
  { question: "¿Qué significa «il pesce»?", answers: ["el pescado", "pescado", "el pez", "pez"], answerLang: "es", hint: "Puede ser la comida o el animal.", explanation: "Il pesce es el pescado cuando se come, y también el pez." },
  { question: "¿Qué significa «il succo»?", answers: ["el jugo", "jugo"], answerLang: "es", hint: "Un succo d'arancia es de naranja.", explanation: "Il succo es el jugo." },
  { question: "¿Qué significa «la salsa»?", answers: ["la salsa", "salsa"], answerLang: "es", hint: "Coincide con el español.", explanation: "La salsa significa salsa." },
  { question: "Escribe en italiano: Me gusta el pescado.", answers: ["Mi piace il pesce"], hint: "Con un singular, el verbo es piace.", explanation: "Me gusta el pescado = Mi piace il pesce." },
  { question: "Escribe en italiano: No me gustan los hongos.", answers: ["Non mi piacciono i funghi"], hint: "Con un plural, el verbo es piacciono.", explanation: "No me gustan los hongos = Non mi piacciono i funghi." },
  { question: "Escribe en italiano: Prefiero el arroz.", answers: ["Preferisco il riso", "Io preferisco il riso"], hint: "Yo de preferire es preferisco.", explanation: "Prefiero el arroz = Preferisco il riso." },
  { question: "Escribe en italiano: Soy vegetariana.", answers: ["Sono vegetariana", "Io sono vegetariana"], hint: "En femenino termina en -a.", explanation: "Soy vegetariana = Sono vegetariana. En masculino: Sono vegetariano." },
  { question: "Escribe en italiano: Soy vegetariano.", answers: ["Sono vegetariano", "Io sono vegetariano"], hint: "En masculino termina en -o.", explanation: "Soy vegetariano = Sono vegetariano." },
  { question: "Escribe en italiano: Soy alérgico a las nueces.", answers: ["Sono allergico alle noci", "Io sono allergico alle noci"], hint: "A + le se escribe alle.", explanation: "Soy alérgico a las nueces = Sono allergico alle noci." },
  { question: "Escribe en italiano: Soy alérgica a las nueces.", answers: ["Sono allergica alle noci", "Io sono allergica alle noci"], hint: "El femenino es allergica. A + le se escribe alle.", explanation: "Soy alérgica a las nueces = Sono allergica alle noci." },
  { question: "Escribe en italiano: Quisiera un plato de pasta.", answers: ["Vorrei un piatto di pasta"], hint: "Vorrei equivale a quisiera.", explanation: "Quisiera un plato de pasta = Vorrei un piatto di pasta." },
  { question: "Escribe en italiano: Para mí, una pizza.", answers: ["Per me una pizza"], hint: "Pizza es femenino: una.", explanation: "Para mí, una pizza = Per me una pizza." },
  { question: "Escribe en italiano: La cuenta, por favor.", answers: ["Il conto, per favore", "Il conto"], hint: "Per favore es la cortesía y puede omitirse.", explanation: "La cuenta, por favor = Il conto, per favore." },
  { question: "Escribe en italiano: El agua está fría.", answers: ["L'acqua è fredda"], hint: "Acqua es femenino: fredda.", explanation: "El agua está fría = L'acqua è fredda." },
  { question: "Escribe en italiano: El té está caliente.", answers: ["Il tè è caldo"], hint: "Tè lleva acento grave. Caldo habla de temperatura.", explanation: "El té está caliente = Il tè è caldo." },
  { question: "Escribe en italiano: el desayuno.", answers: ["la colazione"], hint: "Es femenino.", explanation: "El desayuno = la colazione." },
  { question: "Escribe en italiano: la comida del mediodía.", answers: ["il pranzo"], hint: "Es masculino.", explanation: "La comida del mediodía = il pranzo." },
  { question: "Escribe en italiano: el tentempié.", answers: ["lo spuntino"], hint: "Empieza con s + consonante: lo.", explanation: "El tentempié = lo spuntino." },
];
