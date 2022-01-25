import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CategoryItem } from '../../Elements/CategoryItem/CategoryItem';
import './ExploreFilterSlider.css'
import { Ux} from '../../Elements/HOC';

export const ExploreFilterSlider=()=>{
    const [controlledSwiper, setControlledSwiper] = useState(null);


    

    return(
    <Ux>
        <Swiper
        className='categories-bar'
        modules={[Navigation, Pagination, A11y,Controller]}
        spaceBetween={10}
        navigation loop
        breakpoints={{
            "640": {
                "slidesPerView": 2,
              },
              "768": {
                "slidesPerView": 2,
              },
              "1024": {
                "slidesPerView": 7,
              }
        }}
        controller={{ control: controlledSwiper }}>
            <SwiperSlide className="category-item">
                <CategoryItem/>
            </SwiperSlide>
            <SwiperSlide className="category-item">
                <CategoryItem/>
            </SwiperSlide>
            <SwiperSlide className="category-item">
                <CategoryItem/>
            </SwiperSlide>
            <SwiperSlide className="category-item">
                <CategoryItem/>
            </SwiperSlide>
            <SwiperSlide className="category-item">
                <CategoryItem/>
            </SwiperSlide>
            
        
        </Swiper>
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
        
        </Swiper>
    </Ux>
    );
}