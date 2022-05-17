import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './Forum.module.css'
import * as postService from '../../services/postServices'
import CategoryCarousel from './CategoryCarousel'
import PostFeed from './PostFeed'
import TopPosts from './TopPosts'
import ForumPost from './ForumPost'

export default function Forum ({forumPostsData}) {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
  }, []);

  const loaded = () => {
    return(
      <main className={styles.container}>
        <h1>Forum</h1>
          {/* <CategoryCarousel categories={categories}/> */}
          <CategoryCarousel categories={categories} />
          <Routes>
            <Route 
              path="/"
              element={<TopPosts posts={forumPostsData} />}
            />
            <Route 
              path="/:categoryId"
              element={<PostFeed categories={categories} />}
            />
            <Route 
              path="/:categoryId/:postId"
              element={<ForumPost posts={forumPostsData}/>}
            />
          </Routes>
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

