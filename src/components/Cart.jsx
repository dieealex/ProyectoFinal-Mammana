import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (totalQuantity === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Tu carrito está vacío 🛒</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🛍 Tu Carrito</h2>
        <ul className="space-y-6">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div className="flex items-start gap-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Precio: ${item.price}</p>
                  <p className="text-sm text-gray-800 font-medium">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline mt-4 md:mt-0"
              >
                ❌ Eliminar
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl font-bold text-gray-800">Total: ${totalPrice}</p>
          <div className="flex gap-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
            >
              Vaciar carrito
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;