

import { NewsWidgetCard } from '../../../Elements/Cards';
import './RecentPostsWidgets.css'



export const RecentPostsWidgets=()=>{



    return(
        <div className="widget-2 recent-posts-widget">
            <div className="widget-title h5">Latest News</div>
              <div className="widget-body">
                <NewsWidgetCard/>
                <NewsWidgetCard/>
                <NewsWidgetCard/>
              </div>
            </div>
    );
}