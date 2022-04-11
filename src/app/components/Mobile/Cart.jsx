import React from 'react'

function Cart() {
    console.log('Called')
    return (
        <>
            <div id="main">
                {/* Header */}
                <header>
                    <div className="back-links">
                        <a href="index.html">
                            <img src="images/back.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="inner-header">
                        <h3>Shopping Cart</h3>
                    </div>
                </header>
                <section className="cart-section pt-4 px-15">
                    <div className="cart mb-4">
                        <div className="cart-box">
                            <a href="#" className="cart-img">
                                <img src="images/cart-img.png" className="img-fluid" alt="" />
                            </a>
                            <div className="cart-content">
                                <a href="product.html">
                                    <h4>Perry Blue Dress</h4>
                                </a>
                            </div>
                            <div className="delete-icon">
                                <img src="images/icon/delete.svg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="cart-option">
                            <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                                {" "}
                                S - 26
                            </h5>
                            <span className="divider-cls">|</span>
                            <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                                Blue
                            </h5>
                            <span className="divider-cls">|</span>
                            <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                                x1
                            </h5>
                            <div className="price">
                                <h4>$34</h4>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="btn btn-outline edit-btn text-capitalize w-100 mt-3"
                        >
                            Edit
                        </a>
                    </div>
                </section>
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