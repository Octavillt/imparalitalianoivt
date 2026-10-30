import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  WHERE_QUESTIONS,
  PREP_LIST,
  PREP_EX,
  PREP_CONTRACTIONS,
  CEX_EX,
  PLACE_OBJECTS,
} from "./data";

export default function PrepositionsSection() {
  return (
    <div>
      <TopicHeading topicId="prepositions" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Las preposiciones de lugar nos dicen <strong style={{ color: "#f8fafc" }}>dónde está algo</strong>.{" "}
        Con <strong lang="it" style={{ color: "#f8fafc" }}>essere</strong> + preposición ubicas personas y cosas:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Il libro è sotto il tavolo.</strong> 🇲🇽 El libro está debajo de la mesa.
      </div>
      <Legend roles={["subject", "essere", "prep", "neg"]} />

      <SectionTitle color="#2563EB">❓ Preguntar dónde está algo</SectionTitle>
      {WHERE_QUESTIONS.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <RuleBox icon="📐" rule="Estructura para indicar ubicación con essere" color="#2563EB">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "essere", r: "essere" }, { t: "preposición", r: "prep" }, { t: "Lugar", color: "#e2e8f0" }]}
          example={[{ t: "Il libro", r: "subject" }, { t: "è", r: "essere" }, { t: "sotto", r: "prep" }, { t: "il tavolo.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 El libro está <strong>debajo de</strong> la mesa.</div>
      </RuleBox>

      <SectionTitle color="#2563EB">📋 Lista de preposiciones</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "7px", marginBottom: "16px" }}>
        {PREP_LIST.map(p => (
          <div key={p.prep} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px 13px", borderLeft: "3px solid #2563EB" }}>
            <div style={{ color: "#2563EB", fontWeight: 800, fontSize: "14px" }} lang="it">{p.icon} {p.prep}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>🇲🇽 {p.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#2563EB">📖 Ejemplos con traducción</SectionTitle>
      {PREP_EX.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="🔗" rule="Formas contraídas fijas" color="#22D3EE">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Algunas preposiciones se pegan con el artículo. Aprende estas seis como{" "}
          <strong style={{ color: "#f8fafc" }}>fórmulas fijas</strong>; el sistema completo de preposiciones articuladas se ve en Básico II.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "10px" }}>
          {PREP_CONTRACTIONS.map((c, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#22D3EE", fontWeight: 800, fontSize: "14px" }} lang="it">{c.parts.join("")}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "4px" }}>{c.ex}</div>
              {c.esp && <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {c.esp}</div>}
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🏦" rule="C'è y ci sono — «hay»" color="#34D399">
        <Formula
          parts={[{ t: "C'è", r: "essere" }, { t: "sustantivo singular", color: "#e2e8f0" }, { t: "/ Ci sono", r: "essere" }, { t: "sustantivo plural", color: "#e2e8f0" }]}
          example={[{ t: "C'è", r: "essere" }, { t: "una sedia ", color: "#94a3b8" }, { t: "in", r: "prep" }, { t: " cucina.", color: "#94a3b8" }]}
        />
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "8px" }}>
          <strong lang="it" style={{ color: "#34D399" }}>C'è</strong> es «hay» con singular y{" "}
          <strong lang="it" style={{ color: "#34D399" }}>ci sono</strong> con plural. En negativa:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>Non c'è il caffè.</strong> 🇲🇽 No hay café.
        </p>
      </RuleBox>
      {CEX_EX.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          {ex.q ? (
            <>
              <div style={{ lineHeight: 2 }}><Sentence pts={ex.q} /></div>
              <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {ex.a}</div>
            </>
          ) : (
            <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          )}
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        💡 Ojo con la diferencia: <strong lang="it" style={{ color: "#f8fafc" }}>Dov'è la banca?</strong> busca algo conocido (¿dónde está el banco?);{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>C'è una banca qui vicino?</strong> pregunta si existe alguno (¿hay un banco por aquí cerca?).
      </p>

      <SectionTitle color="#2563EB">🛋️ Objetos de la casa</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "6px" }}>
        {PLACE_OBJECTS.map(o => (
          <div key={o.it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "9px 10px", borderLeft: "3px solid #2563EB" }}>
            <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{o.emoji} <span lang="it">{o.it}</span></div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "1px" }}>🇲🇽 {o.esp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
