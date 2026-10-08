import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-black">
      <nav className="container py-5 px-6 flex flex-row justify-between">
        <Link to="/" className="text-xl font-bold hover:text-gray-700">
          Biblioteca de bem-estar
        </Link>

        <Link to="/favorites" className="hover:text-gray-700">
          Favoritos
        </Link>
      </nav>
    </header>
  )
}
