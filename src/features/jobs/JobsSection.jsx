import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Sentence from "../../components/Sentence";
import { JOB_CATEGORIES, WORKPLACES, JOB_ACTIONS, JOB_DIALOG } from "./data";

const ChatBubble = ({ emoji, name, color, lines }) => (
  <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "12px", padding: "14px", border: `1px solid ${color}33` }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span style={{ color, fontWeight: 800, fontSize: "13px" }} lang="it">{name}</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {lines.map(({ q, qEsp, a, aEsp }) => (
        <div key={q}>
          <div style={{ color: "#94a3b8", fontSize: "12px", fontStyle: "italic" }} lang="it">{q}</div>
          <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "4px" }}>🇲🇽 {qEsp}</div>
          <div style={{
            background: `${color}1a`, borderRadius: "10px", borderTopLeftRadius: "2px",
            padding: "7px 12px", color: "#f8fafc", fontWeight: 600, fontSize: "13px",
            display: "inline-block",
          }} lang="it">
            {a}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>🇲🇽 {aEsp}</div>
        </div>
      ))}
    </div>
  </div>
);

const FormulaRow = ({ step, label, color, esp, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 14px" }}>
    <div style={{
      width: "26px", height: "26px", borderRadius: "50%", background: color, color: "#0f172a",
      display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px",
      flexShrink: 0,
    }}>
      {step}
    </div>
    <div>
      <div style={{ color, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>{label}</div>
      <div style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.6 }}>{children}</div>
      <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {esp}</div>
    </div>
  </div>
);

export default function JobsSection() {
  return (
    <div>
      <TopicHeading topicId="jobs" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para hablar de oficios y profesiones se usan 3 preguntas clave:{" "}
        <strong style={{ color: "#f8fafc" }}>a qué te dedicas</strong> (<strong lang="it" style={{ color: "#f8fafc" }}>Che lavoro fai?</strong>),{" "}
        <strong style={{ color: "#f8fafc" }}>dónde trabajas</strong> (<strong lang="it" style={{ color: "#f8fafc" }}>Dove lavori?</strong>) y{" "}
        <strong style={{ color: "#f8fafc" }}>qué hace ahora</strong> la persona.
      </div>

      <SectionTitle color="#16A34A">👷 Lista de oficios y profesiones</SectionTitle>
      {JOB_CATEGORIES.map(cat => (
        <div key={cat.label} style={{ marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontSize: "16px" }}>{cat.icon}</span>
            <span style={{ color: cat.color, fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }} lang="it">{cat.label}</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{cat.note}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "6px" }}>
            {cat.jobs.map(([masc, fem, esp]) => (
              <div key={masc} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${cat.color}` }}>
                <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }} lang="it">{masc}</div>
                {fem !== masc && (
                  <div style={{ color: "#f9a8d4", fontSize: "12px", fontWeight: 600 }} lang="it">{fem}</div>
                )}
                <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {esp}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SectionTitle color="#60a5fa">🏢 Lugares de trabajo</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {WORKPLACES.map(([it, es]) => (
          <div key={it} style={{ background: "#0c2a50", borderRadius: "8px", padding: "10px 8px", textAlign: "center" }}>
            <div style={{ color: "#60a5fa", fontWeight: 700, fontSize: "13px" }} lang="it">{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {es}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="💬" rule="Las 3 preguntas — diálogo" color="#94a3b8">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "12px", marginTop: "6px" }}>
          <ChatBubble emoji="🙋" name="Octavio" color="#60a5fa" lines={JOB_DIALOG} />
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "10px" }}>
          <strong lang="it" style={{ color: "#e2e8f0" }}>Che lavoro fai?</strong> es de tú; con usted o para hablar de otra persona:{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>Che lavoro fa?</strong>
        </p>
      </RuleBox>

      <RuleBox icon="📐" rule="Fórmulas paso a paso" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          <FormulaRow step="1" label="Profesión con essere" color="#60a5fa" esp="Sono + profesión, sin artículo.">
            <strong lang="it">Sono insegnante.</strong> 🇲🇽 Soy maestro.
          </FormulaRow>
          <FormulaRow step="2" label="Profesión con fare" color="#34d399" esp="Faccio + artículo + profesión.">
            <strong lang="it">Faccio l'insegnante.</strong> 🇲🇽 Me dedico a la enseñanza.
          </FormulaRow>
          <FormulaRow step="3" label="Lugar de trabajo" color="#f472b6" esp="Lavoro + in + lugar.">
            <strong lang="it">Lavoro in un ospedale.</strong> 🇲🇽 Trabajo en un hospital.
          </FormulaRow>
        </div>
      </RuleBox>

      <SectionTitle color="#f472b6">⚡ Profesión y acción actual</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>
        Primero dices la profesión con essere; después, lo que la persona hace en este momento con{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>stare + gerundio</strong>.
      </p>
      {JOB_ACTIONS.map(({ job, action, esp }, i) => (
        <div key={i} style={{ background: "#3b0764", borderRadius: "10px", padding: "12px 14px", marginBottom: "8px" }}>
          <div lang="it" style={{ color: "#4ade80", fontWeight: 700, fontSize: "13px" }}>{job}</div>
          <div style={{ lineHeight: 2, marginTop: "4px" }}><Sentence pts={action} /></div>
          <div style={{ color: "#c4b5fd", fontSize: "11px", marginTop: "4px", paddingTop: "4px", borderTop: "1px solid #334155" }}>🇲🇽 {esp}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico1" topicId="stareGerundio" label="Repasa stare + gerundio en su tema" />
    </div>
  );
}
