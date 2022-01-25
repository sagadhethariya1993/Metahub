import { Files, ThreeDots } from 'react-bootstrap-icons';
import { Avatar64 } from '../Avatars';
import { SocialLinks } from '../SocialLinkBlocks/SocialLinks';
import './Profile.css'
import { NavLink } from 'react-router-dom';


export const MobProfileHeader=()=>{



    return(
        <div className="profile-header-mobile">
                <div className="cover-image"><img src={require("../../../assets/Images/content/profile/profile-cover-1.png")} alt=""/></div>
                <div className="about-author-section container">
                    <div className="profile-header-user-profile">
                        <Avatar64/>
                        <div className="profile-author-info">
                            <h5 className="author-name gradient-text"><NavLink to="/profile">Dexter Stark</NavLink></h5>
                            <div className="author-meta">@DexterStark</div>
                            <div className="download-file">
                                Ox465d53...d9c6
                                <Files/>
                            </div>
                        </div>
                    </div>
                    <div className="follow-container">
                        <div className="more-link-wrapper">
                            <div className="more-link"><NavLink to="/">
                                    <ThreeDots/>
                                </NavLink>
                            </div>
                        </div>
                        <div className="follow-box">
                            <button className="btn btn-wide btn-dark waves-effect waves-button waves-float waves-light">Follow!</button>
                        </div>
                    </div>
                </div>
              <SocialLinks/>
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
                        <div className="projects-number">
                            <div className="number">135</div>
                            <div className="label">Created</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}