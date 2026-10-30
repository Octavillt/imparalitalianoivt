import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  CONVERSATION,
  EXTRA_WORDS,
  FOOD_ADJECTIVES,
  FOOD_GROUPS,
  RESTAURANT,
  TASTES,
} from "./data";

const COLOR = "#22C55E";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function FoodGroupsSection() {
  return (
    <div>
      <TopicHeading topicId="foodGroups" />
      <p style={{ ...card, ...text }}>
        🍽️ Estos grupos sirven para hablar de lo que comes, de cómo sabe y de lo que pides. Leslie cena en Roma con un mesero.
      </p>
      <Legend roles={["verb", "art", "adj", "neg", "essere", "subject", "prep", "articolata"]} />

      <SectionTitle color={COLOR}>🛒 Los grupos</SectionTitle>
      <p style={text}>Un alimento puede mirarse desde otro nutriente. Aquí cada uno está en el grupo de la lista.</p>
      {FOOD_GROUPS.map(group => (
        <RuleBox key={group.name} icon={group.icon} rule={`${group.name} — ${group.translation}`} color={COLOR}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px", margin: "12px 0" }}>
            {group.foods.map(([it, es]) => (
              <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px" }}>
                <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
                <div style={translation}>🇲🇽 {es}</div>
              </div>
            ))}
          </div>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{group.example}</div>
          <div style={translation}>🇲🇽 {group.meaning}</div>
        </RuleBox>
      ))}
      <RelatedTopic levelId="basico1" topicId="fruits" />

      <SectionTitle color={COLOR}>🥚 L'uovo, le uova</SectionTitle>
      <RuleBox icon="🥚" rule="Un singular masculino con plural femenino en -a" color={COLOR}>
        <p style={text}>
          <span lang="it">L'uovo</span> es masculino. <span lang="it">Le uova</span> es femenino plural, como <span lang="it">le braccia</span>. El adjetivo lo sigue: <span lang="it">le uova fresche</span>. <span lang="it">Un frutto</span> es una pieza; <span lang="it">la frutta</span> es el grupo.
        </p>
        <RelatedTopic levelId="basico1" topicId="plural" />
        <RelatedTopic levelId="basico4" topicId="bodyParts" />
      </RuleBox>

      <SectionTitle color={COLOR}>😋 Sabores y estados</SectionTitle>
      {FOOD_ADJECTIVES.map(([it, es, example, meaning]) => (
        <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, fontWeight: 700 }}><span lang="it">{it}</span> — {es}</div>
          <div lang="it" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {meaning}</div>
        </div>
      ))}
      <RuleBox icon="🎨" rule="El adjetivo concuerda con la comida" color={COLOR}>
        <p style={text}>
          Si termina en <span lang="it">-o</span>, cambia: <span lang="it">il limone è aspro</span>, <span lang="it">una mela è aspra</span>, <span lang="it">l'acqua è fredda</span>, <span lang="it">la pizza è salata</span>. Si termina en <span lang="it">-e</span>, en singular no cambia: <span lang="it">dolce, piccante</span>. En plural: <span lang="it">dolci, piccanti</span>.
        </p>
        <p style={text}>
          <span lang="it">Caldo</span> habla de temperatura: caliente. <span lang="it">Il prosciutto crudo</span> es jamón curado; en ese nombre, <span lang="it">crudo</span> no quiere decir que no se coma.
        </p>
        <RelatedTopic levelId="basico2" topicId="adjectives" />
      </RuleBox>

      <SectionTitle color={COLOR}>🥪 Comidas del día y palabras que se confunden</SectionTitle>
      {EXTRA_WORDS.map(([it, es, example, meaning]) => (
        <div key={it} style={card}>
          <div style={{ ...text, fontWeight: 700 }}><span lang="it">{it}</span> — {es}</div>
          <div lang="it" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {meaning}</div>
        </div>
      ))}
      <p style={text}>
        <span lang="it">La salsa</span> significa salsa. <span lang="it">Il burro</span> es la mantequilla, <span lang="it">l'aceto</span> el vinagre y <span lang="it">l'olio</span> el aceite. <span lang="it">Il pesce</span> es el pescado y también el pez. <span lang="it">Il succo</span> es el jugo.
      </p>

      <SectionTitle color={COLOR}>🧺 Cantidades</SectionTitle>
      <RuleBox icon="🔢" rule="El partitivo y la medida siguen en la lección anterior" color={COLOR}>
        <p style={text}>
          <span lang="it">Del pane</span> es un poco de pan. <span lang="it">Un chilo di pomodori</span> lleva <span lang="it">di</span> sin artículo. <span lang="it">Non ho pane</span> va sin partitivo.
        </p>
        <RelatedTopic levelId="basico4" topicId="partitivo" />
      </RuleBox>

      <SectionTitle color={COLOR}>😋 Gustos</SectionTitle>
      <p style={text}>
        <span lang="it">Piace</span> va con un singular; <span lang="it">piacciono</span>, con un plural. El verbo concuerda con la comida, no con la persona.
      </p>
      {TASTES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      <RelatedTopic levelId="basico2" topicId="verbiInfinito" />

      <SectionTitle color={COLOR}>🗣️ En el restaurante, en Roma</SectionTitle>
      <p style={text}>Leslie habla con el mesero. Él le habla de usted. Si pidiera pizza, diría <span lang="it">Per me una pizza</span>.</p>
      {RESTAURANT.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      {CONVERSATION.map(([it, es], index) => (
        <div key={it} style={card}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{index % 2 === 0 ? "Mesero" : "Leslie"}: {it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
    </div>
  );
}
