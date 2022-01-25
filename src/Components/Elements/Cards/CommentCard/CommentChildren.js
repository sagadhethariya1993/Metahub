import { Avatar42 } from "../../Avatars";
import { NavLink } from 'react-router-dom';
export const CommentChildren=()=>{


    return(
        <ul className="children">
            <li className="comment-item">
              <div className="comment-item-wrapper">
                <div className="avatar-block">
                  <Avatar42/>
                  <div className="avatar-meta">
                    <div className="avatar-title"><NavLink to="/profile">Jackie Jones</NavLink></div>
                    <div className="avatar-meta">@JackieJ</div>
                  </div>
                </div>
                <div className="comment-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </div>
                <div className="comment-meta">
                  <div className="publish-date">46 minutes ago</div>
                  <div className="reply"><NavLink to="/">Reply</NavLink></div>
                </div>
              </div>
            </li>
        </ul>
    );
}