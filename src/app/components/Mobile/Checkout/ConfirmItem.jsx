import React from "react";
import config from "../../../../config";

function ConfirmItem(props) {
    console.log('ITEM', props.item)

    return (
        <>
            <section className="confirm-product text-center px-15">
                <div className="product-inline">
                    <a href="#">
                        <img src={config.IMG_END_POINT + props.item.thumbnail} className="img-fluid" alt="" />
                    </a>
                    <div className="product-inline-content">
                        <div>
                            <a href="#">
                                <h4>{props.item.title}</h4>
                            </a>
                            <div className="cart-option">
                                <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                                    {" "}
                                    {props.item.size}
                                </h5>
                                <span className="divider-cls">|</span>
                                <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                                    {props.item.color}
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
                                {props.item.title} <span>${props.item.price}</span>
                            </h4>
                        </li>
                        <li>
                            <h4>
                                Taxes <span className="text-green">$8</span>
                            </h4>
                        </li>
                        <li>
                            <h4 className="fw-bold" >
                                Shipping <span>$5</span>
                            </h4>
                        </li>
                    </ul>


                </div>
            </section>
        </>
    )
}

export default ConfirmItem