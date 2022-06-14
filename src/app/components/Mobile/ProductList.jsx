import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Detail from './Detail';

function ProductList(props) {
    return (
        <div className='videoCard'>
            {props.productList.map((item, index) => (
                <Detail
                    detail={item}
                    key={index}
                    fetchProductDetails={props.fetchProductDetails}
                    likeProduct={props.likeProduct}
                    unlikeProduct={props.unlikeProduct}
                    addToCart={props.addToCart}
                    favProduct={props.favProduct}
                    unfavProduct={props.unfavProduct}
                    getallproducts={props.getAllProducts}
                    className="video__player"
                />
            ))}
        </div>
    )
}

export default ProductList