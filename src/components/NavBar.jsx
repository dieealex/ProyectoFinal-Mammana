import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-start items-center gap-10">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 hover:text-yellow-400 transition"
          aria-label="Ir al inicio - Fútbol Store"
        >
          ⚽ Fútbol Store
        </Link>
        <div className="flex gap-6 text-lg">
          <Link
            to="/category/camisetas"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Camisetas
          </Link>
          <Link
            to="/category/botines"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Botines
          </Link>
          <Link
            to="/category/pelotas"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Pelotas
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
