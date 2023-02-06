import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import mbanner from '../css/mBanner.module.css';
import bannerDb from '../json//bannerDb.json';
import { Link } from 'react-router-dom';
 
//props = 매개인자 > 실행식에서 값을 받아와라 (컴포넌트에 값이 있음) //값
//map = 하나씩 돌리면서 개별적 key값들을 원함 -> console창에서 난리 -> key={'sw' + idx } 이런식으로 key값을 붙여줌
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
      slidesPerView={1.0}

    >

        { 
             bannerDb.mainBanner.map((value,idx) => {
    
              return (  <SwiperSlide key={'sw' + idx }className={ mbanner.item + " " + value.cls.join(" ")}>
                <div className='d-flex flex-column align-items-center mainBanner_text'>
                    <h2 class='bannerTitle'>
                        {value.title[0]}
                        </h2>
                        <p className='bannerSubtitle'>
                        {value.title[1]}
                        </p>
                        {
                         value.type == "a" ? <a href={ value.href[0] } target={ value.href[1]} className='main_banner_btn'>바로가기</a> :
                         <Link to ={value.href[0]} className='main_banner_btn'>바로가기</Link>
                        }
                   
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