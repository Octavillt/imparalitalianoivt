import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { DAYS, WEEKEND, MONTHS, ORDINALS, DATE_EXAMPLES, SEASONS, YEAR_EXAMPLES, TIME_WORDS } from "./data";

export default function DatesSection() {
  return (
    <div>
      <TopicHeading topicId="dates" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En italiano los días y los meses se escriben <strong style={{ color: "#f8fafc" }}>con minúscula</strong>. Para decir la fecha se usa{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>il + número + mes</strong>:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Oggi è il 30 ottobre.</strong> 🇲🇽 Hoy es 30 de octubre.
      </div>

      <SectionTitle color="#22D3EE">📆 I giorni della settimana</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", gap: "6px", marginBottom: "10px" }}>
        {DAYS.map(([it, es]) => (
          <div key={it} style={{
            background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px",
            borderLeft: `3px solid ${WEEKEND.includes(it) ? "#f472b6" : "#22D3EE"}`,
          }}>
            <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }} lang="it">{it}</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>{es}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "14px", fontSize: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
        <span style={{ color: "#22D3EE", fontWeight: 700 }}>■ Entre semana</span>
        <span style={{ color: "#f472b6", fontWeight: 700 }}>■ Fin de semana</span>
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        Los que terminan en <strong lang="it" style={{ color: "#f8fafc" }}>-ì</strong> llevan acento grave:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>lunedì, martedì, mercoledì, giovedì, venerdì</strong>.{" "}
        Casi todos son masculinos; la excepción es <strong lang="it" style={{ color: "#f8fafc" }}>la domenica</strong>.{" "}
        Con artículo significa «cada semana»: <strong lang="it" style={{ color: "#f8fafc" }}>il lunedì</strong> = los lunes (cada lunes);{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>lunedì</strong> sin artículo = el lunes (uno concreto).
      </p>

      <SectionTitle color="#fbbf24">🗓️ I mesi dell'anno</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {MONTHS.map(([it, es], i) => (
          <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px", minWidth: "16px", flexShrink: 0 }}>{i + 1}</span>
            <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "12px", flex: 1, textAlign: "left", whiteSpace: "nowrap" }} lang="it">{it}</span>
            <span style={{ color: "#94a3b8", fontSize: "11px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "80px" }}>{es}</span>
          </div>
        ))}
      </div>

      <RuleBox icon="🔢" rule="Ordinales del 1 al 10" color="#c084fc">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 125px), 1fr))", gap: "6px", marginTop: "6px" }}>
          {ORDINALS.map(([n, it, es]) => (
            <div key={n} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "12px" }}>{n}°</span>
              <span style={{ color: "#e2e8f0", fontSize: "12px" }} lang="it">{it}</span>
              <span style={{ color: "#94a3b8", fontSize: "11px" }}>{es}</span>
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px" }}>
          En la fecha solo el día 1 usa ordinal: <strong lang="it" style={{ color: "#e2e8f0" }}>il primo maggio</strong> (el 1 de mayo). Los ordinales{" "}
          <strong>concuerdan en género</strong>: <strong lang="it" style={{ color: "#e2e8f0" }}>la prima volta</strong> = la primera vez.
        </div>
      </RuleBox>

      <SectionTitle color="#34D399">📋 Ejemplos — cómo decir una fecha</SectionTitle>
      {DATE_EXAMPLES.map(ex => (
        <div key={ex.date} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#94a3b8", fontWeight: 800, fontSize: "14px", background: "var(--surface-deep, #0f172a)", borderRadius: "6px", padding: "2px 8px" }}>{ex.date}</span>
            <span style={{ color: "#94a3b8" }}>→</span>
            <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: "15px" }} lang="it">{ex.phrase}</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        El año se lee como un número entero: <strong lang="it" style={{ color: "#f8fafc" }}>il 2026</strong> ={" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>il duemilaventisei</strong>. Por escrito, la fecha numérica va como en México:{" "}
        <strong style={{ color: "#f8fafc" }}>30/10/2026</strong> (día/mes/año).
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {YEAR_EXAMPLES.map(y => (
          <div key={y.year} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontWeight: 800, fontSize: "12px" }}>{y.year}</div>
            <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px", marginTop: "2px" }} lang="it">{y.phrase}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {y.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="❓" rule="Preguntas con días y fechas" color="#60a5fa">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: "8px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#60a5fa", fontWeight: 800, fontSize: "13px" }}>Che giorno è oggi?</div>
            <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "3px" }}>Oggi è lunedì.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 ¿Qué día es hoy? — Hoy es lunes.</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#60a5fa", fontWeight: 800, fontSize: "13px" }}>Che data è oggi?</div>
            <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "3px" }}>Oggi è il 30 ottobre.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 ¿Qué fecha es hoy? — Hoy es 30 de octubre.</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#60a5fa", fontWeight: 800, fontSize: "13px" }}>Quando è il tuo compleanno?</div>
            <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "3px" }}>Il mio compleanno è il 3 aprile.</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 ¿Cuándo es tu cumpleaños? — Mi cumpleaños es el 3 de abril.</div>
          </div>
        </div>
      </RuleBox>

      <SectionTitle color="#fb923c">🍂 Le stagioni — estaciones (hemisferio norte)</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>Estos meses son una referencia del hemisferio norte. Los nombres de las estaciones llevan artículo.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
        {SEASONS.map(([it, es, months]) => (
          <div key={it} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ color: "#fb923c", fontWeight: 800, fontSize: "13px" }} lang="it">{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>🇲🇽 {es}</div>
            <div style={{ color: "#e2e8f0", fontSize: "11px" }} lang="it">{months.join(", ")}</div>
          </div>
        ))}
      </div>

      <SectionTitle color="#34D399">⏳ Palabras de tiempo</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "6px" }}>
        {TIME_WORDS.map(([it, es]) => (
          <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "9px 10px", textAlign: "center" }}>
            <div style={{ color: "#34D399", fontWeight: 700, fontSize: "13px" }} lang="it">{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 {es}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
