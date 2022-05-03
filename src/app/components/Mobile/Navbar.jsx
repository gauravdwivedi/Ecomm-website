import React, { useContext } from "react";
import authContext from "../../helpers/authContext";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

const Navbar = (props) => {
    let { sideDrawerOpen } = props;

    let context = useContext(authContext)
    let isAuthenticated = context.isAuthenticated;


    const handleClick = (e) => {
        context.doLogout()
    }

    return (<>
        <div id="mySidenav" className="sidenav">
            <a href="/" className="user-panel">
                <img src="/images/favourite-1.png" className="img-fluid user-img" alt="" />
                <span>App name</span>
            </a>

            <div className="sidebar-content">
                <ul className="link-section">
                    {/* {sideDrawerOpen && SidebarData.map((item, index) => {
                        return <SidebarItem item={item} key={index} />
                    })} */}

                    {isAuthenticated && <li>
                        <a href="#">
                            <img src="/images/icon/sidenav-icon/bag.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>My Orders</span>
                            </div>
                        </a>
                    </li>}
                    <li>
                        <a href="/cart" >
                            <img src="/images/icon/sidenav-icon/Cart.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Cart</span>
                            </div>
                        </a>
                    </li>
                    {isAuthenticated &&
                        <li>
                            <a href="/myaccount" >
                                <img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>My Account</span>
                                </div>
                            </a>
                        </li>
                    }

                    <li>
                        <a href="/category" >
                            <img src="/images/icon/sidenav-icon/category.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Category</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/new-arrivals" >
                            <img src="/images/icon/sidenav-icon/new-arrivals.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>New Arrivals</span>
                            </div>
                        </a>
                    </li>

                    {isAuthenticated &&
                        <li>
                            <a href="/favourites" >
                                <img src="/images/icon/sidenav-icon/favourite.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>My Favourite</span>
                                </div>
                            </a>
                        </li>}

                    <li>
                        <a href="/contact" >
                            <img src="/images/icon/sidenav-icon/contact.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Contact</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/faq" >
                            <img src="/images/icon/sidenav-icon/faq.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>FAQ</span>
                            </div>
                        </a>
                    </li>

                    {isAuthenticated &&
                        <li>
                            <a onClick={(e) => handleClick(e)} >
                                <img src="/images/icon/sidenav-icon/logout.svg" className="img-fluid" alt="" />
                                <div className="content">
                                    <span>Logout</span>
                                </div>
                            </a>
                        </li>}

                    {!isAuthenticated && <li>
                        <a href="/login" >
                            <img src="/images/icon/sidenav-icon/account.svg" className="img-fluid" alt="" />
                            <div className="content">
                                <span>Login</span>
                            </div>
                        </a>
                    </li>}

                </ul>
            </div>

        </div>
    </>
    )
}

export default Navbar