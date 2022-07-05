import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ConfirmItem from "./ConfirmItem";
import 'regenerator-runtime/runtime'

async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}

function Confirm(props) {
  const [total, setTotal] = useState(0);
  const [razorpayOrderId, setRazorpayOrderId] = useState("");
  const [razorpayPaymentId, setRazorpayPaymentId] = useState("");
  const [razorpaySignatureId, setRazorpaySignatureId] = useState("");
  const [isAddress, setIsAddress] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [addressId, setAddressId] = useState('');
  console.log('Cart List Items', props?.cartListItems)

  const history = useHistory();

  async function createOrder() {

    //productId, variantId, quantity, addressId
    console.log(addressId)

    let OrderItems = [];
    const list = props?.cartListItems;

    for (let i = 0; i < list.length; i++) {
      OrderItems.push({ 'productId': list[i].productId, 'variantId': list[i].variantId, 'quantity': 1 })
    }

    props.createOrder({ data: OrderItems, addressId }).then(res => {
      console.log('OrderId', res);
      displayRazorpay(res?.[0]?.result?.id || '');
    })
  }

  async function displayRazorpay(order_id) {
    console.log('Display Razor')
    const loadRazorpay = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!loadRazorpay) {
      alert("Razorpay is offline! Please try again later");
      return;
    }

    var options = {
      key: "rzp_test_0C9e0FJUuVdqGn",
      amount: total * 100,
      currency: "INR",
      name: "HoppedIn",
      description: "Test Transaction",
      image: "http://localhost:3003/images/logo.svg",
      order_id,
      handler: function (response) {
        // setRazorpayPaymentId(response.razorpay_payment_id)
        // setRazorpayOrderId(response.razorpay_order_id)
        // setRazorpaySignatureId(response.razorpay_signature)
        console.log(response)
        props.saveOrderDetails({ razorPayPaymentId: response.razorpay_payment_id, razorPaySignature: response.razorpay_signature }).then(res => {
          console.log('Response Save Order Detail', res)
          if (res && res[0].result.status == 'captured') {
            history.push({
              pathname: '/checkout/order-placed',
              state: { addressId: res[0]?.result?.addressId }
            })
          }
        })

      },
      prefill: {
        name: `${firstName} ${lastName}`,
      },
    };

    var paymentObject = new window.Razorpay(options);
    paymentObject.open();

  }

  useEffect(() => {
    calculateTotal(props?.cartListItems);
  });

  useEffect(() => {
    if (props.history.location.query.selectedAddress) {
      // console.log(props.history.location?.query?.selectedAddress[0]);
      setIsAddress(true);
      setAddressId(props.history.location.query.selectedAddress[0].id);
      setFirstName(props.history.location.query.selectedAddress[0].firstName);
      setLastName(props.history.location.query.selectedAddress[0].lastName);
      setAddress(props.history.location.query.selectedAddress[0].address1);
      setCity(props.history.location.query.selectedAddress[0].city);
      setState(props.history.location.query.selectedAddress[0].state);
      setCountry(props.history.location.query.selectedAddress[0].country);
      setPostcode(props.history.location.query.selectedAddress[0].postcode);
    }
  });

  const calculateTotal = (list) => {
    let sum = 0;
    list?.forEach((value, index, array) => {
      sum += value.price;
    });
    // console.log('Total Price', sum)
    setTotal(sum);
  };

  const clickOnBack = () => {
    // if (isAddress) {
    //   history.goBack();
    // }
    history.goBack();
  }

  return (
    <>
      <div id="main">
        {/* Header */}
        <header className="none-bg">
          <div className="back-links">
            <button onClick={clickOnBack} style={{
              outline: 'none', border: 'none', background: 'none'
            }}>
              < img src="/images/back-black.svg" className="img-fluid" alt="" />
            </button>
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

        {
          props?.cartListItems?.map((item, index) => (
            <ConfirmItem item={item} key={index} />

          ))
        }

        {/* <AddressItem item={props?.history?.location?.query?.selectedAddress} /> */}

        <div className="total-amount" style={{ margin: "4%" }}>
          <h4 style={{ display: "flex", justifyContent: "space-between" }}>
            Total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={createOrder}
          className="btn confirm-btn mt-4 flex-fill  "
          style={{
            width: "90%",
            margin: "0",
            position: "fixed",
            top: "90%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          Confirm and Pay
        </button>

        {
          isAddress && (
            <div className="d-flex">
              <div style={{ marginLeft: "20px" }}>
                <h2>Deliver to:</h2>
                <h4 className="name ">
                  {firstName} {lastName}
                </h4>
                <div className="addess">
                  <h4 className="h4-confirm-address">{address}, </h4>
                  <h4 className="h4-confirm-address">
                    {city}, {state}
                  </h4>
                  <h4 className="h4-confirm-address">Zip Code -{postcode}</h4>
                </div>
                <h4 className="h4-confirm-address">
                  Arrival est: Apr 15 $0 Shipping
                </h4>
              </div>
            </div>
          )
        }

        <button
          className="change-address"
          onClick={() => {
            history.push("/address");
          }}
        >
          Change Address
        </button>
      </div >
      <section className="panel-space" />
    </>
  );
}

export default Confirm;
