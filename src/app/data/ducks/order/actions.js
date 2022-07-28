import types from "./types";

export function createOrder(data){
    return {
        CALL_API:[
            {
                type:types.CREATE_ORDER,
                meta:{
                    path:"/v1/orders/new",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}

export function saveOrderDetails(data){
    
    return {
        CALL_API:[
            {
                type:types.SAVE_ORDER_DETAILS,
                meta:{
                    path:"/v1/orders/payment",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}

export function getOrders(){
    return {
        CALL_API:[
            {
                type:types.FETCH_ORDERS,
                meta:{
                    path:"/v1/orders/list",
                    method:"GET",
                    body:'order list',
                    isHeader:true
                }
            }
        ]
    }
}

