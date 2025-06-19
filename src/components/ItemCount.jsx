import { useState } from "react";

function ItemCount({ stock = 5, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(count);
    setAdded(true);
  };

  const isOutOfStock = stock === 0;

  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      {!added ? (
        <>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setCount(Math.max(initial, count - 1))}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              disabled={isOutOfStock}
            >
              -
            </button>
            <span className="text-lg font-semibold">{count}</span>
            <button
              onClick={() => setCount(Math.min(stock, count + 1))}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              disabled={isOutOfStock}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Sin stock" : "Agregar al carrito"}
          </button>
        </>
      ) : (
        <p className="text-green-600 font-medium">✔ Producto agregado</p>
      )}
    </div>
  );
}

export default ItemCount;