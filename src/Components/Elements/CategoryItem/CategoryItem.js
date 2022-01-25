
import { Ux } from '../HOC';
import './CategoryItem.css'
import { NavLink } from 'react-router-dom';


export const CategoryItem=({text,img,onClick})=>{


    return(
        <Ux>
            <NavLink to="/">
                <image width="16" height="14" to="/"></image>
                3D Artwork
            </NavLink>
        </Ux>
    );
}