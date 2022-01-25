import { NavLink } from 'react-router-dom';
import './CuratedCard.css'



export const CuratedCard=()=>{



    return(
        <div className="collection-item">
            <NavLink to="/explore">
                <div className="cover-image"><img src={require("../../../../assets/Images/content/artworks/artwork-2.png")} alt=""/>
                </div>
                <div className="collection-info">
                    <div className="title h3">Pop Culture</div>
                    <div className="number">364 items</div>
                </div>
            </NavLink>
        </div>
        
    );
}