import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";

const createOrder = createReducer([])({
    [ types.CREATE_ORDER]:(state,action) =>{
        return action.payload
    }
})

const saveOrderDetails = createReducer([])({
    [ types.SAVE_ORDER_DETAILS]:(state,action) =>{
        return action.payload
    }
})

const getOrderList = createReducer([])({
    [ types.FETCH_ORDERS]:(state,action) =>{
        return action.payload
    }
})

export default combineReducers({
    createOrder,
    saveOrderDetails,
    getOrderList
});
