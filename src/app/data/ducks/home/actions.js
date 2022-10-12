import types from "./types";

export function loadBigStory(id, type) {
    return {
        CALL_API: [
            {
                type: types.FETCH_HOME_BIG_STORY,
                meta: {
                    path: "/staticbox/detail/"+id,
                    method: "GET",
                }
            }
        ]
    }
}


export function getAllProducts(params=''){
    return {
        CALL_API:[
            {
                type:types.FETCH_PRODUCTS,
                meta:{
                    path:`/v1/product/list?${params}`,
                    method:"GET",
                    isHeader:true,
                    body:'all-products'
                }
            }
        ]
    }
}

export function getAllCategory(){
    return {
        CALL_API:[
            {
                type:types.FETCH_CATEGORY,
                meta:{
                    path:"/v1/category/list",
                    method:"GET",
                    isHeader:true,
                    body:'all-category'
                }
            }
        ]
    }
}


export function searchProducts(params=''){
    return {
        CALL_API:[
            {
                type:types.SEARCH_PRODUCT,
                meta:{
                    path:`/v1/product/search?${params}`,
                    method:"GET",
                    isHeader:true,
                    body:'search-products'
                }
            }
        ]
    }
}


export function getBannerList(){
    return {
        CALL_API:[
            {
                type:types.LOAD_BANNERS,
                meta:{
                    path:`/v1/banners/list`,
                    method:"GET",
                    isHeader:true,
                    body:'Load Banners'
                    
                }
            }
        ]
    }
}
