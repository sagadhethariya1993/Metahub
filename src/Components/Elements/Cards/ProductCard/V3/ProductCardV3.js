import { Facebook, Heart, Instagram, Twitter } from 'react-bootstrap-icons';
import { Timer } from '../../../../UI/Timer/Timer';
import { Avatar26 } from '../../../Avatars';
import './ProductCardV3.css'




export const ProductCardV3=()=>{


    return(
        <div className="featured-item v3">
            <div className="featured-item-wrapper">
              <div className="featured-item-image-wrapper">
                <div className="featured-item-image">
                  <a href="05-product-page.html"><img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/></a>
                </div>
              </div>
              <Timer/>
              <div className="item-meta-wrapper">
                <div className="title"><a href="05-product-page.html">The Molten Heart</a></div>
                <div className="fav-counter"><Heart/><span className="count">22</span></div>
              </div>

              <div className="item-meta-wrapper">
                <div className="item-meta">
                  <div className="creator-box">
                    <div className="creator-info">
                      <Avatar26/>
                      <div className="creator-meta">
                        <div className="creator-label">CREATOR</div>
                        <div className="creator-name"><a href="08-profile-page.html">Dexter Stark</a></div>
                      </div>
                    </div>
                    <div className="featured-item-pricebox">
                      <div className="price-caption">EDITION </div>
                      <div className="price">1 / 50</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-meta">
                <div className="creator-box">
                  <div className="creator-info">
                    <Avatar26/>
                    <div className="creator-meta">
                      <div className="creator-label">BID PLACED BY</div>
                      <div className="creator-name"><a href="05-product-page.html">Crimson Ray</a></div>
                    </div>
                  </div>

                  <div className="featured-item-pricebox">
                    <div className="price-caption">Current BID</div>
                    <div className="price">4.07 ETH</div>
                  </div>
                </div>
              </div>
              <div className="featured-item-post-content">
                <div className="social-share-box">
                  <div className="share-icons">
                    <a href="#">
                      <Facebook/>
                    </a>
                    <a href="#">
                      <Twitter/>
                    </a>
                    <a href="#">
                      <Instagram/>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
    );
}