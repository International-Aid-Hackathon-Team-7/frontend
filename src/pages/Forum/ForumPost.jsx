import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './ForumPost.module.css'
import CommentForm from './CommentForm'

export default function ForumPost(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.posts)
    }, [props.posts])

    let { postId } = useParams();

    const loading = () => {
        return(
            <h1>Loading...</h1>
        )
    }

    const loaded = () => {
        const index = posts.map(post => post._id).indexOf(postId)
        const post = posts[index];
        const date = post.createdAt;

        const dateText = date.slice(5,7) + '/' + date.slice(8,10) + '/' + date.slice(0,4);
        const comments = post.comments.map((comment) => {
            const commentDate = comment.createdAt.slice(5,7) + '/' + comment.createdAt.slice(8,10) + '/' + comment.createdAt.slice(0,4);
            return(
                <div className="card" key={comment._id}>
                    <div className="card-header">
                        <span>{comment.commentator.name} | {commentDate}</span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{comment.comment_content}</p>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h1>{post.title}</h1>
                <div className="card">
                    <div className="card-header bg-transparent">
                        <span>
                            {post.isAnonymous ? "Anonymous" : post.owner.name} | {dateText}
                        </span>
                    </div>
                    {post.media && <img className={`card-img-top ${styles.postImg}`} src={post.media} alt={post.title}/>}
                    <p>{post.content}</p>
                    <div className={`card-footer bg-transparent ${styles.buttons}`}>
                        <div className="row">
                            <div className={`col sm-6 ${styles.linkCol}`}>
                                <span className={`material-icons-outlined ${styles.btn}`}>compost</span> Like 
                            </div>
                            <div className={`col sm-6 ${styles.linkCol}`}>
                                <span className={`material-icons-outlined ${styles.btn}`}>chat_bubble_outline</span>Comment
                            </div>
                            <div className={`col sm-12 ${styles.linkCol}`}>
                                <span className={`material-icons-outlined ${styles.btn}`}>share</span> Share
                            </div>
                        </div>
                    </div>
                    <div className={`card-footer bg-transparent ${styles.cardFooter}`}>
                        <div className={styles.icons}>
                            <span className={`material-icons-outlined ${styles.likes}`}>compost</span> 100
                        </div>
                    </div>
                </div>
                <div className={styles.commentsContainer}>
                    <h4>Comments</h4>
                    {}
                    {comments}
                </div>
                {}
                <CommentForm user={props.user} post={post} setPosts={setPosts}/>
            </div>
        )
    }

    return posts.length > 0 ? loaded() : loading()
}