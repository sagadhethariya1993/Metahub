import {Ux} from '../../../Elements/HOC'
import { Logo } from '../../../Elements/Logos/Logo';
import { SearchBox } from '../../../UI';
import { ActivityButtons } from '../ActivityButtons';
import './DeskTopBar.css'
import { NavLink } from 'react-router-dom';
export const DeskTopBar=()=>{


    return (
    <Ux>
        <Logo/>
        <SearchBox/>
        <div className="collection-box">
            <NavLink to="/" className="btn btn-normal btn-dark create-collection waves-effect waves-button waves-float waves-light">Create</NavLink>
            <div className="collection-title"><NavLink to="/">My Collection<span className="count colored">12</span></NavLink></div>
        </div>
        <ActivityButtons/>
    </Ux>
    );
}