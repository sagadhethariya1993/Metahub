import { ArrowRight } from 'react-bootstrap-icons';
import './FooterWidgets.css'



export const SubscribeWidget=()=>{



    return(
        <div className="subscribe-widget">
          <form className="cryptoki-subscribe-form subscribe-form">
            <div className="subscribe-form-content">
              <input className="subscribe-input" type="email" name="email" id="subscribe-email" placeholder="Subscribe to our newsletter"/>
              <button className="subscribe-submit" type="submit"><ArrowRight/></button>
            </div>
          </form>
        </div>
    );
}