import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PopularProductItem from './PopularProductItem'
const PopularProducts = (props) => {

    // console.log('PROPS PopularProducts  ', props)

    const [cartlist, setCartlist] = useState([]);

    let items = props.items

    useEffect(() => {

        setCartlist(props.cartlist)

    }, [props.cartList])

    // const deleteCart = (id) => {
    //     console.log('Delete CART PRODUCT ID', id)
    //     props.deleteCartItem({ id }).then(res => {
    //         console.log('Deleted Cart Item', res)
    //         props.getAllProducts().then(res => console.log(res))
    //         props.cartList().then(res => setCartlist(res))
    //         console.log('CART LIST FER DELETE', cartlist)
    //     })
    // }

    // const addCart = (productId, variantId) => {
    //     let quantity = 1;
    //     props.addToCart({ productId, variantId, quantity }).then(res => {
    //         props.getAllProducts().then(res => console.log(res))
    //     })
    // }

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

export default PopularProducts