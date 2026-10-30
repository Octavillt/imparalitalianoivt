import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  ADVERB_PAIRS,
  COME,
  CONTRASTS,
  FORMATION_RULES,
  POSITION,
  WITHOUT_MENTE,
} from "./data";

const COLOR = "#F472B6";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

// La base y «mente» van pegadas: su suma es el adverbio completo.
function AdverbBuild({ adverb }) {
  const ending = "mente";
  const stem = adverb.endsWith(ending) ? adverb.slice(0, -ending.length) : "";
  if (!stem || stem + ending !== adverb) {
    return <span lang="it" style={{ color: C.adj.fg, fontWeight: 800 }}>{adverb}</span>;
  }
  return (
    <span lang="it">
      <span style={{ color: C.adj.fg, background: C.adj.bg, fontWeight: 800, borderRadius: "6px", padding: "1px 5px" }}>{stem}</span>
      <span style={{ color: C.ending.fg, background: C.ending.bg, fontWeight: 800, borderRadius: "6px", padding: "1px 5px" }}>{ending}</span>
    </span>
  );
}

export default function AdverbsMannerSection() {
  return (
    <div>
      <TopicHeading topicId="adverbsManner" />
      <p style={{ ...card, ...text }}>
        🎶 El adjetivo dice cómo es alguien o algo. El adverbio dice cómo se hace la acción. <span lang="it">Leslie è una buona cantante. Leslie canta bene.</span>
      </p>
      <Legend roles={["adj", "ending", "verb", "essere", "subject", "wh", "art"]} />

      <SectionTitle color={COLOR}>⚖️ Adjetivo o adverbio</SectionTitle>
      <RuleBox icon="⚖️" rule="Con essere va el adjetivo; con los otros verbos de estas frases, el adverbio" color={COLOR}>
        <p style={text}>
          <span lang="it">La pizza è buona</span> describe la pizza. <span lang="it">Cucini bene</span> es el presente de tú: cocinas bien. <span lang="it">Octavio è lento</span> lo describe a él. <span lang="it">Octavio parla lentamente</span> describe cómo habla.
        </p>
        <RelatedTopic levelId="basico2" topicId="adjectives" />
      </RuleBox>
      {CONTRASTS.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>✍️ Cómo se forman</SectionTitle>
      {FORMATION_RULES.map(rule => (
        <RuleBox key={rule.title} icon="📖" rule={rule.title} color={COLOR}>
          <p style={text}>{rule.description}</p>
          {rule.examples.map(([it, es]) => (
            <div key={it} style={{ marginBottom: "10px" }}>
              <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
              <div style={translation}>🇲🇽 {es}</div>
            </div>
          ))}
        </RuleBox>
      ))}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px", marginBottom: "12px" }}>
        {ADVERB_PAIRS.map(([adjective, adverb]) => (
          <div key={adjective} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
            <div lang="it" style={{ color: "#94a3b8", fontSize: "13px" }}>{adjective}</div>
            <div style={{ marginTop: "6px" }}><AdverbBuild adverb={adverb} /></div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📍 Dónde va</SectionTitle>
      <p style={text}>
        Después del verbo: <span lang="it">Parla lentamente</span>. <span lang="it">Molto</span> va antes del adverbio: <span lang="it">Parla molto bene</span>.
      </p>
      {POSITION.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico4" topicId="exerciseWords" />

      <RuleBox icon="❓" rule="Preguntar con come" color={COLOR}>
        <p style={text}><span lang="it">Come</span> pregunta cómo. La respuesta lleva el adverbio.</p>
      </RuleBox>
      {COME.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎹 Sin -mente</SectionTitle>
      <p style={text}>
        <span lang="it">Piano, forte, bene</span> y <span lang="it">male</span> dicen cómo. <span lang="it">Insieme, volentieri, presto</span> y <span lang="it">tardi</span> también se usan sin <span lang="it">-mente</span>. <span lang="it">Piano</span> puede ser en voz baja o despacio. <span lang="it">Presto</span> es temprano en <span lang="it">Arrivo presto</span> y pronto en <span lang="it">Torno presto</span>.
      </p>
      {WITHOUT_MENTE.map(([it, es, example, meaning]) => (
        <div key={example} style={card}>
          <div style={{ ...text, fontWeight: 700 }}><span lang="it">{it}</span> — {es}</div>
          <div lang="it" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {meaning}</div>
        </div>
      ))}
      <div style={card}>
        <div lang="it" style={{ ...text, fontWeight: 700 }}>Torno presto.</div>
        <div style={translation}>🇲🇽 Regreso pronto.</div>
      </div>
    </div>
  );
}
