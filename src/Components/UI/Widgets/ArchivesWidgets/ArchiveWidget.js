import './ArchiveWidget.css'
import { NavLink } from 'react-router-dom';

export const ArchiveWidget=()=>{


    return(
        <div className="widget-2 archives-widget">
          <div className="widget-title h5">Archives</div>
          <div className="widget-body">
            <ul className="archives-widget-list">
              <li className="archive-item">
                <NavLink to="!#">March 2021</NavLink><span className="colored">(5)</span>
              </li>
              <li className="archive-item">
                <NavLink to="!#">February 2021</NavLink><span className="colored">(3)</span>
              </li>
            </ul>
          </div>
        </div>
    );
}