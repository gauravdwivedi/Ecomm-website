import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const OrderPlaced = (props) => {
    const [address, setAddress] = useState('');


    useEffect(() => {

        console.log('ORDER PROPS', props?.address?.result[0])
        setAddress(props?.address?.result[0])

    }, [])

    return (
        <>
            <header class="none-bg">
                <div class="back-links">
                    <Link to="/">
                        <img src="/images/back-black.svg" class="img-fluid" alt="" /> <span> Back </span>
                    </Link>
                </div>
            </header>

            <section class="order-success-section px-15 d-flex align-items-center text-center" style={{ marginLeft: '20%' }}>
                <div>
                    <img src="/images/order-place.svg" class="img-fluid" alt="" />
                    <h1>Order Successful!</h1>
                    {address && <h2>{address.first_name} {' '} {address.last_name}</h2>}
                    {address && <h2> {address.postcode} {address.address_1} {address.city} {address.state}</h2>}
                </div>
            </section>

            <section class="panel-space"></section>
            <section id="order-details" class="px-15 pt-0">
                <div class="order-details">
                    <Link to="/order" class="btn my-order text-capitalize w-100 mt-3">My Orders</Link>
                    <a href="#" class="btn continue-shopp text-capitalize w-100 mt-3">Continue Shopping</a>
                </div>
            </section>
        </>
    )
}

export default OrderPlaced;