import React from "react";

const SidebarItem = (props) => {
    // console.log('Called')
    return (

        <li>
            <a href={props.item.path}>
                <img src={props.item.icon} className="img-fluid" alt="" />
                <div className="content">
                    <span>{props.item.title}</span>
                </div>
            </a>
        </li>

    )
}



export default SidebarItem;