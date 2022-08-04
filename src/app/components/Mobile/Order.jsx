import React from 'react'
import OrderItem from './OrderItem'

function Order(props) {

    // console.log('ORDERS', props?.order?.getOrderList.result)
    return (
        <div id="main">
            <header>
                <div className="back-links">
                    <a href="/">
                        <img src="/images/back.svg" className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="inner-header">
                    <h3>My Orders</h3>
                </div>
            </header>

            <section className="order-section pt-4 px-15">

                {props?.order?.getOrderList.result ? props?.order?.getOrderList.result.map((item) => (
                    < OrderItem key={item.id} item={item} />
                )) : <h3>Oops!!!...Nothing here!!</h3>}

            </section>
        </div>
    )
}

export default Order