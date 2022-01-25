import './MobPanel.css'
import {X} from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';
export const MobPanel=({onClick, open})=>{



    return(
        <div className={"mobile-nav-panel "+ open}>
            <div className="mobile-nav-header">
              <div className="mobile-menu-logo logo"><NavLink to="/">
                  <img src="svg/cryptoki-logo.svg" alt=""/></NavLink>
              </div>
                <div className="close-icon" onClick={()=>onClick()}>
                    <X/>
                </div>
            </div>
            <div className="mobile-menu-wrapper">
              <ul className="mobile-menu">
                <li className="menu-item"><NavLink className="menu-link" to="/">Home</NavLink></li>
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/explore">Explore
                    <span className="indicator"></span>
                  </NavLink>
                  <ul className="submenu">
                    <li className="menu-item"><NavLink className="menu-link" to="/explore">Explore</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/explorev2">Explore v2</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/itemversions">Item versions</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item"><NavLink className="menu-link" to="/exploreCreators">Creators</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/explorecollectors">Collectors</NavLink></li>
                <li className="menu-item"><NavLink className="menu-link" to="/spotlight">Spotlight</NavLink></li>
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/">Product<span className="indicator"></span></NavLink>
                  <ul className="submenu">
                    <li className="menu-item"><NavLink className="menu-link" to="/productv1">Product v1</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/productv2">Product v2</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/productv3">Product v3</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-megamenu menu-item-has-children"><NavLink className="menu-link" to="/">All
                    pages<span className="indicator"></span><span className="highlighted-item gradient-background">NEW</span></NavLink>
                  <div className="megamenu">
                    <div className="megamenu-wrapper">
                      <div className="megamenu-column">
                        <div className="megamenu-title">Main Pages</div>
                        <div>
                          <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/" className="menu-link">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/explore" className="menu-link">Explore</NavLink></li>
                            <li className="menu-item"><NavLink to="/explorev2" className="menu-link">Explore v2</NavLink></li>
                            <li className="menu-item"><NavLink to="/itemversions" className="menu-link">Item versions</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="/spotlight" className="menu-link">Spotlight</NavLink></li>
                            <li className="menu-item"><NavLink to="/productv1" className="menu-link">Product page</NavLink></li>
                            <li className="menu-item"><NavLink to="/productv2" className="menu-link">Product page
                                v2</NavLink></li>
                          </ul>
                          <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/productv3" className="menu-link">Product page
                                v3</NavLink></li>
                            <li className="menu-item"><NavLink to="/blog" className="menu-link">Blog grid</NavLink></li>
                            <li className="menu-item"><NavLink to="/classicblog" className="menu-link">Blog classic</NavLink></li>
                            <li className="menu-item"><NavLink to="/blogpostcentered" className="menu-link">Blog
                                postcentered</NavLink></li>
                            <li className="menu-item"><NavLink to="/blogpostslidebar" className="menu-link">Blog post
                                sidebar</NavLink></li>
                            <li className="menu-item"><NavLink to="/faq" className="menu-link">FAQ</NavLink></li>
                            <li className="menu-item"><NavLink to="/coantact" className="menu-link">Contact</NavLink></li>

                          </ul>
                        </div>
                      </div>
                      <div className="megamenu-column">
                        <div className="megamenu-title">User pages</div>
                        <div>
                          <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/profile" className="menu-link">Profile page</NavLink></li>
                            <li className="menu-item"><NavLink to="09-profile-page-about.html" className="menu-link">Profile page
                                about</NavLink></li>
                            <li className="menu-item"><NavLink to="23-profile-info.html" className="menu-link">Profile info</NavLink></li>
                            <li className="menu-item"><NavLink to="26-upload-artwork.html" className="menu-link">Upload artwork</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="25-notifications.html" className="menu-link">Notifications</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="27-shopping-cart.html" className="menu-link">Shopping cart</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="28-checkout.html" className="menu-link">Checkout</NavLink></li>
                          </ul>
                          <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="17-activity.html" className="menu-link">Activity</NavLink></li>
                            <li className="menu-item"><NavLink to="/exploreCreators" className="menu-link">Creators</NavLink></li>
                            <li className="menu-item"><NavLink to="/explorecollectors" className="menu-link">Collectors</NavLink></li>
                            <li className="menu-item"><NavLink to="24-become-a-creator.html" className="menu-link">Become a
                                creator</NavLink></li>
                            <li className="menu-item"><NavLink to="18-connect-a-wallet.html" className="menu-link">Connect a
                                wallet</NavLink></li>
                            <li className="menu-item"><NavLink to="21-login.html" className="menu-link">Login</NavLink></li>
                            <li className="menu-item"><NavLink to="22-register.html" className="menu-link">Register</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/">Blog<span className="indicator"></span></NavLink>
                  <ul className="submenu">
                    <li className="menu-item"><NavLink className="menu-link" to="/blog">Blog grid</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/classicblog">Blog classic</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/blogpostcentered">Blog post centered</NavLink>
                    </li>
                    <li className="menu-item"><NavLink className="menu-link" to="/blogpostslidebar">Blog post sidebar</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item"><NavLink className="menu-link" to="/profile">My Collection<span className="count">
                      12</span></NavLink></li>
              </ul>
            </div>
            <div className="mobile-nav-footer">
              <ul className="social-icons-list">
                <li className="social-icon"><NavLink to="/"></NavLink></li>
                <li className="social-icon"><NavLink to="/"></NavLink></li>
                <li className="social-icon"><NavLink to="/"></NavLink></li>
                <li className="social-icon"><NavLink to="/"></NavLink></li>
                <li className="social-icon"><NavLink to="/"></NavLink></li>
              </ul>
            </div>
          </div>
    );
}