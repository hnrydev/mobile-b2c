import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, View, useThemeColor } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const ITEMS = [
  { id: '1', title: 'Featured', subtitle: 'Curated picks for you' },
  { id: '2', title: 'New', subtitle: 'Fresh this week' },
  { id: '3', title: 'Nearby', subtitle: 'Based on your area' },
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme() ?? 'light';
  const muted = useThemeColor({}, 'muted');
  const border = useThemeColor({}, 'border');
  const c = Colors[scheme];

  return (
    <View style={[styles.root, { paddingTop: insets.top + 12 }]}>
      <Text style={styles.pageTitle}>Explore</Text>
      <Text style={[styles.lead, { color: muted }]}>Browse sections—replace with your catalog or feed.</Text>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24, paddingTop: 8 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.row,
              { borderColor: border, backgroundColor: c.card },
              pressed && { opacity: 0.92 },
            ]}>
            <View style={styles.rowText} lightColor="transparent" darkColor="transparent">
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={[styles.rowSub, { color: muted }]}>{item.subtitle}</Text>
            </View>
            <Text style={[styles.chevron, { color: muted }]}>›</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  lead: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  rowText: {
    flex: 1,
    gap: 4,
  },
  rowTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  rowSub: {
    fontSize: 14,
  },
  chevron: {
    fontSize: 28,
    fontWeight: '300',
    marginLeft: 8,
  },
});
