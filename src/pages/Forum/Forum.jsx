import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styles from './Forum.module.css'
import * as postService from '../../services/postServices'
import CategoryCarousel from './CategoryCarousel'
import PostFeed from './PostFeed'
import TopPosts from './TopPosts'
import ForumPost from './ForumPost'

export default function Forum ({forumPostsData, user, profile, updatePosts, updateProfile}) {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
  }, []);

  const updateCategories = () => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
  }

  const loaded = (
    <>
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
          element={
            <ForumPost 
              posts={forumPostsData} 
              user={user} 
              profile={profile} 
              updatePosts={updatePosts} 
              updateCategories={updateCategories}
              updateProfile={updateProfile}
            />
          }
        />
      </Routes>
    </>  
  )

  const loading = (
    <h2 style={{textAlign: "center"}}>Loading...</h2>
  )

  return(
    <main className={styles.container}>
      <div className={styles.header}>
          <h1 className={styles.h1}>Discuss</h1>
          {user && 
            <Link 
              className={`btn btn-outline-dark ${styles.roundedcircle}`} 
              to='/createpost'
            >
              <p>+</p>
            </Link>
          }
       </div>
       {categories.length > 0 ? loaded : loading}
    </main>
  )
}

