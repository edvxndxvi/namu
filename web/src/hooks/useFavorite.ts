import { useContext } from 'react'
import FavoriteContext from '../context/favoriteContext'

export function useFavorite() {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error('useFavorite deve ser usado dentro de um FavoriteProvider')
  }
  return context
}
