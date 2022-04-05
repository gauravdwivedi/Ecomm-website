import React, { PureComponent, Fragment, Component, useEffect, useState, useContext } from 'react';
import Loader from "./../Common/Loader"
import ErrorBoundary from "./../../helpers/ErrorBoundry";
import Header from '../Mobile/partials/header';
import Footer from '../Mobile/partials/footer';

const Home = React.memo(function Home(props) {



	return (
		<>  <Header />
			<TopStories />
			<HomeSlider />
			<CategorySection />
			<PopularProducts />
			<SpotLight />
			<Footer />
		</>
	)
})

export default Home

const TopStories = () => {
	return <>
		<section className="category-stories top-space">
			<ul className="category-slide">
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>Kids</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>beauty</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>footwear</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>jewelry</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>Women</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="images/men.png" className="img-fluid" alt="" />
						<h4>men</h4>
					</a>
				</li>
			</ul>
		</section>

	</>
}


const HomeSlider = () => {

	return (<>
		<section className="pt-0 home-section ratio_55">
			<div className="home-slider slick-default theme-dots">
				<div>
					<div className="slider-box">
						<img src="images/banner.png" className="img-fluid bg-img" alt="" />
						{/* <div class="slider-content">
				<div>
				  <h2>Welcome To Multikart</h2>
				  <h1>Flat 50% OFF</h1>
				  <h6>Free Shipping Till Mid Night</h6>
				  <a href="#" class="btn btn-solid">SHOP NOW</a>
				</div>
			  </div> */}
					</div>
				</div>
				<div>
					<div className="slider-box">
						<img src="images/banner.png" className="img-fluid bg-img" alt="" />
						{/* <div class="slider-content">
				<div>
				  <h2>Welcome To Multikart</h2>
				  <h1>Flat 50% OFF</h1>
				  <h6>Free Shipping Till Mid Night</h6>
				  <a href="#" class="btn btn-solid">SHOP NOW</a>
				</div>
			  </div> */}
					</div>
				</div>
			</div>
		</section>

	</>)
}


const CategorySection = () => {

	return (<>
		<section className="category-section px-15 pt-0">
			<div className="title-part">
				<h2>Category</h2>
				<a href="#">View All</a>
			</div>
			<div className="product-section">
				<div className="row gy-3">
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ1.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">dresses</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ2.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Lages</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ3.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Shorts</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ4.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Jeans</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ5.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Tshirts</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ6.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Underwear</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ7.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Bags</a></h4>
					</div>
					<div className="col-3">
						<div className="card catagory-card">
							<div className="card-body">
								<a href="#">
									<img className="categry-icon" src="images/category-icon/categ8.svg" />
									<span><img className="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">shoes</a></h4>
					</div>
				</div>
			</div>
		</section>

	</>)
}


const PopularProducts = () => {
	return <section className="category-section popular-product px-15 pt-4">
		<div className="title-part">
			<h2>Popular</h2>
			<a href="#">View All</a>
		</div>
		<div className="product-section">
			<div className="row gy-3 gx-3">
				<div className="col-md-4 col-6">
					<div className="product-box ratio_square">
						<div className="img-part">
							<a href="#" className="bg-size"><img src="images/product/product1.png" alt="" className="img-fluid bg-img" /></a>
							<div className="hrs-btn">
								<span><img src="images/hr-icon.svg" alt="" />
									<h6>3 Hrs</h6>
								</span>
							</div>
							<div className="wishlist-btn">
								<ul>
									<li><img src="images/product-icon/play-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/notify-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/bag-icon.svg" alt="" /></li>
								</ul>
							</div>
						</div>
						<div className="product-content">
							<a href="#">
								<h4>Top Lacoste SPORT...</h4>
							</a>
							<div className="price">
								<h4>$49</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-6">
					<div className="product-box ratio_square">
						<div className="img-part">
							<a href="#" className="bg-size"><img src="images/product/product2.png" alt="" className="img-fluid bg-img" /></a>
							<div className="hrs-btn">
								<span><img src="images/hr-icon.svg" alt="" />
									<h6>3 Hrs</h6>
								</span>
							</div>
							<div className="wishlist-btn">
								<ul>
									<li><img src="images/product-icon/play-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/notify-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/bag-icon.svg" alt="" /></li>
								</ul>
							</div>
						</div>
						<div className="product-content">
							<a href="#">
								<h4>Top Lacoste SPORT...</h4>
							</a>
							<div className="price">
								<h4>$49</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-6">
					<div className="product-box ratio_square">
						<div className="img-part">
							<a href="#" className="bg-size"><img src="images/product/product3.png" alt="" className="img-fluid bg-img" /></a>
							<div className="hrs-btn">
								<span><img src="images/hr-icon.svg" alt="" />
									<h6>3 Hrs</h6>
								</span>
							</div>
							<div className="wishlist-btn">
								<ul>
									<li><img src="images/product-icon/play-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/notify-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/bag-icon.svg" alt="" /></li>
								</ul>
							</div>
						</div>
						<div className="product-content">
							<a href="#">
								<h4>Top Lacoste SPORT...</h4>
							</a>
							<div className="price">
								<h4>$49</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-6">
					<div className="product-box ratio_square">
						<div className="img-part">
							<a href="#" className="bg-size"><img src="images/product/product4.png" alt="" className="img-fluid bg-img" /></a>
							<div className="hrs-btn">
								<span><img src="images/hr-icon.svg" alt="" />
									<h6>3 Hrs</h6>
								</span>
							</div>
							<div className="wishlist-btn">
								<ul>
									<li><img src="images/product-icon/play-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/notify-icon.svg" alt="" /></li>
									<li><img src="images/product-icon/bag-icon.svg" alt="" /></li>
								</ul>
							</div>
						</div>
						<div className="product-content">
							<a href="#">
								<h4>Top Lacoste SPORT...</h4>
							</a>
							<div className="price">
								<h4>$49</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

}

const SpotLight = () => {
	return <section className="category-section spotlight-sec pt-4">
		<div className="title-part px-15">
			<h2>Spotlight</h2>
		</div>
		<div className="home-slider slick-default theme-dots">
			<div>
				<div className="slider-box">
					<img src="images/spotlight-banner/bannr1.png" className="img-fluid bg-img" alt="" />
					{/*<div class="slider-content">
					  <div>
						<h2>Welcome To Multikart</h2>
						<h1>Flat 50% OFF</h1>
						<h6>Free Shipping Till Mid Night</h6>
						<a href="#" class="btn btn-solid">SHOP NOW</a>
					  </div>
					</div> */}
				</div>
			</div>
			<div>
				<div className="slider-box">
					<img src="images/banner-3.png" className="img-fluid bg-img" alt="" />
					{/* <div class="slider-content">
					  <div>
						<h2>Welcome To Multikart</h2>
						<h1>Flat 50% OFF</h1>
						<h6>Free Shipping Till Mid Night</h6>
						<a href="#" class="btn btn-solid">SHOP NOW</a>
					  </div>
					</div> */}
				</div>
			</div>
		</div>
		<div className="bottom-title px-15">
			<h2>Nike</h2>
			<h4>Sport, Casual</h4>
		</div>
	</section>

}