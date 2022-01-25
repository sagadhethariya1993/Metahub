import './CartDropDown.css'
import { NavLink } from 'react-router-dom';

export const CartDropDown=()=>{


    return(
        <div id="cart-dropdown" className="cryptoki-notif-target">
                <div className="title">
                  Your Cart <span className="colored">3</span>
                </div>
                <div className="cart-wrapper">
                  <div className="cart-product">
                    <div className="thumb-box">
                      <NavLink to="/productv1">
                        <img src="img/content/notifications/notif-thumb-1.png" width="50" height="50" alt="UI templates" loading="lazy"/>
                      </NavLink>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title">
                          <NavLink to="/productv1">Cryptoki NFT and Digital Market PSD
                            Template</NavLink>
                        </div>
                        <div className="product-price">$12.00</div>
                      </div>
                      <div className="product-type ui-templates">UI templates</div>
                    </div>
                  </div>
                  <div className="cart-product">
                    <div className="thumb-box">
                      <NavLink to="/productv2"><img src="img/content/notifications/notif-thumb-2.png" width="50" height="50" alt="Social graphics" loading="lazy"/></NavLink>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title"><NavLink to="/productv2">Twitter Gaming Headers Pack 04</NavLink>
                        </div>
                        <div className="product-price">$40.00</div>
                      </div>
                      <div className="product-type social-graphics">Social graphics</div>
                    </div>
                  </div>
                  <div className="cart-product">
                    <div className="thumb-box">
                      <NavLink to="/productv3"><img src="img/content/notifications/notif-thumb-3.png" width="50" height="50" alt="Coded templates" loading="lazy"/></NavLink>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title"><NavLink to="/productv3">Olympus WP - Social Networking
                            Theme</NavLink></div>
                        <div className="product-price">$68.00</div>
                      </div>
                      <div className="product-type coded-templates">Coded templates</div>
                    </div>
                  </div>
                </div>

                <div className="total-price">
                  <div className="heading">Cart Total</div>
                  <div className="price">$120.00</div>
                </div>
                <div className="cart-buttons">
                  <NavLink to="27-shopping-cart.html" className="btn-small gradient-background btn-square">Go to Cart</NavLink>
                  <NavLink to="28-checkout.html" className="btn-small btn-dark btn-square waves-effect waves-button waves-float waves-light">Checkout</NavLink>
                </div>
              </div>
    );
}