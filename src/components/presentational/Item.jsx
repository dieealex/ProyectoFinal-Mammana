import { Link } from 'react-router-dom'

function Item({ id, title, image, price }) {
  return (
    <div className="border p-2 rounded shadow hover:shadow-lg transition cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-contain" />
      <h3 className="mt-2">{title}</h3>
      <p className="font-semibold text-gray-700">${price}</p>
      <Link to={`/item/${id}`} className="text-blue-500 underline">Ver detalle</Link>
    </div>
  )
}

export default Item