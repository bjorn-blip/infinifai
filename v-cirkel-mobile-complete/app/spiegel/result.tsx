import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

// Type data (from shared/vcirkel-types.ts - simplified)
const TYPE_DATA: Record<number, any> = {
  1: {
    name: 'De Perfectionist',
    ideaalbeeld: 'Als ik het juiste doe en mijn normen strikt naleef, ben ik perfect en mag ik er zijn',
    verslaving: 'Woede (op de imperfecte realiteit)',
    verleiding: 'Perfectie (alles volgens eigen norm doen)',
    vermijding: 'Imperfectie (fouten, kritiek)',
    verdediging: 'Reactieformatie (beheersing)',
  },
  2: {
    name: 'De Helper',
    ideaalbeeld: 'Als ik mij richt op de behoeften van anderen, verdien ik liefde en ben ik nodig',
    verslaving: 'Trots (gevoel belangrijk te zijn voor anderen)',
    verleiding: 'Nodig zijn (ongevraagd helpen)',
    vermijding: 'Behoeftigheid (zelf hulp nodig hebben)',
    verdediging: 'Onderdrukken (eigen behoeften negeren)',
  },
  3: {
    name: 'De Bereiker',
    ideaalbeeld: 'Als ik mijn doelen haal en presteer, ben ik succesvol en word ik erkend',
    verslaving: 'Bedrog (geloof dat alles maakbaar is)',
    verleiding: 'Succes (zichtbare resultaten)',
    vermijding: 'Falen (imagoschade, doelen niet halen)',
    verdediging: 'Identificatie (kameleon-gedrag)',
  },
  4: {
    name: 'De Individualist',
    ideaalbeeld: 'Als ik echt mezelf ben en me onderscheid, ben ik uniek en word ik niet afgewezen',
    verslaving: 'Afgunst (negatief vergelijken)',
    verleiding: 'Echtheid (intensiteit, doorvoelen)',
    vermijding: 'Alledaagsheid (sleur, vlakheid)',
    verdediging: 'Onderscheiden (anders doen)',
  },
  5: {
    name: 'De Waarnemer',
    ideaalbeeld: 'Als ik de wereld begrijp, blijf ik onafhankelijk van de emotionele wereld',
    verslaving: 'Hebzucht (potten van energie, tijd, kennis)',
    verleiding: 'Kennis (objectieve feiten verzamelen)',
    vermijding: 'Afhankelijkheid (emotionele claims)',
    verdediging: 'Terugtrekken (afstand nemen)',
  },
  6: {
    name: 'De Loyalist',
    ideaalbeeld: 'Als ik loyaal ben en inspeel op verwachtingen, ben ik veilig',
    verslaving: 'Angst (constante innerlijke onrust)',
    verleiding: 'Veiligheid/Zekerheid (bevestiging zoeken)',
    vermijding: 'Onzekerheid (fouten maken, risico\'s)',
    verdediging: 'Projecteren (doemdenken)',
  },
  7: {
    name: 'De Levensgenieter',
    ideaalbeeld: 'Als ik leuke dingen doe en geprikkeld word, houd ik het plezierig',
    verslaving: 'Onmatigheid (meer, meer, meer)',
    verleiding: 'Plezier (opties openhouden, vrijheid)',
    vermijding: 'Pijn (beperkingen, verplichtingen)',
    verdediging: 'Rationalisatie (pijn wegredeneren)',
  },
  8: {
    name: 'De Uitdager',
    ideaalbeeld: 'Als ik op mezelf vertrouw en geen invloed toelaat, sta ik in mijn kracht',
    verslaving: 'Lust (energie, directe bevrediging)',
    verleiding: 'Kracht (controle, zelf bepalen)',
    vermijding: 'Kwetsbaarheid (afhankelijkheid, zwakte tonen)',
    verdediging: 'Ontkennen (van pijn, vermoeidheid)',
  },
  9: {
    name: 'De Vredestichter',
    ideaalbeeld: 'Als ik mijzelf tevreden houd en onbelangrijk maak, bewaar ik de rust',
    verslaving: 'Luiheid (spiritueel: jezelf niet laten zien)',
    verleiding: 'Harmonie (meegaan met de flow)',
    vermijding: 'Conflict (boosheid, gedoe, spanning)',
    verdediging: 'Verdoven (afvlakken, uitstellen)',
  },
}

