import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import SignUp from '../components/Mobile/SignUp';
import AuthContext from "../helpers/authContext"


class SignUpContainer extends PureComponent {

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
            <SignUp {...this.props} loading={this.state.loading} />
        )
    }
}


const mapStateToProps = (state) => ({
    home: state.home
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);