import React from "react";

const Footer = (props) => {
	return <>

		<div class="bottom-panel">
			<ul>
				<li class="active">
					<a href="#">
						<div class="icon">
							<img src="images/icon/footer-icon/home-2.svg" class="img-fluid bg-img" alt="" />
						</div>
						<span>home</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="icon">
							<img src="images/icon/footer-icon/category.svg" class="img-fluid bg-img" alt="" />
						</div>
						<span>category</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="icon">
							<img src="images/icon/footer-icon/shopping-cart.svg" class="img-fluid bg-img" alt="" />
						</div>
						<span>cart</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="icon">
							<img src="images/icon/footer-icon/favourite.svg" class="img-fluid bg-img" alt="" />
						</div>
						<span>wishlist</span>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="icon">
							<img src="images/icon/footer-icon/user.svg" class="img-fluid bg-img" alt="" />
						</div>
						<span>Account</span>
					</a>
				</li>
			</ul>
		</div>

	</>

}

export default Footer;