import './LatestCommentsWidget.css'
import { NavLink } from 'react-router-dom';


export const LatestCommentsWidget=()=>{


    return(
        <div className="widget-2 latest-comments-widget">
          <div className="widget-title h5">Comments</div>
          <div className="widget-body">
            <ul className="latest-comments-widget-list">
              <li className="comment-item">
                <NavLink to="/profile" className="colored comment-author">Jackie Jones</NavLink> on <NavLink className="comment-link" to="15-blog-post-sidebar">We explain with details everything you need to
                  know about crypto art and cryptocurrencies!</NavLink>
              </li>
              <li className="comment-item">
                <NavLink to="/profile" className="colored comment-author">Dexter Stark</NavLink> on <NavLink className="comment-link" to="15-blog-post-sidebar">We explain with details everything you need to
                  know about crypto art and cryptocurrencies!</NavLink>
              </li>
              <li className="comment-item">
                <NavLink to="/profile" className="colored comment-author">Crimson Ray</NavLink> on <NavLink className="comment-link" to="15-blog-post-sidebar">We explain with details everything you need to
                  know about crypto art and cryptocurrencies!</NavLink>
              </li>
            </ul>
          </div>
        </div>
    );
}