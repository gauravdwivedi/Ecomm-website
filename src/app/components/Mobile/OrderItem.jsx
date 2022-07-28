import React from 'react';


function OrderItem(props) {
    // console.log(props.item)
    return (
        <div className='order-bg mb-3'>
            <div className="order-bg mb-3">
                <div className="tracking-title">
                    <h5 className="order-no">Order number: #{props.item.id}</h5>
                    <h6 className="order-date">Order At : 14 Aug 2021</h6>
                </div>
                <div className="order-details">
                    <ul>
                        <li>
                            <h4>Order status <span>{props.item.deliveryStatus}</span></h4>
                        </li>
                        <li>
                            <h4>Items <span className="text-green">2 items purchesed</span></h4>
                        </li>
                        <li>
                            <h4>Total amount <span>${props.item.priceAfterTax}.00</span></h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OrderItem