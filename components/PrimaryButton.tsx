import { Pressable, StyleSheet, Text } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'solid' | 'ghost';
};

export function PrimaryButton({ label, onPress, variant = 'solid' }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const c = Colors[scheme];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'solid' ? { backgroundColor: c.tint } : styles.ghost,
        pressed && { opacity: 0.88 },
      ]}>
      <Text style={[styles.label, variant === 'solid' ? styles.labelOnTint : { color: c.tint }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(47, 111, 237, 0.35)',
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
  },
  labelOnTint: {
    color: '#FFFFFF',
  },
});
