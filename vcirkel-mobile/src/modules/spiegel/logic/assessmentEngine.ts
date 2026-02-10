/**
 * Spiegel Assessment Engine
 *
 * Deze engine analyseert antwoorden van de gebruiker en bepaalt het V-cirkel type
 * op basis van drijfveren (niet gedrag).
 */

export interface AssessmentResponse {
  questionId: string
  selectedOption: string
  metadata?: Record<string, any>
}

export interface TypeScore {
  typeNumber: number
  score: number
  confidence: number
  reasoning: string[]
}

export interface AssessmentResult {
  primaryType: number
  secondaryType?: number
  allScores: TypeScore[]
  confidenceScore: number
}

// ============================================
// FASE 1: STRESS SCENARIOS
// ============================================

/**
 * Stress scenarios onthullen de automatische piloot (drijfveren onder druk)
 */
export const STRESS_SCENARIOS = [
  {
    id: 'stress_1',
    scenario: 'Je hebt een belangrijke deadline gemist en je manager vraagt om uitleg. Wat voel je als eerste?',
    options: [
      {
        id: 'stress_1_a',
        text: 'Ik voel me schuldig dat ik het team heb teleurgesteld',
        markers: { 2: 0.8, 6: 0.3 }, // Type 2: schuld naar anderen, Type 6: verantwoordelijkheid
        driver: 'behoefte aan waardering'
      },
      {
        id: 'stress_1_b',
        text: 'Ik erger me aan mezelf en ga direct analyseren wat er fout ging',
        markers: { 1: 0.9, 5: 0.4 }, // Type 1: zelfkritiek, Type 5: analyse
        driver: 'perfectionisme'
      },
      {
        id: 'stress_1_c',
        text: 'Ik voel me geïrriteerd en zoek naar externe oorzaken',
        markers: { 8: 0.7, 3: 0.3 }, // Type 8: externe focus, Type 3: imagobescherming
        driver: 'controle behouden'
      },
      {
        id: 'stress_1_d',
        text: 'Ik voel paniek en maak me zorgen over alle mogelijke gevolgen',
        markers: { 6: 0.9, 4: 0.2 }, // Type 6: angst, Type 4: negatieve focus
        driver: 'zekerheid zoeken'
      },
      {
        id: 'stress_1_e',
        text: 'Ik wil het snel oplossen en verder gaan',
        markers: { 7: 0.7, 3: 0.6 }, // Type 7: vermijden negatief, Type 3: actiegericht
        driver: 'vermijden van pijn'
      }
    ]
  },
  {
    id: 'stress_2',
    scenario: 'Een collega krijgt een promotie die jij ook wilde. Wat gaat er door je heen?',
    options: [
      {
        id: 'stress_2_a',
        text: 'Wat heb ik verkeerd gedaan? Ik had beter moeten presteren',
        markers: { 3: 0.8, 1: 0.5 },
        driver: 'faalangst'
      },
      {
        id: 'stress_2_b',
        text: 'Die persoon heeft iets wat ik mis. Ik voel me tekort schieten',
        markers: { 4: 0.9, 2: 0.2 },
        driver: 'gevoel van ontberen'
      },
      {
        id: 'stress_2_c',
        text: 'Ik trek me terug om dit te verwerken zonder te laten zien hoe ik me voel',
        markers: { 5: 0.8, 9: 0.3 },
        driver: 'emotionele afhankelijkheid vermijden'
      },
      {
        id: 'stress_2_d',
        text: 'Het is wel prima, er komen andere kansen. Ik ga verder',
        markers: { 9: 0.7, 7: 0.5 },
        driver: 'conflict vermijden'
      },
      {
        id: 'stress_2_e',
        text: 'Ik vraag me af of het eerlijk toeging en of ik loyaal genoeg ben geweest',
        markers: { 6: 0.7, 2: 0.3 },
        driver: 'loyaliteit en zekerheid'
      }
    ]
  },
  {
    id: 'stress_3',
    scenario: 'Je bent uitgenodigd voor een social event maar voelt je moe. Wat doe je?',
    options: [
      {
        id: 'stress_3_a',
        text: 'Ik ga, want ik wil niemand teleurstellen',
        markers: { 2: 0.8, 9: 0.5 },
        driver: 'nodig zijn'
      },
      {
        id: 'stress_3_b',
        text: 'Ik ga niet, ik heb mijn energie nodig voor mezelf',
        markers: { 5: 0.9, 4: 0.3 },
        driver: 'autonomie'
      },
      {
        id: 'stress_3_c',
        text: 'Ik ga kort en houd het luchtig en leuk',
        markers: { 7: 0.8, 3: 0.4 },
        driver: 'plezier behouden'
      },
      {
        id: 'stress_3_d',
        text: 'Ik twijfel lang en vraag anderen wat ze zouden doen',
        markers: { 6: 0.8, 9: 0.3 },
        driver: 'externe validatie'
      },
      {
        id: 'stress_3_e',
        text: 'Ik overweeg niet te gaan maar zou me schuldig voelen',
        markers: { 1: 0.6, 2: 0.5, 6: 0.4 },
        driver: 'verantwoordelijkheidsgevoel'
      }
    ]
  },
  {
    id: 'stress_4',
    scenario: 'Iemand bekritiseert jouw werk openlijk. Hoe reageer je innerlijk?',
    options: [
      {
        id: 'stress_4_a',
        text: 'Ik voel me onbegrepen en persoonlijk aangevallen',
        markers: { 4: 0.9, 2: 0.3 },
        driver: 'unieke identiteit beschermen'
      },
      {
        id: 'stress_4_b',
        text: 'Ik ga in verdediging of val aan',
        markers: { 8: 0.9, 6: 0.4 },
        driver: 'kwetsbaarheid vermijden'
      },
      {
        id: 'stress_4_c',
        text: 'Ik neem het ter harte en analyseer wat ik fout deed',
        markers: { 1: 0.9, 6: 0.5 },
        driver: 'fout vermijden'
      },
      {
        id: 'stress_4_d',
        text: 'Ik rationaliseer het weg en focus op positieven',
        markers: { 7: 0.8, 3: 0.4 },
        driver: 'negatief vermijden'
      },
      {
        id: 'stress_4_e',
        text: 'Ik zeg "je hebt gelijk" maar voel innerlijke weerstand',
        markers: { 9: 0.8, 5: 0.3 },
        driver: 'harmonie behouden'
      }
    ]
  }
]

