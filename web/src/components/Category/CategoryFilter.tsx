import type { Category } from '../../types'
import CategoryButton from './CategoryButton'
import SkeletonCategoryButton from './SkeletonCategoryButton'

interface CategoryFilterProps {
  selected: string
  onSelect: (slug: string) => void
  loading: boolean
  categories: Category[] | undefined
}

export default function CategoryFilter({
  selected,
  onSelect,
  loading,
  categories,
}: CategoryFilterProps) {
  if (loading)
    return (
      <ul className="flex flex-wrap gap-4">
        {[...Array(6)].map((_, index) => (
          <SkeletonCategoryButton key={index} />
        ))}
      </ul>
    )

  if (categories)
    return (
      <ul className="flex flex-wrap gap-4">
        <CategoryButton
          category={{ slug: '', name: 'Todas' }}
          isSelected={selected === ''}
          onClick={() => onSelect('')}
        />
        {categories.map((category) => (
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
