import { useCallback, useEffect } from 'react'
import type { Content, PaginatedResponse } from '../types'
import useFetch from './useFetch'
import { GET_CONTENTS } from '../service/api'

interface useContentProps {
  categoryFilter: string
}

export function useContent({ categoryFilter }: useContentProps) {
  const { data, request, loading, error } = useFetch<PaginatedResponse<Content>>()

  const load = useCallback(async () => {
    const { url, options } = GET_CONTENTS({ category: categoryFilter })
    await request(url, options)
  }, [request, categoryFilter])

  useEffect(() => {
    load()
  }, [load])

  return { data, loading, error, reload: load }
}
