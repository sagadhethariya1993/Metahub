
import { SectionPadding,Container  } from "../../../Elements/HOC";
import { ProductSlider } from "../../../Elements/Sliders/ProductSlider";
import { SectionHeading } from "../../../UI/Headings/SectionHeading";

export const FeaturedItems=()=>{

    return(
        <SectionPadding margin>
            <Container>
                <SectionHeading text={"Items"} gradientText={"Featured"} />
                <ProductSlider/>
            </Container>
            
        </SectionPadding>
        
    );
}