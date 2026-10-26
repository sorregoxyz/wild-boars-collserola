![header](https://sorrego.net/wp-content/uploads/wildboars.jpg)

[![DOI](https://zenodo.org/badge/1430906462.svg)](https://doi.org/10.5281/zenodo.23677415)

# Collserola, One by One

**A running count of every wild boar tested for African swine fever (ASF) in Catalonia, one mark per animal, updated with each official report until the killing stops.**

🔗 **Live:** https://sorregoxyz.github.io/wild-boars-collserola/

*Collserola, uno a uno.* Un recuento de cada jabalí analizado por peste porcina africana en Cataluña, una marca por animal, que se actualiza con cada informe oficial hasta que cese la matanza. La pieza está disponible en inglés y en castellano.

---

## Contents

- [About](#about)
- [What the piece shows](#what-the-piece-shows)
- [Data source](#data-source)
- [Categories](#categories)
- [Method and data decisions](#method-and-data-decisions)
- [Repository structure](#repository-structure)
- [Updating the data each week](#updating-the-data-each-week)
- [Running it locally](#running-it-locally)
- [Customising the design](#customising-the-design)
- [Interaction and accessibility](#interaction-and-accessibility)
- [Deployment](#deployment)
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
├── index.html                    The page: layout, styles, interaction, EN/ES text
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

## Updating the data each week

1. Download the new MAPA report and save it as `reports/YYYY-MM-DD.pdf`.
2. Find the key paragraph. It looks like this:

   > Con este nuevo foco ascienden a 77 los focos notificados […], que incluyen un total de **419** casos/jabalíes positivos […]. Además, hasta la fecha se han analizado **14.077** animales que han resultado negativos, de los cuales **11.990** corresponden a animales capturados o abatidos sin mostrar sintomatología clínica y **2.087** se han investigado en el marco de la vigilancia pasiva […].

3. Add one line at the end of `window.REPORTS` in `data.js`, with the four numbers **as printed** (cumulative, without thousands separators):

   ```js
   { date: "2026-10-29", pos: 425, neg: 14400, cap: 12250, pas: 2150 },
   ```

4. If the report has something worth flagging (a new municipality, a figure that doesn't add up, a change in wording), add a note in both languages:

   ```js
   { date: "2026-10-29", pos: 425, neg: 14400, cap: 12250, pas: 2150,
     note: { en: "First case in …", es: "Primer caso en …" } },
   ```

5. Open `index.html` to check it, then commit and push:

   ```bash
   git add reports/ data.js
   git commit -m "Add report of 29.10.2026"
   git push
   ```

The intro text, totals, category panels and colophon all update automatically.

**Checks:**

- `cap + pas` should equal `neg`. If it doesn't, follow the categories and add a note (as for 26.03.2026).
- A category should never go down from one report to the next. If it does, the page shows 0 for that report and logs a warning in the browser console; check the report and add a note.
- For a report with no figures, use `pos: null, neg: null, cap: null, pas: null` and a note.
- (Optional) Add the same report to `ppa_catalunya_informes.csv`.

## Running it locally

Open `index.html` directly in a browser. Because the data is loaded as a script, it works from the file system without a server.

To preview it over a local server instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The fonts load from Google Fonts, so you need an internet connection for the page to look right. Without it, the browser falls back to system fonts.

## Customising the design

All settings are at the top of the `<style>` block in `index.html`, inside `:root`.

| Variable | Default | What it controls |
|---|---|---|
| `--bg` | `#21272C` | Background |
| `--ink` | `#E0EAF2` | Text, rules, active tab |
| `--pos` | `#00AA93` | Positive |
| `--pas` | `#FFB511` | Passive surveillance |
| `--cap` | `#F15060` | Captured or shot without symptoms |
| `--unc` | `#BB76CF` | Unclassified |
| `--type` | `0.80` | Overall text size (1 = original, smaller = smaller text) |
| `--d` | `16px` | Dot diameter (9px on phones) |
| `--g` | `3.4px` | Gap between dots (2px on phones) |
| `--datecol` | `172px` | Width of the date column (104px on phones) |

Other useful places:

- **Space above the title:** search for `header.wrap`. One rule for desktop, one for phones (inside `@media (max-width: 700px)`).
- **Text in both languages:** the `T` object in the `<script>` block (`T.en` and `T.es`) holds every string: title, intro, legend, tabs, tooltips, colophon.
- **Order of categories in each row:** `const order = ["pos", "pas", "cap", "unc"]` in `renderChrono()`.
- **Typography:** IBM Plex Serif (500, 600, 700) for headings, dates and labels; IBM Plex Sans (400, 500, 600) for body text.

## Interaction and accessibility

- Tooltips work on hover (desktop) and on tap (touch screens).
- Category panels close with the **Close ×** button or the **Esc** key; focus returns to the tab that opened them.
- The panel animation is disabled for users who have reduced motion turned on.
- The language choice (EN/ES) is remembered in the browser.
- Numbers follow the language: `14,496` in English, `14.496` in Spanish.

## Deployment

The site is served with GitHub Pages from the root of the `main` branch. Every push to `main` updates the live page within a minute or two.

To set it up again: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.

## Credits, citation and licence

**Research and design:** Santiago Orrego.
**Data:** Ministerio de Agricultura, Pesca y Alimentación (MAPA), Gobierno de España.

Suggested citation:

> Orrego, Santiago. 2026. *Collserola, One by One.* Interactive visualisation. https://sorregoxyz.github.io/wild-boars-collserola/

**Licence:** to be decided. Until a licence file is added, all rights are reserved by the author. The MAPA reports in `reports/` are public documents and remain subject to their original terms.
