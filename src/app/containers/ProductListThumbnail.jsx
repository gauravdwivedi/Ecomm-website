import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductListThumbnail from '../components/Mobile/Home/ProductListThumbnail'

import { loadBigStory, getAllProducts, getAllCategory, searchProducts } from "../data/ducks/home/actions";
import { cartList, deleteCartItem } from "../data/ducks/cart/actions";
import AuthContext from "../helpers/authContext";
import {
    fetchProductDetails,
    likeProduct,
    unlikeProduct,
    addToCart,
    favProduct,
    unfavProduct
} from "../data/ducks/detail/actions"

class ProductListThumbnailContainer extends PureComponent {
    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [
            //ssr.dispatch(loadBigStory()), //SSR rendering here
            // ssr.dispatch(getAllProducts()),
            // ssr.dispatch(getAllCategory())

        ];
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            show: false
        }
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList() {
        this.setState({
            loading: true
        }, () => {
            this.props.getAllProducts().then((res) => {
                console.log('RES THUMBNAIL', res)
            })
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <ProductListThumbnail {...this.props} loading={this.state.loading} />
                        :
                        <div>Desktop</div>
                }
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    productList: state.home.productList
})


const mapDispatchToProps = {
    getAllProducts,
    getAllCategory,
    likeProduct,
    unlikeProduct,
    addToCart,
    deleteCartItem,
    cartList,
    favProduct,
    unfavProduct,
    searchProducts
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListThumbnailContainer)