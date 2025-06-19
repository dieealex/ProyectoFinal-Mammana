import { Link } from "react-router-dom";

function Item({ id, title, image, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">${price}</p>
        <Link
          to={`/item/${id}`}
          className="bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;