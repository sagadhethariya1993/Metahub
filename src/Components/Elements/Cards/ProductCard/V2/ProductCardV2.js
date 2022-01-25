import { Facebook, Heart, Instagram, Twitter } from "react-bootstrap-icons";
import { Timer } from "../../../../UI/Timer/Timer";
import { Avatar26 } from "../../../Avatars";
import { NavLink } from 'react-router-dom';
import './ProductCardV2.css'



export const ProductCardV2=()=>{




    return(
        <div className="featured-item v2">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="featured-item-image">
                    <NavLink to="/productv1">
                      <img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/>
                    </NavLink>
                </div>
                <div className="featured-item-info">
                        <Timer/>
                  <div className="title"><NavLink to="/productv1">The Molten Heart</NavLink></div>
                  <div className="item-meta">
                      
                      <Avatar26/>
                    <div className="featured-item-pricebox">
                      <div className="price-caption">Current BID</div>
                      <div className="price">4.07 ETH</div>
                    </div>
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
                <div className="fav-counter">
                    <Heart/>
                    <span className="count">22</span>
                </div>
              </div>
            </div>
          </div>
    );
}