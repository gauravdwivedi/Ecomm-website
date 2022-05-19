import React from 'react'
import PopularProductItem from './PopularProductItem'
const PopularProducts = ({ items }) => {


    return <section className="category-section popular-product px-15 pt-4">
        <div className="title-part">
            <h2>Popular</h2>
            <a href="#">View All</a>
        </div>
        <div className="product-section">
            <div className="row gy-3 gx-3">
                {items.length > 0 && items.map((item, index) => (
                    <PopularProductItem item={item} key={index}/>
                ))}
            </div>
        </div>
    </section>

}

export default PopularProducts