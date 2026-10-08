export default function SkeletonFeedItem() {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="aspect-video overflow-hidden bg-stone-300 animate-pulse"></div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="h-3 w-1/4 bg-stone-300 animate-pulse" />
        <div className="h-4 w-1/2 bg-stone-300 animate-pulse" />
        <div className="h-3.5 mt-2 w-44 bg-stone-300 animate-pulse" />
      </div>
    </li>
  )
}
