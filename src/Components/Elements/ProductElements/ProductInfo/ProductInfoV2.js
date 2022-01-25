import { Facebook, Heart, Instagram, Link, ThreeDots, Twitter } from 'react-bootstrap-icons';
import { Tabs } from '../../../UI';
import { Avatar42 } from '../../Avatars';
import './ProductInfo.css'
import { NavLink } from 'react-router-dom';

export const ProductInfoV2=()=>{



    return(
        <div className='product-info'>
            <div className="product-info-wrapper">
                <div className="page-title-section">
                <h1>Breathing Nature</h1>
                </div>
                <div className="product-author avatar-block">
                <Avatar42/>
                <div className="avatar-meta">
                    <div className="avatar-title">
                        <span className="gradient-text">
                            <NavLink to="/profile">Dexter Stark</NavLink>
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
                <div className="place-bid"><button className="btn btn-wide btn-dark waves-effect waves-button waves-float waves-light">Place a Bid!</button></div>
               
                <div className="bidding-section">
                 <div className="product-fav-counter">
                    <Heart/><span className="count">105</span>
                </div>
                <div className="more-link"><NavLink to="/">
                    <ThreeDots/>
                    </NavLink>
                </div>
                <div className="social-share-box">
                    <div className="share-icons">
                    <NavLink to="/">
                        <Link/>
                    </NavLink>
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
                <Tabs/>
                
            </div>
        </div>
    );
}