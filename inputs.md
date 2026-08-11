# daikin-aircond — Project Inputs

**Slug:** daikin-aircond
**Rebuilt from:** water-tank-malaysia (canonical skeleton), Aug 2026 — replaced a
bespoke `src/`-based build that had no i18n, webcore, or locale routing.

## Confirmed Inputs (Step 0)

| Field | Value |
|-------|-------|
| **Company** | Encik Beku Aircond Sdn. Bhd. |
| **Brand name** | Daikin AirCond Malaysia |
| **Product name** | Aircond Daikin — Pasang, Servis & Sewa Beli |
| **Product slug** | `aircond-daikin` |
| **Domain** | `daikin-aircond.vercel.app` |
| **Site URL** | `https://daikin-aircond.vercel.app` |
| **Phone (WhatsApp)** | `60189294628` |
| **Leads mode** | `single` |
| **Languages** | `ms` (default), `en`, `zh` |

## Project-unique special section

**Rent-to-own (sewa beli) plans** — the differentiator versus every other aircond
installer: a monthly plan (from RM89/mo over 36 months) that includes a brand new
Daikin unit, installation and a 1-year warranty, and the unit becomes the
customer's at the end of the term. Rendered in the `#packages` section on the
homepage and every location page.

## Price sheet (source of truth for DB seeding)

| Model | Category | Unit + install |
|---|---|---|
| Daikin SMARTO Inverter | Inverter | RM 1,580 |
| Daikin FTKF Inverter | Inverter | RM 1,780 |
| Daikin BLUVI Inverter | Inverter | RM 1,980 |
| Daikin FTKM Inverter | Inverter | RM 2,200 |
| Daikin FTV-P Non-Inverter | Non-Inverter | RM 1,480 |
| Daikin SkyAir Cassette | Cassette | RM 4,760 |

Rent-to-own: 1.0HP RM109/mo · 1.5HP RM139/mo · 2.0HP RM209/mo · 2.5HP RM239/mo ·
3.0HP RM269/mo (24 months). Servicing from RM80, chemical wash from RM130.

## Still TODO

- [ ] Gloo (Step 14): real GTM container + GA4 + Search Console + Ads conversion.
      `app/[locale]/layout.tsx` currently ships a PLACEHOLDER `GTM-DAIKINMY`.
      Blocked on a PAID domain — `.vercel.app` is not eligible.
- [ ] Per-locale OG cards (`public/og-{ms,en,zh}.png`) via `scripts/og-shot.mjs`.
