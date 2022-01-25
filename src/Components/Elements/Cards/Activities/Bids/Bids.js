import { Avatar42 } from '../../../Avatars';
import './Bids.css'
import { NavLink } from 'react-router-dom';



export const Bids=()=>{




    return(
        <div className="placed-bid">
            <div className="bid-placer">
              <Avatar42/>
              <div className="bid-info">
                <div className="bid-title">Bid placed by <span className="gradient-text"><NavLink to="/profile">Jenn
                      Art</NavLink></span></div>
                <div className="bid-date">03/25/2021 at 12:19pm</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
        </div>
    );
}




