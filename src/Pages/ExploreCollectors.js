import { SectionHeading } from "../Components/UI";
import { Pagination } from "../Components/Elements/Pagination/Pagination";
import { NoBgRightFilter } from "../Components/Layout/FilterBlock/FilterBlock";
import { CollectorBox } from "../Components/Layout/ExploreCollectors/CollectorBox";






export const ExploreCollectors=()=>{



      

    return(
        <div className="primary-content-area container content-padding ExploreCollector-Page">  
            <SectionHeading text={"Explore"} gradientText={"Collectors"} reverse/>
            
            <NoBgRightFilter/>
            <CollectorBox/>
            <Pagination/>
        </div>
  
    );
}