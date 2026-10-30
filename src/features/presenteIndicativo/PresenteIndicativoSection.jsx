import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  CONJUGATION_MODELS,
  SPELLING_GROUPS,
  ISC_MODELS,
  LORO_STRESS,
  USES,
  NEGATIVE,
  ASK_SAMPLES,
  THIRD_PERSON,
  DAILY,
} from "./data";

const COLOR = "#38BDF8";

// La raíz es el infinitivo sin las tres letras finales; raíz + terminación
// es la forma completa.
function ModelGrid({ model }) {
  const stem = model.stem;
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ fontWeight: 800, color: COLOR, marginBottom: "8px" }}>
        <span lang="it">{model.verb}</span>
        <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: "13px" }}> · {model.group}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px" }}>
        {model.forms.map(row => (
          <div key={`${model.verb}-${row.subj}`} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{row.subj}</div>
            <div lang="it" aria-label={row.form} style={{ fontSize: "20px", fontWeight: 900, margin: "4px 0" }}>
              <span style={{ color: C.verb.fg }}>{stem}</span>
              <span style={{ color: C.desinenza.fg, background: C.desinenza.bg, borderRadius: "4px", padding: "0 4px" }}>{row.end}</span>
            </div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {row.esp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IscTable() {
  const persons = ISC_MODELS[0].forms.map(form => form.subj);
  return (
    <div style={{ overflowX: "auto", marginTop: "8px" }}>
      <div style={{ minWidth: "720px", display: "grid", gridTemplateColumns: "1.15fr repeat(6, 1fr)", gap: "4px" }}>
        <div />
        {persons.map(person => (
          <div key={person} lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px", textAlign: "center", padding: "6px 2px" }}>{person}</div>
        ))}
        {ISC_MODELS.map(model => (
          <Fragment key={model.verb}>
            <div lang="it" style={{ color: COLOR, fontWeight: 800, padding: "8px 4px" }}>{model.verb}</div>
            {model.forms.map(form => (
              <div key={form.subj} lang="it" style={{ textAlign: "center", padding: "8px 2px", color: C.verb.fg, fontWeight: 800 }}>{form.form}</div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function PresenteIndicativoSection() {
  return (
    <div>
      <TopicHeading topicId="presenteIndicativo" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 El <strong style={{ color: "#f8fafc" }}>presente indicativo</strong> dice lo que haces en la rutina y también lo que pasa ahora, cuando basta una forma simple:{" "}
        <span lang="it">Studio italiano ogni giorno. Mangio una pizza.</span>{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
      </div>
      <Legend roles={["subject", "verb", "desinenza", "neg", "wh"]} />

      <SectionTitle color={COLOR}>📐 Tres modelos, y el grupo -isc-</SectionTitle>
      {CONJUGATION_MODELS.map(model => <ModelGrid key={model.verb} model={model} />)}

      <RuleBox icon="🔎" rule="El grupo -isc- agrega isc en io, tu, lui/lei y loro" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          En <span lang="it">noi</span> y <span lang="it">voi</span> no entra: <span lang="it">capiamo, capite</span>.
          Lo mismo hacen <span lang="it">finire, preferire, pulire</span> y <span lang="it">spedire</span>.
          <span lang="it"> Dormire</span> y <span lang="it">partire</span> no son de este grupo: <span lang="it">dormo, parto</span>.
        </p>
        <IscTable />
      </RuleBox>

      <SectionTitle color={COLOR}>✏️ Ajustes de escritura</SectionTitle>
      {SPELLING_GROUPS.map(group => (
        <RuleBox key={group.title} icon="✏️" rule={group.title} color={COLOR}>
          <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>{group.text}</p>
          {group.models.map(model => <ModelGrid key={model.verb} model={model} />)}
        </RuleBox>
      ))}
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        En esta tabla, <span lang="it">cercare</span> es buscar. Con <span lang="it">di</span> + infinitivo significa intentar; esa construcción está en la lección siguiente.
      </p>
      <RelatedTopic levelId="basico2" topicId="verbiInfinito" />

      <SectionTitle color={COLOR}>🔊 El golpe de voz en loro</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        En <span lang="it">parlano, credono</span> y <span lang="it">dormono</span> el golpe va en la primera sílaba. No se escribe acento. Las mayúsculas de abajo solo marcan la pronunciación.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", margin: "8px 0 16px" }}>
        {LORO_STRESS.map(item => (
          <div key={item.form} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div lang="it" style={{ color: C.verb.fg, fontWeight: 900, fontSize: "18px" }}>{item.form}</div>
            <div style={{ color: COLOR, fontWeight: 800, margin: "4px 0" }}>{item.guide}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {item.esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        En <span lang="it">capiscono</span> el golpe va en otra sílaba: ca-PIS-co-no. No copies el ritmo de <span lang="it">parlano</span>.
      </p>

      <SectionTitle color={COLOR}>🎬 ¿Cuándo se usa?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "8px" }}>
        {USES.map(item => (
          <div key={item.title} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", borderLeft: `4px solid ${COLOR}` }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{item.icon} {item.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{item.subtitle}</div>
            <div style={{ lineHeight: 2 }}><Sentence pts={item.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {item.esp}</div>
          </div>
        ))}
      </div>
      <RelatedTopic levelId="basico1" topicId="stareGerundio" />

      <SectionTitle color={COLOR}>❌ Negación</SectionTitle>
      <RuleBox icon="❌" rule="Non va antes del verbo" color="#f87171">
        <Formula
          parts={[{ t: "Non", r: "neg" }, { t: "verbo", r: "verb" }, { t: "complemento", color: "#e2e8f0" }]}
          example={[{ t: "Non", r: "neg" }, { t: "lavoro", r: "verb" }, { t: "il sabato.", color: "#94a3b8" }]}
          color="#f87171"
        />
      </RuleBox>
      {NEGATIVE.map(ex => (
        <div key={ex.esp} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>❓ Pregunta</SectionTitle>
      <RuleBox icon="❓" rule="El orden no cambia: solo la entonación" color={COLOR}>
        <Formula
          parts={[{ t: "Verbo", r: "verb" }, { t: "complemento", color: "#e2e8f0" }, { t: "?", color: "#e2e8f0" }]}
          example={[{ t: "Lavori", r: "verb" }, { t: "a Roma?", color: "#94a3b8" }]}
          color={COLOR}
        />
        <p style={{ color: "#94a3b8", fontSize: "13px", marginTop: "8px" }}>
          Si pides un dato, la palabra interrogativa va primero: <span lang="it">Dove lavori?</span>
        </p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" />
      </RuleBox>
      {ASK_SAMPLES.map(ex => (
        <div key={ex.esp} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          {ex.a && <div lang="it" style={{ color: "#94a3b8", fontSize: "13px" }}>→ {ex.a}</div>}
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>👥 En tercera persona</SectionTitle>
      {THIRD_PERSON.map(ex => (
        <div key={ex.esp} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🗓️ Acciones cotidianas</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Leggere</span> y <span lang="it">scrivere</span> siguen estos modelos en presente. <span lang="it">Fai</span> es de <span lang="it">fare</span>. El participio <span lang="it">letto</span> y <span lang="it">scritto</span>, y la conjugación de <span lang="it">fare</span>, están en Verbos irregulares.
      </p>
      <RelatedTopic levelId="basico2" topicId="irregularVerbs" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "8px" }}>
        {DAILY.map(([verb, io, lui, esp, note]) => (
          <div key={verb} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{verb}</div>
            <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px" }}>{io} · {lui}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}{note ? ` · ${note}` : ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
