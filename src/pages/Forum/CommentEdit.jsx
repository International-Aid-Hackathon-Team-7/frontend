import { useState} from 'react'
import styles from './ForumPost.module.css'

export default function CommentEdit({comment, handleEdit, handleDelete}) {

    const [commentText, setCommentText] = useState(comment.comment_content)

    const handleChange = (evt) => {
        setCommentText(evt.target.value)
    }

    const handleSubmit = () => {
        handleEdit(commentText)
    }

    const handleReset = () => {
        setCommentText(comment.comment_content)
    }

    return(
        <>
        <button 
            type="button" 
            data-toggle="modal" 
            data-target={`#${comment._id}`}
            className={`btn btn-light`}
        >
            <span className={`material-icons-outlined ${styles.btn}`}>edit</span>
        </button>
        <div 
            className="modal fade"
            id={`${comment._id}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="commentModalLabel"
            aria-hidden="true"
            onClick={handleReset}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="commentModalLabel">Edit Comment</h5>
                        <button onClick={handleReset} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="editInput" className="visually-hidden d-none">Edit Comment</label>
                                <textarea 
                                    type="text" 
                                    id="editInput" 
                                    className="form-control"
                                    value={commentText}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={handleReset}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            data-dismiss="modal"
                            disabled={commentText !== '' ? false : true}
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleDelete}
                            data-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}