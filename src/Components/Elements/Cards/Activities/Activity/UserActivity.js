
import { NavLink } from 'react-router-dom';
import { Avatar42 } from '../../../Avatars';
import './Activity.css'


export const UserActivity=()=>{




    return(
        <div className="activity-item like">
            <div className="bid-placer">
               <Avatar42/>
                <div className="bid-info">
                    <div className="bid-title"><span className="gradient-text"><NavLink to="/profile">Noir Artworks</NavLink></span>
                        liked <span className="colored"><NavLink to="/productv2">Canary’s Kitchen</NavLink></span>
                    </div>
                    <div className="bid-date">47 minutes ago</div>
                </div>
            </div>
            <div className="bid-product"><NavLink to="/productv2">
                    <img src={require("../../../../../assets/Images/content/previews/project-thumb-6.png")} alt=""/></NavLink>
            </div>
        </div>
    );
}