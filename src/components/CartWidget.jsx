import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="cart">
        <img src={cart} alt="Carrito" />
        <span>2</span>
      </div>
    </Link>
  );
};
