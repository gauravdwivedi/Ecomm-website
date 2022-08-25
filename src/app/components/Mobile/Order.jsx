import React, { useState, useMemo } from 'react'
import { useEffect } from 'react';
import OrderItem from './OrderItem'
import Pagination from './Pagination'
// import data from './mock-data.json'


let PageSize = 5;
function Order(props) {

    console.log('ORDERS', props?.order?.getOrderList?.result)

    const [currentPage, setCurrentPage] = useState(1);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [len, setLen] = useState(0);
    const [data, setData] = useState(null);
    // let currentTableData;
    // const [currentTableData, setCurrentTableData] = useState(null);

    // useEffect(() => {
    //     if (props?.order?.getOrderList?.result) {
    //         const firstPageIndex = (currentPage - 1) * PageSize;
    //         const lastPageIndex = firstPageIndex + PageSize;

    //         setCurrentTableData(props.order.getOrderList.result.slice(firstPageIndex, lastPageIndex))

    //     }
    // }, [currentPage])

    useEffect(() => {
        if (props?.order?.getOrderList?.result) {
            setData(props?.order?.getOrderList?.result);
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




    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;

    //     return props?.order?.getOrderList.result ? props?.order?.getOrderList.result.slice(firstPageIndex, lastPageIndex) : undefined;
    // }, [currentPage]);

    return (
        <div id="main">
            <header>
                <div className="back-links">
                    <a href="/">
                        <img src="/images/back.svg" className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="inner-header">
                    <h3>My Orders</h3>
                </div>
            </header>

            <section className="order-section pt-4 px-15">

                {/* {props?.order?.getOrderList.result ? props?.order?.getOrderList.result.map((item) => (
                    < OrderItem key={item.id} item={item} />
                )) : <h3>Oops!!!...Nothing here!!</h3>} */}

                {isDataLoaded ? currentTableData().map(item => (
                    <OrderItem key={item.id} item={item} />
                )) : <h3>Oops!!!...Nothing here!!</h3>}

            </section>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data && data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default Order