import React, { useContext, useEffect, useRef, useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import config from '../../../config'
import authContext from '../../helpers/authContext';
import { useHistory } from 'react-router';
import Modal from './Modal';
import Slider from "react-slick";


const Detail = React.memo(function Detail(props) {
	const context = useContext(authContext)
	const history = useHistory();
	const [like, setLike] = useState(false);
	const [inCart, setInCart] = useState(false);
	const [addToCart, setAddToCart] = useState(false);
	const [fav, setFav] = useState(false);
	const [noOfLikes, setNoOfLikes] = useState(0);
	const [variantId, setVariantId] = useState(0);
	const [productId, setProductId] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const [modalShow, setModalShow] = useState(false);
	const [ModalTwo, setModalTwo] = useState(false);
	const [isFilter, setIsFilter] = useState(false);
	const [isSort, setIsSort] = useState(false);

	//Sort Search Filter
	const [sortFilter, setSortFilter] = useState('best');
	const [price, setPrice] = useState(0);
	const [order, setOrder] = useState('asc');
	const videoRef = useRef(null);

	const [maxRange, setMaxRange] = useState(1000);
	const [minRange, setMinRange] = useState(1);
	const [sizeSelect, setSizeSelect] = useState([]);
	const progressBarRef = useRef(null);
	const priceGap = 10;

	let images = [];
	let content = '';
	let isContent;

	let settings = {
		dots: true
	}

	useEffect(() => {
		console.log('DETAIL PROPS', props)
		setLike(props.detail.liked)
		setInCart(props.detail.productInCart)
		setFav(props.detail.favourite);
		setNoOfLikes(props.detail.likes)
		// console.log('LIKED', props.detail.liked)

		// console.log('Favourite', props.detail.favourite)
	}, [props.detail])

	const handleScroll = () => {
		// console.log('Scrolling !!')
	}

	const hanldeProgressBarChangeMin = (e) => {
		e.preventDefault();
		setMinRange(e.target.value)
		if (maxRange - minRange < priceGap) {
			setMinRange(maxRange - priceGap);
		} else {
			progressBarRef.current.style.left = (minRange / 100) * 100 + "%";
		}
	}

	const handleProgressBarChangeMax = (e) => {
		e.preventDefault();
		setMaxRange(e.target.value)
		if (maxRange - minRange < priceGap) {
			setMinRange(maxRange - priceGap);
		} else {
			progressBarRef.current.style.right = 1000 - (maxRange / 100) * 100 + "%";
		}
	}

	const handleLikeClick = () => {

		if (like) {
			props.unlikeProduct({ productId: props.detail.id }).then(res => {
				// console.log('Response from DisLike', res[0])

				// if (res[0] && res[0].message) {
				if (res[0]) {
					setLike(false)
					setNoOfLikes(noOfLikes - 1)
				}

				// props.fetchProductDetails(props.detail.slug).then(res => {

				// })
			})
		}

		if (!like) {
			props.likeProduct({ productId: props.detail.id }).then(res => {

				// console.log('Response from like', res)
				if (res && res[0].message) {
					setLike(false)
					// setNoOfLikes(noOfLikes + 1)
				} else {
					setLike(true)
					setNoOfLikes(noOfLikes + 1)
				}

				// props.fetchProductDetails(props.detail.slug).then((res => {
				// }))
			})
		}
	}



	//Favourite/Bookmark
	const handleFavClick = () => {
		// console.log(fav)
		if (fav) {
			props.unfavProduct({ productId: props.detail.id }).then(res => {
				// console.log('Favourite/Bookmark Response', res)
				setFav(false)
				props.fetchProductDetails(props.detail.slug).then(res => {
					// console.log(res)
				})
			})
		}

		if (!fav) {
			props.favProduct({ productId: props.detail.id }).then(res => {
				// console.log('Favourite Response==>', res)
				if (res && res[0]) {
					if (res[0].result) {
						setFav(true)
					}
				}
				props.fetchProductDetails(props.detail.slug).then((res => {
				}))
			})
		}
	}

	const handleAddCart = () => {
		// console.log('Setting Modal True')
		// setAddToCart(true)
		if (!context.isAuthenticated) {
			history.push('/login')
		}
		setModalShow(true);
	}

	const handleInsertInCart = (id) => {
		let productId = props.detail.id;
		let variantId = props.detail.attributes[0].id;
		let quantity = 1;
		props.addToCart({ productId, variantId, quantity }).then(res => {
			toast.success('Added to cart!')
			setInCart(true)
		})
	}

	if (props.detail.images) {
		props.detail.images.map((item) => {
			images.push(item)
		})
	}

	// if (props.detail.videos) {
	// 	props.detail.videos.map((item) => {
	// 		images.push(item.thumbnail)
	// 	})
	// }


	//Filter click handler 
	const filterClickHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		// console.log('FIlter')

		if (!isFilter) {
			setIsSort(false)
			setModalTwo(false)
			setIsFilter(true)
		} else {
			setIsFilter(false)
		}
	}

	const isSortHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (!isSort) {
			setModalTwo(false)
			setIsFilter(false)
			setIsSort(true)
		} else {
			setIsSort(false)
		}
	}

	const modalContent = () => {
		if (!ModalTwo) {
			setIsFilter(false)
			setIsSort(false)
			setModalTwo(true)
		} else {
			setModalTwo(false)
		}
	}


	//Filter
	const onSizeHandler = (e, value) => {
		e.preventDefault();
		e.stopPropagation();

		let ele = document.getElementById(value);



		if (sizeSelect.find(val => val === value)) {
			// console.log('value', value);
			ele.style.background = "#ebe5e5";
			ele.style.color = "#000000";
			setSizeSelect(sizeSelect.filter(val => val !== value))
		} else {
			ele.style.background = "#000000";
			ele.style.color = "#FFFFFF";
			setSizeSelect([...sizeSelect, value]);
		}
	}

	const OnClickSaveHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();

		// console.log('SIZE SELECT', sizeSelect)
		props.getAllProducts(`min_price=${minRange}&max_price=${maxRange}&size=${sizeSelect}`).then(
			setIsFilter(false)
		)
	}

	const oncheckBoxClickHandler = (e, filter, order) => {
		e.stopPropagation();
	}

	const onSaveSortHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();

		// console.log('Sort Filter', sortFilter, 'Order', order)

		props.getAllProducts(`sort_by=${sortFilter}&order=${order}&size=["s","m"]`).then(res => {
			setIsSort(false)
		})
	}


	return (
		<div id="main">
			<div className='top-shadow'>
			</div>
			<div className="detail-header">
				<Link to="/">
					<img src="/images/back.svg" className="img-fluid" alt="" />
				</Link>
				<div className="header-option" style={{ marginLeft: "auto" }}>
					<ul>
						<li onClick={(e) => isSortHandler(e)}><a href="#"><img src="/images/detail-video/icon/sort.svg" alt="" /></a></li>
						<li onClick={(e) => filterClickHandler(e)}><a href="#"><img src="/images/detail-video/icon/setting.svg" alt="" /></a></li>
						<li><a href="#"><img src="/images/detail-video/icon/category.svg" alt="" /></a></li>
					</ul>
				</div>
			</div>
			<div >
				{(props.detail.videos) ?
					<VedioPlayer url={props.detail?.videos[0]?.url} thumbnail={props.detail?.videos[0]?.thumbnail} slug={props.detail?.slug} />
					// <LazyLoadVideo url={config.IMG_END_POINT + props.detail?.videos[0]?.url} ref={videoRef} handleVideoPress={handleVideoPress} />
					: ""}
			</div>


			{ModalTwo && <Modal isVisible={setModalTwo} >
				<div className=" slick-default theme-dots" >
					<Slider {...settings}>
						{images.map((item) => (
							<div className="slider-box" style={{ display: 'flex', justifyContent: 'space-around' }}>
								<button type="button" class="btn-close close-img " aria-label="Close" />
								< img src={config.IMG_END_POINT + item.url} className="modal-img" />
							</div>
						))}
					</Slider>
				</div >
			</Modal>}

			{isFilter && <Modal isVisible={setIsFilter}>
				<div className='container-filter'>
					<div className='filter-body'>
						<h2 className='filter-title'>Filter</h2>
						<div className='delivery'>
							<h2>Delivery</h2>
							<div className='btn-container'>
								<div className='fast-delivery'>
									<img src='/images/hr-icon-white.svg' />
									<span >
										Fast Delivery
									</span>
								</div>
								<div className='normal-delivery'>
									<img src='/images/hr-icon-black.svg' />
									<span >
										Normal
									</span>
								</div>
							</div>
						</div>
						<div className='price-range'>
							<h2>Price Range</h2>
							<div className='range-boundary'>
								<span className='min-range' >${minRange}</span>
								<span className='max-range' >${maxRange}</span>
							</div>
							<div className='slider-container'>
								<div className="slider">
									<div className='slider-progress' ref={progressBarRef}></div>
								</div>
								<div className="range-input">
									<input type="range" className='range-min' min="0" max="1000" onChange={(e) => hanldeProgressBarChangeMin(e)} value={minRange} />
									<input type="range" className='range-max' min="0" max="1000" onChange={(e) => handleProgressBarChangeMax(e)} value={maxRange} />
								</div>
							</div>
						</div>
						<div className="sizes">
							<h2>Sizes</h2>
							<ul>
								<li className='size-box' id='S' onClick={(e) => onSizeHandler(e, "S")}>S</li>
								<li className='size-box' id="M" onClick={(e) => onSizeHandler(e, "M")}>M</li>
								<li className='size-box' id="L" onClick={(e) => onSizeHandler(e, "L")}>L</li>
								<li className='size-box' id="XL" onClick={(e) => onSizeHandler(e, "XL")}>XL</li>
								<li className='size-box' id="2XL" onClick={(e) => onSizeHandler(e, "2XL")}>2XL</li>
							</ul>
						</div>
						<div className='action-btns'>
							<button className='filter-btn btn-reset'>Reset</button>
							<button className='filter-btn btn-save' onClick={(e) => OnClickSaveHandler(e)}>Save</button>
						</div>
					</div>
				</div>

			</Modal>}

			{isSort && <Modal isVisible={setIsSort}>
				<div className='container-filter'>
					<div className='filter-body'>
						<h2 className='filter-title'>Sort By</h2>
						<div className='radio-btn-container'>
							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('best')
								setOrder('asc')
							}}>
								<input type="radio" id='best-match' name="sort-item" value="best-match" />
								<label className='lbl' for="best-match">Best Match</label>
							</div>

							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('qty')
								setOrder('asc')
							}}>
								<input type="radio" id='time-ending-soon' name="sort-item" value="time-ending-soon" />
								<label className='lbl' for="time-ending-soon">Time: Ending soonest</label>
							</div>

							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('created_at')
								setOrder('asc')
							}}>
								<input type="radio" id='newly-listed' name="sort-item" value="newly-listed" />
								<label className='lbl' for="newly-listed">Time: Newly listed</label>
							</div>

							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('price')
								setOrder('asc')
							}}>
								<input type="radio" id='price-lowest' name="sort-item" value="price-lowest" />
								<label className='lbl' for="price-lowest">Price + Shopping lowest first</label>
							</div>

							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('price')
								setOrder('desc')
							}}>
								<input type="radio" id='price-higest' name="sort-item" value="price-higest" />
								<label className='lbl' for="price-higest">Price + Shopping Higest first</label>
							</div>

							<div className='radio-btns' onClick={(e) => {
								e.stopPropagation();
								setSortFilter('best')
								setOrder('asc')
							}}>
								<input type="radio" id='nearest' name="sort-item" value="nearest" />
								<label className='lbl' for="nearest">Distance: Nearest first</label>
							</div>
						</div>

						<div className='action-btns'>
							<button className='filter-btn btn-reset'>Reset</button>
							<button className='filter-btn btn-save' onClick={(e) => onSaveSortHandler(e)}>Save</button>
						</div>
					</div>
				</div>
			</Modal>}

			{/* <div className="video-content d-flex flex-column w-100 mw-100 overflow-hidden" style={{ padding: '20px' }}> */}
			<div className="video-content" >
				{/* <div className='d-flex  justify-content-between mw-90'> */}
				<div className="caption" >
					<div className='contnt'>
						<div className='contents' >
							<h2>{props.detail.title}</h2>
							<div className="price">
								{(props.detail.attributes && props.detail?.attributes.length > 0) ?
									<h4>{'$' + props.detail.attributes[0].price + '.00'} <del>{'$' + props.detail.attributes[0].discountedPrice + '.00'}</del></h4>
									: ""}
							</div>
							<ul className="ratings">
								{new Array(5).fill("", 0, 5).map((p, i) => (i < props.detail.rating) ?
									<li key={i}><i className="iconly-Star icbo" ></i></li> :
									<li key={i}><i className="iconly-Star icbo empty"></i></li>)}
							</ul>
							<p>{props.detail.description}</p>

							<div className="detail-gallary">
								<ul className='detail__gallary'>
									{props.detail.images && images.map((item, i) => <li key={i}><img src={config.IMG_END_POINT + item.url} alt="" className='detail__gallary-img' onClick={() => modalContent(item)} /></li>)}
								</ul>
							</div>
							<div className="hrs-btn">
								<span className='hrs-text'><img src="/images/hr-icon.svg" alt="" /><h6>Delivery : With in 3 Hrs</h6></span>
							</div>
						</div>
					</div>
					<div className="" >
						<div className='right-sec'>
							<ul>
								<li>
									{fav ? <img src="/images/detail-video/icon/notify-red.svg" alt="" onClick={handleFavClick} /> : <img src="/images/detail-video/icon/notify.svg" alt="" onClick={handleFavClick} />}
								</li>
								<li className='liked'>
									{like ? <>
										<img src="/images/detail-video/icon/unlike.svg" alt="" onClick={handleLikeClick} />
										<span className='like-item-1'>{noOfLikes}</span>
									</> :
										<>
											<img src="/images/detail-video/icon/like.svg" alt="" onClick={handleLikeClick} />
											<span className='like-item'>{noOfLikes}</span>
										</>}
								</li>
								{props.detail.isProductBought && (<li><img src="/images/detail-video/icon/message.svg" alt="" /></li>)}
								<li><img src="/images/detail-video/icon/share.svg" alt="" /></li>
							</ul>
						</div>
					</div>
				</div>


				<Toaster />
				<div className="detail-add">{context.isAuthenticated ? <>{inCart == true ?
					<div>
						<Link to={{ pathname: "/cart", state: { fromProductPage: true } }} className="btn btn-solid flex-fill" >Go to cart</Link>
					</div>
					: <>{
						modalShow ? <> <h4 className='text-white'>Select Size</h4>
							<div>
							</div> <button onClick={handleInsertInCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button></>
							: <button onClick={handleAddCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button>
					}
					</>}</> : <button onClick={handleAddCart} className="btn btn-solid flex-fill" tabIndex="0">Login</button>}
				</div>
				<div className='bottom-shadow'>
				</div>
				{/* </div > */}
				{/* <div className="detail-add flex-fill" style={{ borderRadius: '20px' }}>{context.isAuthenticated ? <>{inCart == true ?
					<div>

						<Link to={{ pathname: "/cart", state: { fromProductPage: true } }} className="btn btn-solid flex-fill" >Go to cart</Link>
					</div>
					: <>{
						modalShow ? <> <h4 className='text-white'>Select Size</h4>
							<div>
							</div> <button onClick={handleInsertInCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button></>
							: <button onClick={handleAddCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button>
					}
					</>}</> : <button onClick={handleAddCart} className="btn btn-solid flex-fill" tabIndex="0">Login</button>}
				</div> */}
			</div >
		</div >
	)
})

