# UI/UX Dokumentace - Digitalizace Calderon

## 🎨 Designové specifikace

### Barevná paleta

- **Primární barva:** `#b3cf69` (světle zelená)
  - Použití: CTA tlačítka, akcenty, ikony
  - Symbolika: Růst, inovace, digitální transformace
- **Sekundární barva:** `#1e232d` (tmavě šedá)
  - Použití: Hlavní text, nadpisy, footer pozadí
  - Symbolika: Technologie, důvěryhodnost, profesionalita

### Typografie

- **Font:** Inter (Google Fonts)
- **Váhy:** 300, 400, 500, 600, 700
- **Hierarchie:**
  - H1: 3-6rem, font-bold (Hero nadpis)
  - H2: 1.875rem, font-bold (Sekční nadpisy)
  - H3: 1.25rem, font-semibold (Karty služeb)
  - Body: 1rem, font-normal (Běžný text)
  - CTA: 1.125rem, font-semibold (Tlačítka)

### Layout & Grid

- **Maximální šířka:** 1152px (max-w-6xl)
- **Responzivní breakpointy:**
  - Mobile: <768px
  - Tablet: 768px - 1024px
  - Desktop: >1024px
- **Spacing systém:** Tailwind spacing (4px základní jednotka)

## 🏗️ Struktura komponent

### 1. Hero Sekce

```
- Pozadí: Bílé (#ffffff)
- Padding: py-20 px-4
- Zarovnání: Centrované
- Obsah:
  - Hlavní nadpis (H1)
  - Popis (paragraph)
  - CTA tlačítko (primární barva)
```

### 2. Services Sekce

```
- Pozadí: Světle šedé (#f9fafb)
- Layout: 3-sloupcový grid (md:grid-cols-3)
- Karty:
  - Pozadí: Bílé
  - Shadow: Jemný stín (shadow-sm)
  - Ikony: Emoji v kruhovém pozadí (primární barva)
```

### 3. Kontaktní Formulář

```
- Pozadí: Bílé
- Šířka: max-w-2xl (centrované)
- Inputy:
  - Border: #d1d5db
  - Focus: Ring primární barva
  - Placeholder: Šedý text
```

### 4. Footer

```
- Pozadí: Sekundární barva (#1e232d)
- Text: Bílý
- Padding: py-8 px-4
- Zarovnání: Centrované
```

## 🎯 UX Principy

### Jednoduchost

- Minimalistický design bez zbytečných prvků
- Jasná hierarchie informací
- Krátké, výstižné texty

### Dostupnost (A11y)

- Kontrastní poměr barev min. 4.5:1
- Focus stavy pro všechny interaktivní prvky
- Semantické HTML tagy
- Alt texty pro obrázky

### Použitelnost

- Intuitivní navigace
- Rychlé načítání (<3s)
- Jednoduchý formulář (pouze potřebná pole)
- Jasné CTA tlačítka

### Responzivita

- Mobile-first přístup
- Flexibilní layout pro všechna zařízení
- Optimalizované touch targets (min. 44px)

## 📱 Responzivní chování

### Mobile (< 768px)

- Hero nadpis: text-4xl
- Grid: 1 sloupec
- Padding: px-4
- CTA tlačítka: Plná šířka

### Tablet (768px - 1024px)

- Hero nadpis: text-5xl
- Grid: 2-3 sloupce (podle obsahu)
- Padding: px-6

### Desktop (> 1024px)

- Hero nadpis: text-6xl
- Grid: 3 sloupce
- Padding: px-8
- Hover efekty aktivní

## 🔄 Interaktivní stavy

### Tlačítka

- **Default:** bg-brand-primary
- **Hover:** bg-green-500
- **Focus:** Ring outline
- **Active:** Mírně tmavší odstín

### Formulářové pole

- **Default:** Border šedá
- **Focus:** Ring primární barva + border transparent
- **Error:** Červený border + chybová zpráva

### Odkazy

- **Hover:** Underline + změna barvy
- **Focus:** Outline pro přístupnost

## 📐 Spacing Guidelines

### Sekce

- Mezi sekcemi: py-20 (320px)
- Uvnitř sekcí: mb-12 (192px)

### Komponenty

- Karty služeb: gap-8 (128px)
- Formulářové pole: space-y-6 (96px)
- Texty: mb-6, mb-8 (96px, 128px)

## 🎨 Grafické prvky

### Ikony

- **Styl:** Emoji nebo Lucide icons
- **Velikost:** 64px (w-16 h-16)
- **Pozadí:** Kruhové s primární barvou
- **Barva textu:** Bílá

### Shadows

- **Karty:** shadow-sm (jemný stín)
- **Tlačítka:** Žádné stíny (flat design)
- **Formuláře:** Žádné stíny

### Border Radius

- **Tlačítka:** rounded-lg (8px)
- **Formuláře:** rounded-lg (8px)
- **Karty:** rounded-lg (8px)
- **Ikony:** rounded-full (50%)

---

_Tato dokumentace se aktualizuje podle vývoje projektu a uživatelského feedbacku._
