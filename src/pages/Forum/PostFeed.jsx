export default function PostFeed(props) {

    return(
        <>
            <h1>{props.category.category}</h1>
            {props.category.posts.length > 0 ?
            <>
                {props.category.posts.map((post) => (
                    <div 
                        key={post._id}
                        id={post._id}
                        onClick={props.selectPost}
                        >
                            {post.title}
                    </div>
                ))}
            </>
            :
            <>
                <p>No Posts in this Category</p>
            </>
            }
        </>
               
    )
}