import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const clear = () => setCartList([]);

  const addItem = (item) =>
    setCartList((prev) => {
      return [...prev, item];
    });

  const removeItem = (id) => {
    const newCartList = cartList.filter((prev) => prev.id !== id);
    setCartList(newCartList);
  };

  return (
    <CartContext.Provider value={{ clear, addItem, cartList, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
