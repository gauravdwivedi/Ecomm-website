import React from 'react';
import App from "../app/containers/App";
import {Home,SignIn,SignUp,Cart,Checkout,Confirm,Detail,Order,Account} from "./splitComponent"


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
		},
		{
			path:"/confirm",
			component:Confirm,
			exact:true
		},
		{
			path: "/detail",
			component: Detail,
			exact: true,
		},
		{
			path: "/account",
			component: Account,
			exact: true,
		},
		{
			path: "/order",
			component: Order,
			exact: true,
		}
	]
}];


export default routes;
