import favoritado from '../../assets/heart-fill.svg'
import naoFavoritado from '../../assets/heart-bold.svg'

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
  const icon = isFavorito ? favoritado : naoFavoritado

  return (
    <button
      onClick={onToggleFavorite}
      aria-pressed={isFavorito}
      aria-label={isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      className="cursor-pointer bg-white border border-stone-200 py-1.5 px-3 rounded-full hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isPending}
    >
      <img src={icon} alt={isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'} className="h-5 w-5" />
    </button>
  )
}
