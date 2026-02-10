# V-Cirkel Mobile App - MVP

## 🚀 Quick Start

### Vereisten
- Node.js 18+ geïnstalleerd
- npm of yarn
- Expo Go app op je telefoon (optioneel)

### Installatie & Start

```bash
# Installeer dependencies
npm install

# Start de development server
npm start
```

Dan kies je:
- **i** - Open in iOS simulator (vereist Xcode op Mac)
- **a** - Open in Android emulator (vereist Android Studio)
- **w** - Open in web browser
- **Scan QR code** - Met Expo Go app op je telefoon

## 📱 Wat werkt in deze MVP

### ✅ Volledig Werkend

#### 1. Home Screen
- Overzicht van alle modules
- Spiegel (gratis), V-Cirkel Coach (premium), en twee "coming soon" modules

#### 2. Spiegel Assessment (GRATIS)
**Fase 1: Stress-Spotlicht**
- 4 scenario-based vragen
- Elke vraag test je reactie onder druk
- Antwoorden worden gescoord per type

**Fase 2: Vermijding-Detector**
- Kies wat je het meest vermijdt
- Dit is de sterkste indicator voor je type
- Selectie krijgt extra gewicht in scoring

**Fase 3: Resultaat**
- Berekent je primaire V-cirkel type
- Toont je volledige V-cirkel:
  - 💭 Ideaalbeeld
  - 🔥 Verslaving
  - 🎯 Verleiding
  - 🚫 Vermijding
  - 🛡️ Verdediging

#### 3. V-Cirkel Coach (PREMIUM)
- 24/7 AI-coach chat
- Stel vragen over:
  - De 9 types en hun drijfveren
  - Hoe om te gaan met anderen
  - Relatie-dynamieken
  - Jouw eigen groei
- **Demo mode**: Klik op "Probeer Gratis" om te testen
- Intelligente responses gebaseerd op je vragen

### 🚧 Mock Data

Voor deze MVP gebruiken we:
- **Mock AI responses** in de Coach (geen echte Claude API calls)
- **Lokale type berekening** (geen backend vereist)
- **Demo premium unlock** (geen betalingen)

## 🎨 Design Features

- ✨ Smooth gradient backgrounds
- 🎭 Emoji icons voor visuele appeal
- 📱 Responsive design (werkt op alle schermgroottes)
- 🌊 Smooth navigatie transitions
- 💬 Chat-achtige interface voor Coach

## 🧪 Test de Flow

### Scenario 1: Gratis User Journey
1. Open app → Zie home screen
2. Tik op "Spiegel" card
3. Lees intro → "Start Assessment"
4. Beantwoord 4 stress scenario's
5. Selecteer je vermijding
6. Zie je resultaat met V-cirkel
7. Probeer "V-Cirkel Coach" → Zie premium gate

### Scenario 2: Premium Coach Test
1. Ga naar "V-Cirkel Coach"
2. Klik "Probeer Gratis (Demo)"
3. Stel vragen zoals:
   - "Wat is Type 1?"
   - "Hoe ga ik om met een Type 2 partner?"
   - "Vertel over drijfveren"
   - "Ik ben Type 6, hoe groei ik?"

## 🔧 Troubleshooting

### "Unable to resolve module"
```bash
# Clear cache en herstart
npm start -- --clear
```

### "Cannot find module @expo/..."
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### App blijft hangen op splash screen
```bash
# Check of je in de juiste directory zit
pwd  # Should be: .../v-cirkel-app/mobile

# Restart metro bundler
npm start -- --reset-cache
```

### iOS simulator niet beschikbaar
Je hebt Xcode nodig (alleen op Mac). Gebruik anders:
- Web browser (w)
- Expo Go app op je telefoon

## 📂 Project Structuur

```
mobile/
├── app/                      # Expo Router screens
│   ├── index.tsx            # Home screen
│   ├── spiegel/             # Spiegel module
│   │   ├── index.tsx        # Intro
│   │   ├── assessment.tsx   # 3-fase assessment
│   │   └── result.tsx       # Resultaat + V-cirkel
│   └── coach/               # V-Cirkel Coach
│       └── index.tsx        # Chat interface
├── app.json                 # Expo configuratie
├── package.json             # Dependencies
└── babel.config.js          # Babel setup
```

## 🎯 Volgende Stappen (na MVP review)

1. **Backend Integratie**
   - Vervang mock AI met echte Claude API (Opus 4.5)
   - Database voor user data
   - Auth met Supabase

2. **Payment Integratie**
   - Stripe checkout flow
   - Subscription management
   - Premium gating backend

3. **Extended Features**
   - Voice input voor Coach
   - Groei-tracking
   - Podcast links
   - Share resultaat

4. **Polish**
   - Animaties (Lottie)
   - Haptic feedback
   - Loading states
   - Error handling

## 💡 Tips voor Testen

- **Probeer verschillende antwoord combinaties** in Spiegel om verschillende types te krijgen
- **Test de Coach met variatie in vragen** - hij herkent keywords
- **Check de responsive design** door venster te resizen (in web)
- **Test op echte device** voor beste ervaring (via Expo Go)

## 📝 Feedback & Bugs

Voor deze MVP, noteer:
- [ ] Wat werkt goed?
- [ ] Wat is onduidelijk?
- [ ] Welke features mis je?
- [ ] Performance issues?
- [ ] UI/UX verbeteringen?

---

**Status**: MVP Ready for Review ✅
**Versie**: 1.0.0-mvp
**Laatst bijgewerkt**: 2026-02-10
