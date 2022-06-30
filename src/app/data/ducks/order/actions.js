import types from "./types";

export function createOrder(data){
    console.log('DATA',data)
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
    console.log('DATA',data)
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



