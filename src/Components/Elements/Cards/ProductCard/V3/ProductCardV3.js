import { Facebook, Heart, Instagram, Twitter } from 'react-bootstrap-icons';
import { Timer } from '../../../../UI/Timer/Timer';
import { Avatar26 } from '../../../Avatars';
import './ProductCardV3.css'
import { NavLink } from 'react-router-dom';



export const ProductCardV3=()=>{


    return(
        <div className="featured-item v3">
            <div className="featured-item-wrapper">
              <div className="featured-item-image-wrapper">
                <div className="featured-item-image">
                  <NavLink to="/productv1"><img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/></NavLink>
                </div>
              </div>
              <Timer/>
              <div className="item-meta-wrapper">
                <div className="title"><NavLink to="/productv1">The Molten Heart</NavLink></div>
                <div className="fav-counter"><Heart/><span className="count">22</span></div>
              </div>

              <div className="item-meta-wrapper">
                <div className="item-meta">
                  <div className="creator-box">
                    <div className="creator-info">
                      <Avatar26/>
                      <div className="creator-meta">
                        <div className="creator-label">CREATOR</div>
                        <div className="creator-name"><NavLink to="/profile">Dexter Stark</NavLink></div>
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
                      <div className="creator-name"><NavLink to="/productv1">Crimson Ray</NavLink></div>
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
                    <NavLink to="/">
                      <Facebook/>
                    </NavLink>
                    <NavLink to="/">
                      <Twitter/>
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