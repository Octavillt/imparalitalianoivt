// Género y plural: cada sustantivo es masculino o femenino, y el plural se
// forma según su terminación. Las parejas guardan singular y plural partido
// en base + terminación para resaltar el cambio.
export const PLURAL_RULES = [
  {
    rule: "Masculino en -o → -i",
    color: "#34d399",
    pairs: [
      { s: "il libro", p: ["i libr", "i"], esp: "el libro → los libros" },
      { s: "il gelato", p: ["i gelat", "i"], esp: "el helado → los helados" },
      { s: "il ragazzo", p: ["i ragazz", "i"], esp: "el chico → los chicos" },
    ],
  },
  {
    rule: "Femenino en -a → -e",
    color: "#f472b6",
    pairs: [
      { s: "la casa", p: ["le cas", "e"], esp: "la casa → las casas" },
      { s: "la pizza", p: ["le pizz", "e"], esp: "la pizza → las pizzas" },
      { s: "la ragazza", p: ["le ragazz", "e"], esp: "la chica → las chicas" },
    ],
  },
  {
    rule: "En -e (masculino o femenino) → -i",
    color: "#60a5fa",
    pairs: [
      { s: "il fiore", p: ["i fior", "i"], esp: "la flor → las flores" },
      { s: "la notte", p: ["le nott", "i"], esp: "la noche → las noches" },
      { s: "lo studente", p: ["gli student", "i"], esp: "el estudiante → los estudiantes" },
    ],
  },
  {
    rule: "Acento final: no cambia",
    color: "#fbbf24",
    pairs: [
      { s: "la città", p: ["le città", ""], esp: "la ciudad → las ciudades" },
      { s: "il caffè", p: ["i caffè", ""], esp: "el café → los cafés" },
      { s: "l'università", p: ["le università", ""], esp: "la universidad → las universidades" },
    ],
  },
  {
    rule: "Palabras extranjeras: no cambian",
    color: "#c084fc",
    pairs: [
      { s: "il film", p: ["i film", ""], esp: "la película → las películas" },
      { s: "il bar", p: ["i bar", ""], esp: "el bar → los bares" },
      { s: "lo sport", p: ["gli sport", ""], esp: "el deporte → los deportes" },
    ],
  },
  {
    rule: "-ca / -ga → -che / -ghe",
    color: "#fb923c",
    pairs: [
      { s: "l'amica", p: ["le amich", "e"], esp: "la amiga → las amigas" },
      { s: "la riga", p: ["le righ", "e"], esp: "la línea → las líneas" },
    ],
  },
  {
    rule: "-co / -go → -chi / -ghi (la h mantiene la C y la G fuertes)",
    color: "#f87171",
    pairs: [
      { s: "il gioco", p: ["i gioch", "i"], esp: "el juego → los juegos" },
      { s: "il lago", p: ["i lagh", "i"], esp: "el lago → los lagos" },
      { s: "l'amico", p: ["gli amic", "i"], esp: "el amigo → los amigos (excepción: sin h)" },
    ],
  },
  {
    rule: "-io → -i (si la i lleva el golpe de voz, se conserva: zio → zii)",
    color: "#22d3ee",
    pairs: [
      { s: "il figlio", p: ["i figl", "i"], esp: "el hijo → los hijos" },
      { s: "lo zio", p: ["gli zi", "i"], esp: "el tío → los tíos" },
    ],
  },
];

export const IRREGULARS = [
  { s: "l'uomo", p: "gli uomini", esp: "el hombre → los hombres" },
  { s: "la mano", p: "le mani", esp: "la mano → las manos" },
];

// Excepciones de género: el final engaña.
export const GENDER_TRAPS = [
  { word: "la mano", esp: "la mano", note: "Femenina, aunque termine en -o." },
  { word: "il problema", esp: "el problema", note: "Masculino, como otras palabras en -ma de origen griego." },
  { word: "il cinema", esp: "el cine", note: "Masculino." },
  { word: "il sistema", esp: "el sistema", note: "Masculino, igual que il problema." },
];

// Sustantivos cuyo género difiere del español.
export const DIFFERENT_GENDER = [
  ["il fiore", "la flor"],
  ["il latte", "la leche"],
  ["il sale", "la sal"],
  ["il miele", "la miel"],
];

export const PEOPLE_GENDER = [
  ["il ragazzo", "la ragazza", "el chico / la chica"],
  ["il bambino", "la bambina", "el niño / la niña"],
];

export const PRACTICE = [
  { question: "Escribe el plural: il libro.", answers: ["i libri"], hint: "-o → -i", explanation: "il libro → i libri." },
  { question: "Escribe el plural: la casa.", answers: ["le case"], hint: "-a → -e", explanation: "la casa → le case." },
  { question: "Escribe el plural: il fiore.", answers: ["i fiori"], hint: "-e → -i", explanation: "il fiore → i fiori. Las palabras en -e pasan a -i." },
  { question: "Escribe el plural: la città.", answers: ["le città"], hint: "Acento final", explanation: "la città → le città: con acento en la última sílaba, el plural no cambia." },
  { question: "Escribe el plural: il film.", answers: ["i film"], hint: "Palabra extranjera", explanation: "il film → i film: las palabras extranjeras no cambian." },
  { question: "Escribe el plural: l'amica.", answers: ["le amiche"], hint: "-ca → -che", explanation: "l'amica → le amiche." },
  { question: "Escribe el plural: il gioco.", answers: ["i giochi"], hint: "-co → -chi", explanation: "il gioco → i giochi: la h mantiene la C fuerte." },
  { question: "Escribe el plural: l'amico.", answers: ["gli amici"], hint: "Excepción", explanation: "l'amico → gli amici: excepción, se queda en -ci sin h." },
  { question: "Escribe el plural: l'uomo.", answers: ["gli uomini"], hint: "Irregular", explanation: "l'uomo → gli uomini: irregular, hay que memorizarlo." },
  { question: "Elige el género: il problema es (masculino / femenino).", answers: ["masculino"], hint: "Los -ma griegos", explanation: "il problema es masculino, como todos los sustantivos en -ma de origen griego." },
  { question: "Elige el género: la mano es (masculina / femenina).", answers: ["femenina"], hint: "Excepción", explanation: "la mano es femenina, aunque termine en -o." },
  { question: "Traduce al italiano: la flor.", answers: ["il fiore"], hint: "Género distinto al español", explanation: "la flor = il fiore: en italiano es masculino." },
  { question: "Traduce al italiano: la leche.", answers: ["il latte"], hint: "Género distinto al español", explanation: "la leche = il latte: en italiano es masculino." },
  { question: "Elige el artículo correcto: (i libri / le libri).", answers: ["i libri"], hint: "Libro es masculino", explanation: "i libri: libro es masculino, así que el plural va con i." },
];
