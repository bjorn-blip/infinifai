import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SpiegelIntro() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#6366F1', '#8B5CF6']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Terug</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🪞</Text>
          </View>

          <Text style={styles.title}>Spiegel</Text>
          <Text style={styles.subtitle}>Ontdek je V-cirkel type</Text>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Hoe werkt het?</Text>

            <View style={styles.phaseContainer}>
              <View style={styles.phaseItem}>
                <View style={styles.phaseNumber}>
                  <Text style={styles.phaseNumberText}>1</Text>
                </View>
                <View style={styles.phaseContent}>
                  <Text style={styles.phaseTitle}>Stress-Spotlicht</Text>
                  <Text style={styles.phaseDescription}>
                    Reageer op scenario's die je automatische piloot onthullen
                  </Text>
                </View>
              </View>

              <View style={styles.phaseItem}>
                <View style={styles.phaseNumber}>
                  <Text style={styles.phaseNumberText}>2</Text>
                </View>
                <View style={styles.phaseContent}>
                  <Text style={styles.phaseTitle}>Vermijding-Detector</Text>
                  <Text style={styles.phaseDescription}>
                    Wat probeer je koste wat kost te vermijden?
                  </Text>
                </View>
              </View>

              <View style={styles.phaseItem}>
                <View style={styles.phaseNumber}>
                  <Text style={styles.phaseNumberText}>3</Text>
                </View>
                <View style={styles.phaseContent}>
                  <Text style={styles.phaseTitle}>Drijfveer-Validatie</Text>
                  <Text style={styles.phaseDescription}>
                    Bevestig je type met gerichte "waarom" vragen
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.timeEstimate}>
              <Text style={styles.timeText}>⏱️ Circa 15 minuten</Text>
            </View>
          </View>

          {/* Start Button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push('/spiegel/assessment')}
            activeOpacity={0.9}
          >
            <Text style={styles.startButtonText}>Start Assessment</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            Focus op WAAROM je iets doet, niet WAT je doet.{'\n'}
            Kies het antwoord dat het meest resoneert.
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
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
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 40,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  phaseContainer: {
    gap: 20,
  },
  phaseItem: {
    flexDirection: 'row',
    gap: 16,
  },
  phaseNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phaseNumberText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phaseContent: {
    flex: 1,
  },
  phaseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  phaseDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    lineHeight: 20,
  },
  timeEstimate: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  startButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  startButtonText: {
    color: '#6366F1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disclaimer: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 20,
  },
})
