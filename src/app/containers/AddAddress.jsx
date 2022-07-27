import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import AddAddress from "../components/Mobile/Checkout/AddAddress";
import AuthContext from "../helpers/authContext";
import { addAddress, editAddress, countryList, stateList, cityList } from "../data/ducks/detail/actions";

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
        console.log('ADD_ADDRESS', this.props)
        this.props.countryList().then(res => console.log(res))
    }

    render() {
        return (
            <AddAddress {...this.props} loading={this.state.loading} />
        )
    }
}

const mapStateToProps = (state) => (console.log(state.detail), {
    countries: state.detail?.fetchCountryList,
    states: state.detail?.fetchStateList,
    cities: state.detail?.fetchCityList
})

const mapDispatchToProps = {
    addAddress,
    editAddress,
    countryList,
    stateList,
    cityList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressContainer)
