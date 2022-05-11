import React, { useEffect, useState } from 'react'
import config from '../../../config'


const Detail = React.memo(function Detail(props) {

	const [like, setLike] = useState(false);

	let images = [];

	useEffect(() => {

		console.log('POST LIKED VALUE', props.detail.liked, props.detail.id)
		if (props.detail.liked) {
			console.log('SETTING LIKE VALUE ')
			setLike(props.detail.liked)
		}
	}, [props.detail.liked])

	const handleLikeClick = () => {
		if (like) {
			props.unlikeProduct({ productId: props.detail.id })
			setLike(false)
		}
		if (!like) {
			props.likeProduct({ productId: props.detail.id })
			setLike(true)
		}
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

			<div className="video-content d-flex flex-column w-100 mw-100 overflow-hidden">
				<div className='d-flex  justify-content-between mw-90'>
					<div className="caption" >
						<div className="contents d-flex justify-content-between" style={{ maxWidth: '100%' }}>
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
					<div className="contents right-sec  " style={{ marginRight: '20%' }} >
						<ul className='d-flex flex-column justify-content-around flex-fill h-100 '>
							<li><img src="/images/detail-video/icon/notify.svg" alt="" /></li>
							<li>{like ? <img src="/images/detail-video/icon/like.svg" alt="" className='bg-danger' onClick={handleLikeClick} /> :
								<img src="/images/detail-video/icon/like.svg" alt="" onClick={handleLikeClick} />}</li>
							<li><img src="/images/detail-video/icon/message.svg" alt="" /></li>
							<li><img src="/images/detail-video/icon/share.svg" alt="" /></li>
						</ul>
					</div>
				</div>
				<div className="detail-add flex-fill"><a href="#" className="btn btn-solid flex-fill" tabIndex="0">Add To Cart</a></div>
			</div>
		</div>
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