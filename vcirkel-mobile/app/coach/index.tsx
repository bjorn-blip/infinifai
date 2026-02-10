import { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Mock AI responses for demo
const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()

  if (lowerMessage.includes('type') && (lowerMessage.includes('1') || lowerMessage.includes('perfectionist'))) {
    return 'Type 1, de Perfectionist, wordt gedreven door de behoefte om perfect te zijn en fouten te vermijden. Hun ideaalbeeld is: "Als ik het juiste doe en mijn normen strikt naleef, ben ik perfect en mag ik er zijn."\n\nZe hebben een strenge innerlijke criticus die constant zegt: "Het kan altijd beter." Dit komt voort uit hun verslaving aan "woede" - niet uitgesproken woede, maar een constante irritatie over de imperfecte realiteit.\n\nWil je weten hoe je met een Type 1 omgaat, of heb je andere vragen over dit type?'
  }

  if (lowerMessage.includes('type') && (lowerMessage.includes('2') || lowerMessage.includes('helper'))) {
    return 'Type 2, de Helper, wordt gedreven door de behoefte om geliefd en nodig te zijn. Ze focussen op de behoeften van anderen en hebben moeite met hun eigen behoeften herkennen.\n\nHun vermijding is "behoeftigheid" - ze kunnen moeilijk hulp vragen omdat dat zou betekenen dat ze zwak zijn. Herken je dit patroon? Hoe ervaar je dit?'
  }

  if (lowerMessage.includes('omgaan') || lowerMessage.includes('partner') || lowerMessage.includes('collega')) {
    return 'Om effectief om te gaan met iemands V-cirkel type, is het belangrijk om hun drijfveren te begrijpen, niet alleen hun gedrag.\n\nKun je me vertellen:\n1. Welk type is de persoon?\n2. In welke situatie ervaar je uitdagingen?\n3. Wat trigger jou in hun gedrag?\n\nDan kan ik je specifiek advies geven!'
  }

  if (lowerMessage.includes('drijfveren') || lowerMessage.includes('motivatie')) {
    return 'Drijfveren zijn de onbewuste motieven achter ons gedrag. In de V-cirkel methodiek kijken we naar:\n\n🎯 Verleiding: Wat jaag je na?\n🚫 Vermijding: Wat probeer je koste wat kost te vermijden?\n💭 Ideaalbeeld: Wie denk je dat je moet zijn?\n\nDeze drie samen vormen je automatische piloot. Welk aspect wil je dieper verkennen?'
  }

  if (lowerMessage.includes('hoe') && lowerMessage.includes('type')) {
    return 'Wil je weten hoe je jouw eigen type kunt herkennen, of hoe je met een specifiek type omgaat?\n\nVoor jezelf: Focus op wat je het meest vermijdt en waarom.\nVoor anderen: Observeer wat hen triggert en wat ze nastreven.\n\nVertel me meer, dan kan ik je specifieker helpen! 😊'
  }

  if (lowerMessage.includes('hoi') || lowerMessage.includes('hallo') || lowerMessage.includes('hey')) {
    return 'Hoi! 👋 Leuk dat je er bent. Ik ben je V-Cirkel Coach en kan je helpen met vragen over:\n\n• De 9 persoonlijkheidstypes\n• Drijfveren en patronen\n• Omgaan met verschillende types\n• Relatie-dynamieken\n• Jouw eigen groei\n\nWaar kan ik je mee helpen?'
  }

  // Default response
  return 'Dat is een interessante vraag! Ik help je graag verder.\n\nKun je je vraag iets specifieker maken? Bijvoorbeeld:\n• "Wat is Type X?"\n• "Hoe ga ik om met een Type X partner?"\n• "Wat zijn de drijfveren van Type X?"\n• "Ik ben Type X, hoe groei ik?"\n\nOf stel gewoon je vraag op jouw manier, dan help ik je zo goed mogelijk! 💬'
}

export default function Coach() {
  const router = useRouter()
  const scrollViewRef = useRef<ScrollView>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hoi! 👋 Ik ben je V-Cirkel Coach. Ik kan je helpen met vragen over de 9 persoonlijkheidstypes, drijfveren, en hoe je met verschillende types omgaat.\n\nWaar kan ik je mee helpen?',
      timestamp: new Date(),
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isPremium, setIsPremium] = useState(false) // Mock premium status

  useEffect(() => {
    // Auto scroll to bottom when new message
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }, 100)
  }, [messages])

  const handleSend = async () => {
    if (!inputText.trim()) return

    if (!isPremium) {
      // Show premium gate
      return
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputText),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleUnlockPremium = () => {
    // For MVP, just unlock it
    setIsPremium(true)
    const welcomeMessage: Message = {
      id: (Date.now() + 2).toString(),
      role: 'assistant',
      content: '🎉 Welkom bij Premium! Je kunt nu al je vragen stellen. Waar wil je mee beginnen?',
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, welcomeMessage])
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#10B981', '#06B6D4']} style={styles.gradient}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Terug</Text>
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>💬 V-Cirkel Coach</Text>
            {isPremium && (
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumBadgeText}>PREMIUM</Text>
              </View>
            )}
          </View>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map(message => (
            <View
              key={message.id}
              style={[
                styles.messageContainer,
                message.role === 'user' ? styles.userMessageContainer : styles.assistantMessageContainer
              ]}
            >
              <View
                style={[
                  styles.messageBubble,
                  message.role === 'user' ? styles.userBubble : styles.assistantBubble
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    message.role === 'user' ? styles.userMessageText : styles.assistantMessageText
                  ]}
                >
                  {message.content}
                </Text>
              </View>
            </View>
          ))}

          {isTyping && (
            <View style={[styles.messageContainer, styles.assistantMessageContainer]}>
              <View style={[styles.messageBubble, styles.assistantBubble]}>
                <Text style={styles.typingText}>...</Text>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={90}
        >
          {!isPremium ? (
            // Premium Gate
            <View style={styles.premiumGate}>
              <Text style={styles.premiumGateTitle}>🔒 Premium Feature</Text>
              <Text style={styles.premiumGateText}>
                De V-Cirkel Coach is beschikbaar voor Premium leden.
              </Text>
              <TouchableOpacity
                style={styles.unlockButton}
                onPress={handleUnlockPremium}
                activeOpacity={0.9}
              >
                <Text style={styles.unlockButtonText}>Ontgrendel voor €9.99/maand</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tryButton}
                onPress={handleUnlockPremium}
                activeOpacity={0.8}
              >
                <Text style={styles.tryButtonText}>Probeer Gratis (Demo)</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Stel je vraag..."
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxLength={500}
              />
              <TouchableOpacity
                style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
                onPress={handleSend}
                disabled={!inputText.trim()}
                activeOpacity={0.8}
              >
                <Text style={styles.sendButtonText}>➤</Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
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
    paddingBottom: 10,
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
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  premiumBadge: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  premiumBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 20,
    paddingBottom: 10,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  assistantMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 16,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  assistantMessageText: {
    color: '#FFFFFF',
    opacity: 0.95,
  },
  typingText: {
    color: '#FFFFFF',
    fontSize: 20,
    opacity: 0.7,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 10,
    gap: 12,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: '#10B981',
    fontSize: 20,
    fontWeight: 'bold',
  },
  premiumGate: {
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  premiumGateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  premiumGateText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 20,
    lineHeight: 24,
  },
  unlockButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    paddingHorizontal: 32,
    marginBottom: 12,
  },
  unlockButtonText: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tryButton: {
    padding: 12,
  },
  tryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
    textDecorationLine: 'underline',
  },
})
