import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import FamilyTree from "./FamilyTree";
import { FAMILY_TRAPS, POSS_RULES, FAMILY_PRESENT, FAMILY_QA } from "./data";

export default function FamilySection() {
  return (
    <div>
      <TopicHeading topicId="family" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En italiano cada familiar lleva su <strong style={{ color: "#f8fafc" }}>artículo</strong>:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>la madre</strong>, <strong lang="it" style={{ color: "#f8fafc" }}>il fratello</strong>. La mayoría cambia{" "}
        <strong style={{ color: "#fbbf24" }}>-o</strong> (masculino) / <strong style={{ color: "#fbbf24" }}>-a</strong> (femenino), como en español:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>il cugino / la cugina</strong>.
      </div>
      <Legend roles={["demo", "essere", "poss"]} />

      <RuleBox icon="⚠️" rule="Palabras que parecen, pero no son" color="#f87171">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {FAMILY_TRAPS.map(t => (
            <div key={t.word} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: "#f87171", fontWeight: 800, fontSize: "14px" }}>{t.word}</div>
              <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "2px" }}>🇲🇽 {t.esp}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>{t.warn}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#fbbf24">🌳 Árbol genealógico</SectionTitle>
      <FamilyTree />

      <RuleBox icon="💍" rule="El posesivo con familiares — la regla de oro" color="#e879f9">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Con un nombre de parentesco singular simple normalmente se omite el artículo: <strong lang="it" style={{ color: "#e879f9" }}>mia madre</strong>. Con un adjetivo antepuesto o un diminutivo se usa: <span lang="it">la mia cara sorella, il mio fratellino</span>; con <span lang="it">loro</span> también: <span lang="it">la loro madre</span>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
          {POSS_RULES.map(p => (
            <div key={p.caso} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px" }}>
              <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{p.caso} — {p.regla}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginTop: "2px" }}>{p.ex}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {p.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#34d399">🙋 Presentar a tu familia</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        Fórmula fija: <strong lang="it" style={{ color: "#f8fafc" }}>Questa è…</strong> (esta es…), <strong lang="it" style={{ color: "#f8fafc" }}>Questo è…</strong> (este es…),{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Questi sono…</strong> (estos son…). Los demostrativos se ven a fondo en la siguiente lección.
      </p>
      {FAMILY_PRESENT.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color="#60a5fa">❓ Preguntar por la familia</SectionTitle>
      {FAMILY_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sentence pts={q} /> <span style={{ color: "#94a3b8" }}>→</span>{" "}
            {Array.isArray(a) ? <Sentence pts={a} /> : <span lang="it" style={{ color: "#f8fafc", fontWeight: 600 }}>{a}</span>}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}
    </div>
  );
}
