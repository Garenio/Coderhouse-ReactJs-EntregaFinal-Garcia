import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect( () => {
        const promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products);
            }, 2000);   
        });

        promise.then((response) => {
            if(id) {
                const filteredCategory = response.filter((item) => item.category === id);
                setItems(filteredCategory);
            } else {
                setItems(response);
            }
        })
        .finally(() => setLoading(false));
    }, [id]);
    return (
        <>
            <div className="content">
                <h1>Lista:</h1>
                <ItemList items={items} />
            </div>
        </>
    );
};

/* export const ItemListContainer = () => {
    return (
        <>
            <div className="content">
                <h1>Lista:</h1>
            </div>
        </>
    );
} */