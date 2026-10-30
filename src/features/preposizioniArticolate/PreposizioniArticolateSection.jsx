import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  DI_POSSESSION,
  DI_FORMS,
  ART_HEADERS,
  PREP_ROWS,
  BUILD_STEPS,
  NO_CONTRACT,
  USE_EXAMPLES,
  NAMES,
  JOIN,
} from "./data";

const COLOR = "#818CF8";

export default function PreposizioniArticolateSection() {
  return (
    <div>
      <TopicHeading topicId="preposizioniArticolate" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 La pertenencia no se marca con un apóstrofo. Se dice con <strong lang="it" style={{ color: "#f8fafc" }}>di</strong>, como «de» en español:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>il libro di Leslie</strong>. Cuando <strong lang="it" style={{ color: "#f8fafc" }}>di</strong> encuentra un artículo, se une a él:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>del professore</strong>.
      </div>
      <Legend roles={["articolata", "prep", "art", "masc", "fem"]} />

      <RuleBox icon="🔑" rule="De quién es: di + nombre" color={COLOR}>
        <Formula
          parts={[{ t: "Cosa", color: "#e2e8f0" }, { t: "di", r: "prep" }, { t: "dueño", color: "#e2e8f0" }]}
          example={[{ t: "Il libro", color: "#94a3b8" }, { t: "di", r: "prep" }, { t: "Leslie.", color: "#94a3b8" }]}
          color={COLOR}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
          {DI_POSSESSION.map((ex, i) => (
            <div key={i} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px" }}>
              {"q" in ex ? (
                <>
                  <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.q} /></div>
                  <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }} lang="it">→ {ex.a}</div>
                </>
              ) : (
                <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              )}
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {ex.esp}</div>
            </div>
          ))}
        </div>
        <RelatedTopic levelId="basico2" topicId="possessiveAdjectives" />
      </RuleBox>

      <RuleBox icon="🔗" rule="Di + artículo se contrae" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {DI_FORMS.map(item => (
            <div key={item.form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "18px" }}>{item.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{item.sum}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginTop: "4px" }}>{item.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {item.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "10px" }}>
          💡 <strong lang="it" style={{ color: "#e2e8f0" }}>dei, degli, delle</strong> aquí significan «de los / de las». El uso de «unos / unas» llega en Básico IV.
        </p>
        <RelatedTopic levelId="basico2" topicId="articles" />
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Tabla completa</SectionTitle>
      <div style={{ overflowX: "auto", marginBottom: "16px" }}>
        <div style={{ minWidth: "640px", display: "grid", gridTemplateColumns: "0.7fr repeat(7, 1fr)", gap: "4px" }}>
          <div style={{ background: "var(--surface-deep, #0f172a)", color: "#94a3b8", fontWeight: 800, fontSize: "12px", padding: "8px" }} />
          {ART_HEADERS.map(header => (
            <div key={header} lang="it" style={{ background: "var(--surface-deep, #0f172a)", color: "#a3e635", fontWeight: 800, fontSize: "12px", padding: "8px", textAlign: "center" }}>{header}</div>
          ))}
          {PREP_ROWS.map(row => (
            <PrepRow key={row.prep} row={row} />
          ))}
        </div>
      </div>

      <RuleBox icon="🧩" rule="Cómo se forma: la preposición se une al artículo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Di</span> cambia a <span lang="it">de-</span> e <span lang="it">in</span> cambia a <span lang="it">ne-</span>: <span lang="it">del</span>, <span lang="it">nel</span>. Si el artículo empieza con <strong style={{ color: "#f8fafc" }}>l</strong>, esa l se escribe dos veces; si no, solo se pegan.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px", marginTop: "8px" }}>
          {BUILD_STEPS.map(step => (
            <div key={step.result} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{step.sum} = <span style={{ color: COLOR }}>{step.result}</span></div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>{step.why}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🚫" rule="Con, per, tra y fra no se contraen" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Estas cuatro se quedan separadas del artículo: <strong lang="it" style={{ color: "#f8fafc" }}>con il professore</strong>,{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>per la mamma</strong>. <strong lang="it" style={{ color: "#f8fafc" }}>fra</strong> funciona igual que{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>tra</strong>. En italiano hablado aún se oye <strong lang="it" style={{ color: "#f8fafc" }}>col</strong> (<span lang="it">con + il</span>), pero <strong lang="it" style={{ color: "#f8fafc" }}>con il</strong> siempre es correcto.
        </p>
        {NO_CONTRACT.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
      </RuleBox>

      <SectionTitle color={COLOR}>📍 En frases</SectionTitle>
      {USE_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        💡 <strong lang="it" style={{ color: "#f8fafc" }}>Vado dal dottore</strong> usa <strong lang="it" style={{ color: "#f8fafc" }}>da</strong>: vas al lugar de esa persona.{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>Vado al bar</strong> usa <strong lang="it" style={{ color: "#f8fafc" }}>a</strong>.
      </p>
      <RelatedTopic levelId="basico1" topicId="prepositions" />
      <RelatedTopic levelId="basico1" topicId="countries" />

      <RuleBox icon="🙋" rule="Nombres de persona, sin artículo" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          Sin artículo no hay nada que contraer: <strong lang="it" style={{ color: "#f8fafc" }}>di Leslie</strong>,{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>a Octavio</strong>. No se dice «della Leslie» ni «allo Octavio».
        </p>
        {NAMES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
      </RuleBox>

      <SectionTitle color={COLOR}>✅ De dos datos a una frase</SectionTitle>
      {JOIN.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{ex.from}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
    </div>
  );
}

// Una fila de la tabla: la preposición y sus siete formas contraídas.
function PrepRow({ row }) {
  return (
    <>
      <div lang="it" style={{ padding: "8px", background: "#1e293b", color: "#fb923c", fontWeight: 800, fontSize: "13px" }}>{row.prep}</div>
      {row.forms.map(form => (
        <div key={form} lang="it" style={{ padding: "8px", background: "#1e293b", color: COLOR, fontWeight: 800, fontSize: "13px", textAlign: "center" }}>{form}</div>
      ))}
    </>
  );
}
