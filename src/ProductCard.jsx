import { useContext } from "react";
import { CartContext } from "./contexts";
import { useState } from "react";

function ProductCard ({product}) {
    const [cart, setCart] = useContext(CartContext)
    const [quantityLoad, setQuantityLoad] = useState(false)
    const [quantity, setQuantity] = useState(1)

    function handleAdd() {
        setQuantityLoad(true)
    }

    function changeCart() {
        const productWithQuantity = { ...product, quantity };
        setCart([...cart, productWithQuantity])
        setQuantityLoad(false)
    }

    return (
        <li>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button onClick={handleAdd}>Add to cart</button>
            {(quantityLoad) ? (
                <div>
                    <button onClick={() => setQuantity((quantity) => quantity - 1)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity((quantity) => quantity + 1)}>+</button>
                    <button onClick={() => changeCart()}>Submit</button>
                </div>
            ) : null}
        </li>
    )
}

export default ProductCard;