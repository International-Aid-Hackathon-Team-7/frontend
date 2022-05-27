import { useState, useEffect, useRef } from 'react'
import styles from './ForumPost.module.css'
import * as postService from '../../services/postServices'

export default function Comment(props) {

    const [comment, setComment] = useState(props.comment)
    const updateCommentRef = useRef();

    const handleLike = (evt) => {
        const likes = comment.likeLevel;
        const updatedLikes = likes + 1;
        setComment({
            ...comment,
            likeLevel: updatedLikes,
        })
    }
    console.log(props.post)
    const updateCommentCaller = async () => {
        console.log(comment);
        console.log(comment._id)
        console.log(postService.updateComment(props.post.category._id, props.post._id, comment._id, comment))
    }

    useEffect(() => {
        updateCommentRef.current = updateCommentCaller
    })
    
    useEffect(() => {
        updateCommentRef.current();
    }, [comment])

    const commentDate = comment.createdAt.slice(5,7) + '/' + comment.createdAt.slice(8,10) + '/' + comment.createdAt.slice(0,4);

    return(
        <div className="card">
        <div className="card-header">
            <span>{comment.commentator.name} | {commentDate}</span>
        </div>
        <div className="card-body">
            <p className="card-text">{comment.comment_content}</p>
        </div>
        <div className={`card-footer bg-transparent ${styles.buttons}`}>
            <div className="row">
                <div className={`col ${styles.commentLike}`}>
                    <button className={`btn btn-light`} onClick={handleLike}>
                        <span className={`material-icons-outlined ${styles.btn}`}>compost</span>{comment.likeLevel}
                    </button>
                </div>
                <div className={`col ${styles.commentEdit}`}>
                    {props.user && props.profile && props.user.profile === comment.commentator._id &&
                         <span className={`material-icons-outlined ${styles.btn}`}>edit</span>
                    }
                </div>
            </div>
        </div>
    </div>
    )

}