import { useState } from "react";

export const useCart = () => {
  const [cartList, setCartList] = useState([]);

  const clear = () => setCartList([]);

  const addItem = (item) =>
    setCartList((prev) => {
      return [...prev, item];
    });

    console.log(cartList)

  return { clear, addItem, cartList };
};
