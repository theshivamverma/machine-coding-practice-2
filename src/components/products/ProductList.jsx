import React from 'react'

import { useProduct,ProductCard } from "../products"

function ProductList() {

    const { productsData } = useProduct()

    const { products } = productsData

    return (
      <div className="grid-container web-four mob-two p-2-4">
        {
            products.map(product => <ProductCard product={product} />)
        }
      </div>
    );
}

export default ProductList
