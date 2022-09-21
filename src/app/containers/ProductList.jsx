import React, { PureComponent, Fragment } from "react";
import { connect } from 'react-redux';
import AuthContext from "../helpers/authContext";
import ProductList from "../components/Mobile/ProductList";
import { getAllProducts, getAllCategory } from "../data/ducks/home/actions"
import {
    fetchProductDetails,
    likeProduct,
    unlikeProduct,
    addToCart,
    favProduct,
    unfavProduct
} from "../data/ducks/detail/actions"

class ProductListContainer extends PureComponent {
    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [
            //ssr.dispatch(fetchProductDetails()), //SSR rendering here
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
        
        let param = `category_id=${this.props.match.params.params}&limit=2&page=1`
        console.log(param)
        this.props.getAllProducts(param).then()
    }

    render() {
        return (
            <ProductList {...this.props} loading={this.state.loading} category_id={this.props.match.params.params} />
        )
    }
};

const mapStateToProps = (state) => ({
    productList: state.home.productList
})

const mapDispatchToProps = {
    getAllCategory,
    getAllProducts,
    fetchProductDetails,
    likeProduct,
    unlikeProduct,
    addToCart,
    favProduct,
    unfavProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);