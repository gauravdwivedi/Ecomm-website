import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';

import AuthContext from "../helpers/authContext"
import ResetPassword from '../components/Mobile/ResetPassword';
import { resetpasswordverification } from '../data/ducks/auth/actions'


class ResetPasswordContainer extends PureComponent {


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
        console.log("reset password")
    }

    render() {
        console.log('RESET PASSWORDDDDDD')
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <ResetPassword {...this.props} loading={this.state.loading} />
                        :
                        <div>This is website SignIn</div>
                }
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    resetpasswordverification
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);