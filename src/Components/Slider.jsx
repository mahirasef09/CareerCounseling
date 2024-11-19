import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Discussion1 from '../assets/discussion1.jpg'
import Discussion2 from '../assets/discussion2.jpg'
import Discussion3 from '../assets/discussion3.jpg'
import Discussion4 from '../assets/discussion4.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div>
                            <img className='rounded-3xl p-3 h-[400px]' src={Discussion1} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-4xl font-extrabold'>Career Guidance for you to improve your life</h1>
                            <p>We provide consultancy services to encourage, manage and boost your career</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col md:flex-row items-center'>
                        <div>
                            <img className='rounded-3xl p-3 h-[400px]' src={Discussion2} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-4xl font-extrabold'>Career Guidance for you to improve your life</h1>
                            <p>We provide consultancy services to encourage, manage and boost your career</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col md:flex-row items-center'>
                        <div>
                            <img className='rounded-3xl p-3 h-[400px]' src={Discussion3} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-4xl font-extrabold'>Career Guidance for you to improve your life</h1>
                            <p>We provide consultancy services to encourage, manage and boost your career</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex flex-col md:flex-row items-center'>
                        <div>
                            <img className='rounded-3xl p-3 h-[400px]' src={Discussion4} alt="" />
                        </div>
                        <div className='text-center space-y-3'>
                            <h1 className='text-4xl font-extrabold'>Career Guidance for you to improve your life</h1>
                            <p>We provide consultancy services to encourage, manage and boost your career</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;