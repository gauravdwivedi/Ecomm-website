import React, { PureComponent, Fragment, Component, useEffect, useState, useContext } from 'react';
import Loader from "./../Common/Loader"
import ErrorBoundary from "./../../helpers/ErrorBoundry";
import Header from '../Mobile/partials/Header';
import Footer from '../Mobile/partials/Footer';
import HomeSlider from './HomeSlider';
import Slider from 'react-slick';
import PopularProducts from './Home/Popularproducts';
import ProductsOnSale from './Home/ProductsOnSale';
import config from '../../../config';
import { Link } from 'react-router-dom';
import authContext from '../../helpers/authContext';
import { useHistory } from 'react-router';

const Home = React.memo(function Home(props) {

	const context = useContext(authContext)

	useEffect(() => {
		context.doActivePage('home');

	}, [context.isActive])

	return (
		<>
			{/* <Header /> */}
			<TopStories />
			<HomeSlider />
			<CategorySection items={props.categoryList} {...props} />
			<PopularProducts items={props.productList}  {...props} />
			<SpotLight />
			<ProductsOnSale items={props.productList}  {...props} />
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
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>Kids</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>beauty</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>footwear</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>jewelry</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>Women</h4>
					</a>
				</li>
				<li>
					<a href="#" className="category-box">
						<img src="/images/men.png" className="img-fluid" alt="" />
						<h4>men</h4>
					</a>
				</li>
			</ul>
		</section>
	</>
}

const CategorySection = (props) => {
	const items = props.items
	const history = useHistory();


	const handleCategoryClick = (params) => {
		console.log(params)
		history.push(`/products/list/${params}`);
	}

	return (<>
		<section className="category-section px-15 pt-0">
			<div className="title-part">
				<h2>Category</h2>
				<Link to="/categories">View All</Link>
			</div>
			<div className="product-section">
				<div className="row gy-3">

					{items && items.map((item, index) => (
						<div className="col-3" key={index} onClick={() => handleCategoryClick(item.id)}>
							<div className="card catagory-card">
								<div className="card-body">
									<Link to="#">
										<img className="categry-icon" src={config.IMG_END_POINT + item.icon} />
										<span><img className="categry-play" src="/images/category-icon/cat-play.svg" /></span>
									</Link>
								</div>
							</div>
							<h4><Link to="#">{item.title}</Link></h4>
						</div>
					))}

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
						<img src="/images/spotlight-banner/bannr1.png" className="img-fluid bg-img" alt="" />
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