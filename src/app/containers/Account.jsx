import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Account from "../components/Mobile/Account"
import AuthContext from "../helpers/authContext";
import { loadBigStory } from "../data/ducks/home/actions";

class AccountContainer extends PureComponent {
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
		// console.log('Called!')
	}



	render() {
		return (

			<Account {...this.props} loading={this.state.loading} />


		)
	}

};

const mapStateToProps = (state) => ({
	home: state.home
});

const mapDispatchToProps = {
	//loadBigStory
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);