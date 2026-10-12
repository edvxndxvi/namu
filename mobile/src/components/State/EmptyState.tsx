import { StyleSheet, Text, View } from 'react-native'

interface EmptyStateProps {
  favorite?: boolean
}

export default function EmptyState({ favorite }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {favorite ? 'Nenhum favorito ainda' : 'Nenhum conteúdo disponível'}
      </Text>
      <Text style={styles.description}>
        {favorite
          ? 'Toque em Favoritar na tela de um conteúdo para vê-lo aqui.'
          : 'Puxe a lista para baixo para tentar de novo.'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1C1917',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#57534E',
  },
})
