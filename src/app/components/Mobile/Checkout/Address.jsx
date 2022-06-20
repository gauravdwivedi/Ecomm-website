import React, { useState } from 'react'
import AddressItem from './AddressItem'
import { Link } from "react-router-dom"
import { useEffect } from 'react';

function Address(props) {
    const [isCurrent, setIsCurrent] = useState(1);
    const [isCartItem, setIsCartItem] = useState(false);
    const [total, setTotal] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState('');

    useEffect(() => {
        if (props?.history?.location?.query?.total) {
            setTotal(props?.history?.location?.query?.total)
            setIsCartItem(true);
        }
    })

    const handleOnClick = (e, id) => {
        e.stopPropagation();
        console.log('Cliked', id)
        setIsCurrent(id)
        let add = props.list.filter((item) => item.id === id)
        setSelectedAddress(add)
    }

    return (
        <div id="main">
            {/* Header */}
            <header className="none-bg">
                <div className="back-links">
                    <Link to={total ? '/cart' : '/account'} >
                        <img src="/images/back-black.svg" className="img-fluid" alt="" />
                    </Link>
                </div>
                {/* Progress Bar */}
                <div className="inner-header confirm-bar">
                    <div className="progress orange">
                        <div className="address-progress-bar">
                        </div>
                    </div>
                </div>
            </header>

            <section className="ship-add-section pt-4 px-15">
                <div className="delivery-option-section">
                    <h4 className="para-heading">Select or add a shipping address</h4>
                    <ul>
                        {props.list && props.list.map((item) => (
                            <AddressItem item={item} key={item.id} isCurrent={isCurrent} handleOnClick={handleOnClick} />
                        ))}

                    </ul>
                    <Link
                        to="/add-address"
                        className="checkout-btn btn new-address-btn btn-outline text-capitalize w-100 mt-3 mb-4">
                        add address
                    </Link>
                </div>
            </section>

            <section className="panel-space" />

            {/* <section id="order-details" className="px-15 pt-0 b-top">
                <div className="order-details">
                    <div className="total-amount">
                        <h4>
                            Subtotal (VAT included) <span>$43</span>
                        </h4>
                    </div>
                    <a href="#" className="btn btn-outline checkout-btn text-capitalize w-100 mt-3">
                        Continue
                    </a>
                </div>
            </section> */}

            {isCartItem && <section id="order-details" className="px-15 pt-0">
                <div className="order-details">
                    <div className="total-amount">
                        <h4>
                            Subtotal (VAT included) <span>${total}</span>
                        </h4>
                    </div>
                    <Link
                        to={{
                            pathname: `/confirm`,
                            query: { total: total, selectedAddress }
                        }}
                        className="btn btn-outline checkout-btn text-capitalize w-100 mt-3">
                        Continue
                    </Link>

                </div>
            </section>}
        </div>
    )
}

export default Address