// ============================================
// FASE 2: VERMIJDING DETECTOR (Sterkste Indicator!)
// ============================================

/**
 * Vermijding is de krachtigste indicator - wat vermijd je koste wat kost?
 */
export const AVOIDANCE_OPTIONS = [
  {
    id: 'avoid_conflict',
    text: 'Conflict en confrontatie',
    description: 'Spanning, botsingen, gedoe',
    primaryTypes: [9], // Sterke indicator
    secondaryTypes: [2, 6] // Kan ook
  },
  {
    id: 'avoid_failure',
    text: 'Falen en imagoschade',
    description: 'Gezichtsverlies, doelen niet halen',
    primaryTypes: [3],
    secondaryTypes: [1, 8]
  },
  {
    id: 'avoid_imperfection',
    text: 'Fouten en imperfectie',
    description: 'Dingen verkeerd doen, kritiek krijgen',
    primaryTypes: [1],
    secondaryTypes: [3, 6]
  },
  {
    id: 'avoid_ordinariness',
    text: 'Gewoonheid en oppervlakkigheid',
    description: 'Alledaags zijn, niet speciaal zijn',
    primaryTypes: [4],
    secondaryTypes: []
  },
  {
    id: 'avoid_dependency',
    text: 'Afhankelijkheid van anderen',
    description: 'Emotionele claims, hulp moeten vragen',
    primaryTypes: [5],
    secondaryTypes: [8]
  },
  {
    id: 'avoid_uncertainty',
    text: 'Onzekerheid en risico',
    description: 'Geen controle, onvoorspelbaarheid',
    primaryTypes: [6],
    secondaryTypes: [1, 5]
  },
  {
    id: 'avoid_pain',
    text: 'Pijn en beperkingen',
    description: 'Negatieve emoties, vastzitten',
    primaryTypes: [7],
    secondaryTypes: [3]
  },
  {
    id: 'avoid_weakness',
    text: 'Zwakte en kwetsbaarheid',
    description: 'Je zacht tonen, controle verliezen',
    primaryTypes: [8],
    secondaryTypes: [1, 3]
  },
  {
    id: 'avoid_neediness',
    text: 'Eigen behoeftigheid tonen',
    description: 'Zelf hulp vragen, egoïstisch zijn',
    primaryTypes: [2],
    secondaryTypes: [9]
  }
]

// ============================================
// FASE 3: DRIJFVEER VALIDATIE
// ============================================

/**
 * Valideer de top 2-3 types met gerichte "waarom" vragen
 */
