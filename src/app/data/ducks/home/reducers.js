import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const homeBigStory = createReducer( [ ] )( {
    [ types.FETCH_HOME_BIG_STORY ]: ( state, action ) => action.payload.data,
} );

const productList = createReducer( [ ] ) ({
   [ types.FETCH_PRODUCTS ]: ( state, action ) => {
    console.log('product List Updating')
     return   action.payload.result.list
    }
} )

const categoryList = createReducer( [ ] ) ({
    [ types.FETCH_CATEGORY ]: ( state, action ) => {
        return   action.payload.result
     }
 } )


 const searchProducts = createReducer([])({
    [types.FETCH_PRODUCTS]:(state,action)=>{
        return action.payload.result.list
    }
 })

 const getBannersList = createReducer([])({
    [types.LOAD_BANNERS]:(state,action)=>{
        return action.payload.result
    }
 })

export default combineReducers( {
    homeBigStory,
    productList,
    categoryList,
    searchProducts,
    getBannersList
} );
