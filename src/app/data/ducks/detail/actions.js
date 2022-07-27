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

export function addAddress(data){
    return {
        CALL_API:[
            {
                type:types.ADD_ADDRESS,
                meta:{
                    path:"/v1/users/add-address",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}

export function fetchAddressList(){
    return {
        CALL_API:[
            {
                type:types.FETCH_ADDRESS_LIST,
                meta:{
                    path:"/v1/users/list-address",
                    method:"GET",
                    body:'address list',
                    isHeader:true
                }
            }
        ]
    }
}

export function editAddress(data){
    return {
        CALL_API:[
            {
                type:types.ADD_ADDRESS,
                meta:{
                    path:"/v1/users/edit-address",
                    method:"POST",
                    body:data,
                    isHeader:true
                }
            }
        ]
    }
}


export function addressDetailById(addressId){
    return {
        CALL_API:[
            {
                type:types.ADDRESS_DETAIL_BY_ID,
                meta:{
                    path:"/v1/users/address-detail",
                    method:"POST",
                    body:addressId,
                    isHeader:true
                }
            }
        ]
    }
}



export function countryList(){
    return {
        CALL_API:[
            {
                type:types.FETCH_COUNTRY_LIST,
                meta:{
                    path:"/v1/users/countries-list",
                    method:"GET",
                    body:"country list",
                    isHeader:true
                }
            }
        ]
    }
}


export function stateList(id){
    return {
        CALL_API:[
            {
                type:types.FETCH_STATE_BY_COUNTRY,
                meta:{
                    path:"/v1/users/get-states-by-country",
                    method:"POST",
                    body:id,
                    isHeader:true
                }
            }
        ]
    }
}

export function cityList(id){
    return {
        CALL_API:[
            {
                type:types.FETCH_CITIES_BY_STATE,
                meta:{
                    path:"/v1/users/get-cities-by-state",
                    method:"POST",
                    body:id,
                    isHeader:true
                }
            }
        ]
    }
}