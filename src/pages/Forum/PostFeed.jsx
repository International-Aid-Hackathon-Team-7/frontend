export default function PostFeed(props) {
    console.log(props);
    return(
        <>
            <h1>{props.category.category}</h1>
            {props.category.posts.map((post) => (
                <div key={post._id}>{post.title}</div>
            ))}
        </>
    )
}