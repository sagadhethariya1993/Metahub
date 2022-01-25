import { Discord, Facebook, Instagram, Twitch, Twitter } from 'react-bootstrap-icons';
import './Footer.css'
import { SubscribeWidget } from '../../UI';
import {Logo} from '../../Elements/Logos/Logo'
import { NavLink } from 'react-router-dom';

export const MainFooter=()=>{



    return(
        <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer-content flex-space-between">
          <div className="footer-column footer-column-large">
            <div className="footer-widget">
              <Logo />
              <div className="footer-text">
                <p>We are a huge marketplace dedicated to connecting great artists of all mediums with their fans and
                  unique token collectors!</p>
              </div>
              <ul className="social-icons-list">
                <li className="social-icon"><NavLink to="/"><Facebook/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Twitter/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Instagram/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Twitch/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Discord/></NavLink></li>
              </ul>
              <SubscribeWidget/>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Cryptoki Market</div>
              <div className="is-two-col-element">
                <ul className="footer-menu">
                  <li className="menu-item"><NavLink className="menu-link" to="/">Home</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="/explore">Explore</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="/exploreCreators">Creators</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="/explorecollectors">Collectors</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="/spotlight">Spotlight</NavLink></li>
                </ul>
                <ul className="footer-menu">
                  <li className="menu-item"><NavLink className="menu-link" to="/profile">Profile Page</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="/explorev2">Artwork Page</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="17-activity.html">Activity</NavLink></li>
                  <li className="menu-item"><NavLink className="menu-link" to="26-upload-artwork.html">Upload Art</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Explore</div>
              <ul className="footer-menu">
                <li className="menu-item"><NavLink className="menu-link" to="/explore">3D Artworks</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/explorev2">Motion Graphics</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/itemversions">Illustrations</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/explore">Photography</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/explorev2">Pop Culture</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Helpful Links</div>
              <ul className="footer-menu">
                <li className="menu-item"><NavLink className="menu-link" to="/classicblog">Our Blog</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="24-become-a-creator.html">Become a Creator</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/faq">FAQs</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="!#">About Us</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/coantact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex-space-between">
          <span className="copyright-text">
            Cryptoki 2021 - All Rights Reserved
          </span>
          <ul className="sub-footer-menu">
            <li className="menu-item"><NavLink className="menu-link" to="!#">Terms of Service</NavLink></li>
            <li className="menu-item"><NavLink className="menu-link" to="!#">Privacy</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
    );
}