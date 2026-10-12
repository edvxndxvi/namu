import { useState } from 'react'
import { useFavorite } from '../../hooks/useFavorite'
import FavoriteButton from './FavoriteButton'

interface FavoriteToggleProps {
  contentId: number
}

export default function FavoriteToggle({ contentId }: FavoriteToggleProps) {
  const { toggleFavorite, isFavorite } = useFavorite()
  const [isPending, setIsPending] = useState(false)

  const handleToggleFavorite = async () => {
    setIsPending(true)
    try {
      await toggleFavorite(contentId)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <FavoriteButton
      isFavorito={isFavorite(contentId)}
      onToggleFavorite={handleToggleFavorite}
      isPending={isPending}
    />
  )
}
