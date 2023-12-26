import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "products", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="div-loading">
        <h3>Cargando detalles del producto...</h3>
      </div>
    );
  }

  return <ItemDetail {...item} />;
};
