import './NotificationDropDown.css';
import { Chat } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/profile" className="bold">@JackieJ</NavLink> just commented on <NavLink to="/productv1" className="bold">Cryptoki NFT
                  and Digital Market PSD Template</NavLink>
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
                <NavLink to="/profile" className="bold">@CrimsonRay</NavLink> just purchased<NavLink to="/productv2" className="bold"> Cryptoki NFT
                  and Digital Market PSD Template</NavLink>
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
                <NavLink to="/profile" className="bold">@NoirArtks</NavLink> just liked<NavLink to="/productv3" className="bold">Twitter Gaming
                  Headers Pack 04</NavLink>
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
              <div className="message"><NavLink to="/profile" className="bold">@CrimsonRay</NavLink> just reviewed
                <NavLink to="/productv1" className="bold">Cryptoki NFT and Digital Market PSD Template</NavLink>
              </div>
              <div className="publish-date">49 minutes ago</div>
            </div>
          </div>
        </div>
        <NavLink to="25-notifications.html" className="btn-small-fullwidth btn-dark btn-square waves-effect waves-button waves-float waves-light">View all
          Notifications</NavLink>
      </div>
    );
}