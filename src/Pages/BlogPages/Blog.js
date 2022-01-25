import { PreFooter } from "../../Components/Layout";

import { Grids,Ux } from '../../Components/Elements/HOC';
import { NewsCard } from '../../Components/Elements/Cards';
import { Pagination } from "react-bootstrap";




export const Blog=()=>{
    var items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    return(
        <Ux>
            <div className="primary-content-area container content-padding">
                <div className="page-title-section"><h2>Our<span className="gradient-text"> Blog</span></h2></div>
                <Grids col={3}>
                {
                    items.map((i)=>(
                        i%3===0?
                        <NewsCard key={i} music/>
                        :i%5===0?<NewsCard key={i} video/>
                        :i%17===0?<NewsCard key={i} nothumb={false}/>
                        :<NewsCard key={i}/>
                    ))
                }
                </Grids>
                <Pagination/>
            </div>


            <PreFooter/>
        </Ux>
    );
}