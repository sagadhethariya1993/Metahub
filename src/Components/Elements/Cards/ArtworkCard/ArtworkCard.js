import './ArtworkCard.css'
import { Heart, ThreeDots } from 'react-bootstrap-icons';
import { Avatar42 } from '../../Avatars';
import { SocialLinks } from '../../SocialLinkBlocks/SocialLinks';
import { NavLink } from 'react-router-dom';

export const ArtworkCard=()=>{

    return(
        <div className="artwork-item">
            <div className="artwork-media">
                <NavLink to="/productv3"><img src={require("../../../../assets/Images/content/artworks/artwork-1.png")} alt=""/></NavLink>
            </div>
            <div className="artwork-details">
                <h3 className="artwork-title">Social Blockz</h3>
                <div className="avatar-block">
                    <Avatar42/>
                    <div className="avatar-meta">
                        <div className="avatar-title gradient-text"><NavLink to="/profile">Jackie Jones</NavLink></div>
                        <div className="avatar-meta">@JackieJ</div>
                    </div>
                </div>
                <div className="product-meta-section">
                    <div className="product-meta-item">
                        <div className="label">Current bid</div>
                        <div className="value">2.31 ETH</div>
                        <div className="caption">125.230 U$D</div>
                    </div>
                    <div className="product-meta-item">
                        <div className="label">AUCTION ENDING IN</div>
                        <div className="countdown">
                            <div className="js-countdown" data-timer="104400" data-labels="Days , Hours , Mins , Secs"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item"><span className="countdown__value countdown__value--0 js-countdown__value--0">1</span><span className="countdown__label">Days</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">04</span><span className="countdown__label">Hours</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">45</span><span className="countdown__label">Mins</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">08</span><span className="countdown__label">Secs</span></span></div></div>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <p>Social Blockz was made in a sleek and modern 3D style with a wide range of
                        elements and techniques that show what can be achieved with the newest
                        technologies...
                </p></div>
                <div className="bidding-section">
                    <div className="place-bid"><button className="btn btn-wide btn-dark waves-effect waves-button waves-float waves-light">Place a
                            Bid!</button></div>
                    <div className="product-fav-counter gradient-background">
                        <Heart/>
                        <span className="count">105</span>
                    </div>
                    <div className="more-link"><NavLink to="/">
                            <ThreeDots/>
                        </NavLink>
                    </div>
                    <div className="social-share-box">
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </div>
    );
}