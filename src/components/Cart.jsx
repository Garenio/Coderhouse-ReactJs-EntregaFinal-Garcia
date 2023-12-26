import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = () => {
  const [buyer, setBuyer] = useState(clearBuyer);
  const { clear, cartList, removeItem } = useContext(CartContext);

  const total = cartList.reduce(
    (accumulated, current) => accumulated + current.price * current.quantity,
    0
  );

  const handleSendOrder = () => {
    const order = { buyer, cartList, total };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        setBuyer(clearBuyer);
        clear();
      });
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

  if (!cartList.length)
    return (
      <div>
        <p>El carrito está vacio...</p>
        <button>Ver los productos</button>
      </div>
    );

  return (
    <div className="cart-detail">
      <div className="cart-products-list">
        {cartList.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt="Imagen del producto" />
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <p>{item.quantity}</p>
            <p>$ {item.price}</p>
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        ))}
      </div>
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
        <button type="button" onClick={handleSendOrder}>Comprar</button>
        <button onClick={clear}>Vaciar Carrito</button>
      </div>
    </div>
  );
};
