// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
/* 
https://i.ibb.co/hfkZBfp/z3.jpg
https://i.ibb.co/R3CF1zM/z4.jpg
https://i.ibb.co/fCJzVM0/z5.jpg
https://i.ibb.co/9wjF1rG/z6.jpg
https://i.ibb.co/ykwzbbj/z7.jpg
https://i.ibb.co/q9Dt8sy/z8.jpg
https://i.ibb.co/zH91cz1/z9.jpg
https://i.ibb.co/1QWmPmJ/zlzz.jpg
https://i.ibb.co/HNjh2vk/zzzz.jpg
https://i.ibb.co/sWTVBSL/zzzzzz2.jpg
https://i.ibb.co/dPMtqdK/zzzzzzzzzzzz11.jpg
https://i.ibb.co/VxzJw1M/zzzzzzzzzzzzzzzzz.jpg
*/

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    
    return (
        <>
        <Swiper
          spaceBetween={30}   
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        > 
          <SwiperSlide>
            
            <img className='w-full  rounded-2xl' src="https://i.ibb.co/dPMtqdK/zzzzzzzzzzzz11.jpg"  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full  rounded-2xl' src="https://i.ibb.co/R3CF1zM/z4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full  rounded-2xl' src="https://i.ibb.co/HNjh2vk/zzzz.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full rounded-2xl' src="https://i.ibb.co/9wjF1rG/z6.jpg" />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;