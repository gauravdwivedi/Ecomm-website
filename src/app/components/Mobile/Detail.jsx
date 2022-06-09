import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import config from '../../../config'
import authContext from '../../helpers/authContext';
import { useHistory } from 'react-router';
import Modal from './Modal';
const Detail = React.memo(function Detail(props) {
	const context = useContext(authContext)
	const history = useHistory();

	const [like, setLike] = useState(false)
	const [inCart, setInCart] = useState(false)
	const [addToCart, setAddToCart] = useState(false)
	const [fav, setFav] = useState(false)
	const [noOfLikes, setNoOfLikes] = useState(0)
	const [variantId, setVariantId] = useState(0)
	const [productId, setProductId] = useState(0)
	const [quantity, setQuantity] = useState(0)

	const [modalShow, setModalShow] = useState(false);
	const [ModalTwo, setModalTwo] = useState(false);

	let images = [];
	let content = ''
	let isContent;

	useEffect(() => {

		setLike(props.detail.liked)
		setInCart(props.detail.productInCart)
		setFav(props.detail.saved);
		setNoOfLikes(props.detail.likes)

	}, [props.detail])


	const handleLikeClick = () => {



		if (like) {
			props.unlikeProduct({ productId: props.detail.id }).then(res => {

				setLike(false)
				setNoOfLikes(noOfLikes - 1)
				props.fetchProductDetails(props.detail.slug).then(res => {

				})
			})
		}

		if (!like) {
			props.likeProduct({ productId: props.detail.id }).then(res => {
				setLike(true)
				setNoOfLikes(noOfLikes + 1)
				props.fetchProductDetails(props.detail.slug).then((res => {
				}))
			})
		}
	}

	const handleFavClick = () => {
		// console.log(fav)
		if (fav) {
			props.unfavProduct({ productId: props.detail.id }).then(res => {
				setFav(false)
				props.fetchProductDetails(props.detail.slug).then(res => {

				})
			})
		}

		if (!fav) {
			props.favProduct({ productId: props.detail.id }).then(res => {
				setFav(true)
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

	const modalContent = (item) => {
		console.log('ITEM', item)
		if (!ModalTwo) {
			setModalTwo(true)
		} else {
			setModalTwo(false)
		}

		content = ` < div className="modal-content" >
			< img src=${config.IMG_END_POINT + item.url} className="modal-image" />
		</div >`
		isContent = true;
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
						<li><a href="#"><img src="/images/detail-video/icon/sort.svg" alt="" /></a></li>
						<li><a href="#"><img src="/images/detail-video/icon/setting.svg" alt="" /></a></li>
						<li><a href="#"><img src="/images/detail-video/icon/category.svg" alt="" /></a></li>
					</ul>
				</div>
			</div>

			{(props.detail.videos) ?
				<VedioPlayer url={props.detail?.videos[0]?.url} />
				: ""}

			{ModalTwo && <Modal content={images} isVisible={setModalTwo} />}
			{/* <div className="video-content d-flex flex-column w-100 mw-100 overflow-hidden" style={{ padding: '20px' }}> */}
			<div className="video-content" >
				{/* <div className='d-flex  justify-content-between mw-90'> */}
				<div className="caption" >
					<div className='contnt'>
						<div className='contents' >
							<h2>{props.detail.title}</h2>
							<div className="price">
								{(props.detail.attributes && props.detail?.attributes.length > 0) ?
									<h4>{'$' + props.detail.attributes[0].price + '.00'} <del>{'$' + props.detail.attributes[0].discounted_price + '.00'}</del></h4>
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
								<li><img src="/images/detail-video/icon/message.svg" alt="" /></li>
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

const VedioPlayer = ({ url }) => {
	// console.log('Video URL', url)
	return (
		<div id="videoWrapper"  >
			<video
				playsInline
				autoPlay
				muted
				loop
				poster="/images/detail-bg.png"
				src={config.IMG_END_POINT + url} />
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