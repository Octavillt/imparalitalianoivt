import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  ABILITY,
  EXERCISE_WORDS,
  GROUP_ORDERS,
  NEGATIVE,
  ONGOING,
  VOCAB,
  VOI_FORMS,
} from "./data";

const COLOR = "#A78BFA";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

const COLUMNS = ["Infinitivo", "Tú", "Usted", "Ustedes", "Gerundio"];

export default function ExerciseWordsSection() {
  return (
    <div>
      <TopicHeading topicId="exerciseWords" />
      <p style={{ ...card, ...text }}>
        🏋️ Estas palabras sirven para dar una clase y para decir qué movimiento va ahora. <span lang="it">Voi</span> es ustedes, el grupo.
      </p>
      <Legend roles={["verb", "inf", "gerundio", "neg", "essere", "subject", "art", "prep"]} />

      <SectionTitle color={COLOR}>📖 Los nueve verbos</SectionTitle>
      <ScrollHint />
      <div style={{ overflowX: "auto", margin: "8px 0 16px" }}>
        <div style={{ minWidth: "680px", display: "grid", gridTemplateColumns: "1.3fr repeat(4, 1fr)", gap: "4px" }}>
          {COLUMNS.map(label => (
            <div key={label} style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 800 }}>{label}</div>
          ))}
          {EXERCISE_WORDS.map(word => (
            <Fragment key={word.it}>
              <div style={{ padding: "8px 4px" }}>
                <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{word.it}</div>
                <div style={{ color: "#94a3b8", fontSize: "12px" }}>{word.es}</div>
              </div>
              <div lang="it" style={{ color: C.verb.fg, fontWeight: 800, padding: "8px 4px" }}>{word.tu}</div>
              <div lang="it" style={{ color: C.verb.fg, fontWeight: 800, padding: "8px 4px" }}>{word.lei}</div>
              <div lang="it" style={{ color: C.verb.fg, fontWeight: 800, padding: "8px 4px" }}>{VOI_FORMS[word.it]}</div>
              <div lang="it" style={{ color: C.gerundio.fg, fontWeight: 800, padding: "8px 4px" }}>{word.gerundio}</div>
            </Fragment>
          ))}
        </div>
      </div>

      {EXERCISE_WORDS.map((word, index) => (
        <RuleBox key={word.it} icon="🏃" rule={`${index + 1}. ${word.it} — ${word.es}`} color={COLOR}>
          <p style={text}>{word.note}</p>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{word.instruction}</div>
          <div style={translation}>🇲🇽 {word.meaning}</div>
          <p style={text}>Gerundio: <span lang="it">{word.gerundio}</span>.</p>
        </RuleBox>
      ))}

      <RuleBox icon="🔎" rule="Pares que conviene no mezclar" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><span lang="it">Alzare</span> levanta una parte del cuerpo: <span lang="it">alza le braccia</span>. <span lang="it">Sollevare</span>, aquí, levanta la pesa: <span lang="it">solleva il peso</span>.</li>
          <li><span lang="it">Spingere</span> es empujar. <span lang="it">Tirare</span> es jalar.</li>
          <li><span lang="it">Piegare</span> es doblar. <span lang="it">Stendere</span> es estirar.</li>
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>📣 El imperativo</SectionTitle>
      <RuleBox icon="💬" rule="Tú y usted no usan la misma terminación" color={COLOR}>
        <p style={text}>
          En un verbo en <span lang="it">-are</span>, la orden de tú termina en <span lang="it">-a</span> y la de usted en <span lang="it">-i</span>: <span lang="it">alza / alzi</span>, <span lang="it">piega / pieghi</span>. En uno en <span lang="it">-ere</span>, tú termina en <span lang="it">-i</span> y usted en <span lang="it">-a</span>: <span lang="it">stendi / stenda</span>, <span lang="it">spingi / spinga</span>.
        </p>
        <p style={text}>
          <span lang="it">Piegare</span> escribe h en <span lang="it">pieghi</span> para que la g suene fuerte. Con ustedes: <span lang="it">Alzate le braccia. Piegate le ginocchia.</span>
        </p>
        <RelatedTopic levelId="basico4" topicId="bodyParts" />
        <RelatedTopic levelId="basico3" topicId="directions" />
      </RuleBox>
      {GROUP_ORDERS.map(([it, es]) => (
        <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <RuleBox icon="🚫" rule="La negativa de tú usa el infinitivo" color={COLOR}>
        <p style={text}>
          <span lang="it">Non piegare le ginocchia</span> es de tú. <span lang="it">Non pieghi le ginocchia</span> es de usted. Con ustedes, <span lang="it">non</span> va antes de la forma del grupo: <span lang="it">Non alzate le braccia</span>.
        </p>
      </RuleBox>
      {NEGATIVE.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🤸 Con el cuerpo</SectionTitle>
      <p style={text}>
        <span lang="it">Alza le braccia. Stendi le gambe. Gira la testa a sinistra.</span> <span lang="it">Le braccia</span> y <span lang="it">le ginocchia</span> son los plurales femeninos en -a.
      </p>

      <SectionTitle color={COLOR}>🏋️ En el gimnasio</SectionTitle>
      {VOCAB.map(([it, es]) => (
        <div key={it} style={card}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <p style={text}>
        <span lang="it">Andare in palestra</span> es la frase de esta lección. <span lang="it">Andare alla palestra</span> también se usa: <span lang="it">alla</span> une a + la.
      </p>

      <SectionTitle color={COLOR}>🌀 Lo que ocurre ahora</SectionTitle>
      <p style={text}>
        <span lang="it">Stare</span> más el gerundio dice la acción en curso. <span lang="it">Fare</span> hace <span lang="it">facendo</span>.
      </p>
      {ONGOING.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico1" topicId="stareGerundio" />

      <SectionTitle color={COLOR}>💪 Saber y lograr</SectionTitle>
      {ABILITY.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico4" topicId="potereSapere" />
    </div>
  );
}
