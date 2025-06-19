import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NotFound from "./views/NotFound";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;