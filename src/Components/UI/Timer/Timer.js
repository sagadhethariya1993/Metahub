import { Clock } from "react-bootstrap-icons";
import './Timer.css'

export const Timer=()=>{



    return(
        <div className="featured-countdown">
            <span className="clock">
                <Clock/>
            </span>
            <span className="js-countdown" data-timer="102400" data-labels="d : , h : , m : , s">
                Timer
            </span>
        </div>
    );
}