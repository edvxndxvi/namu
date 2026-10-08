import type { Content } from '../../types'
import formatDuration from '../../utils/formatDuration'

interface FeedItemProps {
  content: Content
}

export default function FeedItem({ content }: FeedItemProps) {
  const handleClick = () => {
    console.log({ contentId: content.id })
  }

  return (
    <li
      className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-200 hover:-translate-y-0.5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-video overflow-hidden bg-stone-300">
        {content.thumbnailUrl && (
          <img
            src={content.thumbnailUrl}
            alt={content.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-medium">
          {content.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          {content.category}
        </span>
        <h2 className="line-clamp-2 font-semibold">{content.title}</h2>
        <p className="mt-auto pt-2 text-sm text-stone-500">
          {formatDuration(content.durationSeconds)}
        </p>
      </div>
    </li>
  )
}
