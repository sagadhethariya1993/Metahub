import { Fullscreen } from "react-bootstrap-icons";
import './ProductMedia.css'
import { NavLink } from 'react-router-dom';


export const ProductMedia=()=>{


    return(
        <div className="product-media">
          <div className="product-img">
            <NavLink to="/" className="expand-icon" data-fslightbox="lightbox" >
              <Fullscreen/>
            </NavLink>
            <img src={require("../../../../assets/Images/content/product-img/product-1-large.png")} width="1742" height="980" alt=""/>
          </div>
        </div>
    );
}