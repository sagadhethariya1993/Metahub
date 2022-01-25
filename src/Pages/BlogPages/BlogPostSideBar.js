import { PostCommentSection, PostContent, PostHeading } from '../../Components/Elements/Post';
import { ArchiveWidget, CalenderWidget, CategoriesWidget, LatestCommentsWidget, RecentPostsWidgets, SearchWidgets } from '../../Components/UI';
import './SingleBlog.css'



export const BlogPostSideBar=()=>{



    return(
        <div className="primary-content-area container content-padding">
            <div className="single-post single-post-sidebar">
                <div className="single-post-body">
                    <PostHeading/>
                    <div className="post-featured-image">
                        <img src={require("../../assets/Images/content/single-post/featured-image-1.png")} alt=""/>
                    </div>
                    <PostContent/>
                    <PostCommentSection/>
                </div>
                <aside>
                <div className="widgets-list">
                    <RecentPostsWidgets/>
                    <SearchWidgets/>
                    <CategoriesWidget/>
                    <ArchiveWidget/>
                    <LatestCommentsWidget/>
                    <CalenderWidget/>
                </div>
            </aside>
            </div>
            
        </div>
    );
}