import { useContext, useState } from "react";
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
      <div className="empty-cart" >
        <h1>Todavía no agregaste productos al carrito.</h1>
        <Link className="btn-primary" to={"/"}>Comenzar a comprar</Link>
      </div>
    );

  return (
    <div className="cart-detail">
      <h1>Carrito</h1>
      <button className="btn-clear-cart" onClick={clear}>Vaciar Carrito</button>
      <div className="cart-products-list">
        {cartList.map((item) => (
          <div key={item.id} className="cart-product-card">
            <img src={item.img} alt="Imagen del producto" />
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <h5>{item.quantity} un.</h5>
            <h5>$ {item.price} c/u</h5>
            <button className="btn-delete-product" onClick={() => removeItem(item.id)} title="Eliminar Producto">X</button>
          </div>
        ))}
      </div>
      <h2>Total a pagar: <span>$ {total}</span></h2>
      <div className="cart-control">
        <Link className="btn-primary" to={"/checkout"}>Terminar la compra</Link>
      </div>
    </div>
  );
};
