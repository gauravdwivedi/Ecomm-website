import React, { useContext, useEffect } from 'react'
import config from '../../../config'
import authContext from '../../helpers/authContext'
import { useHistory } from 'react-router';

function CategoryListing(props) {

    const context = useContext(authContext);
    const history = useHistory();
    useEffect(() => {
        context.doActivePage('category')
    }, [context.isActive])

    // console.log('PROPS', props)

    const handleCategoryClick = (params) => {
        // console.log(params)
        history.push(`/products/list/${params}`);
    }

    return (<>
        <section className="category-section px-15 pt-0">

            <div className="title-part">
                <h2>Categories</h2>

            </div>

            <div className="product-section">
                <div className="row gy-3">

                    {props.categoryList && props.categoryList.map((item, index) => (
                        <div className="col-6" key={index} onClick={() => handleCategoryClick(item.id)} >
                            <div className="card catagory-card" style={{ height: '100px' }}>
                                <div className="card-body">
                                    <a href="#">
                                        <img className="categry-icon" src={config.IMG_END_POINT + item.icon} />
                                        <span><img className="categry-play" src="/images/category-icon/cat-play.svg" /></span>
                                    </a>
                                </div>
                            </div>
                            <h4><a href="#">{item.title}</a></h4>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </>)
}

export default CategoryListing