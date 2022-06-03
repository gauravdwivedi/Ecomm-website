import React, { useState, useEffect } from 'react';
import FavouriteItem from './FavouriteItem';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const Favourite = React.memo(function Favourite(props) {
    const history = useHistory();

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
    function FavItemClickHandler(slug) {
        console.log('CLiked ', slug)
        history.push(`/product/${slug}`)
    }

    return (
        <>
            <div id="main">
                {/* Header */}
                <header>
                    <div className="back-links">
                        <Link to="/">
                            <img src="/images/back.svg" className="img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className="inner-header">
                        <h3>My Favourite</h3>
                    </div>
                </header>
                {allProducts.length > 0 && allProducts.map((item, index) => (

                    <FavouriteItem item={item} key={index} handleClick={handleClick} onItemClickHandler={FavItemClickHandler} />)
                )}
            </div>
            <section className="panel-space"></section>

            <div className="bottom-panel">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/home.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>category</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>cart</span>
                        </Link>
                    </li>
                    <li className="active">
                        <Link to="/favourites" >
                            <div className="icon">
                                <img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span style={{ color: 'white' }}>wishlist</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/account">
                            <div className="icon">
                                <img src="/images/icon/footer-icon/user-2.svg" className="img-fluid bg-img" alt="" />
                            </div>
                            <span>Account</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
})

export default Favourite