import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  GREETINGS, GOODBYES, INTRODUCTIONS, HOW_ARE_YOU, COURTESY,
  SAMPLE_DIALOGUE, TAG_COLORS, TAG_LABELS,
} from "./data";

const COLOR = "#FB923C";

function PhraseGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px", marginBottom: "16px" }}>
      {items.map(([phrase, esp, tag]) => (
        <div key={phrase} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
            <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: "13px" }} lang="it">{phrase}</span>
            <span style={{
              color: TAG_COLORS[tag], background: `${TAG_COLORS[tag]}22`, fontWeight: 700,
              padding: "1px 7px", borderRadius: "20px", fontSize: "10px", whiteSpace: "nowrap", textTransform: "uppercase",
            }}>
              {TAG_LABELS[tag]}
            </span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>🇲🇽 {esp}</div>
        </div>
      ))}
    </div>
  );
}

export default function VocabularySection() {
  return (
    <div>
      <TopicHeading topicId="vocabulary" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Cierra Básico I con una conversación: saluda, di tu nombre, presenta a alguien y despídete.{" "}
        Aprende los saludos y las despedidas como <strong style={{ color: "#f8fafc" }}>expresiones completas</strong>, con su registro:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>tu</strong> con amigos y familia,{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Lei</strong> con desconocidos y en situaciones formales.
      </div>

      <SectionTitle color="#fbbf24">👋 Saluti — saludos</SectionTitle>
      <PhraseGrid items={GREETINGS} />
      <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginBottom: "16px" }}>
        <strong lang="it" style={{ color: "#f8fafc" }}>Ciao</strong> sirve para saludar y para despedirse, pero solo entre personas de confianza.{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Buonanotte</strong> se dice al irse a dormir, no al llegar de noche: al llegar se dice{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>buonasera</strong>.
      </p>

      <SectionTitle color="#34D399">🙋 Presentazioni — presentarse</SectionTitle>
      <PhraseGrid items={INTRODUCTIONS} />

      <SectionTitle color="#60a5fa">🙂 Come stai? — cómo estás</SectionTitle>
      <PhraseGrid items={HOW_ARE_YOU} />

      <SectionTitle color="#c084fc">🙏 Cortesía</SectionTitle>
      <PhraseGrid items={COURTESY} />

      <SectionTitle color="#f472b6">👋 Despedidas</SectionTitle>
      <PhraseGrid items={GOODBYES} />

      <RuleBox icon="💬" rule="Diálogo — al bar di Roma" color={COLOR}>
        <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginBottom: "10px" }}>
          Octavio y Leslie se conocen en un bar de Roma. Reúnen todo lo de Básico I: saludos, presentación, origen, profesión y despedida.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {SAMPLE_DIALOGUE.map((d, i) => (
            <div key={i}>
              <div style={{ fontSize: "13px" }}>
                <strong style={{ color: COLOR }}>{d.who}:</strong> <span style={{ color: "#e2e8f0" }} lang="it">{d.line}</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {d.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "10px", marginTop: "16px" }}>
        <RelatedTopic levelId="basico1" topicId="countries" label="Repasa: de dónde eres" />
        <RelatedTopic levelId="basico1" topicId="jobs" label="Repasa: a qué te dedicas" />
        <RelatedTopic levelId="basico1" topicId="family" label="Repasa: presentar a la familia" />
        <RelatedTopic levelId="basico1" topicId="stareGerundio" label="Repasa: qué estás haciendo" />
      </div>
    </div>
  );
}
