# Bug Tracking - Digitalizace Calderon

## 🐛 Systém sledování chyb

Tento dokument slouží k evidenci všech chyb, problémů a jejich řešení v projektu Digitalizace Calderon.

## 📊 Aktuální stav

**Celkem problémů:** 1  
**Vyřešeno:** 1  
**Aktivní:** 0  
**Kritické:** 0

---

## 🔥 Aktivní problémy

_Momentálně žádné aktivní problémy._

---

## ✅ Vyřešené problémy

### #001 - CSS Import Order Error

- **Typ:** Build Error
- **Priorita:** 🔴 Vysoká
- **Datum:** 26.07.2025
- **Popis:** @import pravidla v globals.css nebyla ve správném pořadí
- **Chyba:** `@import rules must precede all rules aside from @charset and @layer statements`
- **Řešení:** Přesun Google Fonts importu na začátek souboru, použití Next.js Font API
- **Status:** ✅ Vyřešeno
- **Řešitel:** System
- **Commit:** `Fix CSS import order and use Next.js Font API`

---

## 📝 Šablona pro nové problémy

### #XXX - Název problému

- **Typ:** [Bug | Enhancement | Performance | Security]
- **Priorita:** [🔴 Vysoká | 🟡 Střední | 🔵 Nízká]
- **Datum:** DD.MM.YYYY
- **Popis:** Detailní popis problému
- **Kroky k reprodukci:**
  1. Krok 1
  2. Krok 2
  3. Krok 3
- **Očekávané chování:** Co se mělo stát
- **Skutečné chování:** Co se stalo
- **Environment:** [Development | Staging | Production]
- **Browser:** Chrome/Firefox/Safari + verze
- **Řešení:** Popis řešení
- **Status:** [🟡 Aktivní | ✅ Vyřešeno | ❌ Zamítnuto]
- **Assignee:** Kdo řeší
- **Related Issues:** #XXX, #YYY

---

## 📋 Kategorie problémů

### 🔴 Kritické (P1)

- Blokují funkcionalitu
- Zabraňují buildování
- Bezpečnostní problémy
- **SLA:** 4 hodiny

### 🟡 Vysoké (P2)

- Výrazně ovlivňují UX
- Performance problémy
- Responzivita
- **SLA:** 24 hodin

### 🔵 Střední (P3)

- Menší UI problémy
- Vylepšení
- Nice-to-have funkce
- **SLA:** 1 týden

### ⚪ Nízké (P4)

- Kosmetické úpravy
- Budoucí vylepšení
- **SLA:** Dle kapacit

---

## 🔍 Častě reportované problémy

### Performance

- **Pomalé načítání obrázků** → Použít Next.js Image optimalizaci
- **FOUC (Flash of Unstyled Content)** → Správné načítání fontů
- **Hydration errors** → Server-side rendering konzistence

### Responzivita

- **Layout overflow na mobile** → Kontrola max-width a padding
- **Touch targets příliš malé** → Min. 44px pro dotyková zařízení
- **Horizontal scroll** → Kontrola content width

### Formuláře

- **Validace nefunguje** → Kontrola event handlers
- **Odesílání bez CSRF** → Implementace bezpečnostních opatření
- **Chybné error handling** → Lepší zobrazení chyb

### SEO/Meta

- **Chybějící meta descriptions** → Kontrola layout.tsx
- **Nesprávné Open Graph** → Implementace og: tagů
- **Missing structured data** → JSON-LD implementace

---

## 🛠️ Debugging workflow

### 1. Identifikace

- [ ] Reprodukuj problém
- [ ] Zdokumentuj kroky
- [ ] Získej screenshot/video
- [ ] Kontroluj console logy

### 2. Analýza

- [ ] Identifikuj root cause
- [ ] Zjisti scope problému
- [ ] Odhadni časovou náročnost
- [ ] Prioritizuj podle dopadu

### 3. Řešení

- [ ] Naplánuj approach
- [ ] Implementuj fix
- [ ] Testuj na dev environment
- [ ] Code review

### 4. Deploy a verifikace

- [ ] Deploy na staging
- [ ] Testuj na staging
- [ ] Deploy na production
- [ ] Monitor post-deploy

### 5. Dokumentace

- [ ] Aktualizuj Bug tracking
- [ ] Dokumentuj řešení
- [ ] Sdílej learnings s týmem

---

## 📊 Metriky kvality

### Cílové hodnoty

- **Bug escape rate:** < 5%
- **MTTR (Mean Time To Resolve):** < 24h pro P1/P2
- **Customer satisfaction:** > 95%
- **Test coverage:** > 80%

### Měsíční review

- Počet nalezených bugů
- Průměrná doba řešení
- Nejčastější typy problémů
- Preventivní opatření

---

## 🚨 Eskalační proces

### P1 - Kritické

1. **Okamžitě:** Oznámit týmu
2. **Do 1h:** Hotfix nebo rollback
3. **Do 4h:** Trvalé řešení

### P2 - Vysoké

1. **Do 2h:** Přiřadit řešitele
2. **Do 24h:** Implementovat fix
3. **Do 48h:** Deploy a verifikace

### P3/P4 - Střední/Nízké

1. **Týdenní planning:** Zařadit do backlogu
2. **Sprint planning:** Prioritizovat
3. **Sprint execution:** Řešit podle kapacit

---

## 📞 Kontakty

**Tech Lead:** [Jméno]  
**QA Engineer:** [Jméno]  
**DevOps:** [Jméno]

---

_Tento dokument se aktualizuje s každým novým problémem a řešením._
