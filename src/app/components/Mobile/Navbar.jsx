import React from "react";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";

const Navbar = (props) => {
    let { sideDrawerOpen } = props;
    return (<>
        <div id="mySidenav" className="sidenav">
            <a href="#" class="user-panel">
                <img src="images/favourite-1.png" className="img-fluid user-img" alt="" />
                <span>App name</span>
            </a>

            <div className="sidebar-content">
                <ul className="link-section">
                    {sideDrawerOpen && SidebarData.map((item) => {
                        return <SidebarItem item={item} />
                    })}
                </ul>
            </div>

        </div>
    </>
    )
}

export default Navbar