import { createContext, useEffect, useCallback } from 'react'
import { DELETE_FAVORITE, GET_FAVORITES, POST_FAVORITE } from '../service/api'
import type { Content, ListResponse } from '../types'
import useFetch from '../hooks/useFetch'

interface FavoriteContextType {
  load: () => Promise<void>
  favoritos: Content[]
  error: string
  loading: boolean
  isFavorite: (contentId: number) => boolean
  toggleFavorite: (contentId: number) => Promise<void>
}

const FavoriteContext = createContext<FavoriteContextType | null>(null)

interface FavoriteProviderProps {
  children: React.ReactNode
}

export function FavoriteProvider({ children }: FavoriteProviderProps) {
  const { data, request, loading, error } = useFetch<ListResponse<Content>>()
  const {
    request: requestToggleFavorite, // loading: loadingToggleFavorite,
    error: errorToggleFavorite,
  } = useFetch()

  const load = useCallback(async () => {
    const { url, options } = GET_FAVORITES()
    await request(url, options)
  }, [request])

  useEffect(() => {
    load()
  }, [load])

  const favoritos = data?.data || []
  const isFavorite = (contentId: number) => !!favoritos.find((fav) => fav.id === contentId)

  async function toggleFavorite(contentId: number) {
    const remover = isFavorite(contentId)

    const { url, options } = remover ? DELETE_FAVORITE(contentId) : POST_FAVORITE(contentId)

    const ok = await requestToggleFavorite(url, options)
    if (ok) await load()
  }

  return (
    <FavoriteContext.Provider
      value={{
        load,
        favoritos,
        error: errorToggleFavorite || error,
        isFavorite,
        loading,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext
