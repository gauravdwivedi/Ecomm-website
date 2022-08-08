import React, { useContext, useEffect } from 'react'
import Footer from '../Mobile/partials/Footer';
import { Link } from 'react-router-dom';
import authContext from '../../helpers/authContext';

function Account(props) {

    const context = useContext(authContext);


    useEffect(() => {
        if (!context.isAuthenticated) {
            // console.log('Not Logged In');
            props.history.replace('/login')
        }
    })
    const handleLogout = (e) => {
        context.doLogout();
    }

    return (
        <>
            <div id="main">

                <header>
                    <div className="back-links">
                        <Link to="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="inner-header">
                        <h3>Account</h3>
                    </div>
                </header>

                <section className="account-section pt-4 px-15">
                    <div className="element-menu">
                        <ul>
                            <Link><li><img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" />My Account</li></Link>
                            <Link to={{ pathname: "/address", state: { fromAccount: true } }} ><li><img src="/images/icon/sidenav-icon/address.svg" className="img-fluid" alt="" />Address</li></Link>
                            <Link><li><img src="/images/icon/sidenav-icon/payment.svg" className="img-fluid" alt="" />Payments</li></Link>
                            <Link><li onClick={handleLogout}><img src="/images/icon/sidenav-icon/logout.svg" className="img-fluid" alt="" />Log out</li></Link>
                        </ul>
                    </div>
                </section>
            </div>

            <section className="panel-space"></section>

            <div className="bottom-panel">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/home.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span className="footer-span">home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span className="footer-span">category</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span className="footer-span">cart</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/favourites" >
                            <div className="icon">
                                <img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span className="footer-span" >wishlist</span>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link to="/account" >
                            <div className="icon">
                                <img src="/images/icon/footer-icon/user-2.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span className="footer-span">Account</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Account