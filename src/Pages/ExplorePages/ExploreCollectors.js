import { SectionHeading } from "../../Components/UI";
import { Pagination } from "../../Components/Elements/Pagination/Pagination";
import { NoBgRightFilter } from "../../Components/Layout";
import { CollectorBox } from "../../Components/Layout/ExploreCollectors/CollectorBox";
import { PreFooter } from '../../Components/Layout';
import { Ux } from "../../Components/Elements/HOC";





export const ExploreCollectors=()=>{



      

    return(
        <Ux>
            <div className="primary-content-area container content-padding ExploreCollector-Page">  
                <SectionHeading text={"Explore"} gradientText={"Collectors"} reverse/>
                
                <NoBgRightFilter/>
                <CollectorBox/>
                <Pagination/>
            </div>
            <PreFooter/>
        </Ux>
    );
}