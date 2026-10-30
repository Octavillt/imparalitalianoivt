import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { BODY_GROUPS, DESCRIBE, MOVEMENT, PAIN, WASH } from "./data";
import BodyPartIcon from "./BodyPartIcon";

const COLOR = "#14B8A6";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px" };

function lemma(word) {
  return word.replace(/^(l'|gli |le |lo |la |il |i )/, "");
}

export default function BodyPartsSection() {
  return (
    <div>
      <TopicHeading topicId="bodyParts" />
      <div style={{ ...card, color: "#94a3b8", fontSize: "14px", lineHeight: 1.8, marginBottom: "8px" }}>
        Cada tarjeta trae el nombre con artículo, la traducción y el plural. La zona resaltada en turquesa señala la parte. Con el cuerpo, el verbo reflexivo lleva artículo y no posesivo: <span lang="it">mi lavo le mani</span>.
      </div>

      {BODY_GROUPS.map(group => (
        <section key={group.title}>
          <SectionTitle color={COLOR}>{group.icon} {group.title}</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
            {group.words.map(([it, esp, plural]) => (
              <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
                <div style={{ display: "flex", justifyContent: "center", background: "#f3f6ef", borderRadius: "12px", padding: "10px", marginBottom: "12px" }}>
                  <BodyPartIcon part={lemma(it)} />
                </div>
                <div lang="it" style={{ color: "#f8fafc", fontWeight: 800, fontSize: "16px" }}>{it}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{esp}</div>
                <div style={{ color: COLOR, fontSize: "12px", marginTop: "8px" }}>
                  {plural === it
                    ? "Se usa en plural para el cabello en conjunto."
                    : <>Plural: <span lang="it">{plural}</span></>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <SectionTitle color={COLOR}>➕ Plurales que conviene mirar aparte</SectionTitle>
      <RuleBox icon="💡" rule="Un singular masculino puede hacer un plural femenino en -a" color={COLOR}>
        <ul style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.9, paddingLeft: "20px" }}>
          <li><span lang="it">il braccio → le braccia</span></li>
          <li><span lang="it">il dito → le dita</span></li>
          <li><span lang="it">il ginocchio → le ginocchia</span></li>
          <li><span lang="it">il labbro → le labbra</span></li>
          <li><span lang="it">l'osso → le ossa</span></li>
          <li><span lang="it">il sopracciglio → le sopracciglia</span></li>
        </ul>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 }}>
          El adjetivo va con ese plural: <span lang="it">Ho le braccia stanche</span>. Otros dos casos: <span lang="it">l'orecchio → le orecchie</span> (también existe <span lang="it">gli orecchi</span>) y <span lang="it">la mano → le mani</span>.
        </p>
        <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
          <span lang="it">La pelle</span> nombra la piel del cuerpo. <span lang="it">Le pelli</span> es el plural gramatical. <span lang="it">Il dito</span> es el dedo de la mano; el del pie se dice <span lang="it">il dito del piede</span>. <span lang="it">Il pollice</span> es el pulgar.
        </p>
      </RuleBox>
      <RelatedTopic levelId="basico1" topicId="plural" />

      <SectionTitle color={COLOR}>👀 Describir</SectionTitle>
      {DESCRIBE.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico2" topicId="adjectives" />

      <SectionTitle color={COLOR}>🤕 Decir qué duele</SectionTitle>
      <RuleBox icon="🤕" rule="Fa con una parte; fanno con varias" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 }}>
          <span lang="it">Mi fa male la testa</span> porque <span lang="it">la testa</span> es singular. <span lang="it">Mi fanno male le gambe</span> porque <span lang="it">le gambe</span> es plural. <span lang="it">Ho mal di testa</span>, <span lang="it">ho mal di denti</span> y <span lang="it">ho mal di schiena</span> nombran el dolor sin artículo.
        </p>
      </RuleBox>
      {PAIN.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🤲 Lavarse</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        El artículo es el de la parte. No se usa el posesivo.
      </p>
      {WASH.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico3" topicId="routineRiflessivi" />

      <SectionTitle color={COLOR}>🤸 Una instrucción de movimiento</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        Estas cuatro son de tú. Con usted: <span lang="it">Alzi le braccia. Pieghi le ginocchia. Giri la testa. Tocchi i piedi.</span>
      </p>
      {MOVEMENT.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico3" topicId="directions" />
    </div>
  );
}
