import './CreatorDetailCard.css'
import {Avatar64} from '../../../Avatars'
import { Facebook, Instagram, Link, ThreeDots, Twitch, Twitter } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';


export const CreatorDetailCard=()=>{


    return(
        <div className="creator-item">
          <div className="creator-cover">
            <img src={require("../.././../../../assets/Images/content/creators/creator-cover-1.png")} alt=""/>
          </div>
          <div className="creator-wrapper">
            <div className="creator-info-wrapper">
              <div className="creator-info">
                <Avatar64/>
                <div className="title"><NavLink to="/profile">Dexter Stark</NavLink></div>
                <div className="item-meta"><span className="gradient-text">@DexterStark</span></div>
              </div>
              <div className="follow-me">
                <button className="btn btn-small btn-dark waves-effect waves-button waves-float waves-light">Follow!</button>
              </div>
            </div>
            <ul className="social-icons-list">
              <li className="social-icon icon-border"><NavLink to="/"><Link/></NavLink></li>
              <li className="social-icon icon-border"><NavLink to="/"><Facebook/></NavLink></li>
              <li className="social-icon icon-border"><NavLink to="/"><Twitter/></NavLink></li>
              <li className="social-icon icon-border"><NavLink to="/"><Instagram/></NavLink></li>
              <li className="social-icon icon-border"><NavLink to="/"><Twitch/></NavLink></li>
            </ul>
            <div className="about-creator">
              <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of
                my...
              </p>
            </div>
            <div className="projects-previews">
              <div className="preview-box"><NavLink to="/productv3"><img src={require("../../../../../assets/Images/content/previews/project-thumb-1.png")} alt=""/></NavLink></div>
              <div className="preview-box"><NavLink to="/productv3"><img src={require("../../../../../assets/Images/content/previews/project-thumb-2.png")} alt=""/></NavLink></div>
              <div className="preview-box"><NavLink to="/productv3"><img src={require("../../../../../assets/Images/content/previews/project-thumb-21.png")} alt=""/></NavLink></div>
              <div className="preview-box more-projects"><NavLink to="/profile">
                  <ThreeDots/>
                  </NavLink></div>
            </div>
          </div>
          <div className="creator-stats">
            <div className="stats-item">
              <div className="label">Followers</div>
              <div className="number">903</div>
            </div>
            <div className="stats-item">
              <div className="label">Following</div>
              <div className="number">56</div>
            </div>
            <div className="stats-item">
              <div className="label">Created</div>
              <div className="number">135</div>
            </div>
          </div>
        </div>
    );
}