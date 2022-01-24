import { useEffect, useState } from 'react';
import { DescriptionList } from '..';
import { Bids, ProductActivity } from '../../Elements/Cards';
import './Tabs.css'



export const Tabs=()=>{

    const Tab=[
        <div className="tab-content"><Bids/><Bids/><Bids/></div>,
        <div className="tab-content"><div className="product-description"><DescriptionList/></div></div>,
        <div className="tab-content"><ProductActivity/><ProductActivity/><ProductActivity/></div>
    ]


    const list =[
        {
            "Title":'Bids',
            "Tab" :Tab[0]
        },
        {
            "Title":'Additional Details',
            "Tab" :Tab[1]
        },
        {
            "Title":'Activity',
            "Tab" :Tab[2]
        },
    ];
    const [activeTab,setActiveTab]= useState(list[0]);
    
    
    const [tabList,setTabList]= useState();

    useEffect(()=>{
        let tabData = list.map((i,index)=>(
            activeTab.Title===i.Title?<li onClick={()=>setActiveTab(i)} className='active'  key={`tab ${i.Title + index}`}><a >{i.Title}</a></li>
           :<li onClick={()=>setActiveTab(i)}  key={`tab ${i.Title + index}`}><a >{i.Title}</a></li>
        ));
            setTabList(tabData);
    },[activeTab])
    return(
        <div className="tabs-block">
            <ul className="tabs-list">
                {tabList}
            </ul>
            <div className="tab active">
                {activeTab.Tab}
            </div>
            
        </div>
    );
}