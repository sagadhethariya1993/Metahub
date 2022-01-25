
import './DeskBottomBar.css'
import {Facebook,Twitter,Instagram} from 'react-bootstrap-icons'
import down from '../../../../assets/svg/arrow-down.svg';
import { NavLink } from 'react-router-dom';

export const DeskBottomBar=()=>{


    return(
        <nav className="border-bottom" data-visible="false">
            <div className="navigation-wrapper headercontainer flex-space-between align-items-center">
                <ul className="navigation-menu">
                <li className="menu-item"><NavLink className="menu-link" to="/">Home</NavLink></li>
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/">Explore
                    <span className="indicator"><img src={down} alt=""/></span>
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
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/">Product<span className="indicator"><img src={down} alt=""/></span></NavLink>
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
                    pages<span className="indicator"><img src={down} alt=""/></span></NavLink><span className="highlighted-item gradient-background">NEW</span>
                    <div className="megamenu">
                    <div className="megamenu-wrapper">
                        <div className="megamenu-column">
                        <div className="megamenu-title">Main Pages</div>
                        <div className="flex-space-between">
                            <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/" className="menu-link">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/explore" className="menu-link">Explore</NavLink></li>
                            <li className="menu-item"><NavLink to="/explorev2" className="menu-link">Explore v2</NavLink></li>
                            <li className="menu-item"><NavLink to="/itemversions" className="menu-link">Item versions</NavLink></li>
                            <li className="menu-item"><NavLink to="/spotlight" className="menu-link">Spotlight</NavLink></li>
                            <li className="menu-item"><NavLink to="/productv1" className="menu-link">Product page</NavLink></li>
                            <li className="menu-item"><NavLink to="/productv2" className="menu-link">Product page v2</NavLink></li>
                            </ul>
                            <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/productv3" className="menu-link">Product page v3</NavLink></li>
                            <li className="menu-item"><NavLink to="/blog" className="menu-link">Blog grid</NavLink></li>
                            <li className="menu-item"><NavLink to="/classicblog" className="menu-link">Blog classic</NavLink></li>
                            <li className="menu-item"><NavLink to="/blogpostcentered" className="menu-link">Blog postcentered</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="/blogpostslidebar" className="menu-link">Blog post sidebar</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="/faq" className="menu-link">FAQ</NavLink></li>
                            <li className="menu-item"><NavLink to="/coantact" className="menu-link">Contact</NavLink></li>
                            </ul>
                        </div>
                        </div>
                        <div className="megamenu-column">
                        <div className="megamenu-title">User pages</div>
                        <div className="flex-space-between">
                            <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="/profile" className="menu-link">Profile page</NavLink></li>
                            <li className="menu-item"><NavLink to="09-profile-page-about.html" className="menu-link">Profile page
                                about</NavLink></li>
                            <li className="menu-item"><NavLink to="23-profile-info.html" className="menu-link">Profile info</NavLink></li>
                            <li className="menu-item"><NavLink to="26-upload-artwork.html" className="menu-link">Upload artwork</NavLink></li>
                            <li className="menu-item"><NavLink to="25-notifications.html" className="menu-link">Notifications</NavLink></li>
                            <li className="menu-item"><NavLink to="27-shopping-cart.html" className="menu-link">Shopping cart</NavLink></li>
                            <li className="menu-item"><NavLink to="28-checkout.html" className="menu-link">Checkout</NavLink></li>
                            </ul>
                            <ul className="submenu-column">
                            <li className="menu-item"><NavLink to="17-activity.html" className="menu-link">Activity</NavLink></li>
                            <li className="menu-item"><NavLink to="/exploreCreators" className="menu-link">Creators</NavLink></li>
                            <li className="menu-item"><NavLink to="/explorecollectors" className="menu-link">Collectors</NavLink></li>
                            <li className="menu-item"><NavLink to="24-become-a-creator.html" className="menu-link">Become a creator</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="18-connect-a-wallet.html" className="menu-link">Connect a wallet</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to="21-login.html" className="menu-link">Login</NavLink></li>
                            <li className="menu-item"><NavLink to="22-register.html" className="menu-link">Register</NavLink></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li className="menu-item menu-item-has-children"><NavLink className="menu-link" to="/">Blog<span className="indicator"><img src={down} alt=""/></span></NavLink>
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
                <li className="menu-item hidden-menu"><NavLink className="menu-link" to="/"></NavLink>
                    <ul className="hidden-menu-dropdown submenu">
                    <li className="menu-item"><NavLink to="/faq" className="menu-link">Frequently Asked Questions</NavLink></li>
                    <li className="menu-item"><NavLink to="24-become-a-creator.html" className="menu-link">Become a Creator</NavLink></li>
                    <li className="menu-item"><NavLink to="/coantact" className="menu-link">Contact Us</NavLink></li>
                    <li className="menu-item"><NavLink to="21-login.html" className="menu-link">Login</NavLink></li>
                    <li className="menu-item"><NavLink to="22-register.html" className="menu-link">Register</NavLink></li>
                    </ul>
                </li>
                </ul>
                <ul className="social-icons-list">
                <li className="social-icon"><NavLink to="/"><Facebook/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Instagram/></NavLink></li>
                <li className="social-icon"><NavLink to="/"><Twitter/></NavLink></li>
                </ul>
            </div>
        </nav>
    );
}