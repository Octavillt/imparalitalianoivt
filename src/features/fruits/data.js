// Frutta e verdura: vocabulario con género y artículo, plurales y frases.
const es = t => ({ t, r: "essere" });
const dm = t => ({ t, r: "demo" });
const art = t => ({ t, r: "art" });

export const FRUITS = [
  { it: "la mela", esp: "manzana", emoji: "🍎", color: "#ef4444" },
  { it: "la banana", esp: "plátano", emoji: "🍌", color: "#eab308" },
  { it: "l'arancia", esp: "naranja", emoji: "🍊", color: "#f97316" },
  { it: "la fragola", esp: "fresa", emoji: "🍓", color: "#ec4899" },
  { it: "l'uva", esp: "uva", emoji: "🍇", color: "#a855f7" },
  { it: "l'anguria", esp: "sandía", emoji: "🍉", color: "#22c55e" },
  { it: "l'ananas", esp: "piña", emoji: "🍍", color: "#ca8a04" },
  { it: "il mango", esp: "mango", emoji: "🥭", color: "#f59e0b" },
  { it: "la pera", esp: "pera", emoji: "🍐", color: "#84cc16" },
  { it: "la ciliegia", esp: "cereza", emoji: "🍒", color: "#dc2626" },
  { it: "la pesca", esp: "durazno", emoji: "🍑", color: "#fb923c" },
  { it: "il limone", esp: "limón amarillo", emoji: "🍋", color: "#facc15" },
  { it: "il cocco", esp: "coco", emoji: "🥥", color: "#78716c" },
  { it: "il melone", esp: "melón", emoji: "🍈", color: "#65a30d" },
  { it: "il kiwi", esp: "kiwi", emoji: "🥝", color: "#4ade80" },
  { it: "il mirtillo", esp: "arándano", emoji: "🫐", color: "#6366f1" },
  { it: "l'avocado", esp: "aguacate", emoji: "🥑", color: "#16a34a" },
  { it: "il pomodoro", esp: "jitomate", emoji: "🍅", color: "#b91c1c" },
  { it: "il lime", esp: "limón verde", emoji: "🍋‍🟩", color: "#4ade80" },
  { it: "il melograno", esp: "granada", emoji: "🔴", color: "#be123c" },
];

export const VEGETABLES = [
  { it: "la carota", esp: "zanahoria", emoji: "🥕", color: "#f97316" },
  { it: "i broccoli", esp: "brócoli", emoji: "🥦", color: "#16a34a" },
  { it: "la lattuga", esp: "lechuga", emoji: "🥬", color: "#4ade80" },
  { it: "il cetriolo", esp: "pepino", emoji: "🥒", color: "#22c55e" },
  { it: "la cipolla", esp: "cebolla", emoji: "🧅", color: "#c084fc" },
  { it: "l'aglio", esp: "ajo", emoji: "🧄", color: "#cbd5e1" },
  { it: "la patata", esp: "papa", emoji: "🥔", color: "#ca8a04" },
  { it: "la patata dolce", esp: "camote", emoji: "🍠", color: "#fb923c" },
  { it: "il mais", esp: "maíz", emoji: "🌽", color: "#facc15" },
  { it: "il peperoncino", esp: "chile", emoji: "🌶️", color: "#dc2626" },
  { it: "il peperone", esp: "pimiento", emoji: "🫑", color: "#15803d" },
  { it: "il fungo", esp: "hongo", emoji: "🍄", color: "#b45309" },
  { it: "la melanzana", esp: "berenjena", emoji: "🍆", color: "#a855f7" },
  { it: "i piselli", esp: "chícharos", emoji: "🫛", color: "#65a30d" },
  { it: "i fagioli", esp: "frijoles", emoji: "🫘", color: "#92400e" },
  { it: "la zucca", esp: "calabaza", emoji: "🎃", color: "#ea580c" },
  { it: "l'oliva", esp: "aceituna", emoji: "🫒", color: "#84cc16" },
  { it: "lo zenzero", esp: "jengibre", emoji: "🫚", color: "#d97706" },
  { it: "l'insalata", esp: "ensalada", emoji: "🥗", color: "#34d399" },
  { it: "gli spinaci", esp: "espinacas", emoji: "🍃", color: "#16a34a" },
  { it: "la zucchina", esp: "calabacita", emoji: "🥒", color: "#4ade80" },
];

