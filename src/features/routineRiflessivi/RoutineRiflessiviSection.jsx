import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  PERSONS, PRONOUNS, ROUTINE_VERBS, SPECIAL, FARSI, NEGATIVE, BODY_WASH,
  DAY_PARTS, FREQUENCY, HOW_OFTEN, FREQUENCY_EXAMPLES, QA, CONTRAST,
  CONTRAST_LINE, LESLIE_DAY, MISTAKES, SOLVED,
} from "./data";

const COLOR = "#0EA5E9";

function QaCard({ q, a, esp }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
      <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
      <div lang="it" style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
      <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
    </div>
  );
}

function SpecialTable() {
  return (
    <>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginTop: "8px" }}>
        <div style={{ minWidth: "760px", display: "grid", gridTemplateColumns: "1.15fr repeat(6, 1fr)", gap: "4px" }}>
          <div />
          {PERSONS.map(person => (
            <div key={person} lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px", textAlign: "center", padding: "6px 2px" }}>{person}</div>
          ))}
          {SPECIAL.map(row => (
            <Fragment key={row.verb}>
              <div style={{ padding: "8px 4px" }}>
                <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{row.verb}</div>
                <div style={{ color: "#94a3b8", fontSize: "11px" }}>{row.esp}</div>
              </div>
              {row.forms.map(form => (
                <div key={form} lang="it" style={{ textAlign: "center", padding: "8px 2px", color: C.verb.fg, fontWeight: 800, fontSize: "13px" }}>{form}</div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default function RoutineRiflessiviSection() {
  return (
    <div>
      <TopicHeading topicId="routineRiflessivi" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 El verbo reflexivo lleva un pronombre <strong style={{ color: "#f8fafc" }}>antes</strong> del verbo:{" "}
        <span lang="it">mi alzo, ti alzi, si alza</span>. Con eso cuentas lo que haces cada día y cada cuánto.{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
      </div>
      <Legend roles={["verb", "neg", "wh", "prep", "articolata", "art", "gerundio", "essere"]} />
      <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />

      <RuleBox icon="🔁" rule="El pronombre va antes del verbo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, margin: "6px 0 10px" }}>
          <span lang="it">Alzarsi</span> se conjuga así. El pronombre cambia con la persona; en <span lang="it">lui / lei</span> y en <span lang="it">loro</span> es <span lang="it">si</span>.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px" }}>
          {PRONOUNS.map(([person, pronoun, form, esp]) => (
            <div key={person} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{person}</div>
              <div lang="it" style={{ color: COLOR, fontWeight: 800, fontSize: "13px" }}>{pronoun}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 800, margin: "2px 0" }}>{form}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🌅 Verbos de la rutina</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px", marginBottom: "12px" }}>
        {ROUTINE_VERBS.map(([verb, io, esp, note]) => (
          <div key={verb} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px", borderLeft: `3px solid ${COLOR}` }}>
            <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{verb}</div>
            <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px" }}>{io}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}{note ? ` · ${note}` : ""}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Sedersi</span> lleva <span lang="it">ie</span> cuando el golpe de voz cae en esa sílaba: <span lang="it">siedo, siedi, siede, siedono</span>. En <span lang="it">noi</span> y <span lang="it">voi</span> queda <span lang="it">e</span>: <span lang="it">sediamo, sedete</span>.{" "}
        <span lang="it">Divertirsi</span> hace <span lang="it">mi diverto</span>. <span lang="it">Vestirsi</span> no entra en el grupo <span lang="it">-isc-</span>.
      </p>
      <SpecialTable />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px", margin: "12px 0 16px" }}>
        {FARSI.map(([person, form, esp]) => (
          <div key={person} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{person}</div>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700 }}>{form}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        <span lang="it">Faccio la doccia</span>, sin pronombre, también se usa. En esta lección practicamos la forma reflexiva: <span lang="it">mi faccio la doccia</span>.
      </p>

      <SectionTitle color={COLOR}>❌ Negación</SectionTitle>
      <RuleBox icon="❌" rule="Non va antes del pronombre" color="#f87171">
        <Formula
          parts={[{ t: "Non", r: "neg" }, { t: "pronombre", color: "#e2e8f0" }, { t: "verbo", r: "verb" }]}
          example={[{ t: "Non", r: "neg" }, { t: "mi", color: "#94a3b8" }, { t: "alzo presto.", color: "#94a3b8" }]}
          color="#f87171"
        />
      </RuleBox>
      {NEGATIVE.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🤲 Lavarse una parte del cuerpo</SectionTitle>
      <RuleBox icon="🤲" rule="Artículo, y sin posesivo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Igual que en español: <span lang="it">mi lavo le mani</span>, no un posesivo. El artículo es el de la parte del cuerpo.
        </p>
      </RuleBox>
      {BODY_WASH.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}
      <RelatedTopic levelId="basico4" topicId="bodyParts" />

      <SectionTitle color={COLOR}>🌇 Partes del día</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", marginBottom: "8px" }}>
        {DAY_PARTS.map(([it, esp]) => (
          <div key={it} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 800 }}>{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        <span lang="it">La sera</span> comprende el final de la tarde y el comienzo de la noche; <span lang="it">la notte</span> designa el periodo nocturno, estés despierto o dormido. <span lang="it">Alle sette</span> significa a las siete: <span lang="it">a + le</span>.
      </p>
      <RelatedTopic levelId="basico1" topicId="time" />

      <SectionTitle color={COLOR}>📊 Cada cuánto</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {FREQUENCY.map(([word, esp]) => (
          <div key={word} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{esp}</div>
          </div>
        ))}
      </div>
      <RuleBox icon="📍" rule="El adverbio suele ir después del verbo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Di solito</span>, <span lang="it">qualche volta</span> y <span lang="it">a volte</span> también pueden abrir la oración. En la frase negativa, <span lang="it">mai</span> y <span lang="it">quasi mai</span> van con <span lang="it">non</span>: el <span lang="it">non</span> antes del verbo y <span lang="it">mai</span> después. En una pregunta, <span lang="it">mai</span> puede ir sin <span lang="it">non</span>: <span lang="it">Bevi mai il caffè?</span>
        </p>
        <div style={{ color: "#4ade80", fontSize: "13px", marginTop: "6px" }}>✅ <span lang="it">Mi alzo sempre alle sette.</span></div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ <span lang="it">Di solito mi alzo alle sette.</span></div>
        <div style={{ color: "#f87171", fontSize: "13px" }}>❌ <span lang="it">Mi sempre alzo alle sette.</span></div>
      </RuleBox>
      {FREQUENCY_EXAMPLES.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "8px 0 12px" }}>
        {HOW_OFTEN.map(([word, esp]) => (
          <div key={word} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 14px" }}>
            <div lang="it" style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Alla</span> es <span lang="it">a + la</span> y <span lang="it">al</span> es <span lang="it">a + il</span>. <span lang="it">Il sabato</span> significa los sábados.
      </p>

      <SectionTitle color={COLOR}>❓ Preguntas</SectionTitle>
      {QA.map(ex => <QaCard key={ex.esp} q={ex.q} a={ex.a} esp={ex.esp} />)}
      <RelatedTopic levelId="basico2" topicId="whQuestions" />

      <SectionTitle color={COLOR}>🆚 La rutina y lo de ahora</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
        {CONTRAST.map(card => (
          <div key={card.title} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{card.icon} {card.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{card.subtitle}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginBottom: "8px" }}>{card.when}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "8px" }}>
              {card.markers.map(marker => (
                <span key={marker} lang="it" style={{ background: "var(--surface-deep, #0f172a)", border: "1px solid #334155", borderRadius: "20px", padding: "3px 10px", color: "#e2e8f0", fontSize: "12px", fontWeight: 700 }}>{marker}</span>
              ))}
            </div>
            <div style={{ lineHeight: 2 }}><Sentence pts={card.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {card.esp}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <ExampleCard pts={CONTRAST_LINE.pts} esp={CONTRAST_LINE.esp} />
      </div>
      <RelatedTopic levelId="basico1" topicId="stareGerundio" />

      <SectionTitle color={COLOR}>🗓️ Un día de Leslie</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        Leslie cuenta su día, de la mañana a la noche, en primera persona.
      </p>
      {LESLIE_DAY.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>⚠️ Formas que no se escriben así</SectionTitle>
      {MISTAKES.map(item => (
        <div key={item.wrong} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div lang="it" style={{ color: "#f87171", fontSize: "14px" }}>❌ {item.wrong}</div>
          <div lang="it" style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {item.right}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {item.note}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto</SectionTitle>
      {SOLVED.map((ex, index) => (
        <div key={ex.q} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{index + 1}. 🇲🇽 {ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
        </div>
      ))}
    </div>
  );
}
