import type { Category } from '../../types'

interface CategoryButtonProps {
  category: Category
  isSelected: boolean
  onClick: () => void
}

export default function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer border border-stone-200 py-1.5 px-3 rounded-full ${isSelected ? 'bg-black text-white' : 'bg-white hover:bg-stone-100 text-black'}`}
    >
      {category.name}
    </li>
  )
}
