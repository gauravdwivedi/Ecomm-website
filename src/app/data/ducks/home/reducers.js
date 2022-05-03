import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const homeBigStory = createReducer( [ ] )( {
    [ types.FETCH_HOME_BIG_STORY ]: ( state, action ) => action.payload.data,
} );

const productList = createReducer( [ ] ) ({
   [ types.FETCH_PRODUCTS ]: ( state, action ) => {
     return   action.payload.result
    }
} )

const categoryList = createReducer( [ ] ) ({
    [ types.FETCH_CATEGORY ]: ( state, action ) => {
        return   action.payload.result
     }
 } )


export default combineReducers( {
    homeBigStory,
    productList,
    categoryList
} );
