![header](https://sorrego.net/wp-content/uploads/wildboars.jpg)

[![DOI](https://zenodo.org/badge/1430906462.svg)](https://doi.org/10.5281/zenodo.23677415)

# Collserola, One by One

**A running count of every wild boar tested for African swine fever (ASF) in Catalonia, one mark per animal, updated with each official report until the killing stops.**

🔗 **Live:** https://sorregoxyz.github.io/wild-boars-collserola/

*Collserola, un a un.* Un recompte de cada senglar analitzat per pesta porcina africana a Catalunya, una marca per animal, que s’actualitza amb cada informe oficial fins que s’aturi la matança.

*Collserola, uno a uno.* Un recuento de cada jabalí analizado por peste porcina africana en Cataluña, una marca por animal, que se actualiza con cada informe oficial hasta que cese la matanza.

The piece is available in **Catalan, English and Spanish**. It opens in the visitor's browser language (falling back to English) and remembers the choice made with the CAT / EN / ES buttons.

---

## Contents

- [About](#about)
- [What the piece shows](#what-the-piece-shows)
- [Data source](#data-source)
- [Categories](#categories)
- [Method and data decisions](#method-and-data-decisions)
- [Repository structure](#repository-structure)
- [Credits, citation and licence](#credits-citation-and-licence)

---

## About

On 28 November 2025, African swine fever was confirmed in two wild boars found dead near the Universitat Autònoma de Barcelona campus, in Cerdanyola del Vallès, on the edge of the Collserola park. It was the first detection of the disease in Spain since 1994.

Since then, Spain's Ministry of Agriculture, Fisheries and Food (MAPA) has published regular updates on the outbreak. Each update lists the positive cases and then, in a single sentence, the "other" animals "analysed" that tested negative. Most of those negatives were not found: they were healthy boars captured or shot as part of the depopulation around the fenced outbreak.

This piece takes the reports' running totals and turns them back into animals. Each dot is one boar. Each row is one report. The page grows longer with every new report and will stop growing only when the reports stop counting.

## What the piece shows

As of the report of **22 October 2026**:

| | Wild boars |
|---|---:|
| Tested positive | 419 |
| Passive surveillance, negative | 1,825 |
| Captured or shot without symptoms, negative | 11,990 |
| Unclassified negatives (before 5 January 2026) | 262 |
| **Total** | **14,496** |

The piece has two views:

- **Chronologically.** One row per report, with the animals that report adds, in the order: positive, passive surveillance, captured or shot. Hovering over (or tapping) a group shows how many animals it holds, their category, and the report date.
- **By category.** Each category tab opens a full-screen panel that rises from the button and shows every animal in that category. Dots keep the same size in every view, so the categories can be compared directly. A one-dot gap separates reports.

## Data source

Ministerio de Agricultura, Pesca y Alimentación (MAPA), *Actualización de la situación de Peste Porcina Africana en jabalíes silvestres en Cataluña*, 50 reports, 28 November 2025 to 22 October 2026.

- MAPA's ASF page: https://www.mapa.gob.es/es/ganaderia/temas/sanidad-animal-higiene-ganadera/sanidad-animal/enfermedades/peste-porcina-africana/peste_porcina_africana
- The original PDFs are kept in [`reports/`](reports/), named by report date (`YYYY-MM-DD.pdf`).

## Categories

| Colour | Category | Definition in the reports |
|---|---|---|
| 🟢 `#00AA93` | **Positive** | Confirmed ASF cases ("casos/jabalíes positivos"). Almost all are carcasses or remains. |
| 🟡 `#FFB511` | **Passive surveillance** | Negative. Carcasses, remains, or animals shot because they showed symptoms ("vigilancia pasiva"). |
| 🔴 `#F15060` | **Captured or shot without symptoms** | Negative. Healthy animals removed as part of population reduction ("capturados o abatidos sin sintomatología clínica"). |
| 🟣 `#BB76CF` | **Unclassified** | Negative. Reported before 5 January 2026, when the reports did not yet split negatives by category. |

## Method and data decisions

Every report gives **cumulative** totals ("hasta la fecha", to date). The piece shows what each report **adds** to the previous one. The calculation happens in the browser from the figures in [`data.js`](data.js), which are copied exactly as printed.

Decisions and inconsistencies, all also listed in the page's colophon:

| Report | Issue | How it is handled |
|---|---|---|
| 02.12.2025 | Gives 7 new cases but no running total. | Positives set to 9 (2 + 7). |
| 04.12 to 29.12.2025 | Negatives are not split by category. | Shown as **Unclassified** (262 in total). The reports mostly describe these as animals found dead. |
| 05.01.2026 | First report with a split (234 captured, 296 passive, both cumulative). | The 262 earlier unclassified negatives are subtracted from passive surveillance, so this report adds 234 captured and 34 passive. Captured here includes all captures to date. |
| 26.02.2026 | The category changes from "capturados" to "capturados o abatidos sin sintomatología clínica". | Kept as one category. Part of that week's jump (281) may be animals shot earlier and not counted before. |
| 19.03.2026 | The report repeats the previous week's captured figure (1,408), which does not add up to its own total (2,179). | Captured set to 1,578 (2,179 − 601). |
| 19.03.2026 onwards | The area becomes "zonas restringidas y sus alrededores". | Noted; negatives are not limited to the restricted zones. |
| 26.03.2026 | Categories add up to 2,444, not the stated 2,441. | Categories used. |
| 28.04.2026 | Zoning update only (Implementing Regulation (EU) 2026/985), no figures. | Shown as an empty row. |

Other things to keep in mind:

- **Report dates are irregular** until March 2026 (4 to 11 days apart) and weekly after that. A row is a report, not necessarily a week.
- **Positives are not split** by how they were found. The text on the page says "almost all" were carcasses or remains, based on the reports' descriptions of new cases.
- **Passive surveillance includes animals shot with symptoms**, so "found dead" and "killed" overlap slightly in that category.

## Repository structure

```
wild-boars-collserola/
├── index.html                    The page: layout, styles, interaction, CA/EN/ES text
├── data.js                       Cumulative figures from each report (edit this weekly)
├── ppa_catalunya_informes.csv    Derived dataset: one row per report, with notes
├── reports/                      Original MAPA PDFs, named YYYY-MM-DD.pdf
├── mockups/                      Design mockups
└── README.md
```

`index.html` and `data.js` are all the site needs. There is no build step and no dependencies apart from the IBM Plex fonts, loaded from Google Fonts.

### `ppa_catalunya_informes.csv`

A tidy table extracted from the reports, useful for analysis outside the page:

| Column | Meaning |
|---|---|
| `date` | Report date |
| `foci_total`, `foci_primary`, `foci_secondary` | Outbreaks (focos) notified to date |
| `new_positive_cases` | Positives added by this report |
| `positives_cumulative` | Positives to date |
| `municipalities_with_cases` | Municipalities with positive cases (when stated) |
| `negatives_cumulative` | Negatives to date, as stated |
| `negatives_captured_or_hunted_no_symptoms` | Captured or shot without symptoms, to date |
| `negatives_passive_surveillance` | Passive surveillance negatives, to date |
| `total_analyzed` | Positives + negatives |
| `new_cases_detection` | How the new positives were found, in the reports' wording |
| `notes` | Inconsistencies and changes in the reports |

The CSV keeps the figures as printed (for example, 1,408 for 19.03.2026). `data.js` holds the version the page uses, with the corrections above.

## Credits, citation and licence

**Research and design:** Santiago Orrego.
**Data:** Ministerio de Agricultura, Pesca y Alimentación (MAPA), Gobierno de España.

Suggested citation:

> Orrego, Santiago. 2026. Collserola, One by One. Interactive visualization. https://sorregoxyz.github.io/wild-boars-collserola/

**Licence:** to be decided. Until a licence file is added, all rights are reserved by the author. The MAPA reports in `reports/` are public documents and remain subject to their original terms.
