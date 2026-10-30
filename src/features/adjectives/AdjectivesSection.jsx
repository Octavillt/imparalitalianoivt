import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Sentence from "../../components/Sentence";
import Token from "../../components/Token";
import { C } from "../../styles/colors";
import {
  AGREEMENT,
  CO_RULES,
  MIXED_GROUP,
  AFTER_NOUN,
  BEFORE_NOUN,
  AFTER_VERB,
  BELLO_FORMS,
  BUONO_FORMS,
  FALSE_FRIENDS,
  COLORS,
  ADJECTIVE_CATEGORIES,
  ADJECTIVES,
} from "./data";

const COLOR = "#0D9488";

const CATEGORY_BY_KEY = Object.fromEntries(ADJECTIVE_CATEGORIES.map(cat => [cat.key, cat]));

const COLUMNS = [
  { title: "Adjetivo", icon: "🔤", role: "adj" },
  { title: "Contrario", icon: "🔁", role: "adjOpp" },
  { title: "Categoría", icon: "🏷️" },
];
const GRID = "1.1fr 1.1fr 1fr";

function AdjectiveTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px" }}>
      <div style={{ minWidth: "620px" }}>
        <div style={{ maxHeight: "60vh", overflowY: "auto", background: "var(--surface, #1e293b)", borderRadius: "10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: GRID, gap: "8px", position: "sticky", top: 0, zIndex: 1 }}>
            {COLUMNS.map(col => (
              <div key={col.title} style={{
                background: col.role ? C[col.role].bg : "#0f172a",
                borderBottom: `2px solid ${col.role ? C[col.role].fg : "#475569"}`,
                color: col.role ? C[col.role].fg : "#94a3b8", fontWeight: 800, fontSize: "13px",
                padding: "9px 12px",
              }}>
                {col.icon} {col.title}
              </div>
            ))}
          </div>
          {rows.map(([word, esp, opp, oppEsp, catKey], i) => {
            const cat = CATEGORY_BY_KEY[catKey];
            return (
              <div key={`${word}-${opp}`} style={{
                display: "grid", gridTemplateColumns: GRID, gap: "8px",
                padding: "9px 12px", background: i % 2 === 0 ? "transparent" : "#172033",
              }}>
                <div>
                  <Token t={word} r="adj" />
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{esp}</div>
                </div>
                <div>
                  <Token t={opp} r="adjOpp" />
                  <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{oppEsp}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{
                    color: cat.color, background: `${cat.color}22`, fontWeight: 700,
                    padding: "3px 9px", borderRadius: "20px", fontSize: "12px", whiteSpace: "nowrap",
                  }}>
                    {cat.icon} {cat.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AdjectivesSection() {
  const [filter, setFilter] = useState("");
  const q = filter.toLowerCase();
  const filtered = ADJECTIVES.filter(([word, esp, opp, oppEsp]) =>
    word.includes(q) || opp.includes(q) || esp.toLowerCase().includes(q) || oppEsp.toLowerCase().includes(q)
  );

  return (
    <div>
      <TopicHeading topicId="adjectives" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <strong style={{ color: "#f8fafc" }}>adjetivos</strong> describen cualidades del sustantivo. En italiano{" "}
        <strong style={{ color: "#f8fafc" }}>concuerdan en género y número</strong> con él:{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>un ragazzo alto</strong>, pero{" "}
        <strong lang="it" style={{ color: "#f8fafc" }}>una ragazza alta</strong>.
      </div>
      <Legend roles={["adj", "adjOpp", "art", "masc", "fem"]} />

      <RuleBox icon="🧩" rule="Concordancia — cuántas formas tiene cada adjetivo" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {AGREEMENT.map(a => (
            <div key={a.title} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px", borderLeft: `3px solid ${COLOR}` }}>
              <div style={{ color: COLOR, fontWeight: 800, fontSize: "13px", marginBottom: "4px" }}>{a.icon} {a.title}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.6, marginBottom: "6px" }}>{a.rule}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{a.forms}</div>
              <div lang="it" style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>{a.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {a.esp}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "10px" }}>
          ⚠️ En <strong lang="it" style={{ color: "#e2e8f0" }}>-co</strong>, el masculino plural a veces añade h para conservar el sonido k:{" "}
          {CO_RULES.map(c => (
            <span key={c.pair} lang="it" style={{ color: "#e2e8f0" }}> {c.forms} </span>
          ))}
          (🇲🇽 {CO_RULES.map(c => c.esp).join(" · ")}). Simpatico → simpatici; stanco → stanchi.
        </p>
        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px" }}>
          👥 En un grupo mixto se usa el masculino plural: <span style={{ lineHeight: 1.9 }}><Sentence pts={MIXED_GROUP.pts} /></span> 🇲🇽 {MIXED_GROUP.esp}
        </p>
      </RuleBox>

      <RuleBox icon="📐" rule="Posición — normalmente después del sustantivo" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          Lo más frecuente es <strong style={{ color: "#f8fafc" }}>sustantivo + adjetivo</strong>:
        </div>
        {AFTER_NOUN.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, margin: "10px 0" }}>
          Algunos adjetivos muy frecuentes (<strong lang="it" style={{ color: "#f8fafc" }}>bello, buono, grande, piccolo, nuovo, vecchio, giovane</strong>) suelen ir{" "}
          <strong style={{ color: "#f8fafc" }}>antes</strong> del sustantivo:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "6px" }}>
          {BEFORE_NOUN.map(b => (
            <div key={b.adj} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px" }}>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{b.adj} = {b.esp}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{b.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {b.espEx}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>✅ Después de essere</SectionTitle>
      <Formula
        parts={[{ t: "Sujeto", r: "subject" }, { t: "essere", r: "essere" }, { t: "Adjetivo", r: "adj" }]}
        example={[{ t: "I gelati", r: "subject" }, { t: "sono", r: "essere" }, { t: "buoni.", r: "adj" }]}
        color={COLOR}
      />
      {AFTER_VERB.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="✨" rule="Bello ante sustantivo — cambia como el artículo" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          Igual que viste con <strong lang="it" style={{ color: "#f8fafc" }}>quello</strong> en Demostrativos:{" "}
          <strong lang="it" style={{ color: "#f8fafc" }}>bello</strong> toma la forma del artículo que acompañaría al sustantivo.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "6px" }}>
          {BELLO_FORMS.map(b => (
            <div key={b.example} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 10px", textAlign: "center" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "16px" }}>{b.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{b.rule}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "12px" }}>{b.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {b.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🍕" rule="Buono en singular — cambia como un" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "6px", marginTop: "6px" }}>
          {BUONO_FORMS.map(b => (
            <div key={b.example} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 10px", textAlign: "center" }}>
              <div lang="it" style={{ color: COLOR, fontWeight: 900, fontSize: "16px" }}>{b.form}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>{b.rule}</div>
              <div lang="it" style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "12px" }}>{b.example}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {b.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="⚠️" rule="Falsos amigos — parecen español, pero no son" color="#f87171">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", marginTop: "6px" }}>
          {FALSE_FRIENDS.map(f => (
            <div key={f.word} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px 12px" }}>
              <div lang="it" style={{ color: "#f87171", fontWeight: 800, fontSize: "14px" }}>{f.word}</div>
              <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "2px" }}>🇲🇽 {f.esp}</div>
              <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "3px" }}>{f.warn}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🌈 Colores</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {COLORS.map(group => (
          <div key={group.group} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "13px", marginBottom: "6px" }}>{group.icon} {group.group}</div>
            {group.items.map(item => (
              <div key={item} lang="it" style={{ color: "#e2e8f0", fontSize: "13px", padding: "1px 0" }}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📋 Lista de adjetivos y sus contrarios</SectionTitle>
      <FilterableList
        placeholder="🔍 Busca: alto, triste, feliz, contrario..."
        value={filter}
        onChange={setFilter}
      >
        <AdjectiveTable rows={filtered} />
      </FilterableList>
    </div>
  );
}
