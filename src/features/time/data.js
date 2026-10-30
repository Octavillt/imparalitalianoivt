// Con e se suman minutos a la hora en punto (1–30); con meno se restan
// hasta la siguiente hora (31–59). Los nombres van en italiano, listos para
// decir «sono le tre e cinque» o «sono le quattro meno dieci».
export const CLOCK_E = [
  { min: 5,  label: "e cinque" },
  { min: 10, label: "e dieci" },
  { min: 15, label: "e un quarto" },
  { min: 20, label: "e venti" },
  { min: 25, label: "e venticinque" },
  { min: 30, label: "e mezza" },
];

export const CLOCK_MENO = [
  { min: 5,  label: "meno cinque" },
  { min: 10, label: "meno dieci" },
  { min: 15, label: "meno un quarto" },
  { min: 20, label: "meno venti" },
  { min: 25, label: "meno venticinque" },
];

export const TIME_EXAMPLES = [
  { time: "03:25", phrase: ["Sono le tre ", "e venticinque", ""], esp: "Primero la hora y después los minutos, igual que en español" },
  { time: "02:15", phrase: ["Sono le due ", "e un quarto", ""], esp: "Un cuarto después de las 2" },
  { time: "05:30", phrase: ["Sono le cinque ", "e mezza", ""], esp: "También se oye «e mezzo»" },
  { time: "09:45", phrase: ["Sono le dieci ", "meno un quarto", ""], esp: "Falta un cuarto para las 10" },
  { time: "01:10", phrase: ["È l'una ", "e dieci", ""], esp: "La una va en singular: è l'una" },
  { time: "12:00", phrase: ["È ", "mezzogiorno", ""], esp: "Las 12:00 del día" },
  { time: "00:00", phrase: ["È ", "mezzanotte", ""], esp: "Las 12:00 de la noche" },
];

export const TIME_DIGITAL = [
  { time: "09:45", phrase: "Sono le nove e quarantacinque", esp: "Forma directa: hora + minutos, tal cual se leen los números" },
  { time: "15:30", phrase: "Sono le quindici e trenta", esp: "Horarios oficiales: 24 horas (trenes, cines, citas)" },
];
