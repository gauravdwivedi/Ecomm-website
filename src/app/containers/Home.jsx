import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import config from "../../config/index";
import HomeDesktop from "../components/Desktop/Home"
import HomeMobile from "../components/Mobile/Home"
import AuthContext from "../helpers/authContext";
import { loadBigStory, getAllProducts, getAllCategory, searchProducts, getBannerList} from "../data/ducks/home/actions";
import { likeProduct, unlikeProduct, addToCart, favProduct, unfavProduct } from "../data/ducks/detail/actions";
import { cartList, deleteCartItem } from "../data/ducks/cart/actions";

class HomeContainer extends PureComponent {
	static contextType = AuthContext;
	static fetching(ssr) {
		let storeData = ssr.getState();
		return [
			//ssr.dispatch(loadBigStory()), //SSR rendering here
			// ssr.dispatch(getAllProducts()),
			// ssr.dispatch(getAllCategory())

		];
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		this.getBannerList();
		this.getProductList();
		this.getCategoryList();
		this.props.cartList().then()
	}

	getProductList() {
		this.setState({
			loading: true
		}, () => {
			this.props.getAllProducts('limit=6&page=1').then((res) => {
				// this.setState({
				// 	loading: false
				// })
			})
		})
	}

	getCategoryList() {
		this.setState({
			loading: true
		}, () => {
			this.props.getAllCategory().then((res) => {
				// this.setState({
				// 	loading: false
				// })
			})
		})
	}


	getBannerList(){
		this.setState({
			loading:true
		},()=>{
			this.props.getBannerList().then((res)=>{
				
			})
		})
	}

	render() {
		return (
			<Fragment>
				{
					this.props.mobile.isMobile ?
						<HomeMobile {...this.props} loading={this.state.loading} />
						:
						<HomeDesktop {...this.props} loading={this.state.loading} />
				}
			</Fragment>
		)
	}
};

const mapStateToProps = (state) => ({
	searchProducts: state.home.searchProducts,
	productList: state.home.productList,
	categoryList: state.home.categoryList,
	cartlist: state.cart.fetchCartList.result,
	bannerList:state.home.getBannersList
});

const mapDispatchToProps = {
	//loadBigStory
	getAllProducts,
	getAllCategory,
	likeProduct,
	unlikeProduct,
	addToCart,
	deleteCartItem,
	cartList,
	favProduct,
	unfavProduct,
	searchProducts,
	getBannerList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);