import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  ASKING, DIRECTION_PHRASES, EXAMPLES, MISTAKES, PLACE_PHRASES, PLACES, ROUTES, SOLVED,
} from "./data";

const COLOR = "#14B8A6";

function CityMap() {
  const places = [
    ["🚌", "Fermata", 84, 278],
    ["🏥", "Ospedale", 84, 100],
    ["🖼️", "Museo", 330, 130],
    ["🏦", "Banca", 330, 278],
    ["💊", "Farmacia", 548, 100],
    ["🚉", "Stazione", 548, 278],
  ];

  return (
    <figure style={{ margin: "0 0 14px" }}>
      <svg viewBox="0 0 640 350" role="img" aria-labelledby="city-map-title city-map-description" style={{ width: "100%", display: "block", background: "#dbeafe", border: "2px solid #334155", borderRadius: "14px" }}>
        <title id="city-map-title">Mapa de práctica: via Roma, via Dante y corso Italia</title>
        <desc id="city-map-description">El norte está arriba. Via Roma, al oeste, y corso Italia, al este, cruzan via Dante. Piazza Garibaldi está en el cruce de via Dante y corso Italia. Al oeste de via Roma están el ospedale al norte y la fermata al sur. Entre ambas calles están el museo al norte y la banca al sur. Al este de corso Italia están la farmacia al norte y la stazione al sur.</desc>
        <path d="M190 42V350 M470 42V350 M0 200H640" stroke="#94a3b8" strokeWidth="38" />
        <path d="M190 42V350 M470 42V350 M0 200H640" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 9" />
        <g fill="#0f172a" fontSize="15" fontWeight="800" textAnchor="middle">
          <text x="190" y="27">via Roma ↕</text>
          <text x="470" y="27">corso Italia ↕</text>
          <text x="330" y="206" stroke="#94a3b8" strokeWidth="6" paintOrder="stroke">via Dante ↔</text>
          <text x="32" y="35">N ↑</text>
        </g>
        <g>
          <rect x="392" y="156" width="156" height="22" rx="6" fill="#0f172a" />
          <text x="470" y="172" fill="#f8fafc" fontSize="13" fontWeight="800" textAnchor="middle">piazza Garibaldi</text>
        </g>
        {places.map(([icon, name, x, y]) => (
          <g key={name} transform={`translate(${x} ${y})`} textAnchor="middle">
            <rect x="-62" y="-35" width="124" height="70" rx="9" fill="#0f172a" />
            <text y="-3" fontSize="26">{icon}</text>
            <text y="22" fill="#f8fafc" fontSize="16" fontWeight="700">{name}</text>
          </g>
        ))}
      </svg>
      <figcaption style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, marginTop: "8px" }}>
        El norte está arriba (↑). Izquierda y derecha dependen de hacia dónde caminas. Cada recorrido indica dónde empezar y hacia dónde mirar.
      </figcaption>
    </figure>
  );
}

