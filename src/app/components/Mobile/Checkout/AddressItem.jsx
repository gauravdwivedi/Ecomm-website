import React, { useState } from 'react'

function AddressItem(props) {
    const { id, Name, City, Lane, State, Zip } = props.item;
    console.log('CUrrent Index ', props.isCurrent)
    const { handleOnClick, isCurrent } = props;


    return (
        <>
            <li>
                <div className={`check-box ${isCurrent === id ? 'active' : ''}`}>
                    <div className="form-check d-flex ps-0">
                        <div>
                            <h4 className="name">{Name}</h4>
                            <div className="addess">
                                <h4>{Lane}, </h4>
                                <h4>{City}, {State}</h4>
                                <h4>Zip Code -{Zip}</h4>
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
                    <a href="#">edit</a>
                </div>}
            </li>
        </>
    )
}

export default AddressItem