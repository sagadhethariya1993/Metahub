import { Facebook, Instagram, Link, Twitch, Twitter } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export const SocialLinks=()=>{



    return(
            <ul className="social-icons-list">
              <li className="social-icon"><NavLink to="/"><Link/></NavLink></li>
              <li className="social-icon"><NavLink to="/"><Facebook/></NavLink></li>
              <li className="social-icon"><NavLink to="/"><Instagram/></NavLink></li>
              <li className="social-icon"><NavLink to="/"><Twitter/></NavLink></li>
              <li className="social-icon"><NavLink to="/"><Twitch/></NavLink></li>
            </ul>
    );
}