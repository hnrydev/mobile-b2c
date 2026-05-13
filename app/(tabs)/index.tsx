import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/PrimaryButton';
import { Text, View, useThemeColor } from '@/components/Themed';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const muted = useThemeColor({}, 'muted');

  return (
    <ScrollView
      contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 24 }]}
      showsVerticalScrollIndicator={false}>
      <View style={styles.hero} lightColor="#FFFFFF" darkColor="#141A22">
        <Text style={styles.kicker}>Today</Text>
        <Text style={styles.headline}>Everything in one calm place</Text>
        <Text style={[styles.sub, { color: muted }]}>
          A simple starting point for your consumer app—swap this copy and wire your flows.
        </Text>
        <PrimaryButton label="Continue" onPress={() => {}} />
        <Link href="/modal" asChild>
          <Pressable style={styles.linkHit} accessibilityRole="button">
            <Text style={[styles.link, { color: muted }]}>How preview works</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  hero: {
    borderRadius: 20,
    padding: 24,
    gap: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  kicker: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    opacity: 0.75,
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  sub: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
  linkHit: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
  },
  link: {
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
