import { Facebook, Heart, Instagram, Twitch } from 'react-bootstrap-icons';
import { Avatar42 } from '../../../Avatars';
import './ProductCardV4.css'
import { NavLink } from 'react-router-dom';


export const ProductCardV4=()=>{



    return(
        <div className="featured-item v4">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><Heart/><span className="count">22</span></div>
                <div className="featured-item-image">
                  <NavLink to="/productv1"><img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/></NavLink>
                </div>
                <div className="featured-item-author">
                  <div className="title"><NavLink to="/productv1">The Molten Heart</NavLink></div>
                  <div className="item-meta"><span className="gradient-text"><NavLink to="/profile">@DexterStark</NavLink></span></div>
                </div>
                <Avatar42/>
                <div className="featured-bidding-section">
                  <div className="featured-item-pricebox">
                    <div className="price">4.07 ETH</div>
                    <div className="price-caption">Current BID</div>
                  </div>
                  <div className="place-bid"><button className="btn btn-small-wide btn-dark waves-effect waves-button waves-float waves-light">Bid!</button></div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="countdown-box">
                  <div className="label">Ending in</div>
                  <div className="countdown">
                    <div className="value js-countdown" data-timer="104400" data-labels="d: , h: , m: , s">
                        Time
                    </div>
                  </div>
                </div>
                <div className="social-share-box">
                  <div className="social-caption">Share</div>
                  <div className="share-icons">
                    <NavLink to="/">
                      <Facebook/>
                    </NavLink>
                    <NavLink to="/">
                        <Twitch/>
                    </NavLink>
                    <NavLink to="/">
                        <Instagram/>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}