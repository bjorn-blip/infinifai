/**
 * Root layout for V-Cirkel app
 */

import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StripeProvider } from '@stripe/stripe-react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Create query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

const STRIPE_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''

export default function RootLayout() {
  useEffect(() => {
    // Initialize app (load fonts, check auth, etc.)
    console.log('🚀 V-Cirkel app initialized')
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
            <Stack
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="onboarding" />
              <Stack.Screen
                name="spiegel"
                options={{
                  presentation: 'modal',
                }}
              />
              <Stack.Screen
                name="kompas"
                options={{
                  presentation: 'modal',
                }}
              />
              <Stack.Screen
                name="journey"
                options={{
                  presentation: 'modal',
                }}
              />
            </Stack>
          </StripeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
