# V-Cirkel Platform - Architectuur Documentatie

## 📋 Project Overzicht

Een geïntegreerd freemium platform voor V-cirkel persoonlijkheidsassessment met vier modules:

1. **"Spiegel" (GRATIS)** - Snelle 15-min scenario-based assessment
2. **"V-Cirkel Coach" (PREMIUM)** - 24/7 AI-coach voor vragen over types & drijfveren
3. **"Innerlijk Kompas" (PREMIUM)** - AI-gedreven conversational assessment
4. **"21 Dagen Zelfinzicht" (PREMIUM)** - Reflectie-tracking met pattern recognition

## 🏗️ High-Level Architectuur

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                             │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐│
│  │   React Native  │  │   Web App      │  │   Admin Panel  ││
│  │   (iOS/Android) │  │   (PWA)        │  │   (Dashboard)  ││
│  └────────────────┘  └────────────────┘  └────────────────┘│
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS/REST + WebSocket
┌──────────────────────────┴──────────────────────────────────┐
│                     API LAYER (Node.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Auth Service │  │ Assessment   │  │ Payment      │     │
│  │              │  │ Service      │  │ Service      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ AI Service   │  │ Analytics    │  │ Notification │     │
│  │ (Claude API) │  │ Service      │  │ Service      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────┴──────────────────────────────────┐
│                   DATA LAYER                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  PostgreSQL  │  │    Redis     │  │  S3/Storage  │     │
│  │  (Supabase)  │  │    (Cache)   │  │  (Media)     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Module Structuur

### 1. Spiegel (Free Tier)
```
/modules/spiegel/
├── screens/
│   ├── WelcomeScreen.tsx          # Onboarding
│   ├── StressScenarios.tsx        # Fase 1: Stress scenarios
│   ├── AvoidanceDetector.tsx      # Fase 2: Vermijding-cirkel
│   ├── DriverValidation.tsx       # Fase 3: Drijfveer validatie
│   └── ResultScreen.tsx           # V-cirkel resultaat
├── components/
│   ├── ScenarioCard.tsx           # Swipeable scenario cards
│   ├── AvoidanceCircle.tsx        # Draggable avoidance selector
│   └── VCircleVisual.tsx          # Interactieve V-cirkel diagram
├── logic/
│   ├── assessmentEngine.ts        # Scoring logica
│   ├── typeCalculator.ts          # Type-bepaling algoritme
│   └── vcirkelData.ts             # 9 types definitie
└── hooks/
    └── useAssessment.ts           # Assessment state management
```

### 2. Innerlijk Kompas (Premium)
```
/modules/kompas/
├── screens/
│   ├── CoachIntro.tsx             # AI Coach introductie
│   ├── ConversationScreen.tsx     # Hoofdgesprek interface
│   └── InsightScreen.tsx          # Resultaat + conversatie log
├── components/
│   ├── ChatBubble.tsx             # Chat message component
│   ├── VoiceRecorder.tsx          # Voice input
│   ├── TypeIndicator.tsx          # Real-time type probability
│   └── CoachAvatar.tsx            # Animated coach
├── logic/
│   ├── conversationEngine.ts      # AI prompt management
│   ├── driverDetection.ts         # Drijfveer analyse uit tekst
│   └── questionFlow.ts            # Dynamische vraag generatie
└── services/
    ├── claudeAPI.ts               # Claude API integratie
    └── speechToText.ts            # Whisper API integratie
```

### 3. 21 Dagen Zelfinzicht (Premium)
```
/modules/journey/
├── screens/
│   ├── DailyReflection.tsx        # Dagelijkse prompt
│   ├── PatternInsights.tsx        # Week 2: patronen
│   ├── JourneyMap.tsx             # Visuele voortgang
│   └── GrowthTracker.tsx          # Post-assessment groei
├── components/
│   ├── ReflectionPrompt.tsx       # Dagelijkse vraag UI
│   ├── EmojiRating.tsx            # Snelle emotie-rating
│   ├── VoiceMemo.tsx              # Voice note recorder
│   └── PatternCard.tsx            # Patroon visualisatie
├── logic/
│   ├── patternRecognition.ts      # ML patroon detectie
│   ├── contextAnalyzer.ts         # Context (werk/weekend) analyse
│   └── journeyEngine.ts           # 21-dagen flow
└── ml/
    └── patternDetector.py         # Python ML service
```

## 💾 Database Schema

### Core Tables

```sql
-- Users & Authentication
users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  created_at TIMESTAMP,
  subscription_tier TEXT, -- 'free', 'premium', 'lifetime'
  subscription_expires_at TIMESTAMP,
  onboarding_completed BOOLEAN
)

-- Spiegel Assessment (Free)
spiegel_assessments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  phase INT, -- 1, 2, or 3
  results JSONB -- Alle antwoorden en scores
)

spiegel_results (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  assessment_id UUID REFERENCES spiegel_assessments(id),
  primary_type INT, -- 1-9
  confidence_score DECIMAL,
  v_circle JSONB, -- {verslaving, verleiding, vermijding, verdediging, ideaalbeeld}
  created_at TIMESTAMP
)

-- Innerlijk Kompas (Premium)
kompas_conversations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  messages JSONB[], -- {role, content, timestamp, detected_drivers}
  final_type INT,
  confidence_score DECIMAL
)

-- 21 Dagen Journey (Premium)
journey_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  started_at DATE,
  current_day INT,
  completed BOOLEAN,
  final_type INT
)

journey_reflections (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES journey_sessions(id),
  day INT,
  prompt_id INT,
  response_text TEXT,
  voice_memo_url TEXT,
  emoji_rating INT,
  context JSONB, -- {time_of_day, location, mood}
  created_at TIMESTAMP
)

journey_patterns (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES journey_sessions(id),
  detected_at DATE,
  pattern_type TEXT, -- 'avoidance', 'driver', 'stress_response'
  description TEXT,
  confidence DECIMAL,
  supporting_reflections UUID[]
)

-- V-cirkel Type Definitions (Static Data)
vcirkel_types (
  type_number INT PRIMARY KEY,
  name_nl TEXT,
  ideaalbeeld TEXT,
  verslaving TEXT,
  verleiding TEXT,
  vermijding TEXT,
  verdediging TEXT,
  indicatoren JSONB,
  growth_tips JSONB,
  podcast_url TEXT
)

-- Payments & Subscriptions
payments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount DECIMAL,
  currency TEXT,
  product_type TEXT, -- 'kompas', 'journey', 'premium'
  payment_provider TEXT, -- 'stripe', 'mollie'
  payment_id TEXT,
  status TEXT,
  created_at TIMESTAMP
)
```

## 🔐 Authentication & Authorization

### Strategie: Supabase Auth + JWT

```typescript
// Permission Levels
type SubscriptionTier = 'free' | 'premium' | 'lifetime'

// Feature Access Matrix
const FEATURE_ACCESS = {
  free: ['spiegel', 'basic_results'],
  premium: ['spiegel', 'kompas', 'journey', 'advanced_analytics', 'pdf_export'],
  lifetime: ['all', 'priority_support', 'future_features']
}
```

## 🎨 Tech Stack

### Frontend (React Native)
```json
{
  "core": ["react-native", "expo"],
  "navigation": ["react-navigation"],
  "state": ["zustand", "react-query"],
  "ui": ["react-native-reanimated", "lottie-react-native"],
  "forms": ["react-hook-form", "zod"],
  "payments": ["@stripe/stripe-react-native"]
}
```

### Backend (Node.js)
```json
{
  "runtime": ["node.js", "typescript"],
  "framework": ["express", "fastify"],
  "orm": ["prisma"],
  "validation": ["zod"],
  "ai": ["@anthropic-ai/sdk"],
  "queue": ["bullmq"],
  "cache": ["ioredis"]
}
```

### Infrastructure
```yaml
hosting:
  frontend: Expo EAS (iOS/Android) + Vercel (Web)
  backend: Railway / Render
  database: Supabase (PostgreSQL + Auth + Storage)
  cache: Upstash Redis
  cdn: Cloudflare

monitoring:
  errors: Sentry
  analytics: Mixpanel
  performance: Firebase Performance
```

## 💰 Freemium Strategie

### Free Tier (Spiegel)
- ✅ Volledige assessment (15 min)
- ✅ Basis V-cirkel resultaat
- ✅ Type beschrijving
- ✅ Link naar podcast
- ❌ AI coach gesprek
- ❌ 21-dagen journey
- ❌ Groei-tracking
- ❌ PDF export

### Premium Tier (€9.99/maand of €79/jaar)
- ✅ Alles van Free
- ✅ Innerlijk Kompas (onbeperkt)
- ✅ 21 Dagen Journey
- ✅ Groei-tracking dashboard
- ✅ Geavanceerde analytics
- ✅ PDF rapporten
- ✅ Prioriteit support

### Upsell Moments
1. Na Spiegel resultaat: "Wil je dieper? Start een gesprek met je AI coach"
2. Dag 3 van journey trial: "Ontgrendel 18 dagen extra inzicht"
3. In-app tooltip: "Premium gebruikers zien hun groei over tijd"

## 🚀 Deployment Strategy

### Phase 1: MVP (8-12 weken)
- ✅ Spiegel module (gratis)
- ✅ Basic auth & database
- ✅ Payment integratie (Stripe/Mollie)
- ✅ iOS + Android builds

### Phase 2: Premium Features (4-6 weken)
- ✅ Innerlijk Kompas met Claude API
- ✅ Voice input
- ✅ Premium gating

### Phase 3: Advanced (6-8 weken)
- ✅ 21 Dagen Journey
- ✅ Pattern recognition ML
- ✅ Growth tracking
- ✅ Analytics dashboard

### Phase 4: Scale (Ongoing)
- ✅ Web app (PWA)
- ✅ Coach/Therapeut dashboard
- ✅ Team assessments
- ✅ API voor partners

## 📊 Success Metrics

### Acquisition
- Downloads per week
- Free → Premium conversion rate (target: 5-8%)
- Viral coefficient (referrals)

### Engagement
- Assessment completion rate (target: >70%)
- Premium feature usage
- Journey completion rate (target: >40%)

### Revenue
- MRR (Monthly Recurring Revenue)
- ARPU (Average Revenue Per User)
- Churn rate (target: <5% monthly)

## 🔒 Privacy & Security

- ✅ GDPR compliant
- ✅ End-to-end encryption voor voice memos
- ✅ Anonieme analytics
- ✅ Data export functionaliteit
- ✅ Right to deletion (GDPR)
- ✅ Dutch data centers (Supabase EU region)

## 📱 Platform Requirements

### iOS App Store
- iOS 14.0+
- Privacy policy
- Terms of service
- In-app purchase setup

### Google Play Store
- Android 8.0+
- Privacy policy
- Data safety form
- Billing permissions

---

**Versie:** 1.0
**Laatst bijgewerkt:** 2026-02-10
**Team:** Vcirkelacademie x Claude
