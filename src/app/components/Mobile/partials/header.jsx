import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";



const Header = (props) => {

	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);


	useEffect(() => {
		if (sideDrawerOpen) {
			openNav();

		}
	})

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen(true);
	};


	const closenNav = () => {
		setSideDrawerOpen(false);
		let sidenav = document.getElementById('mySidenav');
		sidenav.style.width = "0";
		let overlay = document.getElementById('overlayId');
		overlay.classList.remove("show")
	}

	const openNav = () => {
		let sidenav = document.getElementById('mySidenav');
		sidenav.style.width = "250px";

		let overlay = document.getElementById('overlayId');
		overlay.classList.add("show");
	}

	return (<>
		<div className="top-header"><img src="images/flash.svg" alt="" />Flash Deal : 30% off in girl dreses</div>
		<header>
			<img src="images/menu-icon.svg" id="mynav-bar" className="nav-bar hamburger" onClick={drawerToggleClickHandler} />
			<a href="/" className="logo">
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
		<div className="overlay-sidebar" id="overlayId" onClick={closenNav}></div>
		<Navbar sideDrawerOpen={sideDrawerOpen} />
	</>)
}

export default Header;