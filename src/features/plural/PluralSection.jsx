import TopicHeading from "../../components/TopicHeading";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  PLURAL_RULES,
  IRREGULARS,
  GENDER_TRAPS,
  DIFFERENT_GENDER,
  PEOPLE_GENDER,
} from "./data";

// Par singular → plural con la terminación nueva resaltada.
function PairChip({ pair }) {
  const [base, ending] = pair.p;
  return (
    <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
      <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "3px" }}>🇲🇽 {pair.esp}</div>
      <div style={{ fontSize: "15px" }}>
        <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600 }}>{pair.s}</span>
        <span style={{ color: "#475569", margin: "0 6px" }}>→</span>
        <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600 }}>{base}</span>
        {ending && (
          <span lang="it" style={{ color: "#34d399", fontWeight: 800, background: "#022c22", borderRadius: "4px", padding: "1px 5px" }}>{ending}</span>
        )}
      </div>
    </div>
  );
}

export default function PluralSection() {
  return (
    <div>
      <TopicHeading topicId="plural" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En italiano <strong style={{ color: "#f8fafc" }}>todo sustantivo es masculino o femenino</strong>, y lo descubres por su{" "}
        <strong style={{ color: "#a3e635" }}>artículo</strong>: <strong lang="it" style={{ color: "#93c5fd" }}>il</strong> /{" "}
        <strong lang="it" style={{ color: "#f9a8d4" }}>la</strong> en singular; <strong lang="it" style={{ color: "#93c5fd" }}>i</strong> /{" "}
        <strong lang="it" style={{ color: "#f9a8d4" }}>le</strong> en plural. Lo, l' y gli llegan en Básico II.
      </div>
      <Legend roles={["masc", "fem", "ending"]} />

      <RuleBox icon="♂️♀️" rule="Primero el género, después el plural" color="#60a5fa">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#93c5fd", fontWeight: 900, fontSize: "18px" }}>il · i</div>
            <div style={{ color: "#93c5fd", fontWeight: 700, fontSize: "12px", marginBottom: "4px" }}>MASCULINO</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }} lang="it">il libro → i libri</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#f9a8d4", fontWeight: 900, fontSize: "18px" }}>la · le</div>
            <div style={{ color: "#f9a8d4", fontWeight: 700, fontSize: "12px", marginBottom: "4px" }}>FEMENINO</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }} lang="it">la casa → le case</div>
          </div>
        </div>
      </RuleBox>

      <SectionTitle color="#059669">➕ Reglas de plural</SectionTitle>
      {PLURAL_RULES.map((r, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px", marginBottom: "9px", borderLeft: `4px solid ${r.color}` }}>
          <div style={{ fontWeight: 700, color: r.color, marginBottom: "10px", fontSize: "14px" }}>{r.rule}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {r.pairs.map(pair => <PairChip key={pair.s} pair={pair} />)}
          </div>
        </div>
      ))}

      <SectionTitle color="#fbbf24">⚠️ Irregulares — hay que memorizarlos</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {IRREGULARS.map(pair => <PairChip key={pair.s} pair={pair} />)}
      </div>

      <SectionTitle color="#f87171">🪤 Excepciones de género</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {GENDER_TRAPS.map(t => (
          <div key={t.word} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{t.word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {t.esp}</div>
            <div style={{ color: "#f87171", fontSize: "11px", marginTop: "3px" }}>{t.note}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="🌊" rule="Cuidado: no siempre coincide con el español" color="#22d3ee">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Estos sustantivos son <strong style={{ color: "#93c5fd" }}>masculinos</strong> en italiano, aunque en español sean femeninos:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
          {DIFFERENT_GENDER.map(([it, esp]) => (
            <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "7px 12px", textAlign: "center" }}>
              <div lang="it" style={{ color: "#22d3ee", fontWeight: 800, fontSize: "13px" }}>{it}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          🇲🇽 <strong lang="it" style={{ color: "#e2e8f0" }}>la gente</strong> es femenino y va en <strong style={{ color: "#f8fafc" }}>singular</strong>, igual que en español:{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>la gente è simpatica</strong>.
        </p>
      </RuleBox>

      <SectionTitle color="#34d399">👫 Personas: masculino y femenino</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
        {PEOPLE_GENDER.map(([m, f, esp]) => (
          <div key={m} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", textAlign: "center" }}>
            <div style={{ fontSize: "14px" }}>
              <span lang="it" style={{ color: "#93c5fd", fontWeight: 800 }}>{m}</span>
              <span style={{ color: "#475569", margin: "0 6px" }}>/</span>
              <span lang="it" style={{ color: "#f9a8d4", fontWeight: 800 }}>{f}</span>
            </div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
