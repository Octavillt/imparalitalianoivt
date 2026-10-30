import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  COUNTRIES,
  NAT_GROUPS,
  CITIES_IT,
  CITIES_FOREIGN,
  ORIGIN_DIALOG,
} from "./data";

// Pregunta y respuesta como burbuja de chat, igual que en el proyecto base.
const ChatLine = ({ q, qEsp, a, aEsp }) => (
  <div>
    <div style={{ color: "#94a3b8", fontSize: "12px", fontStyle: "italic" }} lang="it">{q}</div>
    <div style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "4px" }}>🇲🇽 {qEsp}</div>
    <div style={{
      background: "#0c2a50", borderRadius: "10px", borderTopLeftRadius: "2px",
      padding: "7px 12px", color: "#f8fafc", fontWeight: 600, fontSize: "13px",
      display: "inline-block",
    }} lang="it">
      {a}
    </div>
    <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>🇲🇽 {aEsp}</div>
  </div>
);

export default function CountriesSection() {
  return (
    <div>
      <TopicHeading topicId="countries" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para decir <strong style={{ color: "#f8fafc" }}>de dónde eres</strong> y <strong style={{ color: "#f8fafc" }}>dónde vives</strong> usas{" "}
        <strong lang="it" style={{ color: "#60a5fa" }}>essere</strong> (<strong lang="it" style={{ color: "#60a5fa" }}>Sono di…</strong>) y el verbo{" "}
        <strong lang="it" style={{ color: "#34d399" }}>abitare</strong> (<strong lang="it" style={{ color: "#34d399" }}>Abito a…</strong>). Las ciudades llevan{" "}
        <strong style={{ color: "#fbbf24" }}>a</strong>; los países llevan <strong style={{ color: "#fbbf24" }}>in</strong>.
      </div>

      <RuleBox icon="📐" rule="Fórmulas paso a paso" color="#fbbf24">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ color: "#60a5fa", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>1 · Origen</div>
            <div style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.6 }} lang="it">Di dove sei? → Sono di + ciudad.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 ¿De dónde eres? → Soy de… Con ciudades usa di.</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ color: "#34d399", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>2 · Nacionalidad</div>
            <div style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.6 }} lang="it">Sono + nacionalidad.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 Soy mexicano/a. La nacionalidad concuerda contigo: Octavio è messicano, Argelia è messicana.</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ color: "#f472b6", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>3 · Residencia</div>
            <div style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.6 }} lang="it">Dove abiti? → Abito a + ciudad / Abito in + país.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 ¿Dónde vives? → Vivo en… a con ciudades, in con países.</div>
          </div>
        </div>
      </RuleBox>

      <SectionTitle color="#38bdf8">🌍 Paesi e nazionalità</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>
        Como en español, los <strong style={{ color: "#f8fafc" }}>países llevan mayúscula</strong> y las <strong style={{ color: "#f8fafc" }}>nacionalidades van en minúscula</strong>.{" "}
        En italiano casi todos los países llevan <strong style={{ color: "#a3e635" }}>artículo</strong>: no se dice «Italia» suelto, sino <strong lang="it" style={{ color: "#e2e8f0" }}>l'Italia</strong>.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(195px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {COUNTRIES.map(c => (
          <div key={c.name} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "20px", flexShrink: 0 }}>{c.flag}</span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{c.art}{c.name}</span>
                <span style={{ color: "#94a3b8", fontSize: "11px" }}>{c.es}</span>
              </div>
              <div style={{ color: "#38bdf8", fontSize: "11px", marginTop: "2px", opacity: 0.9 }} lang="it">
                {c.natM} / {c.natF}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px", marginBottom: "16px" }}>
        {NAT_GROUPS.map(g => (
          <div key={g.title} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ color: g.color, fontWeight: 800, fontSize: "13px", marginBottom: "4px" }}>{g.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6 }} lang="it">{g.note}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="🧭" rule="A + ciudad · In + país · Di + origen" color="#fbbf24">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <strong lang="it" style={{ color: "#f8fafc" }}>Abito a Roma</strong> 🇲🇽 Vivo en Roma &nbsp;·&nbsp; <strong lang="it" style={{ color: "#f8fafc" }}>Abito in Italia</strong> 🇲🇽 Vivo en Italia &nbsp;·&nbsp;{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>Sono di Puebla</strong> 🇲🇽 Soy de Puebla.
        </p>
        <p style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginTop: "6px" }}>
          🧳 <strong lang="it" style={{ color: "#e2e8f0" }}>Vengo dal Messico</strong> 🇲🇽 Vengo de México: los países llevan artículo, así que{" "}
          <strong style={{ color: "#fbbf24" }}>da + il = dal</strong>. Las preposiciones con artículo se estudian a fondo en Básico II.
        </p>
      </RuleBox>

      <SectionTitle color="#34d399">🏙️ Ciudades que cambian de nombre</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {CITIES_FOREIGN.map(([it, es]) => (
          <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#4ade80", fontWeight: 700, fontSize: "13px" }}>{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {es}</div>
          </div>
        ))}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "8px" }}>
        Las <strong style={{ color: "#f8fafc" }}>ciudades italianas</strong> que practicarás en los ejemplos suenan distinto al español:
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {CITIES_IT.map(([it, es]) => (
          <div key={it} style={{ background: "#052e16", borderRadius: "8px", padding: "8px 12px", textAlign: "center" }}>
            <div lang="it" style={{ color: "#4ade80", fontWeight: 700, fontSize: "13px" }}>{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {es}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#c084fc">💬 Mini conversación — origen y residencia</SectionTitle>
      <RuleBox icon="🙋" rule="Di dove sei?" color="#c084fc">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "6px" }}>
          {ORIGIN_DIALOG.map((line, i) => <ChatLine key={i} {...line} />)}
        </div>
      </RuleBox>

      <details className="lesson-extension">
        <summary>Ampliación: lugar de nacimiento — sono nato / nata</summary>
        <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
          Para decir dónde naciste se usa <strong lang="it" style={{ color: "#e2e8f0" }}>sono nato</strong> (hombre) /{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>sono nata</strong> (mujer): <strong lang="it" style={{ color: "#c084fc" }}>Sono nato a Puebla. Argelia è nata a Roma.</strong>{" "}
          🇲🇽 Nací en Puebla. Argelia nació en Roma. Es la primera pista del passato prossimo, que verás en Básico V; por ahora tómala como expresión fija.
        </p>
      </details>
    </div>
  );
}
