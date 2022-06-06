import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Detail from "../components/Mobile/Detail"
import AuthContext from "../helpers/authContext";
import { fetchProductDetails, likeProduct, unlikeProduct, addToCart, favProduct, unfavProduct } from "../data/ducks/detail/actions";

class DetailContainer extends PureComponent {
	static contextType = AuthContext;
	static fetching(ssr) {
		let storeData = ssr.getState();
		return [
			//ssr.dispatch(fetchProductDetails()), //SSR rendering here


		];
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			show: false,
		}
	}

	componentDidMount() {

		if (this.props.match.params.slug) {
			this.props.fetchProductDetails(this.props.match.params.slug).then((res) => {
				console.log("res", res)
			})
		}
	}


	render() {
		return (
			<Detail {...this.props} loading={this.state.loading} />

		)
	}

};

const mapStateToProps = (state) => ({
	detail: state.detail.productDetails
});

const mapDispatchToProps = {
	fetchProductDetails,
	likeProduct,
	unlikeProduct,
	addToCart,
	favProduct,
	unfavProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);