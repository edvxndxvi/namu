import type { ContentDetail } from '../../types'
import formatDuration from '../../utils/formatDuration'
import favoritado from '../../assets/heart-fill.svg'
import naoFavoritado from '../../assets/heart-bold.svg'

interface ContentDetailsProps {
  content: ContentDetail
  isFavorite: boolean
  onToggleFavorite: () => void
}

export default function ContentDetails({
  content,
  isFavorite,
  onToggleFavorite,
}: ContentDetailsProps) {
  const publishedAt = new Date(content.publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const isFavorito = isFavorite ? favoritado : naoFavoritado

  return (
    <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="aspect-video overflow-hidden rounded-2xl bg-stone-100">
        {content.thumbnailUrl && (
          <img src={content.thumbnailUrl} alt="" className="h-full w-full object-cover" />
        )}
      </div>

      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              {content.category}
            </span>
            <button
              onClick={onToggleFavorite}
              className="cursor-pointer border border-stone-200 py-1.5 px-3 rounded-full hover:bg-stone-100"
            >
              <img src={isFavorito} alt="Adicionar aos Favoritos" className="h-5 w-5" />
            </button>
          </div>
          <h1 className="text-balance text-3xl font-bold text-stone-900">{content.title}</h1>
        </header>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-stone-200 py-6">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">Tipo</dt>
            <dd className="mt-1 font-medium text-stone-900">{content.type}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">Duração</dt>
            <dd className="mt-1 font-medium text-stone-900">
              {formatDuration(content.durationSeconds)}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">
              Instrutor
            </dt>
            <dd className="mt-1 font-medium text-stone-900">{content.instructor}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">
              Publicado em
            </dt>
            <dd className="mt-1 font-medium text-stone-900">{publishedAt}</dd>
          </div>
        </dl>

        <p className="text-stone-700">{content.description}</p>
      </div>
    </article>
  )
}
