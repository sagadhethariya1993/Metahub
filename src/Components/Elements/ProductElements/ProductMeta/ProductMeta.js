import './ProductMeta.css'


export const ProductMeta=()=>{



    return(
        <div className="product-meta-section">
            <div className="product-meta-item">
              <div className="small-title">Current bid</div>
              <div className="value">2.31 ETH</div>
              <div className="caption">125.230 U$D</div>
            </div>
            <div className="product-meta-item">
              <div className="small-title">Edition</div>
              <div className="value">01/40</div>
              <div className="caption">Tokens</div>
            </div>
            <div className="product-meta-item">
              <div className="small-title">Auction ending in</div>
              <div className="countdown">
                <div className="js-countdown" data-timer="104400" data-labels="Days , Hours , Mins , Secs"><div aria-hidden="true" className="countdown__timer"><span className="countdown__item"><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">Days</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">22</span><span className="countdown__label">Hours</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">38</span><span className="countdown__label">Mins</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">11</span><span className="countdown__label">Secs</span></span></div></div>
              </div>
            </div>
            <div className="place-bid"><button className="btn btn-wide btn-dark waves-effect waves-button waves-float waves-light">Place a Bid!</button></div>
          </div>
    );
}