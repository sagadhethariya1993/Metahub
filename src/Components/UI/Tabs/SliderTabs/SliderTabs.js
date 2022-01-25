import { useEffect, useState } from 'react';
import {  CreatorDetailCard, ProductActivity } from '../../../Elements/Cards';
import './SliderTabs.css'
import { Navigation, Pagination, A11y,Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { ProductCard } from '../../../Elements/Cards';
import {Grids} from '../../../Elements/HOC';
import { ProfileAbout } from '../../../Elements/Profile/ProfileAbout';



export const SliderTabs=()=>{
    
    const [controlledSwiper, setControlledSwiper] = useState(null);

    
    var items=[0,1,2,3,4,5,6,7,8,9,10,11,12];

    const ProductTab =()=> {return(<div className="featured-box ">
            <div className="featured-box-wrapper grid-4-columns">
                <Grids col={4}>
                    {
                        items.map((i)=>(
                            <ProductCard key={i+"Productitem"}/>
                        ))
                    }
                </Grids>
            </div>
        </div>)};
    const CreatorTab = ()=>{ return(<div className="featured-box ">
        <div className="featured-box-wrapper grid-4-columns">
            <Grids col={4}>
                {
                    items.map((i)=>(
                        <CreatorDetailCard key={i+"CreatorItem"}/>
                    ))
                }
            </Grids>
        </div>
    </div>)};


    const Tab=[
        (<div className="tab-content"><ProductTab/></div>),
        (<div className="tab-content"><CreatorTab/></div>),
        (<div className="tab-content"><ProductActivity/><ProductActivity/><ProductActivity/><ProductActivity/>
        <ProductActivity/><ProductActivity/><ProductActivity/><ProductActivity/><ProductActivity/><ProductActivity/>
        <ProductActivity/><ProductActivity/></div>),
        (<div className="tab-content"><ProfileAbout/></div>)
    ]


    const list =[
        {
            "Title":'Created',
            "Count":'135',
            "Tab" :Tab[0]
        },
        {
            "Title":'Collected',
            "Count":'48',
            "Tab" :Tab[0]
        },
        {
            "Title":'OnSale',
            "Count":'12',
            "Tab" :Tab[0]
        },
        {
            "Title":'Following',
            "Count":'903',
            "Tab" :Tab[1]
        },
        {
            "Title":'Followers',
            "Count":'90',
            "Tab" :Tab[1]
        },
        {
            "Title":'Activity',
            "Count":'',
            "Tab" :Tab[2]
        },
        {
            "Title":'About',
            "Count":'',
            "Tab" :Tab[3]
        },
    ];
    const [activeTab,setActiveTab]= useState(list[0]);
    
    
    const [tabList,setTabList]= useState();

    useEffect(()=>{
        let tabData = list.map((i,index)=>(
            <SwiperSlide  key={`tab ${i.Title + index}`}>
                {activeTab.Title===i.Title?
                <li onClick={()=>setActiveTab(i)} className='active' ><NavLink to="/">{i.Title}<span className="count">{i.Count}</span></NavLink></li>
                :<li onClick={()=>setActiveTab(i)} ><NavLink to="/">{i.Title}<span className="count">{i.Count}</span></NavLink></li>}
           </SwiperSlide>
        ));
            setTabList(tabData);
    },[activeTab])
    return(
        <div className="tabs-block">
                <Swiper
                    className='tabs-list'
                    modules={[Navigation, Pagination, A11y,Controller]}
                    spaceBetween={10}
                    navigation
                    breakpoints={{
                        "640": {
                            "slidesPerView": 1,
                        },
                        "768": {
                            "slidesPerView": 1,
                        },
                        "1024": {
                            "slidesPerView": 9,
                        }
                    }}
                controller={{ control: controlledSwiper }}>

                    {tabList}
                </Swiper>
                <Swiper modules={[Controller]} onSwiper={setControlledSwiper} ></Swiper>
            <div className="tab active">
                {activeTab.Tab}
            </div>
            
        </div>
    );
}