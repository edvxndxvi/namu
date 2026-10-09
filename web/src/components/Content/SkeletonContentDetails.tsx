export default function SkeletonContentDetails() {
  return (
    <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="aspect-video overflow-hidden rounded-2xl bg-stone-200 animate-pulse" />

      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="rounded-full bg-stone-200 animate-pulse h-6 w-16 text-xs font-semibold" />
          <div className="h-8.5 w-3/4 bg-stone-200 animate-pulse" />
        </header>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-stone-200 py-6">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">Tipo</dt>
            <dd className="mt-1 h-4 w-16 bg-stone-200 animate-pulse"></dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">Duração</dt>
            <dd className="mt-1 h-4 w-16 bg-stone-200 animate-pulse"></dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">
              Instrutor
            </dt>
            <dd className="mt-1 h-4 w-16 bg-stone-200 animate-pulse"></dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">
              Publicado em
            </dt>
            <dd className="mt-1 h-4 w-16 bg-stone-200 animate-pulse"></dd>
          </div>
        </dl>

        <div>
          <div className="h-4 w-full bg-stone-200 animate-pulse mb-2" />
          <div className="h-4 w-full bg-stone-200 animate-pulse mb-2" />
          <div className="h-4 w-3/4 bg-stone-200 animate-pulse" />
        </div>
      </div>
    </article>
  )
}
