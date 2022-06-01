import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import AddAddress from "../components/Mobile/Checkout/AddAddress";
import AuthContext from "../helpers/authContext";
import { addAddress, editAddress } from "../data/ducks/detail/actions";

class AddAddressContainer extends PureComponent {

    static contextType = AuthContext;
    static fetching(ssr) {
        let storeData = ssr.getState();
        return [];
    }


    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <AddAddress {...this.props} loading={this.state.loading} />
        )
    }
}



const mapDispatchToProps = {
    addAddress,
    editAddress
}

export default connect(null, mapDispatchToProps)(AddAddressContainer)
