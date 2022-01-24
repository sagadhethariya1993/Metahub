import './NotificationDropDown.css';
import { Chat } from 'react-bootstrap-icons';


export const NotificationDropDown=()=>{



    return(
        <div id="notifications-dropdown" className="cryptoki-notif-target">
        <div className="title"> Notifications <span className="colored">10</span></div>
        <div className="notifications-wrapper cryptoki-scrollbar">
          <div className="notification">
            <div className="thumb-box">
              <img src={require("../../../../assets/Images/content/notifications/notif-thumb-1.png")} width="50" height="50" alt="" loading="lazy"/>
              <span className="bid-type"><Chat/></span>
            </div>
            <div className="notification-info">
              <div className="message">
                <a href="08-profile-page.html" className="bold">@JackieJ</a> just commented on <a href="05-product-page.html" className="bold">Cryptoki NFT
                  and Digital Market PSD Template</a>
              </div>
              <div className="publish-date">2 minutes ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="thumb-box">
            <img src={require("../../../../assets/Images/content/notifications/notif-thumb-1.png")} width="50" height="50" alt="" loading="lazy"/>
              
              <span className="purchase-type">
              <Chat/>
              </span>
            </div>
            <div className="notification-info">
              <div className="message">
                <a href="08-profile-page.html" className="bold">@CrimsonRay</a> just purchased<a href="06-product-page-v2.html" className="bold"> Cryptoki NFT
                  and Digital Market PSD Template</a>
              </div>
              <div className="publish-date">10 minutes ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="thumb-box">
              <img src={require("../../../../assets/Images/content/notifications/notif-thumb-1.png")} width="50" height="50" alt="" loading="lazy"/>
              <span className="like-type"><Chat/></span>
            </div>
            <div className="notification-info">
              <div className="message">
                <a href="08-profile-page.html" className="bold">@NoirArtks</a> just liked<a href="07-product-page-v3.html" className="bold">Twitter Gaming
                  Headers Pack 04</a>
              </div>
              <div className="publish-date">37 minutes ago</div>
            </div>
          </div>
          <div className="notification">
            <div className="thumb-box">
              <img src={require("../../../../assets/Images/content/notifications/notif-thumb-1.png")} width="50" height="50" alt="" loading="lazy"/>
              <span className="review-type">
                <Chat/>
              </span>
            </div>
            <div className="notification-info">
              <div className="message"><a href="08-profile-page.html" className="bold">@CrimsonRay</a> just reviewed
                <a href="05-product-page.html" className="bold">Cryptoki NFT and Digital Market PSD Template</a>
              </div>
              <div className="publish-date">49 minutes ago</div>
            </div>
          </div>
        </div>
        <a href="25-notifications.html" className="btn-small-fullwidth btn-dark btn-square waves-effect waves-button waves-float waves-light">View all
          Notifications</a>
      </div>
    );
}