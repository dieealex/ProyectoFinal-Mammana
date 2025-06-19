import { createContext, useState, useContext } from "react";

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Custom hook para usar el contexto más fácil
export const useCart = () => useContext(CartContext);

// 3. Provider del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const addItem = addToCart;

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};