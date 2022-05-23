import styles from './ForumPost.module.css'
import { useState } from 'react'
import { createComment, getAllPosts } from "../../services/postServices"

export default function CommentForm({user, post, setPosts}) {

    const [comment, setComment] = useState(
        {
            comment_content: '',
        }
    )

    const handleChange = (evt) => {
        setComment({comment_content: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await createComment(post.category._id, post._id, comment)
        const posts = await getAllPosts();
        setPosts(posts);
        setComment({comment_content: ''})
    }

    return(
        <div className={`fixed-bottom ${styles.commentForm}`}>
        <form className={`row align-items-center mb-3 w-100`}>
            <div className="col-10">
                <label htmlFor="commentInput" className="visually-hidden d-none">Comment</label>
                <input 
                    type="text" 
                    id="commentInput" 
                    name="comment"
                    disabled={user ? false : true}
                    value={comment.comment_content}
                    className="form-control" 
                    placeholder={user ? "Write a comment..." : "Must be logged in to comment..."}
                    onChange={handleChange}
                />
            </div>
            <div className="col-2">
                <button 
                    type="submit" 
                    className="btn"
                    onClick={handleSubmit}
                    disabled={
                        comment.comment_content !== '' ? false : true
                    }
                >
                    Comment
                </button>
            </div>
        </form>
    </div>
    )
}