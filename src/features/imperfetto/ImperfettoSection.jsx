import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  PERSONS,
  IMPERFECT_MODELS,
  USES,
  CONTRAST,
  MARKERS,
  EXTRA,
  BOOK_STORY,
  BOOK_NEGATIVES,
  BOOK_CONVERSATION,
} from "./data";

const COLOR = "#F59E0B";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };

function ModelGrid({ model }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontWeight: 800, color: COLOR, marginBottom: "8px" }}>
        <span lang="it">{model.verb}</span>
        <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: "13px" }}> · {model.group}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px" }}>
        {model.forms.map((form, index) => (
          <div key={`${model.verb}-${PERSONS[index]}`} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{PERSONS[index]}</div>
            <div lang="it" aria-label={form} style={{ fontSize: "18px", fontWeight: 900, margin: "4px 0" }}>
              {model.stem ? (
                <>
                  <span style={{ color: C.verb.fg }}>{model.stem}</span>
                  <span style={{ color: C.desinenza.fg, background: C.desinenza.bg, borderRadius: "4px", padding: "0 4px" }}>{model.ends[index]}</span>
                </>
              ) : (
                <span style={{ color: model.verb === "essere" ? C.essere.fg : C.verb.fg }}>{form}</span>
              )}
            </div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {model.esps[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const regular = IMPERFECT_MODELS.filter(item => item.kind === "regular");
const irregular = IMPERFECT_MODELS.filter(item => item.kind === "irregular");

export default function ImperfettoSection() {
  return (
    <div>
      <TopicHeading topicId="imperfetto" />
      <div style={{ ...card, ...text }}>
        💡 El <strong style={{ color: "#f8fafc" }}>imperfetto</strong> se parece al copretérito: hablaba, comía.
        Describe un hábito, una escena o una acción que seguía en curso.
        <strong lang="it" style={{ color: "#f8fafc" }}> Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
        <span lang="it"> Lei</span>, de usted, usa la misma forma que <span lang="it">lui / lei</span>.
      </div>
      <Legend roles={["subject", "verb", "essere", "aux", "participle", "desinenza"]} />

      <RuleBox icon="🔑" rule="La terminación dice la persona" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><span lang="it">-are</span>: <span lang="it">-avo, -avi, -ava, -avamo, -avate, -avano</span>.</li>
          <li><span lang="it">-ere</span>: <span lang="it">-evo, -evi, -eva, -evamo, -evate, -evano</span>.</li>
          <li><span lang="it">-ire</span>: <span lang="it">-ivo, -ivi, -iva, -ivamo, -ivate, -ivano</span>.</li>
        </ul>
        <Formula
          parts={[{ t: "raíz", r: "verb" }, { t: "terminación", r: "desinenza" }]}
          example={[{ t: "parl", r: "verb" }, { t: "avo", r: "desinenza" }]}
          color={COLOR}
        />
        <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />
      </RuleBox>

      <SectionTitle color={COLOR}>📐 Tres modelos</SectionTitle>
      {regular.map(model => <ModelGrid key={model.verb} model={model} />)}

      <SectionTitle color={COLOR}>🏃 Cuatro irregulares</SectionTitle>
      <p style={text}>
        <span lang="it">Essere</span> no se parte en raíz y terminación de estos modelos.
        <span lang="it"> Ero</span> cubre «yo era» y «yo estaba».
        <span lang="it"> Fare, bere</span> y <span lang="it">dire</span> conservan una raíz propia y, después, la terminación breve: <span lang="it">facev + o = facevo</span>.
      </p>
      {irregular.map(model => <ModelGrid key={model.verb} model={model} />)}
      <ScrollHint />
      <div style={{ overflowX: "auto", marginBottom: "14px" }}>
        <div style={{ minWidth: "720px", display: "grid", gridTemplateColumns: "1.1fr repeat(6, 1fr)", gap: "4px" }}>
          <div />
          {PERSONS.map(person => (
            <div key={person} lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px", textAlign: "center" }}>{person}</div>
          ))}
          {irregular.map(model => (
            <Fragment key={model.verb}>
              <div lang="it" style={{ color: COLOR, fontWeight: 800, padding: "8px 4px" }}>{model.verb}</div>
              {model.forms.map(form => (
                <div key={`${model.verb}-${form}`} lang="it" style={{ textAlign: "center", color: C.verb.fg, fontWeight: 800 }}>{form}</div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      <SectionTitle color={COLOR}>🎬 Tres usos</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px", marginBottom: "8px" }}>
        {USES.map(item => (
          <div key={item.title} style={{ ...card, borderLeft: `4px solid ${COLOR}` }}>
            <div style={{ color: COLOR, fontWeight: 800 }}>{item.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{item.text}</div>
            <ExampleCard pts={item.pts} esp={item.esp} />
          </div>
        ))}
      </div>
      {EXTRA.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⚖️ Junto al passato prossimo</SectionTitle>
      <p style={text}>
        No son dos maneras de decir lo mismo. El passato prossimo cierra un hecho.
        El imperfetto deja el fondo, la descripción o el hábito.
      </p>
      <RelatedTopic levelId="basico5" topicId="passatoProssimo" />
      {CONTRAST.map(item => (
        <div key={item.esp}>
          <ExampleCard pts={item.pts} esp={item.esp} />
          <p style={{ color: "#94a3b8", fontSize: "12px", margin: "-4px 0 10px" }}>{item.note}</p>
        </div>
      ))}

      <SectionTitle color={COLOR}>⏰ Marcadores de esta época</SectionTitle>
      <RuleBox icon="🗓️" rule="Acompañan un hábito, una descripción o un fondo" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {MARKERS.map(([it, es]) => (
            <li key={it}><span lang="it">{it}</span> — {es}</li>
          ))}
        </ul>
        <p style={text}>
          <span lang="it">Sempre</span> con imperfetto suele pintar un hábito: <span lang="it">mangiavo sempre la pizza</span>.
          Con passato prossimo puede contar una experiencia: <span lang="it">Ho sempre mangiato la pasta</span> es «Siempre he comido pasta».
          <span lang="it"> Di solito</span>, en presente, habla de ahora; aquí, de aquella época.
        </p>
      </RuleBox>

      <RuleBox icon="🧭" rule="Una guía para elegir, con casos que se salen" color={COLOR}>
        <p style={text}>
          Si el relato señala un momento y la acción ya quedó hecha, usa el passato prossimo: <span lang="it">Ieri ho mangiato una pizza</span>.
          Si cuentas cómo era algo, qué se hacía o qué seguía de fondo, usa el imperfetto.
          En la misma frase pueden ir los dos: <span lang="it">Mentre studiavo, Leslie è arrivata</span>.
          Esta guía no cierra los relatos que se salen de estos ejemplos: las dos formas existen y dicen cosas distintas.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>📘 Práctica guiada</SectionTitle>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>📝 {BOOK_STORY.prompt}</div>
        <ol style={{ ...text, paddingLeft: "20px" }}>
          {BOOK_STORY.lines.map(([prompt]) => <li key={prompt} lang="it">{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las frases completas</summary>
          {BOOK_STORY.lines.map(([, answer]) => <p key={answer} lang="it" style={text}>{answer}</p>)}
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>✏️ {BOOK_NEGATIVES.prompt}</div>
        <ol style={{ ...text, paddingLeft: "20px" }}>
          {BOOK_NEGATIVES.rows.map(([prompt]) => <li key={prompt} lang="it">{prompt}</li>)}
        </ol>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver las negaciones</summary>
          <ol style={{ ...text, paddingLeft: "20px" }}>
            {BOOK_NEGATIVES.rows.map(([, answer]) => <li key={answer} lang="it">{answer}</li>)}
          </ol>
        </details>
      </div>
      <div style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
        <div style={text}>💬 {BOOK_CONVERSATION.prompt}</div>
        <div lang="it" style={text}>
          {BOOK_CONVERSATION.blanks.map(line => <div key={line}>{line}</div>)}
        </div>
        <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
          <summary>Ver la conversación completa</summary>
          <div lang="it" style={text}>
            {BOOK_CONVERSATION.answers.map(line => <div key={line}>{line}</div>)}
          </div>
        </details>
      </div>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe un hábito de cuando eras niño o niña y un hecho de ayer.
        En el hábito va el imperfetto; en el hecho de ayer, el passato prossimo.
      </p>
    </div>
  );
}
