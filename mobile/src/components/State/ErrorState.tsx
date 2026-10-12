import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ErrorStateProps {
  message?: string
  retry?: () => void
}

export default function ErrorState({ message, retry }: ErrorStateProps) {
  return (
    <View style={styles.container} accessibilityRole="alert">
      <Text style={styles.title} accessibilityRole="header">
        Algo deu errado
      </Text>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {retry ? (
        <TouchableOpacity onPress={retry} accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Tentar de novo</Text>
        </TouchableOpacity>
      ) : null}
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
  message: {
    fontSize: 15,
    textAlign: 'center',
    color: '#57534E',
  },
  button: {
    marginTop: 8,
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#1C1917',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
})
