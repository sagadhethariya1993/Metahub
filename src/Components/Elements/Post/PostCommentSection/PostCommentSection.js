import { CommentForm } from '../../../UI';
import { CommentCard } from '../../Cards';
import './PostCommentSection.css'


export const PostCommentSection=()=>{



    return(
        <div className="comments-section">
          <h3 className="content-heading">Comments</h3>
          <ul className="comments-list">
            <CommentCard/>
            <CommentCard/>
          </ul>
          <CommentForm/>
        </div>
    );
}