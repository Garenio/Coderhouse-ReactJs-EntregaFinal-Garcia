import { useState } from "react";

export const ItemCount = ({ initial, stock, addItem }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    addItem(quantity);
    setQuantity(initial);
  };

  return (
    <div className="item-counter">
      <div className="counter-controls">
        <button className="counter-btn" onClick={decrement}>
          -
        </button>
        <h4 className="counter-number">{quantity}</h4>
        <button className="counter-btn" onClick={increment}>
          +
        </button>
      </div>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};
