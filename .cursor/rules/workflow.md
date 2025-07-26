---

## alwaysApply: true

# 🧩 Workflow – Digitalizace Calderon (Cursor Rules)

## 🎯 Hlavní direktiva

Jsi vývojový agent pracující na projektu **Digitalizace Calderon**. Tvojí povinností je postupovat podle dokumentace ve složce `/Docs` a zachovávat jednotnost v architektuře, designu i implementaci.

## 🔁 Základní pracovní proces

### 🔍 Než začneš pracovat na jakémkoli úkolu:

* Zkontroluj `/Docs/Implementation.md` a urči aktuální fázi vývoje a dostupné úkoly
* Zjisti závislosti a předpoklady k danému úkolu
* Ověř si, že správně chápeš rozsah a cíl úkolu

---

### 🛠️ Protokol provedení úkolu

#### 1. Vyhodnocení úkolu

- Přečti konkrétní subtask v `/Docs/Implementation.md`
- Urči složitost:

  - **Jednoduchý úkol:** realizuj rovnou
  - **Složitý úkol:** vytvoř TODO list (v Markdownu)

#### 2. Technická dokumentace

- Pokud jsou v úkolu odkazy na dokumentaci, otevři je a prostuduj
- Nedělej žádné rozhodnutí bez porozumění relevantní technologii

#### 3. UI/UX provedení

- Před prací na jakémkoli UI elementu si otevři `/Docs/UI_UX_doc.md`
- Řiď se definovaným design systémem, barvami a responzivitou

#### 4. Dodržení struktury projektu

- Otevři `/Docs/project_structure.md` před:

  - Spuštěním příkazů
  - Tvorbou složek/souborů
  - Instalací balíčků a závislostí
  - Úpravami architektury

#### 5. Řešení chyb

- Ověř, zda chyba není již popsána v `/Docs/Bug_tracking.md`
- Pokud není, přidej novou dokumentaci chyby:

  - Popis chyby
  - Příčina (pokud znáš)
  - Řešení nebo workaround

#### 6. Dokončení úkolu

Úkol můžeš označit jako dokončený, pouze pokud:

- Vše funguje dle zadání a bez chyb
- Kód odpovídá projektové struktuře a standardům
- UI/UX odpovídá specifikacím
- Nezůstávají žádná varování nebo error hlášky
- Jsou hotové všechny body TODO listu (pokud existuje)

---

### 🧷 Priorita referenčních souborů

1. `/Docs/Bug_tracking.md` – známé chyby a jejich řešení
2. `/Docs/Implementation.md` – hlavní úkolový přehled
3. `/Docs/project_structure.md` – struktura projektu
4. `/Docs/UI_UX_doc.md` – pravidla pro design a UI komponenty

---

## 🧱 Kritická pravidla

- **NIKDY** nezačínej bez přečtení příslušné dokumentace
- **NIKDY** neoznačuj úkol jako hotový bez otestování funkčnosti
- **NIKDY** neporušuj strukturu složek nebo konvencí v kódu
- **NIKDY** nedělej designové rozhodnutí bez konzultace UI/UX dokumentace
- **NIKDY** neřeš chybu, aniž bys ověřil předchozí výskyty
- **VŽDY** dokumentuj chyby a jejich řešení
- **VŽDY** dodržuj definovaný pracovní proces

---

🧠 **Poznámka:** Každé rozhodnutí musí podporovat celkový cíl projektu: vytvořit profesionální, konzistentní a snadno udržovatelnou landing page zaměřenou na digitalizaci firemních procesů.
