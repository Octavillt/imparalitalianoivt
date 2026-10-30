import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Sentence from "../../components/Sentence";
import {
  MONEY_OPPOSITES,
  MONEY_WORDS,
  MONEY_PHRASES,
  VERB_EXAMPLES,
  CAREER,
  CAREER_NOW,
  FUTURE_PLANS,
} from "./data";

const COLOR = "#10B981";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };
const side = { flex: "1 1 120px", textAlign: "center", minWidth: 0 };

function OppositePair({ pair }) {
  return (
    <div style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "6px 10px" }}>
        <div style={side}>
          <div lang="it" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{pair.a[0]}</div>
          <div style={translation}>🇲🇽 {pair.a[1]}</div>
        </div>
        <div aria-hidden="true" style={{ color: COLOR, fontSize: "18px", fontWeight: 800 }}>↔</div>
        <div style={side}>
          <div lang="it" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{pair.b[0]}</div>
          <div style={translation}>🇲🇽 {pair.b[1]}</div>
        </div>
      </div>
      <div lang="it" style={{ marginTop: "10px" }}><Sentence pts={pair.example.pts} /></div>
      <div style={translation}>🇲🇽 {pair.example.esp}</div>
    </div>
  );
}

export default function MoneyCareerSection() {
  return (
    <div>
      <TopicHeading topicId="moneyCareer" />
      <div style={{ ...card, ...text }}>
        💡 Con este vocabulario hablas de precios, de pagos y de tu trabajo.
        Los opuestos se aprenden en pareja. Los planes van en futuro semplice.
      </div>
      <Legend roles={["subject", "verb", "essere", "adj", "art", "articolata", "aux", "participle", "neg", "wh"]} />

      <SectionTitle color={COLOR}>💵 El dinero en pares de opuestos</SectionTitle>
      <p style={text}>Cada palabra va con su pareja. El adjetivo concuerda con la persona o con la cosa.</p>
      {MONEY_OPPOSITES.map(pair => <OppositePair key={pair.a[0]} pair={pair} />)}
      <RuleBox icon="🔁" rule="Ganar dinero no es ganar un premio" color={COLOR}>
        <p style={text}>
          <span lang="it">Guadagnare</span> es ganar dinero. <span lang="it">Vincere</span> es ganar un premio o un partido.
          En esta lección, <span lang="it">perdere</span> es la pareja de <span lang="it">guadagnare</span>.
          <span lang="it"> Spendere</span> hace el participio <span lang="it">speso</span>. <span lang="it">Perdere</span> hace <span lang="it">perso</span>; <span lang="it">perduto</span> también existe.
        </p>
        <RelatedTopic levelId="basico5" topicId="passatoProssimo" label="Repasar el participio" />
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y opuestos" />
      </RuleBox>

      <SectionTitle color={COLOR}>➕ Más palabras para hablar de dinero</SectionTitle>
      {MONEY_WORDS.map(([it, es]) => (
        <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="💶" rule="Euro se queda igual, y la cuenta cambia de frase" color={COLOR}>
        <p style={text}>
          En estas frases el plural sigue siendo <span lang="it">euro</span>: <span lang="it">un euro</span>, <span lang="it">venti euro</span>.
          <span lang="it"> I soldi</span> es el plural de conversación. <span lang="it">Il denaro</span> suena más formal y va en singular.
          <span lang="it"> Il conto</span>, en un restaurante, es la cuenta de la mesa. <span lang="it">Il conto in banca</span> es la cuenta del banco.
          <span lang="it"> I risparmi</span>, en plural, son los ahorros.
        </p>
      </RuleBox>
      {MONEY_PHRASES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🛒 <span lang="it">Pagare, costare, prestare, cambiare</span></SectionTitle>
      <p style={text}>
        <span lang="it">Prestare</span> es quien da el dinero. <span lang="it">Prendere in prestito</span> es quien lo pide.
        <span lang="it"> Cambiare</span>, aquí, es cambiar euros. Más abajo, <span lang="it">cambiare lavoro</span> es cambiar de trabajo: no es la misma idea.
      </p>
      {VERB_EXAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>💼 Planes de carrera</SectionTitle>
      <p style={text}>Estas piezas dicen cómo buscas trabajo y cómo quieres trabajar.</p>
      {CAREER.map(([emoji, it, es]) => (
        <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{emoji} {it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="⚠️" rule="Desde casa, por su cuenta y el colega" color={COLOR}>
        <p style={text}>
          Trabajar desde casa se dice <span lang="it">lavorare da casa</span>. <span lang="it">Lavorare a casa</span> también se oye, con la idea de estar en casa.
          <span lang="it"> Lavorare in proprio</span> es trabajar por su cuenta.
          <span lang="it"> Il collega</span> y <span lang="it">la collega</span> comparten la palabra; cambia el artículo.
          En plural: <span lang="it">i colleghi</span>, <span lang="it">le colleghe</span>.
          <span lang="it"> Il capo</span> nombra al jefe o a la jefa.
        </p>
        <RelatedTopic levelId="basico1" topicId="jobs" label="Repasar oficios y profesiones" />
      </RuleBox>
      {CAREER_NOW.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🗓️ Planes en futuro</SectionTitle>
      <RuleBox icon="🔗" rule="Probabilmente y forse" color={COLOR}>
        <p style={text}>
          <span lang="it">Probabilmente</span> es probablemente. <span lang="it">Forse</span> es quizá.
          En estas frases van antes del futuro. <span lang="it">Forse</span> es menos firme que <span lang="it">probabilmente</span>.
        </p>
        <RelatedTopic levelId="basico5" topicId="futuro" label="Repasar el futuro semplice" />
        <RelatedTopic levelId="basico5" topicId="socialCollocations" label="Repasar las colocaciones" />
      </RuleBox>
      {FUTURE_PLANS.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Escribe un precio en euros, cómo pagas y un plan de trabajo con <span lang="it">probabilmente</span> o con <span lang="it">forse</span>.
        Usa el Quiz para repasar opuestos, euro y el futuro.
      </p>
    </div>
  );
}
