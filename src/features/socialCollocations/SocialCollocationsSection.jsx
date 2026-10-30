import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  SOCIAL_LIFE,
  COLLOCATION_GROUPS,
  DIFFERENCES,
  TARDI,
  SOCIAL_NOTES,
  MODELS,
  STORY,
} from "./data";

const COLOR = "#FBBF24";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

function Pair({ it, es }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
      <div style={translation}>🇲🇽 {es}</div>
    </div>
  );
}

export default function SocialCollocationsSection() {
  return (
    <div>
      <TopicHeading topicId="socialCollocations" />
      <div style={{ ...card, ...text }}>
        💡 Una <strong>colocación</strong> es una combinación fija. Se aprende entera:
        el verbo italiano puede no ser el que armarías palabra por palabra.
      </div>
      <Legend roles={["subject", "aux", "participle", "verb", "essere", "art", "articolata"]} />

      <SectionTitle color={COLOR}>🎉 Vida social</SectionTitle>
      <p style={text}>Estos verbos arman el plan: salir, verse, invitar, platicar, festejar.</p>
      {SOCIAL_LIFE.map(([it, es]) => (
        <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="it" style={{ ...text, fontWeight: 700 }}>{it}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="👥" rule="No nombran la misma acción" color={COLOR}>
        <p style={text}>
          <span lang="it">Conoscere</span> es conocer a alguien. <span lang="it">Incontrare</span> es encontrarse con alguien.
          <span lang="it"> Vedersi</span> es verse. <span lang="it">Incontrarsi</span> es encontrarse las personas.
        </p>
        {SOCIAL_NOTES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      </RuleBox>

      <SectionTitle color={COLOR}>🔑 Colocaciones con fare, prendere, dare y avere</SectionTitle>
      <p style={text}>Agrupa cada combinación con su verbo y apréndela como una sola pieza.</p>
      <RuleBox icon="⚠️" rule="Estas no salen palabra por palabra" color={COLOR}>
        {DIFFERENCES.map(([it, es]) => <Pair key={it} it={it} es={es} />)}
        <p style={text}>
          <span lang="it">Fare tardi</span> cambia con la frase. En el trabajo es llegar tarde. De noche, es desvelarse.
        </p>
        {TARDI.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}
      </RuleBox>
      {COLLOCATION_GROUPS.map(group => (
        <RuleBox key={group.verb} icon="🧩" rule={`Colocaciones con ${group.verb}`} color={COLOR}>
          {group.items.map(([it, es]) => <Pair key={it} it={it} es={es} />)}
          {group.verb === "fare" && (
            <p style={text}>
              <span lang="it">Dare una festa</span> también significa hacer una fiesta.
            </p>
          )}
          {group.verb === "avere" && (
            <p style={text}>
              <span lang="it">Prendere un appuntamento</span> es sacar la cita.
              <span lang="it"> Avere un appuntamento</span> es ya tenerla.
            </p>
          )}
        </RuleBox>
      ))}

      <SectionTitle color={COLOR}>⏪⏩ Se conjugan</SectionTitle>
      <RuleBox icon="🔗" rule="Cambia el verbo; la colocación se queda" color={COLOR}>
        <p style={text}>
          En passato prossimo, <span lang="it">fare</span>, <span lang="it">prendere</span> y <span lang="it">dare</span> van con <span lang="it">avere</span>:
          <span lang="it"> ho fatto</span>, <span lang="it">ho preso</span>, <span lang="it">ho dato</span>.
          <span lang="it"> Divertirsi</span> y <span lang="it">perdersi</span> van con <span lang="it">essere</span>, y el participio concuerda.
          <span lang="it"> Usciremo</span> es nosotros. <span lang="it">Uscirete</span> es ustedes.
          <span lang="it"> Sabato</span>, sin artículo, es ese sábado. <span lang="it">Il sabato</span> es los sábados.
        </p>
        <RelatedTopic levelId="basico5" topicId="passatoProssimo" label="Repasar el passato prossimo" />
        <RelatedTopic levelId="basico5" topicId="futuro" label="Repasar el futuro semplice" />
      </RuleBox>
      <p style={text}>
        En <span lang="it">Mi sono persa</span> habla una mujer: el participio va en femenino.
        <span lang="it"> Usciremo</span> y <span lang="it">prenderemo</span> son nosotros.
      </p>
      {MODELS.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>💬 Un fin de semana en Florencia</SectionTitle>
      <p style={text}>
        Octavio cuenta el fin de semana en passato prossimo. Al final habla en primera persona: el plan ya va en futuro.
        En el grupo hay un hombre, así que <span lang="it">divertiti</span> y <span lang="it">incontrati</span> van en masculino plural.
      </p>
      {STORY.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Cuenta un sábado con dos colocaciones en passato prossimo y un plan en futuro.
        Si el verbo va con essere, concuerda el participio. Usa el Quiz para repasar las combinaciones.
      </p>
    </div>
  );
}
