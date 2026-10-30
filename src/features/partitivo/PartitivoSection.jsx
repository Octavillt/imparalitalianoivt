import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  AGREEMENT,
  LITTLE,
  NEGATIVE,
  NE_EXAMPLES,
  NOUN_GROUPS,
  PARTITIVES,
  QUESTIONS,
  SOME,
  UNITS,
} from "./data";

const COLOR = "#F59E0B";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

function phraseKey(item) {
  return item.pts.map(part => typeof part === "string" ? part : part.t).join("");
}

export default function PartitivoSection() {
  return (
    <div>
      <TopicHeading topicId="partitivo" />
      <p style={{ ...card, ...text }}>
        💡 El <strong style={{ color: "#f8fafc" }}>partitivo</strong> es <span lang="it">di</span> + artículo. Significa «un poco de» o «unos»: <span lang="it">del pane, delle mele</span>.
      </p>
      <Legend roles={["articolata", "verb", "wh", "neg", "adj", "prep"]} />

      <SectionTitle color={COLOR}>🧺 Contables e incontables</SectionTitle>
      {NOUN_GROUPS.map(group => (
        <RuleBox key={group.title} icon="📖" rule={group.title} color={COLOR}>
          <p style={text}>{group.rule}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "8px" }}>
            {group.items.map(([it, es]) => (
              <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px" }}>
                <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
                <div style={translation}>🇲🇽 {es}</div>
              </div>
            ))}
          </div>
        </RuleBox>
      ))}
      <p style={text}>
        <span lang="it">L'uovo</span> es masculino; el plural <span lang="it">le uova</span> es femenino y termina en -a. El detalle está en Grupos de alimentos.
      </p>
      <RelatedTopic levelId="basico1" topicId="fruits" />
      <RelatedTopic levelId="basico2" topicId="articles" />

      <SectionTitle color={COLOR}>🍞 El partitivo</SectionTitle>
      <RuleBox icon="🔑" rule="Di se pega al artículo" color={COLOR}>
        <Formula
          parts={[{ t: "di", r: "prep" }, { t: "artículo", r: "art" }]}
          example={[{ t: "del", r: "articolata" }, { t: "pane", color: "#94a3b8" }]}
          color={COLOR}
        />
        <p style={text}>Sirve para una cantidad no contada o para unos cuantos, sin decir el número.</p>
      </RuleBox>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginBottom: "12px" }}>
        <div style={{ minWidth: "640px", display: "grid", gridTemplateColumns: "0.6fr 0.8fr 1.4fr 1.4fr", gap: "4px" }}>
          {["Artículo", "Forma", "Ejemplo", "En español"].map(label => (
            <div key={label} style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 800, letterSpacing: "0.4px" }}>{label}</div>
          ))}
          {PARTITIVES.map(([article, form, example, es]) => (
            <div key={example} style={{ display: "contents" }}>
              <div lang="it" style={{ color: C.art.fg, fontWeight: 800, padding: "8px 4px" }}>{article}</div>
              <div lang="it" style={{ color: C.articolata.fg, fontWeight: 800, padding: "8px 4px" }}>{form}</div>
              <div lang="it" style={{ color: "#f8fafc", fontWeight: 700, padding: "8px 4px" }}>{example}</div>
              <div style={{ color: "#94a3b8", padding: "8px 4px" }}>{es}</div>
            </div>
          ))}
        </div>
      </div>
      <RelatedTopic levelId="basico2" topicId="preposizioniArticolate" />

      <SectionTitle color={COLOR}>🥄 Un po', alcuni y qualche</SectionTitle>
      <RuleBox icon="🥄" rule="Un po' di, con apóstrofo y sin acento" color={COLOR}>
        <p style={text}>
          <span lang="it">Un po' di pane</span>. Ante vocal, <span lang="it">di</span> puede escribirse <span lang="it">d'</span>: <span lang="it">un po' d'acqua</span>.
        </p>
      </RuleBox>
      {LITTLE.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}
      <RuleBox icon="🍎" rule="Alcuni y alcune van en plural; qualche, en singular" color={COLOR}>
        <p style={text}>
          <span lang="it">Alcuni</span> con masculino plural: <span lang="it">alcuni pomodori</span>. <span lang="it">Alcune</span> con femenino plural: <span lang="it">alcune mele</span>. <span lang="it">Qualche</span> va con singular aunque la idea sea de varios: <span lang="it">qualche mela, qualche pomodoro</span>.
        </p>
      </RuleBox>
      {SOME.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⚖️ Concordancia</SectionTitle>
      <RuleBox icon="⚖️" rule="Molto, poco, tanto y troppo concuerdan con el sustantivo" color={COLOR}>
        <p style={text}>
          Cuando acompañan a un sustantivo: <span lang="it">molta acqua, pochi pomodori, tante mele, troppo zucchero</span>. <span lang="it">Abbastanza</span> no cambia: <span lang="it">abbastanza pane, abbastanza mele</span>.
        </p>
      </RuleBox>
      {AGREEMENT.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>❓ Preguntar la cantidad</SectionTitle>
      <p style={text}>
        <span lang="it">Quanta</span> con femenino singular, <span lang="it">quanti</span> con masculino plural, <span lang="it">quante</span> con femenino plural. <span lang="it">Quanto costa?</span> pregunta el precio.
      </p>
      {QUESTIONS.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>📏 Medidas</SectionTitle>
      <p style={text}>Tras la medida va <span lang="it">di</span> sin artículo: <span lang="it">un chilo di pomodori</span>. Ante vocal, <span lang="it">di</span> puede escribirse <span lang="it">d'</span>: <span lang="it">una bottiglia d'acqua</span>.</p>
      {UNITS.map(([it, es]) => (
        <div key={it} style={card}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <p style={text}><span lang="it">Un etto</span> son cien gramos. <span lang="it">Mezzo chilo</span> concuerda con <span lang="it">chilo</span>, que es masculino.</p>

      <SectionTitle color={COLOR}>🚫 En negativo</SectionTitle>
      <RuleBox icon="🚫" rule="En estas frases no va el partitivo" color={COLOR}>
        <p style={text}>
          <span lang="it">Non ho pane</span> es «no tengo pan». También se oye <span lang="it">Non ho del pane</span>. <span lang="it">Non ho il pane</span> señala un pan concreto, no una cantidad en general.
        </p>
      </RuleBox>
      {NEGATIVE.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}

      <details className="lesson-extension">
        <summary>Ampliación: ne sustituye lo ya mencionado</summary>
        <p>
          <span lang="it">Ne</span> tiene otros usos. Aquí sustituye el alimento que ya se dijo, y la cantidad se queda en la respuesta.
        </p>
        {NE_EXAMPLES.map(item => <ExampleCard key={phraseKey(item)} pts={item.pts} esp={item.esp} />)}
      </details>
    </div>
  );
}
