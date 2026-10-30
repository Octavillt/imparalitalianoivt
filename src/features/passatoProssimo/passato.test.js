import { describe, expect, it } from "vitest";
import { IRREGULAR_PARTICIPLES, AUXILIARY_EXAMPLES } from "./data";
import { IMPERFECT_MODELS } from "../imperfetto/data";
import { FUTURE_MODELS, FUTURE_IRREGULAR } from "../futuro/data";

describe("participios irregulares", () => {
  const expected = { fare: "fatto", dire: "detto", prendere: "preso", mettere: "messo", leggere: "letto", scrivere: "scritto", vedere: "visto", aprire: "aperto", chiudere: "chiuso", bere: "bevuto", venire: "venuto", essere: "stato", rimanere: "rimasto" };
  it.each(Object.entries(expected))("%s → %s", (infinitive, participle) => {
    expect(IRREGULAR_PARTICIPLES.find(([verb]) => verb === infinitive)?.[1]).toBe(participle);
  });
});

describe("auxiliar y concordancia", () => {
  it.each([
    ["Ho mangiato la pizza.", "avere"],
    ["Sono andato a Roma.", "essere"],
    ["Leslie è andata a Roma.", "essere"],
    ["Octavio e Leslie sono arrivati.", "essere"],
    ["Mi sono alzata alle sette.", "essere"],
  ])("%s lleva %s", (sentence, auxiliary) => {
    expect(AUXILIARY_EXAMPLES.find(item => item.it === sentence)?.aux).toBe(auxiliary);
  });
});

describe("imperfetto", () => {
  it.each([
    ["parlare", ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"]],
    ["credere", ["credevo", "credevi", "credeva", "credevamo", "credevate", "credevano"]],
    ["dormire", ["dormivo", "dormivi", "dormiva", "dormivamo", "dormivate", "dormivano"]],
    ["essere", ["ero", "eri", "era", "eravamo", "eravate", "erano"]],
    ["fare", ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"]],
    ["bere", ["bevevo", "bevevi", "beveva", "bevevamo", "bevevate", "bevevano"]],
    ["dire", ["dicevo", "dicevi", "diceva", "dicevamo", "dicevate", "dicevano"]],
  ])("%s", (verb, forms) => {
    expect(IMPERFECT_MODELS.find(item => item.verb === verb)?.forms).toEqual(forms);
  });
});

describe("futuro semplice", () => {
  it.each([
    ["parlare", ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"]],
    ["credere", ["crederò", "crederai", "crederà", "crederemo", "crederete", "crederanno"]],
    ["dormire", ["dormirò", "dormirai", "dormirà", "dormiremo", "dormirete", "dormiranno"]],
    ["cercare", ["cercherò", "cercherai", "cercherà", "cercheremo", "cercherete", "cercheranno"]],
    ["mangiare", ["mangerò", "mangerai", "mangerà", "mangeremo", "mangerete", "mangeranno"]],
  ])("%s", (verb, forms) => {
    expect(FUTURE_MODELS.find(item => item.verb === verb)?.forms).toEqual(forms);
  });

  it.each([
    ["essere", "sarò"], ["avere", "avrò"], ["andare", "andrò"], ["fare", "farò"], ["venire", "verrò"],
    ["vedere", "vedrò"], ["potere", "potrò"], ["volere", "vorrò"], ["dovere", "dovrò"], ["sapere", "saprò"], ["bere", "berrò"], ["stare", "starò"], ["dare", "darò"],
  ])("%s → %s", (verb, form) => {
    expect(FUTURE_IRREGULAR.find(([infinitive]) => infinitive === verb)?.[1]).toBe(form);
  });
});
