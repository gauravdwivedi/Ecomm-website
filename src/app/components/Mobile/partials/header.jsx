import React, { useState } from "react";
import Navbar from "../Navbar";



const Header = (props) => {

	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {

		console.log('HAMBURGER');
		setSideDrawerOpen(true);
		if (sideDrawerOpen) {

			let ele = document.getElementById('mySidenav');
			ele.style.width = '250px';

			let ele2 = document.getElementsByClassName('sidenav');
			console.log(ele2)
		}

		if (sideDrawerOpen === false) {
			document.getElementById("mySidenav").style.width = "0";
		}
	};

	return (<>
		<div id="main">
			<div class="top-header"><img src="images/flash.svg" alt="" />Flash Deal : 30% off in girl dreses</div>

			<header>
				<img src="images/menu-icon.svg" id="mynav-bar" className="nav-bar hamburger" onClick={drawerToggleClickHandler} />
				<a href="#" className="logo">
					<img src="images/logo.svg" className="img-fluid" alt="" />
				</a>
				<div className="header-option">
					<ul>
						<li>
							<a href="#"><img src="images/video-live.svg" alt="" /><span className="live-txt">Live</span></a>
						</li>
						<li>
							<a href="#"><i className="iconly-Search icli" aria-hidden="true" /></a>
						</li>
						<li>
							<a href="#"><i className="iconly-Notification icli" /></a>
						</li>
					</ul>
				</div>
			</header>
		</div>
		<a href="javascript:void(0)" class="overlay-sidebar" onclick="closeNav()"></a>
		<Navbar />
	</>)
}

export default Header;