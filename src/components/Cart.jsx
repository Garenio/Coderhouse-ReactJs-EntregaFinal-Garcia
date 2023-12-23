import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = () => {
  const [buyer, setBuyer] = useState(clearBuyer);
  const { clear, cartList } = useContext(CartContext);

  const total = cartList.reduce((accumulated, current) => {
    return accumulated + current.price * 5;
  }, 0);

  console.log(total, cartList);

  const handleSendOrder = () => {
    const order = { buyer, cartList, total };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
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

  return (
    <div className="cart-detail">
      <div className="cart-products-list">
        {cartList.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt="Imagen del producto" />
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <p>$ {item.price}</p>
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
            placeholder="email"
            required
          />
        </form>
      </div>
      <div className="cart-control">
        <button onClick={handleSendOrder}>Comprar</button>
        <button onClick={clear}>Vaciar Carrito</button>
      </div>
    </div>
  );
};
