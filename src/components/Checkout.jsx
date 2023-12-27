import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [buyer, setBuyer] = useState(clearBuyer);
  const { clear, cartList } = useContext(CartContext);

  const total = cartList.reduce(
    (accumulated, current) => accumulated + current.price * current.quantity,
    0
  );

  const handleSendOrder = () => {
    if (!cartList.length) {
      alert("No se puede generar una orden vacía.");
    } else {
      setLoading(true);
      const order = { buyer, cartList, total };

      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order)
        .then(({ id }) => {
          if (id) {
            setLoading(false);
            setOrderId(id);
          }
        })
        .finally(() => {
          setBuyer(clearBuyer);
          clear();
        });
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  if (loading) {
    return <h1>Se está generando la compra...</h1>;
  }

  if (orderId) {
    return <h1>Gracias por su compra. El número de orden es: {orderId}</h1>;
  }

  return (
    <div className="checkout">
      <div className="buyer-form">
        <form>
          <input
            type="text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Teléfono"
            required
          />
          <input
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            required
          />
        </form>
      </div>
      <div className="cart-control">
        <h3>{total}</h3>
        <button type="button" onClick={handleSendOrder}>
          Finalizar
        </button>
        <Link to={"/cart"}>Volver al carrito</Link>
      </div>
    </div>
  );
};
