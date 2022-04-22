import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AuthContext from '../helpers/authContext'
import Cart from '../components/Mobile/Cart'



export class CartContainer extends PureComponent {

    static contextType = AuthContext;

    static fetching(ssr) {
        let soreData = ssr.getState();

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
        console.log('Component DID Mount!')
    }

    render() {
        return (
            <Cart {...this.props} loading={this.state.loading} />
        )
    }
}

const mapStateToProps = (state) => ({
    home: state.home
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);