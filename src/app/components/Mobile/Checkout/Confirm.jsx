import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ConfirmItem from './ConfirmItem'

function Confirm(props) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        calculateTotal(props?.cartListItems)
    })

    const calculateTotal = (list) => {
        let sum = 0;

        list?.forEach((value, index, array) => {
            sum += value.price;
        })

        console.log('Total Price', sum)
        setTotal(sum)
    }
    return (
        <>
            <div id="main">
                {/* Header */}
                <header className="none-bg">
                    <div className="back-links">
                        <Link to="/cart">
                            <img src="/images/back-black.svg" className="img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="inner-header confirm-bar">
                        <div className="progress orange">
                            <div
                                className="progress-bar"
                            // style={{ width: "100%", background: "#000000" }}
                            ></div>
                        </div>
                    </div>
                </header>

                {props?.cartListItems?.map((item, index) => (
                    <ConfirmItem item={item} key={index} />
                ))}


                <div className="total-amount" style={{ margin: '4%' }}>
                    <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
                        Total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn confirm-btn mt-4 flex-fill  " style={{ width: '90%', margin: '0', position: 'fixed', top: '90%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    Confirm and Pay
                </button>
            </div >
            <section className="panel-space" />
        </>
    )
}

export default Confirm