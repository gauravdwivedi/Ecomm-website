import React, { PureComponent, Fragment, Component, useEffect, useState, useContext } from 'react';
import Loader from "./../Common/Loader"
import ErrorBoundary from "./../../helpers/ErrorBoundry";
import Header from '../Mobile/partials/Header';
import Footer from '../Mobile/partials/Footer';
import HomeSlider from './HomeSlider';
import Slider from 'react-slick';
import PopularProducts from './Home/Popularproducts';
import ProductsOnSale from './Home/ProductsOnSale';


const Home = React.memo(function Home(props) {


	return (
		<>
			{/* <Header /> */}
			<TopStories />
			<HomeSlider />
			<CategorySection />
			{/* <PopularProducts items={props.productList} /> */}
			<SpotLight />
			{/* <ProductsOnSale items={props.productList} /> */}
			{/* <Footer /> */}
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


const CategorySection = () => {

	return (<>
		<section class="category-section px-15 pt-0">
			<div class="title-part">
				<h2>Category</h2>
				<a href="#">View All</a>
			</div>
			<div class="product-section">
				<div class="row gy-3">
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ1.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">dresses</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon"
										src="images/category-icon/categ2.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Lages</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ3.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Shorts</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ4.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Jeans</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ5.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Tshirts</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ6.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Underwear</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ7.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
								</a>
							</div>
						</div>
						<h4><a href="#">Bags</a></h4>
					</div>
					<div class="col-3">
						<div class="card catagory-card">
							<div class="card-body">
								<a href="#">
									<img class="categry-icon" src="images/category-icon/categ8.svg" />
									<span><img class="categry-play" src="images/category-icon/cat-play.svg" /></span>
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

const SpotLight = () => {

	return <section className="category-section spotlight-sec pt-4">
		<div className="title-part px-15">
			<h2>Spotlight</h2>
		</div>
		<div className="home-slider slick-default theme-dots">
			<div>
				<Slider>
					<div className="slider-box">
						<img src="images/spotlight-banner/bannr1.png" className="img-fluid bg-img" alt="" />
					</div>
				</Slider>
			</div>
		</div>
		<div className="bottom-title px-15">
			<h2>Nike</h2>
			<h4>Sport, Casual</h4>
		</div>
	</section>

}