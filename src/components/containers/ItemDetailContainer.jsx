import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemDetail from "../presentational/ItemDetail.jsx";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("⚠ Producto no encontrado");
        }
      })
      .catch((error) => console.error("❌ Error al obtener producto:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl text-gray-700">
        🔄 Cargando producto...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center p-10 text-red-600 text-xl">
        ❌ Producto no encontrado
      </div>
    );
  }

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;