import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Detail from "../components/Mobile/Detail"
import AuthContext from "../helpers/authContext";
import { fetchProductDetails} from "../data/ducks/detail/actions";

class DetailContainer extends PureComponent {
	static contextType = AuthContext;
	static fetching( ssr ) {
		let storeData = ssr.getState();
		return [
			//ssr.dispatch(fetchProductDetails()), //SSR rendering here
			
		];
	}

	constructor(props) {
		super(props);
		this.state = {
			loading:false
		}
	}

	componentDidMount() {
        const params = new URL(window.location.href).searchParams;
        if(params.get('slug')){
			this.props.fetchProductDetails(params.get('slug')).then((res) => {
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
	fetchProductDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);