export const DRIVER_QUESTIONS = [
  // Type 1 validatie
  {
    id: 'driver_1',
    targetTypes: [1],
    question: 'Als je iets "verkeerd" doet, wat voelt dat dan voor jou?',
    options: [
      { text: 'Ik heb het gevoel dat ik niet goed genoeg ben', score: 1.0 },
      { text: 'Ik heb iemand anders teleurgesteld', score: 0.3 },
      { text: 'Het maakt me niet zoveel uit', score: 0.0 }
    ]
  },
  // Type 2 validatie
  {
    id: 'driver_2',
    targetTypes: [2],
    question: 'Waarom help je anderen?',
    options: [
      { text: 'Omdat ik me daardoor geliefd en nodig voel', score: 1.0 },
      { text: 'Omdat het mijn verantwoordelijkheid is', score: 0.3 },
      { text: 'Alleen als ik er zelf ook baat bij heb', score: 0.0 }
    ]
  },
  // Type 3 validatie
  {
    id: 'driver_3',
    targetTypes: [3],
    question: 'Waar haal je je eigenwaarde uit?',
    options: [
      { text: 'Uit wat ik presteer en bereik', score: 1.0 },
      { text: 'Uit hoe anderen mij waarderen', score: 0.4 },
      { text: 'Uit wie ik ben als persoon', score: 0.0 }
    ]
  },
  // Type 4 validatie
  {
    id: 'driver_4',
    targetTypes: [4],
    question: 'Hoe voel je je als mensen je niet "zien" of begrijpen?',
    options: [
      { text: 'Diep geraakt en eenzaam', score: 1.0 },
      { text: 'Een beetje teleurgesteld', score: 0.3 },
      { text: 'Maakt me niet zoveel uit', score: 0.0 }
    ]
  },
  // Type 5 validatie
  {
    id: 'driver_5',
    targetTypes: [5],
    question: 'Waarom trek je je terug als het druk wordt?',
    options: [
      { text: 'Om mijn energie te bewaren en overzicht te krijgen', score: 1.0 },
      { text: 'Om conflict te vermijden', score: 0.2 },
      { text: 'Dat doe ik niet, ik blijf juist', score: 0.0 }
    ]
  },
  // Type 6 validatie
  {
    id: 'driver_6',
    targetTypes: [6],
    question: 'Waarom twijfel je vaak aan je beslissingen?',
    options: [
      { text: 'Omdat ik bang ben dat ik de verkeerde keuze maak', score: 1.0 },
      { text: 'Omdat ik perfectionistisch ben', score: 0.3 },
      { text: 'Ik twijfel eigenlijk zelden', score: 0.0 }
    ]
  },
  // Type 7 validatie
  {
    id: 'driver_7',
    targetTypes: [7],
    question: 'Waarom houd je zoveel opties open?',
    options: [
      { text: 'Omdat ik me vrij wil voelen en niets wil missen', score: 1.0 },
      { text: 'Omdat ik perfectionistisch ben in keuzes maken', score: 0.2 },
      { text: 'Dat doe ik niet, ik commit makkelijk', score: 0.0 }
    ]
  },
  // Type 8 validatie
  {
    id: 'driver_8',
    targetTypes: [8],
    question: 'Waarom vind je het moeilijk om kwetsbaarheid te tonen?',
    options: [
      { text: 'Omdat dat zwakte betekent en ik mijn kracht wil behouden', score: 1.0 },
      { text: 'Omdat ik niet afhankelijk wil zijn', score: 0.6 },
      { text: 'Dat vind ik niet moeilijk', score: 0.0 }
    ]
  },
  // Type 9 validatie
  {
    id: 'driver_9',
    targetTypes: [9],
    question: 'Waarom vermijd je conflict?',
    options: [
      { text: 'Omdat het mijn innerlijke rust verstoort en ik harmonie wil', score: 1.0 },
      { text: 'Omdat ik bang ben voor de gevolgen', score: 0.4 },
      { text: 'Ik vermijd conflict niet per se', score: 0.0 }
    ]
  }
]

// ============================================
// SCORING ALGORITME
// ============================================

export class AssessmentEngine {
  private typeScores: Map<number, number> = new Map()
  private reasoning: Map<number, string[]> = new Map()

  constructor() {
    // Initialize all types with 0
    for (let i = 1; i <= 9; i++) {
      this.typeScores.set(i, 0)
      this.reasoning.set(i, [])
    }
  }

