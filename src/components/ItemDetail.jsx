import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt="Imagen del producto" />
      <p>{item.detail}</p>
      <ItemCount initial={1} stock={item.stock} />
      <h5>Stock Actual: {item.stock}</h5>
      <button className="addCart" onClick={() => addItem(item)}>
        Agregar al carrito
      </button>
    </div>
  );
};
