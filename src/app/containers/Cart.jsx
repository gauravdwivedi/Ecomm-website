import React, { Fragment, PureComponent, useState } from 'react'
import { connect } from 'react-redux'

import AuthContext from '../helpers/authContext'
import Cart from '../components/Mobile/Cart'

import { cartList, deleteCartItem } from "../data/ducks/cart/actions"



export class CartContainer extends PureComponent {



    static contextType = AuthContext;

    static fetching(ssr) {
        let soreData = ssr.getState();

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
        this.props.cartList().then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <Cart {...this.props} loading={this.state.loading} />
                        :
                        <div>This is website Cart</div>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartListItems: state.cart.fetchCartList.result
})

const mapDispatchToProps = {
    cartList,
    deleteCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);