import './SearchBox.css'
import {ChevronDown,ChevronUp, Search} from 'react-bootstrap-icons'
import { useState ,useEffect} from 'react';
import { SearchDropDown } from '../../DropDowns/SearchDropDown/SearchDropDown';

export const SearchBox=()=>{
    const [activeDropdown, setActiveDropdown] = useState(false);
   
    return(
        <div className="searchbox">
            <div className="main-search">
              <button className="search-params" onClick={()=>{setActiveDropdown(!activeDropdown);}}>
                <span className="search-param-title">All items</span>
                {activeDropdown?<ChevronUp/>:<ChevronDown/>}
              </button>
              {activeDropdown?<SearchDropDown/>:null}
              <input type="text" className="search-input" name="head-search" id="head-search" placeholder="Enter your search here..."/>
              <button className="search-button">
                <Search/>
              </button>
            </div>
          </div>
    );
}