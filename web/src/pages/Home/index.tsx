import { useState } from 'react'
import CategoryFilter from '../../components/Category/CategoryFilter'
import Feed from '../../components/Feed/Feed'
import { useCategory } from '../../hooks/useCategory'
import { useContent } from '../../hooks/useContent'
import ErrorState from '../../components/State/ErrorState'
import Pagination from '../../components/Pagination/Pagination'

export default function Home() {
  const {
    data: categories,
    loading: categoriesLoading,
    reload: reloadCategories,
    error: categoriesError,
  } = useCategory()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [page, setPage] = useState(1)

  const {
    data: contents,
    loading: contentsLoading,
    reload: reloadContents,
    error: contentsError,
  } = useContent({ categoryFilter: selectedCategory, page })

  const hasError = categoriesError || contentsError

  function handleCategory(category: string) {
    setSelectedCategory(category)
    setPage(1)
  }

  function handleRetry() {
    reloadCategories()
    reloadContents()
  }

  return (
    <section className="container section">
      <h1 className="text-2xl font-bold">Conteúdos</h1>
      {hasError ? (
        <ErrorState message="Ocorreu um erro ao carregar os dados." retry={handleRetry} />
      ) : (
        <>
          <CategoryFilter
            selected={selectedCategory}
            onSelect={handleCategory}
            categories={categories?.data ?? []}
            loading={categoriesLoading}
          />
          <Feed contents={contents?.data ?? []} loading={contentsLoading} />
          {contents && contents.totalPages > 1 && (
            <Pagination currentPage={page} totalPages={contents.totalPages} setPage={setPage} />
          )}
        </>
      )}
    </section>
  )
}
