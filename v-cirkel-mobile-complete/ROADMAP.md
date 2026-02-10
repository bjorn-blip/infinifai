# 🗺️ V-Cirkel Platform - Development Roadmap

## 📊 Project Timeline (MVP → Launch)

```
Week 1-2:   Foundation & Setup
Week 3-4:   Spiegel Module (FREE)
Week 5-6:   Auth & Payments
Week 7-9:   Kompas Module (PREMIUM)
Week 10-12: Journey Module (PREMIUM)
Week 13-14: Testing & Polish
Week 15-16: Beta & Launch
```

---

## 🎯 Milestone 1: Foundation (Week 1-2)
**Goal**: Development omgeving operationeel met database en API

### Week 1
- [x] Projectstructuur opzetten ✓
- [x] Database schema design ✓
- [x] V-cirkel type definities ✓
- [x] Assessment engine core logica ✓
- [ ] Supabase project aanmaken
- [ ] PostgreSQL database setup
- [ ] Prisma migrations draaien
- [ ] Seed script voor V-cirkel types
- [ ] Backend API draaien op localhost
- [ ] Mobile app draaien op simulator

### Week 2
- [ ] Authentication flow (Supabase Auth)
- [ ] User model en endpoints
- [ ] Protected routes middleware
- [ ] Basic mobile navigation structure
- [ ] Shared components library opzetten
- [ ] Error handling & logging setup
- [ ] API client service (mobile → backend)

**Definition of Done**:
- ✅ User kan registreren en inloggen
- ✅ Backend API reageert op authenticated requests
- ✅ Mobile app navigeert tussen screens

---

## 🪞 Milestone 2: Spiegel Module - FREE (Week 3-4)
**Goal**: Werkende gratis assessment die V-cirkel type bepaalt

### Week 3
- [ ] Spiegel intro screen (met animatie)
- [ ] Fase 1: Stress Scenarios UI
  - [ ] Scenario card component
  - [ ] Swipe gesture of button selectie
  - [ ] Progress indicator
- [ ] Fase 2: Vermijding Detector UI
  - [ ] Interactieve cirkel interface
  - [ ] Drag & drop of tap selectie
  - [ ] Intensiteit slider
- [ ] Fase 3: Driver Validatie UI
  - [ ] Dynamic question loading (gebaseerd op top types)
  - [ ] Multiple choice component

### Week 4
- [ ] Result Screen UI
  - [ ] V-cirkel visualisatie (animated)
  - [ ] Type beschrijving
  - [ ] Groei-tips cards (swipeable)
  - [ ] Podcast link
- [ ] Backend: Spiegel endpoints
  - [ ] POST /api/assessments/spiegel/start
  - [ ] POST /api/assessments/spiegel/answer
  - [ ] POST /api/assessments/spiegel/complete
  - [ ] GET /api/assessments/spiegel/:id
- [ ] Assessment state management (Zustand)
- [ ] Data persistence (save progress)
- [ ] Testing: Complete assessment flow E2E

**Definition of Done**:
- ✅ User kan volledige Spiegel assessment doen
- ✅ Resultaat toont correct V-cirkel type
- ✅ Confidence score > 70% voor 80% van tests
- ✅ Assessment data wordt opgeslagen in database

---

## 💳 Milestone 3: Auth & Payments (Week 5-6)
**Goal**: Premium features zijn locked achter betaling

### Week 5
- [ ] Onboarding flow
  - [ ] Welcome screen
  - [ ] Registration/Login
  - [ ] Profiel setup
- [ ] Subscription management
  - [ ] Stripe setup (test mode)
  - [ ] Product & pricing in Stripe
  - [ ] Subscription tiers (free, premium)
- [ ] Payment UI
  - [ ] Pricing screen
  - [ ] Checkout flow (Stripe SDK)
  - [ ] Success/failure handling

### Week 6
- [ ] Backend: Payment service
  - [ ] Stripe webhook handler
  - [ ] Subscription CRUD endpoints
  - [ ] Payment status updates
