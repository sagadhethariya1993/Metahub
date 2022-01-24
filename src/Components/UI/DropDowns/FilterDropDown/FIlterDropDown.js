
import './FilterDropDown.css'
import { useState } from 'react';


export const FilterDropDown=()=>{
    const [Open,setOpen]=useState(false);

    return(
        <div className="filter-item">
            <div className={'nice-select select-nice '+(Open?' open':'')} onClick={()=>{setOpen(!Open)}}>
                <span className="current">Newest to Oldest</span>
                <div className="nice-select-dropdown">
                
                <ul className="list">
                    <li data-value="newest-to-oldest" className="option null selected">Newest to Oldest</li>
                    <li data-value="oldest-to-newest" className="option null">Oldest to Newest</li>
                    <li data-value="most-popular" className="option null focus">Most Popular</li>
                </ul>
                </div>
            </div>

        </div>
    );
}