import types from "./types";


export function login(data){

    return {
        CALL_API:[
            {
                type:types.LOGIN,
                meta:{
                    path:"/v1/auth/user/verify",
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
                    isHeader:true,
                    headers:{
                        "x-signup-token":data.token
                    },
                    body:data
                },
            },
        ],
    };
}

export function forgetpassword(data){
    return {
        CALL_API:[
            {
                type:types.FORGETPASSWORD,
                meta:{
                    path:"/v1/auth/resetPassword/trigger",
                    method:'PATCH',
                    body:data
                }
            }
        ]
    }
}

export function logout(){
    return {
        CALL_API:[
            {
                type:types.LOGOUT,
                
            }
        ]
    }
}

export function setToken(token){
    return {
        type: types.TOKEN,
        meta:{
            token
        },
    };
}

export function resetpasswordverification(data){

    return {
        CALL_API:[
            {
                type:types.RESETPASSWORDVERIFICATION,
                meta:{
                    path:`/v1/auth/resetPassword/verify`,
                    method:'PATCH',
                    body:data
                }
            }
        ]
    }

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