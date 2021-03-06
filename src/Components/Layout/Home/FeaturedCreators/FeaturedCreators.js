import { Grids } from '../../../Elements/HOC/Grids';
import { FeaturedCreatorCard } from '../../../Elements/Cards';
import {SectionPadding} from '../../../Elements/HOC/SectionPadding'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const FeaturedCreators=()=>{
    var items=[0,1];

    return(
        <Container>
        <SectionPadding margin>

            <div className="section-title-wrapper">
                <div className="section-title"><span className="gradient-text">Featured</span> Creators</div>
                <div className="all-items-link"><NavLink to="/exploreCreators">Explore all Creators</NavLink></div>
            </div>
            
                <Grids col={2}>
                {
                    items.map((text,i)=>(
                        <FeaturedCreatorCard key={i}/>
                    ))
                }
                </Grids>
            <div className="call-to-action-box">
                <div className="animated-img"></div>
                <div className="call-to-action-text">
                    <div className="subtitle">COME AND JOIN THEM!</div>
                    <div className="h2">Become a Creator!</div>
                </div>
                <div className="subscribe-form">
                    <NavLink to="24-become-a-creator.html" className="btn btn-normal btn-dark waves-effect waves-button waves-float waves-light">Start Selling!</NavLink>
                </div>
            </div>
        </SectionPadding>
        </Container>
    );
}