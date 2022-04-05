import React from 'react';
import App from "../app/containers/App";
import {Home,SignIn,SignUp} from "./splitComponent"


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
		}
	]
}];


export default routes;
