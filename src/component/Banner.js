import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay } from 'swiper';


import 'swiper/css';
import "swiper/css/pagination";

//props = 
function Banner(props) {
    return (
        <div id={props.objid}>

        <Swiper 
            pagination={{
            type: "fraction",
            }}
            loop={true}
            autoplay ={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            centeredSlides = {true}
     modules={[ Pagination, Autoplay ]}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className = "d-flex flex-column align-items-center justify-content-center"style={{ height : '800px'}}>Slide 1</SwiperSlide>
      <SwiperSlide className = "d-flex flex-column align-items-center justify-content-center"style={{ height : '800px'}}>Slide 2</SwiperSlide>
      <SwiperSlide className = "d-flex flex-column align-items-center justify-content-center"style={{ height : '800px'}}>Slide 3</SwiperSlide>
    
    </Swiper>


      </div>
    );
}
export default Banner;