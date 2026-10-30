// Partes del cuerpo. La tercera columna es el plural con artículo.
// Le braccia, le dita, le ginocchia, le labbra, le ossa y le sopracciglia
// son femeninos en plural aunque el singular sea masculino.
const av = t => ({ t, r: "essere" });
const vb = t => ({ t, r: "verb" });
const art = t => ({ t, r: "art" });
const adj = t => ({ t, r: "adj" });
const pr = t => ({ t, r: "prep" });

export const BODY_GROUPS = [
  {
    icon: "🗣️",
    title: "La cabeza",
    words: [
      ["la testa", "la cabeza", "le teste"],
      ["la faccia", "la cara", "le facce"],
      ["i capelli", "el cabello", "i capelli"],
      ["l'occhio", "el ojo", "gli occhi"],
      ["il sopracciglio", "la ceja", "le sopracciglia"],
      ["l'orecchio", "la oreja", "le orecchie"],
      ["il naso", "la nariz", "i nasi"],
      ["la bocca", "la boca", "le bocche"],
      ["il labbro", "el labio", "le labbra"],
      ["il dente", "el diente", "i denti"],
      ["la lingua", "la lengua", "le lingue"],
      ["il mento", "la barbilla", "i menti"],
      ["la guancia", "la mejilla", "le guance"],
      ["il collo", "el cuello", "i colli"],
    ],
  },
  {
    icon: "👕",
    title: "El tronco",
    words: [
      ["la spalla", "el hombro", "le spalle"],
      ["il petto", "el pecho", "i petti"],
      ["la pancia", "la barriga", "le pance"],
      ["la schiena", "la espalda", "le schiene"],
      ["il fianco", "el costado", "i fianchi"],
    ],
  },
  {
    icon: "💪",
    title: "Los brazos",
    words: [
      ["il braccio", "el brazo", "le braccia"],
      ["il gomito", "el codo", "i gomiti"],
      ["il polso", "la muñeca", "i polsi"],
      ["la mano", "la mano", "le mani"],
      ["il dito", "el dedo", "le dita"],
      ["il pollice", "el pulgar", "i pollici"],
    ],
  },
  {
    icon: "🦵",
    title: "Las piernas",
    words: [
      ["la gamba", "la pierna", "le gambe"],
      ["il ginocchio", "la rodilla", "le ginocchia"],
      ["la caviglia", "el tobillo", "le caviglie"],
      ["il piede", "el pie", "i piedi"],
    ],
  },
  {
    icon: "🦴",
    title: "Piel y hueso",
    words: [
      ["la pelle", "la piel", "le pelli"],
      ["l'osso", "el hueso", "le ossa"],
    ],
  },
];

export const BODY_WORDS = BODY_GROUPS.flatMap(group => group.words);

export const DESCRIBE = [
  { pts: [av("Ha"), " ", art("gli"), " occhi ", adj("verdi"), "."], esp: "Tiene los ojos verdes." },
  { pts: [av("Ha"), " ", art("i"), " capelli ", adj("lunghi"), "."], esp: "Tiene el cabello largo." },
  { pts: [av("Ho"), " ", art("le"), " mani ", adj("fredde"), "."], esp: "Tengo las manos frías." },
  { pts: [av("Ho"), " ", art("le"), " braccia ", adj("stanche"), "."], esp: "Tengo los brazos cansados." },
];

export const PAIN = [
  { pts: ["Mi ", vb("fa"), " male ", art("la"), " testa."], esp: "Me duele la cabeza." },
  { pts: ["Mi ", vb("fanno"), " male ", art("le"), " gambe."], esp: "Me duelen las piernas." },
  { pts: [av("Ho"), " mal ", pr("di"), " testa."], esp: "Tengo dolor de cabeza." },
  { pts: [av("Ho"), " mal ", pr("di"), " denti."], esp: "Tengo dolor de muelas." },
  { pts: [av("Ho"), " mal ", pr("di"), " schiena."], esp: "Tengo dolor de espalda." },
];

export const WASH = [
  { pts: ["Mi ", vb("lavo"), " ", art("i"), " denti."], esp: "Me lavo los dientes." },
  { pts: ["Mi ", vb("lavo"), " ", art("le"), " mani."], esp: "Me lavo las manos." },
];

export const MOVEMENT = [
  { pts: [vb("Alza"), " ", art("le"), " braccia."], esp: "Levanta los brazos." },
  { pts: [vb("Piega"), " ", art("le"), " ginocchia."], esp: "Dobla las rodillas." },
  { pts: [vb("Gira"), " ", art("la"), " testa."], esp: "Gira la cabeza." },
  { pts: [vb("Tocca"), " ", art("i"), " piedi."], esp: "Toca los pies." },
];

