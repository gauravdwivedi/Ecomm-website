import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Order from "../components/Mobile/Order"
import AuthContext from "../helpers/authContext";
import { loadBigStory } from "../data/ducks/home/actions";
import { getOrders } from "../data/ducks/order/actions";

class OrderContainer extends PureComponent {
	static contextType = AuthContext;
	static fetching(ssr) {
		let storeData = ssr.getState();
		return [
			//ssr.dispatch(loadBigStory()), //SSR rendering here
			// ssr.dispatch(getOrders()),

		];
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		// console.log('Called!')
		this.props.getOrders().then()

	}

	render() {
		return (

			<Order {...this.props} loading={this.state.loading} />

		)
	}

};

const mapStateToProps = (state) => ({
	order: state.order
});

const mapDispatchToProps = {
	//loadBigStory
	getOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);