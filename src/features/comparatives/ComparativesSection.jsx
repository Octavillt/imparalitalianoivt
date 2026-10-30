import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  ANIMALS,
  SUPERIOR,
  INFERIOR,
  CONTRACTIONS,
  CHE_EXAMPLES,
  EQUAL_EXAMPLES,
  IRREGULAR_COMPARATIVES,
  ALSO_REGULAR,
  FAMILY,
  QUALITY,
  QUESTIONS,
  INTENSIFIERS,
  PAST_FUTURE,
  SUPERLATIVE,
  ADJECTIVE_BANK,
  RULE_LABELS,
} from "./data";

const COLOR = "#60A5FA";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

function fold(value) {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

function BankTable({ rows }) {
  if (rows.length === 0) return <p style={{ ...text, padding: "12px 4px" }}>Sin resultados.</p>;
  return rows.map(([word, comparative, esp, ruleKey]) => (
    <div key={`${word}-${comparative}`} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px 10px" }}>
        <div lang="it" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{word} → {comparative}</div>
        <span style={{
          color: COLOR, background: `${COLOR}22`, fontWeight: 700,
          padding: "2px 9px", borderRadius: "20px", fontSize: "11px", whiteSpace: "nowrap",
        }}
        >
          {RULE_LABELS[ruleKey]}
        </span>
      </div>
      <div style={translation}>🇲🇽 {esp}</div>
    </div>
  ));
}

export default function ComparativesSection() {
  const [filter, setFilter] = useState("");
  const q = fold(filter.trim());
  const filtered = ADJECTIVE_BANK.filter(([word, comparative, esp]) =>
    fold(word).includes(q) || fold(comparative).includes(q) || fold(esp).includes(q)
  );

  return (
    <div>
      <TopicHeading topicId="comparatives" />
      <div style={{ ...card, ...text }}>
        💡 Los comparativos comparan dos personas, animales o cosas.
        <span lang="it"> Più</span> sube la cualidad y <span lang="it">meno</span> la baja.
        El adjetivo concuerda con quien se describe.
      </div>
      <Legend roles={["subject", "essere", "verb", "adj", "comp", "art", "articolata", "prep", "demo"]} />

      <RuleBox icon="🔑" rule="Più o meno, y después di" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><span lang="it">Più</span> + adjetivo + <span lang="it">di</span> es «más … que».</li>
          <li><span lang="it">Meno</span> + adjetivo + <span lang="it">di</span> es «menos … que».</li>
          <li><span lang="it">Di</span> se contrae con el artículo. Sin artículo, <span lang="it">di</span> se queda: <span lang="it">di Firenze</span>, <span lang="it">di me</span>, <span lang="it">di te</span>.</li>
        </ul>
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y opuestos" />
      </RuleBox>

      <SectionTitle color={COLOR}>🐾 Animales para comparar</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px" }}>
        {ANIMALS.map(([it, es]) => (
          <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
            <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
            <div style={translation}>🇲🇽 {es}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📏 Superioridad: più + adjetivo + di</SectionTitle>
      <Formula
        label="Más que"
        color={COLOR}
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "essere", r: "essere" },
          { t: "più", r: "comp" },
          { t: "adjetivo", r: "adj" },
          { t: "di", r: "prep" },
          { t: "la otra parte", color: "#94a3b8" },
        ]}
        example={[
          { t: "Leslie", r: "subject" },
          { t: "è", r: "essere" },
          { t: "più", r: "comp" },
          { t: "alta", r: "adj" },
          { t: "di", r: "prep" },
          { t: "Octavio.", color: "#94a3b8" },
        ]}
      />
      {SUPERIOR.map(item => <ExampleCard key={`sup-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>✍️ Cómo se escribe di</SectionTitle>
      <p style={text}>Con artículo, di se junta y la forma cambia. Estas son las siete contracciones.</p>
      {CONTRACTIONS.map(([sum, form, example, esp]) => (
        <div key={form} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>
            <span lang="it">{sum}</span> → <span lang="it">{form}</span>
          </div>
          <div lang="it" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>📉 Inferioridad: meno + adjetivo + di</SectionTitle>
      <Formula
        label="Menos que"
        color={COLOR}
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "essere", r: "essere" },
          { t: "meno", r: "comp" },
          { t: "adjetivo", r: "adj" },
          { t: "di", r: "prep" },
          { t: "la otra parte", color: "#94a3b8" },
        ]}
        example={[
          { t: "Il treno", r: "subject" },
          { t: "è", r: "essere" },
          { t: "meno", r: "comp" },
          { t: "caro", r: "adj" },
          { t: "dell'aereo.", r: "articolata" },
        ]}
      />
      {INFERIOR.map(item => <ExampleCard key={`inf-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🔀 Che, en lugar de di</SectionTitle>
      <RuleBox icon="⚖️" rule="Dos partes del mismo sujeto" color={COLOR}>
        <p style={text}>
          <span lang="it">Che</span> compara dos adjetivos, dos verbos o dos expresiones con preposición
          sobre un mismo sujeto. Entre dos personas o dos cosas distintas sigue <span lang="it">di</span>.
        </p>
      </RuleBox>
      <Formula
        label="Che"
        color={COLOR}
        parts={[
          { t: "mismo sujeto", r: "subject" },
          { t: "più", r: "comp" },
          { t: "parte A", color: "#e2e8f0" },
          { t: "che", r: "comp" },
          { t: "parte B", color: "#e2e8f0" },
        ]}
        example={[
          { t: "simpatica", r: "adj" },
          { t: "che", r: "comp" },
          { t: "bella", r: "adj" },
        ]}
      />
      {CHE_EXAMPLES.map(item => <ExampleCard key={`che-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🟰 Igualdad: come y quanto</SectionTitle>
      <Formula
        label="Como"
        color={COLOR}
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "essere", r: "essere" },
          { t: "adjetivo", r: "adj" },
          { t: "come", r: "comp" },
          { t: "la otra parte", color: "#94a3b8" },
        ]}
        example={[
          { t: "Leslie", r: "subject" },
          { t: "è", r: "essere" },
          { t: "alta", r: "adj" },
          { t: "come", r: "comp" },
          { t: "Octavio.", color: "#94a3b8" },
        ]}
      />
      <Formula
        label="Tan como"
        color={COLOR}
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "essere", r: "essere" },
          { t: "tanto", r: "comp" },
          { t: "adjetivo", r: "adj" },
          { t: "quanto", r: "comp" },
          { t: "la otra parte", color: "#94a3b8" },
        ]}
      />
      <p style={text}>
        El adjetivo concuerda con el sujeto. También se dice <span lang="it">così alta come</span>,
        y <span lang="it">alto quanto</span> sin <span lang="it">tanto</span>.
      </p>
      {EQUAL_EXAMPLES.map(item => <ExampleCard key={`eq-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⭐ Comparativos irregulares</SectionTitle>
      {IRREGULAR_COMPARATIVES.map(([base, form, esp]) => (
        <div key={base} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{base} → {form}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}
      <RuleBox icon="👨‍👩‍👧" rule="Più buono existe, y maggiore es de la familia" color={COLOR}>
        <p style={text}>
          <span lang="it">Più buono</span> y <span lang="it">più cattivo</span> también existen.
          <span lang="it"> Maggiore</span> y <span lang="it">minore</span>, con un hermano o una hermana, hablan de la edad.
          El tamaño va con <span lang="it">più grande</span> y <span lang="it">più piccolo</span>.
          En singular, lo usual con la familia es sin artículo: <span lang="it">mio fratello</span>, <span lang="it">mia sorella</span>.
        </p>
      </RuleBox>
      {ALSO_REGULAR.map(item => <ExampleCard key={`also-${item.esp}`} pts={item.pts} esp={item.esp} />)}
      {FAMILY.map(item => <ExampleCard key={`fam-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎵 Migliore es adjetivo; meglio, adverbio</SectionTitle>
      <p style={text}>
        En español, «mejor» cubre los dos. Aquí <span lang="it">migliore</span> acompaña al sustantivo
        y <span lang="it">meglio</span> acompaña al verbo. <span lang="it">Peggiore</span> y <span lang="it">peggio</span> se reparten igual.
      </p>
      {QUALITY.map(item => <ExampleCard key={`q-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>❓ Preguntas</SectionTitle>
      <p style={text}>
        La pregunta conserva el orden. <span lang="it">Chi</span> pregunta por personas.
        <span lang="it"> Sì</span> lleva acento.
      </p>
      {QUESTIONS.map(([question, answer, esp]) => (
        <div key={question} style={card}>
          <div lang="it" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{question}</div>
          <div lang="it" style={text}>→ {answer}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>📊 ¿Cuánto más?</SectionTitle>
      <p style={text}>
        <span lang="it">Molto più</span> es mucho más. <span lang="it">Un po' più</span> es un poco más.
      </p>
      {INTENSIFIERS.map(item => <ExampleCard key={`int-${item.esp}`} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⏪⏩ Pasado y futuro</SectionTitle>
      <p style={text}>
        <span lang="it">Più</span> y <span lang="it">meno</span> no cambian. Cambia el verbo:
        <span lang="it"> faceva</span> en ese pasado del clima, <span lang="it">farà</span> en futuro.
      </p>
      {PAST_FUTURE.map(item => <ExampleCard key={`time-${item.esp}`} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico5" topicId="imperfetto" label="Repasar el imperfetto" />
      <RelatedTopic levelId="basico5" topicId="futuro" label="Repasar el futuro semplice" />

      <SectionTitle color={COLOR}>📋 Tabla de formas</SectionTitle>
      <FilterableList
        label="Buscar comparativo"
        placeholder="🔍 Busca: alto, migliore, mejor, più..."
        value={filter}
        onChange={setFilter}
      >
        <BankTable rows={filtered} />
      </FilterableList>

      <details className="lesson-extension">
        <summary>Ampliación: el más y -issimo</summary>
        <p>
          <span lang="it">Il più alto</span> es el más alto. El artículo concuerda:
          <span lang="it"> il più alto</span>, <span lang="it">la più alta</span>, <span lang="it">i più alti</span>, <span lang="it">le più alte</span>.
          <span lang="it"> Bellissimo</span> es muy bonito, y también concuerda:
          <span lang="it"> bellissimo</span>, <span lang="it">bellissima</span>, <span lang="it">bellissimi</span>, <span lang="it">bellissime</span>.
        </p>
        {SUPERLATIVE.map(item => <ExampleCard key={`ext-${item.esp}`} pts={item.pts} esp={item.esp} />)}
      </details>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Compara a Leslie y a Octavio, al conejo y al hámster, y al tren y al avión.
        Usa <span lang="it">più</span>, <span lang="it">meno</span> y una forma irregular. Usa el Quiz para practicar <span lang="it">di</span>, <span lang="it">che</span> y la concordancia.
      </p>
    </div>
  );
}
