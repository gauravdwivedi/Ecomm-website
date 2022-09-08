import React, { useState, useEffect } from 'react'
import PopularProductItem from './PopularProductItem'

const ProductListThumbnail = (props) => {

    const [cartlist, setCartlist] = useState([]);



    useEffect(() => {
        if (props?.productList) {
            console.log('PROPS', props)
        }
        setCartlist(props.cartlist)

    }, [props.cartList])



    return <section className="category-section popular-product px-15 pt-4">
        <div className="title-part">
            <h2>All Products</h2>
        </div>
        <div className="product-section">
            <div className="row gy-3 gx-3">
                {props.productList.length > 0 && props.productList.map((item, index) => (
                    <PopularProductItem
                        item={item}
                        key={index}
                        cartlist={props.cartlist}
                        favProduct={props.favProduct}
                        unfavProduct={props.unfavProduct}
                        deleteCart={props.deleteCartItem}
                        addCart={props.addToCart}
                    />
                ))}
            </div>
        </div>
    </section>

}

export default ProductListThumbnail