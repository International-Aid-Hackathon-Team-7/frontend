import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './ForumPost.module.css'
// import * as postService from '../../services/postServices'
// import * as profileService from '../../services/profileService'
// import PostEdit from './PostEdit'
// import { useNavigate } from "react-router-dom";
import CommentForm from './CommentForm'
import Comment from './Comment'
import Post from './Post'
// import * as postService from '../../services/postServices'

export default function ForumPost(props) {

    const [posts, setPosts] = useState([]);

    let {postId} = useParams();

    useEffect(() => {
        setPosts(props.posts)
    }, [props.posts])

    const loading = () => {
        return(
            <h1>Loading...</h1>
        )
    }

    const loaded = () => {
        const index = posts.map(post => post._id).indexOf(postId)
        const post = posts[index];

        let comments = "No comments"
        if(post.comments && post.comments.length > 0) {
            comments = post.comments.map((comment) => {
                return(
                    <Comment 
                        key={comment._id} 
                        user={props.user} 
                        profile={props.profile} 
                        post={post} 
                        comment={comment} 
                        setPosts={setPosts} 
                        updatePosts={props.updatePosts} 
                        updateCategories={props.updateCategories}
                        updateProfile={props.updateProfile}
                    />
                )
            })

        }
        return(
            <div>
                <h1>{post.title}</h1>
                <Post
                    user={props.user}
                    profile={props.profile}
                    post={post}
                    updatePosts={props.updatePosts} 
                    updateCategories={props.updateCategories}
                    updateProfile={props.updateProfile}
                />
                <div className={styles.commentsContainer}>
                    <h4>Comments</h4>
                    {}
                    {comments}
                </div>
                {}
                <CommentForm 
                    user={props.user} 
                    post={post} 
                    setPosts={setPosts} 
                    updatePosts={props.updatePosts} 
                    updateCategories={props.updateCategories}
                />
            </div>
        )
    }

    return posts.length > 0 ? loaded() : loading()

}