const VedioPlayer = ({ url, thumbnail, slug }) => {

	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	console.log(slug)
	const handleVideoPress = (videoRef) => {

		if (playing) {
			setPlaying(false);
			videoRef.current.pause();
		} else {
			videoRef.current.play();
			setPlaying((play) => !play);
		}
	}

	return (

		<div className="videoWrapper"
			onClick={() => handleVideoPress(videoRef)} >
			<video
				playsInline
				autoPlay
				loop
				ref={videoRef}
				poster={thumbnail ? config.IMG_END_POINT + thumbnail : '/images/detail-bg.png'}
				src={config.IMG_END_POINT + url} />
			<div style={{ display: 'none' }}>{slug}</div>
			{/* <LazyLoadVideo url={config.IMG_END_POINT + url} videoRef={videoRef} /> */}
		</div>
	)
}

// const ModelPopup = ({ attributes }) => {
// 	let color = [...new Set(attributes.map(item => item.color))];

// 	const changeProductColor = (e) => {
// 		if (e.target.value !== "") {
// 			let sizes = attributes.map(item => {
// 				if (item.color !== e.target.value) {
// 					return `<option value="${item.size}" data-stock="${item.qty_in_stock}">${item.size}</option>`
// 				}
// 			});
// 			document.getElementById("exampleFormControlSelect2").innerHTML = '<option value="" >Select One</option>' + sizes.join(" ");
// 		} else {
// 			document.getElementById("exampleFormControlSelect2").innerHTML = '<option value="" >Select One</option>';
// 		}

