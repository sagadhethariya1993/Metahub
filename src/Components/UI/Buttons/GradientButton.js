
import { NavLink } from 'react-router-dom';

export const GradientButton=({children,onClick,background,className=""})=>{



    return(

        <button className={"slide-button gradient-border_"+ background+"-bg "+ className}  
        onClick={()=>{onClick()}}>
            <NavLink className="btn btn-normal waves-effect waves-button waves-float waves-light " to="/">
                {children}
            </NavLink>
        </button>
        
    );
}