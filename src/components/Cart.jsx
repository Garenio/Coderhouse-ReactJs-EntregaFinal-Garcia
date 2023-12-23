import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = () => {
  const [buyer, setBuyer] = useState(clearBuyer);
  const { clear, cartList } = useContext(CartContext);

  const handleSendOrder = () => {
    const order = {
      buyer,
      cartList,
      total: 13600,
    };
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
          />
          <input
            type="text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Teléfono"
          />
          <input
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            placeholder="email"
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
