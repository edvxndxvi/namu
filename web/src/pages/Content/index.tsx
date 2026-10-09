import { Link, useParams } from 'react-router-dom'
import ContentDetails from '../../components/Content/ContentDetails'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import { GET_CONTENT_BY_ID } from '../../service/api'
import type { ContentDetail } from '../../types'
import SkeletonContentDetails from '../../components/Content/SkeletonContentDetails'
import ErrorState from '../../components/State/ErrorState'

export default function Content() {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch<ContentDetail>()

  useEffect(() => {
    async function fetchContent() {
      if (!id) return
      const contentId = +id
      const { url, options } = GET_CONTENT_BY_ID(contentId)
      await request(url, options)
    }
    fetchContent()
  }, [id, request])

  return (
    <section className="container section">
      <Link to="/" className="underline hover:text-gray-800 transition-colors">
        Voltar ao catálogo
      </Link>
      {loading ? (
        <SkeletonContentDetails />
      ) : data ? (
        <ContentDetails content={data} />
      ) : (
        error && <ErrorState message={error} />
      )}
    </section>
  )
}