- [ ] Permission gating
  - [ ] Middleware voor premium checks
  - [ ] UI voor locked features
  - [ ] Upgrade prompts
- [ ] Subscription dashboard
  - [ ] Current plan info
  - [ ] Payment history
  - [ ] Cancel/upgrade options

**Definition of Done**:
- ✅ User kan premium abonnement afsluiten (test mode)
- ✅ Premium features zijn locked voor free users
- ✅ Webhooks updaten subscription status correct

---

## 🧭 Milestone 4: Kompas Module - PREMIUM (Week 7-9)
**Goal**: AI-coach conversational assessment werkt

### Week 7
- [ ] Kompas intro screen
- [ ] Chat UI
  - [ ] Message bubbles (user & coach)
  - [ ] Input field met voice button
  - [ ] Typing indicator
  - [ ] Scroll to bottom on new message
- [ ] Voice input
  - [ ] Record audio
  - [ ] Whisper API integration (speech-to-text)
  - [ ] Audio playback

### Week 8
- [ ] Backend: Claude API integration
  - [ ] Conversation service
  - [ ] System prompts voor V-cirkel context
  - [ ] Streaming responses (optional)
  - [ ] Driver detection uit messages
- [ ] Real-time type indicators
  - [ ] Update tijdens gesprek
  - [ ] Show top 3 probabilities
- [ ] Conversation storage
  - [ ] Save messages to database
  - [ ] Resume conversation capability

### Week 9
- [ ] Result & insight screen
  - [ ] Conversation summary
  - [ ] Type reveal met animatie
  - [ ] Key insights uit gesprek
  - [ ] Conversation log (revisitable)
- [ ] Testing: AI responses quality
- [ ] Cost optimization (prompt caching, model selection)

**Definition of Done**:
- ✅ Premium user kan gesprek starten met AI coach
- ✅ Voice input werkt betrouwbaar
- ✅ AI stelt relevante vragen en detecteert drijfveren
- ✅ Gesprek resulteert in accuraat type

---

## 📅 Milestone 5: Journey Module - PREMIUM (Week 10-12)
**Goal**: 21-dagen reflectie-tracking met pattern recognition

### Week 10
- [ ] Journey intro & setup
- [ ] Daily reflection UI
  - [ ] Prompt of the day
  - [ ] Text input + voice memo
  - [ ] Emoji mood rating
  - [ ] Context tags (work/weekend, morning/evening)
- [ ] Push notifications
  - [ ] Daily reminder (customizable time)
  - [ ] Smart scheduling (based on usage patterns)

### Week 11
- [ ] Journey map/calendar view
  - [ ] Visualize progress
  - [ ] Completed days indicator
  - [ ] Streak counter
- [ ] Pattern insights (Week 2)
  - [ ] Backend: Pattern detection service
  - [ ] ML/keyword analysis
  - [ ] Show detected patterns to user
- [ ] Backend: Journey endpoints
  - [ ] Session CRUD
  - [ ] Reflection storage
  - [ ] Pattern detection triggers

### Week 12
- [ ] Type reveal ceremony (Day 21)
  - [ ] Special animation
  - [ ] Journey summary video/slideshow
  - [ ] PDF report generation
- [ ] Growth mode
  - [ ] Post-journey tracking
  - [ ] Goals setting
  - [ ] Progress charts
- [ ] Testing: Complete 21-day journey (accelerated)

**Definition of Done**:
- ✅ User kan dagelijkse reflectie invoeren
- ✅ Notifications werken betrouwbaar
- ✅ Patronen worden gedetecteerd en getoond
- ✅ Day 21 onthult accuraat type

---

## 🧪 Milestone 6: Testing & Polish (Week 13-14)
**Goal**: App is stable, polished en ready voor beta

### Week 13
- [ ] Unit tests
  - [ ] Assessment engine (alle scenarios)
  - [ ] Type calculator logica
  - [ ] API endpoints
