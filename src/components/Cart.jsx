import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { cartList } = useContext(CartContext);

  console.log(cartList);

  return (
    <div className="cart-list">
      {cartList.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.img} alt="Imagen del producto" />
          <h3>{item.name}</h3>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
};
