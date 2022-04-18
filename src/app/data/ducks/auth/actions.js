import types from "./types";


export function login(data){

    return {
        CALL_API:[
            {
                type:types.LOGIN,
                meta:{
                    path:"/v1/auth/login",
                    method:"POST",
                    body:data,
                },
            },
        ],
    }; 
}

export function signup(data){

    return{
        CALL_API:[
            {
                type:types.SIGNUP,
                meta:{
                    path:"/v1/auth/register",
                    method:"POST",
                    body:data
                },
            },
        ],
    };
}

export function setToken(token){
    return {
        type: types.TOKEN,
        meta:{
            token
        },
    };
}

export function verifytoken(token){

    return{
        CALL_API:[
            {
                type: types.VERIFYTOKEN,
                meta:{
                    path:`/v1/auth/verifytoken/${token}`,
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                        "hoppedin-token":JSON.stringify(token),
                    },
                },
            },
        ],
    };
}