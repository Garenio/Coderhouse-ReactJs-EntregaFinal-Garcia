import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise
      .then((response) => {
        const foundItem = response.find(
          (item) => item.id == id
        );
        setItem(foundItem);
      })
  }, [id]);

  if(!item) {
    return <>Cargando detalles...</>;
  }

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt="Imagen del producto" />
      <p>{item.detail}</p>
    </div>
  );
};
