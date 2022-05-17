import { Link, useParams } from 'react-router-dom'

export default function PostFeed({ categories, selectPost, setCategory}) {

    let { categoryId } = useParams();

    const loading = () => {
        return(
            <h1>Loading...</h1>
            )
        }
        
    const loaded = () => {
        const index = categories.map(category => category._id).indexOf(categoryId);
        const category = categories[index];
            
        return(
            <>
            <h1>{category.category}</h1>
            {category.posts.length > 0 ?
            <>
                {category.posts.map((post) => (
                    <div 
                        key={post._id}
                        id={post._id}
                        >
                            <Link to={`/forum/${category._id}/${post._id}`}>
                                {/* {post.media &&
                                    <img src={post.media} alt={post.title} style={{ width: "250px", height: "auto"}}/>
                                } */}
                                <span>
                                {post.owner.name}
                                </span>
                                <h2>
                                {post.title}

                                </h2>
                            </Link>
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

    return categories ? loaded() : loading();
}