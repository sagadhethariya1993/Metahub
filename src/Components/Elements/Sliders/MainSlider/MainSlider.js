import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSliderCard } from '../../Cards';
import { SectionPadding,OverflowHidden } from '../../HOC';
import './MainSlider.css'


export const MainSlider=()=>{
    const [controlledSwiper, setControlledSwiper] = useState(null);


    

    return(
    <OverflowHidden>
        <SectionPadding>
            <Swiper
            className='MainSlider'
            modules={[Navigation, Pagination, A11y,Controller]}
            spaceBetween={20}
            slidesPerView={1}
            navigation loop
            controller={{ control: controlledSwiper }}>
                <SwiperSlide>
                    <MainSliderCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MainSliderCard/>
                </SwiperSlide>
                <SwiperSlide className='slide-content-align-right'>
                    <MainSliderCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MainSliderCard/>
                </SwiperSlide>
                
            
            </Swiper>
            <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
            
            </Swiper>
        </SectionPadding>
    </OverflowHidden>
    );
}