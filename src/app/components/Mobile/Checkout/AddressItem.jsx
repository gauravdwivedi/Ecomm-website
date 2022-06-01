import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AddAddress from './AddAddress';

function AddressItem(props) {
    const { id, first_name, last_name, address_1, address_2, city, country, postcode, primary, state, user_id } = props.item;
    console.log('CUrrent Index ', props.isCurrent)
    const { handleOnClick, isCurrent } = props;



    return (
        <>
            <li>
                <div className={`check-box ${isCurrent === id ? 'active' : ''}`}>
                    <div className="form-check d-flex ps-0">
                        <div>
                            <h4 className="name">{first_name}{' '}{last_name}</h4>
                            <div className="addess">
                                <h4>{address_1}, </h4>
                                {address_2 && <h4>{address_2}</h4>}
                                <h4>{city}, {state}</h4>
                                <h4>Zip Code -{postcode}</h4>
                            </div>
                            <h4>Arrival est: Apr 15 $0 Shipping</h4>
                        </div>
                        <input
                            className="radio_animated"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={isCurrent === id}
                            onChange={(e) => handleOnClick(e, id)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        </label>
                    </div>
                </div>
                {isCurrent === id && <div className="buttons">
                    <Link to={{
                        pathname: `/add-address`,
                        query: { data: props.item }
                    }}>edit</Link>
                </div>}
            </li>
        </>
    )
}

export default AddressItem