// Plurales de las palabras de esta lección.
export const PLURAL_HIGHLIGHTS = [
  { s: "la mela", p: "le mele" },
  { s: "la carota", p: "le carote" },
  { s: "il pomodoro", p: "i pomodori" },
  { s: "il fungo", p: "i funghi" },
  { s: "la ciliegia", p: "le ciliegie" },
  { s: "l'arancia", p: "le arance" },
  { s: "la pesca", p: "le pesche" },
];

export const FRUIT_PHRASES = [
  { pts: [dm("Questa"), " ", es("è"), " ", art("una"), " mela."], esp: "Esta es una manzana." },
  { pts: [dm("Quelle"), " ", es("sono"), " arance."], esp: "Esas son naranjas." },
  { pts: ["Ho due banane."], esp: "Tengo dos plátanos." },
];

export const PRACTICE = [
  { question: "Escribe en italiano: la manzana.", answers: ["la mela"], explanation: "la mela = la manzana." },
  { question: "Escribe en italiano: la naranja.", answers: ["l'arancia"], hint: "Femenino, empieza con vocal", explanation: "la naranja = l'arancia." },
  { question: "Escribe en italiano: el jitomate.", answers: ["il pomodoro"], explanation: "el jitomate = il pomodoro." },
  { question: "Elige el artículo correcto: (il / la) banana.", answers: ["la"], hint: "Femenino", explanation: "la banana: es femenino." },
  { question: "Elige el artículo correcto: (il / lo) zenzero.", answers: ["lo"], hint: "Empieza con z", explanation: "lo zenzero: las palabras que empiezan con s+consonante, z, gn… llevan lo." },
  { question: "Escribe el plural: la mela.", answers: ["le mele"], hint: "-a → -e", explanation: "la mela → le mele." },
  { question: "Escribe el plural: il pomodoro.", answers: ["i pomodori"], hint: "-o → -i", explanation: "il pomodoro → i pomodori." },
  { question: "Escribe el plural: il fungo.", answers: ["i funghi"], hint: "-go → -ghi", explanation: "il fungo → i funghi: la h mantiene la G fuerte." },
  { question: "Traduce al italiano: Esas son naranjas.", answers: ["Quelle sono arance", "Quelle sono arance."], hint: "Quelle + sono", explanation: "Esas son naranjas = Quelle sono arance." },
  { question: "Traduce al italiano: Tengo dos plátanos.", answers: ["Ho due banane", "Ho due banane.", "Io ho due banane"], hint: "Avere → ho", explanation: "Tengo dos plátanos = Ho due banane." },
  { question: "Elige el significado de «il peperone».", answers: ["pimiento"], answerLang: "es", hint: "No es picante", explanation: "il peperone = el pimiento. Para el chile se dice peperoncino." },
  { question: "Elige el significado de «il peperoncino».", answers: ["chile"], answerLang: "es", hint: "El picante", explanation: "il peperoncino = el chile." },
  { question: "Completa el nombre colectivo de la fruta: l'___.", answers: ["uva"], explanation: "L'uva nombra la uva como conjunto y aquí se usa en singular; uve se usa para variedades o tipos de uva." },
  { question: "Traduce al italiano: Quisiera un kilo de jitomates.", answers: ["Vorrei un chilo di pomodori", "Vorrei un chilo di pomodori."], hint: "Fórmula de cortesía", explanation: "Quisiera un kilo de jitomates = Vorrei un chilo di pomodori. «Vorrei» equivale a «quisiera»; el condicional se ve en niveles avanzados." },
  { question: "Elige el artículo correcto: (gli / i) spinaci.", answers: ["gli"], hint: "Empieza con sp", explanation: "gli spinaci: sp- lleva gli (artículo que se ve a fondo en Básico II)." },
];
