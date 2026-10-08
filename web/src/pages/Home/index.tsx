import { useState } from 'react'
import CategoryFilter from '../../components/Category/CategoryFilter'
import Feed from '../../components/Feed/Feed'
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <section className="container sectionPadding">
      <h1 className="text-2xl font-bold">Conteúdos</h1>
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <Feed categoryFilter={selectedCategory} />
    </section>
  )
}
