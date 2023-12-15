import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const values = useCart();

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
