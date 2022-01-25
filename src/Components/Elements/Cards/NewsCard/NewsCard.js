import './NewsCard.css'
import { NavLink } from 'react-router-dom';
import { ChevronRight, MusicNote, PlayFill } from 'react-bootstrap-icons';

export const NewsCard=({video=false,music=false,nothumb=true,classic=false})=>{

    return(
        <div className={classic?"news-item-classic":"news-item"}>
          { nothumb?<div className="news-thumb">
            {video?<NavLink className="post-format-icon" data-fslightbox="" data-type="youtube" to="/"><PlayFill/></NavLink>:null}
            {music?<NavLink className="post-format-icon" data-fslightbox="lightbox" to="/audio-iframe"><MusicNote/></NavLink>:null}
           
              <NavLink to="/blogpostcentered">
                <img src={require('../../../../assets/Images/content/latest-news/news-thumb7.png')} width="460" height="260" alt="" loading="lazy"/>
              </NavLink>
            </div>:null}
            <div className="news-content">
              <div className="news-meta">
                <div className={nothumb?"news-tags":"news-tags news-mb"}>
                  <span className="tag-item"><NavLink to="/">Guides</NavLink></span>
                  <span className="tag-item"><NavLink to="/">News</NavLink></span>
                </div>
                by <NavLink to="/profile">Cryptoki</NavLink>, March 26th, 2021
              </div>
              <div className="news-title h5"><NavLink to="/blogpostslidebar">We explain with details everything you need
                  to know
                  about crypto art and
                  cryptocurrencies!</NavLink></div>
              <div className="news-excerpt">A cryptocurrency is a digital asset designed to work as a medium of exchange
                wherein individual coin ownership records...</div>
              <div className="read-more-link">
                <NavLink to="/blogpostcentered">Read More<ChevronRight/></NavLink>
              </div>
            </div>
          </div>
    );
}