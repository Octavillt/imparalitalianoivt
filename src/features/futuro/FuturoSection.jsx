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
  FUTURE_MODELS,
  FUTURE_IRREGULAR_MODELS,
  IO_GLOSS,
  USES,
  PRESENT_FUTURE,
  HYPOTHESIS,
  SAME_ENDING,
  NEGATIVE,
  ASK_SAMPLES,
  MARKERS,
  PLANS,
  GUIDED_DIALOGS,
} from "./data";

const COLOR = "#34D399";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };

function ModelGrid({ model }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontWeight: 800, color: COLOR, marginBottom: "8px" }}>
        <span lang="it">{model.verb}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px" }}>
        {model.forms.map((form, index) => (
          <div key={`${model.verb}-${PERSONS[index]}`} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{PERSONS[index]}</div>
            <div lang="it" aria-label={form} style={{ fontSize: "18px", fontWeight: 900, margin: "4px 0" }}>
              <span style={{ color: C.verb.fg }}>{model.stem}</span>
              <span style={{ color: C.desinenza.fg, background: C.desinenza.bg, borderRadius: "4px", padding: "0 4px" }}>{model.ends[index]}</span>
            </div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {model.esps[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const models = FUTURE_MODELS.filter(item => item.group === "modelo");
const withH = FUTURE_MODELS.filter(item => item.group === "h");
const dropI = FUTURE_MODELS.filter(item => item.group === "i");

export default function FuturoSection() {
  return (
    <div>
      <TopicHeading topicId="futuro" />
      <div style={{ ...card, ...text }}>
        💡 El <strong style={{ color: "#f8fafc" }}>futuro semplice</strong> sirve para un plan, para una predicción y también para una suposición sobre lo que pasa ahora.
        <strong lang="it" style={{ color: "#f8fafc" }}> Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
        <span lang="it"> Lei</span>, de usted, va con mayúscula y usa la forma de <span lang="it">lui / lei</span>.
      </div>
      <Legend roles={["subject", "verb", "essere", "presente", "neg", "wh", "desinenza"]} />

      <RuleBox icon="🔑" rule="En -are, la a pasa a e" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>Se quita la e final del infinitivo. En <span lang="it">-are</span>, esa a pasa a e: <span lang="it">parlare → parlerò</span>.</li>
          <li>Las terminaciones son <span lang="it">-ò, -ai, -à, -emo, -ete, -anno</span>. El acento escrito va en io y en lui / lei.</li>
          <li><span lang="it">Non</span> va antes del verbo. La pregunta conserva el orden.</li>
        </ul>
        <Formula
          parts={[{ t: "parler", r: "verb" }, { t: "ò", r: "desinenza" }]}
          example={[{ t: "parlerò", r: "verb" }]}
          color={COLOR}
        />
      </RuleBox>

      <SectionTitle color={COLOR}>📐 Tres modelos</SectionTitle>
      {models.map(model => <ModelGrid key={model.verb} model={model} />)}

      <SectionTitle color={COLOR}>✏️ Ajustes de escritura</SectionTitle>
      <RuleBox icon="✏️" rule="Cercare y pagare escriben h" color={COLOR}>
        <p style={text}>
          La e del futuro cambiaría el sonido de la c y de la g. La h lo conserva: <span lang="it">cercherò, pagherò</span>.
        </p>
        {withH.map(model => <ModelGrid key={model.verb} model={model} />)}
      </RuleBox>
      <RuleBox icon="✏️" rule="Mangiare y cominciare no escriben la i" color={COLOR}>
        <p style={text}>
          En estos dos verbos la i no se escribe: la e del futuro ya marca el sonido. <span lang="it">Mangerò, comincerò</span>.
        </p>
        {dropI.map(model => <ModelGrid key={model.verb} model={model} />)}
      </RuleBox>

      <SectionTitle color={COLOR}>🏃 Raíces irregulares</SectionTitle>
      <p style={text}>
        La raíz cambia y luego se queda en las seis personas, con las mismas terminaciones.
        <span lang="it"> Essere</span> es sar-: <span lang="it">sarò</span> puede ser «seré» o «estaré».
        <span lang="it"> Stare</span> es star-: <span lang="it">starò</span> es «estaré», el verbo de estado.
        No son la misma forma. <span lang="it">Vorrò</span> es «querré». «Quisiera» es <span lang="it">vorrei</span>, otra forma.
      </p>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginBottom: "14px" }}>
        <div style={{ minWidth: "760px", display: "grid", gridTemplateColumns: "1.15fr repeat(6, 1fr)", gap: "4px" }}>
          <div />
          {PERSONS.map(person => (
            <div key={person} lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px", textAlign: "center" }}>{person}</div>
          ))}
          {FUTURE_IRREGULAR_MODELS.map(model => (
            <Fragment key={model.verb}>
              <div style={{ padding: "8px 4px" }}>
                <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{model.verb}</div>
                <div style={{ color: "#94a3b8", fontSize: "11px" }}>{model.meaning} · {IO_GLOSS[model.verb]}</div>
              </div>
              {model.forms.map((form, index) => (
                <div key={`${model.verb}-${PERSONS[index]}`} lang="it" aria-label={form} style={{ textAlign: "center", fontWeight: 800, padding: "8px 2px" }}>
                  <span style={{ color: C.verb.fg }}>{model.root}</span>
                  <span style={{ color: C.desinenza.fg }}>{model.ends[index]}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      {SAME_ENDING.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎬 Plan, predicción e hipótesis</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
        {USES.map(item => (
          <div key={item.title} style={{ ...card, borderLeft: `4px solid ${COLOR}` }}>
            <div style={{ color: COLOR, fontWeight: 800, marginBottom: "6px" }}>{item.title}</div>
            <ExampleCard pts={item.pts} esp={item.esp} />
          </div>
        ))}
      </div>
      <p style={text}>
        <span lang="it">Sarà a casa</span>, sin un momento futuro, supone el presente: debe de estar en casa.
        Con marcador, la misma forma habla de después: <span lang="it">Domani sarà a Roma</span> es «Mañana estará en Roma».
      </p>
      {HYPOTHESIS.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🗓️ El presente también anuncia un plan</SectionTitle>
      <p style={text}>
        Con un marcador de tiempo, el presente es muy frecuente para un plan ya situado. El futuro sigue disponible para ese plan.
      </p>
      <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />
      {PRESENT_FUTURE.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>❌ Negación y pregunta</SectionTitle>
      <RuleBox icon="💬" rule="Non va antes del verbo; la pregunta no cambia el orden" color={COLOR}>
        <Formula
          parts={[{ t: "non", r: "neg" }, { t: "futuro", r: "verb" }]}
          example={[{ t: "Non", r: "neg" }, { t: "andrò", r: "verb" }, { t: "a Roma.", color: "#94a3b8" }]}
          color={COLOR}
        />
        <p style={text}>La palabra interrogativa, si la hay, va primero. <span lang="it">Lei</span> de usted lleva mayúscula.</p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" />
      </RuleBox>
      {NEGATIVE.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      {ASK_SAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⏰ Marcadores de futuro</SectionTitle>
      <RuleBox icon="🗓️" rule="Sitúan el plan o la predicción" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {MARKERS.map(([it, es]) => (
            <li key={it}><span lang="it">{it}</span> — {es}</li>
          ))}
        </ul>
        <p style={text}>
          <span lang="it">Fra due giorni</span> dice lo mismo que <span lang="it">tra due giorni</span>.
          <span lang="it"> Prossima</span> concuerda con <span lang="it">settimana</span>; <span lang="it">prossimo</span>, con <span lang="it">mese</span> y con <span lang="it">anno</span>.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>🧳 Planes de Octavio y de Leslie</SectionTitle>
      {PLANS.map(item => (
        <div key={item.who} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ color: COLOR, fontWeight: 800, marginBottom: "6px" }}>{item.who}</div>
          <ExampleCard pts={item.pts} esp={item.esp} />
        </div>
      ))}

      <SectionTitle color={COLOR}>📘 Práctica guiada</SectionTitle>
      <div style={{ ...card, ...text }}>📝 {GUIDED_DIALOGS.prompt}</div>
      {GUIDED_DIALOGS.items.map(dialog => (
        <div key={dialog.blanks[0]} style={{ ...card, borderLeft: `3px solid ${COLOR}`, marginBottom: "12px" }}>
          <div lang="it" style={text}>
            {dialog.blanks.map(line => <div key={line}>{line}</div>)}
          </div>
          <details className="lesson-extension" style={{ margin: "10px 0 0" }}>
            <summary>Ver la respuesta</summary>
            <div lang="it" style={text}>
              {dialog.answers.map(line => <div key={line}>{line}</div>)}
            </div>
          </details>
        </div>
      ))}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe dos planes y uno que no vas a hacer. Si el plan ya tiene fecha, también puedes decirlo en presente.
        Usa el Quiz para practicar terminaciones, raíces irregulares y marcadores.
      </p>
    </div>
  );
}
