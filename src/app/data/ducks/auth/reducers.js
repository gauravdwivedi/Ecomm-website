import { combineReducers } from "redux";
import types from "./types";
import createReducer from "../../utils/createReducer";


const login = createReducer([])({
    [types.LOGIN]:(state,action) => action.payload,
});

const signup = createReducer([])({
    [types.SIGNUP]:(state,action) => action.payload,
})

const token = createReducer([])({
    [types.TOKEN] :(state,action) => action.meta.payload,
})

const verifytoken = createReducer([])({
    [types.VERIFYTOKEN]:(state,action) => action.payload
})

const logout = createReducer([])({
    [types.LOGOUT]:(state,action) => action.payload
})

const forgetpassword = createReducer([])({
    [types.FORGETPASSWORD]:(state,action) => action.payload
})

const resetpasswordverification = createReducer([])({
    [types.RESETPASSWORDVERIFICATION]:(state,action) => action.payload
})

export default combineReducers({
    login,
    signup,
    logout,
    token,
    verifytoken,
    forgetpassword,
    resetpasswordverification
})