import './CartDropDown.css'


export const CartDropDown=()=>{


    return(
        <div id="cart-dropdown" className="cryptoki-notif-target">
                <div className="title">
                  Your Cart <span className="colored">3</span>
                </div>
                <div className="cart-wrapper">
                  <div className="cart-product">
                    <div className="thumb-box">
                      <a href="05-product-page.html">
                        <img src="img/content/notifications/notif-thumb-1.png" width="50" height="50" alt="UI templates" loading="lazy"/>
                      </a>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title">
                          <a href="05-product-page.html">Cryptoki NFT and Digital Market PSD
                            Template</a>
                        </div>
                        <div className="product-price">$12.00</div>
                      </div>
                      <div className="product-type ui-templates">UI templates</div>
                    </div>
                  </div>
                  <div className="cart-product">
                    <div className="thumb-box">
                      <a href="06-product-page-v2.html"><img src="img/content/notifications/notif-thumb-2.png" width="50" height="50" alt="Social graphics" loading="lazy"/></a>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title"><a href="06-product-page-v2.html">Twitter Gaming Headers Pack 04</a>
                        </div>
                        <div className="product-price">$40.00</div>
                      </div>
                      <div className="product-type social-graphics">Social graphics</div>
                    </div>
                  </div>
                  <div className="cart-product">
                    <div className="thumb-box">
                      <a href="07-product-page-v3.html"><img src="img/content/notifications/notif-thumb-3.png" width="50" height="50" alt="Coded templates" loading="lazy"/></a>
                    </div>
                    <div className="purchase-info">
                      <div className="product-info">
                        <div className="product-title"><a href="07-product-page-v3.html">Olympus WP - Social Networking
                            Theme</a></div>
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
                  <a href="27-shopping-cart.html" className="btn-small gradient-background btn-square">Go to Cart</a>
                  <a href="28-checkout.html" className="btn-small btn-dark btn-square waves-effect waves-button waves-float waves-light">Checkout</a>
                </div>
              </div>
    );
}