import TopicHeading from "../../components/TopicHeading";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  WH_WORDS,
  ORDER_EXAMPLES,
  APOSTROPHE,
  CAUSA,
  QUANTO_FORMS,
  QUALE_FORMS,
  WH_QA,
} from "./data";

const COLOR = "#22D3EE";

const WORD_LINKS = {
  "A che ora": { levelId: "basico1", topicId: "time" },
  "Di dove": { levelId: "basico1", topicId: "countries" },
  "Di chi": { levelId: "basico2", topicId: "preposizioniArticolate" },
  Come: { levelId: "basico1", topicId: "vocabulary" },
};

function WordCard({ word, es, use, example, esp, link }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px", borderLeft: `3px solid ${COLOR}` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px", flexWrap: "wrap" }}>
        <span lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "18px" }}>{word}?</span>
        <span style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 600 }}>{es}</span>
      </div>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{use}</div>
      <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px" }}>{example}</div>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {esp}</div>
      {link && <RelatedTopic levelId={link.levelId} topicId={link.topicId} />}
    </div>
  );
}

export default function WhQuestionsSection() {
  return (
    <div>
      <TopicHeading topicId="whQuestions" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Las <strong style={{ color: "#f8fafc" }}>palabras interrogativas</strong> piden un dato: persona, cosa, lugar, momento, modo, causa, cantidad o elección.
        Van <strong style={{ color: "#f8fafc" }}>antes del verbo</strong>. La respuesta puede ser breve:{" "}
        <span lang="it">È a Roma. Studio italiano. Alle nove.</span>
      </div>
      <Legend roles={["wh", "essere", "verb", "subject"]} />

      <RuleBox icon="📐" rule="Orden: palabra interrogativa + verbo + sujeto" color={COLOR}>
        <Formula
          parts={[{ t: "Palabra", r: "wh" }, { t: "verbo", r: "verb" }, { t: "sujeto", r: "subject" }, { t: "?", color: "#e2e8f0" }]}
          example={[{ t: "Dov'", r: "wh" }, { t: "è", r: "essere" }, { t: "Leslie", r: "subject" }, { t: "?", color: "#94a3b8" }]}
          color={COLOR}
        />
        <p style={{ color: "#94a3b8", fontSize: "13px", margin: "8px 0" }}>
          Ante <span lang="it">è</span>, <span lang="it">dove, come y cosa</span> suelen elidir la vocal final: <span lang="it">dov'è, com'è, cos'è</span>. También existen las formas sin elisión.
        </p>
        {ORDER_EXAMPLES.map(ex => (
          <div key={ex.esp} style={{ marginBottom: "8px" }}>
            <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
          </div>
        ))}
        <RelatedTopic levelId="basico1" topicId="essereAvere" />
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Las palabras</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px", marginBottom: "16px" }}>
        {WH_WORDS.map(item => (
          <WordCard key={item.word} {...item} link={WORD_LINKS[item.word]} />
        ))}
      </div>

      <RuleBox icon="✏️" rule="Apóstrofo: dov'è, com'è, cos'è" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Dove, come y cosa</span> pueden perder la vocal final ante <span lang="it">è</span>: <span lang="it">dov'è, com'è, cos'è</span>.
          <span lang="it">Quale</span> ante <span lang="it">è</span> se escribe <span lang="it">Qual è</span>, separado y <strong style={{ color: "#f8fafc" }}>sin apóstrofo</strong>.
          <span lang="it">Che cos'è</span> es <span lang="it">che cosa</span> + <span lang="it">è</span>.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px", marginTop: "8px" }}>
          {APOSTROPHE.map(item => (
            <div key={item.written} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "18px" }}>{item.written}</div>
              <div lang="it" style={{ color: "#94a3b8", fontSize: "12px" }}>{item.sum}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {item.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="💬" rule="Perché pregunta y también responde" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Lleva acento agudo en la e final. Sirve para la pregunta y para la causa.
        </p>
        {CAUSA.map(ex => (
          <div key={ex.esp} style={{ marginTop: "8px" }}>
            <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
          </div>
        ))}
      </RuleBox>

      <RuleBox icon="🔢" rule="Quanto concuerda con el sustantivo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Cuando pregunta por una cantidad de forma general, se usa <span lang="it">quanto: Quanto costa?</span> Como adjetivo o pronombre referido a algo concreto, concuerda: <span lang="it">Quante pizze vuoi? / Quante ne vuoi?</span>
          El masculino singular también es <span lang="it">quanto</span>: <span lang="it">quanto gelato</span>.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px", marginTop: "8px" }}>
          {QUANTO_FORMS.map(item => (
            <div key={item.form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900 }}>{item.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.use}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "4px" }}>{item.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {item.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🎯" rule="Quale cambia en número, no en género" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Singular: <span lang="it">quale</span>, con libro o con pizza. Plural: <span lang="it">quali</span>, con libri o con pizze.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px", marginTop: "8px" }}>
          {QUALE_FORMS.map(item => (
            <div key={item.form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900 }}>{item.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{item.use}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {item.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas breves</SectionTitle>
      {WH_QA.map(item => (
        <div key={item.esp} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2, display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
            <Sentence pts={item.q} />
            <span style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 600 }}>({item.label})</span>
          </div>
          <div lang="it" style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>→ {item.a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {item.esp}</div>
        </div>
      ))}
    </div>
  );
}
