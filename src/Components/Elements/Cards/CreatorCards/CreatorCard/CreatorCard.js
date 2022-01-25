import { NavLink } from 'react-router-dom';
import img from '../../../../../assets/Images/Facebook.PNG'
import { Avatar64 } from '../../../Avatars';
import './CreatorCard.css'


export const CreatorCard =({no})=>{


    return(
        <div className="top-creator-item">
            <div className="creator-number">{no}</div>
            <div className="creator-box">
              <Avatar64/>
              <div className="creator-meta">
                <div className="title"><NavLink to="/">Dexter Stark</NavLink></div>
                <div className="creator-meta">@DexterStark</div>
              </div>
            </div>
            <div className="projects-score">
              <div className="number title">135</div>
              <div className="label">Created</div>
            </div>
            <div className="projects-previews">
              <div className="preview-box box-68">
                <NavLink to="/">
                  <picture>
                    
                    <img src={img} height="68" width="68" alt="" loading="lazy"/>
                  </picture>

                </NavLink>
              </div>
              <div className="preview-box box-68">
                <NavLink to="/">
                  <picture>
                    <img src={img} height="66" width="66" alt="" loading="lazy"/>
                  </picture>
                </NavLink>
              </div>
              <div className="preview-box box-68">
                <NavLink to="/">
                  <picture>
                    <img src={img} height="68" width="68" alt="" loading="lazy"/>
                  </picture>
                </NavLink>
              </div>
            </div>
          </div>
    );
}