import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './GoogleMap';

function AddressItem(props) {
    console.log(props)
    const { id, firstName, lastName, address1, city, country, postcode, primary, state, userId, latitude, longitude } = props.item;
    // console.log('CUrrent Index ', props.isCurrent)
    const { handleOnClick, isCurrent, isCartItem } = props;
    // console.log('IsCatrItem on AddressITEM', isCartItem)

    useEffect(() => {



    })

    useEffect(() => {
        if (isCartItem) {
            localStorage.setItem('isCartItem', isCartItem);
        }
    })


    function checkIfCartExists() {

    }

    // console.log('Address props', props, 'item id', id, 'IsCurrent', isCurrent)

    return (
        <>
            <li onClick={(e) => handleOnClick(e, id)}>
                <div className={`check-box ${isCurrent === id ? 'active' : ''}`}>

                    <div className="form-check d-flex ps-0">

                        <div>
                            <h4 className="name">{firstName}{' '}{lastName}</h4>
                            <div className="addess">
                                <h4>{address1}, </h4>

                                <h4>{city}, {state}</h4>
                                <h4>Zip Code -{postcode}</h4>
                            </div>
                            <h4>Arrival est: Apr 15 $0 Shipping</h4>
                        </div>

                        <input style={{ display: 'block', height: '0' }}
                            className="radio_animated"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={isCurrent === id}
                        // onChange={(e) => handleOnClick(e, id)}
                        />

                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        </label>
                    </div>
                </div>
                {isCurrent === id && <>
                    <div className="buttons" style={{ backgroundColor: '#F5F5F5' }}>
                        <Link to={{
                            pathname: `/add-address`,
                            query: {
                                data: props.item,
                                isCartItem: isCartItem
                            }
                        }}>edit</Link>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <GoogleMap lat={latitude} lng={longitude} />
                    </div>
                </>}
            </li>
        </>
    )
}

export default React.memo(AddressItem)