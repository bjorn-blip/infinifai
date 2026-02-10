# 🚀 V-Cirkel App - Quick Start

## 📍 De app staat klaar in: `vcirkel-mobile/`

### Stap 1: Open een NIEUWE terminal op je Mac

```bash
# Navigeer naar je infinifai project directory
cd ~/path/to/infinifai

# Of als je al in de directory bent via Claude:
# Je bent al in de juiste folder!
```

### Stap 2: Ga naar de V-Cirkel mobile directory

```bash
cd vcirkel-mobile
```

### Stap 3: Installeer dependencies

```bash
npm install
```

Dit kan 2-3 minuten duren de eerste keer.

### Stap 4: Start de app

```bash
npm start
```

### Stap 5: Kies je platform

Druk in de terminal:
- **w** - Open in web browser (AANBEVOLEN voor snelle review!)
- **i** - iOS simulator (vereist Xcode)
- **a** - Android emulator (vereist Android Studio)
- **Scan QR code** - Met Expo Go app op je telefoon

## 🎯 Voor Web Browser (Snelst!)

1. Druk **w** nadat je `npm start` hebt gedaan
2. Browser opent automatisch op `http://localhost:8081`
3. De app laadt - je ziet het home screen!

## ✅ Wat te testen

### Test 1: Spiegel Assessment (5 min)
1. Klik op de paarse "🪞 Spiegel" card
2. Lees de intro, klik "Start Assessment"
3. Beantwoord 4 stress-scenario vragen
4. Selecteer wat je het meest vermijdt
5. Zie je V-cirkel type resultaat!

### Test 2: V-Cirkel Coach (3 min)
1. Ga terug naar home (← Terug knop)
2. Klik op de groene "💬 V-Cirkel Coach" card
3. Klik "Probeer Gratis (Demo)"
4. Stel vragen:
   - "Wat is Type 1?"
   - "Hoe ga ik om met een Type 2 partner?"
   - "Vertel over drijfveren"

## 🐛 Problemen?

### "npm: command not found"
Je moet Node.js installeren:
- Download van: https://nodejs.org/
- Kies de LTS versie
- Herstart terminal na installatie

### "Port 8081 is already in use"
Er draait al een Metro bundler. Doe:
```bash
killall node
npm start
```

### Dependencies installatie mislukt
```bash
# Clear npm cache
npm cache clean --force

# Probeer opnieuw
npm install
```

### App laadt niet in browser
1. Check of Metro bundler draait (zie terminal output)
2. Ga handmatig naar: http://localhost:8081
3. Of probeer: `npm start -- --reset-cache`

## 📱 Voor iOS/Android

### iOS (alleen Mac met Xcode):
```bash
cd vcirkel-mobile
npm start
# Druk 'i' in de terminal
```

### Android (vereist Android Studio):
```bash
cd vcirkel-mobile
npm start
# Druk 'a' in de terminal
```

### Telefoon (makkelijkst!):
1. Download "Expo Go" app (App Store / Play Store)
2. `npm start` in vcirkel-mobile directory
3. Scan de QR code in de terminal
4. App opent in Expo Go!

## 📚 Meer Info

- **ARCHITECTURE.md** - Complete architectuur & design
- **ROADMAP.md** - Development timeline (16 weken)
- **GETTING_STARTED.md** - Gedetailleerde development guide
- **vcirkel-mobile/README.md** - MVP specifieke instructies

## 💡 Tips

- **Web browser is het snelst** voor eerste review
- **Hot reload** werkt automatisch - edit code en zie changes direct
- **Gebruik je telefoon** voor beste mobile experience
- **Check de documentatie** voor volledige feature lijst

## 🎉 Klaar!

De app zou nu moeten draaien. Open de browser en begin met testen!

Vragen? Kijk in de documentatie of vraag me! 🚀
