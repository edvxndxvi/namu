import { Text, StyleSheet } from 'react-native'
import ScreenContainer from '../components/Layout/ScreenContainer'
import Feed from '../components/Feed/Feed'
import { useContent } from '../hooks/useContent'
import ErrorState from '../components/State/ErrorState'

export default function HomeScreen() {
  const {
    data: contents,
    loading,
    error,
    reload,
  } = useContent({ categoryFilter: '', page: 1, search: '' })

  return (
    <ScreenContainer>
      <Text style={styles.title}>Conteúdos</Text>
      {contents ? (
        <Feed contents={contents.data} loading={loading} onRefresh={reload} />
      ) : (
        error && <ErrorState message={error} retry={reload} />
      )}
    </ScreenContainer>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
