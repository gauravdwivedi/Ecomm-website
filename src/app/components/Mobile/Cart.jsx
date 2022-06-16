import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function Cart(props) {
    const [deleteItem, setDeleteItem] = useState(false)
    const [itemList, setItemList] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        setItemList(props.cartListItems)
    }, [props.cartListItems])

    useEffect(() => {
        calculateTotal(props?.cartListItems)
    })

    const handleDeleteItem = (id) => {
        props.deleteCartItem({ id }).then((res) => {
            // console.log('RESPONSE', res)
            let newItemList = itemList.filter(item => item.id != id)
            props.cartList().then(res => {

            })
            // console.log('ITEM LIST =>', newItemList)
            // setItemList(newItemList)
            // calculateTotal(newItemList)
        })
    }

    const calculateTotal = (list) => {
        let sum = 0;
        list?.forEach((value, index, array) => {
            sum += value.price;
        })
        // console.log('Total Price', sum)
        setTotal(sum)
    }

    return (
        <>
            <div id="main">
                {/* Header */}
                <header>
                    <div className="back-links">
                        <Link to="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="inner-header">
                        <h3>Shopping Cart</h3>
                    </div>
                </header>
                {itemList && itemList.map((item, index) => (
                    <CartItem item={item} key={index} handleDeleteItem={handleDeleteItem} />
                ))}
            </div>
            <section className="panel-space" />
            <section id="order-details" className="px-15 pt-0">
                <div className="order-details">
                    <div className="total-amount">
                        <h4>
                            Subtotal (VAT included) <span>${total}</span>
                        </h4>
                    </div>
                    {
                        itemList?.length <= 0 ? <Link
                            to="/"
                            className="btn btn-outline checkout-btn text-capitalize w-100 mt-3"
                        >
                            Add items from wishlist
                        </Link> : <Link
                            to={{
                                pathname: `/address`,
                                query: { total: total }
                            }}

                            className="btn btn-outline checkout-btn text-capitalize w-100 mt-3"
                        >
                            Continue to checkout
                        </Link>
                    }
                </div>
            </section>
        </>
    )
}

export default Cart