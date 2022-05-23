import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {

	return <>

		<div className="bottom-panel">
			<ul>
				<li className="active">
					<Link to="/">
						<div className="icon">
							<img src="/images/icon/footer-icon/home-2.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>home</span>
					</Link>
				</li>
				<li>
					<Link to="/category">
						<div className="icon">
							<img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>category</span>
					</Link>
				</li>
				<li>
					<Link to="/cart">
						<div className="icon">
							<img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>cart</span>
					</Link>
				</li>
				<li>
					<Link to='/favourites'>
						<div className="icon">
							<img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>wishlist</span>
					</Link>
				</li>
				<li>
					<Link to="/account">
						<div className="icon">
							<img src="/images/icon/footer-icon/user.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>Account</span>
					</Link>
				</li>
			</ul>
		</div>
	</>

}

export default Footer;