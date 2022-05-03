import React from 'react'

function Confirm() {
    return (
        <>
            <div id="main">
                {/* Header */}
                <header className="none-bg">
                    <div className="back-links">
                        <a href="index.html">
                            <img src="/images/back-black.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="inner-header confirm-bar">
                        <div className="progress orange">
                            <div
                                className="progress-bar"
                                style={{ width: "100%", background: "#000000" }}
                            ></div>
                        </div>
                    </div>
                </header>
                <section className="confirm-product text-center px-15">
                    <div className="product-inline">
                        <a href="#">
                            <img src="/images/product/product3.png" className="img-fluid" alt="" />
                        </a>
                        <div className="product-inline-content">
                            <div>
                                <a href="#">
                                    <h4>Bershka Mom Jeans</h4>
                                </a>
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
                                        ID:0706502
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="order-payment px-15 mt-4">
                    <div className="order-details">
                        <ul>
                            <li>
                                <h4>
                                    Bershka Mom Jeans <span>$35</span>
                                </h4>
                            </li>
                            <li>
                                <h4>
                                    Taxes <span className="text-green">$8</span>
                                </h4>
                            </li>
                            <li>
                                <h4 className="fw-bold">
                                    Shipping <span>$5</span>
                                </h4>
                            </li>
                        </ul>
                        <div className="total-amount">
                            <h4>
                                Total <span>$48</span>
                            </h4>
                        </div>
                        <a href="#" className="btn confirm-btn w-100 mt-4">
                            Confirm and pay
                        </a>
                    </div>
                </section>
            </div>
            <section className="panel-space" />
        </>

    )
}

export default Confirm