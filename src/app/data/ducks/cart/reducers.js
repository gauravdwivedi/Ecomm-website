import { bindActionCreators, combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";


const fetchCartList = createReducer([])({
    [types.FETCH_CART_LIST]:(state,action) => {
        return action.payload
    }
})

const deleteCartItem =createReducer([])({
    [types.DELETE_ITEM]:(state,action) => {
        return action.payload
    }
})

const editCartItem =createReducer([])({
    [types.EDIT_ITEM]:(state,action) => {
        return action.payload
    }
})


export default combineReducers({
    fetchCartList,
    deleteCartItem,
    editCartItem
})