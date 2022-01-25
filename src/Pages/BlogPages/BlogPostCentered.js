import { PostCommentSection, PostContent, PostHeading } from '../../Components/Elements/Post';

import './SingleBlog.css'



export const BlogPostCentered=()=>{



    return(
        <div className="primary-content-area container content-padding">
            <div className="single-post medium-section">
                <PostHeading/>
                <div className="post-featured-image">
                    <img src={require("../../assets/Images/content/single-post/featured-image-1.png")} alt=""/>
                </div>
                <PostContent/>
                <PostCommentSection/>
        
            </div>
        </div>
    );
}