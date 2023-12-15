import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });

    promise.then((response) => {
      const foundItem = response.find((item) => item.id == id);
      setItem(foundItem);
    });
  }, [id]);

  if (!item) {
    return (
      <div className="div-loading">
        <h3>Cargando detalles...</h3>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt="Imagen del producto" />
      <p>{item.detail}</p>
      <ItemCount initial={1} stock={item.stock} />
      <h5>Stock Actual: {item.stock}</h5>
      <Link to={"/"}>Agregar al carrito</Link>
      <button onClick={() => addItem()}>Agregar al carrito</button>
    </div>
  );
};
