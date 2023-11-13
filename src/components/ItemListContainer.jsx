import { useState, useEffect } from "react";
import { products } from "../data/products";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products);
            }, 2000);   
        });

        promise.them((response) => {
            setItems(response)
        })
        .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <div className="content">
                <h1>Lista:</h1>
            </div>
        </>
    );
}