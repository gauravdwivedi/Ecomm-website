import React from 'react'
import PopularProductItem from './PopularProductItem'


function ProductsOnSale({ items }) {
    console.log(items)
    return <>
        <section className="category-section popular-product px-15 pt-4">
            <div className="title-part">
                <h2>Products on Sale</h2>
                <a href="#">View All</a>
            </div>
            <div className="product-section">
                <div className="row gy-3 gx-3">
                    {items.map((item) => (
                        <PopularProductItem item={item} />
                    ))}
                </div>
            </div>
        </section>
        <section className="panel-space"></section>

    </>
}

export default ProductsOnSale