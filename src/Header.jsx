import { useContext } from "react";
import { CartContext } from "./contexts";
import { Link } from "react-router-dom";

function Header({ catalog }) {
    const [cart] = useContext(CartContext);

    function findQuantity() {
        let total = 0;
        for (const item of cart) {
            total += item.quantity;
        }
        return total;
    }

    return (
        <header>
            <h1>{"Number of Catalog Items: "}{catalog.length}</h1>
            <Link to="/cart">{"Cart "}({findQuantity()})</Link>
        </header>
    );
}

export default Header;


