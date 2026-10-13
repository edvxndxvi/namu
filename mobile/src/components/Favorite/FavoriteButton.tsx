import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface FavoriteButtonProps {
  isFavorito: boolean
  onToggleFavorite: () => void
  isPending: boolean
}

export default function FavoriteButton({
  isFavorito,
  onToggleFavorite,
  isPending,
}: FavoriteButtonProps) {
  const text = isFavorito ? 'Desfavoritar' : 'Favoritar'

  return (
    <TouchableOpacity
      onPress={onToggleFavorite}
      style={[styles.button, isPending && styles.buttonDisabled]}
      disabled={isPending}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
})
