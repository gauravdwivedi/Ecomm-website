import React from 'react'
import Footer from '../Mobile/partials/Footer';

function Account() {
    return (
        <>
            <div id="main">


                <header>
                    <div className="back-links">
                        <a href="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="inner-header">
                        <h3>Account</h3>
                    </div>
                </header>

                <section className="account-section pt-4 px-15">
                    <div className="element-menu">
                        <ul>
                            <li><img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" /><a href="#">My Account</a></li>
                            <li><img src="/images/icon/sidenav-icon/address.svg" className="img-fluid" alt="" /><a href="#">Address</a></li>
                            <li><img src="/images/icon/sidenav-icon/payment.svg" className="img-fluid" alt="" /><a href="#">Payments</a></li>
                            <li><img src="/images/icon/sidenav-icon/logout.svg" className="img-fluid" alt="" /><a href="#">Log out</a></li>
                        </ul>
                    </div>
                </section>


            </div>

            <section className="panel-space"></section>

            <div className="bottom-panel">
                <ul>
                    <li>
                        <a href="/">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/home.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>category</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>cart</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>wishlist</span>
                        </a>
                    </li>
                    <li className="active">
                        <a href="#">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/user-2.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>Account</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Account