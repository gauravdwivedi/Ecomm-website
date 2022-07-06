import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import config from "../../config/index";

import { addressDetailById } from '../data/ducks/detail/actions';
import OrderPlaced from '../components/Mobile/Checkout/OrderPlaced';
import AuthContext from "../helpers/authContext";


class OrderPlacedContainer extends PureComponent {
    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [
            //ssr.dispatch(loadBigStory()), //SSR rendering here

            ssr.dispatch(addressDetailById({ addressId: this.props.location.state.addressId }))


        ];
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {

        // if (this.props.location?.state?.addressId)
        //     this.props.addressDetailById({ addressId: this.props.location.state.addressId }).then(res => {
        //     })

    }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <OrderPlaced {...this.props} loading={this.state.loading} />
                        :
                        <HomeDesktop {...this.props} loading={this.state.loading} />
                }
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => (console.log('STATE', state.detail.addressList), {
    address: state.detail.addressList
});

const mapDispatchToProps = {
    addressDetailById
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacedContainer);