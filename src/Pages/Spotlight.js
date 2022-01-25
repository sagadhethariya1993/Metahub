import { Container, SectionPadding } from "../Components/Elements/HOC";
import { ArtworkSlider, CuratedSlider } from "../Components/Elements/Sliders";
import { SectionHeading } from "../Components/UI";




export const Spotlight=()=>{


    return(
        <div className="primary-content-area container content-padding">
                <SectionPadding margin>
                    <Container>
                        <SectionHeading text={"of the Week"} gradientText={"Artworks"} />
                        <ArtworkSlider/>
                    </Container>
                    
                </SectionPadding>
                <SectionPadding margin>
                    <Container>
                        <SectionHeading text={"Collections"} gradientText={"Curated"} />
                        <CuratedSlider/>
                    </Container>
                    
                </SectionPadding>
        </div>
    );
}