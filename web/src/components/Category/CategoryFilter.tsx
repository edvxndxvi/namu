import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { GET_CATEGORIES } from '../../service/api'
import type { Category, ListResponse } from '../../types'
import CategoryButton from './CategoryButton'
import SkeletonCategoryButton from './SkeletonCategoryButton'

interface CategoryFilterProps {
  selected: string
  onSelect: (slug: string) => void
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const { data, loading, request } = useFetch<ListResponse<Category>>()

  useEffect(() => {
    async function fetchCategories() {
      const { url, options } = GET_CATEGORIES()
      await request(url, options)
    }
    fetchCategories()
  }, [request])

  if (loading)
    return (
      <ul className="flex flex-wrap gap-4">
        {[...Array(6)].map((_, index) => (
          <SkeletonCategoryButton key={index} />
        ))}
      </ul>
    )

  if (data)
    return (
      <ul className="flex flex-wrap gap-4">
        <CategoryButton
          category={{ slug: '', name: 'Todas' }}
          isSelected={selected === ''}
          onClick={() => onSelect('')}
        />
        {data.data.map((category) => (
          <CategoryButton
            key={category.slug}
            category={category}
            isSelected={selected === category.slug}
            onClick={() => onSelect(category.slug)}
          />
        ))}
      </ul>
    )
}
