// Di y las preposiciones articuladas: la pertenencia va con di, y a, da,
// di, in y su se unen al artículo. La forma contraída lleva rol articolata.
const artc = t => ({ t, r: "articolata" });
const art = t => ({ t, r: "art" });
const pr = t => ({ t, r: "prep" });
const masc = t => ({ t, r: "masc" });
const fem = t => ({ t, r: "fem" });
const es = t => ({ t, r: "essere" });
const verb = t => ({ t, r: "verb" });
const wh = t => ({ t, r: "wh" });

// Pertenencia con di, como «de» en español. El nombre va sin artículo.
export const DI_POSSESSION = [
  { pts: [art("Il"), " ", masc("libro"), " ", pr("di"), " Leslie."], esp: "El libro de Leslie." },
  { pts: [art("La"), " ", fem("casa"), " ", pr("di"), " Octavio."], esp: "La casa de Octavio." },
  { q: [wh("Di chi"), " è?"], a: "È di Argelia.", esp: "¿De quién es? — Es de Argelia." },
];

// di + artículo. dei aquí es «de los», no el plural «unos» de Básico IV.
export const DI_FORMS = [
  { form: "del", sum: "di + il", example: "la macchina del professore", esp: "el carro del profesor" },
  { form: "dello", sum: "di + lo", example: "il libro dello studente", esp: "el libro del estudiante" },
  { form: "dell'", sum: "di + l'", example: "la casa dell'amica", esp: "la casa de la amiga" },
  { form: "della", sum: "di + la", example: "la porta della classe", esp: "la puerta del salón" },
  { form: "dei", sum: "di + i", example: "i gelati dei ragazzi", esp: "los helados de los chicos" },
  { form: "degli", sum: "di + gli", example: "i libri degli studenti", esp: "los libros de los estudiantes" },
  { form: "delle", sum: "di + le", example: "le borse delle ragazze", esp: "las bolsas de las chicas" },
];

// Tabla completa: cada preposición con los siete artículos.
export const ART_HEADERS = ["il", "lo", "l'", "la", "i", "gli", "le"];
export const PREP_ROWS = [
  { prep: "a", forms: ["al", "allo", "all'", "alla", "ai", "agli", "alle"] },
  { prep: "da", forms: ["dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"] },
  { prep: "di", forms: ["del", "dello", "dell'", "della", "dei", "degli", "delle"] },
  { prep: "in", forms: ["nel", "nello", "nell'", "nella", "nei", "negli", "nelle"] },
  { prep: "su", forms: ["sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"] },
];

// La l se duplica solo cuando el artículo empieza con l.
export const BUILD_STEPS = [
  { sum: "a + la", result: "alla", why: "la empieza con l, así que esa l se escribe dos veces." },
  { sum: "di + lo", result: "dello", why: "lo empieza con l: di + lo queda dello." },
  { sum: "a + il", result: "al", why: "il no empieza con l: a + il queda al." },
  { sum: "in + gli", result: "negli", why: "gli empieza con g: in + gli queda negli." },
];

// con, per, tra y fra se quedan separadas aunque haya artículo.
export const NO_CONTRACT = [
  { pts: [{ t: "Leslie", r: "subject" }, " ", verb("parla"), " ", pr("con"), " ", art("il"), " ", masc("professore"), "."], esp: "Leslie habla con el profesor." },
  { pts: [art("Il"), " ", masc("gelato"), " ", es("è"), " ", pr("per"), " ", art("la"), " ", fem("mamma"), "."], esp: "El helado es para mamá." },
  { pts: [art("Il"), " ", masc("libro"), " ", es("è"), " ", pr("tra"), " ", art("il"), " ", masc("quaderno"), " e ", art("la"), " ", fem("penna"), "."], esp: "El libro está entre el cuaderno y la pluma." },
];

// Frases de uso: lugar, origen y el doctor.
export const USE_EXAMPLES = [
  { pts: [verb("Vado"), " ", artc("al"), " ", masc("bar"), "."], esp: "Voy al bar." },
  { pts: [verb("Vengo"), " ", artc("dal"), " ", masc("Messico"), "."], esp: "Vengo de México." },
  { pts: [art("Il"), " ", masc("libro"), " ", es("è"), " ", artc("sul"), " ", masc("tavolo"), "."], esp: "El libro está sobre la mesa." },
  { pts: [art("Le"), " ", fem("chiavi"), " ", es("sono"), " ", artc("nella"), " ", fem("borsa"), "."], esp: "Las llaves están en la bolsa." },
  { pts: [verb("Vado"), " ", artc("dal"), " ", masc("dottore"), "."], esp: "Voy al doctor." },
];

// Sin artículo no hay contracción: el nombre se queda solo.
export const NAMES = [
  { pts: [art("Il"), " ", masc("libro"), " ", es("è"), " ", pr("di"), " Leslie."], esp: "El libro es de Leslie." },
  { pts: [verb("Scrivo"), " ", pr("a"), " Octavio."], esp: "Le escribo a Octavio." },
];

