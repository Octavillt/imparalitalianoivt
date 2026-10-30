import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import Token from "../../components/Token";
import {
  DEFINITE_SINGULAR,
  DEFINITE_PLURAL,
  INDEFINITE,
  WITH_ARTICLE,
  ZERO_USES,
  DECISION_STEPS,
  ARTICLE_EXERCISE,
} from "./data";

const COLOR = "#A3E635";

// Una fila de la tabla de artículos: forma grande, regla y ejemplos.
function ArticleFormRow({ form, rule, examples }) {
  return (
    <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
        <span lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "20px" }}>{form}</span>
        <span style={{ color: "#94a3b8", fontSize: "12px" }}>{rule}</span>
      </div>
      <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "4px" }} lang="it">{examples.join(" · ")}</div>
    </div>
  );
}

export default function ArticlesSection() {
  return (
    <div>
      <TopicHeading topicId="articles" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 El italiano usa artículos como el español, pero con más formas: cada sustantivo lleva el suyo según{" "}
        <strong style={{ color: "#f8fafc" }}>género</strong>, <strong style={{ color: "#f8fafc" }}>número</strong> y la{" "}
        <strong style={{ color: "#f8fafc" }}>letra con la que empieza</strong>.
      </div>
      <Legend roles={["art", "zero", "masc", "fem"]} />

      <RuleBox icon="📖" rule="Artículos determinativos — el, la, los, las" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Singular:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {DEFINITE_SINGULAR.map(row => <ArticleFormRow key={row.form} {...row} />)}
        </div>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "12px" }}>
          Plural:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {DEFINITE_PLURAL.map(row => <ArticleFormRow {...row} key={row.form} />)}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "10px" }}>
          🧠 Truco: el plural sale del singular: il → i, la → le; lo y l' masculino → gli.
        </p>
      </RuleBox>

      <RuleBox icon="🔢" rule="Artículos indeterminativos — un, una" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px" }}>
          {INDEFINITE.map(row => <ArticleFormRow {...row} key={row.form} />)}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginTop: "10px" }}>
          ⚠️ Ojo con el contraste: <Token t="un" r="art" /> <Token t="amico" r="masc" /> (un amigo, masculino sin apóstrofo) pero{" "}
          <Token t="un'" r="art" />
          <Token t="amica" r="fem" /> (una amiga, femenino con apóstrofo). El plural «unos / unas» (
          <strong lang="it" style={{ color: "#f8fafc" }}>dei, degli, delle</strong>) llega en Básico IV.
        </p>
      </RuleBox>

      <RuleBox icon="✅" rule="¿Cuándo lleva artículo?" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {WITH_ARTICLE.map(u => (
            <div key={u.ex} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "3px" }}>{u.icon} {u.use}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{u.ex}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {u.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          💡 Con un país: <strong lang="it" style={{ color: "#e2e8f0" }}>L'Italia è bella.</strong> 🇲🇽 Italia es bonita. Las ciudades van en el recuadro de abajo, sin artículo.
        </p>
      </RuleBox>

      <RuleBox icon="🚫" rule="Sin artículo — Ø: cuándo no se escribe nada" color="#64748b">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          <Token t="Ø" r="zero" /> significa que no se escribe artículo. Los casos principales:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "8px" }}>
          {ZERO_USES.map(({ icon, title, why, examples }) => (
            <div key={title} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", borderLeft: "3px solid #64748b" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>{icon} {title}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, marginBottom: "6px" }}>{why}</div>
              {examples.map(ex => (
                <div key={ex} style={{ color: "#94a3b8", fontSize: "12px", padding: "1px 0" }}>✅ <span lang="it">{ex}</span></div>
              ))}
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🧭" rule="Tabla de decisión — tres preguntas" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {DECISION_STEPS.map(step => (
            <div key={step.n} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", borderLeft: `3px solid ${COLOR}` }}>
              <div style={{ color: COLOR, fontWeight: 800, fontSize: "13px", marginBottom: "4px" }}>{step.n} {step.q}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6 }}>{step.a}</div>
            </div>
          ))}
        </div>
        <RelatedTopic levelId="basico1" topicId="plural" />
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Ejercicio resuelto — los artículos en acción</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "34px 1fr", gap: "0" }}>
        <div style={{ background: "var(--surface-deep, #0f172a)", borderBottom: "2px solid #475569" }} />
        <div style={{ background: "var(--surface-deep, #0f172a)", borderBottom: "2px solid #475569", color: "#94a3b8", fontWeight: 800, fontSize: "13px", padding: "9px 12px" }}>
          Oración
        </div>
        {ARTICLE_EXERCISE.map((ex, i) => (
          <Fragment key={i}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: i % 2 === 0 ? "#1e293b" : "#172033", color: "#94a3b8", fontSize: "12px", fontWeight: 700 }}>
              {i + 1}
            </div>
            <div style={{ background: i % 2 === 0 ? "#1e293b" : "#172033", padding: "9px 12px" }}>
              <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {ex.esp}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
