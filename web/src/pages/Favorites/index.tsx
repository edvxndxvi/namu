import Feed from '../../components/Feed/Feed'
import ErrorState from '../../components/State/ErrorState'
import { useFavorite } from '../../hooks/useFavorite'

export default function Favorites() {
  const { favoritos, loading, error } = useFavorite()

  return (
    <section className="container section">
      <h1 className="text-2xl font-bold">Favoritos</h1>
      {error ? (
        <ErrorState message="Ocorreu um erro ao carregar os dados." />
      ) : (
        <Feed contents={favoritos ?? []} loading={loading} favoritesList={true} />
      )}
    </section>
  )
}
