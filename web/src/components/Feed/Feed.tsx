import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { GET_CONTENTS } from '../../service/api'
import type { PaginatedResponse, Content } from '../../types'
import FeedItem from './FeedItem'
import SkeletonFeedItem from './SkeletonFeedItem'

export default function Feed() {
  const { data, request, loading, error } = useFetch<PaginatedResponse<Content>>()

  useEffect(() => {
    async function fetchContents() {
      const { url, options } = GET_CONTENTS()
      await request(url, options)
    }
    fetchContents()
  }, [request])

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
