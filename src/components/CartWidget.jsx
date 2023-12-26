import { useContext } from "react";

import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { cartList } = useContext(CartContext);

  const total = cartList.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );

  return (
    <Link to="/cart">
      <div className="cart">
        <img src={cart} alt="Carrito" />
        <span>{total}</span>
      </div>
    </Link>
  );
};
