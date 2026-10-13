import { StyleSheet, Text } from 'react-native'
import ScreenContainer from '../components/Layout/ScreenContainer'
import ErrorState from '../components/State/ErrorState'
import Feed from '../components/Feed/Feed'
import { useFavorite } from '../hooks/useFavorite'

export default function FavoritesScreen() {
  const { favoritos, loading, error, load } = useFavorite()

  return (
    <ScreenContainer>
      <Text style={styles.title}>Favoritos</Text>
      {favoritos ? (
        <Feed contents={favoritos} loading={loading} onRefresh={load} favoritesList={true} />
      ) : (
        error && <ErrorState message={error} retry={load} />
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
