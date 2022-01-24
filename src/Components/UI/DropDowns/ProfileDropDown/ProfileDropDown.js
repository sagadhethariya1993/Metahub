import './ProfileDropDown.css'
import {Avatar26} from '../../../Elements/Avatars'
export const ProfileDropDown=({changeMode,Mode})=>{


    return(
        <div id="profile-dropdown" className="cryptoki-notif-target">
              <div className="profile-dropdown-header profile-cover-image"></div>
              <div className="profile-dropdown-body">
                <div className="profile-heading">
                  <Avatar26/>
                  <div className="profile-link">
                    <a className="btn btn-small gradient-background" href="08-profile-page.html">My Profile</a>
                  </div>
                </div>
                <ul className="profile-menu">
                  <li className="profile">
                    <a href="23-profile-info.html">Profile Info</a>
                  </li>
                  <li className="account">
                    <a href="29-account-settings.html">Account Settings</a>
                  </li>
                  <li className="notification">
                    <a href="30-notification-settings.html">Notification Settings</a>
                  </li>
                  <li className="artwork">
                    <a href="26-upload-artwork.html">Create Artwork</a>
                  </li>
                  <li className="wallet">
                    <a href="18-connect-a-wallet.html">Wallet info</a>
                  </li>
                  <li className="verification">
                    <a href="31-get-verified.html">Get Verified</a>
                  </li>
                  <li className="logout">
                    <a href="!#">Log Out</a>
                  </li>
                </ul>
              </div>
              <div className="profile-dropdown-footer">
                <div className="mode-toggle">
                  <div className="mode-title"><span></span>Night-mode</div>
                  <label className="toggle-control">
                    <span className={"control "+(Mode?'dark':'')}  onClick={()=>changeMode()}></span>
                  </label>
                </div>
              </div>
            </div>
    );
}