import React from 'react'

function Order() {
    return (
        <div id="main">
            <header>
                <div className="back-links">
                    <a href="/">
                        <img src="/images/back.svg" className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="inner-header">
                    <h3>My Orders</h3>
                </div>
            </header>

            <section className="order-section pt-4 px-15">
                <div className="order-bg mb-3">
                    <div className="tracking-title">
                        <h5 className="order-no">Order number: #25452-8</h5>
                        <h6 className="order-date">Order At : 14 Aug 2021</h6>
                    </div>
                    <div className="order-details">
                        <ul>
                            <li>
                                <h4>Order status <span>Shipping</span></h4>
                            </li>
                            <li>
                                <h4>Items <span className="text-green">2 items purchesed</span></h4>
                            </li>
                            <li>
                                <h4>Total amount <span>$48.00</span></h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="order-bg mb-3">
                    <div className="tracking-title">
                        <h5 className="order-no">Order number: #25452-8</h5>
                        <h6 className="order-date">Order At : 14 Aug 2021</h6>
                    </div>
                    <div className="order-details">
                        <ul>
                            <li>
                                <h4>Order status <span>Shipping</span></h4>
                            </li>
                            <li>
                                <h4>Items <span className="text-green">2 items purchesed</span></h4>
                            </li>
                            <li>
                                <h4>Total amount <span>$48.00</span></h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Order