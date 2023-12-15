import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const clear = () => setCartList([]);

  const addItem = () => alert();
  /* 
  const addItem = (item) =>
    setCartList((prev) => {
      return [...prev, item];
    }); */

  return (
    <CartContext.Provider value={{ clear, addItem, cartList }}>{children}</CartContext.Provider>
  );
};
