import types from "./types";

export function fetchProductDetails(slug) {
    return {
        CALL_API: [
            {
                type: types.FETCH_PRODUCT_DETAILS,
                meta: {
                    path: "/v1/product/detail?slug=" + slug,
                    method: "GET",
                    isHeader:true,
                    body:slug
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

export function favProduct(data){
    return {
        CALL_API:[
            {
                type:types.ADD_TO_FAV,
                meta:{
                    path:"/v1/product/save",
                    method:"POST",
                    body:data,
                   isHeader:true
                }
            }
        ]
    }
}

export function unfavProduct(data){
    return {
        CALL_API:[
            {
                type:types.REMOVE_FROM_FAV,
                meta:{
                    path:"/v1/product/delete",
                    method:"POST",
                    body:data,
                   isHeader:true
                }
            }
        ]
    }
}


export function addToCart(data){
    return {
        CALL_API:[
            {
                type:types.ADD_TO_CART,
                meta:{
                    path:"/v1/cart/add",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}

export function favouriteProducts(){
    return {
        CALL_API:[
            {   
                type:types.FAVOURITE_PRODUCTS,
                meta:{
                    path:"/v1/product/favourites",
                    method:"GET",
                    body:'fav products',
                    isHeader:true
                }
            }
        ]
    }
}
