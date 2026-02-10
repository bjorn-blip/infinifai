# 🚀 V-Cirkel App - LOKAAL REVIEWEN

## 📍 Stap 1: Verplaats naar je V-cirkel app folder

Open je **Terminal** en run:

```bash
# Ga naar je infinifai project
cd ~/Documents/infinifai

# Verplaats alles naar je V-cirkel app folder
cp -r v-cirkel-mobile-complete/* ~/Documents/Coding/V-cirkel\ app/

# Of als je zeker wilt zijn dat het werkt:
rsync -av v-cirkel-mobile-complete/ ~/Documents/Coding/V-cirkel\ app/
```

## 📍 Stap 2: Open je V-cirkel app folder

```bash
cd ~/Documents/Coding/V-cirkel\ app/
ls -la
```

Je zou nu moeten zien:
- `app/` - De React Native screens
- `package.json` - Dependencies
- `README.md` - Documentatie
- En meer...

## 🚀 Stap 3: Installeer en Start

```bash
# Installeer dependencies (eerste keer, ~2-3 minuten)
npm install

# Start de app
npm start
```

## 🌐 Stap 4: Kies je platform

In de terminal zie je opties:
- **w** - Web browser (SNELST voor review!)
- **i** - iOS simulator
- **a** - Android emulator
- **QR code** - Scan met Expo Go app

**Druk 'w'** en de app opent in je browser!

## ✅ Wat te testen (8 minuten totaal)

### Test 1: Spiegel Assessment (5 min)
1. Zie home screen met 4 module cards
2. Klik op paarse "🪞 Spiegel" card
3. Lees intro, klik "Start Assessment"
4. Beantwoord 4 stress-scenario vragen
5. Selecteer wat je het meest vermijdt
6. Zie je V-cirkel type resultaat!
   - Type naam + emoji
   - 5 V-cirkel componenten
   - Upgrade CTA

### Test 2: V-Cirkel Coach (3 min)
1. Ga terug naar home (← Terug knop)
2. Klik op groene "💬 V-Cirkel Coach" card
3. Zie premium gate
4. Klik "Probeer Gratis (Demo)"
5. Stel vragen:
   - "Wat is Type 1?"
   - "Hoe ga ik om met een Type 2 partner?"
   - "Vertel over drijfveren"
   - "Ik ben Type 6, hoe groei ik?"

## 🐛 Problemen?

### "npm: command not found"
Installeer Node.js: https://nodejs.org/ (LTS versie)

### "Port 8081 already in use"
```bash
killall node
npm start
```

### Dependencies error
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### App laadt niet
1. Check terminal output voor errors
2. Ga handmatig naar: http://localhost:8081
3. Of: `npm start -- --reset-cache`

## 📱 Alternatief: Test op je telefoon

1. Installeer "Expo Go" (gratis app)
2. `npm start` in terminal
3. Scan QR code met Expo Go
4. App opent op je telefoon!

## 📚 Documentatie

Alle info staat in de V-cirkel app folder:
- `README.md` - Project overzicht
- `ARCHITECTURE.md` - Complete architectuur
- `ROADMAP.md` - 16-week development plan
- `GETTING_STARTED.md` - Development details

## 💡 Tips

- **Web is snelst** voor eerste review
- **Hot reload**: Edit code → Zie direct changes
- **Refresh**: Press 'r' in terminal
- **Clear cache**: Press 'shift + r'

## 🎉 Klaar!

```bash
cd ~/Documents/Coding/V-cirkel\ app
npm install
npm start
# Druk 'w' voor web
```

Veel plezier met reviewen! 🚀

---

**Vragen of bugs?** Deel je feedback!
