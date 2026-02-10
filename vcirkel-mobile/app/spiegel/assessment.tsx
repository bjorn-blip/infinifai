import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

// Import assessment data (simplified for MVP)
const STRESS_SCENARIOS = [
  {
    id: 'stress_1',
    scenario: 'Je hebt een belangrijke deadline gemist en je manager vraagt om uitleg. Wat voel je als eerste?',
    options: [
      { id: 'a', text: 'Ik voel me schuldig dat ik het team heb teleurgesteld', types: [2, 6] },
      { id: 'b', text: 'Ik erger me aan mezelf en ga direct analyseren wat er fout ging', types: [1, 5] },
      { id: 'c', text: 'Ik voel me geïrriteerd en zoek naar externe oorzaken', types: [8, 3] },
      { id: 'd', text: 'Ik voel paniek en maak me zorgen over alle mogelijke gevolgen', types: [6, 4] },
      { id: 'e', text: 'Ik wil het snel oplossen en verder gaan', types: [7, 3] },
    ]
  },
  {
    id: 'stress_2',
    scenario: 'Een collega krijgt een promotie die jij ook wilde. Wat gaat er door je heen?',
    options: [
      { id: 'a', text: 'Wat heb ik verkeerd gedaan? Ik had beter moeten presteren', types: [3, 1] },
      { id: 'b', text: 'Die persoon heeft iets wat ik mis. Ik voel me tekort schieten', types: [4, 2] },
      { id: 'c', text: 'Ik trek me terug om dit te verwerken zonder te laten zien hoe ik me voel', types: [5, 9] },
      { id: 'd', text: 'Het is wel prima, er komen andere kansen. Ik ga verder', types: [9, 7] },
      { id: 'e', text: 'Ik vraag me af of het eerlijk toeging en of ik loyaal genoeg ben geweest', types: [6, 2] },
    ]
  },
  {
    id: 'stress_3',
    scenario: 'Je bent uitgenodigd voor een social event maar voelt je moe. Wat doe je?',
    options: [
      { id: 'a', text: 'Ik ga, want ik wil niemand teleurstellen', types: [2, 9] },
      { id: 'b', text: 'Ik ga niet, ik heb mijn energie nodig voor mezelf', types: [5, 4] },
      { id: 'c', text: 'Ik ga kort en houd het luchtig en leuk', types: [7, 3] },
      { id: 'd', text: 'Ik twijfel lang en vraag anderen wat ze zouden doen', types: [6, 9] },
      { id: 'e', text: 'Ik overweeg niet te gaan maar zou me schuldig voelen', types: [1, 2, 6] },
    ]
  },
  {
    id: 'stress_4',
    scenario: 'Iemand bekritiseert jouw werk openlijk. Hoe reageer je innerlijk?',
    options: [
      { id: 'a', text: 'Ik voel me onbegrepen en persoonlijk aangevallen', types: [4, 2] },
      { id: 'b', text: 'Ik ga in verdediging of val aan', types: [8, 6] },
      { id: 'c', text: 'Ik neem het ter harte en analyseer wat ik fout deed', types: [1, 6] },
      { id: 'd', text: 'Ik rationaliseer het weg en focus op positieven', types: [7, 3] },
      { id: 'e', text: 'Ik zeg "je hebt gelijk" maar voel innerlijke weerstand', types: [9, 5] },
    ]
  },
]

const AVOIDANCE_OPTIONS = [
  { id: 'conflict', text: 'Conflict en confrontatie', primaryType: 9 },
  { id: 'failure', text: 'Falen en imagoschade', primaryType: 3 },
  { id: 'imperfection', text: 'Fouten en imperfectie', primaryType: 1 },
  { id: 'ordinariness', text: 'Gewoonheid en oppervlakkigheid', primaryType: 4 },
  { id: 'dependency', text: 'Afhankelijkheid van anderen', primaryType: 5 },
  { id: 'uncertainty', text: 'Onzekerheid en risico', primaryType: 6 },
  { id: 'pain', text: 'Pijn en beperkingen', primaryType: 7 },
  { id: 'weakness', text: 'Zwakte en kwetsbaarheid', primaryType: 8 },
  { id: 'neediness', text: 'Eigen behoeftigheid tonen', primaryType: 2 },
]

