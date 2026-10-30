import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import Token from "../../components/Token";
import { C } from "../../styles/colors";
import {
  PIACE,
  MODALS,
  PREFERIRE,
  NO_PREP,
  WITH_A,
  WITH_DI,
  DIFFERENCES,
  VERB_PATTERNS,
} from "./data";

const COLOR = "#F472B6";
const GRID = "1.2fr 0.7fr 1.3fr";

function FormGrid({ forms }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "6px", margin: "8px 0 14px" }}>
      {forms.map(row => (
        <div key={row.subj} style={{ background: "var(--surface, #1e293b)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
          <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "12px" }}>{row.subj}</div>
          <div lang="it" style={{ color: C.verb.fg, fontWeight: 900, fontSize: "20px", margin: "4px 0" }}>{row.form}</div>
          <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {row.esp}</div>
        </div>
      ))}
    </div>
  );
}

function Examples({ rows }) {
  return rows.map(ex => (
    <div key={ex.esp} style={{ marginBottom: "8px" }}>
      <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
      <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
    </div>
  ));
}

export default function VerbiInfinitoSection() {
  const [filter, setFilter] = useState("");
  const q = filter.toLowerCase().trim();
  const rows = VERB_PATTERNS.filter(row =>
    row.verb.includes(q) || row.prep.includes(q) || row.es.toLowerCase().includes(q) || row.sample.toLowerCase().includes(q)
  );

  return (
    <div>
      <TopicHeading topicId="verbiInfinito" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un verbo puede ir seguido de un <strong style={{ color: "#f8fafc" }}>infinitivo</strong>. Unos van pegados (<span lang="it">voglio mangiare</span>); otros piden <span lang="it">a</span> o <span lang="it">di</span>.
      </div>
      <Legend roles={["verb", "inf", "prep", "articolata", "subject"]} />

      <RuleBox icon="💛" rule="Mi piace + infinitivo, o el sustantivo que gusta" color={COLOR}>
        <Formula
          parts={[{ t: "Mi piace", r: "verb" }, { t: "infinitivo", r: "inf" }]}
          example={[{ t: "Mi piace", r: "verb" }, { t: "leggere.", r: "inf" }]}
          color={COLOR}
        />
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "8px" }}>
          El verbo concuerda con lo que gusta, no con la persona. Infinitivo o sustantivo singular: <span lang="it">piace</span>. Sustantivo plural: <span lang="it">piacciono</span>. En estos ejemplos la persona va en <span lang="it">mi</span>, <span lang="it">ti</span> o en <span lang="it">a</span> + nombre.
        </p>
        <Examples rows={PIACE} />
      </RuleBox>

      <SectionTitle color={COLOR}>🚫 Sin preposición</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Volere, potere, dovere, sapere</span> y <span lang="it">preferire</span> toman el infinitivo directo.
      </p>
      {MODALS.map(modal => (
        <div key={modal.verb}>
          <div style={{ fontWeight: 800, color: COLOR }}>
            <span lang="it">{modal.verb}</span>
            <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: "13px" }}> · {modal.es}</span>
          </div>
          <FormGrid forms={modal.forms} />
        </div>
      ))}
      <RuleBox icon="⭐" rule="Preferire sigue el grupo -isc-" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Preferisco, preferisci, preferisce, preferiscono</span> llevan -isc-. <span lang="it">Preferiamo</span> y <span lang="it">preferite</span>, no.
        </p>
        <FormGrid forms={PREFERIRE} />
        <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />
      </RuleBox>
      <Examples rows={NO_PREP} />
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>
        <span lang="it">So</span>, de <span lang="it">sapere</span>, no lleva acento. <span lang="it">So nuotare</span> es saber nadar. <span lang="it">Può</span> sí lleva acento grave. La diferencia entre <span lang="it">sapere</span> y <span lang="it">potere</span> se ve en Básico IV.
      </p>

      <SectionTitle color={COLOR}>➡️ Con a</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Imparare, cominciare, continuare, aiutare, andare, venire</span> y <span lang="it">riuscire</span> piden <span lang="it">a</span>.
        <span lang="it"> Alle nove</span> es a + le: la hora en plural ya trae artículo.
        <span lang="it"> Vado, vengo</span> y <span lang="it">riesco</span> no siguen el modelo regular.
      </p>
      <RelatedTopic levelId="basico2" topicId="irregularVerbs" />
      <RelatedTopic levelId="basico2" topicId="preposizioniArticolate" />
      <Examples rows={WITH_A} />

      <SectionTitle color={COLOR}>➡️ Con di</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>
        <span lang="it">Finire, smettere, decidere, cercare, dimenticare</span> y <span lang="it">sperare</span> piden <span lang="it">di</span> antes del infinitivo.
      </p>
      <Examples rows={WITH_DI} />

      <RuleBox icon="🇲🇽" rule="Tres diferencias con el español" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Cercare di</span> es intentar. <span lang="it">Cercare</span> + sustantivo es buscar, como ya viste.
          <span lang="it"> Smettere di</span> es dejar de. <span lang="it">Mettere</span>, en cambio, es poner.
          <span lang="it"> Sperare di</span> es esperar + infinitivo: en italiano va <span lang="it">di</span>.
        </p>
        <Examples rows={DIFFERENCES} />
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Verbo, preposición y traducción</SectionTitle>
      <FilterableList
        label="Buscar verbo con infinitivo"
        placeholder="🔍 Busca: volere, di, intentar…"
        value={filter}
        onChange={setFilter}
      >
        {rows.length === 0 ? (
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>No hay coincidencias para «{filter.trim()}».</p>
        ) : (
          <div style={{ overflowX: "auto", borderRadius: "10px" }}>
            <div style={{ minWidth: "560px" }}>
              <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px" }}>
                {["Verbo", "Preposición", "Español"].map((title, index) => (
                  <div key={title} style={{
                    background: index === 1 ? C.prep.bg : C.verb.bg,
                    color: index === 1 ? C.prep.fg : C.verb.fg,
                    fontWeight: 800, fontSize: "13px", padding: "9px 12px",
                  }}>{title}</div>
                ))}
              </div>
              {rows.map((row, index) => (
                <div key={row.verb} style={{
                  display: "grid", gridTemplateColumns: GRID, gap: "8px",
                  padding: "9px 12px", background: index % 2 === 0 ? "transparent" : "#172033",
                }}>
                  <div>
                    <Token t={row.verb} r="verb" />
                    <div lang="it" style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{row.sample}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {row.prep === "sin"
                      ? <span style={{ color: "#94a3b8", fontWeight: 700 }}>sin</span>
                      : <Token t={row.prep} r="prep" />}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "13px", display: "flex", alignItems: "center" }}>{row.es}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </FilterableList>
    </div>
  );
}
