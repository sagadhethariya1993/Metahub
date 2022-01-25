import { NavLink } from 'react-router-dom';


export const HoverButton=({children,onClick,className=""})=>{


    return(
        <div onProgress={()=>onClick()} className={"more-section flex-center "+className}>
            <NavLink className="btn btn-normal btn-dark waves-effect waves-button waves-float waves-light" to="/">
                {children}
            </NavLink>
        </div>
    );
}