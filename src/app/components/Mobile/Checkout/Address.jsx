import React, { useState } from 'react'
import AddressItem from './AddressItem'
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";


function Address(props) {
    const [isCurrent, setIsCurrent] = useState(1);
    const [isCartItem, setIsCartItem] = useState(false);
    const [total, setTotal] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState('');

    const history = useHistory();

    useEffect(() => {

        if (localStorage.getItem('isCartItem')) {
            // console.log('localstorage')
            setIsCartItem(true)
        }

        if (localStorage.getItem('total')) {
            setTotal(localStorage.getItem('total'))
        }

        if (props.history.location?.state?.isCartItem) {
            setIsCartItem(true)
            if (isCartItem) {
                localStorage.setItem('isCartItem', isCartItem);

            }
        }

        if (props?.history?.location?.query?.total) {
            setTotal(props?.history?.location?.query?.total)
            localStorage.setItem('total', props?.history?.location?.query?.total)
            setIsCartItem(true);
        }


    })

    const handleOnClick = (e, id) => {
        e.stopPropagation();
        // console.log('Cliked', id)
        setIsCurrent(id)
        let add = props.list.filter((item) => item.id === id)
        setSelectedAddress(add)
    }

    const ClickOnContinue = () => {
        if (selectedAddress) {
            history.push({
                pathname: `/confirm`,
                query: { total: total, selectedAddress }
            })
        }
        toast.error("Please Select an Address!")
    }

    const onBackClick = () => {
        // console.log('IsCartItem On Back', isCartItem)
        // if (isCartItem) {
        //     history.push({
        //         pathname: '/cart'
        //     })
        // } else {
        //     history.push('/account')
        // }
        history.goBack();
    }

    return (
        <div id="main">
            {/* Header */}
            <header className="none-bg">
                <div className="back-links">
                    <button style={{ border: 'none', outline: 'none', background: 'none' }}
                        // to={total ? '/cart' : '/account'}
                        onClick={onBackClick}
                    >
                        <img src="/images/back-black.svg" className="img-fluid" alt="" />
                    </button>
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
                            <AddressItem item={item} key={item.id} isCurrent={isCurrent} handleOnClick={handleOnClick} isCartItem={isCartItem} />
                        ))}

                    </ul>
                    <Link
                        to={
                            {
                                pathname: '/add-address',
                                query: {
                                    isCartItem
                                }
                            }
                        }
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
                    <button
                        // to={{
                        //     pathname: `/confirm`,
                        //     query: { total: total, selectedAddress }
                        // }}
                        onClick={ClickOnContinue}
                        className="btn btn-outline checkout-btn text-capitalize w-100 mt-3">
                        Continue
                    </button>
                    <Toaster />
                </div>
            </section>}
        </div>
    )
}

export default Address