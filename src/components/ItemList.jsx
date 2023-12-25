import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.img} alt="Imagen del producto" />
          <h3>{item.name}</h3>
          <p>{item.detail}</p>
          <Link to={`/item/${item.id}`}>Detalle</Link>
        </div>
      ))}
    </>
  );
};
