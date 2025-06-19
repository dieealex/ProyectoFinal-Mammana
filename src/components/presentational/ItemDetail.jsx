import ItemCount from "../ItemCount.jsx";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function ItemDetail({ id, title, image, description, price, stock }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    const item = { id, title, price, image };
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-80 w-full object-contain rounded-xl bg-white p-2"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-2xl font-bold text-green-600 mb-2">${price}</p>
        <p className="text-sm text-gray-500 mb-4">Stock: {stock}</p>

        {!added ? (
          <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
        ) : (
          <p className="text-green-600 font-semibold mt-2">
            ✅ Producto agregado al carrito
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
