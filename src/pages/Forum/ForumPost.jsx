export default function ForumPost(props) {
    const post = props.post
    return(
        <>
            <h1>{post.title}</h1>
            {/* <h6>Category: {props.category.category}</h6> */}
            <h6>Owner: {post.owner}</h6>
            <p>{post.content}</p>
        </>
    )
}