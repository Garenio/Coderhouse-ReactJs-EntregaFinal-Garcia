import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "products", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    }).finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="div-loading">
        <h3>Cargando detalles del producto...</h3>
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
      <button className="addCart" onClick={() => addItem(item)}>
        Agregar al carrito
      </button>
    </div>
  );
};
