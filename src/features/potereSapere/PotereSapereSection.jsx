import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { C } from "../../styles/colors";
import {
  ACTIVITIES,
  CONJUGATIONS,
  CONTRASTS,
  PERSONS,
  POTERE_EXAMPLES,
  QA,
  RIUSCIRE_EXAMPLES,
  SAPERE_EXAMPLES,
} from "./data";

const COLOR = "#38BDF8";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };

function ConjugationTable() {
  return (
    <>
      <ScrollHint />
      <div style={{ overflowX: "auto", marginTop: "8px" }}>
        <div style={{ minWidth: "760px", display: "grid", gridTemplateColumns: "1.25fr repeat(6, 1fr)", gap: "4px" }}>
          <div />
          {PERSONS.map(person => (
            <div key={person.it} style={{ textAlign: "center", padding: "6px 2px" }}>
              <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{person.it}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{person.es}</div>
            </div>
          ))}
          {CONJUGATIONS.map(row => (
            <Fragment key={row.verb}>
              <div style={{ padding: "8px 4px" }}>
                <div lang="it" style={{ color: COLOR, fontWeight: 800 }}>{row.verb}</div>
                <div style={{ color: "#94a3b8", fontSize: "11px" }}>{row.es}</div>
              </div>
              {row.forms.map((form, index) => (
                <div key={PERSONS[index].it} style={{ textAlign: "center", padding: "8px 2px" }}>
                  <div lang="it" style={{ color: C.verb.fg, fontWeight: 800, fontSize: "14px" }}>{form.it}</div>
                  <div style={{ color: "#94a3b8", fontSize: "11px" }}>{form.es}</div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

function QaCard({ q, a, esp }) {
  return (
    <div style={card}>
      <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
      <div lang="it" style={text}>→ {a}</div>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>🇲🇽 {esp}</div>
    </div>
  );
}

export default function PotereSapereSection() {
  return (
    <div>
      <TopicHeading topicId="potereSapere" />
      <div style={{ ...card, ...text }}>
        💡 En español, «poder» y «saber» a veces se cruzan. En italiano se separan: <span lang="it">sapere</span> es una habilidad aprendida, <span lang="it">potere</span> es permiso o posibilidad en ese momento, y <span lang="it">riuscire a</span> es lograr algo.
        <strong lang="it" style={{ color: "#f8fafc" }}> Voi</strong> equivale a ustedes; <strong lang="it" style={{ color: "#f8fafc" }}>loro</strong>, a ellos o ellas.
      </div>
      <Legend roles={["subject", "verb", "inf", "neg", "prep", "art", "essere"]} />

      <SectionTitle color={COLOR}>📋 Presente</SectionTitle>
      <p style={text}>
        <span lang="it">So</span> no lleva acento. <span lang="it">Può</span> sí lleva acento grave. En <span lang="it">riuscire</span>, yo, tú, él y ellos usan <span lang="it">riesc-</span>; nosotros y ustedes, <span lang="it">riusc-</span>.
      </p>
      <ConjugationTable />
      <RelatedTopic levelId="basico2" topicId="verbiInfinito" />

      <SectionTitle color={COLOR}>🎓 Sapere + infinitivo</SectionTitle>
      <RuleBox icon="🎓" rule="Habilidad aprendida" color={COLOR}>
        <Formula
          parts={[{ t: "sapere", r: "verb" }, { t: "infinitivo", r: "inf" }]}
          example={[{ t: "So", r: "verb" }, { t: "nuotare.", r: "inf" }]}
          color={COLOR}
        />
        <p style={text}>Se usa para algo que la persona aprendió o sabe hacer: nadar, cocinar, manejar, bailar.</p>
      </RuleBox>
      {SAPERE_EXAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🚪 Potere + infinitivo</SectionTitle>
      <RuleBox icon="🚪" rule="Permiso o posibilidad en ese momento" color={COLOR}>
        <Formula
          parts={[{ t: "potere", r: "verb" }, { t: "infinitivo", r: "inf" }]}
          example={[{ t: "Posso", r: "verb" }, { t: "entrare?", r: "inf" }]}
          color={COLOR}
        />
        <p style={text}>No dice si la persona sabe. Dice si ahora puede, si se le permite o si las circunstancias se lo permiten.</p>
      </RuleBox>
      {POTERE_EXAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🎯 Riuscire a + infinitivo</SectionTitle>
      <RuleBox icon="🎯" rule="Lograr algo en ese momento" color={COLOR}>
        <Formula
          parts={[{ t: "riuscire", r: "verb" }, { t: "a", r: "prep" }, { t: "infinitivo", r: "inf" }]}
          example={[{ t: "Non", r: "neg" }, { t: "riesco", r: "verb" }, { t: "a", r: "prep" }, { t: "dormire.", r: "inf" }]}
          color={COLOR}
        />
        <p style={text}>
          Ante vocal, <span lang="it">a</span> puede volverse <span lang="it">ad</span>: <span lang="it">Non riesco ad aprire la porta</span>.
        </p>
      </RuleBox>
      {RIUSCIRE_EXAMPLES.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⚖️ El contraste</SectionTitle>
      <p style={text}>Saber hacer algo no significa poder hacerlo hoy, ni lograrlo en este lugar.</p>
      {CONTRASTS.map(item => <ExampleCard key={item.esp} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>🏊 Actividades</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
        {ACTIVITIES.map(([it, es, sample]) => (
          <div key={it} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
            <div lang="it" style={{ color: "#f8fafc", fontWeight: 800 }}>{it}</div>
            <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>{es}</div>
            <div lang="it" style={{ color: COLOR, fontSize: "13px", marginTop: "8px" }}>{sample}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas cortas</SectionTitle>
      <p style={text}>La respuesta puede repetir el infinitivo. <span lang="it">Sì</span> lleva acento. En la negativa van <span lang="it">no</span> y <span lang="it">non</span>.</p>
      {QA.map(item => <QaCard key={item.esp} q={item.q} a={item.a} esp={item.esp} />)}
    </div>
  );
}
