import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ErrorState from '../State/ErrorState'
import { GET_CONTENTS } from '../../service/api'
import type { PaginatedResponse, Content } from '../../types'
import FeedItem from './FeedItem'
import SkeletonFeedItem from './SkeletonFeedItem'
import EmptyState from '../State/EmptyState'

interface FeedProps {
  categoryFilter: string
}
export default function Feed({ categoryFilter }: FeedProps) {
  const { data, request, loading, error } = useFetch<PaginatedResponse<Content>>()

  useEffect(() => {
    async function fetchContents() {
      const { url, options } = GET_CONTENTS({ category: categoryFilter })
      await request(url, options)
    }
    fetchContents()
  }, [request, categoryFilter])

  if (loading)
    return (
      <ul className="contentFeed">
        {[...Array(8)].map((_, index) => (
          <SkeletonFeedItem key={index} />
        ))}
      </ul>
    )
  if (error) return <ErrorState message="Erro ao carregar os conteúdos." />

  if (data && data.data.length > 0)
    return (
      <ul className="contentFeed">
        {data.data.map((content: Content) => (
          <FeedItem key={content.id} content={content} />
        ))}
      </ul>
    )

  if (data && data.data.length === 0) return <EmptyState />
}
