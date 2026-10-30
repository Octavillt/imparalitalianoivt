import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { VERBS, VERB_SENTENCES, FALSE_FRIENDS } from "./data";
import { VERB_BANK } from "../verbFinder/data";

export default function VerbsSection() {
  const [filter, setFilter] = useState("");
  const filtered = VERBS.filter(([it, , es]) =>
    it.toLowerCase().includes(filter.toLowerCase()) ||
    es.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <TopicHeading topicId="verbs" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un <Token t="verbo" r="verb" /> expresa una <strong style={{ color: "#f8fafc" }}>acción o un estado</strong> del{" "}
        <Token t="sujeto" r="subject" />. Los infinitivos italianos terminan en{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>-are</strong>, <strong lang="it" style={{ color: "#f8fafc" }}>-ere</strong> o{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>-ire</strong>. Aquí aprendes a reconocerlos; la conjugación completa se ve en Básico II.
      </div>
      <Legend roles={["subject", "verb"]} />

      <RuleBox icon="📐" rule="Fórmula básica de una oración" color="#7C3AED">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "Leslie", r: "subject" }, { t: "studia", r: "verb" }, { t: "italiano.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "6px" }}>
          💬 El <strong style={{ color: "#fbbf24" }}>sujeto</strong> es quien hace la acción. El <strong style={{ color: "#4ade80" }}>verbo</strong> expresa la acción. El complemento añade información.
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>🇲🇽 Leslie estudia italiano.</div>
      </RuleBox>

      <SectionTitle color="#7C3AED">🔍 Verbos en oraciones simples</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>
        Estas oraciones usan la forma de <strong lang="it" style={{ color: "#f8fafc" }}>lui/lei</strong> (él/ella) o de{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>io</strong> (yo): es un <strong style={{ color: "#f8fafc" }}>anticipo</strong> de la conjugación, que estudiarás con detalle en Básico II.
      </p>
      {VERB_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="⚠️" rule="Falsos amigos — parecen, pero no son" color="#f87171">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "6px", marginTop: "6px" }}>
          {FALSE_FRIENDS.map(([it, es]) => (
            <div key={it} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", borderLeft: "3px solid #f87171" }}>
              <div lang="it" style={{ color: "#f87171", fontWeight: 800, fontSize: "13px" }}>{it}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {es}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px" }}>
          Ejemplo: <strong lang="it" style={{ color: "#e2e8f0" }}>Esco stasera.</strong> 🇲🇽 Salgo esta noche. Con{" "}
          <strong lang="it" style={{ color: "#e2e8f0" }}>io</strong>, uscire es irregular: io esco. Las formas irregulares se practican más adelante.
        </p>
      </RuleBox>

      <SectionTitle color="#7C3AED">📋 Verbos frecuentes para consultar</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>
        Lista con infinitivo, grupo y traducción. Busca por italiano o por español.
      </p>
      <RelatedTopic levelId="verbos" topicId="verbFinder" label={`📒 ¿Buscas otro verbo? Consulta los ${VERB_BANK.length} verbos del banco`} />
      <FilterableList
        placeholder="🔍 Busca: parlare, comer, -are…"
        value={filter}
        onChange={setFilter}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "5px" }}>
          {filtered.map(([it, group, es]) => (
            <div key={it} style={{ background: "var(--surface, #1e293b)", borderRadius: "7px", padding: "9px 13px", borderLeft: `3px solid ${group === "-are" ? "#4ade80" : group === "-ere" ? "#fbbf24" : "#60a5fa"}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#4ade80", fontWeight: 700 }} lang="it">{it}</span>
              <span style={{ color: "#94a3b8", fontSize: "11px" }}>{group}</span>
              <span style={{ color: "#94a3b8", fontSize: "13px", textAlign: "right" }}>🇲🇽 {es}</span>
            </div>
          ))}
        </div>
      </FilterableList>
    </div>
  );
}
