import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../data/mockData'
import ItemList from '../presentational/ItemList'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory : getProducts
    fetchData(categoryId).then(data => setItems(data))
  }, [categoryId])

  return (
    <main className="w-full max-w-6xl px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Catálogo {categoryId && `: ${categoryId}`}
      </h2>
      <ItemList items={items} />
    </main>
  )
}

export default ItemListContainer
