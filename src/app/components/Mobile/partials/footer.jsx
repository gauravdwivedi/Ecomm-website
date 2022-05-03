import React from "react";

const Footer = (props) => {

	return <>

		<div className="bottom-panel">
			<ul>
				<li className="active">
					<a href="/">
						<div className="icon">
							<img src="/images/icon/footer-icon/home-2.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>home</span>
					</a>
				</li>
				<li>
					<a href="/category">
						<div className="icon">
							<img src="/images/icon/footer-icon/category.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>category</span>
					</a>
				</li>
				<li>
					<a href="/cart">
						<div className="icon">
							<img src="/images/icon/footer-icon/shopping-cart.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>cart</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div className="icon">
							<img src="/images/icon/footer-icon/favourite.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>wishlist</span>
					</a>
				</li>
				<li>
					<a href="/account">
						<div className="icon">
							<img src="/images/icon/footer-icon/user.svg" className="img-fluid bg-img" alt="" />
						</div>
						<span>Account</span>
					</a>
				</li>
			</ul>
		</div>
	</>

}

export default Footer;