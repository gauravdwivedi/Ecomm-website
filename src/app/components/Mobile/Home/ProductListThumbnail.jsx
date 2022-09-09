import React, { useState, useEffect } from 'react';
import PopularProductItem from './PopularProductItem';
// import { useInfiniteLoading } from '../useInfiniteLoading';

import Pagination from '../Pagination';

let PageSize = 4;

const ProductListThumbnail = (props) => {

    const [cartlist, setCartlist] = useState([]);

    // const { items, hasMore, loadItems } = useInfiniteLoading({
    //     getItems: ({ page }) => {
    //         //Call API endpoint

    //     }
    // })


    const [currentPage, setCurrentPage] = useState(1);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, setData] = useState(null);



    useEffect(() => {
        console.log('PROPS product', props)
        if (props?.productList) {
            setData(props.productList);
            setIsDataLoaded(true);
        }
    })

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        const res = data.slice(firstPageIndex, lastPageIndex);
        console.log(res, 'RESPONSE')
        return res
    }

    return <>

        <section className="category-section popular-product px-15 pt-4">
            <div className="title-part">
                <h2>All Products</h2>
            </div>
            <div className="product-section">
                <div className="row gy-3 gx-3">
                    {isDataLoaded ? currentTableData().map((item, index) => (
                        <PopularProductItem
                            item={item}
                            key={index}
                            cartlist={props.cartlist}
                            favProduct={props.favProduct}
                            unfavProduct={props.unfavProduct}
                            deleteCart={props.deleteCartItem}
                            addCart={props.addToCart}
                        />
                    )) : <h3>Oops!...Nothing here...</h3>}
                </div>
            </div>

        </section>
        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data && data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />
    </>
}

export default ProductListThumbnail