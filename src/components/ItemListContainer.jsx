import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      resolve(products);
    });

    promise.then((response) => {
      if (id) {
        const filteredCategory = response.filter(
          (item) => item.category === id
        );
        setItems(filteredCategory);
      } else {
        setItems(response);
      }
    });
  }, [id]);
  return (
    <div className="content">
      <div className="card-container">
        <ItemList items={items} />
      </div>
    </div>
  );
};
