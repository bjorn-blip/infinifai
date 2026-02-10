/**
 * Home Screen - Module overzicht
 */

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>V-Cirkel</Text>
          <Text style={styles.subtitle}>Ontdek je drijfveren</Text>
        </View>

        {/* Module Cards */}
        <View style={styles.modulesContainer}>
          {/* Spiegel - Free */}
          <TouchableOpacity
            style={styles.moduleCard}
            onPress={() => router.push('/spiegel')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#6366F1', '#8B5CF6']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.badge}>
                <Text style={styles.badgeText}>GRATIS</Text>
              </View>
              <Text style={styles.moduleTitle}>🪞 Spiegel</Text>
              <Text style={styles.moduleDescription}>
                Ontdek je V-cirkel type in 15 minuten via scenario's en drijfveren.
              </Text>
              <View style={styles.featureList}>
                <Text style={styles.feature}>✓ Stress-scenario's</Text>
                <Text style={styles.feature}>✓ Vermijding-analyse</Text>
                <Text style={styles.feature}>✓ Volledige V-cirkel</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Innerlijk Kompas - Premium */}
          <TouchableOpacity
            style={styles.moduleCard}
            onPress={() => router.push('/kompas')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#EC4899', '#F59E0B']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={[styles.badge, styles.premiumBadge]}>
                <Text style={styles.badgeText}>PREMIUM</Text>
              </View>
              <Text style={styles.moduleTitle}>🧭 Innerlijk Kompas</Text>
              <Text style={styles.moduleDescription}>
                AI-coach die je drijfveren ontdekt via een persoonlijk gesprek.
              </Text>
              <View style={styles.featureList}>
                <Text style={styles.feature}>✓ AI conversatie</Text>
                <Text style={styles.feature}>✓ Voice input</Text>
                <Text style={styles.feature}>✓ Diepere analyse</Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.price}>€9.99/maand</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* 21 Dagen - Premium */}
          <TouchableOpacity
            style={styles.moduleCard}
            onPress={() => router.push('/journey')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#10B981', '#3B82F6']}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={[styles.badge, styles.premiumBadge]}>
                <Text style={styles.badgeText}>PREMIUM</Text>
              </View>
              <Text style={styles.moduleTitle}>📅 21 Dagen Zelfinzicht</Text>
              <Text style={styles.moduleDescription}>
                Ontdek je patronen door dagelijkse reflecties over 3 weken.
              </Text>
              <View style={styles.featureList}>
                <Text style={styles.feature}>✓ Dagelijkse prompts</Text>
                <Text style={styles.feature}>✓ Patroon-herkenning</Text>
                <Text style={styles.feature}>✓ Groei-tracking</Text>
              </View>
              <View style={styles.priceTag}>
                <Text style={styles.price}>€9.99/maand</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Gebaseerd op de V-cirkel methodiek van Vcirkelacademie.nl
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
  },
  modulesContainer: {
    gap: 20,
  },
  moduleCard: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  gradient: {
    padding: 24,
    minHeight: 240,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  premiumBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  moduleTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  moduleDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.95,
    marginBottom: 16,
    lineHeight: 22,
  },
  featureList: {
    gap: 6,
  },
  feature: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  priceTag: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
})
