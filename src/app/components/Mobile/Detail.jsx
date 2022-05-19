import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import config from '../../../config'
import PopUp from './PopUp'



const Detail = React.memo(function Detail(props) {

	const [like, setLike] = useState(false)
	const [inCart, setInCart] = useState(false)
	const [addToCart, setAddToCart] = useState(false)
	const [fav, setFav] = useState(false)
	const [noOfLikes, setNoOfLikes] = useState(0)
	const [variantId, setVariantId] = useState(0)
	const [productId, setProductId] = useState(0)
	const [quantity, setQuantity] = useState(0)

	let images = [];

	useEffect(() => {
		if (props.detail.liked) {
			setLike(props.detail.liked)
		}
		setInCart(props.detail.productInCart)


		setFav(props.detail.saved);


		if (props.detail.likes) {
			setNoOfLikes(props.detail.likes)
		}


	}, [props.detail])


	const handleLikeClick = () => {

		if (like) {
			props.unlikeProduct({ productId: props.detail.id }).then(res => {

				setLike(false)
				props.fetchProductDetails(props.detail.slug).then(res => {

				})
			})
		}

		if (!like) {
			props.likeProduct({ productId: props.detail.id }).then(res => {
				setLike(true)
				props.fetchProductDetails(props.detail.slug).then((res => {
				}))
			})
		}
	}

	const handleFavClick = () => {
		console.log(fav)
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
		setAddToCart(true)
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
			images.push(item.url)
		})
	}

	if (props.detail.videos) {
		props.detail.videos.map((item) => {
			images.push(item.thumbnail)
		})
	}

	return (
		<div id="main">
			<div className="detail-header">
				<a href="/">
					<img src="/images/back.svg" className="img-fluid" alt="" />
				</a>
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

			<div className="video-content d-flex flex-column w-100 mw-100 overflow-hidden" style={{ padding: '20px' }}>
				<div className='d-flex  justify-content-between mw-90'>
					<div className="caption" >
						<div className="contents d-flex justify-content-between" >
							<div style={{ maxWidth: '70%' }}>
								<h2>{props.detail.title}</h2>
								<div className="price">
									{(props.detail.attributes && props.detail?.attributes.length > 0) ?
										<h4>{'$' + props.detail.attributes[0].discounted_price} <del>{'$' + props.detail.attributes[0].price}</del></h4>
										: ""}
								</div>
								<ul className="ratings">
									{new Array(5).fill("", 0, 5).map((p, i) => (i < props.detail.rating) ?
										<li key={i}><i className="iconly-Star icbo"></i></li> :
										<li key={i}><i className="iconly-Star icbo empty"></i></li>)}
								</ul>
								<p>{props.detail.description}</p>

								<div className="detail-gallary" style={{ display: 'inline-block', maxWidth: '60%', overflow: 'auto' }}>
									<ul className='detail__gallery-li d-flex overflow-scroll'>
										{props.detail.images && images.map((item, i) => <li key={i}><img src={config.IMG_END_POINT + item} alt="" className='detail__gallary-img' /></li>)}
									</ul>
								</div>
								<div className="hrs-btn">
									<span><img src="/images/hr-icon.svg" alt="" /><h6>Delivery : With in 3 Hrs</h6></span>
								</div>
							</div>
						</div>
					</div>
					<div className="contents right-sec " >
						<ul className='d-flex flex-column justify-content-around flex-fill h-100 '>
							<li>
								{fav ? <img src="/images/detail-video/icon/notify.svg" alt="" className='bg-danger' onClick={handleFavClick} /> : <img src="/images/detail-video/icon/notify.svg" alt="" onClick={handleFavClick} />}
							</li>
							<li className='liked'>
								{like ? <>
									<img src="/images/detail-video/icon/like.svg" alt="" className='bg-danger' onClick={handleLikeClick} />
									<span style={{ color: 'white', fontSize: '16px', alignItems: 'center', margin: 'auto' }}>{noOfLikes}</span>
								</> :
									<>
										<img src="/images/detail-video/icon/like.svg" alt="" onClick={handleLikeClick} />
										<span style={{ color: 'white', fontSize: '16px', margin: 'auto' }}>{noOfLikes}</span>
									</>}
							</li>
							<li><img src="/images/detail-video/icon/message.svg" alt="" /></li>
							<li><img src="/images/detail-video/icon/share.svg" alt="" /></li>
						</ul>
					</div>
				</div >

				<Toaster />

				<div className="detail-add flex-fill" style={{ borderRadius: '20px' }}>{inCart == true ?
					<div>

						<Link to={{ pathname: "/cart", state: { fromProductPage: true } }} className="btn btn-solid flex-fill" >Go to cart</Link>
					</div>
					: <>{
						addToCart ? <> <h4 className='text-white'>Select Size</h4>
							<div>
								{props.detail.attributes.map((item, index) => (
									<PopUp item={item} key={index} />
								))}
							</div> <button onClick={handleInsertInCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button></>
							: <button onClick={handleAddCart} className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</button>
					}
					</>}
				</div>
			</div >
		</div >
	)
})

const VedioPlayer = ({ url }) => {
	console.log('Video URL', url)
	return (
		<div id="videoWrapper">
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
export default Detail