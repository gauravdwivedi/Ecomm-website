import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import config from "../../config/index";
import Address from "../components/Mobile/Checkout/Address";
import AuthContext from "../helpers/authContext";
import { loadBigStory } from "../data/ducks/home/actions";

class CheckoutContainer extends PureComponent {
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

    componentDidMount() { }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <Address {...this.props} loading={this.state.loading} />
                        :
                        <HomeDesktop {...this.props} loading={this.state.loading} />
                }
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    home: state.home
});

const mapDispatchToProps = {
    //loadBigStory
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);