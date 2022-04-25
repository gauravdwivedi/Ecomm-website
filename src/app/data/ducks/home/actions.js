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


export function getAllProducts(id){
    return {
        CALL_API:[
            {
                type:types.FETCH_PRODUCTS,
                meta:{
                    path:"/v1/product/list?category_id="+id+"&sort_by=category",
                    method:"GET",
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
                }
            }
        ]
    }
}