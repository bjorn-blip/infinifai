# 🎯 V-Cirkel Platform

Een geïntegreerd freemium platform voor V-cirkel persoonlijkheidsassessment, gebouwd met React Native en Node.js.

## 📱 Modules

### 1. Spiegel (Gratis)
Snelle 15-minuten scenario-based assessment die je V-cirkel type bepaalt via:
- **Fase 1**: Stress-scenario's (onthult automatische piloot)
- **Fase 2**: Vermijding-detector (sterkste indicator)
- **Fase 3**: Drijfveer-validatie (confirmeert type)

### 2. Innerlijk Kompas (Premium - €9.99/maand)
AI-gedreven conversational assessment met:
- Natural language gesprek met AI-coach
- Voice input ondersteuning
- Real-time type-indicators
- Diepere drijfveer-analyse

### 3. 21 Dagen Zelfinzicht (Premium)
Reflectie-tracking met pattern recognition:
- Dagelijkse micro-reflecties
- ML patroon-detectie
- Contextuele analyse (werk/weekend)
- Groei-tracking na assessment

## 🏗️ Project Structuur

```
v-cirkel-app/
├── mobile/                 # React Native app (iOS, Android, Web)
│   └── src/
│       ├── modules/
│       │   ├── spiegel/   # Gratis assessment module
│       │   ├── kompas/    # Premium AI-coach module
│       │   └── journey/   # Premium 21-dagen module
│       ├── shared/        # Gedeelde components en utilities
│       ├── navigation/    # App navigatie
│       └── services/      # API clients en services
│
├── backend/               # Node.js API server
│   └── src/
│       ├── services/      # Business logic services
│       ├── routes/        # API endpoints
│       ├── middleware/    # Auth, validation, etc.
│       └── models/        # Data models
│
├── shared/                # Gedeelde TypeScript types en data
│   └── vcirkel-types.ts  # V-cirkel type definities
│
└── docs/                  # Documentatie
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ en npm/yarn
- Expo CLI: `npm install -g expo-cli`
- PostgreSQL database (of Supabase account)
- Optioneel: Xcode (iOS) of Android Studio (Android)

### 1. Clone en Setup

```bash
cd /home/user/coding/v-cirkel-app

# Install mobile dependencies
cd mobile
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Environment Variables

**Backend** - Maak `backend/.env`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vcirkel"

# Supabase (Auth + Storage)
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_KEY="your-service-key"

# Claude API (voor Innerlijk Kompas)
ANTHROPIC_API_KEY="your-anthropic-key"

# Stripe (Payments)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Redis (Cache)
REDIS_URL="redis://localhost:6379"

# Server
PORT=3000
NODE_ENV=development
```

**Mobile** - Maak `mobile/.env`:

```env
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 3. Database Setup

```bash
cd backend

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio
npm run prisma:studio
```

### 4. Seed V-Cirkel Types

```bash
# TODO: Create seed script
npm run seed
```

### 5. Start Development

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Mobile App**:
```bash
cd mobile
npm start

# Then press:
# i - voor iOS simulator
# a - voor Android emulator
# w - voor web browser
```

## 🧪 Testing

### Mobile
```bash
cd mobile
npm test
```

### Backend
```bash
cd backend
npm test
```

## 📦 Deployment

### Mobile App

**iOS + Android via EAS Build:**

```bash
cd mobile

# Configure EAS
eas build:configure

# Build voor iOS
eas build --platform ios

# Build voor Android
eas build --platform android

# Submit naar app stores
eas submit --platform ios
eas submit --platform android
```

### Backend API

**Railway / Render:**

```bash
# Connect git repo en deploy
# Railway auto-detecteert Node.js en draait npm start
```

**Environment variables instellen via dashboard:**
- DATABASE_URL (van Railway PostgreSQL add-on)
- Alle andere .env variabelen

## 💰 Freemium Model

### Free Tier
✅ Spiegel assessment (volledig)
✅ Basis V-cirkel resultaat
✅ Type beschrijving en groei-tips
✅ Link naar podcast

### Premium Tier (€9.99/maand of €79/jaar)
✅ Alles van Free
✅ Innerlijk Kompas (AI-coach)
✅ 21 Dagen Journey
✅ Groei-tracking dashboard
✅ Geavanceerde analytics
✅ PDF export

## 🔐 Security & Privacy

- ✅ GDPR compliant
- ✅ End-to-end encryptie voor voice memos
- ✅ Anonieme analytics
- ✅ Data export functionaliteit
- ✅ Right to deletion
- ✅ Dutch data centers (Supabase EU)

## 📊 V-Cirkel Methodiek

Het platform is gebaseerd op de V-cirkel methodiek van Vcirkelacademie.nl:

### De 4 V's + Ideaalbeeld

Elk type wordt gedefinieerd door:

1. **Ideaalbeeld**: Onbewuste overtuiging over wie je moet zijn
2. **Verslaving**: Interne motor/onrust (bijv. angst, trots)
3. **Verleiding**: Wat je najaagt om de verslaving te stillen
4. **Vermijding**: Wat je koste wat kost vermijdt
5. **Verdediging**: Psychologisch afweermechanisme

### Focus op Drijfveren

De tool focust op **waarom** (motivatie), niet **wat** (gedrag):
- Gedrag is contextafhankelijk
- Drijfveren zijn constant
- Stress maakt automatische piloot zichtbaar

## 🛠️ Tech Stack

### Frontend
- React Native + Expo
- TypeScript
- Zustand (state management)
- React Query (data fetching)
- Reanimated 3 (animations)
- Stripe React Native SDK

### Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (Supabase)
- Redis (caching)
- BullMQ (job queue)
- Claude API (AI)

### Infrastructure
- Supabase (Database, Auth, Storage)
- Railway/Render (Backend hosting)
- Expo EAS (Mobile builds)
- Upstash (Redis)
- Stripe/Mollie (Payments)

## 📖 Documentatie

- [Architecture](./ARCHITECTURE.md) - Uitgebreide architectuur docs
- [API Documentation](./docs/API.md) - API endpoints en usage (TODO)
- [Mobile Development](./docs/MOBILE.md) - Mobile development guide (TODO)
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment (TODO)

## 🤝 Contributing

Dit is een privé project voor Vcirkelacademie. Voor vragen of suggesties, neem contact op met het team.

## 📝 License

Proprietary - © 2026 Vcirkelacademie

## 🔗 Links

- [Vcirkelacademie](https://www.vcirkelacademie.nl)
- [V-Cirkel Uitleg](https://www.vcirkelacademie.nl/wat-is-de-vcirkel/)
- [Drijfverenscan](https://www.vcirkelacademie.nl/programma/drijfverenscan/)

---

**Status**: 🚧 In Development
**Versie**: 1.0.0-alpha
**Laatst bijgewerkt**: 2026-02-10
