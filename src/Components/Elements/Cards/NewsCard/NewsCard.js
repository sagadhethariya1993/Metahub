import './NewsCard.css'
import { ChevronRight } from 'react-bootstrap-icons';
import img from '../../../../assets/Images/Facebook.PNG'

export const NewsCard=()=>{

    return(
        <div className="news-item">
            <div className="news-thumb">
              <a href="14-blog-post-centered.html">
                <img src={img} width="460" height="260" alt="" loading="lazy"/></a>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <div className="news-tags">
                  <span className="tag-item"><a>Guides</a></span>
                  <span className="tag-item"><a>News</a></span>
                </div>
                by <a href="08-profile-page.html">Cryptoki</a>, March 26th, 2021
              </div>
              <div className="news-title h5"><a href="15-blog-post-sidebar.html">We explain with details everything you need
                  to know
                  about crypto art and
                  cryptocurrencies!</a></div>
              <div className="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium of exchange
                wherein individual coin ownership records...</div>
              <div className="read-more-link">
                <a href="14-blog-post-centered.html">Read More<ChevronRight/></a>
              </div>
            </div>
          </div>
    );
}