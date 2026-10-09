import { useState } from 'react'
import CategoryFilter from '../../components/Category/CategoryFilter'
import Feed from '../../components/Feed/Feed'
import { useCategory } from '../../hooks/useCategory'
import { useContent } from '../../hooks/useContent'
import ErrorState from '../../components/State/ErrorState'

export default function Home() {
  const {
    data: categories,
    loading: categoriesLoading,
    reload: reloadCategories,
    error: categoriesError,
  } = useCategory()
  const [selectedCategory, setSelectedCategory] = useState('')

  const {
    data: contents,
    loading: contentsLoading,
    reload: reloadContents,
    error: contentsError,
  } = useContent({ categoryFilter: selectedCategory })

  const hasError = categoriesError || contentsError

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
            onSelect={setSelectedCategory}
            categories={categories?.data ?? []}
            loading={categoriesLoading}
          />
          <Feed contents={contents?.data ?? []} loading={contentsLoading} />
        </>
      )}
    </section>
  )
}
