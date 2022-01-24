import {PageTitleSection} from '../../Components/UI/Headings/PageTitleSection'
import {FilterBlock} from '../../Components/Layout'
import {CreatorDetailCard} from '../../Components/Elements/Cards'
import { Grids, Ux } from '../../Components/Elements/HOC'
import { Pagination } from '../../Components/Elements/Pagination/Pagination'
import { PreFooter } from '../../Components/Layout';

export const ExploreCreators=()=>{
    var items=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];



    return(
    <Ux>
        
        <div className="primary-content-area container content-padding">
            <PageTitleSection text='Explore' gradientText='Creators'/>
            <FilterBlock/>
            <Grids col={4}>
            {
                items.map((i)=>(
                    <CreatorDetailCard key={i}/>
                ))
            }
            </Grids>
            <Pagination/>
        </div>
        <PreFooter/>
    </Ux>
    );

}