- [ ] Integration tests
  - [ ] Complete assessment flows
  - [ ] Payment flows
  - [ ] Auth flows
- [ ] E2E tests (Detox or similar)
  - [ ] Happy path: Free user → Premium conversion
  - [ ] Complete Spiegel assessment
  - [ ] Start Kompas conversation

### Week 14
- [ ] UI polish
  - [ ] Animations (Lottie/Reanimated)
  - [ ] Loading states
  - [ ] Error states
  - [ ] Empty states
- [ ] Performance optimization
  - [ ] Image optimization
  - [ ] Bundle size reduction
  - [ ] API response caching
- [ ] Accessibility
  - [ ] Screen reader support
  - [ ] Font scaling
  - [ ] Color contrast
- [ ] Analytics integration (Mixpanel)
- [ ] Error tracking (Sentry)

**Definition of Done**:
- ✅ Test coverage > 70%
- ✅ No critical bugs
- ✅ App feels smooth (60fps)
- ✅ Analytics & error tracking operational

---

## 🚀 Milestone 7: Beta & Launch (Week 15-16)
**Goal**: App live in stores, eerste users

### Week 15
- [ ] App Store assets
  - [ ] Screenshots (all sizes)
  - [ ] App description (NL + EN)
  - [ ] Keywords
  - [ ] Privacy policy
  - [ ] Terms of service
- [ ] Build & deploy
  - [ ] EAS Build (iOS + Android)
  - [ ] TestFlight setup
  - [ ] Google Play Internal Testing
- [ ] Backend production deploy
  - [ ] Railway/Render deployment
  - [ ] Environment variables setup
  - [ ] Database backups
  - [ ] Monitoring & alerts

### Week 16
- [ ] Beta testing
  - [ ] Recruit 10-20 beta testers
  - [ ] Gather feedback
  - [ ] Fix critical issues
- [ ] App Store submission
  - [ ] iOS: Submit for review
  - [ ] Android: Submit for review
  - [ ] Respond to review feedback if needed
- [ ] Soft launch
  - [ ] Monitor analytics
  - [ ] Track errors
  - [ ] Gather first user feedback

**Definition of Done**:
- ✅ App approved in App Store & Play Store
- ✅ Zero critical bugs in production
- ✅ First 100 users onboarded
- ✅ Payment flow works in production

---

## 🔮 Post-Launch Roadmap (Week 17+)

### Phase 2: Growth & Optimization
- [ ] A/B testing (assessment questions, pricing)
- [ ] Referral program
- [ ] Share results feature
- [ ] In-app coaching (video content van Vcirkelacademie)
- [ ] Team assessments (B2B)
- [ ] Coach/therapeut dashboard

### Phase 3: Advanced Features
- [ ] Web app (PWA)
- [ ] Type relationship compatibility
- [ ] Growth challenges (gamification)
- [ ] Community features (forum/groups)
- [ ] API voor partners (B2B)
- [ ] Multi-language support (EN, DE, FR)

---

## 📈 Success Metrics per Milestone

| Milestone | Key Metric | Target |
|-----------|------------|--------|
| M1: Foundation | Setup time | < 2 dagen |
| M2: Spiegel | Completion rate | > 70% |
| M3: Payments | Free→Premium | 5-8% |
| M4: Kompas | Engagement | > 60% use it |
| M5: Journey | Day 21 completion | > 40% |
| M6: Testing | Test coverage | > 70% |
| M7: Launch | First 100 users | Week 1 |

---

## 🎯 Current Status

**✅ Completed:**
- Project structuur
- Database schema
- V-cirkel type definities
- Assessment engine logica
- API skeleton
- Mobile app skeleton

**🚧 In Progress:**
- Local development setup

**⏭️ Next Up:**
- Database migrations
- Seed script
- Auth implementation

---

**Laatst bijgewerkt**: 2026-02-10
**Status**: Phase 1 - Foundation ✓
