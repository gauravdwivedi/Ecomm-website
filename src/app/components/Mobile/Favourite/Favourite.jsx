import React, { useState, useEffect } from 'react';
import FavouriteItem from './FavouriteItem';
const Favourite = React.memo(function Favourite(props) {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        if (props?.ProductList) {
            setAllProducts(props.ProductList)
        }
    }, [props.ProductList])

    const favList = filterFavProduct()

    function filterFavProduct() {
        let favList = props?.Favlist?.map((item) => {
            return props.ProductList.filter(product => product.id === item.product_id)
        })
        return favList
    }

    function handleClick(id) {
        props.unfavProduct({ productId: id }).then((res) => {
            props.getAllProducts().then(res => console.log(res))
        })
    }

    return (
        <>
            <div id="main">
                {/* Header */}
                <header>
                    <div className="back-links">
                        <a href="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </a>
                    </div>
                    <div className="inner-header">
                        <h3>My Favourite</h3>
                    </div>
                </header>
                {favList.length > 0 && favList.map((item, index) => (

                    <FavouriteItem item={item} key={index} handleClick={handleClick} />)
                )}
            </div>
        </>
    )
})

export default Favourite