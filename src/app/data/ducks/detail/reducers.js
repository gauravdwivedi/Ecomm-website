import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const productDetails = createReducer( [ ] ) ({
    [ types.FETCH_PRODUCT_DETAILS ]: ( state, action ) => {
        return   action.payload.result
     }
 } )

 const likeProduct = createReducer([ ])({
     [ types.LIKE_PRODUCT ]:(state,action) =>{
         return action.payload
     }
 })

 const unlikeProduct = createReducer([])({
     [ types.UNLIKE_PRODUCT]:(state,action) =>{
         return action.payload
     }
 })

 const addToCart = createReducer([])({
     [ types.ADD_TO_CART]:(state,action) =>{
         return action.payload
     }
 })

 const unFavProduct = createReducer([])({
     [ types.REMOVE_FROM_FAV]:(state,action) =>{
         return action.payload
     }
 })
 
 const favProduct = createReducer([])({
    [ types.ADD_TO_FAV]:(state,action) =>{
        return action.payload
    }
})

const favProductsList = createReducer([])({
    [ types.FAVOURITE_PRODUCTS]:(state,action) =>{
        return action.payload
    }
})

const addAddress = createReducer([])({
    [ types.ADD_ADDRESS]:(state,action) =>{
        return action.payload
    }
})

const addressList = createReducer([])({
    [ types.FETCH_ADDRESS_LIST]:(state,action) =>{
        return action.payload
    }
})

const editList = createReducer([])({
    [ types.EDIT_ADDRESS]:(state,action) =>{
        return action.payload
    }
})

export default combineReducers( {
    productDetails,
    likeProduct,
    unlikeProduct,
    addToCart,
    unFavProduct,
    favProduct,
    favProductsList,
    addAddress,
    addressList,
    editList
} );