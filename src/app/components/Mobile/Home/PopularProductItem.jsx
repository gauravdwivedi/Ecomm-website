import React from 'react';
import config from '../../../../config';

function PopularProductItem({ item }) {

    console.log('Popular Product Items', item)
    return (
        <>
            <div className="col-md-4 col-6">
                <div className="product-box ratio_square">
                    <div className="img-part">
                        <a href={"/product/" + item.slug} className="bg-size"><img src={config.IMG_END_POINT + item?.images[0]?.url} alt="" className="img-fluid bg-img" /></a>
                        <div className="hrs-btn">
                            <span><img src="/images/hr-icon.svg" alt="" />
                                <h6>3 Hrs</h6>
                            </span>
                        </div>
                        <div className="wishlist-btn">
                            <ul>
                                <li><img src="/images/product-icon/play-icon.svg" alt="" /></li>
                                <li><img src="/images/product-icon/notify-icon.svg" alt="" /></li>
                                <li><img src="/images/product-icon/bag-icon.svg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <a href="#">
                            <h4>{item.title}</h4>
                        </a>
                        <div className="price">
                            <h4>${item?.attributes[0]?.discounted_price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProductItem