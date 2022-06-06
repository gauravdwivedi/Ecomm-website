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
							{currentPage == 'home' ? <img src="/images/icon/footer-icon/home-2.svg" className="img-fluid bg-img" alt="" /> : <img src="/images/icon/footer-icon/home.svg" className="img-fluid bg-img" alt="" />}
						</div>
						<span className="footer-span">home</span>
					</Link>
				</li>
				<li className={currentPage === 'category' ? 'active' : ''}>
					<Link to="/categories">
						<div className="icon">
							{currentPage == 'category' ? <img src="/images/icon/footer-icon/category-2.svg" className="img-fluid bg-img" alt="" /> : <img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />}
						</div>
						<span className="footer-span">category</span>
					</Link>
				</li>
				<li className={currentPage == 'cart' ? 'active' : ''}>
					<Link to="/cart">
						<div className="icon">
							<img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span className="footer-span">cart</span>
					</Link>
				</li>
				<li className={currentPage == 'favourite' ? 'active' : ''}>
					<Link to='/favourites'>
						<div className="icon">
							<img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span className="footer-span">wishlist</span>
					</Link>
				</li>
				<li className={currentPage == 'account' ? 'active' : ''}>
					<Link to="/account">
						<div className="icon">
							<img src="/images/icon/footer-icon/user.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span className="footer-span">Account</span>
					</Link>
				</li>
			</ul>
		</div>
	</>

}

export default Footer;