export default function Assessment() {
  const router = useRouter()
  const [phase, setPhase] = useState<1 | 2 | 3>(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<number, number>>({})
  const [selectedAvoidance, setSelectedAvoidance] = useState<string | null>(null)

  const handleStressAnswer = (types: number[]) => {
    // Update scores
    const newScores = { ...scores }
    types.forEach(type => {
      newScores[type] = (newScores[type] || 0) + 1
    })
    setScores(newScores)

    // Move to next question or phase
    if (currentQuestion < STRESS_SCENARIOS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setPhase(2)
    }
  }

  const handleAvoidanceSelect = (optionId: string, primaryType: number) => {
    setSelectedAvoidance(optionId)
    // Give heavy weight to avoidance
    const newScores = { ...scores }
    newScores[primaryType] = (newScores[primaryType] || 0) + 5
    setScores(newScores)
  }

  const handleAvoidanceContinue = () => {
    if (selectedAvoidance) {
      setPhase(3)
    }
  }

  const handleComplete = () => {
    // Calculate result
    const sortedTypes = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([type]) => parseInt(type))

    const primaryType = sortedTypes[0] || 9

    // Navigate to result with type
    router.push(`/spiegel/result?type=${primaryType}`)
  }

  // Phase 1: Stress Scenarios
  if (phase === 1) {
    const scenario = STRESS_SCENARIOS[currentQuestion]

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.gradient}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backText}>← Terug</Text>
            </TouchableOpacity>
            <View style={styles.progress}>
              <Text style={styles.progressText}>
                Fase 1: Stress-Spotlicht ({currentQuestion + 1}/{STRESS_SCENARIOS.length})
              </Text>
            </View>
          </View>

          <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.questionText}>{scenario.scenario}</Text>

            <View style={styles.optionsContainer}>
              {scenario.options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.optionButton}
                  onPress={() => handleStressAnswer(option.types)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.optionText}>{option.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    )
  }

  // Phase 2: Avoidance Detector
  if (phase === 2) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.gradient}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backText}>← Terug</Text>
            </TouchableOpacity>
            <View style={styles.progress}>
              <Text style={styles.progressText}>Fase 2: Vermijding-Detector</Text>
            </View>
          </View>

          <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.questionText}>
              Wat vermijd je het meest in je leven? Kies het antwoord dat je het sterkst voelt.
            </Text>

            <View style={styles.optionsContainer}>
              {AVOIDANCE_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedAvoidance === option.id && styles.optionButtonSelected
                  ]}
                  onPress={() => handleAvoidanceSelect(option.id, option.primaryType)}
                  activeOpacity={0.8}
                >
                  <Text style={[
                    styles.optionText,
                    selectedAvoidance === option.id && styles.optionTextSelected
                  ]}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {selectedAvoidance && (
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleAvoidanceContinue}
                activeOpacity={0.9}
              >
                <Text style={styles.continueButtonText}>Ga verder →</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    )
  }

  // Phase 3: Driver Validation (simplified - just completion)
  if (phase === 3) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.gradient}>
          <View style={styles.header}>
            <View style={styles.progress}>
              <Text style={styles.progressText}>Fase 3: Drijfveer-Validatie</Text>
            </View>
          </View>

          <View style={styles.completionContent}>
            <Text style={styles.completionIcon}>✨</Text>
            <Text style={styles.completionTitle}>Goed gedaan!</Text>
            <Text style={styles.completionText}>
              Je hebt alle vragen beantwoord. We hebben nu voldoende informatie om je V-cirkel type te bepalen.
            </Text>

            <TouchableOpacity
              style={styles.resultsButton}
              onPress={handleComplete}
              activeOpacity={0.9}
            >
              <Text style={styles.resultsButtonText}>Bekijk je Resultaat</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  backButton: {
    padding: 8,
    marginBottom: 10,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  progress: {
    alignItems: 'center',
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  questionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 30,
    lineHeight: 32,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionButtonSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  optionTextSelected: {
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: '#6366F1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  completionContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  completionIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  completionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  completionText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    opacity: 0.9,
    marginBottom: 40,
  },
  resultsButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  resultsButtonText: {
    color: '#6366F1',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
