import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';

import AuthContext from "../helpers/authContext"
import ForgetPassword from '../components/Mobile/ForgetPassword';
import { forgetpassword } from '../data/ducks/auth/actions'


class ForgetpasswordContainer extends PureComponent {

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
                        <ForgetPassword {...this.props} loading={this.state.loading} />
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
    forgetpassword
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetpasswordContainer);