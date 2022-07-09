import { useState } from 'react'
import styles from './ForumPost.module.css'

export default function PostEdit({post, handlePostEdit, handlePostDelete}) {
    
    const [postText, setPostText] = useState(post.content)

    const handleChange = (evt) => {
        setPostText(evt.target.value)
    }

    const handleSubmit = () => {
        handlePostEdit(postText)
    }

    const handleReset = () => {
        setPostText(post.content)
    }

    return(
        <>
            <button
                type="button"
                data-toggle="modal"
                data-target={`#${post._id}`}
                className={`btn btn-light`}
            >
                <span className={`material-icons-outlined ${styles.btn}`}>edit</span>
            </button>
            <div 
                className="modal fade"
                id={`${post._id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="postModalLabel"
                aria-hidden="true"
                onClick={handleReset}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="postModalLabel">Edit Post</h5>
                            <button onClick={handleReset} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="editInput" className="visually-hidden d-none">Edit Post</label>
                                    <textarea 
                                        type="text" 
                                        id="editInput" 
                                        className="form-control"
                                        value={postText}
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
                                disabled={postText !== '' ? false : true}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handlePostDelete}
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