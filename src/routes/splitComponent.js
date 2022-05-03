import React from 'react';
import loadable from '@loadable/component'
import Loader from "../app/components/Common/Loader";

export const Home = loadable(() => import( /* webpackChunkName: "Home" */ '../app/containers/Home'), {
	fallback: <div className="lazy-loader"><Loader style={{padding: '15% 40%'}}/></div>
});

export const SignIn = loadable(()=> import ('../app/containers/SignIn'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})


export const SignUp = loadable(()=> import ('../app/containers/SignUp'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Cart = loadable(()=> import ('../app/containers/Cart'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Checkout = loadable(()=> import ('../app/containers/Checkout'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Confirm = loadable(()=> import ('../app/containers/Confirm'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Detail = loadable(()=> import ('../app/containers/Detail'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Account = loadable(()=> import ('../app/containers/Account'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const Order = loadable(()=> import ('../app/containers/Order'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const ForgetPassword = loadable(()=> import ('../app/containers/ForgetPassword'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})

export const ResetPassword = loadable(()=> import ('../app/containers/ResetPassword'),{
	fallback: <div className='lazy-loader'><Loader style={{padding:'15% 40%'}}/></div>
})