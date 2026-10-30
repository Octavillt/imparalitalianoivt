import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  POSSESSIVE_TABLE,
  AGREEMENT_EXAMPLES,
  EXAMPLE_SENTENCES,
  ALONE_EXAMPLES,
} from "./data";

const COLOR = "#E879F9";

export default function PossessiveAdjectivesSection() {
  return (
    <div>
      <TopicHeading topicId="possessiveAdjectives" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <strong style={{ color: "#f8fafc" }}>posesivos</strong> concuerdan con <strong style={{ color: "#f8fafc" }}>lo que se posee</strong>, no con quien posee. Con un objeto llevan{" "}
        <strong style={{ color: "#f8fafc" }}>artículo</strong>, a diferencia del español:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>il mio libro</strong> es «mi libro» y{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>la mia casa</strong> es «mi casa».
      </div>
      <Legend roles={["poss", "art", "masc", "fem"]} />

      <SectionTitle color={COLOR}>📋 La tabla completa</SectionTitle>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginBottom: "16px" }}>
        <div style={{ minWidth: "520px", display: "grid", gridTemplateColumns: "0.9fr repeat(4, 1fr)", gap: "6px" }}>
          {["Persona", "Masculino singular", "Femenino singular", "Masculino plural", "Femenino plural"].map(h => (
            <div key={h} style={{ background: "var(--surface-deep, #0f172a)", borderBottom: "2px solid #475569", color: "#94a3b8", fontWeight: 800, fontSize: "12px", padding: "8px 10px" }}>{h}</div>
          ))}
          {POSSESSIVE_TABLE.map((row, i) => (
            <RowCells key={row.subj} row={row} zebra={i % 2 === 0} />
          ))}
        </div>
      </div>

      <RuleBox icon="📐" rule="Con un objeto, lleva artículo" color={COLOR}>
        <Formula
          parts={[{ t: "Artículo", r: "art" }, { t: "Posesivo", r: "poss" }, { t: "Sustantivo", color: "#e2e8f0" }]}
          example={[{ t: "il", r: "art" }, { t: "mio", r: "poss" }, { t: "libro.", color: "#94a3b8" }]}
          color={COLOR}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>
          🇲🇽 Mi libro. Con un objeto no se dice «mio libro»: va <strong lang="it" style={{ color: "#f8fafc" }}>il mio libro</strong>. El familiar en singular es otro caso y va más abajo.
        </div>
      </RuleBox>

      <RuleBox icon="🎯" rule="Concuerda con lo que se posee, no con quien posee" color={COLOR}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {AGREEMENT_EXAMPLES.map((ex, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px" }}>
              <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>
                = {ex.note} — 🇲🇽 {ex.esp}
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginTop: "8px" }}>
          <strong lang="it" style={{ color: "#f8fafc" }}>suo</strong> significa «de él», «de ella» y «de usted», igual que{" "}
          <strong style={{ color: "#f8fafc" }}>su</strong> en español. El contexto aclara de quién se trata.
        </p>
      </RuleBox>

      <RuleBox icon="🔑" rule="Loro no cambia" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong> no cambia de forma:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>la loro casa</strong> (su casa, de ellos o de ellas),{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>i loro libri</strong> (sus libros). También con familiares lleva artículo:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>la loro madre</strong>.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>📝 Ejemplos</SectionTitle>
      {EXAMPLE_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="👪" rule="Regla ya vista — los familiares" color="#CA8A04">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Con un nombre de parentesco singular simple normalmente se omite el artículo: <span lang="it">mia madre, tuo fratello</span>. Con un adjetivo antepuesto o un diminutivo se usa: <span lang="it">la mia cara sorella, il mio fratellino</span>. En plural y con <span lang="it">loro</span> también se usa artículo.
        </p>
        <RelatedTopic levelId="basico1" topicId="family" />
      </RuleBox>

      <RuleBox icon="🪞" rule="La forma sola — sin sustantivo después" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Si el sustantivo ya se dijo, hay dos posibilidades. Después de <strong lang="it" style={{ color: "#f8fafc" }}>essere</strong> el posesivo va solo:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>Questo libro è mio.</strong> Si ocupa el lugar del sustantivo, conserva el artículo:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>Il mio è qui.</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
          {ALONE_EXAMPLES.map((ex, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px" }}>
              {"q" in ex ? (
                <>
                  <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.q} /></div>
                  <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {ex.a}</div>
                </>
              ) : (
                <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              )}
              <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          💡 Tres piezas del mismo juego: <strong lang="it" style={{ color: "#e2e8f0" }}>Questo libro è mio.</strong> (después de essere),{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>Il mio è qui.</strong> (en lugar del sustantivo) y{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>Il mio libro è qui.</strong> (con el sustantivo).
        </p>
      </RuleBox>
    </div>
  );
}

// Una fila de la tabla: etiqueta de persona y sus cuatro formas coloreadas.
function RowCells({ row, zebra }) {
  const bg = zebra ? "#1e293b" : "#172033";
  return (
    <>
      <div style={{ padding: "8px 10px", background: bg }}>
        <div lang="it" style={{ color: row.color, fontWeight: 800, fontSize: "13px" }}>{row.subj}</div>
        <div style={{ color: "#94a3b8", fontSize: "11px" }}>{row.esp}</div>
      </div>
      {row.forms.map(form => (
        <div key={form} lang="it" style={{ padding: "8px 10px", background: bg, color: COLOR, fontWeight: 800, fontSize: "13px", display: "flex", alignItems: "center" }}>
          {form}
        </div>
      ))}
    </>
  );
}
