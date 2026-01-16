# Google Ads Setup Guide voor Infinif.ai

## Wat is er geïnstalleerd?

### 1. Cookie Consent Banner ✅
- **Locatie**: Onderkant van de homepage
- **Functionaliteit**: 
  - Vraagt toestemming voor cookies
  - Ondersteunt Google Consent Mode v2
  - Slaat keuze op in localStorage
  - Accepteren = alle tracking aan
  - Weigeren = alle tracking uit

### 2. Conversion Tracking ✅
- **Afspraak Bevestiging**: `/thank-you` pagina
- **Contact Formulier**: Bij succesvolle verzending
- Beide tracken conversies naar Google Ads

### 3. Navbar Transparantie Fix ✅
- Navbar is nu 95% opacity (was 80%)
- Logo valt minder op tijdens scrollen

### 4. 403 Error Fix ✅
- GitHub Pages routing voor SPA is gecorrigeerd
- 404.html redirect naar root

---

## Google Ads Campagne Setup

### STAP 1: Google Analytics & Google Ads Accounts Aanmaken

1. **Google Analytics 4 (GA4)**
   - Ga naar: https://analytics.google.com
   - Maak een nieuw property aan voor `infinif.ai`
   - Noteer je **Measurement ID** (format: `G-XXXXXXXXXX`)

2. **Google Ads Account**
   - Ga naar: https://ads.google.com
   - Maak een account aan
   - Noteer je **Conversion ID** (format: `AW-XXXXXXXXXX`)

### STAP 2: Tracking Codes Installeren

Open het bestand: `/Users/bjornjense/Documents/Antigravity/Website Infinif.ai 2/index.html`

Vervang de volgende placeholders:

```html
<!-- Regel ~100: Vervang G-XXXXXXXXXX met je GA4 Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JOUW-ID-HIER"></script>

<!-- Regel ~105: Vervang beide G-XXXXXXXXXX -->
gtag('config', 'G-JOUW-ID-HIER', {

<!-- Regel ~110: Vervang AW-XXXXXXXXXX met je Google Ads Conversion ID -->
gtag('config', 'AW-JOUW-ADS-ID-HIER');
```

### STAP 3: Conversie Acties Aanmaken in Google Ads

#### A. Afspraak Conversie
1. Ga naar Google Ads → **Doelen** → **Conversies**
2. Klik op **+ Nieuwe conversie-actie**
3. Kies **Website**
4. Vul in:
   - **Categorie**: Lead
   - **Conversienaam**: Afspraak Gepland
   - **Waarde**: Gebruik dezelfde waarde voor elke conversie → €50 (of jouw gemiddelde leadwaarde)
   - **Telmethode**: Eén
5. Klik op **Maken en doorgaan**
6. Kopieer het **Conversielabel** (bijv. `abc123DEF456`)

Open: `/Users/bjornjense/Documents/Antigravity/Website Infinif.ai 2/src/pages/Confirmation.tsx`

Vervang op regel ~21:
```typescript
'send_to': 'AW-JOUW-ADS-ID/JOUW-CONVERSIELABEL-HIER',
```

#### B. Contact Formulier Conversie
1. Herhaal stappen 1-6 hierboven
2. **Conversienaam**: Contact Formulier Verzonden
3. **Waarde**: €25 (of jouw gemiddelde leadwaarde)
4. Kopieer het nieuwe **Conversielabel**

Open: `/Users/bjornjense/Documents/Antigravity/Website Infinif.ai 2/src/components/Contact.tsx`

Vervang op regel ~48:
```typescript
'send_to': 'AW-JOUW-ADS-ID/JOUW-CONVERSIELABEL-HIER',
```

### STAP 4: Code Opnieuw Deployen

Na het invullen van alle tracking codes:

```bash
cd "/Users/bjornjense/Documents/Antigravity/Website Infinif.ai 2"
npm run build
git add .
git commit -m "Added real Google Ads tracking IDs"
git push origin main
```

### STAP 5: Conversies Testen

