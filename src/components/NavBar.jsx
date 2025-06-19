import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          Fútbol Store ⚽
        </Link>
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Inicio
          </Link>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
