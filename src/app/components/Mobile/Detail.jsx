import React from 'react'

const Detail = React.memo(function Detail(props) {
	return (
		<div id="main">
			<div className="detail-header">
				<a href="index.html">
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
			<div id="videoWrapper">

				<video
					playsInline
					autoPlay
					muted
					loop
					poster="images/detail-bg.png"
					src={props.detail.video_url} />
			</div>

			<div className="video-content">
				<div className="caption">
					<div className="content">
						<div className="contents">
							<h2>{props.detail.title}</h2>
							<div className="price">
								<h4>{'$' + props.detail.discounted_price} <del>{'$' + props.detail.price}</del></h4>
							</div>
							<ul className="ratings">
								{new Array(5).fill("", 0, 5).map((p, i) => (i < props.detail.rating) ?
									<li key={i}><i className="iconly-Star icbo"></i></li> :
									<li key={i}><i className="iconly-Star icbo empty"></i></li>)}
							</ul>
							<p>{props.detail.description}</p>
							<div className="detail-gallery">
								<ul>
									{props.detail.Images.map((img, i) => <li><img src={img} alt="" key={i} /></li>)}
								</ul>
							</div>
							<div className="hrs-btn">
								<span><img src="/images/hr-icon.svg" alt="" /><h6>Delivery : With in 3 Hrs</h6></span>
							</div>
						</div>
					</div>
					<div className="contents">
						<div className="contents right-sec">
							<ul>
								<li className="m-2 p-2"><img src="/images/detail-video/icon/notify.svg" alt="" /></li>
								<li className="m-2 p-2"><img src="/images/detail-video/icon/like.svg" alt="" /></li>
								<li className="m-2 p-2"><img src="/images/detail-video/icon/message.svg" alt="" /></li>
								<li className="m-2 p-2"><img src="/images/detail-video/icon/share.svg" alt="" /></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="detail-add"><a href="#" className="btn btn-solid" tabIndex="0">Add To Cart</a></div>
			</div>
		</div>
	)
})

export default Detail