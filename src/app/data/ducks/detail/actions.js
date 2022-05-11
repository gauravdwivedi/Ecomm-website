import types from "./types";

export function fetchProductDetails(slug) {
    return {
        CALL_API: [
            {
                type: types.FETCH_PRODUCT_DETAILS,
                meta: {
                    path: "/v1/product/detail?slug=" + slug,
                    method: "GET",
                }
            }
        ]
    }
}


export function likeProduct(data){
    return {
        CALL_API:[
            {
                type:types.LIKE_PRODUCT,
                meta:{
                    path:"/v1/product/like",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}

export function unlikeProduct(data){
    return {
        CALL_API:[
            {
                type:types.UNLIKE_PRODUCT,
                meta:{
                    path:"/v1/product/unlike",
                    method:"POST",
                    body:data,
                   isHeader:true
                }
            }
        ]
    }
}