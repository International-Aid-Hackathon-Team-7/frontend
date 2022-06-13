import { useState, useEffect, useRef } from 'react'
import styles from './ForumPost.module.css'
import * as postService from '../../services/postServices'
import * as profileService from '../../services/profileService'
import CommentEdit from "./CommentEdit"

export default function Comment(props) {

    const [comment, setComment] = useState(props.comment)
    const updateCommentRef = useRef();
    const handleLike = async (evt) => {
        if(comment.likeLevel !== undefined) {
            const likes = comment.likeLevel;
            const updatedLikes = likes + 1;
            setComment({
                ...comment,
                likeLevel: updatedLikes,
                favorited_by: [...comment.favorited_by, props.profile._id],
            })
        } else {
            setComment({
                ...comment,
                likeLevel: 1,
                favorited_by: [...comment.favorited_by, props.profile._id],
            })
        }
        const favComments = props.profile.favorited_comments ? [...props.profile.favorited_comments, comment._id] : [comment._id]
        const updatedProfile = {
            ...props.profile,
            favorited_comments: favComments
        }
        await profileService.editProfile(props.profile._id, updatedProfile)
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
        props.updateProfile();
    }

    const updateCommentCaller = async () => {
        await postService.updateComment(props.post.category._id, props.post._id, comment._id, comment)
        props.updatePosts();
        props.updateCategories();
        props.updateProfile();
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
    const likeBtnColor = props.profile && props.profile.favorited_comments.length > 0 && props.profile.favorited_comments.includes(comment._id) ? "green" : "black"
    let likeBtnDisabled = true
    if(props.profile) {
        if(props.profile.favorited_comments.length > 0 && !props.profile.favorited_comments.includes(comment._id)) {
            likeBtnDisabled = false
        }
    }

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
                    <button 
                        disabled={likeBtnDisabled} 
                        className={`btn btn-light`} 
                        onClick={handleLike}
                    >
                        <span style={{color: likeBtnColor}} className={`material-icons-outlined ${styles.btn}`}>compost</span>{comment.likeLevel}
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