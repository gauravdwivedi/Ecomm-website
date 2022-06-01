import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import AuthContext from "../helpers/authContext";
import Favourite from '../components/Mobile/Favourite/Favourite'
import {
    favouriteProducts
} from '../data/ducks/detail/actions'
import { getAllProducts } from "../data/ducks/home/actions"
import { unfavProduct } from "../data/ducks/detail/actions"

class FavouriteContainer extends PureComponent {
    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [

        ];
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.props.favouriteProducts().then(res => {
        })
        this.props.getAllProducts().then(res => {

        })

    }



    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <Favourite {...this.props} loading={this.state.loading} />
                        :
                        <div>Desktop Page</div>
                }
            </Fragment>
        )
    }

};

const mapStateToProps = (state) => ({
    Favlist: state.detail.favProductsList,
    ProductList: state.home.productList

});

const mapDispatchToProps = {
    favouriteProducts,
    getAllProducts,
    unfavProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteContainer);