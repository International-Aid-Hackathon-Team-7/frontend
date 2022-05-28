import { useState, useEffect, useRef } from 'react'
import styles from './ForumPost.module.css'
import * as postService from '../../services/postServices'
// import * as profileService from '../../services/profileService'
import CommentEdit from "./CommentEdit"

export default function Comment(props) {

    const [comment, setComment] = useState(props.comment)
    const updateCommentRef = useRef();

    const handleLike = (evt) => {
        if(comment.likeLevel !== undefined) {
            const likes = comment.likeLevel;
            console.log(likes)
            const updatedLikes = likes + 1;
            setComment({
                ...comment,
                likeLevel: updatedLikes,
            })
        } else {
            setComment({
                ...comment,
                likeLevel: 1,
            })
        }
    }

    const handleEdit = (newCommentText) => {
        setComment({
            ...comment,
            comment_content: newCommentText,
        })
    }

    const handleDelete = async () => {
        await postService.deleteComment(props.post.category._id, props.post._id, comment._id)
        props.updatePosts();
        props.updateCategories();
    }

    const updateCommentCaller = async () => {
      await postService.updateComment(props.post.category._id, props.post._id, comment._id, comment)
      props.updatePosts();
      props.updateCategories();
    }

    useEffect(() => {
        updateCommentRef.current = updateCommentCaller
    })
    
    useEffect(() => {
        if(props.user) {
            updateCommentRef.current();
        }
    }, [comment, props.user])

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
                    <button disabled={props.user ? false : true} className={`btn btn-light`} onClick={handleLike}>
                        <span className={`material-icons-outlined ${styles.btn}`}>compost</span>{comment.likeLevel}
                    </button>
                </div>
                <div className={`col ${styles.commentEdit}`}>
                    {props.user && props.profile && props.user.profile === comment.commentator._id &&
                        <CommentEdit comment={comment} handleEdit={handleEdit} handleDelete={handleDelete}/>
                    }
                </div>
            </div>
        </div>
    </div>
    )

}