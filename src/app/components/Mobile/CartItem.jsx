import React from 'react';
import config from '../../../config';
import { Link } from 'react-router-dom';

function CartItem({ item, handleDeleteItem }) {

    // console.log('ITEM', item)


    return (
        <>
            <section className="cart-section pt-4 px-15">
                <div className="cart mb-4">
                    <div className="cart-box">
                        <Link to={`/product/${item?.slug}`} className="cart-img">
                            <img src={config.IMG_END_POINT + item.thumbnail} className="img-fluid" alt="" />
                        </Link>
                        <div className="cart-content">
                            <Link to="/product">
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                        <div className="delete-icon">
                            <img src="/images/icon/delete.svg" className="img-fluid" alt="" onClick={() => handleDeleteItem(item.id)} />
                        </div>
                    </div>
                    <div className="cart-option">
                        <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                            {" "}
                            Size- {item.size}
                        </h5>
                        <span className="divider-cls">|</span>
                        <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                            {item.color}
                        </h5>
                        <span className="divider-cls">|</span>
                        <h5 data-bs-toggle="offcanvas" data-bs-target="#removecart">
                            {item.quanity}
                        </h5>
                        <div className="price">
                            <h4>${item.price}</h4>
                        </div>
                    </div>
                    <a href="#"
                        className="btn btn-outline edit-btn text-capitalize w-100 mt-3">
                        Edit
                    </a>
                </div>
            </section>
        </>
    )
}

export default CartItem