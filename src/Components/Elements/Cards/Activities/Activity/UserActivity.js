import { Avatar42 } from '../../../Avatars';
import './Activity.css'



export const UserActivity=()=>{




    return(
        <div className="activity-item like">
            <div className="bid-placer">
               <Avatar42/>
                <div className="bid-info">
                    <div className="bid-title"><span className="gradient-text"><a href="08-profile-page.html">Noir Artworks</a></span>
                        liked <span className="colored"><a href="06-product-page-v2.html">Canary’s Kitchen</a></span>
                    </div>
                    <div className="bid-date">47 minutes ago</div>
                </div>
            </div>
            <div className="bid-product"><a href="06-product-page-v2.html">
                    <img src={require("../../../../../assets/Images/content/previews/project-thumb-6.png")} alt=""/></a>
            </div>
        </div>
    );
}