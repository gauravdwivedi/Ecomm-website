import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import AuthContext from "../helpers/authContext";
import Address from "../components/Mobile/Checkout/Address";

import { fetchAddressList } from "../data/ducks/detail/actions";

class AddressContainer extends PureComponent {
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
        this.props.fetchAddressList().then(res => console.log('RESPONE BABA', res))
    }


    render() {
        return (
            <Address {...this.props} loading={this.state.loading} />
        )
    }



}

const mapStateToProps = (state) => ({
    list: state.detail.addressList
})

const mapDispatchToProps = {
    fetchAddressList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)