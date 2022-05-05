export default function ForumPost(props) {

    return(
        <>
            <h1>{props.post.title}</h1>
            {/* <h6>Category: {props.category.category}</h6> */}
            <h6>Owner: {props.post.owner.name}</h6>
            <p>{props.post.content}</p>
        </>
    )
}