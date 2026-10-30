import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { STARE_CONJ, GERUND_RULES, PROG_AFF, PROG_NEG, PROG_INT, NOW_MARKERS } from "./data";

// Conjugación de stare en una cuadrícula compacta, igual que essere/avere.
function ConjugationGrid({ rows }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px", marginBottom: "16px" }}>
      {rows.map(r => (
        <div key={r.subj} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
          <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px" }} lang="it">{r.subj}</div>
          <div style={{ fontSize: "20px", fontWeight: 900, color: "#9333EA", margin: "4px 0" }} lang="it">{r.form}</div>
          <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {r.esp}</div>
        </div>
      ))}
    </div>
  );
}

export default function StareGerundioSection() {
  return (
    <div>
      <TopicHeading topicId="stareGerundio" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 <strong lang="it" style={{ color: "#f8fafc" }}>Stare + gerundio</strong> expresa una acción que pasa{" "}
        <strong style={{ color: "#f8fafc" }}>en este momento</strong>:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Sto mangiando.</strong> 🇲🇽 Estoy comiendo.
      </div>
      <Legend roles={["subject", "essere", "verb", "gerundio", "neg"]} />

      <SectionTitle color="#9333EA">🧍 Stare — conjugación</SectionTitle>
      <ConjugationGrid rows={STARE_CONJ} />
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        <strong lang="it" style={{ color: "#f8fafc" }}>Stare</strong> también aparece en la pregunta{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Come stai?</strong> 🇲🇽 ¿Cómo estás? —{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Sto bene, grazie.</strong> 🇲🇽 Estoy bien, gracias.
      </p>

      <RuleBox icon="✅" rule="Afirmativo — lo que está pasando ahora" color="#34D399">
        <Formula
          parts={[{ t: "(Sujeto)", r: "subject" }, { t: "stare", r: "essere" }, { t: "verbo", r: "verb" }, { t: "-ando / -endo", r: "gerundio" }]}
          example={[{ t: "(io)", r: "subject" }, { t: "sto", r: "essere" }, { t: "mangi", r: "verb" }, { t: "ando.", r: "gerundio" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 (Yo) estoy comiendo.</div>
      </RuleBox>
      {PROG_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❌" rule="Negativo — non va antes de stare" color="#f87171">
        <Formula
          parts={[{ t: "(Sujeto)", r: "subject" }, { t: "non", r: "neg" }, { t: "stare", r: "essere" }, { t: "gerundio", r: "gerundio" }]}
          example={[{ t: "(io)", r: "subject" }, { t: "non", r: "neg" }, { t: "sto", r: "essere" }, { t: "dormendo.", r: "gerundio" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 No estoy durmiendo.</div>
      </RuleBox>
      {PROG_NEG.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Pregunta — el mismo orden, con entonación" color="#60a5fa">
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "6px" }}>
          Igual que con essere: no cambia el orden, solo la entonación. El italiano no usa <strong style={{ color: "#f8fafc" }}>¿</strong> de apertura.
        </div>
      </RuleBox>
      {PROG_INT.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color="#f472b6">📐 Reglas del gerundio</SectionTitle>
      {GERUND_RULES.map((rule, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px", marginBottom: "10px", borderLeft: `4px solid ${rule.color}` }}>
          <div style={{ fontWeight: 700, color: rule.color, marginBottom: "4px", fontSize: "14px" }} lang="it">{rule.rule}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>{rule.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rule.words.map(([base, suf, orig], j) => (
              <div key={j} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {orig && <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "2px" }} lang="it">{orig} →</div>}
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "16px" }} lang="it">{base}</span>
                <span style={{ color: "#f472b6", fontWeight: 800, background: "#3b0764", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }} lang="it">{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <RuleBox icon="💡" rule="¿Cuándo se usa?" color="#22D3EE">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Se usa con <strong lang="it" style={{ color: "#f8fafc" }}>adesso</strong>, <strong lang="it" style={{ color: "#f8fafc" }}>ora</strong> o{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>in questo momento</strong> para una acción en curso. A diferencia del español, se usa menos: para decir{" "}
          <strong style={{ color: "#f8fafc" }}>lo que haces normalmente</strong> basta el presente:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>Mangio la pizza ogni venerdì.</strong> 🇲🇽 Como pizza cada viernes.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
          {NOW_MARKERS.map(([it, es]) => (
            <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "7px 12px", textAlign: "center" }}>
              <div lang="it" style={{ color: "#22D3EE", fontWeight: 800, fontSize: "13px" }}>{it}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {es}</div>
            </div>
          ))}
        </div>
      </RuleBox>
    </div>
  );
}
