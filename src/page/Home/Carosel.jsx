import  { useRef,  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carosel.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../../assets/photo-1612821394773-23f0a7d33ede.avif'
import slide2 from '../../assets/photo-1573865174887-dd85bc60e3e5.avif'
import slide3 from '../../assets/slide3.avif'
import slide4 from '../../assets/slide4.jpg'

const Carosel = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=' my-2 lg:my-4 lg:min-h-screen rounded-xl '>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>      
              
                <img className='w-[1280px] bg-cover rounded-xl' src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>       
                <img className='w-[1280px] bg-cover rounded-xl' src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>       
                <img className='w-[1280px] bg-cover rounded-xl' src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>       
                <img className='w-[1280px] bg-cover rounded-xl' src={slide3} alt="" />
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carosel;