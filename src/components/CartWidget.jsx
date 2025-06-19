import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600 transition">
      <ShoppingCart className="w-6 h-6" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;