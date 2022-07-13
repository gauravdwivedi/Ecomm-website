import React, { Fragment, useContext, useEffect, useState } from "react";
import authContext from "../../../helpers/authContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useGeoLocation from "../../useGeoLocation";
import GoogleMap from "./GoogleMap";
import { useHistory } from "react-router-dom";

function AddAddress(props) {
    const history = useHistory();

    const context = useContext(authContext)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [primary, setPrimary] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState('')
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isCartItem, setIsCartItem] = useState(false);
    const [mapsrc, setMapsrc] = useState('');


    const location = useGeoLocation()

    useEffect(() => {
        // console.log('Add Address History props', props.history)
        if (props.history.location.query?.isCartItem) {
            setIsCartItem(true)
        }
        if (!context.isAuthenticated) {
            // console.log('Logged In')
            props.history.replace('/login')
        }
    })

    useEffect(() => {
        if (props.history.location.query?.data) {
            setIsEdit(true)
            setFirstName(props?.history?.location?.query?.data.firstName)
            setLastName(props?.history?.location?.query?.data.lastName);
            setAddress(props?.history?.location?.query?.data.address1);
            setCity(props?.history?.location?.query?.data.city);
            setZipCode(props?.history?.location?.query?.data.postcode);
            setState(props?.history?.location?.query?.data.state);
            setId(props?.history?.location?.query?.data.id);
        }
    }, [isEdit])


    useEffect(() => {
        if (location) {
            console.log('LOCATION', location)
            setLongitude(location?.coordinates?.lng);
            setLatitude(location?.coordinates?.lat);
            setMapsrc(`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed`)
        }
    })

    const addAddressValidation = (form) => {

        let return_type = true;
        let firstName = form.elements['firstName'];
        let lastName = form.elements['lastName'];
        let address = form.elements['address'];
        let city = form.elements['city'];
        let state = form.elements['state'];
        let zipCode = form.elements['zipCode'];


        // console.log('==>', firstName, lastName, city, state, zipCode)

        var elems = document.querySelectorAll('.help-block');
        [].forEach.call(elems, function (el) {
            el.parentNode.classList.remove('error');
            el.parentNode.removeChild(el);
        });

        //First Name
        if (firstName.value == '') {
            firstName.parentNode.classList.add('error');
            firstName.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">First Name is required</div>'
            );
            return_type = false;
        } else {
            let testName = /^[a-zA-Z]+$/;
            if (!testName.test(firstName.value)) {
                firstName.parentNode.classList.add('error');
                firstName.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger>Please enter a valid name</div>'
                );
                return_type = false;
            }
        }

        //Last Name
        if (lastName.value == '') {
            lastName.parentNode.classList.add('error');
            lastName.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Last Name is required</div>'
            );
            return_type = false;
        } else {
            let testName = /^[a-zA-Z]+$/;
            if (!testName.test(lastName.value)) {
                lastName.parentNode.classList.add('error');
                lastName.parentNode.insertAdjacentHTML(
                    'beforeend',
                    '<div class="help-block alert alert-danger>Please enter a valid name</div>'
                );
                return_type = false;
            }
        }

        if (address.value == '') {
            address.parentNode.classList.add('error');
            address.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Please enter address.</div>'
            );
            return_type = false;
        }

        if (city.value == '') {
            city.parentNode.classList.add('error');
            city.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Please enter city.</div>'
            );
            return_type = false;
        }

        if (state.value == '') {
            state.parentNode.classList.add('error');
            state.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Please enter state.</div>'
            );
            return_type = false;
        }

        if (zipCode.value == '') {

            zipCode.parentNode.classList.add('error');
            zipCode.parentNode.insertAdjacentHTML(
                'beforeend',
                '<div class="help-block alert alert-danger">Please enter zipCode.</div>'
            );
            return_type = false;
        }
        console.log(return_type)
        return return_type;
    }

    const doSubmit = (e) => {
        e.preventDefault();
        console.log('Add Address')

        let form = document.forms["add-address"];
        if (addAddressValidation(form)) {
            props.addAddress({
                firstName, lastName, address, city, state, zipcode: zipCode, primary, latitude, longitude
            }).then(res => {
                // console.log('ADD ADDRESS Response', res)
                toast.success("Address added")
                props.history.push({
                    pathname: '/address',
                    state: { isCartItem }
                })
            })
        }
    }

    const doEditSubmit = (e) => {
        e.preventDefault();

        let form = document.forms['edit-address'];
        if (addAddressValidation(form)) {
            props.editAddress({
                id, firstName, lastName, address, city, state, zipcode: zipCode, primary, latitude, longitude
            }).then(res => {
                // console.log('Edit Address', res);
                toast.success("Address updated successfuly!");
                props.history.push({
                    pathname: '/address',
                    state: { isCartItem }
                });
            })
        }
    }

    const clickOnBack = () => {
        history.goBack();
    }

    return <>
        <div>
            <header>
                <div className="back-links">
                    <button onClick={clickOnBack} style={{ background: 'none', border: 'none' }}>
                        <img src="images/back.svg" className="img-fluid" alt="" />
                    </button>
                </div>
                <div className="inner-header">
                    {isEdit ? <h3>Edit Address</h3> : <h3>Add Address</h3>}
                </div>
            </header>
            {!isEdit && <form name="add-address" onSubmit={(e) => doSubmit(e)}>
                <section className="add-address pt-4 px-15">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="firstName" id="floatingFirstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="floatingFirstName">First name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="lastName" id="floatingLastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="floatingLastName">Last name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="address" className="form-control" name="address" id="floatingAddress" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label htmlFor="floatingAddress">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="city" className="form-control" id="floatingcity" name="city" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} />
                        <label htmlFor="floatingCity">City</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="state" className="form-control" id="floatingstate" name="state" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} />
                        <label htmlFor="floatingState">State</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingzip" name="zipCode" placeholder="zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        <label htmlFor="floatingzip">Zip code</label>
                    </div>
                </section>

                <div className="add-address-btn px-15"><input type="submit" className="btn btn-outline add-btn text-capitalize w-100 mt-3" value="Add Address" /></div>
            </form>
            }
            {isEdit &&
                <form name="edit-address" onSubmit={doEditSubmit}>
                    <section className="add-address pt-4 px-15">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="firstName" id="floatingInput" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <label htmlFor="floatingInput">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="lastName" id="floatingPassword" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <label htmlFor="floatingPassword">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="address" className="form-control" name="address" id="floatingaddress" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <label htmlFor="floatingPassword">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="city" className="form-control" id="floatingcity" name="city" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            <label htmlFor="floatingPassword">City</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="state" className="form-control" id="floatingstate" name="state" placeholder="state" value={state} onChange={(e) => setState(e.target.value)} />
                            <label htmlFor="floatingPassword">State</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="zip-code" className="form-control" id="floatingzip" name="zipCode" placeholder="zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                            <label htmlFor="floatingPassword">Zip code</label>
                        </div>
                        {/* {latitude && <div className="mb-3">{latitude}</div>} */}
                        {/* {longitude && <div className=" mb-3">{longitude}</div>} */}
                    </section>

                    <div className="add-address-btn px-15"><input type="submit" className="btn btn-outline add-btn text-capitalize w-100 mt-3" value="Update Address" /></div>
                </form>
            }
            <Toaster />
            {location && location.loaded && latitude && longitude &&
                <GoogleMap lat={latitude} lng={longitude} />}
        </div><section className="panel-space"></section></>
}


export default AddAddress