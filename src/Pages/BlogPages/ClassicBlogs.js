import { Ux } from "../../Components/Elements/HOC";
import { FilterBlock, PreFooter } from "../../Components/Layout";
import { NewsCard } from '../../Components/Elements/Cards';
import { Pagination } from "../../Components/Elements/Pagination/Pagination";
import { ArchiveWidget, CalenderWidget, CategoriesWidget,
     LatestCommentsWidget, RecentPostsWidgets, SearchWidgets } from "../../Components/UI";




export const ClassicBlog=()=>{
    var items=[1,2,3,4,5,6,7];


    return(
        <Ux>
            <div className="primary-content-area container content-padding">
                <div className="page-title-section">
                    <h2>Our <span className="gradient-text">Blog Classic</span></h2>
                </div>
                
                <FilterBlock/>
                <div className="blog-classic-area grid-right-sidebar-large">
                    <div className="blog-list">
                        {
                            items.map((i)=>(
                                i%3===0?
                                <NewsCard classic key={i} music/>
                                :i%5===0?<NewsCard classic key={i} video/>
                                :i%17===0?<NewsCard classic key={i} nothumb={false}/>
                                :<NewsCard classic key={i}/>
                            ))
                        }
                        <Pagination  flex="left"/>
                    </div>
                    <div className="widgets-list">
                        <RecentPostsWidgets/>
                        <SearchWidgets/>
                        <CategoriesWidget/>
                        <ArchiveWidget/>
                        <LatestCommentsWidget/>
                        <CalenderWidget/>
                    </div>
                </div>
            </div>
            <PreFooter/>
        </Ux>
    );
}