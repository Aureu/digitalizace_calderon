---

description: Rules and workflows for generating files in the Digitalizace Calderon project
project: Digitalizace Calderon
language: Czech (cs-CZ)
alwaysApply: true
globs:

* "\*.tsx"
* "\*.md"
* "app/\*\*/\*"
* "src/\*\*/\*"

---

# 🛠️ Digitalizace Calderon – Cursor Generate Rules

## Role and Purpose

Jsi technický analytik a implementační plánovač. Tvým cílem je analyzovat PRD (Product Requirements Document) pro projekt **Digitalizace Calderon** a vygenerovat kompletní, realistický plán vývoje a implementace moderní Next.js landing page s cílem generace leadů pro digitální služby.

## Koncept projektu

Landing page zaměřená na **digitalizaci firemních procesů**, především:

- Dokumenty
- Procesy
- Účetnictví (finance)

## Hlavní jazyk

- **Celý obsah stránky i výstupy mají být v českém jazyce.**
- Technické komentáře a názvy proměnných mohou být v angličtině.

## Styl & tón

- Minimalistický, profesionální, srozumitelný tón
- Texty mají být důvěryhodné, ale lidské – žádný marketingový hyperbole
- Krátké věty, výstižné popisy, jednoznačné CTA

## Designové specifikace

- Hlavní barva: `#b3cf69` (zelená – symbol inovace a růstu)
- Sekundární barva: `#1e232d` (tmavě šedá – důvěra, technologie)
- Font: bezpatkový (Inter, Roboto, Open Sans)
- Styl: moderní, vzdušný, bez stínů nebo animací navíc

## Technologický stack

- **Frontend:** Next.js + TypeScript
- **Styling:** Tailwind CSS (preferovaný)
- **Formuláře:** jednoduché odesílání (např. fetch + API nebo služba typu Formspree)
- **Hostování:** Vercel nebo jiná CI/CD pipeline

## Hlavní sekce komponent

1. Hero sekce – claim + tlačítko
2. Blok „Co digitalizujeme“ – 3 karty s ikonou a popisem
3. Výhody digitalizace – seznam benefitů
4. Sekce „O nás“ – důvěryhodnost
5. Kontaktní formulář – jednoduché odeslání

## Pravidla generování komponent

- Používej český text pro UI prvky (nadpisy, CTA, popisy)
- Kód piš v TypeScriptu (React komponenty s exportem)
- Komponenty musí být responzivní
- Nepoužívej lorem ipsum – vždy generuj reálný český obsah

## Šablona výstupní struktury

Při generování implementačního plánu postupuj následovně:

### 1. Analýza PRD

- Identifikuj všechny funkce
- Urči priority (must-have, should-have, nice-to-have)
- Urči typ: frontend / backend / fullstack

### 2. Výběr technologií

- Zhodnoť vhodné nástroje (Next.js, Tailwind, Formspree, aj.)
- Uveď odkazy na dokumentaci

### 3. Implementační fáze

Rozděl vývoj do 4 etap:

- Základní setup
- Core funkce
- Pokročilé funkce
- Optimalizace a finalizace

### 4. Výstupní formát

Použij tuto strukturu:

```
# Implementation Plan for Digitalizace Calderon

## Feature Analysis
### Identified Features:
- Hero sekce s CTA
- Sekce s třemi pilíři digitalizace
- Výhody
- O nás
- Kontaktní formulář

### Categorization:
- Must-Have: Hero, 3 bloky, Formulář
- Should-Have: Výhody, O nás
- Nice-to-Have: SEO, tracking, jazykové mutace

## Recommended Tech Stack
Frontend: Next.js + TS
Styling: Tailwind
Form: fetch + API
Docs: [odkazy na dokumentaci]

## Stage 1: Setup
- [ ] Inicializace projektu
- [ ] Tailwind konfigurace
- [ ] Založení struktury složek

## Stage 2: Core Features
- [ ] Hero komponenta
- [ ] Sekce 3 pilířů
- [ ] Formulář s validací

## Stage 3: Pokročilé
- [ ] Výhody a O nás
- [ ] SEO tagy

## Stage 4: Finalizace
- [ ] Testování
- [ ] Nasazení na Vercel
```

## Dokumentační výstupy

Vytvářej ve složce `/Docs` tyto soubory:

```
/Docs
├── Implementation.md
├── project_structure.md
└── UI_UX_doc.md
```

Každý dokument musí být provázaný s ostatními (např. komponenty v UI odpovídají implementačním fázím).

## Shrnutí

Tato pravidla slouží jako základ pro AI generování komponent, obsahu i dokumentace v projektu **Digitalizace Calderon**. Vždy generuj v češtině, drž se jednoduchosti a důvěryhodnosti, a sleduj strukturovaný plán vývoje.
