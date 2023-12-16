import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
      ? query(collection(db, "products"), where("category", "==", id))
      : collection(db, "products");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    }).finally(() => setLoading(false));;
  }, [id]);

  if (loading) {
    return (
      <div className="div-loading">
        <h3>Cargando productos...</h3>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="card-container">
        <ItemList items={items} />
      </div>
    </div>
  );
};
