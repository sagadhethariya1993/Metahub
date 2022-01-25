import './ArtworkSlider.css'
import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArtworkCard } from '../../Cards';
import {OverflowHidden} from '../../HOC';



export const ArtworkSlider=()=>{
    const [controlledSwiper, setControlledSwiper] = useState(null);


    

    return(
    <OverflowHidden>
        <Swiper
        className='ArtworkSlider'
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
                "slidesPerView": 1,
              }
        }}
        controller={{ control: controlledSwiper }}>
            <SwiperSlide>
                <ArtworkCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ArtworkCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ArtworkCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ArtworkCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ArtworkCard/>
            </SwiperSlide>
            
        
        </Swiper>
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
        
        </Swiper>
    </OverflowHidden>
    );
}