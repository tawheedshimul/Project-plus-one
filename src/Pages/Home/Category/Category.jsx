import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


function Category() {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00am- 11.00pm"}
                heading={"Order Online"}>
            </SectionTitle>
            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desert</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>

            </Swiper>
        </section>
    )
}

export default Category;