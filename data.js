// Collserola, One by One: report data
// Source: MAPA, "Actualización de la situación de Peste Porcina Africana en jabalíes silvestres en Cataluña".
//
// Each line holds the CUMULATIVE figures exactly as printed in one report ("hasta la fecha").
// The page computes how many animals each report adds. To update, append one line per new report.
//
//   date : report date (YYYY-MM-DD)
//   pos  : total positive wild boars to date
//   neg  : total negatives to date (null if the report gives none)
//   cap  : negatives "capturados o abatidos sin sintomatología clínica" to date (null if not split)
//   pas  : negatives "vigilancia pasiva" to date (null if not split)
//   note : optional note shown next to the date and in the colophon,
//          with one text per language: { en: "…", es: "…", ca: "…" }
//          (if a language is missing, the English text is shown)
//
// Before 5 January 2026 negatives are not split by category; they appear as "Unclassified".
// On the first report with a split, the earlier unclassified total is subtracted from "pas",
// following the December reports' description of those animals as found dead.

window.REPORTS = [
  { date: "2025-11-28", pos: 2,   neg: null, cap: null, pas: null,
    note: { en: "First detection: two fresh carcasses near the UAB campus, Cerdanyola del Vallès.",
            es: "Primera detección: dos cadáveres frescos cerca del campus de la UAB, Cerdanyola del Vallès.",
            ca: "Primera detecció: dos cadàvers frescos a prop del campus de la UAB, Cerdanyola del Vallès." } },
  { date: "2025-12-02", pos: 9,   neg: null, cap: null, pas: null,
    note: { en: "The report gives 7 new cases but no running total; 9 = 2 + 7.",
            es: "El informe da 7 casos nuevos pero no el total acumulado; 9 = 2 + 7.",
            ca: "L’informe dona 7 casos nous però no el total acumulat; 9 = 2 + 7." } },
  { date: "2025-12-04", pos: 13,  neg: 37,   cap: null, pas: null },
  { date: "2025-12-12", pos: 16,  neg: 115,  cap: null, pas: null },
  { date: "2025-12-16", pos: 26,  neg: 175,  cap: null, pas: null },
  { date: "2025-12-19", pos: 27,  neg: 201,  cap: null, pas: null },
  { date: "2025-12-29", pos: 29,  neg: 262,  cap: null, pas: null },
  { date: "2026-01-05", pos: 47,  neg: 530,  cap: 234,  pas: 296,
    note: { en: "First report to split negatives by category. Captured animals here include all captures to date; passive surveillance excludes the 262 earlier unclassified negatives.",
            es: "Primer informe que desglosa los negativos. Los capturados incluyen todas las capturas hasta la fecha; la vigilancia pasiva excluye los 262 negativos anteriores sin clasificar.",
            ca: "Primer informe que desglossa els negatius. Els capturats inclouen totes les captures fins a la data; la vigilància passiva exclou els 262 negatius anteriors sense classificar." } },
  { date: "2026-01-12", pos: 60,  neg: 622,  cap: 300,  pas: 322 },
  { date: "2026-01-23", pos: 85,  neg: 749,  cap: 404,  pas: 345 },
  { date: "2026-01-29", pos: 103, neg: 833,  cap: 468,  pas: 365 },
  { date: "2026-02-06", pos: 142, neg: 938,  cap: 549,  pas: 389 },
  { date: "2026-02-13", pos: 155, neg: 1048, cap: 624,  pas: 424 },
  { date: "2026-02-17", pos: 162, neg: 1112, cap: 661,  pas: 451 },
  { date: "2026-02-26", pos: 195, neg: 1433, cap: 942,  pas: 491,
    note: { en: "The category becomes \"captured or shot without symptoms\". Part of this week's increase may be animals shot earlier and not counted before.",
            es: "La categoría pasa a ser \"capturados o abatidos sin sintomatología clínica\". Parte del aumento puede corresponder a animales abatidos antes y no contabilizados.",
            ca: "La categoria passa a ser “capturados o abatidos sin sintomatología clínica”. Part de l’augment pot correspondre a animals abatuts abans i no comptabilitzats." } },
  { date: "2026-03-05", pos: 216, neg: 1708, cap: 1176, pas: 532 },
  { date: "2026-03-12", pos: 227, neg: 1971, cap: 1408, pas: 563 },
  { date: "2026-03-19", pos: 232, neg: 2179, cap: 1578, pas: 601,
    note: { en: "The report repeats last week's captured figure (1,408), which does not add up to its own total of 2,179. Shown here as 1,578 (2,179 − 601). The area becomes \"restricted zones and surroundings\".",
            es: "El informe repite la cifra de capturados de la semana anterior (1.408), que no cuadra con su propio total de 2.179. Aquí se usa 1.578 (2.179 − 601). El área pasa a ser \"zonas restringidas y sus alrededores\".",
            ca: "L’informe repeteix la xifra de capturats de la setmana anterior (1.408), que no quadra amb el seu propi total de 2.179. Aquí s’utilitza 1.578 (2.179 − 601). L’àrea passa a ser “zonas restringidas y sus alrededores”." } },
  { date: "2026-03-26", pos: 238, neg: 2441, cap: 1794, pas: 650,
    note: { en: "The report's categories add up to 2,444, not the stated 2,441. Categories are used here.",
            es: "Las categorías del informe suman 2.444, no los 2.441 indicados. Aquí se usan las categorías.",
            ca: "Les categories de l’informe sumen 2.444, no els 2.441 indicats. Aquí s’utilitzen les categories." } },
  { date: "2026-04-01", pos: 241, neg: 2804, cap: 2108, pas: 696 },
  { date: "2026-04-09", pos: 252, neg: 3136, cap: 2396, pas: 740 },
  { date: "2026-04-16", pos: 268, neg: 3409, cap: 2630, pas: 779 },
  { date: "2026-04-22", pos: 284, neg: 3746, cap: 2936, pas: 810 },
  { date: "2026-04-28", pos: null, neg: null, cap: null, pas: null,
    note: { en: "Zoning update only (Implementing Regulation (EU) 2026/985). No figures.",
            es: "Solo actualización de la zonificación (Reglamento de Ejecución (UE) 2026/985). Sin cifras.",
            ca: "Només actualització de la zonificació (Reglament d’Execució (UE) 2026/985). Sense xifres." } },
  { date: "2026-04-30", pos: 297, neg: 4181, cap: 3326, pas: 855 },
  { date: "2026-05-07", pos: 306, neg: 4552, cap: 3644, pas: 908 },
  { date: "2026-05-14", pos: 320, neg: 4934, cap: 3965, pas: 969 },
  { date: "2026-05-21", pos: 322, neg: 5226, cap: 4229, pas: 997 },
  { date: "2026-05-28", pos: 325, neg: 5658, cap: 4598, pas: 1060 },
  { date: "2026-06-04", pos: 336, neg: 6060, cap: 4947, pas: 1113 },
  { date: "2026-06-11", pos: 342, neg: 6445, cap: 5288, pas: 1157 },
  { date: "2026-06-18", pos: 344, neg: 7010, cap: 5806, pas: 1204 },
  { date: "2026-06-25", pos: 355, neg: 7538, cap: 6279, pas: 1259 },
  { date: "2026-07-02", pos: 358, neg: 7966, cap: 6665, pas: 1301 },
  { date: "2026-07-09", pos: 364, neg: 8560, cap: 7186, pas: 1374 },
  { date: "2026-07-16", pos: 368, neg: 8989, cap: 7576, pas: 1413 },
  { date: "2026-07-23", pos: 372, neg: 9465, cap: 8019, pas: 1446 },
  { date: "2026-07-30", pos: 373, neg: 9879, cap: 8375, pas: 1504 },
  { date: "2026-08-06", pos: 375, neg: 10325, cap: 8765, pas: 1560 },
  { date: "2026-08-13", pos: 379, neg: 10650, cap: 9044, pas: 1606 },
  { date: "2026-08-20", pos: 379, neg: 10952, cap: 9298, pas: 1654 },
  { date: "2026-08-27", pos: 379, neg: 11197, cap: 9488, pas: 1709 },
  { date: "2026-09-03", pos: 384, neg: 11391, cap: 9636, pas: 1755 },
  { date: "2026-09-10", pos: 386, neg: 11891, cap: 10089, pas: 1802 },
  { date: "2026-09-17", pos: 391, neg: 12287, cap: 10421, pas: 1866 },
  { date: "2026-09-24", pos: 396, neg: 12740, cap: 10845, pas: 1895 },
  { date: "2026-10-01", pos: 400, neg: 13141, cap: 11186, pas: 1955 },
  { date: "2026-10-08", pos: 409, neg: 13500, cap: 11483, pas: 2017 },
  { date: "2026-10-15", pos: 410, neg: 13700, cap: 11647, pas: 2053 },
  { date: "2026-10-22", pos: 419, neg: 14077, cap: 11990, pas: 2087 },
  { date: "2026-10-29", pos: 423, neg: 14313, cap: 12184, pas: 2129 },
];
