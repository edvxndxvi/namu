export type ContentType = 'video' | 'article' | 'article'

export interface Category {
  slug: string
  name: string
}

export interface Content {
  id: number
  title: string
  description: string
  category: string
  type: ContentType
  durationSeconds: number
  instructor: string
  thumbnailUrl: string | null
  publishedAt: string
}

export interface ContentDetail extends Content {
  isFavorite: boolean
}

export interface ListResponse<T> {
  data: T[]
}

export interface PaginatedResponse<T> extends ListResponse<T> {
  page: number
  limit: number
  total: number
  totalPages: number
}
