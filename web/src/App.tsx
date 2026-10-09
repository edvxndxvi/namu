import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Content from './pages/Content'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="content/:id" element={<Content />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
