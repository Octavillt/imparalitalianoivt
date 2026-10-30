// Banco de verbos del módulo «Verbos a la mano»: banco inicial de la etapa 1
// (la etapa 6 lo amplía). Cada entrada es plana para poder serializarla y
// compararla sin conversiones; las formas alternativas van como elementos del
// arreglo, separadas por " / " al escribirse.

const forms = value => value.split(" / ");

// gruppo: are | ere | ire | isc (terminación del infinitivo; isc es el
// subgrupo de los -ire que inserta -isc-). kind: regular | irregular.
const verb = (infinito, presente, participio, ausiliare, gruppo, kind, es, note, reflexive) => ({
  infinito,
  presente: forms(presente),
  participio: forms(participio),
  ausiliare,
  gruppo,
  kind,
  es,
  ...(note ? { note } : {}),
  ...(reflexive ? { reflexive: true } : {}),
});

export const VERB_BANK = [
  verb("abitare", "abito", "abitato", "avere", "are", "regular", "vivir, habitar"),
  verb("alzarsi", "mi alzo", "alzato", "essere", "are", "regular", "levantarse",
    "Los reflexivos usan essere en el passato prossimo: mi sono alzato.", true),
  verb("andare", "vado", "andato", "essere", "are", "irregular", "ir"),
  verb("arrivare", "arrivo", "arrivato", "essere", "are", "regular", "llegar"),
  verb("avere", "ho", "avuto", "avere", "ere", "irregular", "tener",
    "La h no se pronuncia: ho, hai, ha, hanno."),
  verb("bere", "bevo", "bevuto", "avere", "ere", "irregular", "beber"),
  verb("capire", "capisco", "capito", "avere", "isc", "regular", "entender"),
  verb("credere", "credo", "creduto", "avere", "ere", "regular", "creer"),
  verb("dormire", "dormo", "dormito", "avere", "ire", "regular", "dormir"),
  verb("essere", "sono", "stato", "essere", "ere", "irregular", "ser, estar",
    "Comparte el participio con stare: sono stato."),
  verb("fare", "faccio", "fatto", "avere", "ere", "irregular", "hacer"),
  verb("finire", "finisco", "finito", "avere / essere", "isc", "regular", "terminar",
    "Con objeto usa avere: ho finito il libro. Sin objeto usa essere: il film è finito."),
  verb("mangiare", "mangio", "mangiato", "avere", "are", "regular", "comer"),
  verb("parlare", "parlo", "parlato", "avere", "are", "regular", "hablar"),
  verb("partire", "parto", "partito", "essere", "ire", "regular", "salir, partir"),
  verb("venire", "vengo", "venuto", "essere", "ire", "irregular", "venir"),
];

// Presente regular por grupo: io, tu, lui/lei, noi, voi, loro.
export const CONJUGATION_GROUPS = [
  { label: "-are", example: "parlare", forms: ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"] },
  { label: "-ere", example: "credere", forms: ["credo", "credi", "crede", "crediamo", "credete", "credono"] },
  { label: "-ire", example: "dormire", forms: ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"] },
  { label: "-isc-", example: "capire", forms: ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"] },
];

export const AUX_RULES = [
  "Avere va con la mayoría de los verbos, sobre todo si llevan objeto directo: ho mangiato la pizza.",
  "Essere va con muchos verbos de movimiento o cambio de estado y con los reflexivos: sono andato, sono arrivata, mi sono alzato.",
  "Con essere, el participio concuerda con el sujeto: Leslie è andata, Octavio è andato.",
];
