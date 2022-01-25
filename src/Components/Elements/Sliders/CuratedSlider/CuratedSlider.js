import './CuratedSlider.css'
import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CuratedCard } from '../../Cards';
import {OverflowHidden} from '../../HOC';



export const CuratedSlider=()=>{
    const [controlledSwiper, setControlledSwiper] = useState(null);


    

    return(
    <OverflowHidden>
        <Swiper
        className='CuratedSlider'
        modules={[Navigation, Pagination, A11y,Controller]}
        spaceBetween={20}
        navigation loop
        breakpoints={{
            "640": {
                "slidesPerView": 4,
              },
              "768": {
                "slidesPerView": 4,
              },
              "1024": {
                "slidesPerView": 4,
              }
        }}
        controller={{ control: controlledSwiper }}>
            <SwiperSlide>
                <CuratedCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CuratedCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CuratedCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CuratedCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CuratedCard/>
            </SwiperSlide>
            
        
        </Swiper>
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
        
        </Swiper>
    </OverflowHidden>
    );
}