import {Ux} from '../../../Elements/HOC'
import { ActivityButtons } from '../ActivityButtons';
import './MobTopBar.css'
import { List } from 'react-bootstrap-icons';
import { MobPanel } from './MobPanel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const MobTopBar=()=>{
    const [pannelOpen, setPannelOpen] = useState('')

    return (
        <Ux>
        <div className="burger-icon">
            <List onClick={()=>setPannelOpen('open')}/>
          </div>
        
        <div className="logo ">
            <NavLink className="logo-link" to="/">
                <div className="logo-img"><img src="svg/cryptoki-logo.svg" alt="logo"/></div>
                <div className="logo-text">Cryptoki</div>
            </NavLink>
        </div>
        
        <ActivityButtons/>
        <MobPanel open={pannelOpen} onClick={()=>setPannelOpen('')}/>
    </Ux>
    );
}