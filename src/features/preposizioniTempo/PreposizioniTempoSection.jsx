import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  ZOOM, PREP_USES, TIME_EXAMPLES, SAME_WORD, TRANSPORT, FIXED,
  CONTRAST_ROWS, HOW_OFTEN, FREQUENCY_WORDS, MISTAKES, EXERCISE,
} from "./data";

const COLOR = "#FB923C";

function PrepCard({ prep, icon, color, tagline, idea, children }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px", borderLeft: `4px solid ${color}` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "22px", fontWeight: 900, color }}>{icon} {prep}</span>
        <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{tagline}</span>
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", margin: "4px 0 10px", lineHeight: 1.7 }}>{idea}</div>
      {children}
    </div>
  );
}

function Chip({ text, color }) {
  return (
    <span lang="it" style={{ background: "var(--surface-deep, #0f172a)", border: `1px solid ${color}44`, borderRadius: "20px", padding: "4px 11px", color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>
      {text}
    </span>
  );
}

export default function PreposizioniTempoSection() {
  return (
    <div>
      <TopicHeading topicId="preposizioniTempo" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En español, «en» y «a» cubren muchas ideas distintas. El italiano las reparte:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>a, in, da, per, tra, su, di</strong>. Si la preposición encuentra un artículo, se escriben juntos:{" "}
        <span lang="it">alla stazione, al bar, nel 2026</span>.
      </div>
      <Legend roles={["subject", "verb", "prep", "articolata", "art", "essere", "neg"]} />
      <RelatedTopic levelId="basico2" topicId="preposizioniArticolate" />

      <RuleBox icon="🔍" rule="Tres anclas para empezar" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px" }}>
          {ZOOM.map(item => (
            <div key={item.prep} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "12px", textAlign: "center", border: `1px solid ${item.color}33` }}>
              <div style={{ fontSize: "20px" }}>{item.icon}</div>
              <div style={{ fontSize: "22px", fontWeight: 900, color: item.color, margin: "2px 0" }}>{item.prep}</div>
              <div style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 700 }}>{item.size}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.esp}</div>
              <div lang="it" style={{ color: item.color, fontSize: "12px", fontWeight: 700, marginTop: "4px" }}>{item.sample}</div>
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px" }}>
          Después de estas tres, revisa per, tra / fra, su, di y los días sin preposición. Las frases fijas se memorizan enteras.
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🕐 Tiempo y lugar</SectionTitle>
      {PREP_USES.map(item => (
        <PrepCard key={item.prep} prep={item.prep} icon={item.icon} color={item.color} tagline={item.tagline} idea={item.idea}>
          {item.groups.map(group => (
            <div key={group.title} style={{ marginBottom: "8px" }}>
              <div style={{ color: item.color, fontSize: "12px", fontWeight: 700, marginBottom: "5px" }}>{group.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {group.items.map(text => <Chip key={text} text={text} color={item.color} />)}
              </div>
            </div>
          ))}
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #334155", lineHeight: 1.7 }}>
            💡 {item.note}
          </div>
        </PrepCard>
      ))}

      <SectionTitle color={COLOR}>📐 Dónde va la expresión</SectionTitle>
      <Formula
        label="Orden habitual"
        parts={[{ t: "Sujeto", r: "subject" }, { t: "Verbo", r: "verb" }, { t: "Lugar", r: "prep" }, { t: "Tiempo", r: "articolata" }]}
        example={[{ t: "Leslie", r: "subject" }, { t: "arriva", r: "verb" }, { t: "a Roma", r: "prep" }, { t: "alle otto", r: "articolata" }]}
        color={COLOR}
      />
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        La expresión también puede abrir la oración: <span lang="it">Di mattina bevo un caffè.</span>
      </p>
      {TIME_EXAMPLES.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}
      <RelatedTopic levelId="basico1" topicId="time" />
      <RelatedTopic levelId="basico1" topicId="dates" />

      <SectionTitle color={COLOR}>🔄 La misma idea, otra preposición</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        No basta la palabra: cambia lo que quieres decir.
      </p>
      {SAME_WORD.map(block => (
        <div key={block.word} style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
          <div lang="it" style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px", marginBottom: "8px" }}>{block.word}</div>
          {block.rows.map(row => (
            <div key={row.phrase} style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", padding: "6px 0", borderTop: "1px solid #334155" }}>
              <span lang="it" style={{ color: row.color, fontWeight: 900, fontSize: "14px", minWidth: "36px" }}>{row.prep}</span>
              <span lang="it" style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{row.phrase}</span>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {row.esp}</span>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle color={COLOR}>🚌 El transporte</SectionTitle>
      <RuleBox icon="🚌" rule="In con estos medios; a piedi va aparte" color="#fbbf24">
        {TRANSPORT.map(item => (
          <div key={item.right} style={{ marginBottom: "6px" }}>
            <div lang="it" style={{ color: "#4ade80", fontSize: "14px", fontWeight: 700 }}>✅ {item.right}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.esp}</div>
          </div>
        ))}
      </RuleBox>
      <RelatedTopic levelId="basico1" topicId="prepositions" />

      <SectionTitle color={COLOR}>📌 Expresiones fijas</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Apréndelas como una pieza. Varias van sin artículo.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {FIXED.map(item => (
          <div key={item.phrase} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
            <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{item.phrase}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>🇲🇽 Contraste con el español</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "8px" }}>
        Una misma palabra del español no elige una sola preposición italiana.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "4px", marginBottom: "16px" }}>
        {["Italiano", "Español"].map(title => (
          <div key={title} style={{ background: "var(--surface-deep, #0f172a)", color: "#94a3b8", fontWeight: 800, fontSize: "12px", padding: "8px 10px" }}>{title}</div>
        ))}
        {CONTRAST_ROWS.map(([it, esp]) => (
          <div key={it} style={{ display: "contents" }}>
            <div lang="it" style={{ background: "var(--surface, #1e293b)", color: "#e2e8f0", fontWeight: 700, fontSize: "13px", padding: "8px 10px" }}>{it}</div>
            <div style={{ background: "var(--surface, #1e293b)", color: "#94a3b8", fontSize: "13px", padding: "8px 10px" }}>{esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>🔁 ¿Cuántas veces?</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        <strong style={{ color: "#f8fafc" }}>Una volta</strong> es una vez. De dos en adelante, <strong style={{ color: "#f8fafc" }}>volte</strong>. El periodo se contrae: <span lang="it">al giorno, alla settimana</span>.
      </p>
      {HOW_OFTEN.map(ex => (
        <div key={ex.esp} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.q} /></div>
          <div lang="it" style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>→ {ex.a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
      <Formula
        label="Cómo se arma"
        parts={[{ t: "una volta / due volte", color: "#e2e8f0" }, { t: "al / alla", r: "articolata" }, { t: "periodo", color: "#e2e8f0" }]}
        example={[{ t: "Vado", r: "verb" }, { t: "due volte", color: "#94a3b8" }, { t: "alla settimana.", r: "articolata" }]}
        color={COLOR}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {FREQUENCY_WORDS.map(item => (
          <div key={item.word} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 14px" }}>
            <div lang="it" style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{item.word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.esp}</div>
          </div>
        ))}
      </div>
      <RelatedTopic levelId="basico3" topicId="routineRiflessivi" />

      <SectionTitle color={COLOR}>⚠️ Si hay artículo, se contrae</SectionTitle>
      {MISTAKES.map(item => (
        <div key={item.wrong} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div lang="it" style={{ color: "#f87171", fontSize: "14px" }}>❌ {item.wrong}</div>
          <div lang="it" style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {item.right}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {item.note}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto</SectionTitle>
      {EXERCISE.map((ex, index) => (
        <div key={ex.q} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{index + 1}. 🇲🇽 {ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
        </div>
      ))}
    </div>
  );
}
