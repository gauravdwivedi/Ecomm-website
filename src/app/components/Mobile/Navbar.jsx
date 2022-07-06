import React, { useContext } from "react";
import authContext from "../../helpers/authContext";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    let { sideDrawerOpen } = props;

    let context = useContext(authContext)
    let isAuthenticated = context.isAuthenticated;


    const handleClick = (e) => {
        context.doLogout()
    }

    return (<>
        <div id="mySidenav" className="sidenav">
            <Link to="/" className="user-panel">
                <img src="/images/favourite-1.png" className="img-fluid user-img" alt="" />
                <span>App name</span>
            </Link>

            <div className="sidebar-content">
                <ul className="link-section">
                    {/* {sideDrawerOpen && SidebarData.map((item, index) => {
                        return <SidebarItem item={item} key={index} />
                    })} */}

                    {isAuthenticated && <li>
                        <Link to="/order">
                            <img src="/images/icon/sidenav-icon/bag.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>My Orders</span>
                            </div>
                        </Link>
                    </li>}
                    <li>
                        <Link to="/cart" >
                            <img src="/images/icon/sidenav-icon/Cart.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Cart</span>
                            </div>
                        </Link>
                    </li>
                    {isAuthenticated &&
                        <li>
                            <Link to="/myaccount" >
                                <img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>My Account</span>
                                </div>
                            </Link>
                        </li>
                    }

                    <li>
                        <Link to="/category" >
                            <img src="/images/icon/sidenav-icon/category.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Category</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/new-arrivals" >
                            <img src="/images/icon/sidenav-icon/new-arrivals.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>New Arrivals</span>
                            </div>
                        </Link>
                    </li>

                    {isAuthenticated &&
                        <li>
                            <Link to="/favourites" >
                                <img src="/images/icon/sidenav-icon/favourite.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>My Favourite</span>
                                </div>
                            </Link>
                        </li>}

                    <li>
                        <Link to="/contact" >
                            <img src="/images/icon/sidenav-icon/contact.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Contact</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/faq" >
                            <img src="/images/icon/sidenav-icon/faq.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>FAQ</span>
                            </div>
                        </Link>
                    </li>

                    {isAuthenticated &&
                        <li>
                            <Link onClick={(e) => handleClick(e)} >
                                <img src="/images/icon/sidenav-icon/logout.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>Logout</span>
                                </div>
                            </Link>
                        </li>}

                    {!isAuthenticated && <li>
                        <Link to="/login" >
                            <img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Login</span>
                            </div>
                        </Link>
                    </li>}

                </ul>
            </div>

        </div>
    </>
    )
}

export default Navbar