import types from './types';


export function cartList(){
    return {
        CALL_API:[{
            type: types.FETCH_CART_LIST,
            meta:{
                path:"/v1/cart/list",
                method:"GET",
                isHeader:true,
                body:"etc"
            }}
        ]
    }
}


export function deleteCartItem(data){
    return {
        CALL_API:[{
            type: types.DELETE_ITEM,
            meta:{
                path:"/v1/cart/remove",
                method:"DELETE",
                isHeader:true,
                body:data
            }}
        ]
    }
}


export function editCartItem(data){
    return {
        CALL_API:[{
            type:types.EDIT_ITEM
        }]
    }
}