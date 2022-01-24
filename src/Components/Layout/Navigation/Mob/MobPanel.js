import './MobPanel.css'
import {X} from 'react-bootstrap-icons'

export const MobPanel=({onClick, open})=>{



    return(
        <div className={"mobile-nav-panel "+ open}>
            <div className="mobile-nav-header">
              <div className="mobile-menu-logo logo"><a href="01-index.html">
                  <img src="svg/cryptoki-logo.svg" alt=""/></a>
              </div>
                <div className="close-icon" onClick={()=>onClick()}>
                    <X/>
                </div>
            </div>
            <div className="mobile-menu-wrapper">
              <ul className="mobile-menu">
                <li className="menu-item"><a className="menu-link" href="01-index.html">Home</a></li>
                <li className="menu-item menu-item-has-children"><a className="menu-link" href="#">Explore
                    <span className="indicator"></span>
                  </a>
                  <ul className="submenu">
                    <li className="menu-item"><a className="menu-link" href="02-explore.html">Explore</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="03-explore-v2.html">Explore v2</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="04-item-versions.html">Item versions</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item"><a className="menu-link" href="10-creators.html">Creators</a></li>
                <li className="menu-item"><a className="menu-link" href="11-collectors.html">Collectors</a></li>
                <li className="menu-item"><a className="menu-link" href="16-spotlight.html">Spotlight</a></li>
                <li className="menu-item menu-item-has-children"><a className="menu-link" href="#">Product<span className="indicator"></span></a>
                  <ul className="submenu">
                    <li className="menu-item"><a className="menu-link" href="05-product-page.html">Product v1</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="06-product-page-v2.html">Product v2</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="07-product-page-v3.html">Product v3</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-megamenu menu-item-has-children"><a className="menu-link" href="#">All
                    pages<span className="indicator"></span><span className="highlighted-item gradient-background">NEW</span></a>
                  <div className="megamenu">
                    <div className="megamenu-wrapper">
                      <div className="megamenu-column">
                        <div className="megamenu-title">Main Pages</div>
                        <div>
                          <ul className="submenu-column">
                            <li className="menu-item"><a href="01-index.html" className="menu-link">Home</a></li>
                            <li className="menu-item"><a href="02-explore.html" className="menu-link">Explore</a></li>
                            <li className="menu-item"><a href="03-explore-v2.html" className="menu-link">Explore v2</a></li>
                            <li className="menu-item"><a href="04-item-versions.html" className="menu-link">Item versions</a>
                            </li>
                            <li className="menu-item"><a href="16-spotlight.html" className="menu-link">Spotlight</a></li>
                            <li className="menu-item"><a href="05-product-page.html" className="menu-link">Product page</a></li>
                            <li className="menu-item"><a href="06-product-page-v2.html" className="menu-link">Product page
                                v2</a></li>
                          </ul>
                          <ul className="submenu-column">
                            <li className="menu-item"><a href="07-product-page-v3.html" className="menu-link">Product page
                                v3</a></li>
                            <li className="menu-item"><a href="12-blog-grid.html" className="menu-link">Blog grid</a></li>
                            <li className="menu-item"><a href="13-blog-classic.html" className="menu-link">Blog classic</a></li>
                            <li className="menu-item"><a href="14-blog-post-centered.html" className="menu-link">Blog
                                postcentered</a></li>
                            <li className="menu-item"><a href="15-blog-post-sidebar.html" className="menu-link">Blog post
                                sidebar</a></li>
                            <li className="menu-item"><a href="19-faq.html" className="menu-link">FAQ</a></li>
                            <li className="menu-item"><a href="20-contact.html" className="menu-link">Contact</a></li>

                          </ul>
                        </div>
                      </div>
                      <div className="megamenu-column">
                        <div className="megamenu-title">User pages</div>
                        <div>
                          <ul className="submenu-column">
                            <li className="menu-item"><a href="08-profile-page.html" className="menu-link">Profile page</a></li>
                            <li className="menu-item"><a href="09-profile-page-about.html" className="menu-link">Profile page
                                about</a></li>
                            <li className="menu-item"><a href="23-profile-info.html" className="menu-link">Profile info</a></li>
                            <li className="menu-item"><a href="26-upload-artwork.html" className="menu-link">Upload artwork</a>
                            </li>
                            <li className="menu-item"><a href="25-notifications.html" className="menu-link">Notifications</a>
                            </li>
                            <li className="menu-item"><a href="27-shopping-cart.html" className="menu-link">Shopping cart</a>
                            </li>
                            <li className="menu-item"><a href="28-checkout.html" className="menu-link">Checkout</a></li>
                          </ul>
                          <ul className="submenu-column">
                            <li className="menu-item"><a href="17-activity.html" className="menu-link">Activity</a></li>
                            <li className="menu-item"><a href="10-creators.html" className="menu-link">Creators</a></li>
                            <li className="menu-item"><a href="11-collectors.html" className="menu-link">Collectors</a></li>
                            <li className="menu-item"><a href="24-become-a-creator.html" className="menu-link">Become a
                                creator</a></li>
                            <li className="menu-item"><a href="18-connect-a-wallet.html" className="menu-link">Connect a
                                wallet</a></li>
                            <li className="menu-item"><a href="21-login.html" className="menu-link">Login</a></li>
                            <li className="menu-item"><a href="22-register.html" className="menu-link">Register</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children"><a className="menu-link" href="#">Blog<span className="indicator"></span></a>
                  <ul className="submenu">
                    <li className="menu-item"><a className="menu-link" href="12-blog-grid.html">Blog grid</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="13-blog-classic.html">Blog classic</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="14-blog-post-centered.html">Blog post centered</a>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="15-blog-post-sidebar.html">Blog post sidebar</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item"><a className="menu-link" href="08-profile-page.html">My Collection<span className="count">
                      12</span></a></li>
              </ul>
            </div>
            <div className="mobile-nav-footer">
              <ul className="social-icons-list">
                <li className="social-icon"><a href="#"></a></li>
                <li className="social-icon"><a href="#"></a></li>
                <li className="social-icon"><a href="#"></a></li>
                <li className="social-icon"><a href="#"></a></li>
                <li className="social-icon"><a href="#"></a></li>
              </ul>
            </div>
          </div>
    );
}