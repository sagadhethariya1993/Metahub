import { NavLink } from 'react-router-dom';
import './Logo.css'


export const Logo=()=>{



    return(
        <div className="logo ">
            <NavLink className="logo-link" to="/">
                <div className="logo-img"><img src={require('../../../assets/Images/logo.png')} alt="logo"/></div>
                <div className="logo-text">Cryptoki</div>
            </NavLink>
        </div>
    );
}