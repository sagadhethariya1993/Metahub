import { Facebook, Instagram, Link, Twitch, Twitter } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export const SocialTextLinks=()=>{



    return(
            <ul className="social-styled-list">
              <li ><NavLink to="/"><Link/>www.dexstarkart.com</NavLink></li>
              <li ><NavLink to="/"><Facebook/>@dexstark_art</NavLink></li>
              <li ><NavLink to="/"><Instagram/>@dexstark_art</NavLink></li>
              <li ><NavLink to="/"><Twitter/>@dexstark</NavLink></li>
              <li ><NavLink to="/"><Twitch/>@dexstarkstreams</NavLink></li>
            </ul>
    );
}