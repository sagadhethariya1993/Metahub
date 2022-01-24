import { Avatar42 } from '../../../Avatars';
import './Bids.css'




export const Bids=()=>{




    return(
        <div className="placed-bid">
            <div className="bid-placer">
              <Avatar42/>
              <div className="bid-info">
                <div className="bid-title">Bid placed by <span className="gradient-text"><a href="08-profile-page.html">Jenn
                      Art</a></span></div>
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




