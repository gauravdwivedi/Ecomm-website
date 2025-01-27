import React from "react";
import ReactDOM from "react-dom";
import config from "../../../config";
import Slider from "react-slick";
const Modal = (props) => {

    const clickHandle = (e) => {
        e.preventDefault();
        e.stopPropagation();

        props.isVisible(false)
    }

    return ReactDOM.createPortal(
        <div className="app-modal" onClick={(e) => clickHandle(e)}>
            {/* < div className=" slick-default theme-dots" >
                <Slider {...settings}>
                    {props.content.map((item) => (

                        <div className="slider-box" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button type="button" class="btn-close close-img " aria-label="Close" />
                            < img src={config.IMG_END_POINT + item.url} className="modal-img" />
                        </div>
                    ))}
                </Slider>
            </div > */}
            {props.children}
        </div>, document.getElementById('modal')
    )
}


export default Modal;