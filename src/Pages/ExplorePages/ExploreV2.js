import { PreFooter, SidebarFilter } from "../../Components/Layout";
import { Grids, Ux } from "../../Components/Elements/HOC";
import { ProductCard } from "../../Components/Elements/Cards";
import { Pagination } from "../../Components/Elements/Pagination/Pagination";


export const ExploreV2=()=>{

    var items=[0,1,2,3,4,5,6,7,8,9,10,11];


    return(
    <Ux>
        <div className="primary-content-area container grid-aside-main-4-col content-padding">
            <aside>
                <div className="aside-wrapper">
                    <div className="widget-filter-panel">
                        <div className="widget-title h6">Filters</div>
                    </div>
                    <SidebarFilter/>
                </div>
            </aside>

            <div className="main-content-area">
                <div className="page-title">
                    <h2><span className="gradient-text">Explore</span> Artworks</h2>
                </div>
                <div className="featured-box ">
                        <Grids col={4}>
                            {
                                items.map((text,i)=>(
                                    <ProductCard key={i}/>
                                ))
                            }
                        </Grids>
                    <Pagination flex='right'/>
                </div>
            </div>
        </div>
        <PreFooter/>
    </Ux>
    );
}