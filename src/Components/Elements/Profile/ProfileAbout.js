import { Dot } from 'react-bootstrap-icons';
import { SocialTextLinks } from '../SocialLinkBlocks/SocialTextLinks';
import './Profile.css'
import { NavLink } from 'react-router-dom';

export const ProfileAbout=()=>{



    return(
        <div className="about-author-wrapper">
            <div className="author-bio">
                <div className="small-title">Full Bio</div>
                <p>I am a self-taught digital artist who specializes in 3d art and motion
                    graphics.
                    Most of my works are inspired by nature and biomechanic themes.</p>
                <p>What does it mean? Biomechanics is the study of the structure, function and
                    motion of the mechanical aspects of biological systems, at any level from
                    whole
                    organisms to organs, cells and cell organelles, using the methods of
                    mechanics.
                    Biomechanics is a branch of biophysics.</p>
            </div>
            <div className="author-details">
                <div className="small-title">Details</div>
                <ul className="details-list">
                    <li><Dot/><span className="detail-label">Joined</span><span className="bold">January
                            5th,
                            2021</span></li>
                    <li><Dot/><span className="detail-label">Formats</span><span className="bold">Austin, TX -
                            United States</span></li>
                    <li><Dot/><span className="detail-label">Email</span><span className="bold"><NavLink to="mailto:dexstarkart@fakemail.com">dexstarkart@fakemail.com</NavLink></span>
                    </li>
                    <li><Dot/><span className="detail-label">Speciality</span><span className="bold">Motion
                            Graphics</span></li>
                </ul>
            </div>
            <div className="author-social-networks">
                <div className="small-title">Social Media</div>
               <SocialTextLinks/>

            </div>
        </div>
    );
}