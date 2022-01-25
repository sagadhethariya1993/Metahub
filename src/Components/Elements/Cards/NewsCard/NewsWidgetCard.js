

import { NavLink } from 'react-router-dom';

export const NewsWidgetCard=()=>{



    return(
        <div className="recent-posts-widget-item">
          <div className="recent-posts-widget-item-img">
            <NavLink to="/blogpostslidebar">
                <img src={require("../../../../assets/Images/content/latest-news/news-thumb9.png")} alt=""/>
            </NavLink>
          </div>
          <div className="recent-posts-widget-item-info">
            <div className="recent-posts-widget-item-tags">
              <NavLink className="tag-item" to="/">Guides</NavLink>
            </div>
            <div className="recent-posts-widget-item-title"><NavLink to="/blogpostslidebar">We explain with
                 details everything
                you need to know about crypto art and cryptocurrencies!</NavLink></div>
            <div className="recent-posts-widget-item-meta">by <NavLink to="/profile">Cryptoki</NavLink>, March
              26th, 2021</div>
          </div>
        </div>
    );
}