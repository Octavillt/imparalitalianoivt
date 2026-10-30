import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import SectionTitle from "../../components/SectionTitle";
import Token from "../../components/Token";
import { C } from "../../styles/colors";
import {
  PERSONS,
  AVERE_PRESENT,
  ESSERE_PRESENT,
  REGULAR_PARTICIPLES,
  IRREGULAR_PARTICIPLES,
  ESSERE_VERBS,
  AUXILIARY_EXAMPLES,
  AGREEMENT,
  NEGATIVES,
  ASK_SAMPLES,
  MARKERS,
  MAI,
  STORY,
  GUIDED_STORY,
  GUIDED_NEGATIVES,
  GUIDED_CONVERSATION,
  PATTERN_PARTS,
} from "./data";

const COLOR = "#FB7185";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

function fold(value) {
  return value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const avereExamples = AUXILIARY_EXAMPLES.filter(item => item.aux === "avere");
const essereExamples = AUXILIARY_EXAMPLES.filter(item => item.aux === "essere");

export default function PassatoProssimoSection() {
  const [filter, setFilter] = useState("");
  const q = fold(filter.trim());
  const participles = IRREGULAR_PARTICIPLES.filter(([verb, part, es]) => {
    if (!q) return true;
    return fold(`${verb} ${part} ${es}`).includes(q);
  });

  return (
    <div>
      <TopicHeading topicId="passatoProssimo" />
      <div style={{ ...card, ...text }}>
        💡 El <strong style={{ color: "#f8fafc" }}>passato prossimo</strong> cuenta lo que ya pasó.
        Se forma con <span lang="it">avere</span> o <span lang="it">essere</span> en presente, más el participio passato.
        La misma frase cubre «comí» y «he comido»: con <span lang="it">ieri</span>, en México suena natural «comí»; con <span lang="it">mai</span>, «he comido».
        <strong lang="it" style={{ color: "#f8fafc" }}> Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
      </div>
      <Legend roles={["subject", "aux", "participle", "verb", "neg", "wh"]} />

      <RuleBox icon="🔑" rule="El auxiliar va en presente y el participio dice la acción" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>Con <span lang="it">avere</span> van la mayoría de los verbos, sobre todo si llevan objeto directo.</li>
          <li>Con <span lang="it">essere</span> van muchos verbos de movimiento o de cambio de estado, y los reflexivos.</li>
          <li>El orden de la afirmación se conserva en la pregunta. El italiano no abre con ¿.</li>
        </ul>
        <Formula
          parts={PATTERN_PARTS.avere}
          example={[{ t: "Ho", r: "aux" }, { t: "mangiato", r: "participle" }, { t: "la pizza.", color: "#94a3b8" }]}
          color={COLOR}
        />
        <Formula
          parts={PATTERN_PARTS.essere}
          example={[{ t: "Sono", r: "aux" }, { t: "andato", r: "participle" }, { t: "a Roma.", color: "#94a3b8" }]}
          color={COLOR}
        />
        <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />
        <RelatedTopic levelId="basico2" topicId="irregularVerbs" />
      </RuleBox>

      <SectionTitle color={COLOR}>✍️ Participio regular</SectionTitle>
      {REGULAR_PARTICIPLES.map(([rule, forms, meaning]) => (
        <div key={forms} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{forms}</div>
          <div style={translation}>{rule}. 🇲🇽 {meaning}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🍽️ Con avere</SectionTitle>
      <p style={text}>
        En estas frases el objeto va después y el participio queda en <span lang="it">-o</span>.
        <span lang="it"> Ho</span> es de <span lang="it">avere</span>; <span lang="it">mangiato</span> es el participio de <span lang="it">mangiare</span>.
      </p>
      {avereExamples.map(item => <ExampleCard key={item.it} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🚶 Con essere</SectionTitle>
      <p style={text}>
        Estos verbos se combinan aquí con <span lang="it">essere</span>. Algunos, en otra construcción, también admiten <span lang="it">avere</span>; la frase de la lección es la de movimiento o cambio de estado.
      </p>
      <ul style={{ ...text, listStyle: "none", paddingLeft: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px 14px" }}>
        {ESSERE_VERBS.map(([verb, meaning]) => (
          <li key={verb}>
            <div lang="it" style={{ color: "#f8fafc", fontWeight: 700 }}>{verb}</div>
            <div style={translation}>{meaning}</div>
          </li>
        ))}
      </ul>
      <p style={text}>
        Los reflexivos también usan <span lang="it">essere</span>. El pronombre va antes del auxiliar: <span lang="it">mi sono alzata</span>.
        <span lang="it"> Alle</span> es a + le.
      </p>
      <RelatedTopic levelId="basico3" topicId="routineRiflessivi" />
      {essereExamples.map(item => <ExampleCard key={item.it} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>👥 Concordancia</SectionTitle>
      <RuleBox icon="👥" rule="Con essere, el participio concuerda como un adjetivo" color={COLOR}>
        <p style={text}>
          Masculino singular, <span lang="it">-o</span>. Femenino singular, <span lang="it">-a</span>.
          Si en el grupo hay un hombre, <span lang="it">-i</span>. Si el grupo es de mujeres, <span lang="it">-e</span>.
        </p>
      </RuleBox>
      {AGREEMENT.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🏃 Participios irregulares</SectionTitle>
      <p style={text}>
        No salen de <span lang="it">-ato</span>, <span lang="it">-uto</span> ni <span lang="it">-ito</span>.
        <span lang="it"> Visto</span> es la forma frecuente de <span lang="it">vedere</span>; <span lang="it">veduto</span> también existe.
        <span lang="it"> Perso</span> es la forma frecuente de <span lang="it">perdere</span>; <span lang="it">perduto</span> también existe.
        <span lang="it"> Essere</span> y <span lang="it">stare</span> comparten la forma <span lang="it">stato</span>, y la frase dice cuál es: <span lang="it">Sono stato a Roma</span> es «estuve en Roma»; <span lang="it">Sono stato male</span> es «estuve mal».
      </p>
      <RelatedTopic levelId="basico2" topicId="irregularVerbs" />
      <FilterableList
        label="Buscar participio irregular"
        placeholder="🔍 Busca: fare, fatto, hacer…"
        value={filter}
        onChange={setFilter}
      >
        {participles.length === 0 ? (
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>No hay coincidencias para «{filter.trim()}».</p>
        ) : (
          <ul style={{ ...text, listStyle: "none", paddingLeft: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px 16px" }}>
            {participles.map(([verb, part, meaning]) => (
              <li key={verb}>
                <div lang="it" style={{ color: "#f8fafc", fontWeight: 700, fontSize: "14px" }}>
                  <Token t={verb} r="verb" />
                  <span style={{ color: "#64748b" }}> → </span>
                  <Token t={part} r="participle" />
                </div>
                <div style={translation}>{meaning}</div>
              </li>
            ))}
          </ul>
        )}
      </FilterableList>

      <SectionTitle color={COLOR}>🔤 Los auxiliares, persona por persona</SectionTitle>
      <p style={text}>El auxiliar es el presente de <span lang="it">avere</span> o de <span lang="it">essere</span>. <span lang="it">Voi</span> es ustedes.</p>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginBottom: "14px" }}>
        <div style={{ minWidth: "640px", display: "grid", gridTemplateColumns: "1fr repeat(6, 1fr)", gap: "4px" }}>
          <div />
          {PERSONS.map(person => (
            <div key={person} lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px", textAlign: "center" }}>{person}</div>
          ))}
          <div lang="it" style={{ color: COLOR, fontWeight: 800, padding: "8px 4px" }}>avere</div>
          {AVERE_PRESENT.map(form => (
            <div key={`avere-${form}`} lang="it" style={{ textAlign: "center", color: C.aux.fg, fontWeight: 800 }}>{form}</div>
          ))}
          <div lang="it" style={{ color: COLOR, fontWeight: 800, padding: "8px 4px" }}>essere</div>
          {ESSERE_PRESENT.map((form, index) => (
            <div key={`essere-${PERSONS[index]}`} lang="it" style={{ textAlign: "center", color: C.aux.fg, fontWeight: 800 }}>{form}</div>
          ))}
        </div>
      </div>

      <SectionTitle color={COLOR}>❌ Negación</SectionTitle>
      <RuleBox icon="❌" rule="Non va antes del auxiliar" color="#f87171">
        <Formula
          parts={PATTERN_PARTS.negation}
          example={[{ t: "Non", r: "neg" }, { t: "ho", r: "aux" }, { t: "mangiato.", r: "participle" }]}
          color="#f87171"
        />
        <p style={text}>En un reflexivo, <span lang="it">non</span> va antes del pronombre: <span lang="it">Non mi sono alzata</span>.</p>
      </RuleBox>
      {NEGATIVES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>❓ Pregunta</SectionTitle>
      <RuleBox icon="💬" rule="El orden no cambia: solo la entonación" color={COLOR}>
        <Formula
          parts={PATTERN_PARTS.question}
          example={[{ t: "Hai", r: "aux" }, { t: "mangiato?", r: "participle" }]}
          color={COLOR}
        />
        <p style={text}>
          Si pides un dato, la palabra interrogativa va primero.
          <span lang="it"> Cosa hai fatto ieri?</span> dice lo mismo que <span lang="it">Che cosa hai fatto ieri?</span>
        </p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" />
      </RuleBox>
      {ASK_SAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⏰ Marcadores de pasado</SectionTitle>
      <RuleBox icon="🗓️" rule="Sitúan la acción en un momento ya cerrado" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {MARKERS.map(([it, es]) => (
            <li key={it}><span lang="it">{it}</span> — {es}</li>
          ))}
        </ul>
        <p style={text}>
          <span lang="it">Nel</span> es in + il. <span lang="it">Fa</span> va después del periodo: <span lang="it">due giorni fa</span>.
          <span lang="it"> Scorsa</span> concuerda con <span lang="it">settimana</span>; <span lang="it">scorso</span>, con <span lang="it">mese</span> y con <span lang="it">anno</span>.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>🚫 Con mai</SectionTitle>
      <p style={text}>
        En la negación, <span lang="it">non</span> va antes del auxiliar y <span lang="it">mai</span> entre el auxiliar y el participio.
        En la pregunta no hace falta <span lang="it">non</span>: <span lang="it">Hai mai mangiato il sushi?</span> es «¿Has comido sushi alguna vez?».
      </p>
      <ExampleCard pts={MAI.pts} esp={MAI.esp} />

      <SectionTitle color={COLOR}>📘 Un fin de semana en Roma</SectionTitle>
      <p style={text}>
        Leslie cuenta en primera persona. Con <span lang="it">essere</span>, el participio va en femenino.
        <span lang="it"> Sabato</span>, sin artículo, es ese sábado. <span lang="it">Il sabato</span> sería los sábados.
        <span lang="it"> A casa</span> no lleva artículo. <span lang="it">Alla stazione</span> sí: a + la.
      </p>
      {STORY.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>📘 Práctica guiada</SectionTitle>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>📝 {GUIDED_STORY.prompt}</div>
        <ol style={{ ...text, paddingLeft: "20px" }}>
          {GUIDED_STORY.lines.map(([prompt]) => <li key={prompt} lang="it">{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver el relato completo</summary>
          {GUIDED_STORY.lines.map(([, answer]) => <p key={answer} lang="it" style={text}>{answer}</p>)}
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>✏️ {GUIDED_NEGATIVES.prompt}</div>
        <ol style={{ ...text, paddingLeft: "20px" }}>
          {GUIDED_NEGATIVES.rows.map(([prompt]) => <li key={prompt} lang="it">{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las negaciones</summary>
          <ol style={{ ...text, paddingLeft: "20px" }}>
            {GUIDED_NEGATIVES.rows.map(([, answer]) => <li key={answer} lang="it">{answer}</li>)}
          </ol>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>💬 {GUIDED_CONVERSATION.prompt}</div>
        <div lang="it" style={text}>
          {GUIDED_CONVERSATION.blanks.map(line => <div key={line}>{line}</div>)}
        </div>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver la conversación completa</summary>
          <div lang="it" style={text}>
            {GUIDED_CONVERSATION.answers.map(line => <div key={line}>{line}</div>)}
          </div>
        </details>
      </div>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe dos cosas que hiciste ayer y una que no hiciste. Si el verbo va con <span lang="it">essere</span>, concuerda el participio.
        Usa el Quiz para practicar auxiliar, participio, negación y pregunta.
      </p>
    </div>
  );
}
