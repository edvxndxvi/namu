import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { GET_CONTENTS } from '../../service/api'
import type { PaginatedResponse, Content } from '../../types'
import FeedItem from './FeedItem'
import SkeletonFeedItem from './SkeletonFeedItem'

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
  if (error) return <p>Erro</p>

  if (data)
    return (
      <ul className="contentFeed">
        {data.data.map((content: Content) => (
          <FeedItem key={content.id} content={content} />
        ))}
      </ul>
    )
}
