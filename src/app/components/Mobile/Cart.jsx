import React from 'react'
import CartItem from './CartItem'

function Cart(props) {
    console.log('PROPS CART ITEM', props.cartListItems)

    return (
        <>
            <div id="main">
                {/* Header */}
                <header>
                    <div className="back-links">
                        <a href="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="inner-header">
                        <h3>Shopping Cart</h3>
                    </div>
                </header>
                {props.cartListItems && props.cartListItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                ))}
            </div>
            <section className="panel-space" />
            <section id="order-details" className="px-15 pt-0">
                <div className="order-details">
                    <div className="total-amount">
                        <h4>
                            Subtotal (VAT included) <span>$34</span>
                        </h4>
                    </div>
                    <a
                        href="#"
                        className="btn btn-outline checkout-btn text-capitalize w-100 mt-3"
                    >
                        Continue to checkout
                    </a>
                </div>
            </section>
        </>
    )
}

export default Cart