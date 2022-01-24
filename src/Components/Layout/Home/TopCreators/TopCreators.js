import { Grids , SectionPadding ,Container} from "../../../Elements/HOC";
import { CreatorCard } from "../../../Elements/Cards";
import { HoverButton } from "../../../UI";
import { SectionHeading } from "../../../UI/Headings/SectionHeading";

export const TopCreators=()=>{
    var items=[0,1,2,3,4,5];
    
    return(
        <Container>
            <SectionPadding margin>
                <SectionHeading text="Creator" gradientText="Top"/>
                
                    <div className="featured-box ">
                        <div className="featured-box-wrapper grid-4-columns">
                            <Grids col={2}>
                                {
                                    items.map((text,i)=>(
                                        <CreatorCard key={i} no={i}/>
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