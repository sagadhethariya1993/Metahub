import './FeaturedCreatorCard.css'
import { Facebook,Instagram,Twitter, Link, Twitch,ThreeDots } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import img from '../../../../assets/Images/Facebook.PNG'
import {Button} from '../../../UI'
import { ItemMeta } from '../../UserMeta/ItemMeta';


export const FeaturedCreatorCard=()=>{


    return(
        <div className="featured-creators-item">
            <img src={img} width="470" height="640" alt="" loading="lazy"/>
            <div className="featured-creators-wrapper">
              <div className="featured-creators-info-wrapper">
                <div className="featured-creators-info">
                  <div className="title h4"><NavLink to="/profile">Dexter Stark</NavLink></div>
                  <ItemMeta/>
                </div>
                <div className="follow-me gradient-border_white-bg">
                  <Button onClick={()=>{console.log("press")}}>Follow</Button>
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
                <p>I’m a graphic designer and illustrator from Mexico City. Since 2 years ago I specialize on big mural
                  pieces and street art that you can find in countries all around the world!</p>
              </div>
              <div className="creator-stats">
                <div className="stats-item">
                  <div className="number title">12.3K</div>
                  <div className="label">Followers</div>
                </div>
                <div className="stats-item">
                  <div className="number title">7.2K</div>
                  <div className="label">Following</div>
                </div>
                <div className="stats-item">
                  <div className="number title">135</div>
                  <div className="label">Created</div>
                </div>
                <div className="stats-item">
                  <div className="number title">9</div>
                  <div className="label">On Sale</div>
                </div>
              </div>
              <div className="projects-previews">
                <div className="preview-box">
                  <NavLink to="/productv1">
                    <img src={img} width="68" height="68" alt="" loading="lazy"/>
                  </NavLink>
                </div>
                <div className="preview-box">
                  <NavLink to="/productv2"><img src={img} height="66" width="66" alt="" loading="lazy" /></NavLink>
                </div>
                <div className="preview-box">
                  <NavLink to="/productv3"><img src={img} width="68" height="68" alt="" loading="lazy" /></NavLink>
                </div>
                <div className="preview-box">
                  <NavLink to="/productv1"><img src={img} height="50" width="50" alt="" loading="lazy" /></NavLink>
                </div>
                <div className="preview-box more-projects">
                  <NavLink to="/profile"><ThreeDots/></NavLink>
                </div>
              </div>
            </div>
          </div>
    );
}