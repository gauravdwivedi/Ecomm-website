import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const productDetails = createReducer( [ ] ) ({
    [ types.FETCH_PRODUCT_DETAILS ]: ( state, action ) => {
       
        return   action.payload.result
     }
 } )


 const likeProduct = createReducer([])({
     [ types.LIKE_PRODUCT ]:(state,action) =>{
         return action.payload
     }
 })

 const unlikeProduct = createReducer([])({
     [ types.UNLIKE_PRODUCT]:(state,action) =>{
         return action.payload
     }
 })

export default combineReducers( {
    productDetails,
    likeProduct,
    unlikeProduct
} );