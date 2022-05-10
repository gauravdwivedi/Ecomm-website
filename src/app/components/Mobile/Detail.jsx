import React from 'react'
import config from '../../../config'


const Detail = React.memo(function Detail(props) {

	console.log('Detail PROPS', props.detail.videos)
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
				<VedioPlayer url={props.detail.videos[0].url} />
				: ""}

			<div className="video-content">
				<div className="caption">
					<div className="contnt">
						<div className="contents">
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
							<div className="detail-gallery">
								<ul>

									{props.detail.images && props.detail.images.map(({ url }, i) => <li key={i}><img src={url} alt="" /></li>)}
								</ul>
							</div>
							<div className="hrs-btn">
								<span><img src="/images/hr-icon.svg" alt="" /><h6>Delivery : With in 3 Hrs</h6></span>
							</div>
						</div>
					</div>
					<div className="contnt">
						<div className="contents right-sec">
							<ul>
								<li><img src="/images/detail-video/icon/notify.svg" alt="" /></li>
								<li><img src="/images/detail-video/icon/like.svg" alt="" /></li>
								<li><img src="/images/detail-video/icon/message.svg" alt="" /></li>
								<li><img src="/images/detail-video/icon/share.svg" alt="" /></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="detail-add"><a href="#" className="btn btn-solid" tabIndex="0">Add To Cart</a></div>
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