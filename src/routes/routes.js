import React from 'react';
import App from "../app/containers/App";
import {Home,SignIn,SignUp,Cart,Checkout} from "./splitComponent"


const routes = [{
	component: App,
	routes: [
		{
			path: "/",
			component: Home,
			exact: true,
		},
		{
			path:"/login",
			component:SignIn,
			exact:true
		},
		{
			path:"/signup",
			component:SignUp,
			exact:true
		},
		{
			path:"/cart",
			component:Cart,
			exact:true
		},
		{
			path:"/checkout",
			component:Checkout,
			exact:true
		}
	]
}];


export default routes;
