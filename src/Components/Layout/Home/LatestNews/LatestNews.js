import { Grids } from '../../../Elements/HOC/Grids';
import {SectionPadding} from '../../../Elements/HOC/SectionPadding'
import { Container } from 'react-bootstrap';
import { NewsCard } from '../../../Elements/Cards/NewsCard/NewsCard';
import { NavLink } from 'react-router-dom';

export const LatestNews=()=>{
    var items=[0,1,2];

    return(
        <Container>
        <SectionPadding margin>

            <div className="section-title-wrapper">
                <div className="section-title">Latest<span className="gradient-text"> News</span></div>
                <div className="all-items-link"><NavLink to="/exploreCreators">View all Blog Posts</NavLink></div>
            </div>
            
                <Grids col={3}>
                {
                    items.map((text,i)=>(
                        <NewsCard key={i} />
                    ))
                }
                </Grids>
        </SectionPadding>
        </Container>
    );
}