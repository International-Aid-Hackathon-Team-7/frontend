import {useState, useEffect} from 'react'
import * as postService from '../../services/postServices'

export default function TopPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAllPosts()
        .then(posts => setPosts(posts))
    }, [])

    const numPosts = posts.length;
    let lastTenPosts = [];
    const lowerBound = numPosts >= 10 ? numPosts - 11 : 0;
    for(let i = numPosts - 1; i > lowerBound; i--) {
        lastTenPosts.push(posts[i])
    }
    const topPosts = lastTenPosts.map((post) => (
        <div key={post._id} id={post._id}>{post.title}</div>
    ))
    return(
        <>
        <h1>Top Posts</h1>
        <div>{topPosts}</div>
        </>
    )
}
