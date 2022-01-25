import { Avatar42 } from '../../Avatars';
import './CommentCard.css'
import { CommentChildren } from './CommentChildren';

import { NavLink } from 'react-router-dom';


export const CommentCard=()=>{



    return(
        <li className="comment-item has-children">
            <div className="comment-item-wrapper">
                <div className="avatar-block">
                  <Avatar42/>
                  <div className="avatar-meta">
                    <div className="avatar-title"><NavLink to="/profile">Dexter Stark</NavLink></div>
                    <div className="avatar-meta">@dexterstark</div>
                  </div>
                </div>
                <div className="comment-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...
                </div>
                <div className="comment-meta">
                  <div className="publish-date">2 hours ago</div>
                  <div className="reply"><NavLink to="/">Reply</NavLink></div>
                </div>

            </div>
            <CommentChildren/>
            <CommentChildren/>
        </li>
    );
}