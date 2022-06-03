import React from 'react'
import config from '../../../../config/index'
import { Link } from "react-router-dom"

function FavouriteItem(props) {
    console.log(props)
    return (<>
        <section className="favourite-section px-15 pt-4">
            <div className="product-section">
                <div className="row gy-3">
                    <div className="col-12">
                        <div className="product-inline">
                            <Link to={`/product/${props?.item[0]?.slug}`} >
                                <img src={config.IMG_END_POINT + props?.item[0]?.images[0].url} className="fav-img img-fluid" alt="" />
                            </Link>
                            <div className="product-inline-content" onClick={() => props.onItemClickHandler(props?.item[0]?.slug)}>
                                <div>
                                    <a href="#">
                                        <h4>{props?.item[0]?.title}</h4>
                                    </a>
                                    <h5>SKU 84676</h5>
                                    <div className="price">
                                        <h4>${props?.item[0]?.attributes[0]?.price}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="favourite-btn">
                                <img src="images/icon/fav-icon.svg" alt="" onClick={() => props.handleClick(props?.item[0]?.id)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default FavouriteItem