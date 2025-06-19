import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "../presentational/ItemList.jsx";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(docs);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl text-gray-700">
        ⏳ Cargando productos...
      </div>
    );
  }

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {categoryId ? `Categoría: ${categoryId}` : "🏬 Catálogo"}
      </h1>
      <ItemList items={products} />
    </section>
  );
}

export default ItemListContainer;