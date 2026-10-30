// Una sección puede ser temporal: con availableUntil (hora en UTC) sale de la
// navegación, la búsqueda, la ruta y el Quiz al llegar esa fecha.
export function isTopicAvailable(topic, now = Date.now()) {
  return !topic.availableUntil || now < topic.availableUntil;
}

export function getAvailableTopics(topics, now = Date.now()) {
  return topics.filter(topic => isTopicAvailable(topic, now));
}
