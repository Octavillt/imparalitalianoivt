import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import NumberStepper from "./NumberStepper";
import LettersPanel from "./LettersPanel";
import {
  NUMBERS_0_20,
  NUMBERS_21_29,
  TENS,
  BIG_NUMBERS,
  COMPOUND_EXAMPLES,
  ROOM_NUMBERS,
} from "./data";

// Del 11 al 16 el final es -dici; del 17 al 19 empiezan con dici-: se
// reparten el patrón del español (dieciséis), pero en dos grupos.
function diciParts(n, word) {
  if (n >= 11 && n <= 16 && word.endsWith("dici")) {
    return { before: word.slice(0, -4), highlight: "dici", after: "" };
  }
  if (n >= 17 && n <= 19 && word.startsWith("dici")) {
    return { before: "", highlight: "dici", after: word.slice(4) };
  }
  return null;
}

const NumberChip = ({ n, word, color, wide }) => {
  const dici = typeof n === "number" ? diciParts(n, word) : null;
  return (
    <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: wide ? "wrap" : "nowrap", justifyContent: "space-between", alignItems: "center", gap: "6px 10px" }}>
      <span style={{ color: color || "#64748b", fontWeight: 800, fontSize: "13px", minWidth: wide ? "auto" : "26px", whiteSpace: "nowrap" }}>{n}</span>
      <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px", textAlign: "right" }}>
        {dici ? (
          <>
            {dici.before}
            <strong style={{ color: "#fbbf24" }}>{dici.highlight}</strong>
            {dici.after}
          </>
        ) : word}
      </span>
    </div>
  );
};

export default function NumbersSection() {
  return (
    <div>
      <TopicHeading topicId="numbers" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los dos cimientos del italiano hablado: los <strong style={{ color: "#f8fafc" }}>numeri</strong> para contar, dar precios, horas o teléfonos, y las{" "}
        <strong style={{ color: "#f8fafc" }}>lettere</strong> para deletrear tu nombre o cualquier palabra que no te entiendan.
      </div>

      <SectionTitle color="#f472b6">🔢 I numeri cardinali — números para contar</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        Los números cardinales son los que usamos para contar (0, 1, 2, 3…). Ojo: del 11 al 16 terminan en{" "}
        <strong style={{ color: "#fbbf24" }}>-dici</strong> y del 17 al 19 empiezan con{" "}
        <strong style={{ color: "#fbbf24" }}>dici-</strong>. Las decenas pierden su vocal final ante{" "}
        <strong style={{ color: "#e2e8f0" }}>uno</strong> y <strong style={{ color: "#e2e8f0" }}>otto</strong>{" "}
        (trentuno, ottantotto), y <strong style={{ color: "#e2e8f0" }}>tre</strong> lleva acento al cerrar la palabra:{" "}
        <strong style={{ color: "#fbbf24" }}>ventitré</strong>. En italiano el punto separa miles y la coma, decimales (1.000 y 2,50):{" "}
        al revés que en México.
      </div>

      <SectionTitle color="#f472b6">0 – 20</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "16px" }}>
        {NUMBERS_0_20.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#f472b6" />
        ))}
      </div>

      <SectionTitle color="#60a5fa">21 – 29 (decena + unidad, todo junto)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "10px" }}>
        {NUMBERS_21_29.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#60a5fa" />
        ))}
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "16px" }}>
        La misma lógica aplica del 31 al 99, siempre pegado: <strong lang="it" style={{ color: "#e2e8f0" }}>trentuno, quarantacinque, novantanove…</strong>
      </div>

      <SectionTitle color="#34d399">Decenas (30 – 90)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "6px", marginBottom: "16px" }}>
        {TENS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#34d399" />
        ))}
      </div>

      <SectionTitle color="#c084fc">100 en adelante</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6px", marginBottom: "16px" }}>
        {BIG_NUMBERS.map(([n, word]) => (
          <NumberChip key={n} n={n} word={word} color="#c084fc" wide />
        ))}
      </div>

      <RuleBox icon="📐" rule="Números compuestos — centena + resto pegado" color="#fbbf24">
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7 }}>No se añade la conjunción «y» ni se usan guiones: la centena y el resto se escriben juntos. La centena pierde la <em>o</em> solo ante otto y ottanta (centotto, centottanta); con uno se conserva: centouno.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {COMPOUND_EXAMPLES.map(([n, word]) => (
            <div key={n} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px" }}>{n}</span>
              <span lang="it" style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px" }}>{word}</span>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🔁" rule="Prima / Dopo — el número anterior y el siguiente" color="#fb923c">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", marginTop: "6px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>⬅️ Prima</div>
            <div lang="it" style={{ color: "#94a3b8", fontSize: "13px" }}>78 · settantotto</div>
          </div>
          <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "10px 18px", textAlign: "center" }}>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "18px" }}>79</div>
            <div lang="it" style={{ color: "#fb923c", fontSize: "13px", fontWeight: 700, marginTop: "2px" }}>settantanove</div>
            <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>🇲🇽 setenta y nueve</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>Dopo ➡️</div>
            <div lang="it" style={{ color: "#94a3b8", fontSize: "13px" }}>80 · ottanta</div>
          </div>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
          Ej: el <strong style={{ color: "#e2e8f0" }}>dopo</strong> de 79 es 80 → <strong lang="it" style={{ color: "#fb923c" }}>«è ottanta»</strong>
        </div>
      </RuleBox>

      <SectionTitle color="#94a3b8">📞 Cellulare / Camera</SectionTitle>
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
          Los teléfonos se pueden leer <strong style={{ color: "#f8fafc" }}>dígito por dígito</strong>. En las habitaciones de hotel también puede leerse el número completo: <span lang="it">camera centotré</span>. El{" "}
          <strong style={{ color: "#f8fafc" }}>0</strong> siempre es <strong lang="it" style={{ color: "#fbbf24" }}>zero</strong>.
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {ROOM_NUMBERS.map((r, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
              <div lang="it" style={{ color: "#94a3b8", fontSize: "11px", marginBottom: "3px" }}>{r.label}</div>
              <div style={{ color: "#f472b6", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle color="#f472b6">🕹️ Práctica interactiva</SectionTitle>
      <NumberStepper />

      <LettersPanel />
    </div>
  );
}
