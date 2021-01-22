import React, { useState } from 'react';

// react-id-swiper
import 'swiper/swiper-bundle.min.css';
import Swiper from 'react-id-swiper';
// custom css
import './HeroSlider.css';


const image7 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW-PC-1x-alexa_smiley-smoke4._CB408125430_.jpg';
const image1 ='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/Sep1/GW/V240911677_IN_WLME_Nokia_5_3_DesktopTallHero_1500x600_1._CB406805562_.jpg';
const image2 ='https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/GW/MI-Xiaomi_GW_MobileHero_1500x600._CB404990906_.jpg';
const image3 ='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/NewGalaxy_Mseries/Heros/V218752857_Samsung_FamilyLP_1500x600_2._CB407849733_.jpg';
const image4 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg';
const image5 ='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg';
const image6 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/Sept2020/Sept_SVD/SBI_HERO/herotatorSBI_1500x600._CB404992030_.jpg'

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide'
};

// slider component
const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image7' src={image7} alt="image7"></img>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image1' src={image5} alt="image1"></img>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image2' src={image2} alt="image2"></img>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image3' src={image3} alt="image3"></img>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image4' src={image4} alt="image4"></img>
        </div>
        
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image5' src={image1} alt="image5"></img>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className='image6' src={image6} alt="image6"></img>
        </div>
      </div>

    </Swiper>
  );
};

export default HeroSlider;