1. **Test Afspraak**:
   - Ga naar https://infinif.ai
   - Klik op "Plan een gesprek"
   - Maak een testafspraak
   - Je wordt doorgestuurd naar `/thank-you`
   - Check in Google Ads → Conversies of deze is geregistreerd (kan 24u duren)

2. **Test Contact Formulier**:
   - Ga naar https://infinif.ai#contact
   - Vul het formulier in
   - Verstuur
   - Check in Google Ads → Conversies

### STAP 6: Google Ads Campagne Opzetten

#### Campagne Type: **Search (Zoeknetwerk)**

**Targeting**:
- **Locatie**: Nederland (of specifieke steden: Amsterdam, Rotterdam, Utrecht, etc.)
- **Taal**: Nederlands
- **Netwerken**: Alleen zoeknetwerk (geen Display partners)

**Budget**:
- Start met €20-30/dag
- Verhoog na 2 weken als ROI positief is

**Keywords** (Exact Match & Phrase Match):
```
"AI consultant"
"AI implementatie bedrijf"
"AI strategie advies"
"kunstmatige intelligentie consultant"
"AI business scan"
"AI training bedrijf"
"marketing automation AI"
"ChatGPT voor bedrijven"
"AI workshop bedrijf"
```

**Negatieve Keywords**:
```
gratis
vacature
cursus
opleiding
stage
```

**Ad Copy Voorbeeld**:
```
Headline 1: AI Business Scan - Infinif.ai
Headline 2: Gratis Scan & Direct Advies
Headline 3: 20+ Jaar Digital Expertise

Description 1: Ontdek hoe AI jouw bedrijfsprocessen kan verbeteren. Gecertificeerd AI Business Professional met bewezen track record.

Description 2: Van strategie tot implementatie. Plan direct een vrijblijvend gesprek.

Final URL: https://infinif.ai
Display Path: infinif.ai/ai-scan
```

### STAP 7: Meta (Facebook/Instagram) Ads Setup

1. **Meta Pixel Installeren**:
   - Ga naar Meta Business Manager
   - Maak een Pixel aan
   - Kopieer de Pixel code

2. **Voeg toe aan `index.html`** (voor `</head>`):
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'JOUW-PIXEL-ID');
fbq('track', 'PageView');
</script>
```

3. **Voeg conversie tracking toe** in `Confirmation.tsx` en `Contact.tsx`:
```typescript
// Na Google tracking
if (window.fbq) {
    window.fbq('track', 'Lead');
}
```

### STAP 8: LinkedIn Ads Setup

1. **LinkedIn Insight Tag**:
   - Ga naar LinkedIn Campaign Manager
   - Maak een Insight Tag aan
   - Voeg toe aan `index.html` voor `</head>`

2. **Conversie Tracking**:
   - Maak conversie acties aan in LinkedIn
   - Voeg tracking code toe aan bevestigingspagina's

---

## Conversie URL's voor Google Ads

Gebruik deze URL's in je Google Ads campagne setup:

- **Afspraak Conversie**: `https://infinif.ai/thank-you`
- **Contact Conversie**: Gebruik event tracking (al geïnstalleerd)

---

## Belangrijke Notities

### Privacy & GDPR
✅ Cookie banner is GDPR-compliant
✅ Consent Mode v2 is geïmplementeerd
✅ Tracking start pas na toestemming

### Conversie Waarden
- Pas de `value` aan in de tracking code naar jouw gemiddelde leadwaarde
- Dit helpt Google Ads bij het optimaliseren van biedingen

### Monitoring
- Check dagelijks de eerste week
- Let op Cost Per Conversion
- Optimaliseer keywords op basis van performance
- A/B test verschillende ad copies

---

## Hulp Nodig?

Als je vragen hebt over de setup, laat het me weten!

**Bestand locaties**:
- Tracking codes: `index.html` (regel 83-111)
- Afspraak conversie: `src/pages/Confirmation.tsx` (regel 18-35)
- Contact conversie: `src/components/Contact.tsx` (regel 44-62)
- Cookie consent: `src/components/CookieConsent.tsx`
