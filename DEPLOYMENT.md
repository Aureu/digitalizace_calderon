# 🚀 Deployment Guide - Coolify VPS

Tento guide vás provede deploymentem Next.js aplikace **Digitalizace Calderon** na Coolify VPS.

## 📋 Předpoklady

- Funkční Coolify instance na VPS
- Docker nainstalovaný na serveru
- Přístup k Git repozitáři
- Doménové jméno (volitelné)

## 🔧 Příprava aplikace

### 1. Ověření konfigurace

Ujistěte se, že máte tyto soubory v root složce projektu:

```
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Pro local testing
├── .dockerignore          # Optimalizace build procesu
├── next.config.ts         # Standalone output config
└── src/app/api/health/    # Health check endpoint
```

### 2. Local testování

Před deploymentem otestujte Docker build lokálně:

```bash
# Build Docker image
docker build -t digitalizace-calderon .

# Test lokálně
docker run -p 3000:3000 digitalizace-calderon

# Nebo použijte docker-compose
docker-compose up --build
```

Ověřte:

- ✅ Aplikace běží na `http://localhost:3000`
- ✅ Health check endpoint: `http://localhost:3000/api/health`

## 🌐 Deployment na Coolify

### Krok 1: Příprava repozitáře

1. **Push kódu do Git repozitáře**

```bash
git add .
git commit -m "Add Docker configuration for Coolify deployment"
git push origin main
```

### Krok 2: Vytvoření aplikace v Coolify

1. **Přihlaste se do Coolify dashboard**
2. **Klikněte na "Create New Resource"**
3. **Vyberte "Application"**

### Krok 3: Konfigurace aplikace

**General Settings:**

- **Name:** `digitalizace-calderon`
- **Description:** `Next.js landing page pro digitalizaci firemních procesů`

**Source:**

- **Repository:** Váš Git repozitář URL
- **Branch:** `main`
- **Build Pack:** `Docker`

**Build Configuration:**

- **Dockerfile Location:** `/Dockerfile` (v root složce)
- **Docker Context:** `/` (celý repozitář)

### Krok 4: Environment Variables

V Coolify přidejte tyto environment variables:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

### Krok 5: Networking

**Port Configuration:**

- **Application Port:** `3000`
- **Public Port:** `80` (nebo `443` pro HTTPS)

**Domain Settings:**

- **Custom Domain:** `digitalizace.calderon.cz` (nebo vaše doména)
- **SSL:** Enabled (auto Let's Encrypt)

### Krok 6: Health Checks

V Coolify nastavte health checks:

**Health Check URL:** `/api/health`

- **Initial Delay:** 30 seconds
- **Interval:** 30 seconds
- **Timeout:** 10 seconds
- **Retries:** 3

### Krok 7: Deploy

1. **Klikněte na "Deploy"**
2. **Sledujte build log v real-time**
3. **Čekejte na úspěšný deployment**

## ✅ Verifikace deploymentu

Po úspěšném deployi ověřte:

### 1. Základní funkčnost

```bash
# Test hlavní stránky
curl -I https://digitalizace.calderon.cz

# Test health check endpoint
curl https://digitalizace.calderon.cz/api/health
```

### 2. Očekávaná response z health check:

```json
{
	"status": "healthy",
	"timestamp": "2024-01-XX...",
	"uptime": 123.45,
	"environment": "production",
	"version": "1.0.0"
}
```

### 3. Performance test

- Rychlost načítání < 3s
- Všechny sekce fungují správně
- Formulář odesílá korektně
- Responzivní design na mobile

## 🔄 CI/CD Pipeline (Volitelné)

Pro automatické deploymenty při push do Git:

### GitHub Actions (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to Coolify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Coolify
        run: |
          curl -X POST "${{ secrets.COOLIFY_WEBHOOK_URL }}"
```

### Coolify Webhook

1. V Coolify aplikaci jděte do **Settings > Webhooks**
2. **Enable Auto Deploy**
3. **Zkopírujte Webhook URL**
4. **Přidejte URL jako secret do GitHub** (`COOLIFY_WEBHOOK_URL`)

## 🐛 Troubleshooting

### Build selhává

**Problém:** Docker build error

```bash
# Zkontrolujte Dockerfile syntax
docker build -t test .

# Ověřte .dockerignore
cat .dockerignore
```

### Aplikace se nespustí

**Problém:** Container crash

```bash
# Zkontrolujte logy v Coolify
# Ověřte environment variables
# Zkontrolujte next.config.ts standalone output
```

### Health check selhává

**Problém:** Health endpoint nedostupný

```bash
# Test lokálně
curl http://localhost:3000/api/health

# Zkontrolujte port mapping v Coolify
```

### Pomalé načítání

**Optimalizace:**

- Ověřte image optimization v `next.config.ts`
- Zkontrolujte Docker image velikost
- Nastavte CDN (CloudFlare) před Coolify

## 📈 Monitoring & Logs

### Coolify Monitoring

- **CPU/Memory usage** - v Application dashboard
- **Response times** - přes zdravotní kontroly
- **Error rates** - v Application logs

### Log monitoring

```bash
# V Coolify dashboard:
# Applications > digitalizace-calderon > Logs

# Grep error logs
grep "ERROR" /app/logs
```

## 🔒 Security Best Practices

1. **Environment Variables**

   - Neukládejte secrets v kódu
   - Používejte Coolify Secrets

2. **Network Security**

   - HTTPS pouze (force SSL redirect)
   - Firewall nastavení v Coolify

3. **Updates**
   - Pravidelně updatujte dependencies
   - Monitorujte security vulnerabilities

## 📞 Support

V případě problémů:

1. **Zkontrolujte Coolify dokumentaci**
2. **Ověřte Docker logs**
3. **Testujte build lokálně**
4. **Kontaktujte Coolify community**

---

🎉 **Úspěšný deployment!** Vaše Next.js aplikace nyní běží na produkčním Coolify VPS serveru.
