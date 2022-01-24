import { ExploreFilterSlider } from "../../Components/Layout/Explore/ExploreFilterSlider";
import { FilterBlock } from "../../Components/Layout";
import { SectionHeading } from "../../Components/UI";
import { ProductCard } from "../../Components/Elements/Cards";
import { Grids, Ux } from "../../Components/Elements/HOC";
import { Pagination } from "../../Components/Elements/Pagination/Pagination";
import { PreFooter } from '../../Components/Layout';


export const Explore=()=>{

    var items=[0,1,2,3,4,5,6,7,8,9,10,11];

    return(
        <Ux>

        
            <div className="primary-content-area container content-padding">  
                <SectionHeading text={"Artwork"} gradientText={"Explore"} />
                <ExploreFilterSlider/>
                <FilterBlock/>
                <div className="featured-box ">
                            <Grids col={4}>
                                {
                                    items.map((text,i)=>(
                                        <ProductCard key={i}/>
                                    ))
                                }
                            </Grids>
                    <Pagination/>
                </div>
            </div>
            
            <PreFooter/>
        </Ux>
    );
}