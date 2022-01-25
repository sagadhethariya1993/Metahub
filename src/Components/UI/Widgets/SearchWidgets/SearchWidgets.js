import { Search } from 'react-bootstrap-icons';
import './SearchWidgets.css'


export const SearchWidgets=()=>{


    return(
        <div className="widget-2 widget-search">
          <div className="widget-title h5">Search</div>
          <div className="widget-body">
            <form method="get" className="search">
              <input type="text" className="search-input" placeholder="Enter your search here..."/>
              <button className="search-button">
                <Search/>
              </button>
            </form>
          </div>
        </div>
    );
}