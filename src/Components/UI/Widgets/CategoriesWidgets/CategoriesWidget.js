

import './CategoriesWidget.css'

import { NavLink } from 'react-router-dom';

export const CategoriesWidget=()=>{


    return(
        <div className="widget-2 categories-widget">
          <div className="widget-title h5">Categories</div>
          <div className="widget-body">
            <div className="categories-widget-list">
              <NavLink to="/" className="categories-widget-item">Guides</NavLink>
              <NavLink to="/" className="categories-widget-item">News</NavLink>
              <NavLink to="/" className="categories-widget-item">Currencies</NavLink>
              <NavLink to="/" className="categories-widget-item">Creators</NavLink>
              <NavLink to="/" className="categories-widget-item">Artworks</NavLink>
              <NavLink to="/" className="categories-widget-item">Digital Freebies</NavLink>
            </div>
          </div>
        </div>
    );
}