// Une el dato del dueño con la cosa, como en el ejercicio de la plantilla.
export const JOIN = [
  {
    from: "Leslie tiene un libro. El libro está sobre la mesa.",
    pts: [art("Il"), " ", masc("libro"), " ", pr("di"), " Leslie ", es("è"), " ", artc("sul"), " ", masc("tavolo"), "."],
    esp: "El libro de Leslie está sobre la mesa.",
  },
  {
    from: "El profesor tiene un carro. El carro es rojo.",
    pts: [art("La"), " ", fem("macchina"), " ", artc("del"), " ", masc("professore"), " è rossa."],
    esp: "El carro del profesor es rojo.",
  },
  {
    from: "La amiga tiene una casa. La casa es grande.",
    pts: [art("La"), " ", fem("casa"), " ", artc("dell'"), fem("amica"), " è grande."],
    esp: "La casa de la amiga es grande.",
  },
  {
    from: "Los estudiantes tienen libros. Los libros están aquí.",
    pts: [art("I"), " ", masc("libri"), " ", artc("degli"), " ", masc("studenti"), " sono qui."],
    esp: "Los libros de los estudiantes están aquí.",
  },
];

export const PRACTICE = [
  { question: "Completa: Il libro ___ Leslie è sul tavolo.", answers: ["di"], hint: "La pertenencia se dice con di", explanation: "Il libro di Leslie è sul tavolo = El libro de Leslie está sobre la mesa. El nombre va sin artículo." },
  { question: "Elige la forma correcta: la macchina (del / di il) professore.", answers: ["del"], hint: "Di se une a il", explanation: "La macchina del professore: di + il = del. No se deja di il separado." },
  { question: "Completa: Il libro ___ studente è nuovo.", answers: ["dello"], hint: "Di + lo, y la l se escribe dos veces", explanation: "Il libro dello studente è nuovo: di + lo = dello. Studente lleva lo porque empieza con s + consonante." },
  { question: "Completa: La porta ___ classe è aperta.", answers: ["della"], hint: "Di + la, y la l se escribe dos veces", explanation: "La porta della classe è aperta = La puerta del salón está abierta. di + la = della." },
  { question: "Elige la forma correcta: la casa (dell' / della) amica.", answers: ["dell'"], hint: "Amica empieza con vocal", explanation: "La casa dell'amica: di + l' = dell'." },
  { question: "Completa: I libri ___ studenti sono sul tavolo.", answers: ["degli"], hint: "Di + gli", explanation: "I libri degli studenti: di + gli = degli." },
  { question: "Completa: Le borse ___ ragazze sono qui.", answers: ["delle"], hint: "Di + le", explanation: "Le borse delle ragazze sono qui = Las bolsas de las chicas están aquí. di + le = delle." },
  { question: "Elige la forma correcta: i gelati (dei / degli) ragazzi.", answers: ["dei"], hint: "Ragazzi lleva el artículo i", explanation: "I gelati dei ragazzi: di + i = dei. Degli va con gli, como en gli studenti." },
  { question: "Traduce al italiano: Voy al bar.", answers: ["Vado al bar"], hint: "A + il = al", explanation: "Voy al bar = Vado al bar. a + il = al." },
  { question: "Traduce al italiano: Vengo de México.", answers: ["Vengo dal Messico"], hint: "Da + il Messico", explanation: "Vengo de México = Vengo dal Messico. El país lleva artículo y da se contrae: dal." },
  { question: "Completa: Il libro è ___ tavolo. (sobre la mesa)", answers: ["sul"], hint: "Su + il", explanation: "Il libro è sul tavolo = El libro está sobre la mesa. su + il = sul." },
  { question: "Completa: Le chiavi sono ___ borsa.", answers: ["nella"], hint: "In + la", explanation: "Le chiavi sono nella borsa = Las llaves están en la bolsa. in + la = nella." },
  { question: "Completa: Vado ___ dottore.", answers: ["dal"], hint: "Con el doctor se usa da, no a", explanation: "Vado dal dottore = Voy al doctor. da + il = dal: indica el lugar de esa persona." },
  { question: "Elige la forma correcta: Scrivo (a / al) Octavio.", answers: ["a"], hint: "El nombre no lleva artículo", explanation: "Scrivo a Octavio: los nombres de persona van sin artículo, así que a no se contrae." },
  { question: "Elige la forma correcta: Leslie parla (con il / col) professore.", answers: ["con il"], hint: "Con se escribe separado del artículo", explanation: "Leslie parla con il professore. Con, per, tra y fra no se contraen con el artículo." },
  { question: "Elige la forma correcta: il gelato è (per la / per il) mamma.", answers: ["per la"], hint: "Per no se contrae; mamma es femenino", explanation: "Il gelato è per la mamma: per se queda separado y la concuerda con mamma." },
  { question: "Completa: a + la = ___.", answers: ["alla"], hint: "La l se escribe dos veces", explanation: "a + la = alla, porque la empieza con l." },
  { question: "Traduce al italiano: Las llaves están en la bolsa.", answers: ["Le chiavi sono nella borsa"], hint: "In + la = nella", explanation: "Las llaves están en la bolsa = Le chiavi sono nella borsa." },
];
