import React from "react";
import ReactDOM from "react-dom";
import config from "../../../config";
import Slider from "react-slick";
const Modal = props => {
    let settings = {
        dots: true
    }
    console.log('MODAL', props)
    return ReactDOM.createPortal(
        <div className="app-modal">
            < div className=" slick-default theme-dots" >
                <Slider {...settings}>
                    {props.content.map((item) => (

                        <div className="slider-box">
                            < img src={config.IMG_END_POINT + item.url} className="img-fluid bg-img" />
                        </div>

                    ))}

                </Slider>
            </div >
        </div>, document.getElementById('modal')
    )
}


export default Modal;