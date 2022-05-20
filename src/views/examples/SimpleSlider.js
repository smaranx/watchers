import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import "./header.css";

// import required modules
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay]);

export default function App() {
  return (
    <>
      <Swiper
        
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            autoplay:true

          },
          // when window width is >= 768px
          768: {
            width: 760,
            slidesPerView: 2,
            autoplay:true

          },
          1042: {
            slidesPerView: 4,
            width:2000,
            autoplay:true

          }
        }}
        loop
      // install Swiper modules
      
      modules={[Navigation]}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
        <SwiperSlide>   <img style={{ transform: "rotateX(0deg) rotateY(-18deg) rotate(-10deg) translate(0px, -2px)" 
}}
                      alt="..."
                      className="img-fluid"
                      src={require("assets/2.png").default}
                    ></img>  </SwiperSlide>
        <SwiperSlide>   <img style={{ transform: "rotateX(7deg) rotateY(15deg) rotate(13deg) translate(0px, 9px)" 
}}
                      alt="..."
                      className="img-fluid"
                      src={require("assets/3.png").default}
                    ></img>  </SwiperSlide>
        <SwiperSlide>   <img style={{ transform: "rotateX(-15deg) rotateY(0deg) rotate(-2deg) translate(0px, -17px)" 
}}
                      alt="..."
                      className="img-fluid"
                      src={require("assets/4.png").default}
                    ></img>  </SwiperSlide>
                     <SwiperSlide>   <img style={{ transform: "rotateX(-8deg) rotateY(-20deg) rotate(-18deg) translate(0px, 9px)" 
}}
                      alt="..."
                      className="img-fluid"
                      src={require("assets/5.png").default}
                    ></img>  </SwiperSlide>

      </Swiper>
    </>
  );
}
