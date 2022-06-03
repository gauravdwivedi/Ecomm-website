import React from 'react'
import toast from 'react-hot-toast'
import PopularProductItem from './PopularProductItem'
const PopularProducts = (props) => {

    console.log('PROPS PopularProducts  ', props)

    let items = props.items

    const deleteCart = (id) => {
        console.log('Delete CART PRODUCT ID', id)
        props.deleteCartItem({ id }).then(res => {
            console.log('Deleted Cart Item', res)
            props.getAllProducts().then(res => console.log(res))
        })
    }

    const addCart = (productId, variantId) => {
        let quantity = 1;
        props.addToCart({ productId, variantId, quantity }).then(res => {
            props.getAllProducts().then(res => console.log(res))
        })
    }

    return <section className="category-section popular-product px-15 pt-4">
        <div className="title-part">
            <h2>Popular</h2>
            <a href="#">View All</a>
        </div>
        <div className="product-section">
            <div className="row gy-3 gx-3">
                {items.length > 0 && items.map((item, index) => (
                    <PopularProductItem
                        item={item}
                        key={index}
                        deleteCart={deleteCart}
                        addCart={addCart}

                    />
                ))}
            </div>
        </div>
    </section>

}

export default PopularProducts