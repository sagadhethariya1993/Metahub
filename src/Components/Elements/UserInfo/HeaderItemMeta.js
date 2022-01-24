import { useEffect, useState } from 'react';
import { ProfileDropDown } from '../../UI/DropDowns/ProfileDropDown/ProfileDropDown';
import './HeaderItemMeta.css'

import { Check } from 'react-bootstrap-icons';
import { Avatar42 } from '../Avatars';
import { UserMeta } from '../UserMeta/UserMeta';

export const HeaderItemMeta = ()=>{

  const [ActiveDrop, setActiveDrop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');

        }
    },[darkMode])
    return(
        <div className={"header-user-profile cryptoki-notif-bttn "+(ActiveDrop?"active":"")}>
            <UserMeta/>
            <Avatar42  onClick={()=>{setActiveDrop(!ActiveDrop)}} data-target="profile-dropdown"/>
            <div className="closing-icon">
              
            </div>
            <ProfileDropDown Mode={darkMode} changeMode={()=>setDarkMode(!darkMode)}/>
        </div>
    );
}