import { Facebook, Heart, Instagram, Twitch } from 'react-bootstrap-icons';
import { Avatar42 } from '../../../Avatars';
import './ProductCardV4.css'



export const ProductCardV4=()=>{



    return(
        <div className="featured-item v4">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="fav-counter"><Heart/><span className="count">22</span></div>
                <div className="featured-item-image">
                  <a href="05-product-page.html"><img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/></a>
                </div>
                <div className="featured-item-author">
                  <div className="title"><a href="05-product-page.html">The Molten Heart</a></div>
                  <div className="item-meta"><span className="gradient-text"><a href="08-profile-page.html">@DexterStark</a></span></div>
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
                    <a href="#">
                      <Facebook/>
                    </a>
                    <a href="#">
                        <Twitch/>
                    </a>
                    <a href="">
                        <Instagram/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}