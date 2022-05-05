import { useState, useEffect } from 'react'
import styles from './Forum.module.css'
import * as postService from '../../services/postServices'
import CategoryCarousel from './CategoryCarousel'
import PostFeed from './PostFeed'
import TopPosts from './TopPosts'
import ForumPost from './ForumPost'

export default function Forum () {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('topPosts');
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState('')

  const changeCategory = (evt) => {
    const index = categories.map(category => category._id).indexOf(evt.target.id)
    const cat = categories[index];
    setCategory(cat)
    if(post !== '') {
      setPost('')
    }
  }
  
  const resetCategory = (evt) => {
    setCategory('topPosts')
  }
  
  const selectPost = (evt) => {
    const index = category.posts.map(post => post._id).indexOf(evt.currentTarget.id)
    setPost(category.posts[index])
  }
  
  const selectTopPost = (evt) => {
    const index = posts.map(post => post._id).indexOf(evt.currentTarget.id)
    setPost(posts[index])
  }
  
  useEffect(() => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
  }, []);
  
  useEffect(() => {
      postService.getAllPosts()
      .then(posts => setPosts(posts))
  }, [])

  const loaded = () => {
    return(
      <main className={styles.container}>
        <h1>Forum</h1>
            <CategoryCarousel categories={categories} changeCategory={changeCategory}/>
            {category !== 'topPosts' ?
            <>
              {post === '' ?
                <>
                  <button onClick={resetCategory}>See Latest Posts</button> 
                  <PostFeed category={category} selectPost={selectPost}/>
                </>
                :
                <ForumPost post={post} category={category}/>
              }
            </>
            :
            <>
              {post === '' ?
                <>
                  <TopPosts posts={posts} selectTopPost={selectTopPost}/>
                </>
                :
                <>
                  <ForumPost post={post} category={category}/>
                </>
              }
          </>
        }
      </main>
    )
  }

  const loading = () => {
    return(
      <main className={styles.container}>
      <h1>Forum</h1>
      <h2>Loading...</h2>
    </main>
    )
  }

  return categories.length > 0 ? loaded() : loading();
}

