import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';

import AuthContext from "../helpers/authContext"
import SignIn from '../components/Mobile/SignIn';


class SignInContainer extends PureComponent {

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
                        <SignIn {...this.props} loading={this.state.loading} />
                        :
                        <div>This is website SignIn</div>
                }
            </Fragment>

        )
    }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);