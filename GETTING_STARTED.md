# 🚀 Getting Started - V-Cirkel Platform

Dit document helpt je om snel aan de slag te gaan met development van het V-Cirkel platform.

## 📋 Wat is er al gebouwd?

### ✅ Compleet
1. **Architectuur & Planning**
   - Complete architectuur documentatie
   - Database schema (Prisma)
   - Tech stack definitie
   - Freemium model design

2. **V-Cirkel Core Data**
   - Alle 9 persoonlijkheidstypes gedefinieerd
   - V-cirkel componenten (ideaalbeeld, verslaving, verleiding, vermijding, verdediging)
   - Groei-tips per type
   - TypeScript type-safe definities

3. **Assessment Engine**
   - Spiegel assessment logica
   - 3-fase systeem:
     - Fase 1: Stress scenarios (4 vragen met drijfveer-markers)
     - Fase 2: Vermijding detector (sterkste indicator)
     - Fase 3: Driver validatie (bevestiging per type)
   - Scoring algoritme dat focust op drijfveren, niet gedrag
   - Confidence berekening

4. **Backend API Skeleton**
   - Express server setup
   - Middleware (error handling, logging, CORS)
   - Config management
   - Placeholder endpoints voor alle modules

5. **Mobile App Skeleton**
   - React Native + Expo setup
   - Expo Router navigatie
   - Home screen met module overview
   - Spiegel intro screen
   - Package.json met alle dependencies

## 🔨 Volgende Stappen

### Fase 1: Local Development Setup (1-2 dagen)

#### 1. Database Setup
```bash
cd backend

# Install dependencies
npm install

# Setup Supabase (optie A - Aanbevolen)
# - Ga naar https://supabase.com
# - Maak een nieuw project (EU region voor GDPR)
# - Kopieer de URL en keys naar .env

# Of setup lokale PostgreSQL (optie B)
# - Installeer PostgreSQL
# - Maak database: createdb vcirkel

# Run migrations
npm run prisma:migrate

# Seed V-Cirkel types
npm run seed  # TODO: Maak seed script
```

**TODO: Seed Script** - Maak `backend/prisma/seed.ts`:
```typescript
import { PrismaClient } from '@prisma/client'
import { VCIRKEL_TYPES } from '../../shared/vcirkel-types'

const prisma = new PrismaClient()

async function main() {
  // Seed V-Cirkel types
  for (const type of VCIRKEL_TYPES) {
    await prisma.vCircelType.upsert({
      where: { typeNumber: type.typeNumber },
      update: {},
      create: {
        typeNumber: type.typeNumber,
        nameNl: type.nameNl,
        nameEn: type.nameEn,
        ideaalbeeld: type.vCircle.ideaalbeeld,
        verslaving: type.vCircle.verslaving,
        verleiding: type.vCircle.verleiding,
        vermijding: type.vCircle.vermijding,
        verdediging: type.vCircle.verdediging,
        indicatoren: type.indicatoren,
        growthTips: type.growthTips,
        podcastUrl: type.podcastUrl
      }
    })
  }
}

main()
```

#### 2. Start Backend
```bash
cd backend
npm run dev

# Test endpoints
curl http://localhost:3000/health
curl http://localhost:3000/api
```

#### 3. Start Mobile App
```bash
cd mobile
npm install
npm start

# Dan kies:
# - i voor iOS simulator
# - a voor Android emulator
# - w voor web browser
```

### Fase 2: Spiegel Module Implementatie (1-2 weken)

#### Prioriteit 1: Assessment Flow Screens
Implementeer de volgende screens in `mobile/src/modules/spiegel/`:

1. **screens/StressScenarios.tsx**
   - Toon scenario's uit `assessmentEngine.ts`
   - Swipeable cards (links/rechts) of button selectie
   - Progress indicator (vraag 1/4)
   - Call `assessmentEngine.processStressResponse()`

2. **screens/AvoidanceDetector.tsx**
   - Interactieve cirkel interface
   - Drag & drop of tap-selectie
   - Intensiteit slider (1-5)
   - Call `assessmentEngine.processAvoidanceResponse()`

3. **screens/DriverValidation.tsx**
   - Toon vragen gebaseerd op top 2-3 types
   - Gebruik `assessmentEngine.calculateResult()` om top types te bepalen
   - Simple multiple choice
   - Call `assessmentEngine.processDriverResponse()`

4. **screens/ResultScreen.tsx**
   - Toon primair type + secondary
   - Interactieve V-cirkel visualisatie
   - Groei-tips (swipeable cards)
   - Link naar podcast
   - "Upgrade to Premium" CTA

#### Prioriteit 2: Backend Endpoints
Implementeer in `backend/src/`:

1. **routes/assessment.ts**
```typescript
POST /api/assessments/spiegel/start
POST /api/assessments/spiegel/answer
GET  /api/assessments/spiegel/:id
POST /api/assessments/spiegel/complete
```

2. **services/assessment/spiegelService.ts**
   - Gebruik de assessment engine
   - Store responses in database
   - Calculate en store results

#### Prioriteit 3: State Management
Maak `mobile/src/modules/spiegel/hooks/useAssessment.ts`:
```typescript
import { create } from 'zustand'
import { assessmentEngine } from '../logic/assessmentEngine'

interface AssessmentState {
  phase: 1 | 2 | 3
  responses: Map<string, any>
  currentQuestion: number

  answerQuestion: (questionId: string, answer: any) => void
  nextPhase: () => void
  calculateResult: () => AssessmentResult
  reset: () => void
}

export const useAssessment = create<AssessmentState>((set, get) => ({
  // Implementation here
}))
```

### Fase 3: Authentication & User Management (3-5 dagen)

#### Supabase Auth Integration
1. **Backend**: `backend/src/services/auth/authService.ts`
2. **Mobile**: `mobile/src/services/supabase.ts`
3. **Middleware**: `backend/src/middleware/authMiddleware.ts`

```typescript
// mobile/src/services/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}
```

### Fase 4: Payment Integration (3-5 dagen)

#### Stripe Setup
1. **Backend**: `backend/src/services/payment/stripeService.ts`
2. **Mobile**: Payment screens met Stripe SDK
3. **Webhooks**: `backend/src/routes/webhooks/stripe.ts`

```typescript
// backend/src/services/payment/stripeService.ts
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

export const createSubscription = async (
  userId: string,
  priceId: string
) => {
  // Create customer
  // Create subscription
  // Return client secret
}
```

### Fase 5: Kompas Module (AI Coach) (2-3 weken)

#### Claude API Integration
1. **Backend**: `backend/src/services/ai/claudeService.ts`
2. **Conversation Engine**: Custom prompts voor V-cirkel context
3. **Mobile**: Chat UI met voice input

```typescript
// backend/src/services/ai/claudeService.ts
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!
})

export const startConversation = async (userId: string) => {
  const systemPrompt = `
Je bent een V-cirkel coach. Je doel is om via een gesprek
iemands enneagram type te bepalen door te focussen op hun
DRIJFVEREN, niet hun gedrag.

Vraag door op het "waarom" achter antwoorden.
Let op vermijdingspatronen.
Wees empathisch en nieuwsgierig.
`

  // Implementation
}
```

### Fase 6: Journey Module (21 Dagen) (2-3 weken)

#### Daily Reflection System
1. **Notification Service**: Dagelijkse herinneringen
2. **Pattern Detection**: ML service voor patroon-herkenning
3. **Journey Dashboard**: Voortgang visualisatie

### Fase 7: Testing & Polish (1-2 weken)

- Unit tests voor assessment engine
- Integration tests voor API endpoints
- E2E tests voor kritieke flows
- UI polish en animaties
- Performance optimalisatie

### Fase 8: Deployment (1 week)

#### Backend
- Deploy naar Railway/Render
- Setup environment variables
- Setup database backups
- Configure monitoring (Sentry)

#### Mobile
- EAS Build configuratie
- TestFlight (iOS) en Internal Testing (Android)
- App Store screenshots en metadata
- Submit voor review

## 🎨 Design Assets Needed

1. **Logo & App Icon**
   - 1024x1024 app icon
   - Splash screen
   - Favicon

2. **Illustrations**
   - V-cirkel diagram (interactief)
   - Coach avatar (voor Kompas)
   - Lottie animaties voor transitions

3. **Marketing**
   - App Store screenshots (6.5" en 5.5")
   - App Store description
   - Privacy policy & Terms

## 📚 Nuttige Resources

- [Expo Docs](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Claude API Docs](https://docs.anthropic.com/)
- [Stripe Mobile Docs](https://stripe.com/docs/payments/mobile)

## 💡 Tips

1. **Start Simple**: Begin met Spiegel module alleen. Voeg features toe wanneer core werkt.

2. **Test op Echte Devices**: Simulators zijn anders dan echte phones.

3. **Focus op UX**: De assessment moet vlot en intuïtief aanvoelen.

4. **Privacy First**: Voice memos en reflecties zijn gevoelig. Encryptie is essentieel.

5. **Itereer op Vragen**: Test de assessment vragen met echte gebruikers en verfijn.

## 🐛 Troubleshooting

### "Cannot find module '@/...'"
- Check `tsconfig.json` paths configuratie
- Restart TypeScript server in VS Code

### "Expo: No apps connected"
- Check firewall settings
- Use tunnel mode: `npm start -- --tunnel`

### "Prisma Client not generated"
- Run `npm run prisma:generate` in backend directory

### "Supabase auth not working"
- Check `.env` variables
- Verify Supabase project is active
- Check RLS policies in Supabase dashboard

## 🎯 Success Metrics

Track deze metrics vanaf de start:

- **Acquisition**: Downloads per week
- **Engagement**: Assessment completion rate (target: >70%)
- **Conversion**: Free → Premium (target: 5-8%)
- **Retention**: Day 7, Day 30 retention
- **Revenue**: MRR growth

---

**Klaar om te beginnen? Start met Fase 1!**

Vragen? Check de [ARCHITECTURE.md](./ARCHITECTURE.md) voor meer details.
