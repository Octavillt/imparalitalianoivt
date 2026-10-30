// Países con su artículo y su nacionalidad (masculino / femenino).
// Los países llevan mayúscula; las nacionalidades, minúscula, como en español.
export const COUNTRIES = [
  { flag: "🇲🇽", art: "il", name: "Messico", es: "México", natM: "messicano", natF: "messicana" },
  { flag: "🇮🇹", art: "l'", name: "Italia", es: "Italia", natM: "italiano", natF: "italiana" },
  { flag: "🇪🇸", art: "la", name: "Spagna", es: "España", natM: "spagnolo", natF: "spagnola" },
  { flag: "🇦🇷", art: "l'", name: "Argentina", es: "Argentina", natM: "argentino", natF: "argentina" },
  { flag: "🇨🇴", art: "la", name: "Colombia", es: "Colombia", natM: "colombiano", natF: "colombiana" },
  { flag: "🇵🇪", art: "il", name: "Perù", es: "Perú", natM: "peruviano", natF: "peruviana" },
  { flag: "🇨🇱", art: "il", name: "Cile", es: "Chile", natM: "cileno", natF: "cilena" },
  { flag: "🇻🇪", art: "il", name: "Venezuela", es: "Venezuela", natM: "venezuelano", natF: "venezuelana" },
  { flag: "🇧🇷", art: "il", name: "Brasile", es: "Brasil", natM: "brasiliano", natF: "brasiliana" },
  { flag: "🇺🇸", art: "gli", name: "Stati Uniti", es: "Estados Unidos", natM: "americano", natF: "americana" },
  { flag: "🇷🇺", art: "la", name: "Russia", es: "Rusia", natM: "russo", natF: "russa" },
  { flag: "🇦🇺", art: "l'", name: "Australia", es: "Australia", natM: "australiano", natF: "australiana" },
  { flag: "🇮🇳", art: "l'", name: "India", es: "India", natM: "indiano", natF: "indiana" },
  { flag: "🇪🇬", art: "l'", name: "Egitto", es: "Egipto", natM: "egiziano", natF: "egiziana" },
  { flag: "🇩🇪", art: "la", name: "Germania", es: "Alemania", natM: "tedesco", natF: "tedesca" },
  { flag: "🇬🇷", art: "la", name: "Grecia", es: "Grecia", natM: "greco", natF: "greca" },
  { flag: "🇨🇭", art: "la", name: "Svizzera", es: "Suiza", natM: "svizzero", natF: "svizzera" },
  { flag: "🇹🇷", art: "la", name: "Turchia", es: "Turquía", natM: "turco", natF: "turca" },
  { flag: "🇬🇧", art: "il", name: "Regno Unito", es: "Reino Unido", natM: "britannico", natF: "britannica" },
  { flag: "🇫🇷", art: "la", name: "Francia", es: "Francia", natM: "francese", natF: "francese" },
  { flag: "🇨🇦", art: "il", name: "Canada", es: "Canadá", natM: "canadese", natF: "canadese" },
  { flag: "🇵🇹", art: "il", name: "Portogallo", es: "Portugal", natM: "portoghese", natF: "portoghese" },
  { flag: "🇨🇳", art: "la", name: "Cina", es: "China", natM: "cinese", natF: "cinese" },
  { flag: "🇯🇵", art: "il", name: "Giappone", es: "Japón", natM: "giapponese", natF: "giapponese" },
  { flag: "🇰🇷", art: "la", name: "Corea del Sud", es: "Corea del Sur", natM: "sudcoreano", natF: "sudcoreana" },
  { flag: "🇳🇱", art: "i", name: "Paesi Bassi", es: "Países Bajos", natM: "olandese", natF: "olandese" },
  { flag: "🇨🇺", art: "", name: "Cuba", es: "Cuba", natM: "cubano", natF: "cubana" },
];

// Las nacionalidades en -o/-a concuerdan con la persona; las en -ese son
// iguales para hombre y mujer.
export const NAT_GROUPS = [
  {
    title: "Cambian según la persona (-o / -a)",
    color: "#38bdf8",
    note: "messicano → messicana, italiano → italiana…",
  },
  {
    title: "Iguales para hombre y mujer (-ese)",
    color: "#34d399",
    note: "francese, canadese, portoghese, cinese, giapponese, olandese",
  },
];

// Nombres de ciudad: en italiano suelen ser distintos.
export const CITIES_IT = [
  ["Roma", "Roma"],
  ["Milano", "Milán"],
  ["Firenze", "Florencia"],
  ["Venezia", "Venecia"],
  ["Napoli", "Nápoles"],
  ["Torino", "Turín"],
  ["Bologna", "Bolonia"],
];

