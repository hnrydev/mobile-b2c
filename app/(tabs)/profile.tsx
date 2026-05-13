import { Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, View, useThemeColor } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const ROWS = ['Account', 'Notifications', 'Privacy', 'Help'];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme() ?? 'light';
  const muted = useThemeColor({}, 'muted');
  const border = useThemeColor({}, 'border');
  const c = Colors[scheme];

  return (
    <View style={[styles.root, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 16 }]}>
      <View style={styles.header} lightColor="transparent" darkColor="transparent">
        <View style={[styles.avatar, { backgroundColor: c.tint }]}>
          <Text style={styles.avatarText}>You</Text>
        </View>
        <Text style={styles.name}>Your name</Text>
        <Text style={[styles.email, { color: muted }]}>you@example.com</Text>
      </View>
      <View style={styles.list}>
        {ROWS.map((label) => (
          <Pressable
            key={label}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.row,
              { borderColor: border, backgroundColor: c.card },
              pressed && { opacity: 0.92 },
            ]}>
            <Text style={styles.rowLabel}>{label}</Text>
            <Text style={[styles.chevron, { color: muted }]}>›</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  email: {
    fontSize: 15,
    marginTop: 4,
  },
  list: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  chevron: {
    fontSize: 24,
    fontWeight: '300',
  },
});
