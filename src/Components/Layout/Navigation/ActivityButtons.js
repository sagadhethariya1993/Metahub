import { CartDropDown } from "../../UI/DropDowns/CartDropDown/CartDropDown";
import { NotificationDropDown } from "../../UI/DropDowns/NotificationDropDown/NotificationDropDown";
import { useState } from "react";
import {Bag,Heart,Bell} from 'react-bootstrap-icons'
import './ActivityButtons.css'

export const ActivityButtons=()=>{
    const [activeDropDown,SetActiveDropDown] =useState('');


    const changeActive =(active)=>{
        if(activeDropDown=== active){
            SetActiveDropDown('');
        }else{
            SetActiveDropDown(active);
        }

    }



    return(
        <div className="user-activity-buttons">
            <div className="cart-button-cont">
              <button className="cart-button cryptoki-notif-bttn" onClick={()=>changeActive('cart')}
               data-target="cart-dropdown">
                <span className="counter">3</span>
                <Bag/>
              </button>
              { activeDropDown==='cart'? <CartDropDown/>:null}
            </div>
              <div className="favourites-button-cont">
                <button className="favourites-button cryptoki-notif-bttn" data-target="">
                <Heart/>
              </button>
            </div>
            <div className="notifications-button-cont">
              <button className="notifications-button cryptoki-notif-bttn" onClick={()=>changeActive('notice')}
               data-target="notifications-dropdown">
                <span className="counter">10</span>
                <Bell/>
              </button>
              { activeDropDown==='notice'? <NotificationDropDown/>:null}
            </div>
            
        </div>
    );
}