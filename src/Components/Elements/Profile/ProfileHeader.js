import { Files, ThreeDots } from 'react-bootstrap-icons';
import { Avatar152 } from '../Avatars';
import { SocialLinks } from '../SocialLinkBlocks/SocialLinks';
import './Profile.css'
import { NavLink } from 'react-router-dom';


export const ProfileHeader=()=>{



    return(
        <div className="profile-header-section">
                <div className="cover-image"><img src={require("../../../assets/Images/content/profile/profile-cover-1.png")} alt=""/></div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <Avatar152/>
                        <div className="follow-box">
                            <div className="more-link"><NavLink to="/">
                                    <ThreeDots/>
                                </NavLink>
                            </div>
                            <button className="btn btn-normal btn-dark waves-effect waves-button waves-float waves-light">Follow!</button>
                        </div>
                    </div>
                    <div className="author-primary-info">
                        <div className="activity-meta">
                            <div className="followers-number">
                                <div className="number">903</div>
                                <div className="label">Followers</div>
                            </div>
                            <div className="following-number">
                                <div className="number">56</div>
                                <div className="label">Following</div>
                            </div>
                            <div className="likes-number">
                                <div className="number">12K</div>
                                <div className="label">Likes Received</div>
                            </div>
                        </div>
                        <div className="profile-author-info">
                            <h3 className="author-name gradient-text"><NavLink to="/profile">Dexter Stark</NavLink></h3>
                            <div className="author-meta">@DexterStark</div>
                            <div className="download-file">
                                Ox465d53...d9c6
                                <Files/>
                            </div>
                        </div>
                        <div className="projects-meta">
                            <div className="projects-number">
                                <div className="number">135</div>
                                <div className="label">Created</div>
                            </div>
                            <div className="onsale-number">
                                <div className="number">12</div>
                                <div className="label">On Sale</div>
                            </div>
                            <div className="country">
                                <div className="flag"><img src={require("../../../assets/Images/content/profile/us-flag.png")} alt=""/></div>
                                <div className="label">United States</div>
                            </div>
                        </div>
                    </div>
                    <div className="author-description">
                        <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my
                            works are inspired by nature and biomechanic themes. What does it mean? Biomechanics is the
                            study...<span className="bold">Read More</span>
                        </p>
                        <SocialLinks/>
                    </div>

                </div>
            </div>
    );
}