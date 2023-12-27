import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import { Loader } from "./Loader";
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
    return <Loader />;
  }

  if (orderId) {
    return (
      <div className="successful-order">
        <h1>¡Gracias por su compra!</h1>
        <h3>Su número de orden es: <span>{orderId}</span></h3>;
        <Link className="btn-primary" to={"/"}>Ir al inicio</Link>
      </div>
    );
  }

  return (
    <>
      <div className="checkout">
        <h2>Resumen de la compra:</h2>
        <div className="checkout-products-list">
          {cartList.map((item) => (
            <div key={item.id} className="checkout-product-card">
              <h5>
                {item.name} x {item.quantity} un.
              </h5>
              <p>$ {item.price} c/u</p>
            </div>
          ))}
        </div>
        <h3>Total a pagar: ${total}</h3>
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
      </div>
      <div className="cart-control">
        <button className="btn-primary" type="button" onClick={handleSendOrder}>
          Finalizar
        </button>
        <Link className="btn-secondary" to={"/cart"}>
          Volver al carrito
        </Link>
      </div>
    </>
  );
};
