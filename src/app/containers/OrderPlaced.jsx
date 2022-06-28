import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import config from "../../config/index";
import OrderPlaced from '../components/Mobile/Checkout/OrderPlaced';
import AuthContext from "../helpers/authContext";


class OrderPlacedContainer extends PureComponent {
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacedContainer);