import ProductCard from "./ProductCard"

function ProductPage ({catalog}) {
    return (
        <ul>
            {catalog.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </ul>
    )
}

export default ProductPage