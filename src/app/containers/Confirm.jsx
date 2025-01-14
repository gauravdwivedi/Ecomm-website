import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import config from "../../config/index";
import Confirm from "../components/Mobile/Checkout/Confirm";
import AuthContext from "../helpers/authContext";
import { cartList } from "../data/ducks/cart/actions";
import { createOrder, saveOrderDetails } from "../data/ducks/order/actions";


class ConfirmContainer extends PureComponent {
    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [
            //ssr.dispatch(loadBigStory()), //SSR rendering here

        ];
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.props.cartList().then();
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <Confirm {...this.props} loading={this.state.loading} />
                        :
                        <HomeDesktop {...this.props} loading={this.state.loading} />
                }
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    cartListItems: state.cart.fetchCartList.result
});

const mapDispatchToProps = {
    createOrder,
    cartList,
    saveOrderDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmContainer);