import { useParams } from 'react-router-dom'

export default function ForumPost(props) {

    let { postId } = useParams();
    console.log(postId);


    const loading = () => {
        return(
            <h1>Loading...</h1>
        )
    }

    const loaded = () => {
        const index = props.posts.map(post => post._id).indexOf(postId)
        const post = props.posts[index];
        return(
            <>
            <h1>{post.title}</h1>
            {/* <h6>Category: {props.category.category}</h6> */}
            <h6>Owner: {post.owner.name}</h6>
            <p>{post.content}</p>
        </>
        )
    }
    return props.posts.length ? loaded() : loading()
}