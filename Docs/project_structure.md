# Struktura Projektu - Digitalizace Calderon

## 📁 Přehled struktury

```
digitalizace_calderon/
├── Docs/                          # 📚 Projektová dokumentace
│   ├── Implementation.md           # Implementační plán a milníky
│   ├── UI_UX_doc.md               # Design a UX specifikace
│   ├── project_structure.md       # Tento dokument
│   └── Bug_tracking.md            # Sledování chyb a issues
├── src/                           # 🔧 Zdrojové kódy aplikace
│   └── app/                       # Next.js App Router
│       ├── components/            # React komponenty
│       │   ├── Hero.tsx           # Hero sekce
│       │   ├── Services.tsx       # Sekce služeb
│       │   ├── Benefits.tsx       # Výhody digitalizace
│       │   ├── About.tsx          # O nás sekce
│       │   └── Contact.tsx        # Kontaktní formulář
│       ├── globals.css            # Globální styly
│       ├── layout.tsx             # Root layout
│       └── page.tsx               # Hlavní stránka
├── types/                         # 📝 TypeScript definice
├── utils/                         # 🛠️ Pomocné funkce
├── public/                        # 🖼️ Statické soubory
│   └── images/                    # Obrázky a ikony
├── tailwind.config.ts             # Konfigurace Tailwind CSS
├── next.config.ts                 # Konfigurace Next.js
├── package.json                   # NPM závislosti
├── tsconfig.json                  # TypeScript konfigurace
├── PRD.md                         # Product Requirements Document
└── README.md                      # Základní informace o projektu
```

## 📂 Detailní popis složek

### `/Docs` - Dokumentace

Obsahuje veškerou projektovou dokumentaci v češtině:

- **Implementation.md** - Kompletní implementační plán rozdělený do fází
- **UI_UX_doc.md** - Designové specifikace, barevná paleta, typografie
- **project_structure.md** - Popis struktury projektu (tento dokument)
- **Bug_tracking.md** - Sledování chyb, známých problémů a jejich řešení

### `/src/app` - Next.js Aplikace

Hlavní aplikační kód využívající Next.js 15 App Router:

#### `/src/app/components` - React Komponenty

- **Hero.tsx** - Úvodní sekce s hlavním claim a CTA tlačítkem
- **Services.tsx** - "Co digitalizujeme" - 3 bloky služeb
- **Benefits.tsx** - Výhody digitalizace pro firmy
- **About.tsx** - Představení společnosti Calderon
- **Contact.tsx** - Kontaktní formulář s validací

#### Kořenové soubory

- **layout.tsx** - Root layout s metadaty, fonty a základní strukturou
- **page.tsx** - Hlavní landing page komponující všechny sekce
- **globals.css** - Globální styly, CSS proměnné, Tailwind import

### `/types` - TypeScript Definice

Obsahuje TypeScript interface a type definice pro:

- Formulářová data
- API response typy
- Konfigurační objekty
- Props interface pro komponenty

### `/utils` - Pomocné Funkce

Utility funkce pro:

- Validace formulářů
- Formátování dat
- API volání
- Společné funkce

### `/public` - Statické Soubory

Veřejně dostupné soubory:

- **images/** - Obrázky, ikony, loga
- **favicon.ico** - Favicon stránky
- Další statické assety

## ⚙️ Konfigurační soubory

### `tailwind.config.ts`

```typescript
// Konfigurace Tailwind CSS s custom barvami
colors: {
  'brand': {
    primary: '#b3cf69',    // Zelená
    secondary: '#1e232d',  // Tmavě šedá
  }
}
```

### `next.config.ts`

```typescript
// Konfigurace Next.js
// - Image optimalizace
// - Build optimalizace
// - Environment variables
```

### `package.json`

Hlavní závislosti:

- **next** - React framework
- **react** - UI knihovna
- **typescript** - Type safety
- **tailwindcss** - CSS framework
- **@types/\* ** - TypeScript definice

## 🚀 Rozwojové příkazy

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint kontrola
npm run type-check   # TypeScript kontrola
```

## 📝 Konvence pojmenování

### Soubory

- **Komponenty:** PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- **Utility:** camelCase (`validateEmail.ts`, `formatDate.ts`)
- **Konstanty:** SCREAMING_SNAKE_CASE (`API_ENDPOINTS.ts`)

### Proměnné

- **React komponenty:** PascalCase (`ContactForm`)
- **Props/State:** camelCase (`isLoading`, `userEmail`)
- **Konstanty:** SCREAMING_SNAKE_CASE (`MAX_FILE_SIZE`)

### CSS třídy

- **Tailwind:** kebab-case (předdefinované)
- **Custom CSS:** BEM metodologie

## 🔄 Workflow

### Development

1. Práce v `/src/app/` pro hlavní funkcionalitet
2. Komponenty v `/src/app/components/`
3. Typy v `/types/`
4. Dokumentace v `/Docs/`

### Nasazení

1. `npm run build` - Production build
2. Testování na staging
3. Deploy na Vercel
4. Připojení custom domény

## 📋 Budoucí rozšíření

### Plánované složky

```
├── src/
│   ├── api/              # API routes
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React Context providers
│   └── middleware/       # Next.js middleware
├── tests/                # Testovací soubory
│   ├── __tests__/        # Unit testy
│   ├── __mocks__/        # Mock data
│   └── e2e/              # End-to-end testy
└── .github/              # GitHub Actions CI/CD
```

---

_Tato struktura se může vyvíjet podle potřeb projektu a nových požadavků._
