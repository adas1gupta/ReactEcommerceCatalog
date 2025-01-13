import { useContext } from "react";
import { CartContext } from "./contexts";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartPage() {
    const [cart] = useContext(CartContext);

    return (
        <div>
            <Link to="/">Back to Catalog</Link>
            <ul>
                {cart.map((product, index) => (
                    <div key={index}>
                        <CartItem product={product}/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default CartPage;