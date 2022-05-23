import React, { useState, useEffect } from 'react';
import FavouriteItem from './FavouriteItem';
const Favourite = React.memo(function Favourite(props) {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        if (props?.ProductList) {
            setAllProducts([...filterFavProduct()])
        }
    }, [props.ProductList])

    // const favList = filterFavProduct()

    function filterFavProduct() {
        let favList = props?.Favlist?.map((item) => {
            return props.ProductList.filter(product => product.id === item.product_id)
        })
        return favList
    }

    function handleClick(id) {
        let newList
        props.unfavProduct({ productId: id }).then((res) => {
            // props.getAllProducts().then(res => setAllProducts([...res[0].result.list]))
            newList = allProducts.filter((item) => item[0].id !== id)
            console.log('NEW LIST ', newList)
            setAllProducts(newList)
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
                {allProducts.length > 0 && allProducts.map((item, index) => (

                    <FavouriteItem item={item} key={index} handleClick={handleClick} />)
                )}
            </div>
        </>
    )
})

export default Favourite