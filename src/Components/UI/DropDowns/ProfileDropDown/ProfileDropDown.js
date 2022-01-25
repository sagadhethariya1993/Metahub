import './ProfileDropDown.css'
import {Avatar26} from '../../../Elements/Avatars'
import { NavLink } from 'react-router-dom';
export const ProfileDropDown=({changeMode,Mode})=>{


    return(
        <div id="profile-dropdown" className="cryptoki-notif-target">
              <div className="profile-dropdown-header profile-cover-image"></div>
              <div className="profile-dropdown-body">
                <div className="profile-heading">
                  <Avatar26/>
                  <div className="profile-link">
                    <NavLink className="btn btn-small gradient-background" to="/profile">My Profile</NavLink>
                  </div>
                </div>
                <ul className="profile-menu">
                  <li className="profile">
                    <NavLink to="23-profile-info.html">Profile Info</NavLink>
                  </li>
                  <li className="account">
                    <NavLink to="29-account-settings.html">Account Settings</NavLink>
                  </li>
                  <li className="notification">
                    <NavLink to="30-notification-settings.html">Notification Settings</NavLink>
                  </li>
                  <li className="artwork">
                    <NavLink to="26-upload-artwork.html">Create Artwork</NavLink>
                  </li>
                  <li className="wallet">
                    <NavLink to="18-connect-a-wallet.html">Wallet info</NavLink>
                  </li>
                  <li className="verification">
                    <NavLink to="31-get-verified.html">Get Verified</NavLink>
                  </li>
                  <li className="logout">
                    <NavLink to="!#">Log Out</NavLink>
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