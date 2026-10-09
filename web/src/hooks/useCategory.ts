import { useCallback, useEffect } from 'react'
import type { Category, ListResponse } from '../types'
import useFetch from './useFetch'
import { GET_CATEGORIES } from '../service/api'

export function useCategory() {
  const { data, loading, request, error } = useFetch<ListResponse<Category>>()

  const load = useCallback(async () => {
    const { url, options } = GET_CATEGORIES()
    await request(url, options)
  }, [request])

  useEffect(() => {
    load()
  }, [load])

  return { data, loading, reload: load, error }
}
