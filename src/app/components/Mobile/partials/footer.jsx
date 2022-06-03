import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../../helpers/authContext";


const Footer = (props) => {

	const context = useContext(authContext);

	let currentPage = context.isActive;

	return <>

		<div className="bottom-panel">
			<ul>
				<li className={currentPage === 'home' ? 'active' : ''}>
					<Link to="/">
						<div className="icon">
							<img src="/images/icon/footer-icon/home-2.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>home</span>
					</Link>
				</li>
				<li className={currentPage === 'category' ? 'active' : ''}>
					<Link to="/categories">
						<div className="icon">
							<img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>category</span>
					</Link>
				</li>
				<li className={currentPage == 'cart' ? 'active' : ''}>
					<Link to="/cart">
						<div className="icon">
							<img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>cart</span>
					</Link>
				</li>
				<li className={currentPage == 'favourite' ? 'active' : ''}>
					<Link to='/favourites'>
						<div className="icon">
							<img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>wishlist</span>
					</Link>
				</li>
				<li className={currentPage == 'account' ? 'active' : ''}>
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