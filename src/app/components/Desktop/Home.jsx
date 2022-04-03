import React, { PureComponent, Fragment, Component, useEffect, useState, useContext } from 'react';
import Loader from "./../Common/Loader"
import ErrorBoundary from "./../../helpers/ErrorBoundry";

const Home = React.memo(function Home(props) {
  
	return (
		<div className="home-container">
     This is desktop homepage
		</div>
	)
})

export default Home;