export const PRACTICE = [
  { question: "Escribe el plural con artículo de il braccio.", answers: ["le braccia"], hint: "Para el cuerpo, el plural termina en -a y es femenino.", explanation: "Il braccio → le braccia. El adjetivo va en femenino plural: le braccia stanche." },
  { question: "Escribe el plural con artículo de il dito.", answers: ["le dita"], hint: "El plural de los dedos termina en -a y es femenino.", explanation: "Il dito → le dita." },
  { question: "Escribe el plural con artículo de il ginocchio.", answers: ["le ginocchia"], hint: "El plural termina en -a y es femenino.", explanation: "Il ginocchio → le ginocchia." },
  { question: "Escribe el plural con artículo de il labbro.", answers: ["le labbra"], hint: "El plural de los labios termina en -a y es femenino.", explanation: "Il labbro → le labbra." },
  { question: "Escribe el plural con artículo de l'osso.", answers: ["le ossa"], hint: "El plural termina en -a y es femenino.", explanation: "L'osso → le ossa." },
  { question: "Escribe el plural con artículo de il sopracciglio.", answers: ["le sopracciglia"], hint: "El plural termina en -a y es femenino.", explanation: "Il sopracciglio → le sopracciglia." },
  { question: "Escribe el plural con artículo de l'orecchio.", answers: ["le orecchie", "gli orecchi"], hint: "La forma de la lección es le orecchie. Gli orecchi también existe.", explanation: "L'orecchio → le orecchie. Gli orecchi también se usa." },
  { question: "Escribe el plural con artículo de la mano.", answers: ["le mani"], hint: "No sigue la regla de -a → -e.", explanation: "La mano → le mani." },
  { question: "Escribe el plural con artículo de l'occhio.", answers: ["gli occhi"], hint: "El plural masculino ante vocal usa gli.", explanation: "L'occhio → gli occhi." },
  { question: "Escribe el plural con artículo de il piede.", answers: ["i piedi"], hint: "El plural cambia la terminación a -i.", explanation: "Il piede → i piedi." },
  { question: "Escribe en italiano: Tiene los ojos verdes.", answers: ["Ha gli occhi verdi"], hint: "El adjetivo concuerda con occhi: verdi.", explanation: "Tiene los ojos verdes = Ha gli occhi verdi." },
  { question: "Escribe en italiano: Tiene el cabello largo.", answers: ["Ha i capelli lunghi"], hint: "Capelli es plural. El adjetivo es lunghi.", explanation: "Tiene el cabello largo = Ha i capelli lunghi." },
  { question: "Escribe en italiano: Tengo las manos frías.", answers: ["Ho le mani fredde"], hint: "Mani es femenino plural: fredde.", explanation: "Tengo las manos frías = Ho le mani fredde." },
  { question: "Escribe en italiano: Me duele la cabeza.", answers: ["Mi fa male la testa"], hint: "Con una sola parte, el verbo va en singular: fa.", explanation: "Me duele la cabeza = Mi fa male la testa." },
  { question: "Escribe en italiano: Me duelen las piernas.", answers: ["Mi fanno male le gambe"], hint: "Con un plural, el verbo va en plural: fanno.", explanation: "Me duelen las piernas = Mi fanno male le gambe." },
  { question: "Escribe en italiano: Tengo dolor de cabeza.", answers: ["Ho mal di testa"], hint: "Esta fórmula usa mal di, sin artículo.", explanation: "Tengo dolor de cabeza = Ho mal di testa." },
  { question: "Escribe en italiano: Tengo dolor de muelas.", answers: ["Ho mal di denti"], hint: "Mal di no cambia. Denti va en plural.", explanation: "Tengo dolor de muelas = Ho mal di denti." },
  { question: "Escribe en italiano: Tengo dolor de espalda.", answers: ["Ho mal di schiena"], hint: "Schiena es la espalda.", explanation: "Tengo dolor de espalda = Ho mal di schiena." },
  { question: "Escribe en italiano: Me lavo los dientes.", answers: ["Mi lavo i denti"], hint: "Con el cuerpo va el artículo, sin posesivo.", explanation: "Me lavo los dientes = Mi lavo i denti." },
  { question: "Escribe el imperativo de tú: Levanta los brazos.", answers: ["Alza le braccia"], hint: "Braccia es el plural de il braccio.", explanation: "Levanta los brazos = Alza le braccia. Con usted: Alzi le braccia." },
  { question: "Escribe el imperativo de tú: Dobla las rodillas.", answers: ["Piega le ginocchia"], hint: "Ginocchia es el plural femenino de il ginocchio.", explanation: "Dobla las rodillas = Piega le ginocchia. Con usted: Pieghi le ginocchia." },
  { question: "Escribe el imperativo de tú: Gira la cabeza.", answers: ["Gira la testa"], hint: "Testa es femenino singular.", explanation: "Gira la cabeza = Gira la testa. Con usted: Giri la testa." },
  { question: "Escribe el imperativo de tú: Toca los pies.", answers: ["Tocca i piedi"], hint: "Piedi es el plural de il piede.", explanation: "Toca los pies = Tocca i piedi. Con usted: Tocchi i piedi." },
];
