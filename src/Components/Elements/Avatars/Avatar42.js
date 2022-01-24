import './AvatarSizes.css'
import { Check } from 'react-bootstrap-icons';



export const Avatar42=({img,verified,onClick})=>{



    return(
        <div className="avatar box-42"  onClick={()=>{onClick()}}>
            <img src={require('../../../assets/Images/avatar.png')} alt="avatar"/>
            <span className="verified"><Check/></span>
        </div>
    );
}