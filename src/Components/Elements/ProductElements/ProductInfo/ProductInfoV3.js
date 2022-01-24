import { Dot } from 'react-bootstrap-icons';
import { Avatar42 } from '../../Avatars';
import './ProductInfo.css'




export const ProductInfoV3=()=>{



    return(
        <div className="product-info">
            <div className="small-title">Creator</div>
            <div className="product-author avatar-block">
              <Avatar42/>
              <div className="avatar-meta">
                <div className="avatar-title"><span className="gradient-text"><a href="08-profile-page.html">Dexter
                      Stark</a></span></div>
                <div className="avatar-meta">@DexterStark</div>
              </div>
            </div>
            <div className="product-description">
              <div className="small-title">Description</div>
              <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of
                my works are inspired by nature and biomechanic themes.</p>
              <p>What does it mean? Biomechanics is the study of the structure, function and motion of the
                mechanical aspects of biological systems, at any level from whole organisms to organs,
                cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of
                biophysics.</p>
            </div>
            <div className="product-description">
              <div className="small-title">Additional Details</div>
              <ul className="details-list">
                <li><Dot /><span className="detail-label">Size</span><span className="bold">5000 x 3500px (37MB)</span></li>
                <li><Dot /><span className="detail-label">Formats</span><span className="bold">MP4, JPEG and PNG</span></li>
              </ul>
            </div>
          </div>
    );
}