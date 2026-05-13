import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme() ?? 'light';

  const navigationTheme = useMemo(() => {
    const base = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    const c = Colors[colorScheme];
    return {
      ...base,
      colors: {
        ...base.colors,
        primary: c.tint,
        background: c.background,
        card: c.card,
        text: c.text,
        border: c.border,
        notification: c.tint,
      },
    };
  }, [colorScheme]);

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            title: 'Tips',
            presentation: 'modal',
            headerShown: true,
            headerStyle: { backgroundColor: Colors[colorScheme].card },
            headerTintColor: Colors[colorScheme].tint,
            headerTitleStyle: { fontWeight: '600', color: Colors[colorScheme].text },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
