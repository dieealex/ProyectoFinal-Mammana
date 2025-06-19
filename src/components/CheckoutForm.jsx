import { useState } from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => console.error("Error al generar orden:", error));
  };

  if (orderId) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
        <h2 className="text-2xl font-bold text-green-600">¡Gracias por tu compra! 🎉</h2>
        <p className="mt-2 text-gray-700">Tu ID de orden es:</p>
        <p className="mt-1 font-mono bg-gray-100 px-4 py-2 rounded text-sm">{orderId}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          📋 Ingresá tus datos
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded outline-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded outline-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Teléfono</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded outline-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
