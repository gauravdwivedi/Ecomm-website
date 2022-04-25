import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const productDetails = createReducer( [ ] ) ({
    [ types.FETCH_PRODUCT_DETAILS ]: ( state, action ) => {
        return   action.payload.result
     }
 } )

export default combineReducers( {
    productDetails,
} );