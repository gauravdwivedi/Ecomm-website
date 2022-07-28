import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Detail from './Detail';


// import InfiniteScroll from "react-infinite-scroll-component";
// import { useVideoAutoplay } from './useVideoAutoplay';
// import useWindowDimensions from './useWindowDimensions';
// import Infinite from 'react-infinite';
// import LazyLoadComponent from './LazyLoadComponent';
// import { FixedSizeList } from 'react-window';
// import { useCallback } from 'react';

function ProductList(props) {

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

    const cb = (entries) => {
        entries.forEach((entry) => {
            let ele = entry.target.childNodes[0];
            ele.play().then(() => {
                if (!ele.paused && !entry.isIntersecting) {
                    ele.pause();
                }
            })
        })
    }

    let observer = new IntersectionObserver(cb, { threshold: 0.6 });

    useEffect(() => {
        const elements = document.querySelectorAll(".videoWrapper");

        elements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            observer.disconnect();
        }
    })

    return (
        <div className="videoCard">
            {
                props.productList.map((item) => (
                    <Detail
                        detail={item}
                        key={item.id}
                        fetchProductDetails={props.fetchProductDetails}
                        likeProduct={props.likeProduct}
                        unlikeProduct={props.unlikeProduct}
                        addToCart={props.addToCart}
                        favProduct={props.favProduct}
                        unfavProduct={props.unfavProduct}
                        getAllProducts={props.getAllProducts}
                        className="video__player"
                    />
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