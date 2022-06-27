import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const createOrder = createReducer([])({
    [ types.CREATE_ORDER]:(state,action) =>{
        return action.payload
    }
})

export default combineReducers( {
    createOrder
} );