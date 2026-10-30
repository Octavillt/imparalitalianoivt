import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  ESSERE_CONJ,
  AVERE_CONJ,
  ESSERE_AFF,
  ESSERE_NEG,
  ESSERE_QA,
  ESSERE_USES,
  AVERE_EXPR,
  H_PAIRS,
} from "./data";

// Las dos conjugaciones lado a lado, con la forma grande y el significado.
function ConjugationGrid({ title, color, rows }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ color, fontWeight: 800, fontSize: "14px", marginBottom: "8px" }} lang="it">{title}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px" }}>
        {rows.map(r => (
          <div key={r.subj} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px" }} lang="it">{r.subj}</div>
            <div style={{ fontSize: "20px", fontWeight: 900, color, margin: "4px 0" }} lang="it">{r.form}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>{r.esp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EssereAvereSection() {
  return (
    <div>
      <TopicHeading topicId="essereAvere" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 <strong lang="it" style={{ color: "#f8fafc" }}>Essere</strong> equivale a <strong style={{ color: "#f8fafc" }}>ser</strong> y a <strong style={{ color: "#f8fafc" }}>estar</strong>;{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>avere</strong> equivale a <strong style={{ color: "#f8fafc" }}>tener</strong>. Son los dos verbos que más se usan: con ellos ya te puedes presentar, decir cómo estás y de dónde eres.
      </div>
      <Legend roles={["subject", "essere", "neg", "prep"]} />

      <SectionTitle color="#f87171">🧍 Essere — ser o estar</SectionTitle>
      <ConjugationGrid title="essere" color="#60a5fa" rows={ESSERE_CONJ} />

      <SectionTitle color="#f87171">🤲 Avere — tener</SectionTitle>
      <ConjugationGrid title="avere" color="#34d399" rows={AVERE_CONJ} />

      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 16px", marginBottom: "14px", fontSize: "13px", color: "#94a3b8", lineHeight: 1.7 }}>
        <strong lang="it" style={{ color: "#f8fafc" }}>Voi</strong> significa «ustedes», tanto en situaciones informales como en el tratamiento plural corriente; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong> significa «ellos» o «ellas».
      </div>

      <RuleBox icon="🗣️" rule="El sujeto casi siempre se omite" color="#fbbf24">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Como en español, la terminación del verbo ya dice quién actúa: <strong lang="it" style={{ color: "#f8fafc" }}>Sono Octavio</strong> basta;{" "}
          <strong lang="it" style={{ color: "#94a3b8" }}>io sono Octavio</strong> suena a énfasis («yo soy»). Ojo con <strong lang="it" style={{ color: "#fbbf24" }}>sono</strong>: es «soy» y también «son»; el contexto lo aclara:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>io sono</strong> (soy) vs. <strong lang="it" style={{ color: "#f8fafc" }}>loro sono</strong> (son).
        </p>
      </RuleBox>

      <RuleBox icon="✅" rule="Afirmativo — sujeto + verbo + complemento" color="#34d399">
        <Formula
          parts={[{ t: "(Sujeto)", r: "subject" }, { t: "essere / avere", r: "essere" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "(Octavio)", r: "subject" }, { t: "è", r: "essere" }, { t: "stanco.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 Octavio está cansado. El adjetivo concuerda: Octavio è stanco, Leslie è stanca.</div>
      </RuleBox>
      {ESSERE_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❌" rule="Negativo — non va justo antes del verbo" color="#f87171">
        <Formula
          parts={[{ t: "(Sujeto)", r: "subject" }, { t: "non", r: "neg" }, { t: "essere / avere", r: "essere" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "(io)", r: "subject" }, { t: "non", r: "neg" }, { t: "sono", r: "essere" }, { t: "italiano.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 No soy italiano. Non nunca va después del verbo.</div>
      </RuleBox>
      {ESSERE_NEG.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Pregunta — el mismo orden, con entonación de pregunta" color="#60a5fa">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Igual que en español, basta la entonación: el orden no cambia. Por escrito solo se pone <strong style={{ color: "#f8fafc" }}>?</strong> al final:{" "}
          el italiano no usa <strong style={{ color: "#f8fafc" }}>¿</strong>. Las respuestas empiezan con{" "}
          <strong lang="it" style={{ color: "#34d399" }}>sì</strong> o <strong lang="it" style={{ color: "#f87171" }}>no</strong>.
        </p>
      </RuleBox>
      {ESSERE_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <RuleBox icon="🎩" rule="Lei — tratamiento de usted" color="#c084fc">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <strong lang="it" style={{ color: "#f8fafc" }}>Lei</strong>, como tratamiento de <strong style={{ color: "#f8fafc" }}>usted</strong>, suele escribirse con mayúscula y va con la tercera persona, igual que «él/ella». Al inicio de una oración también puede significar «ella»: el contexto lo aclara.{" "}
          <strong lang="it" style={{ color: "#c084fc" }}>Lei è di Roma?</strong> 🇲🇽 ¿Es usted de Roma? La cortesía italiana usa mucho usted, sobre todo con desconocidos.
        </p>
      </RuleBox>

      <RuleBox icon="🪪" rule="Essere sirve para ser y para estar" color="#60a5fa">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {ESSERE_USES.map(u => (
            <div key={u.use} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "3px" }}>{u.icon} {u.use}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{u.ex}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {u.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          El verbo <strong lang="it" style={{ color: "#e2e8f0" }}>stare</strong> llega más adelante, en expresiones como <strong lang="it" style={{ color: "#e2e8f0" }}>Come stai?</strong> y <strong lang="it" style={{ color: "#e2e8f0" }}>Sto bene</strong>. Por ahora, con essere ya cubres lo esencial.
        </p>
      </RuleBox>

      <RuleBox icon="🍝" rule="Avere donde el español dice «tener»" color="#34d399">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          El español y el italiano coinciden en casi todas las expresiones con tener:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
          {AVERE_EXPR.map(([it, esp]) => (
            <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "7px 12px", textAlign: "center" }}>
              <div lang="it" style={{ color: "#34d399", fontWeight: 800, fontSize: "13px" }}>{it}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "10px" }}>
          🎂 La <strong style={{ color: "#f8fafc" }}>edad</strong> también va con avere: <strong lang="it" style={{ color: "#34d399" }}>Ho trent'anni.</strong> 🇲🇽 Tengo treinta años.{" "}
          Nunca «sono trenta»: en italiano la edad es algo que <em>tienes</em>, no algo que <em>eres</em>.
        </p>
      </RuleBox>

      <RuleBox icon="🤫" rule="La h no suena — pero distingue palabras" color="#fb923c">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <strong lang="it" style={{ color: "#f8fafc" }}>Ho, hai, ha, hanno</strong> se pronuncian <strong style={{ color: "#f8fafc" }}>o, ai, a, anno</strong>. La{" "}
          <strong style={{ color: "#f8fafc" }}>h</strong> es muda, igual que en español, pero <strong style={{ color: "#f8fafc" }}>sí se escribe</strong>: sin ella cambia el significado.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px", marginTop: "8px" }}>
          {H_PAIRS.map(([wit, wesp, woit, woesp]) => (
            <div key={wit} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                <span lang="it" style={{ color: "#fb923c", fontWeight: 800, fontSize: "14px" }}>{wit}</span>
                <span style={{ color: "#475569" }}>/</span>
                <span lang="it" style={{ color: "#94a3b8", fontWeight: 700, fontSize: "14px" }}>{woit}</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {wesp} / {woesp}</div>
            </div>
          ))}
        </div>
      </RuleBox>
    </div>
  );
}
