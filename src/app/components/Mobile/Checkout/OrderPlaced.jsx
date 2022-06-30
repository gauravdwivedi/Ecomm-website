import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const OrderPlaced = (props) => {
    const [address, setAddress] = useState('');


    useEffect(() => {
        console.log(props.a)
    }, [])

    return (
        <>
            <header class="none-bg">
                <div class="back-links">
                    <Link to="/">
                        <img src="images/back-black.svg" class="img-fluid" alt="" /> <span> Back </span>
                    </Link>
                </div>
            </header>
            <section class="order-success-section px-15 d-flex align-items-center text-center">
                <div>
                    <img src="images/order-place.svg" class="img-fluid" alt="" />
                    <h1>Order Successful!</h1>
                    <h2>3711 Spring Hill Rd undefined nougtrte Tallahassee, Nevada 52874 United States.</h2>
                </div>
            </section>

            <section class="panel-space"></section>

            <section id="order-details" class="px-15 pt-0">
                <div class="order-details">
                    <a href="#" class="btn my-order text-capitalize w-100 mt-3">My Orders</a>
                    <a href="#" class="btn continue-shopp text-capitalize w-100 mt-3">Continue Shopping</a>
                </div>
            </section>
        </>
    )
}


export default OrderPlaced;