import { Grids } from '../../../Elements/HOC/Grids';
import {SectionPadding} from '../../../Elements/HOC/SectionPadding'
import { Container } from 'react-bootstrap';
import { NewsCard } from '../../../Elements/Cards/NewsCard/NewsCard';


export const LatestNews=()=>{
    var items=[0,1,2];

    return(
        <Container>
        <SectionPadding margin>

            <div className="section-title-wrapper">
                <div className="section-title">Latest<span className="gradient-text"> News</span></div>
                <div className="all-items-link"><a href="10-creators.html">View all Blog Posts</a></div>
            </div>
            
                <Grids col={3}>
                {
                    items.map((text,i)=>(
                        <NewsCard key={i}/>
                    ))
                }
                </Grids>
        </SectionPadding>
        </Container>
    );
}