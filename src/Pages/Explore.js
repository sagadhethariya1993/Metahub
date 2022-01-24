import { ExploreFilterSlider } from "../Components/Layout/Explore/ExploreFilterSlider";
import { FilterBlock } from "../Components/Layout/FilterBlock/FilterBlock";
import { SectionHeading,HoverButton } from "../Components/UI";
import { ProductCard } from "../Components/Elements/Cards";
import { Grids } from "../Components/Elements/HOC";
import { Pagination } from "../Components/Elements/Pagination/Pagination";


export const Explore=()=>{

    var items=[0,1,2,3,4,5,6,7,8,9,10,11];

    return(
        <div className="primary-content-area container content-padding">  
            <SectionHeading text={"Artwork"} gradientText={"Explore"} />
            <ExploreFilterSlider/>
            <FilterBlock/>
            <div className="featured-box ">
                    <div className="featured-box-wrapper">
                        <Grids col={4}>
                            {
                                items.map((text,i)=>(
                                    <ProductCard key={i}/>
                                ))
                            }
                        </Grids>
                    </div>
                <Pagination/>
            </div>
        </div>
    );
}