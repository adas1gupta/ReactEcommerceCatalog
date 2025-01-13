import { useContext } from "react"
import { CartContext } from "./contexts"

function CartItem ({product}) {
    const [cart, setCart] = useContext(CartContext)

    function changeCart(product) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }

    return (
        <li>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button onClick={() => changeCart(product)}>Remove</button>
        </li>
    )
}

export default CartItem