export default function DirectionsSection() {
  return (
    <div>
      <TopicHeading topicId="directions" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para dar una indicación se usa el <strong style={{ color: "#f8fafc" }}>imperativo</strong>. Con tú: <span lang="it">gira, vai, prendi</span>. Con usted: <span lang="it">giri, vada, prenda</span>.{" "}
        <span lang="it">Scusi</span> va con usted; <span lang="it">scusa</span>, con tú.
      </div>
      <Legend roles={["verb", "essere", "prep", "articolata", "art", "wh"]} />

      <SectionTitle color={COLOR}>🏙️ Lugares de la ciudad</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginBottom: "8px" }}>
        {PLACES.map(([it, esp]) => (
          <div key={it} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 800 }}>{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {esp}</div>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        <span lang="it">L'ospedale</span> es masculino. <span lang="it">Dell'autobus</span> es <span lang="it">di + l'</span>.
      </p>

      <RuleBox icon="📐" rule="Dar una indicación" color={COLOR}>
        <Formula
          parts={[{ t: "Imperativo", r: "verb" }, { t: "dirección", r: "prep" }, { t: "referencia", r: "articolata" }]}
          example={[{ t: "Gira", r: "verb" }, { t: "a destra", r: "prep" }, { t: "al semaforo.", r: "articolata" }]}
          color={COLOR}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 Gira a la derecha en el semáforo.</div>
      </RuleBox>

      <SectionTitle color={COLOR}>🧭 Movimientos</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        La primera línea es de tú. La segunda, de usted. En tú, <span lang="it">andare</span> hace <span lang="it">vai</span>; también existe <span lang="it">va'</span>, con apóstrofo.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {DIRECTION_PHRASES.map(item => (
          <div key={item.phrase} style={{ display: "flex", gap: "10px", alignItems: "center", background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "11px 12px", borderLeft: `3px solid ${COLOR}` }}>
            <span style={{ position: "relative", flexShrink: 0, width: "34px", fontSize: "25px", lineHeight: 1, textAlign: "center" }}>
              {item.icon}
              {item.step && (
                <span style={{ position: "absolute", right: "-5px", bottom: "-5px", minWidth: "15px", height: "15px", borderRadius: "999px", background: COLOR, color: "#0f172a", fontSize: "10px", fontWeight: 800, lineHeight: "15px", textAlign: "center" }}>{item.step}</span>
              )}
            </span>
            <div>
              <div lang="it" style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 800 }}>{item.phrase}</div>
              <div lang="it" style={{ color: COLOR, fontSize: "13px", fontWeight: 700 }}>{item.lei}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>{item.esp}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📍 Para ubicar el destino</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {PLACE_PHRASES.map(item => (
          <div key={item.phrase} style={{ background: "var(--surface, #1e293b)", border: "1px solid #334155", borderRadius: "20px", padding: "7px 12px" }}>
            <span lang="it" style={{ color: COLOR, fontWeight: 800, fontSize: "13px" }}>{item.phrase}</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}> · {item.esp}</span>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        Con artículo, <span lang="it">davanti a, di fronte a, accanto a</span> y <span lang="it">vicino a</span> se contraen: <span lang="it">davanti al museo, di fronte alla banca, accanto al museo, vicino alla stazione</span>.
      </p>
      <RelatedTopic levelId="basico1" topicId="prepositions" />
      <RelatedTopic levelId="basico3" topicId="preposizioniTempo" />

      <SectionTitle color={COLOR}>❓ Cómo pedir indicaciones</SectionTitle>
      {ASKING.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RuleBox icon="🤝" rule="Tú o usted" color="#fbbf24">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <strong lang="it" style={{ color: "#e2e8f0" }}>Scusi</strong> es usted; <strong lang="it" style={{ color: "#e2e8f0" }}>scusa</strong>, tú. Cierra con <strong lang="it" style={{ color: "#e2e8f0" }}>Grazie</strong>. Para confirmar: <span lang="it">È lontano da qui?</span> (¿Está lejos de aquí?).
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🏙️ Practica con el mapa</SectionTitle>
      <CityMap />
      {ROUTES.map(route => (
        <div key={route.title} style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px", borderTop: `3px solid ${route.color}` }}>
          <div lang="it" style={{ color: route.color, fontWeight: 800, fontSize: "14px" }}>{route.title}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>🇲🇽 {route.esp}</div>
          <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>Punto de partida: {route.start}</p>
          <ol style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.8, margin: 0, paddingLeft: "22px" }}>
            {route.steps.map(step => <li key={step} lang="it">{step}</li>)}
          </ol>
        </div>
      ))}

      <SectionTitle color={COLOR}>📖 Más ejemplos</SectionTitle>
      {EXAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⚠️ Formas que no se escriben así</SectionTitle>
      {MISTAKES.map(item => (
        <div key={item.wrong} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div lang="it" style={{ color: "#f87171", fontSize: "14px" }}>❌ {item.wrong}</div>
          <div lang="it" style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {item.right}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {item.note}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto</SectionTitle>
      {SOLVED.map((item, index) => (
        <div key={item.q} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "13px" }}>{index + 1}. 🇲🇽 {item.q}</div>
          <div lang="it" style={{ color: "#4ade80", fontSize: "14px", fontWeight: 700, marginTop: "5px" }}>→ {item.answer}</div>
        </div>
      ))}
    </div>
  );
}
