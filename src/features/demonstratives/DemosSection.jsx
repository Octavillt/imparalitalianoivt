import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  QUESTO_FORMS,
  QUELLO_TABLE,
  QUELLO_ALONE,
  DEMO_AFF,
  DEMO_QA,
  PLACE_WORDS,
} from "./data";

export default function DemosSection() {
  return (
    <div>
      <TopicHeading topicId="demonstratives" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los demostrativos señalan cosas según la <strong style={{ color: "#f8fafc" }}>distancia</strong>. El español distingue tres (<strong style={{ color: "#f8fafc" }}>este / ese / aquel</strong>);{" "}
        el italiano solo dos: <strong lang="it" style={{ color: "#c084fc" }}>questo</strong> = «este» (cerca) y{" "}
        <strong lang="it" style={{ color: "#c084fc" }}>quello</strong> = «ese» <em>y</em> «aquel» (lejos).
      </div>
      <Legend roles={["demo", "essere", "art"]} />

      <RuleBox icon="📐" rule="Tabla rápida — ¿cuál usar?" color="#c084fc">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700 }}>SITUACIÓN</div>
          </div>
          <div style={{ background: "#3d2000", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontSize: "12px", fontWeight: 800 }}>👇 CERCA</div>
          </div>
          <div style={{ background: "#0c2a50", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#60a5fa", fontSize: "12px", fontWeight: 800 }}>👉 LEJOS</div>
          </div>
          {[
            { label: "1 cosa", near: "questo + è", far: "quello + è" },
            { label: "2+ cosas", near: "questi + sono", far: "quelli + sono" },
          ].map((row, i) => (
            <Fragment key={i}>
              <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 700 }}>{row.label}</div>
              </div>
              <div style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div lang="it" style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.near}</div>
              </div>
              <div style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div lang="it" style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.far}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#c084fc">👉 Questo — cerca</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        Cambia como el adjetivo: <strong style={{ color: "#93c5fd" }}>-o</strong> masculino,{" "}
        <strong style={{ color: "#f9a8d4" }}>-a</strong> femenino, <strong style={{ color: "#93c5fd" }}>-i</strong> /{" "}
        <strong style={{ color: "#f9a8d4" }}>-e</strong> en plural. Ante vocal se recorta:{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>quest'anno</strong> 🇲🇽 este año.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {QUESTO_FORMS.map(f => (
          <div key={f.form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#c084fc", fontWeight: 800, fontSize: "14px" }}>{f.form}</div>
            <div lang="it" style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>{f.ex}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {f.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#60a5fa">👉 Quello — lejos</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        Ante sustantivo, <strong lang="it" style={{ color: "#e2e8f0" }}>quello</strong> cambia <strong style={{ color: "#f8fafc" }}>exactamente como el artículo</strong>:{" "}
        compara <strong lang="it" style={{ color: "#e2e8f0" }}>il libro → quel libro</strong>,{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>lo studente → quello studente</strong>,{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>l'amico → quell'amico</strong>,{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>gli studenti → quegli studenti</strong>.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px", marginBottom: "12px" }}>
        {QUELLO_TABLE.map(f => (
          <div key={f.ex} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#60a5fa", fontWeight: 800, fontSize: "14px" }}>{f.form}</div>
            <div lang="it" style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>{f.ex}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {f.esp}</div>
          </div>
        ))}
      </div>
      <RuleBox icon="🕊️" rule="Solo, sin sustantivo, siempre quello / quella / quelli / quelle" color="#60a5fa">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "6px" }}>
          {QUELLO_ALONE.map(f => (
            <div key={f.form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "7px 12px", textAlign: "center" }}>
              <div lang="it" style={{ color: "#60a5fa", fontWeight: 800, fontSize: "13px" }}>{f.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {f.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          Ej: <strong lang="it" style={{ color: "#e2e8f0" }}>Quello è mio.</strong> 🇲🇽 Ese es mío.
        </p>
      </RuleBox>

      <SectionTitle color="#34d399">📝 Ejemplos con essere</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        📌 Recuerda el artículo indefinido: <strong lang="it" style={{ color: "#e2e8f0" }}>un</strong> libro,{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>una</strong> casa, <strong lang="it" style={{ color: "#e2e8f0" }}>un'</strong>amica (un' ante vocal femenina).
      </p>
      {DEMO_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color="#fbbf24">❓ Preguntas con demostrativos</SectionTitle>
      {DEMO_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sentence pts={q} /> <span style={{ color: "#94a3b8" }}>→</span> <span lang="it" style={{ color: "#f8fafc", fontWeight: 600 }}>{a}</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color="#22d3ee">📍 Aquí y allí</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "8px" }}>
        {PLACE_WORDS.map(p => (
          <div key={p.word} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", textAlign: "center" }}>
            <div lang="it" style={{ color: p.near ? "#34d399" : "#60a5fa", fontWeight: 800, fontSize: "15px" }}>{p.word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {p.esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
        Ej: <strong lang="it" style={{ color: "#e2e8f0" }}>Il caffè è qui.</strong> 🇲🇽 El café está aquí. —{" "}
        <strong lang="it" style={{ color: "#e2e8f0" }}>Leslie è là.</strong> 🇲🇽 Leslie está allí.
      </p>
    </div>
  );
}