export const CITIES_FOREIGN = [
  ["Città del Messico", "Ciudad de México"],
  ["Londra", "Londres"],
  ["Parigi", "París"],
  ["Nuova York", "Nueva York"],
];

export const ORIGIN_DIALOG = [
  { q: "Di dove sei?", qEsp: "¿De dónde eres?", a: "Sono di Puebla.", aEsp: "Soy de Puebla." },
  { q: "Da dove vieni?", qEsp: "¿De dónde vienes?", a: "Vengo dal Messico.", aEsp: "Vengo de México." },
  { q: "Di che nazionalità sei?", qEsp: "¿De qué nacionalidad eres?", a: "Sono messicano.", aEsp: "Soy mexicano." },
  { q: "Dove abiti?", qEsp: "¿Dónde vives?", a: "Abito a Roma.", aEsp: "Vivo en Roma." },
  { q: "Dove abita?", qEsp: "¿Dónde vive (usted)?", a: "Abito in Italia.", aEsp: "Vivo en Italia." },
];

export const PRACTICE = [
  { question: "Completa: ___ dove sei?", answers: ["Di"], hint: "Preposición de origen", explanation: "Di dove sei? = ¿De dónde eres?" },
  { question: "Traduce al italiano: ¿Dónde vives?", answers: ["Dove abiti?", "Dove vivi?"], hint: "Abitare = vivir", explanation: "¿Dónde vives? = Dove abiti? Viene de abitare: tu abiti." },
  { question: "Traduce al italiano: Vivo en Roma.", answers: ["Abito a Roma", "Abito a Roma.", "Vivo a Roma", "Io vivo a Roma", "Io abito a Roma"], hint: "Ciudad → a", explanation: "Vivo en Roma = Abito a Roma." },
  { question: "Traduce al italiano: Vivo en Italia.", answers: ["Abito in Italia", "Abito in Italia.", "Vivo in Italia", "Io vivo in Italia", "Io abito in Italia"], hint: "País → in", explanation: "Vivo en Italia = Abito in Italia." },
  { question: "Completa: Vengo ___ Messico.", answers: ["dal"], hint: "Da + el país", explanation: "Vengo dal Messico: el país lleva artículo (il Messico), así que da + il = dal." },
  { question: "Elige la preposición: Abito (a / in) Roma.", answers: ["a"], hint: "¿Ciudad o país?", explanation: "Abito a Roma: las ciudades llevan a." },
  { question: "Elige la preposición: Abito (a / in) Italia.", answers: ["in"], hint: "¿Ciudad o país?", explanation: "Abito in Italia: los países llevan in." },
  { question: "Elige la forma correcta: Octavio è (messicano / messicana).", answers: ["messicano"], hint: "Concuerda con Octavio", explanation: "Octavio è messicano; Argelia è messicana." },
  { question: "Elige la forma correcta: Leslie è (argentino / argentina).", answers: ["argentina"], hint: "Concuerda con Leslie", explanation: "Leslie è argentina: las nacionalidades en -o/-a cambian según la persona." },
  { question: "Escribe cómo se dice «Nueva York» en italiano.", answers: ["New York", "Nuova York"], hint: "Se usa normalmente el nombre New York", explanation: "Nueva York = New York; también existe la variante Nuova York." },
  { question: "Escribe cómo se dice «Londres» en italiano.", answers: ["Londra"], hint: "Termina en -a", explanation: "Londres = Londra." },
  { question: "Elige la nacionalidad de Francia: (francés / francese / francesa)", answers: ["francese"], hint: "Termina en -ese", explanation: "La nacionalidad de Francia es francese: igual para hombre y mujer." },
  { question: "Expresa tu procedencia o nacionalidad mexicana en italiano.", answers: ["Vengo dal Messico", "Sono del Messico", "Sono messicano", "Sono messicana", "Io vengo dal Messico", "Io sono del Messico", "Io sono messicano", "Io sono messicana"], hint: "El país lleva artículo", explanation: "Vengo dal Messico expresa procedencia; Sono messicano/messicana expresa nacionalidad." },
  { question: "Traduce al italiano: ¿Es usted de Roma?", answers: ["Lei è di Roma?", "È di Roma?"], hint: "Usted → Lei", explanation: "¿Es usted de Roma? = Lei è di Roma? Lei va con la tercera persona." },
];