// 	}

// 	const changeProductSize = (e) => {
// 		let stock = e.target[e.target.selectedIndex].getAttribute('data-stock');
// 		if (e.target.value !== "") {
// 			document.getElementById("qty_in_stock").innerHTML = `<input type="number" class="form-control"  max="${stock}" min="1" name="qty_in_stock" />`;
// 		} else {
// 			document.getElementById("qty_in_stock").innerHTML = `<input type="number" class="form-control"  max="0" min="0" name="qty_in_stock" />`;
// 		}

// 	}
// 	return (
// 		<div>
// 			<div className="form-group">
// 				<label htmlFor="exampleFormControlSelect1">Color</label>
// 				<select className="form-control" id="exampleFormControlSelect1" onChange={(e) => changeProductColor(e)}>
// 					<option value="" >Select One</option>
// 					{color.map((color, index) => (
// 						<option key={index} value={color} >{color}</option>
// 					))}
// 				</select>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="exampleFormControlSelect2">Size</label>
// 				<select className="form-control" id="exampleFormControlSelect2" onChange={(e) => changeProductSize(e)}>
// 					<option value="" >Select One</option>

// 				</select>
// 			</div>
// 			<div className="form-group">
// 				<label htmlFor="qty_in_stock">Quantity</label>
// 				<div id="qty_in_stock">
// 					<input type="number" className="form-control" max="5" min="1" name="qty_in_stock" />
// 				</div>

// 			</div>
// 		</div>
// 	)
// }

export default Detail