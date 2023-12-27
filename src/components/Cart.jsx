import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";


export const Cart = () => {
  const { clear, cartList, removeItem } = useContext(CartContext);

  const total = cartList.reduce(
    (accumulated, current) => accumulated + current.price * current.quantity,
    0
  );

  if (!cartList.length)
    return (
      <div>
        <p>El carrito está vacio...</p>
        <Link to={"/"}>Comenzar a comprar</Link>
      </div>
    );

  return (
    <div className="cart-detail">
      <div className="cart-products-list">
        {cartList.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt="Imagen del producto" />
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <p>{item.quantity}</p>
            <p>$ {item.price}</p>
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        ))}
      </div>
      <div className="cart-control">
        <h3>{total}</h3>
        <Link to={"/checkout"}>Terminar la compra</Link>
        <button onClick={clear}>Vaciar Carrito</button>
      </div>
    </div>
  );
};
