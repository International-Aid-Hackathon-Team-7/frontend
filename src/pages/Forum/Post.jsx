import { useState, useEffect, useRef } from 'react'
import styles from './ForumPost.module.css'
import * as postService from '../../services/postServices'
import * as profileService from '../../services/profileService'
import PostEdit from './PostEdit'
import { useNavigate } from "react-router-dom";

export default function Post(props) {

    const [post, setPost] = useState(props.post);

    const updatePostRef = useRef();
    const navigate = useNavigate();

    // almost identical to handleLike function for comments. Use only once?
    const handleLike = async (evt) => {
        if(post.likeLevel !== undefined) {
            const likes = post.likeLevel;
            const updatedLikes = likes + 1;
            setPost({
                ...post,
                likeLevel: updatedLikes,
                favorited_by: [...post.favorited_by, props.profile._id],
            })
        } else {
            setPost({
                ...post,
                likeLevel: 1,
                favorited_by: [...post.favorited_by, props.profile._id],
            })
        }
        const favPosts = props.profile.favorited_posts ? [...props.profile.favorited_posts, post._id] : [post._id]
        const updatedProfile = {
            ...props.profile,
            favorited_posts: favPosts
        }
        await profileService.editProfile(props.profile._id, updatedProfile)
    }

    const handlePostEdit = (newPostText) => {
        setPost({
            ...post,
            content: newPostText,
        })
    }

    const handlePostDelete = async () => {
        const categoryId = post.category._id;
        await postService.deletePost(categoryId, post._id);
        props.updatePosts();
        props.updateCategories();
        props.updateProfile();
        navigate("/forum");
    }

    const updatePostCaller = async () => {
        const categoryId = post.category._id;
        await postService.updatePost(categoryId, post._id, post);
        props.updatePosts();
        props.updateCategories();
        props.updateProfile();
    }

    useEffect(() => {
        updatePostRef.current = updatePostCaller;
    })

    useEffect(() => {
        if(props.user) {
            updatePostRef.current();
        }
    }, [post, props.user])

    const likeBtnColor = props.profile && props.profile.favorited_posts.length && props.profile.favorited_posts.some(({_id}) => _id === post._id) ? "green" : "black";
    let likeBtnDisabled = true;
    if(props.profile) {
        if(props.profile.favorited_posts.length !== undefined && !props.profile.favorited_posts.some(({_id}) => _id === post._id)) {
            likeBtnDisabled = false;
        }
    }

    const loading = () => {
        return(
            <h1>Loading...</h1>
        )
    }

    const loaded = () => {
   
        const date = post.createdAt;

        const dateText = date.slice(5,7) + '/' + date.slice(8,10) + '/' + date.slice(0,4);
        return(
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
                            <button
                                style={{display: "flex", alignItems: "center"}}
                                disabled={likeBtnDisabled}
                                className={`btn btn-light`}
                                onClick={handleLike}
                            >
                                <span style={{color: likeBtnColor}} className={`material-icons-outlined ${styles.btn}`}>compost</span> Like 
                            </button>
                        </div>
                        <div className={`col sm-6 ${styles.linkCol}`}>
                            <span className={`material-icons-outlined ${styles.btn}`}>chat_bubble_outline</span>Comment
                        </div>
                        <div className={`col sm-12 ${styles.linkCol}`}>
                            <span className={`material-icons-outlined ${styles.btn}`}>share</span> Share
                        </div>
                    </div>
                </div>
                {/* <div className={`card-footer bg-transparent ${styles.cardFooter}`}> */}
                <div className={`card-footer bg-transparent ${styles.buttons}`}>
                    <div className="row">
                        <div className={`col ${styles.postLike}`}>
                            <span style={{color: likeBtnColor}} className={`material-icons-outlined ${styles.likes}`}>compost</span> {post.likeLevel ? post.likeLevel : 0}   
                        </div>
                        <div className={`col ${styles.postEdit}`}>
                        {props.user && props.user.profile === post.owner._id &&
                            <PostEdit post={post} handlePostEdit={handlePostEdit} handlePostDelete={handlePostDelete}/>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return post ? loaded() : loading()

}