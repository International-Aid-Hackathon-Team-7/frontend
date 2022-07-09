import { Link } from 'react-router-dom';
import styles from './Posts.module.css';

export default function Posts(props) {

    const posts = props.posts.map((post) => {
        const date = post.createdAt;
        const dateText = date.slice(5,7) + '/' + date.slice(8,10) + '/' + date.slice(0,4);

        let categoryId = post.category._id
        if(categoryId === undefined) {
            categoryId = post.category
        }
        return(
            <div 
            className="card"
            key={post._id} 
            id={post._id}
            // onClick={props.selectTopPost}
            >
                <div className="card-header bg-transparent">
                    <span>
                        {post.isAnonymous ? "Anonymous" : post.owner.name} | {dateText}
                    </span>
                </div>
                <div className="card-body">
                    <Link to={`/forum/${categoryId}/${post._id}`}>
                        <div className="card-title">
                            {post.title}
                        </div>
                    </Link>
                    {!post.media && <p className="card-text" style={{marginLeft: "0", marginRight: "0"}}>{post.content}</p>}
                </div>
                {post.media && <img className={`card-img-btm ${styles.postImg}`} src={post.media} alt={post.title}/>}
                <div className={`card-footer bg-transparent ${styles.cardFooter}`}>
                    <div className={styles.icons}>
                        <span className={`material-icons-outlined ${styles.likes}`}>compost</span> {post.likeLevel ? post.likeLevel : 0}
                        <span className={`material-icons-outlined ${styles.comments}`}>chat_bubble_outline</span>{post.comments.length}
                    </div>
                </div>
            </div>
        )}
    );

    return(
        <>
         {posts}
        </>
    )
}