import { Container } from "react-bootstrap";
import { SectionPadding,Grids } from "../../../Elements/HOC";
import { NavLink } from 'react-router-dom';
import './NewestItems.css'
import { ProductCard } from "../../../Elements/Cards";
import { HoverButton } from "../../../UI";

export const NewestItems=()=>{
    var items=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    
    return(
        <Container>
            <SectionPadding margin>
                <div className="section-title-wrapper">
                    <div className="section-title"><span className="gradient-text">Newest</span> Items</div>
                    <div className="all-items-link"><NavLink to="/explore">Explore all Artworks</NavLink></div>
                </div>
                    <div className="featured-box ">
                        <div className="featured-box-wrapper grid-4-columns">
                            <Grids col={4}>
                                {
                                    items.map((i)=>(
                                        <ProductCard key={i}/>
                                    ))
                                }
                            </Grids>
                        </div>

                        <HoverButton>View All Artworks</HoverButton>
                    </div>

            </SectionPadding>
        </Container>
    );
}