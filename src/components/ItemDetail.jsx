import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id, name, img, detail, stock, price }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem({id, name, img, detail, stock, price}, quantity);
  };

  return (
    <div className="item-detail">
      <h1>{name}</h1>
      <img src={img} alt="Imagen del producto" />
      <p>{detail}</p>
      <h5>Stock Actual: {stock}</h5>
      <ItemCount initial={1} stock={stock} addItem={onAdd} />
    </div>
  );
};
