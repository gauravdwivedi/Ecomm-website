import React from 'react'
import Slider from 'react-slick'

function HomeSlider() {


    let settings = {
        dots: true
    }
    return (
        <section className="pt-0 home-section ratio_55">
            <div className="home-slider slick-default theme-dots">
                <div>
                    <Slider {...settings}>
                        <div className='slider-box'>
                            <img src="images/banner.png" className="img-fluid bg-img" alt="" />

                        </div>
                        <div className='slider-box'>
                            <img src="images/banner.png" className="img-fluid bg-img" alt="" />

                        </div>
                    </Slider>
                </div>
            </div>

        </section>

    )
}

export default HomeSlider