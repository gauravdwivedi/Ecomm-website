import React from 'react'
import Slider from 'react-slick'
import config from '../../../config'


function HomeSlider({bannerList}) {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:"linear"
      };

      const activeBanners = bannerList.filter(item=>item.active==true);
      console.log('Active Banners',activeBanners);
    return (
        <section className="pt-0 home-section ratio_55">
            <div className="home-slider slick-default ">
                <div>
                    {/* <Slider {...settings}>
                        <div className='slider-box'>
                            <img src="/images/banner.png" className="img-fluid bg-img" alt="" />
                        </div>
                        <div className='slider-box'>
                            <img src="/images/banner.png" className="img-fluid bg-img" alt="" />
                        </div>
                    </Slider> */}

                    <Slider {...settings}>
                        { activeBanners.length>0 && activeBanners.map((item,index)=>(
                            
                             <div className='slider-box'>
                             <img src={config.IMG_END_POINT+item.url} className="img-fluid bg-img" alt="" />
                         </div>
                        ))}
                       
                       
                    </Slider>
                </div>
            </div>

        </section>

    )
}

export default HomeSlider