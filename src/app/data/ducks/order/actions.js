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


