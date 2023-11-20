import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return(
        <div className="product-card">
            <img src={ item.img } alt="Imagen del producto"/>
            <h3>{ item.name }</h3>
            <p>{ item.detail }</p>
            <Link to={`/item/${item.id}`}>Detalle</Link>
        </div>
    );
};