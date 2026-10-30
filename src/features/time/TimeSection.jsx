import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { CLOCK_E, CLOCK_MENO, TIME_EXAMPLES, TIME_DIGITAL } from "./data";

export default function TimeSection() {
  return (
    <div>
      <TopicHeading topicId="time" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Se pregunta con <strong lang="it" style={{ color: "#38bdf8" }}>Che ora è?</strong> o{" "}
        <strong lang="it" style={{ color: "#38bdf8" }}>Che ore sono?</strong> La una va en singular (<strong lang="it" style={{ color: "#f8fafc" }}>è l'una</strong>),{" "}
        como mezzogiorno y mezzanotte; las demás horas van en plural (<strong lang="it" style={{ color: "#f8fafc" }}>sono le tre</strong>).{" "}
        Primero se dice la hora y después los minutos, igual que en español.
      </div>

      <RuleBox icon="🔁" rule="Orden al decir la hora" color="#94a3b8">
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "6px", flexWrap: "wrap" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, marginBottom: "3px" }}>1º</div>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "14px" }}>hora</div>
          </div>
          <span style={{ color: "#94a3b8", fontSize: "18px" }}>→</span>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, marginBottom: "3px" }}>2º</div>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "14px" }}>minutos</div>
          </div>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px" }}>
          Ej: 3:25 → primero «tre», después «e venticinque» → <strong lang="it" style={{ color: "#e2e8f0" }}>sono le tre e venticinque</strong>
          <div style={{ marginTop: "2px" }}>🇲🇽 son las tres y veinticinco</div>
        </div>
      </RuleBox>

      <SectionTitle color="#38bdf8">⏱️ E — de la hora en punto a la media (minuto 1–30)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "10px" }}>
        {CLOCK_E.map(({ min, label }) => (
          <div key={min} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "4px 8px" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>:{String(min).padStart(2, "0")}</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px", textAlign: "right" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "16px" }}>
        <strong lang="it" style={{ color: "#e2e8f0" }}>e</strong> suma minutos a la hora que ya empezó. En punto no se dice «e zero», sino{" "}
        <strong lang="it" style={{ color: "#38bdf8" }}>in punto</strong>.
        <div style={{ marginTop: "2px" }}>🇲🇽 «in punto» significa «en punto»</div>
      </div>

      <SectionTitle color="#fb923c">⏱️ MENO — de la media a la siguiente hora (minuto 31–59)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "10px" }}>
        {CLOCK_MENO.map(({ min, label }) => (
          <div key={min} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "4px 8px" }}>
            <span style={{ color: "#fb923c", fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>:{String(60 - min).padStart(2, "0")}</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px", textAlign: "right" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "16px" }}>
        <strong lang="it" style={{ color: "#e2e8f0" }}>meno</strong> resta: cuenta lo que <strong style={{ color: "#e2e8f0" }}>falta</strong> para la siguiente hora y nombra esa hora.{" "}
        Ej: 9:50 → faltan 10 → <strong lang="it" style={{ color: "#e2e8f0" }}>sono le dieci meno dieci</strong>.
        <div style={{ marginTop: "2px" }}>🇲🇽 son diez para las diez</div>
      </div>

      <RuleBox icon="🕐" rule="Casos especiales" color="#c084fc">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:00</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>in punto</span>
            <span style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 en punto</span>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:15</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>e un quarto</span>
            <span style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 y cuarto</span>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:30</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>e mezza</span>
            <span style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 y media</span>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:45</span>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>meno un quarto</span>
            <span style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 menos cuarto</span>
          </div>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          A las 12:00 del día y a las 00:00 se usan palabras propias, en singular: <strong lang="it" style={{ color: "#e2e8f0" }}>è mezzogiorno</strong> (mediodía) y{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>è mezzanotte</strong> (medianoche).
        </div>
      </RuleBox>

      <SectionTitle color="#34d399">📋 Ejemplos</SectionTitle>
      {TIME_EXAMPLES.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#94a3b8", fontWeight: 800, fontSize: "14px", background: "var(--surface-deep, #0f172a)", borderRadius: "6px", padding: "2px 8px" }}>{ex.time}</span>
            <span style={{ color: "#94a3b8" }}>→</span>
            <span lang="it" style={{ color: "#f8fafc", fontWeight: 600, fontSize: "15px" }}>
              {ex.phrase[0]}<strong style={{ color: "#38bdf8" }}>{ex.phrase[1]}</strong>{ex.phrase[2]}
            </span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color="#94a3b8">🔢 Forma digital y horarios oficiales</SectionTitle>
      {TIME_DIGITAL.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#94a3b8", fontWeight: 800, fontSize: "14px", background: "var(--surface-deep, #0f172a)", borderRadius: "6px", padding: "2px 8px" }}>{ex.time}</span>
            <span style={{ color: "#94a3b8" }}>→</span>
            <span lang="it" style={{ color: "#f8fafc", fontWeight: 600, fontSize: "15px" }}>{ex.phrase}</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <RuleBox icon="❓" rule="¿A qué hora? — A che ora…?" color="#22d3ee">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Para preguntar <strong>a qué hora</strong> pasa algo: <strong lang="it" style={{ color: "#22d3ee" }}>A che ora apre?</strong> (¿A qué hora abre?).{" "}
          La respuesta lleva <strong lang="it" style={{ color: "#22d3ee" }}>alle</strong> con las horas, <strong lang="it" style={{ color: "#22d3ee" }}>all'una</strong> con la una y{" "}
          <strong lang="it" style={{ color: "#22d3ee" }}>a mezzogiorno</strong> sin artículo.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>Alle nove.</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 A las nueve.</span>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>All'una.</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 A la una.</span>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>A mezzogiorno.</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 Al mediodía.</span>
          </div>
        </div>
      </RuleBox>

      <SectionTitle color="#38bdf8">🕹️ Práctica interactiva</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "10px" }}>
        Los relojes de práctica marcan 12 horas sin a.m./p.m.: usa el contexto para saber si es de día o de noche.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "6px" }}>
        <AnalogClock />
        <DigitalClock />
      </div>
    </div>
  );
}
