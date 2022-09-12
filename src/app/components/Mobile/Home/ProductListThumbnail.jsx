import React, { useState, useEffect, useRef, useCallback } from 'react';
import PopularProductItem from './PopularProductItem';
// import { useInfiniteLoading } from '../useInfiniteLoading';
import { InfiniteCustomScroll } from './InfiniteCustomScroll';
import Pagination from '../Pagination';
import LazyLoadProduct from "../LazyLoadProduct";

let PageSize = 10;

const ProductListThumbnail = (props) => {

    const listInnerRef = useRef();
    const [cartlist, setCartlist] = useState([]);


    // const { items, hasMore, loadItems } = useInfiniteLoading({
    //     getItems: ({ page }) => {
    //         //Call API endpoint

    //     }
    // })
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, setData] = useState(null);
    let timeout;

    useEffect(() => {
        console.log('PROPS product', props)

        props.getAllProducts(`limit=10&page=1`).then(res => {
            setIsLoading(true);
            console.log('REsponse', res)
            if (res[0]?.result?.list) {
                console.log('LIST', res[0]?.result?.list)
                setData(res[0]?.result?.list);
                setIsDataLoaded(true);
                setCurrentPage(currentPage + 1);
                setIsLoading(false);
            }
        })

        // if (props?.productList) {
        //     setData(props.productList);
        //     setIsDataLoaded(true);
        // }
    }, [])


    useEffect(() => {
        let ele = document.getElementById('product-item-container');
        console.log('Ele', ele);
        // window.addEventListener('scroll', (e) => {
        //     console.log('Event', e)
        //     onScrolling();
        // })
    })

    const currentTableData = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        const res = data.slice(firstPageIndex, lastPageIndex);
        console.log(res, 'RESPONSE')
        return res
    }

    const debounce = function (func, delay) {
        clearTimeout(timeout);

        timeout = setTimeout(func, delay);
    }


    const callApi = () => {
        setIsLoading(true)
        props.getAllProducts(`limit=${PageSize}&page=${currentPage}`).then(res => {
            if (res[0]?.result?.list) {
                console.log('LIST', res[0]?.result?.list)
                setData([...data, ...res[0]?.result?.list]);
                setIsDataLoaded(true);
                setCurrentPage(currentPage + 1);
                setIsLoading(false)
            }
        })
    }

    const onScrolling = (ref) => {
        console.log('On Scroll', ref)
        if (ref) {

            // TO SOMETHING HERE
            console.log('Reached bottom')
            callApi();
            // debounce(callApi, 3000);
        }
    };

    const content = (item, i) => {

        console.log(item)
        if (data.length === i + 1) {
            console.log('Last Item')

            return <LazyLoadProduct
                item={item}
                key={i}
                cartlist={props.cartlist}
                favProduct={props.favProduct}
                unfavProduct={props.unfavProduct}
                deleteCart={props.deleteCartItem}
                addCart={props.addToCart}
                listInnerRef={listInnerRef}
                onScrolling={onScrolling}
            />
        }

        return <PopularProductItem
            item={item}
            key={i}
            cartlist={props.cartlist}
            favProduct={props.favProduct}
            unfavProduct={props.unfavProduct}
            deleteCart={props.deleteCartItem}
            addCart={props.addToCart}
        />

    }

    return <>

        <section className="category-section popular-product px-15 pt-4" >
            <div className="title-part">
                <h2>All Products</h2>
            </div>
            <div className="product-section">
                <div className="row gy-3 gx-3" id='product-item-container'>
                    {isDataLoaded ? data.map((item, index) => (
                        content(item, index)
                    )) : <h3>Oops!...Nothing here...</h3>}


                </div>
            </div>

        </section>
        {/* <div style={{ position: 'fixed', bottom: '0', marginBottom: '17%' }}>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data && data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div> */}

    </>
}

export default ProductListThumbnail