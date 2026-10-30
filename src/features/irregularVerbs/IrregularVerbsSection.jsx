import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import ScrollHint from "../../components/ScrollHint";
import SectionTitle from "../../components/SectionTitle";
import Token from "../../components/Token";
import { C } from "../../styles/colors";
import {
  PERSONS,
  IRREGULAR_VERBS,
  USE_SENTENCES,
  PASSATO_SAMPLES,
} from "./data";

const COLOR = "#7C3AED";
const GRID = "1.15fr 0.9fr 0.9fr 1.15fr";

function fold(value) {
  return value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function VerbTable({ rows }) {
  return (
    <>
    <ScrollHint />
    <div style={{ overflowX: "auto", borderRadius: "10px" }}>
      <div style={{ minWidth: "680px" }}>
        <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px" }}>
          {[
            ["Infinitivo", "verb"],
            ["Presente (io)", "presente"],
            ["Participio", "participle"],
            ["Español", "verb"],
          ].map(([title, role]) => (
            <div key={title} style={{
              background: C[role].bg, color: C[role].fg, fontWeight: 800,
              fontSize: "13px", padding: "9px 12px",
            }}>{title}</div>
          ))}
        </div>
        {rows.map((row, index) => (
          <div key={row.inf} style={{ background: index % 2 === 0 ? "transparent" : "#172033", padding: "8px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px", padding: "4px 12px" }}>
              <div>
                <Token t={row.inf} r="verb" />
                <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>
                  {row.present === "irregular" ? "Presente irregular" : "Participio irregular"}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}><Token t={row.io} r="presente" /></div>
              <div style={{ display: "flex", alignItems: "center" }}><Token t={row.part} r="participle" /></div>
              <div style={{ color: "#94a3b8", fontSize: "13px", display: "flex", alignItems: "center" }}>{row.es}</div>
            </div>
            {row.note && <p style={{ color: "#94a3b8", fontSize: "12px", margin: "0 12px 4px" }}>{row.note}</p>}
            <details style={{ margin: "0 12px 6px" }}>
              <summary style={{ color: COLOR, fontWeight: 700, cursor: "pointer", fontSize: "13px" }}>
                {row.present === "irregular" ? "Conjugación del presente" : "Presente regular"}
              </summary>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "6px", marginTop: "8px" }}>
                {PERSONS.map((subj, person) => (
                  <div key={subj} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
                    <div lang="it" style={{ color: C.subject.fg, fontWeight: 800, fontSize: "11px" }}>{subj}</div>
                    {row.present === "regular" ? (
                      <div lang="it" aria-label={row.forms[person]} style={{ fontWeight: 900, fontSize: "16px", marginTop: "2px" }}>
                        <span style={{ color: C.verb.fg }}>{row.stem}</span>
                        <span style={{ color: C.desinenza.fg, background: C.desinenza.bg, borderRadius: "4px", padding: "0 3px" }}>{row.ends[person]}</span>
                      </div>
                    ) : (
                      <div lang="it" style={{ color: C.verb.fg, fontWeight: 900, fontSize: "16px", marginTop: "2px" }}>{row.forms[person]}</div>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default function IrregularVerbsSection() {
  const [filter, setFilter] = useState("");
  const [group, setGroup] = useState("all");
  const q = fold(filter.trim());
  const rows = IRREGULAR_VERBS.filter(row => {
    if (group === "irregular" && row.present !== "irregular") return false;
    if (group === "regular" && row.present !== "regular") return false;
    if (!q) return true;
    const blob = [row.inf, row.io, row.part, row.es, row.note, ...row.forms].join(" ");
    return fold(blob).includes(q);
  });

  return (
    <div>
      <TopicHeading topicId="irregularVerbs" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Hay verbos que <strong style={{ color: "#f8fafc" }}>cambian en el presente</strong> y otros cuyo presente sigue el modelo, pero el <strong style={{ color: "#f8fafc" }}>participio</strong> no. <span lang="it">Voi</span> equivale a ustedes; <span lang="it">loro</span>, a ellos o ellas.
      </div>
      <Legend roles={["verb", "presente", "participle", "desinenza", "subject"]} />

      <RuleBox icon="✒️" rule="Dà lleva acento; sta, fa y va, no" color={COLOR}>
        <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.7, marginTop: "6px" }}>
          <span lang="it">Dà</span> (él o ella da) lleva acento grave para no confundirse con la preposición <span lang="it">da</span>. <span lang="it">Sta, fa</span> y <span lang="it">va</span> se escriben sin acento.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>💬 En frases</SectionTitle>
      {USE_SENTENCES.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}
      <RelatedTopic levelId="basico1" topicId="essereAvere" />
      <RelatedTopic levelId="basico2" topicId="presenteIndicativo" />

      <SectionTitle color={COLOR}>📋 Infinitivo, presente y participio</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
        {[
          ["all", "Todos"],
          ["irregular", "Presente irregular"],
          ["regular", "Participio irregular"],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={group === id}
            onClick={() => setGroup(id)}
            style={{
              border: "none", borderRadius: "20px", padding: "6px 12px", cursor: "pointer",
              fontWeight: 700, fontSize: "12px",
              background: group === id ? `${COLOR}33` : "var(--surface, #1e293b)",
              color: "#fff", boxShadow: group === id ? `inset 0 0 0 2px ${COLOR}` : "none",
            }}
          >{label}</button>
        ))}
      </div>
      <FilterableList
        label="Buscar verbo irregular"
        placeholder="🔍 Busca: andare, vado, andato, ir…"
        value={filter}
        onChange={setFilter}
      >
        {rows.length === 0 ? (
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>No hay coincidencias para «{filter.trim()}».</p>
        ) : (
          <VerbTable rows={rows} />
        )}
      </FilterableList>

      <details className="lesson-extension">
        <summary>Ampliación: el participio en el passato prossimo</summary>
        <p>
          El participio se usa en el passato prossimo, que se ve en Básico V. Aquí solo hay una muestra.
          Con <span lang="it">sono</span>, en masculino se dice <span lang="it">Sono andato</span> y en femenino <span lang="it">Sono andata</span>.
          En estas frases, <span lang="it">Ho mangiato</span> y <span lang="it">Ho fatto</span> quedan así. El auxiliar y la concordancia se estudian en Básico V.
        </p>
        {PASSATO_SAMPLES.map(ex => <ExampleCard key={ex.esp} pts={ex.pts} esp={ex.esp} />)}
      </details>
    </div>
  );
}
