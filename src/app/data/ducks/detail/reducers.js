import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const productDetails = createReducer( [ ] ) ({
    [ types.FETCH_PRODUCT_DETAILS ]: ( state, action ) => {
        if(action.payload.result){
            action.payload.result.images = JSON.parse(action.payload.result.images)
        }
        return   action.payload.result
     }
 } )

export default combineReducers( {
    productDetails,
} );