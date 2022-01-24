import { Discord, Facebook, Instagram, Twitch, Twitter } from 'react-bootstrap-icons';
import './Footer.css'
import { SubscribeWidget } from '../../UI/Widgets/FooterWidgets/SubscribeWidget';
import {Logo} from '../../Elements/Logos/Logo'


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
                <li className="social-icon"><a href="#"><Facebook/></a></li>
                <li className="social-icon"><a href="#"><Twitter/></a></li>
                <li className="social-icon"><a href="#"><Instagram/></a></li>
                <li className="social-icon"><a href="#"><Twitch/></a></li>
                <li className="social-icon"><a href="#"><Discord/></a></li>
              </ul>
              <SubscribeWidget/>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Cryptoki Market</div>
              <div className="is-two-col-element">
                <ul className="footer-menu">
                  <li className="menu-item"><a className="menu-link" href="01-index.html">Home</a></li>
                  <li className="menu-item"><a className="menu-link" href="02-explore.html">Explore</a></li>
                  <li className="menu-item"><a className="menu-link" href="10-creators.html">Creators</a></li>
                  <li className="menu-item"><a className="menu-link" href="11-collectors.html">Collectors</a></li>
                  <li className="menu-item"><a className="menu-link" href="16-spotlight.html">Spotlight</a></li>
                </ul>
                <ul className="footer-menu">
                  <li className="menu-item"><a className="menu-link" href="08-profile-page.html">Profile Page</a></li>
                  <li className="menu-item"><a className="menu-link" href="03-explore-v2.html">Artwork Page</a></li>
                  <li className="menu-item"><a className="menu-link" href="17-activity.html">Activity</a></li>
                  <li className="menu-item"><a className="menu-link" href="26-upload-artwork.html">Upload Art</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Explore</div>
              <ul className="footer-menu">
                <li className="menu-item"><a className="menu-link" href="02-explore.html">3D Artworks</a></li>
                <li className="menu-item"><a className="menu-link" href="03-explore-v2.html">Motion Graphics</a></li>
                <li className="menu-item"><a className="menu-link" href="04-item-versions.html">Illustrations</a></li>
                <li className="menu-item"><a className="menu-link" href="02-explore.html">Photography</a></li>
                <li className="menu-item"><a className="menu-link" href="03-explore-v2.html">Pop Culture</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-widget">
              <div className="widget-title">Helpful Links</div>
              <ul className="footer-menu">
                <li className="menu-item"><a className="menu-link" href="13-blog-classic.html">Our Blog</a></li>
                <li className="menu-item"><a className="menu-link" href="24-become-a-creator.html">Become a Creator</a></li>
                <li className="menu-item"><a className="menu-link" href="19-faq.html">FAQs</a></li>
                <li className="menu-item"><a className="menu-link" href="!#">About Us</a></li>
                <li className="menu-item"><a className="menu-link" href="20-contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex-space-between">
          <span className="copyright-text">
            Cryptoki 2021 - All Rights Reserved
          </span>
          <ul className="sub-footer-menu">
            <li className="menu-item"><a className="menu-link" href="!#">Terms of Service</a></li>
            <li className="menu-item"><a className="menu-link" href="!#">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    );
}