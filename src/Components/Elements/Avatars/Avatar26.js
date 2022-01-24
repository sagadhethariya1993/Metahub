import './AvatarSizes.css'
import { Check } from 'react-bootstrap-icons';



export const Avatar26=({img,verified})=>{



    return(
        <div className="profile-avatar avatar box-26">
            <img src={require('../../../assets/Images/avatar.png')} alt="avatar"/>
            <span className="verified"><Check/></span>
        </div>
    );
}