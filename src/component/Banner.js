import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import mbanner from '../css/mBanner.module.css';

//props = 
function Banner(props) {

    const bannerDb = {

        mainBanner : [

            {
                title : ["h2태그에 삽입되는 큰 타이틀" , "p태그에 들어가는 작은 설명문구"],
                type : "a" , 
                href :["http://www.github.com" , "_blank"],
                cls : ["event", "bg-light"]

            },

            {
                title : ["두번째기획배너이름" , "작은 설명문구"],
                type: "Link" , 
                href :["/promotion2" , ""],
                cls : ["project", "bg-danger"]

            },

            {
                title : ["세번째기획배너이름" , "작은 설명문구"],
                type: "Link" , 
                href :["/promotion3" , ""],
                cls : ["project", "bg-info"]

            },


        ]
    }


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

        { 
             bannerDb.mainBanner.map((value,idx) => {
    
              return (  <SwiperSlide className={ mbanner.item + " " + value.cls.join(" ")}>
                <div>
                    <h2>
                        {value.title[0]}
                        <p>
                        {value.title[1]}
                        </p>
                    </h2>
                </div>
              </SwiperSlide>
              )
             })

        }

    
    </Swiper>

        
      </div>
    );
}
export default Banner;