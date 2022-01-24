import './AvatarSizes.css'
import { Check } from 'react-bootstrap-icons';



export const Avatar152=({img,verified})=>{



    return(
        <div className="avatar box-152">
            <img src={require('../../../assets/Images/avatar.png')} alt="avatar"/>
            <span className="verified"><Check/></span>
        </div>
    );
}