  /**
   * Verwerk antwoord uit Fase 1 (Stress Scenarios)
   */
  processStressResponse(questionId: string, optionId: string): void {
    const question = STRESS_SCENARIOS.find(q => q.id === questionId)
    if (!question) return

    const option = question.options.find(o => o.id === optionId)
    if (!option) return

    // Add scores based on markers
    Object.entries(option.markers).forEach(([type, score]) => {
      const typeNum = parseInt(type)
      const currentScore = this.typeScores.get(typeNum) || 0
      this.typeScores.set(typeNum, currentScore + score)

      // Add reasoning
      const reasons = this.reasoning.get(typeNum) || []
      reasons.push(`Stress-reactie: ${option.driver}`)
      this.reasoning.set(typeNum, reasons)
    })
  }

  /**
   * Verwerk antwoord uit Fase 2 (Vermijding) - STERKSTE INDICATOR!
   */
  processAvoidanceResponse(avoidanceId: string, intensity: number = 1): void {
    const avoidance = AVOIDANCE_OPTIONS.find(a => a.id === avoidanceId)
    if (!avoidance) return

    // Primary types krijgen hoge score
    avoidance.primaryTypes.forEach(type => {
      const currentScore = this.typeScores.get(type) || 0
      this.typeScores.set(type, currentScore + (3.0 * intensity)) // Vermijding weegt zwaar!

      const reasons = this.reasoning.get(type) || []
      reasons.push(`Sterke vermijding: ${avoidance.text}`)
      this.reasoning.set(type, reasons)
    })

    // Secondary types krijgen lagere score
    avoidance.secondaryTypes.forEach(type => {
      const currentScore = this.typeScores.get(type) || 0
      this.typeScores.set(type, currentScore + (1.0 * intensity))

      const reasons = this.reasoning.get(type) || []
      reasons.push(`Mogelijke vermijding: ${avoidance.text}`)
      this.reasoning.set(type, reasons)
    })
  }

  /**
   * Verwerk antwoord uit Fase 3 (Driver Validatie)
   */
  processDriverResponse(questionId: string, selectedOptionIndex: number): void {
    const question = DRIVER_QUESTIONS.find(q => q.id === questionId)
    if (!question) return

    const option = question.options[selectedOptionIndex]
    if (!option) return

    // Add score to target types
    question.targetTypes.forEach(type => {
      const currentScore = this.typeScores.get(type) || 0
      this.typeScores.set(type, currentScore + (option.score * 2.0)) // Driver vragen wegen ook zwaar

      if (option.score > 0.5) {
        const reasons = this.reasoning.get(type) || []
        reasons.push(`Drijfveer bevestigd: ${question.question}`)
        this.reasoning.set(type, reasons)
      }
    })
  }

  /**
   * Bereken het finale resultaat
   */
  calculateResult(): AssessmentResult {
    // Convert to array and sort
    const sortedScores: TypeScore[] = Array.from(this.typeScores.entries())
      .map(([typeNumber, score]) => ({
        typeNumber,
        score,
        confidence: this.calculateConfidence(typeNumber, score),
        reasoning: this.reasoning.get(typeNumber) || []
      }))
      .sort((a, b) => b.score - a.score)

    const primaryType = sortedScores[0].typeNumber
    const secondaryType = sortedScores[1].score > sortedScores[0].score * 0.6
      ? sortedScores[1].typeNumber
      : undefined

    // Calculate overall confidence
    const topScore = sortedScores[0].score
    const secondScore = sortedScores[1].score
    const gap = topScore - secondScore
    const confidenceScore = Math.min(0.95, 0.5 + (gap / topScore) * 0.5)

    return {
      primaryType,
      secondaryType,
      allScores: sortedScores,
      confidenceScore: parseFloat(confidenceScore.toFixed(2))
    }
  }

  /**
   * Bereken confidence voor een specifiek type
   */
  private calculateConfidence(typeNumber: number, score: number): number {
    const maxPossibleScore = 20 // Rough estimate
    const confidence = Math.min(1.0, score / maxPossibleScore)
    return parseFloat(confidence.toFixed(2))
  }

  /**
   * Reset engine voor nieuwe assessment
   */
  reset(): void {
    this.typeScores.clear()
    this.reasoning.clear()
    for (let i = 1; i <= 9; i++) {
      this.typeScores.set(i, 0)
      this.reasoning.set(i, [])
    }
  }
}

// Export singleton instance
export const assessmentEngine = new AssessmentEngine()
