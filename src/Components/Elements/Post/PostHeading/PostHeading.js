
import { SocialLinks } from '../../SocialLinkBlocks/SocialLinks';
import './PostHeading.css'
import { NavLink } from 'react-router-dom';


export const PostHeading=()=>{


    return(
        <div className="post-heading">
          <div className="news-tags">
            <span className="tag-item"><NavLink to="/">Guides</NavLink></span>
            <span className="tag-item"><NavLink to="/">News</NavLink></span>
          </div>
          <h1>Here’s a quick guide about how to make money selling your artworks with Criptoki!</h1>
          <div className="news-meta">
            <div className="post-author">
              by <NavLink to="/profile">Marina Valentine</NavLink>, March 13th, 2021
            </div>
            <SocialLinks/>
          </div>
        </div>
    );
}