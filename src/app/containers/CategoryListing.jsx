import React, { Fragment, PureComponent, useState } from 'react'
import { connect } from 'react-redux'

import AuthContext from '../helpers/authContext'
import CategoryListing from '../components/Mobile/CategoryListing'
import { getAllCategory } from '../data/ducks/home/actions'


export class CategoryListingContainer extends PureComponent {

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
        this.props.getAllCategory().then()
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.mobile.isMobile ?
                        <CategoryListing {...this.props} loading={this.state.loading} />
                        :
                        <div>This is website Category</div>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    categoryList: state.home.categoryList
})

const mapDispatchToProps = {
    getAllCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListingContainer);