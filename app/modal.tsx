import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { Text, View, useThemeColor } from '@/components/Themed';

export default function ModalScreen() {
  const muted = useThemeColor({}, 'muted');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preview on a real phone</Text>
      <Text style={[styles.body, { color: muted }]}>
        Run the dev server, then open the project in Expo Go (Android and iOS). Scan the QR code from the
        terminal or dev tools in your browser.
      </Text>
      <Text style={[styles.body, { color: muted }]}>
        On Android, use the Expo Go app and scan the QR. On iPhone, use the Camera app to open the link, or Expo
        Go.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
