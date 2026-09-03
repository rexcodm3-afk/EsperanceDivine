# Groupe Scolaire Bilingue Espérance Divine — Website Demo

A static marketing website demo for Groupe Scolaire Bilingue Espérance Divine, a
private bilingual school in Bonabéri, Douala 4ème, Cameroon.

This is a **sales demo**: a static, responsive, bilingual (FR/EN) marketing site.
There is no backend, database, authentication, or admin dashboard — all content
is client-side and easy to edit.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- Tailwind CSS v4
- No backend, no external services beyond Google Fonts and placeholder stock
  imagery (see below)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Content notes

- All copy is intentionally general-purpose and does not fabricate facts
  (student counts, years established, rankings, etc.) that the school has not
  provided.
- The school has not yet supplied official photographs, so curated stock
  photography (Unsplash) is used as placeholder imagery — see
  `src/data/images.ts`. Swap these for real campus photos once available.
- Text content lives in `src/i18n/translations.ts` (French default, English
  translation) and is easy to edit or extend.
- The Facebook link in the footer points to a Facebook search for the school
  name (no official page URL was provided) — update it once the real page URL
  is known.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Gallery, Contact, Footer, ...)
  data/         Image references
  hooks/        useReveal (scroll-reveal animation hook)
  i18n/         Language context + FR/EN dictionaries
```
