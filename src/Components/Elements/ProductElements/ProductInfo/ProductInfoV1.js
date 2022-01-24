import { Facebook, Heart, Instagram, Link, ThreeDots, Twitter } from 'react-bootstrap-icons';
import { Tabs } from '../../../UI';
import { Avatar42 } from '../../Avatars';
import { ProductCardV2 } from '../../Cards';
import './ProductInfo.css'



export const ProductInfoV1=()=>{



    return(
      <div className='product-info'>
        <div className="product-info-wrapper">
            <div className="page-title-section">
              <h1>Breathing Nature</h1>
            </div>
            <div className="avatar-block">
              <Avatar42/>
              <div className="avatar-meta">
                <div className="avatar-title">
                    <span className="gradient-text">
                        <a href="08-profile-page.html">Dexter Stark</a>
                    </span>
                </div>
                <div className="avatar-meta">@DexterStark</div>
              </div>
            </div>
            <div className="product-meta-section">
              <div className="product-meta-item">
                <div className="label">Current bid</div>
                <div className="value">2.31 ETH</div>
                <div className="caption">125.230 U$D</div>
              </div>
              <div className="product-meta-item">
                <div className="label">Edition</div>
                <div className="value">01/40</div>
                <div className="caption">Tokens</div>
              </div>
              <div className="product-meta-item">
                <div className="label">AUCTION ENDING IN</div>
                <div className="countdown">
                  <div className="js-countdown" data-timer="104400" data-labels="Days , Hours , Mins , Secs"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item"><span className="countdown__value countdown__value--0 js-countdown__value--0">1</span><span className="countdown__label">Days</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">03</span><span className="countdown__label">Hours</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">10</span><span className="countdown__label">Mins</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">24</span><span className="countdown__label">Secs</span></span></div></div>
                </div>
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
            <div className="bidding-section">
              <div className="place-bid"><button className="btn btn-wide btn-dark waves-effect waves-button waves-float waves-light">Place a Bid!</button></div>
              <div className="product-fav-counter">
                  <Heart/><span className="count">105</span>
              </div>
              <div className="more-link"><a href="#">
                  <ThreeDots/>
                </a>
              </div>
              <div className="social-share-box">
                <div className="share-icons">
                  <a href="#">
                    <Link/>
                  </a>
                  <a href="#">
                    <Facebook/>
                  </a>
                  <a href="#">
                    <Twitter/>
                  </a>
                  <a href="">
                    <Instagram/>
                  </a>
                </div>
              </div>
            </div>
            <Tabs/>
            <div className="related-section">
              <div className="section-title-wrapper">
                <h3>Related Items</h3>
              </div>
              <div className="featured-box">
                  <ProductCardV2/>
                  <ProductCardV2/>
                  <ProductCardV2/>
                  <ProductCardV2/>
                  <ProductCardV2/>
              </div>
            </div>
        </div>
      </div>
    );
}