import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import config from "../../config/index"
import AuthContext from "../helpers/authContext";
import HeaderDesktop from "../components/desktop/partials/header";
import FooterDesktop from "../components/desktop/partials/footer";
import GlobalDesktop from "../components/desktop/partials/global";
import HeaderMobile from "../components/Mobile/partials/Header";
import FooterMobile from "../components/Mobile/partials/Footer";
import GlobalMobile from "../components/mobile/partials/global";
import Metadata from '../helpers/metadata';


import { login, verifytoken, logout, forgetpassword } from "../data/ducks/auth/actions"
import { processResponse } from '../helpers/helpers';


class App extends Component {
	static fetching(ssr) {
		return [

		];
	}

	constructor(props) {
		super(props);
		this.state = {
			status: props.status,
			serverRequest: props.serverRequest,
			mobile: {
				isMobile: props.isMobile,
			},
			isAuthenticated: false
		}
	}

	componentDidMount() {
		this.checkLoggedIn();
	}

	componentWillReceiveProps(nextProps) { }

	changeServerStatus() {
		this.setState({ serverRequest: false })
	}

	scrollTop(divId = '') {
		if (divId) document.getElementById(divId).scrollTo(0, 0);
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 500)
	}

	getSEOData() {
		let seometa = {};
		return seometa;
	}

	checkLoggedIn() {
		let token = Util.getCookie('hoppedin_token');
		if (token) {
			this.setState({
				isAuthenticated: true,
				userData: Util.getCookie('userData')
			})
		}
	}

	doLogin(data) {
		console.log(data)
		this.props.login(data).then((res) => {
			console.log('Response', res[0])

			if (res[0].registration == false) {
				Util.setCookie('hoppedin_token', res[0].token, 7);
				Util.setCookie('userData', res[0].user, 7);
				this.setState({
					isAuthenticated: true,
					userData: res.data
				}, () => {
					console.log('Here')
					this.props.history.push('/')
				})
			}
		})
	}

	setAuthState(val) {
		this.setState({
			isAuthenticated: val
		}, () => {
			this.props.history.push('/')
		})
	}

	doLogout() {

		console.log('LOGOUT APP')
		Util.clearCookie('hoppedin_token');
		Util.clearCookie('userData');
		this.setState({
			isAuthenticated: false,
			userData: {}
		});
		this.props.history.replace('/login')

	}

	render() {
		const Routes = this.props.route.routes;

		let noheaderUrl = ['/login', '/signup', '/cart', '/account', '/product', '/confirm', '/order', '/forgetpassword', '/reset-password/:token', '/checkout', '/favourites', '/address', '/add-address']
		let nofooterUrl = ['/login', '/signup', '/cart', '/account', '/product', '/confirm', '/order', '/forgetpassword', '/reset-password/:token', '/checkout']

		let header = <HeaderDesktop {...this.props} />
		let global = <GlobalDesktop {...this.props} />
		let footer = <FooterDesktop {...this.props} />

		if (this.state.mobile.isMobile) {
			header = <HeaderMobile {...this.props} />
			global = <GlobalMobile {...this.props} />
			footer = <FooterMobile {...this.props} />
		}
		if (this.props.location.pathname.includes("/product")) {
			header = null;
			global = null;
			footer = null;
		}
		if (this.props.location.pathname.includes("/reset-password")) {
			header = null;
			global = null;
			footer = null;
		}

		if (noheaderUrl.indexOf(this.props.location.pathname) > -1) {
			header = null;
			global = null;
			footer = null;
		}

		if (nofooterUrl.indexOf(this.props.location.pathname) > -1) {
			footer = null;
		}

		return (
			<Fragment>
				<Metadata seo={this.getSEOData()} />
				<AuthContext.Provider value={{
					scrollTop: this.scrollTop.bind(this),
					serverRequest: this.state.serverRequest,
					isAuthenticated: this.state.isAuthenticated,
					doLogin: this.doLogin.bind(this),
					doLogout: this.doLogout.bind(this),
					history: this.props.history,
					setAuthState: this.setAuthState.bind(this)

				}}>
					<Fragment>
						<div>
							{header}
							{renderRoutes(Routes, { mobile: this.state.mobile, serverRequest: this.state.serverRequest, changeServerStatus: this.changeServerStatus.bind(this) })}
							{global}
							{footer}
						</div>
					</Fragment>
				</AuthContext.Provider>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = {
	login,
	verifytoken,
	logout,
	forgetpassword
};

export default connect(mapStateToProps, mapDispatchToProps)(App);