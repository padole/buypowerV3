import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import provider1 from '../../assets/provider1.svg'
import provider2 from '../../assets/provider2.svg'
import provider3 from '../../assets/provider3.svg'
import provider4 from '../../assets/provider4.svg'
import provider5 from '../../assets/provider5.svg'
import provider6 from '../../assets/provider6.svg'
import "./partner.css"

function partner(props) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        autoplayspeed:5000,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        cssEase: "linear",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className='container'>
        <h2> Our Service Providers</h2>
        <Slider {...settings}>
          <div className='card'>
            <img src={provider1} alt=""/>
          </div>
          <div className='card'>
            <img src={provider2} alt=""/>
          </div>
          <div className='card'>
            <img src={provider3} alt=""/>
          </div>
          <div className='card'>
            <img src={provider4} alt=""/>
          </div>
          <div className='card'>
            <img src={provider5} alt=""/>
          </div>
          <div className='card'>
            <img src={provider6} alt=""/>
          </div>
          <div className='card'>
            <img src={provider4} alt=""/>
          </div>
          <div className='card'>
            <img src={provider3} alt=""/>
          </div>
        </Slider>
      </div>
    );
}

export default partner;