import React from 'react';
import App from "../app/containers/App";
import {Home,SignIn,SignUp,Cart,Checkout,Confirm,Detail,Order,Account,ForgetPassword,ResetPassword, Favourite,Address,AddAddress, CategoryListing, ProductList, OrderPlaced} from "./splitComponent"


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
			path: "/product/:slug",
			component: Detail,
			exact:false
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
		},
		{
			path:"/forgetpassword",
			component:ForgetPassword,
			exact:true
		},
		{
			path:"/reset-password/:token",
			component:ResetPassword,
			exact:true
		},
		{
			path:"/favourites",
			component:Favourite,
			exact:true
		},
		{
			path:"/address",
			component:Address,
			exact:true
		},
		{
			path:"/add-address",
			component:AddAddress,
			exact:true
		},
		{
			path:"/categories",
			component:CategoryListing,
			exact:true
		},{
			path:"/products/list/:params",
			component:ProductList,
			exact:true
		},{
			path:"/checkout/order-placed",
			component:OrderPlaced,
			exact:true
		}
	]
}];


export default routes;