const TYPE_EMOJIS: Record<number, string> = {
  1: '⚖️',
  2: '❤️',
  3: '⭐',
  4: '🎨',
  5: '🔍',
  6: '🛡️',
  7: '🎉',
  8: '💪',
  9: '☮️',
}

export default function Result() {
  const router = useRouter()
  const params = useLocalSearchParams()
  const typeNumber = parseInt(params.type as string) || 9

  const typeData = TYPE_DATA[typeNumber]
  const emoji = TYPE_EMOJIS[typeNumber]

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.gradient}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
            <Text style={styles.backText}>← Home</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Type Reveal */}
          <View style={styles.revealSection}>
            <Text style={styles.revealLabel}>Jouw V-cirkel type is:</Text>
            <View style={styles.typeCard}>
              <Text style={styles.typeEmoji}>{emoji}</Text>
              <Text style={styles.typeName}>Type {typeNumber}</Text>
              <Text style={styles.typeTitle}>{typeData.name}</Text>
            </View>
          </View>

          {/* V-Circle Components */}
          <View style={styles.vCircleSection}>
            <Text style={styles.sectionTitle}>Jouw V-Cirkel</Text>

            <View style={styles.componentCard}>
              <View style={styles.componentHeader}>
                <Text style={styles.componentIcon}>💭</Text>
                <Text style={styles.componentLabel}>Ideaalbeeld</Text>
              </View>
              <Text style={styles.componentText}>{typeData.ideaalbeeld}</Text>
            </View>

            <View style={styles.componentCard}>
              <View style={styles.componentHeader}>
                <Text style={styles.componentIcon}>🔥</Text>
                <Text style={styles.componentLabel}>Verslaving</Text>
              </View>
              <Text style={styles.componentText}>{typeData.verslaving}</Text>
            </View>

            <View style={styles.componentCard}>
              <View style={styles.componentHeader}>
                <Text style={styles.componentIcon}>🎯</Text>
                <Text style={styles.componentLabel}>Verleiding</Text>
              </View>
              <Text style={styles.componentText}>{typeData.verleiding}</Text>
            </View>

            <View style={styles.componentCard}>
              <View style={styles.componentHeader}>
                <Text style={styles.componentIcon}>🚫</Text>
                <Text style={styles.componentLabel}>Vermijding</Text>
              </View>
              <Text style={styles.componentText}>{typeData.vermijding}</Text>
            </View>

            <View style={styles.componentCard}>
              <View style={styles.componentHeader}>
                <Text style={styles.componentIcon}>🛡️</Text>
                <Text style={styles.componentLabel}>Verdediging</Text>
              </View>
              <Text style={styles.componentText}>{typeData.verdediging}</Text>
            </View>
          </View>

          {/* Upgrade CTA */}
          <View style={styles.upgradeSection}>
            <LinearGradient
              colors={['#10B981', '#06B6D4']}
              style={styles.upgradeCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.upgradeEmoji}>💬</Text>
              <Text style={styles.upgradeTitle}>Wil je meer weten?</Text>
              <Text style={styles.upgradeText}>
                Krijg toegang tot de V-Cirkel Coach en stel al je vragen over jouw type, drijfveren, en hoe je met anderen omgaat.
              </Text>
              <TouchableOpacity
                style={styles.upgradeButton}
                onPress={() => router.push('/coach')}
                activeOpacity={0.9}
              >
                <Text style={styles.upgradeButtonText}>Probeer Premium →</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/* Actions */}
          <View style={styles.actionsSection}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/spiegel')}
              activeOpacity={0.8}
            >
              <Text style={styles.actionButtonText}>Opnieuw Doen</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.actionButtonPrimary]}
              onPress={() => router.push('/')}
              activeOpacity={0.8}
            >
              <Text style={[styles.actionButtonText, styles.actionButtonTextPrimary]}>
                Terug naar Home
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  revealSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  revealLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 16,
  },
  typeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  typeEmoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  typeName: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
  },
  typeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  vCircleSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  componentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  componentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  componentIcon: {
    fontSize: 20,
  },
  componentLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  componentText: {
    fontSize: 15,
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 22,
  },
  upgradeSection: {
    marginBottom: 30,
  },
  upgradeCard: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  upgradeEmoji: {
    fontSize: 50,
    marginBottom: 12,
  },
  upgradeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  upgradeText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.95,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  upgradeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    paddingHorizontal: 32,
  },
  upgradeButtonText: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionsSection: {
    gap: 12,
  },
  actionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  actionButtonPrimary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButtonTextPrimary: {
    color: '#6366F1',
  },
})
