import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/mockData'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(id).then(data => setItem(data))
  }, [id])

  if (!item) return <p>Cargando...</p>

  return (
    <div className="p-4">
      <img src={item.image} alt={item.title} className="w-64 mx-auto" />
      <h2 className="text-2xl mt-4">{item.title}</h2>
      <p className="text-lg">${item.price}</p>
    </div>
  )
}

export default ItemDetailContainer