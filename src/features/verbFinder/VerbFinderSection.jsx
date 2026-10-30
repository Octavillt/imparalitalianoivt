import { memo, useEffect, useMemo, useState } from "react";
import FilterableList from "../../components/FilterableList";
import PronunciationGroups from "../../components/PronunciationGroups";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import Token from "../../components/Token";
import { TOPIC_BY_ID } from "../../constants/topics";
import { C } from "../../styles/colors";
import { AUX_RULES, CONJUGATION_GROUPS, VERB_BANK } from "./data";
import { GROUPS, lessonsFor, searchVerbs, verbGroup } from "./verbSearch";
import "./verbFinder.css";

const FAVORITES_KEY = "imparalitalianoivt.favoriteVerbs";
const INFINITIVES = new Set(VERB_BANK.map(verb => verb.infinito));
const LETTERS = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
const TOPIC = TOPIC_BY_ID.verbFinder;
const GROUP_LABEL = Object.fromEntries(GROUPS.map(g => [g.id, g.label]));

const HIDE_OPTIONS = [
  { id: "none", label: "Nada" },
  { id: "presente", label: "Presente" },
  { id: "participle", label: "Participio" },
  { id: "aux", label: "Auxiliar" },
  { id: "es", label: "Español" },
];

const KIND_OPTIONS = [
  { id: "all", label: "Todos" },
  { id: "irregular", label: "Irregulares" },
  { id: "regular", label: "Regulares" },
  { id: "favorites", label: "★ Mis verbos" },
];

function loadFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.filter(infinito => INFINITIVES.has(infinito)) : [];
  } catch {
    // localStorage no disponible: la sesión sigue, solo que no recuerda favoritos
    return [];
  }
}

function saveFavorites(infinitos) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(infinitos));
  } catch {
    // Si no se puede persistir, los favoritos viven igual en memoria
  }
}

function exactInfinito(term) {
  if (!term) return null;
  const infinito = term.trim().toLowerCase();
  return INFINITIVES.has(infinito) ? infinito : null;
}

function countLabel(count, rawQuery) {
  if (count === 0) return "Sin resultados";
  const nouns = count === 1 ? "1 verbo" : `${count} verbos`;
  const q = rawQuery.trim();
  return q ? `${nouns} para «${q}»` : nouns;
}

function groupByLetter(items) {
  const groups = [];
  for (const item of items) {
    const letter = item.verb.infinito[0].toUpperCase();
    const current = groups[groups.length - 1];
    if (current?.letter === letter) current.items.push(item);
    else groups.push({ letter, items: [item] });
  }
  return groups;
}

function MatchHint({ verb, matchedForm, matchedField }) {
  if (matchedField === "presente") {
    return (
      <p className="vf-hint">
        <span lang="it">{matchedForm}</span> es el presente (io) de <span lang="it">{verb.infinito}</span>
      </p>
    );
  }
  if (matchedField === "participle") {
    return (
      <p className="vf-hint">
        <span lang="it">{matchedForm}</span> es el participio de <span lang="it">{verb.infinito}</span>
      </p>
    );
  }
  if (matchedField === "es") {
    return (
      <p className="vf-hint">
        <span lang="es">{matchedForm}</span> → <span lang="it">{verb.infinito}</span>
      </p>
    );
  }
  return null;
}

function PracticeCell({ hidden, label, infinito, onReveal, children }) {
  if (!hidden) return children;
  return (
    <button type="button" className="vf-reveal" aria-label={`Mostrar ${label} de ${infinito}`} onClick={onReveal}>
      • • •
    </button>
  );
}

