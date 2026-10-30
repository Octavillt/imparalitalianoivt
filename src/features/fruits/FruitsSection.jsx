import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Sentence from "../../components/Sentence";
import { FRUITS, VEGETABLES, PLURAL_HIGHLIGHTS, FRUIT_PHRASES } from "./data";

const ORANGE = "#ea580c";
const GREEN = "#16a34a";

function ItemGrid({ items }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
      gap: "10px",
      marginBottom: "24px",
    }}>
      {items.map(item => <FoodCard key={item.it} item={item} />)}
    </div>
  );
}

function FoodCard({ item }) {
  return (
    <div style={{
      background: "var(--surface, #1e293b)",
      borderRadius: "14px",
      padding: "16px 10px 12px",
      textAlign: "center",
      borderBottom: `3px solid ${item.color}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      transition: "transform 0.15s",
      cursor: "default",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <span style={{ fontSize: "44px", lineHeight: 1 }}>{item.emoji}</span>
      <span lang="it" style={{ color: item.color, fontWeight: 800, fontSize: "14px" }}>{item.it}</span>
      <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {item.esp}</span>
    </div>
  );
}

export default function FruitsSection() {
  return (
    <div>
      <TopicHeading topicId="fruits" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "18px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Lee cada tarjeta en voz alta: artículo + palabra. Fíjate en que{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>la frutta</strong> y <strong lang="it" style={{ color: "#f8fafc" }}>la verdura</strong> son{" "}
        <strong style={{ color: "#f8fafc" }}>singulares colectivos</strong>: nombran todas las frutas o verduras en conjunto, como «la fruta» en español.
      </div>

      <SectionTitle color={ORANGE}>🍎 Frutta — las frutas</SectionTitle>
      <ItemGrid items={FRUITS} />

      <SectionTitle color={GREEN}>🥕 Verdura — las verduras</SectionTitle>
      <ItemGrid items={VEGETABLES} />

      <RuleBox icon="🧐" rule="Palabras con truco" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>
            🍇 <strong lang="it" style={{ color: "#e2e8f0" }}>l'uva</strong> es colectiva y va en singular. 🇲🇽 la uva.
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>
            🍑 <strong lang="it" style={{ color: "#e2e8f0" }}>la pesca</strong> con <strong style={{ color: "#f8fafc" }}>e abierta</strong> es el durazno; con{" "}
            <strong style={{ color: "#f8fafc" }}>e cerrada</strong> significa «la pesca» (de pescar). 🇲🇽 durazno / pesca.
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>
            🫑 <strong lang="it" style={{ color: "#e2e8f0" }}>il peperone</strong> es el pimiento; <strong lang="it" style={{ color: "#e2e8f0" }}>il peperoncino</strong> es el chile. 🇲🇽 pimiento / chile.
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>
            🍅 <strong lang="it" style={{ color: "#e2e8f0" }}>il pomodoro</strong> viene de <strong lang="it" style={{ color: "#e2e8f0" }}>pomo d'oro</strong>: «manzana de oro». 🇲🇽 jitomate.
          </div>
        </div>
      </RuleBox>

      <SectionTitle color={ORANGE}>➕ Sus plurales</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {PLURAL_HIGHLIGHTS.map(p => (
          <div key={p.s} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <span lang="it" style={{ color: "#94a3b8", fontWeight: 600, fontSize: "13px" }}>{p.s}</span>
            <span style={{ color: "#475569", margin: "0 6px" }}>→</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "13px" }}>{p.p}</span>
          </div>
        ))}
      </div>

      <SectionTitle color={GREEN}>💬 Frases</SectionTitle>
      {FRUIT_PHRASES.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}>
            <Sentence pts={ex.pts} />
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
      <p style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>
        🛒 <strong lang="it" style={{ color: "#e2e8f0" }}>Vorrei un chilo di pomodori.</strong> 🇲🇽 Quisiera un kilo de jitomates.{" "}
        «Vorrei» es la fórmula cortés de pedir (el condicional se estudia en niveles avanzados): úsala tal cual en la frutería.
      </p>
    </div>
  );
}
