import { Clock, Facebook, Heart, Instagram, Twitter } from "react-bootstrap-icons";
import { Timer } from "../../../../UI/Timer/Timer";
import { Avatar26 } from "../../../Avatars";

import './ProductCardV2.css'



export const ProductCardV2=()=>{




    return(
        <div className="featured-item v2">
            <div className="featured-item-wrapper">
              <div className="featured-item-content">
                <div className="featured-item-image">
                    <a href="05-product-page.html">
                      <img src={require("../../../../../assets/Images/content/items/featured-item-1.png")} alt=""/>
                    </a>
                </div>
                <div className="featured-item-info">
                        <Timer/>
                  <div className="title"><a href="05-product-page.html">The Molten Heart</a></div>
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
                <div className="fav-counter">
                    <Heart/>
                    <span className="count">22</span>
                </div>
              </div>
            </div>
          </div>
    );
}