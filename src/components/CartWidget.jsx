import cart from '../assets/cart.png'

export const CartWidget = () => {
    return (
        <div className="cart">
            <img src = { cart } alt='Carrito'/>
            <span>2</span>
        </div>
    );
}