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