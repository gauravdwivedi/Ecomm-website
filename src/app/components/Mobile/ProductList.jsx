import React, { Fragment, useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Route, useHistory } from 'react-router';
import Detail from './Detail';
import LazyLoadProduct from './LazyLoadProduct';
// import SwipeableRoutes from 'react-swipeable-routes';
// import SwipeableViews from 'react-swipeable-views';
// import Infinite from 'react-infinite';
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useVideoAutoplay } from './useVideoAutoplay';
// import useWindowDimensions from './useWindowDimensions';
// import Infinite from 'react-infinite';
// import LazyLoadComponent from './LazyLoadComponent';
// import { FixedSizeList } from 'react-window';
// import { useCallback } from 'react';

import LazyLoadVideo from './LazyLoadVideo';

import LazyLoadDetail from './LazyLoadDetail';

function ProductList(props) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(2);
    const listInnerRef = useRef();

    const history = useHistory();
    const compRef = useRef(null);
    // const { height, width } = useWindowDimensions();
    // console.log('H', height, 'W', width)
    // console.log('ProductList', props.productList)
    // useEffect(() => {
    //     // window.addEventListener('scroll', handleScrollClick)

    //     if (window.scrollY < height) {
    //         let ele = document.getElementsByTagName('video');
    //         ele[0].muted = true;
    //     }

    // }, [window.scrollY])

    // const fetchData = () => {
    //     const elems = new Array(props.productList.length).fill(400)
    //     console.log('ARRAYS', elems)
    // }

    // const handleScrollClick = (e) => {
    //     console.log('Scrolling')
    // }

    // const onScrollHandler = () => {
    //     console.log(window.scrollY)
    //     if (window.scrollY > height) {
    //         let ele = document.getElementsByTagName('video');
    //         console.log(ele)
    //         ele[0].pause();
    //         if (ele[1]) {
    //             ele[1].play();
    //         }
    //     }

    //     if (window.scrollY < height) {
    //         let ele = document.getElementsByTagName('video');
    //         ele[0].play();
    //         if (ele[1]) {
    //             ele[1].pause();
    //         }
    //     }

    //     if (window.scrollY > height && window.scrollY < height * 2) {
    //         let ele = document.getElementsByTagName('video');
    //         ele[0].pause();
    //         if (ele[2]) {
    //             ele[2].play();
    //         }

    //     }
    // }



    useEffect(() => {
        console.log('ProductList at Beginning',props.productList)
        if (props.productList) {
            setItems(props.productList);
        }
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll(".videoWrapper");

        // const elements = document.querySelectorAll(".main");

        // if(props.productList){
        //     setItems(props.productList)
        // }

        elements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            observer.disconnect();
        }
    })


    const cb = (entries) => {
        entries.forEach((entry) => {
            let ele = entry.target.childNodes[0];
            let slugEle = entry.target.childNodes[1];
            let content = slugEle.textContent;
            let CustomUrl = '/product/' + content;
            console.log('SLUG ', CustomUrl)

            if (entry.isIntersecting) {
                window.history.replaceState(null, 'HoppedIn', CustomUrl)
            }

            ele.play().then(() => {
                if (!ele.paused && !entry.isIntersecting) {
                    ele.pause();
                }
            })
        })
    }

    let observer = new IntersectionObserver(cb, { threshold: 0.6 });

    // async function fetchProducts() {
    //     console.log('FetchProducts')
    //     const data = await props.getAllProducts(`limit=${page}&limit=5`);
    //     return data;

    // }

    // const fetchData = () => {
    //     console.log('CAlled FetchData')
    //     const productsFromServer = fetchProducts();
    //     setItems([...items, ...productsFromServer]);
    //     if (productsFromServer.length == 0 || productsFromServer.length < 5) {
    //         setHasMore(false);
    //     }
    //     setPage(page + 1);
    // }

    const callApi=()=>{
        props.getAllProducts(`category_id=${props.category_id}&limit=2&page=${page}`).then(res=>{
            console.log('RESS=>',res)
            
            if (res[0]?.result?.list) {
                console.log('LIST', res[0]?.result?.list)
                setItems([...items, ...res[0]?.result?.list]);
                setPage(page + 1);
            }
        })
    }

    const onScrolling=(ref)=>{
        if(ref){
            console.log('Reached Second Item');
            callApi();
        }
    }

    const content =(item,i)=>{

        if(items.length===i+1){
            console.log(items.length,'',i+1)
            console.log('ITEM DATA LOCAL',item)
            return <LazyLoadDetail
            detail={item}
            key={i}
            fetchProductDetails={props.fetchProductDetails}
            likeProduct={props.likeProduct}
            unlikeProduct={props.unlikeProduct}
            addToCart={props.addToCart}
            favProduct={props.favProduct}
            unfavProduct={props.unfavProduct}
            getAllProducts={props.getAllProducts}
            listInnerRef={listInnerRef}
            onScrolling={onScrolling}
        />

        }

        return <Detail
        detail={item}
        key={item.id}
        fetchProductDetails={props.fetchProductDetails}
        likeProduct={props.likeProduct}
        unlikeProduct={props.unlikeProduct}
        addToCart={props.addToCart}
        favProduct={props.favProduct}
        unfavProduct={props.unfavProduct}
        getAllProducts={props.getAllProducts}
    />

    }

    return (

        // <div className="videoCard">

        //     <InfiniteScroll
        //         dataLength={props.productList.length}
        //         next={fetchData}
        //         hasMore={hasMore}
        //         loader={<div>Loading...</div>}
        //         endMessage={<div>No more products</div>}
        //     >
        //         {
        //             items.map((item) => (

        //                 <Detail
        //                     detail={item}
        //                     key={item.id}
        //                     fetchProductDetails={props.fetchProductDetails}
        //                     likeProduct={props.likeProduct}
        //                     unlikeProduct={props.unlikeProduct}
        //                     addToCart={props.addToCart}
        //                     favProduct={props.favProduct}
        //                     unfavProduct={props.unfavProduct}
        //                     getAllProducts={props.getAllProducts}
        //                 />

        //             ))
        //         }
        //     </InfiniteScroll>
        // </div>
        <div className="videoCard">
            {
                items.map((item,index) => (
                        content(item,index)
                ))
            }
        </div>
    )
}

export default ProductList

/**
 * 
 * 
 * 
 * {/* <Infinite
                containerHeight={height}
                elementHeight={height}
                handleScroll={handleScrollClick}
                className="video__play" >
                {
                    props.productList.map((item, index) => (
                        <Detail
                            detail={item}
                            key={index}
                            fetchProductDetails={props.fetchProductDetails}
                            likeProduct={props.likeProduct}
                            unlikeProduct={props.unlikeProduct}
                            addToCart={props.addToCart}
                            favProduct={props.favProduct}
                            unfavProduct={props.unfavProduct}
                            getAllProducts={props.getAllProducts}

                        />
                    ))
                } 

       <InfiniteScroll
                dataLength={props.productList.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                } >
                {props.productList.map((item, index) => (
                    <Detail
                        detail={item}
                        key={index}
                        fetchProductDetails={props.fetchProductDetails}
                        likeProduct={props.likeProduct}
                        unlikeProduct={props.unlikeProduct}
                        addToCart={props.addToCart}
                        favProduct={props.favProduct}
                        unfavProduct={props.unfavProduct}
                        getAllProducts={props.getAllProducts}
                        className="video__player"
                    />
                ))}
            </InfiniteScroll>
            </Infinite> 
 */