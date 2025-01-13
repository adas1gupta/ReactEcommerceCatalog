import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
import { CartContext } from "./contexts";

function App () {
    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState([]);

    async function fetchCatalog () {
        console.log("fetching")
        const items = await fetch('https://fakestoreapi.com/products')
        const products = await items.json()
        setCatalog(products)
        console.log(cart)
        setLoading(false)
    }

    useEffect(() => {
        fetchCatalog()
    },[])

    return (
        <CartContext value={[cart, setCart]}>
        <BrowserRouter>
            <Header catalog={catalog}/>
            <Routes>
                <Route path="/" element={<ProductPage catalog={catalog} />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
        </CartContext>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)