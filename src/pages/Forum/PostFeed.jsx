import { useParams } from 'react-router-dom'
import Posts from './Posts'

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
            <Posts posts={category.posts} />
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