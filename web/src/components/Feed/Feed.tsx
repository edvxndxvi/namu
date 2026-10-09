import type { Content } from '../../types'
import FeedItem from './FeedItem'
import SkeletonFeedItem from './SkeletonFeedItem'
import EmptyState from '../State/EmptyState'

interface FeedProps {
  contents: Content[]
  loading: boolean
  favoritesList?: boolean
}
export default function Feed({ contents, loading, favoritesList }: FeedProps) {
  if (loading)
    return (
      <ul className="contentFeed">
        {[...Array(8)].map((_, index) => (
          <SkeletonFeedItem key={index} />
        ))}
      </ul>
    )

  if (contents && contents.length > 0)
    return (
      <ul className="contentFeed">
        {contents.map((content: Content) => (
          <FeedItem key={content.id} content={content} />
        ))}
      </ul>
    )

  if (contents && contents.length === 0) return <EmptyState favorite={favoritesList} />
}
