// Lógica de búsqueda del módulo «Verbos a la mano»: funciones puras, sin
// React, para poder consultarlas también desde el buscador global.

import { VERB_BANK } from "./data";

export function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Grupos de conjugación: la terminación del infinitivo decide cómo se
// conjuga el presente. Los metadatos alimentan los chips de la UI.
export const GROUPS = [
  { id: "are", label: "Grupo -are", example: "parlare · parlo · parlato" },
  { id: "ere", label: "Grupo -ere", example: "credere · credo · creduto" },
  { id: "ire", label: "Grupo -ire", example: "dormire · dormo · dormito" },
  { id: "isc", label: "Grupo -isc-", example: "capire · capisco · capito" },
];

export function verbGroup(verb) {
  return verb.gruppo;
}

// Las coincidencias «contiene» solo valen a partir de 3 letras: con 1 o 2,
// devolver medio banco enturbia los resultados.
const MIN_PARTIAL = 3;

// Palabras del significado en español: paréntesis y comas son separadores,
// así el usuario busca palabras completas y no trozos de otras («ir» nunca
// trae «dirigir» ni «escribir»).
function esWords(es) {
  return normalize(es).replace(/[(),]/g, " ").split(/\s+/).filter(Boolean);
}

// La comparación va sin acentos; la pista muestra la palabra como está escrita.
function writtenWord(text, normalizedWord) {
  const tokens = text.replace(/[(),]/g, " ").split(/\s+/).filter(Boolean);
  return tokens.find(token => normalize(token) === normalizedWord) ?? normalizedWord;
}

// Coincidencia en español: palabra exacta en rango 4 y, desde 3 letras,
// palabra que empieza con la consulta en rango 5.
function spanishHit(es, query) {
  if (!es) return null;
  const words = esWords(es);
  const exact = words.find(item => item === query);
  if (exact) return { rank: 4, matchedForm: writtenWord(es, exact), matchedField: "es" };
  if (query.length >= MIN_PARTIAL) {
    const starts = words.find(item => item.startsWith(query));
    if (starts) return { rank: 5, matchedForm: writtenWord(es, starts), matchedField: "es" };
  }
  return null;
}

// Mejor coincidencia de un verbo contra la query ya normalizada. El rango
// ordena la relevancia: exacto en italiano > infinito empieza > presente o
// participio empieza > contiene en italiano > palabra exacta en español >
// palabra que empieza.
function bestMatch(verb, query) {
  if (verb.infinito === query) return { rank: 0, matchedForm: verb.infinito, matchedField: "infinito" };
  for (const presente of verb.presente) {
    if (presente === query) return { rank: 0, matchedForm: presente, matchedField: "presente" };
  }
  for (const participio of verb.participio) {
    if (participio === query) return { rank: 0, matchedForm: participio, matchedField: "participio" };
  }
  if (verb.infinito.startsWith(query)) return { rank: 1, matchedForm: verb.infinito, matchedField: "infinito" };
  for (const presente of verb.presente) {
    if (presente.startsWith(query)) return { rank: 2, matchedForm: presente, matchedField: "presente" };
  }
  for (const participio of verb.participio) {
    if (participio.startsWith(query)) return { rank: 2, matchedForm: participio, matchedField: "participio" };
  }
  if (query.length >= MIN_PARTIAL) {
    if (verb.infinito.includes(query)) return { rank: 3, matchedForm: verb.infinito, matchedField: "infinito" };
    for (const presente of verb.presente) {
      if (presente.includes(query)) return { rank: 3, matchedForm: presente, matchedField: "presente" };
    }
    for (const participio of verb.participio) {
      if (participio.includes(query)) return { rank: 3, matchedForm: participio, matchedField: "participio" };
    }
  }
  return spanishHit(verb.es, query);
}

export function searchVerbs(query, { limit } = {}) {
  const q = normalize(query ?? "").trim();
  if (!q) return [];

  const matches = [];
  for (const verb of VERB_BANK) {
    const match = bestMatch(verb, q);
    if (match) matches.push({ verb, ...match });
  }
  matches.sort((a, b) => a.rank - b.rank || a.verb.infinito.localeCompare(b.verb.infinito));
  const results = matches.map(({ verb, matchedForm, matchedField }) => ({ verb, matchedForm, matchedField }));
  return limit ? results.slice(0, limit) : results;
}

// —— Lecciones donde aparece cada verbo ————————————————————————————————
// Todavía no hay lecciones de verbos (las traen las siguientes etapas);
// lessonsFor sigue funcionando y devuelve [] mientras tanto.
const LESSON_SOURCES = [];

export function lessonsFor(verb) {
  const infinito = typeof verb === "string" ? verb : verb.infinito;
  return LESSON_SOURCES
    .filter(source => source.infinitos.has(infinito))
    .map(({ levelId, topicId }) => ({ levelId, topicId }));
}
