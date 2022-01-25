import './Link.css'
import { NavLink } from 'react-router-dom';

export const Link=({children,onClick})=>{
    return(
        
<NavLink onClick={()=>{onClick()}} to="/">{children}</NavLink>
    );
}