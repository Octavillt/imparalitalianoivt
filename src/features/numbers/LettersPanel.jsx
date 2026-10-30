import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import PronunciationGroups from "../../components/PronunciationGroups";
import SpellingBox from "./SpellingBox";
import { ALPHABET, VOWELS, CONSONANTS, FOREIGN_LETTERS, SPELLING_EXAMPLES } from "./data";

const VOWEL_COLOR = "#fbbf24";
const CONSONANT_COLOR = "#38bdf8";

const LetterChip = ({ letter, name, ipa, say, city, word, color }) => (
  <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 10px", borderLeft: `3px solid ${color}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
      <span style={{ color, fontWeight: 800, fontSize: "16px" }}>{letter}</span>
      <span style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>{name}</span>
      <span style={{ color: "#94a3b8", fontSize: "11px" }}>{ipa}</span>
    </div>
    <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>
      {city && `${letter} come ${city}`}{word && ` · ${word}`}
      {say && say !== name && <span style={{ color: "#64748b" }}> · se lee «{say}»</span>}
    </div>
  </div>
);

export default function LettersPanel() {
  const traditional = ALPHABET.filter(l => !l.foreign);

  return (
    <div>
      <SectionTitle color="#a78bfa">🔤 L'alfabeto italiano — 21 letras + 5 extranjeras</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        Sus nombres se parecen mucho a los del español: la C se llama <strong style={{ color: "#e2e8f0" }}>ci</strong> y se lee «chi», la{" "}
        <strong style={{ color: "#e2e8f0" }}>G</strong> es <strong style={{ color: "#e2e8f0" }}>gi</strong> (se lee «yi») y la{" "}
        <strong style={{ color: "#e2e8f0" }}>H</strong> es muda, pero su nombre es <strong style={{ color: "#e2e8f0" }}>acca</strong>.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {traditional.map(l => (
          <LetterChip
            key={l.letter}
            letter={l.letter}
            name={l.name}
            ipa={l.ipa}
            say={l.say}
            city={l.city}
            word={l.word}
            color={l.vowel ? VOWEL_COLOR : CONSONANT_COLOR}
          />
        ))}
      </div>

      <SectionTitle color={VOWEL_COLOR}>🅰️ Le vocali</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        <strong style={{ color: VOWEL_COLOR }}>A · E · I · O · U</strong> son las cinco vocales; las otras{" "}
        {CONSONANTS.length} letras tradicionales son consonantes. Las vocales se llaman igual que suenan; las consonantes tienen nombre propio (effe, erre, zeta), y ese nombre es el que se usa al deletrear.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "6px", marginBottom: "12px" }}>
        {VOWELS.map(v => (
          <LetterChip key={v.letter} letter={v.letter} name={v.name} ipa={v.ipa} say={v.say} city={v.city} word={v.word} color={VOWEL_COLOR} />
        ))}
      </div>

      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "16px" }}>
        <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>
          🌍 Las 5 letras extranjeras
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
          Aparecen solo en palabras tomadas de otros idiomas (como jeans, kiwi o yogurt).
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "6px" }}>
          {FOREIGN_LETTERS.map(l => (
            <LetterChip key={l.letter} letter={l.letter} name={l.name} ipa={l.ipa} say={l.say} city={l.city} word={l.word} color="#a78bfa" />
          ))}
        </div>
      </div>

      <SectionTitle color={CONSONANT_COLOR}>🔊 Pronunciación — sonidos frecuentes</SectionTitle>
      <div style={{ marginBottom: "16px" }}>
        <PronunciationGroups />
      </div>

      <RuleBox icon="✍️" rule="Deletrear en voz alta" color={CONSONANT_COLOR}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {SPELLING_EXAMPLES.map(ex => (
            <div key={ex.q} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "9px 12px" }}>
              <div lang="it" style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{ex.q}</div>
              <div lang="it" style={{ color: CONSONANT_COLOR, fontSize: "14px", fontWeight: 700, letterSpacing: "1px", marginTop: "3px" }}>{ex.a}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {ex.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#a78bfa">🕹️ Práctica de deletreo</SectionTitle>
      <SpellingBox />
    </div>
  );
}
