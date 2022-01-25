import { Avatar42 } from '../../../Avatars';
import './Activity.css'
import { NavLink } from 'react-router-dom';


export const ProductActivity=()=>{




    return(
        <div className="activity-item sale">
            <div className="bid-placer">
              <Avatar42/>
              <div className="bid-info">
                <div className="bid-title"><span className="gradient-text">
                    <NavLink to="/profile">Dexter Stark</NavLink></span> sold
                </div>
                <div className="bid-date">53 minutes ago</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
        </div>
    );
}