function VerbCard({
  verb, matchedForm, matchedField, hide, revealed, onReveal,
  open, onToggle, favorite, onFavorite,
}) {
  const moreId = `vf-more-${verb.infinito.replaceAll(" ", "-")}`;
  const presenteHidden = hide === "presente" && !revealed.has(`${verb.infinito}:presente`);
  const partHidden = hide === "participle" && !revealed.has(`${verb.infinito}:participle`);
  const auxHidden = (hide === "aux" || hide === "participle") && !revealed.has(`${verb.infinito}:aux`);
  const esHidden = hide === "es" && !revealed.has(`${verb.infinito}:es`);
  const lessons = open ? lessonsFor(verb) : [];

  return (
    <article className="vf-card" data-open={open ? "true" : "false"} aria-label={verb.infinito}>
      <div className="vf-card-row">
        <div className="vf-identity">
          <span className="vf-mini">INFINITIVO</span>
          <div className="vf-base">
            <Token t={verb.infinito} r="verb" />
            {verb.note && (
              <button
                type="button"
                className="vf-note"
                aria-label={`Ver la nota de ${verb.infinito}`}
                aria-expanded={open}
                aria-controls={moreId}
                title="Tiene una nota: tócalo para leerla"
                onClick={onToggle}
              >
                ⓘ
              </button>
            )}
          </div>
          <PracticeCell
            hidden={esHidden}
            label="significado"
            infinito={verb.infinito}
            onReveal={() => onReveal(`${verb.infinito}:es`)}
          >
            <p className="vf-es" lang="es">{verb.es}</p>
          </PracticeCell>
          <MatchHint verb={verb} matchedForm={matchedForm} matchedField={matchedField} />
        </div>

        <div className="vf-forms">
          <div className="vf-form vf-form--present">
            <span className="vf-mini">PRESENTE (IO)</span>
            <PracticeCell
              hidden={presenteHidden}
              label="presente"
              infinito={verb.infinito}
              onReveal={() => onReveal(`${verb.infinito}:presente`)}
            >
              <Token t={verb.presente.join(" / ")} r="presente" />
            </PracticeCell>
          </div>
          <div className="vf-form vf-form--part">
            <span className="vf-mini">PARTICIPIO</span>
            <PracticeCell
              hidden={partHidden}
              label="participio"
              infinito={verb.infinito}
              onReveal={() => onReveal(`${verb.infinito}:participle`)}
            >
              <>
                <Token t={verb.participio.join(" / ")} r="participle" />
                <PracticeCell
                  hidden={auxHidden}
                  label="auxiliar"
                  infinito={verb.infinito}
                  onReveal={() => onReveal(`${verb.infinito}:aux`)}
                >
                  <div className="vf-aux">
                    <Token t={verb.ausiliare} r="aux" />
                  </div>
                </PracticeCell>
              </>
            </PracticeCell>
          </div>
        </div>

        <div className="vf-actions">
          <button
            type="button"
            className="vf-icon"
            aria-pressed={favorite}
            aria-label={favorite ? `Quitar ${verb.infinito} de Mis verbos` : `Guardar ${verb.infinito} en Mis verbos`}
            onClick={() => onFavorite(verb.infinito)}
          >
            {favorite ? "★" : "☆"}
          </button>
          <button
            type="button"
            className="vf-icon vf-icon--more"
            aria-expanded={open}
            aria-controls={moreId}
            onClick={onToggle}
          >
            Más <span aria-hidden="true">{open ? "▴" : "▾"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="vf-more" id={moreId}>
          <p>
            {GROUP_LABEL[verb.gruppo]} · <span className="vf-it" lang="it">{[verb.infinito, verb.presente.join(" / "), verb.participio.join(" / ")].join(" · ")}</span>
          </p>
          <p>
            Auxiliar en el passato prossimo: <span className="vf-it" lang="it">{verb.ausiliare}</span>
          </p>
          {verb.note && <p><strong>Nota:</strong> {verb.note}</p>}
          {lessons.length > 0 && (
            <div>
              <p>Aparece en:</p>
              <div className="vf-lessons">
                {lessons.map(lesson => (
                  <RelatedTopic key={`${lesson.levelId}-${lesson.topicId}`} levelId={lesson.levelId} topicId={lesson.topicId} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

// El resaltado del buscador global envuelve un nodo de texto fuera de React.
// Si el padre se vuelve a renderizar (el reloj de disponibilidad, el scroll),
// esta sección no debe reconciliar y borrar esa marca mientras sigue en pantalla.
function VerbFinderSection({ highlightTerm, highlightSeq }) {
  const [query, setQuery] = useState(() => highlightTerm ?? "");
  const [kind, setKind] = useState("all");
  const [group, setGroup] = useState("all");
  const [hide, setHide] = useState("none");
  const [revealed, setRevealed] = useState(() => new Set());
  const [expanded, setExpanded] = useState(() => exactInfinito(highlightTerm));
  const [favorites, setFavorites] = useState(loadFavorites);
  const [appliedSeq, setAppliedSeq] = useState(highlightSeq);

  // El resaltado del buscador global corre en un efecto del padre, a veces sin
  // espera. Aplicar el término durante el render deja la tarjeta en el DOM
  // antes de ese efecto; un efecto propio llegaría tarde.
  if (highlightTerm && appliedSeq !== highlightSeq) {
    setAppliedSeq(highlightSeq);
    setQuery(highlightTerm);
    setKind("all");
    setGroup("all");
    setExpanded(exactInfinito(highlightTerm));
  }

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const favoriteSet = useMemo(() => new Set(favorites), [favorites]);
  const trimmed = query.trim();
  const searched = useMemo(() => (trimmed ? searchVerbs(trimmed) : null), [trimmed]);
  const universe = useMemo(
    () => (searched ? searched.map(item => item.verb) : VERB_BANK),
    [searched],
  );

  const counts = useMemo(() => {
    let irregular = 0;
    let regular = 0;
    let saved = 0;
    const byGroup = Object.fromEntries(GROUPS.map(item => [item.id, 0]));
    for (const verb of universe) {
      if (verb.kind === "irregular") irregular += 1;
      else regular += 1;
      const id = verbGroup(verb);
      if (byGroup[id] !== undefined) byGroup[id] += 1;
      if (favoriteSet.has(verb.infinito)) saved += 1;
    }
    return { all: universe.length, irregular, regular, favorites: saved, byGroup };
  }, [universe, favoriteSet]);

  const visible = useMemo(() => {
    const source = searched ?? VERB_BANK.map(verb => ({ verb, matchedForm: verb.infinito, matchedField: "infinito" }));
    return source.filter(({ verb }) => {
      if (kind === "favorites" && !favoriteSet.has(verb.infinito)) return false;
      if (kind === "irregular" && verb.kind !== "irregular") return false;
      if (kind === "regular" && verb.kind !== "regular") return false;
      if (group !== "all" && verbGroup(verb) !== group) return false;
      return true;
    });
  }, [searched, kind, group, favoriteSet]);

  const lettersPresent = useMemo(
    () => new Set(visible.map(item => item.verb.infinito[0].toUpperCase())),
    [visible],
  );

  function chooseHide(next) {
    if (next === hide) return;
    setHide(next);
    setRevealed(new Set());
  }

  function toggleFavorite(infinito) {
    setFavorites(prev => (
      prev.includes(infinito) ? prev.filter(item => item !== infinito) : [...prev, infinito]
    ));
  }

  function scrollToLetter(letter) {
    document.getElementById(`vf-letter-${letter}`)?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  }

  const noFavoritesYet = kind === "favorites" && favorites.length === 0;
  const groups = trimmed ? null : groupByLetter(visible);
  // El encabezado de columnas acompaña al buscador en la zona pegada y solo
  // tiene sentido con tarjetas a la vista (sin resultados no hay columnas).
  const listShown = !noFavoritesYet && visible.length > 0;

  function renderCard(item) {
    return (
      <VerbCard
        key={item.verb.infinito}
        verb={item.verb}
        matchedForm={item.matchedForm}
        matchedField={trimmed ? item.matchedField : "infinito"}
        hide={hide}
        revealed={revealed}
        onReveal={key => setRevealed(prev => {
          const next = new Set(prev);
          next.add(key);
          return next;
        })}
        open={expanded === item.verb.infinito}
        onToggle={() => setExpanded(current => (current === item.verb.infinito ? null : item.verb.infinito))}
        favorite={favoriteSet.has(item.verb.infinito)}
        onFavorite={toggleFavorite}
      />
    );
  }

  return (
    <div className="vf">
      <header className="lesson-heading" style={{ "--lesson-accent": TOPIC.color }} data-search-skip>
        <p className="lesson-stage"><span>{TOPIC.stage}</span></p>
        <h2>{TOPIC.label} — <span lang="it">{TOPIC.italiano}</span></h2>
        <p className="lesson-goal">
          Busca en italiano o en español, en cualquier forma: andare, vado, andato o ir. {VERB_BANK.length} verbos.
        </p>
      </header>

      <FilterableList
        label="Buscar verbo"
        placeholder="🔍 Busca: andare, vado, ir…"
        value={query}
        onChange={setQuery}
        stickyExtra={listShown ? (
          <div className="vf-cols" data-search-skip aria-hidden="true">
            <span style={{ color: C.verb.fg }}>INFINITIVO</span>
            <span style={{ color: C.presente.fg }}>PRESENTE (IO)</span>
            <span style={{ color: C.participle.fg }}>PARTICIPIO · AUX.</span>
            <span className="vf-cols-actions" />
          </div>
        ) : null}
      >
        <div className="vf-controls" data-search-skip>
          <div className="vf-chips" role="group" aria-label="Tipo de verbo">
            {KIND_OPTIONS.map(option => (
              <button
                key={option.id}
                type="button"
                className="vf-chip"
                aria-pressed={kind === option.id}
                onClick={() => setKind(option.id)}
              >
                {option.label} ({counts[option.id]})
              </button>
            ))}
          </div>

          <div className="vf-chips" role="group" aria-label="Grupo de conjugación">
            <button
              type="button"
              className="vf-chip"
              aria-pressed={group === "all"}
              onClick={() => setGroup("all")}
            >
              Todos los grupos ({counts.all})
            </button>
            {GROUPS.map(item => (
              <button
                key={item.id}
                type="button"
                className="vf-chip"
                aria-pressed={group === item.id}
                onClick={() => setGroup(item.id)}
              >
                {item.label} · {item.example} ({counts.byGroup[item.id]})
              </button>
            ))}
          </div>

          <div className="vf-chips" role="group" aria-label="Modo práctica: ocultar columna">
            <span className="vf-practice-label">Ocultar:</span>
            {HIDE_OPTIONS.map(option => (
              <button
                key={option.id}
                type="button"
                className="vf-chip"
                aria-pressed={hide === option.id}
                onClick={() => chooseHide(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {!trimmed && (
            <nav className="vf-index" aria-label="Índice alfabético">
              {LETTERS.map(letter => (
                <button
                  key={letter}
                  type="button"
                  className="vf-letter-btn"
                  disabled={!lettersPresent.has(letter)}
                  onClick={() => scrollToLetter(letter)}
                >
                  {letter}
                </button>
              ))}
            </nav>
          )}

          <p className="vf-count" aria-live="polite">{countLabel(visible.length, query)}</p>
          <Legend
            roles={["verb", "presente", "participle", "aux"]}
            symbols={[{ icon: "ⓘ", label: "Nota: el verbo tiene una aclaración; tócalo para leerla" }]}
          />
        </div>

        {noFavoritesYet ? (
          <div className="vf-empty">
            <p>Aún no guardas verbos. Toca ☆ en cualquier verbo para tenerlo a la mano aquí.</p>
          </div>
        ) : visible.length === 0 ? (
          <div className="vf-empty">
            {trimmed ? (
              <>
                <p>No encontramos «{trimmed}».</p>
                <p>Prueba con otra forma o búscalo en español.</p>
                <p>Si es un verbo regular, su forma de «io» termina en -o: parlare → parlo.</p>
              </>
            ) : (
              <p>Sin resultados.</p>
            )}
          </div>
        ) : listShown ? (
          <div className="vf-list">
            {groups
              ? groups.map(group => (
                <section key={group.letter}>
                  <h3 id={`vf-letter-${group.letter}`} className="vf-letter" data-search-skip>{group.letter}</h3>
                  {group.items.map(renderCard)}
                </section>
              ))
              : visible.map(renderCard)}
          </div>
        ) : null}

        <div data-search-skip>
          <details className="lesson-extension">
            <summary>🔤 Guía de pronunciación</summary>
            <PronunciationGroups />
          </details>
          <details className="lesson-extension">
            <summary>📐 Conjugación regular y auxiliares</summary>
            {CONJUGATION_GROUPS.map(item => (
              <p key={item.label}>
                <span className="vf-it" lang="it">{item.label} ({item.example})</span>: {item.forms.join(", ")}.
              </p>
            ))}
            {AUX_RULES.map(rule => (
              <p key={rule}>{rule}</p>
            ))}
            <RelatedTopic levelId="basico5" topicId="passatoProssimo" />
          </details>
        </div>
      </FilterableList>
    </div>
  );
}

export default memo(VerbFinderSection);
