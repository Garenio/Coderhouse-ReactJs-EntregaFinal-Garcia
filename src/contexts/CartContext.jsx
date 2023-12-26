import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const clear = () => setCartList([]);

  const addItem = (item, quantity) => {
    const exists = cartList.some((i) => i.id === item.id);

    if (exists) {
      const updateItem = cartList.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setCartList(updateItem);
    } else {
      setCartList((prev) => {
        return [...prev, { ...item, quantity }];
      });
    }
  };

  console.log(cartList);

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
