import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCard } from '../../Cards';
import './ProductSlider.css'
import {OverflowHidden} from '../../HOC';

export const ProductSlider=()=>{
    const [controlledSwiper, setControlledSwiper] = useState(null);


    

    return(
    <OverflowHidden>
        <Swiper
        className='ProductSlider'
        modules={[Navigation, Pagination, A11y,Controller]}
        spaceBetween={20}
        navigation loop
        breakpoints={{
            "640": {
                "slidesPerView": 1,
              },
              "768": {
                "slidesPerView": 1,
              },
              "1024": {
                "slidesPerView": 4,
              }
        }}
        controller={{ control: controlledSwiper }}>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            
        
        </Swiper>
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
        
        </Swiper>
    </OverflowHidden>
    );
}