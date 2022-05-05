import { useState, useEffect } from 'react'
import styles from './Forum.module.css'
import * as postService from '../../services/postServices'
import CategoryCarousel from './CategoryCarousel'
import PostFeed from './PostFeed'

export default function Forum () {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const changeCategory = (evt) => {
    console.log(evt.target)
    const index = categories.map(category => category._id).indexOf(evt.target.id)
    const cat = categories[index];
    console.log(cat);
    setCategory(cat)
  }

  
  useEffect(() => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
  }, []);
  
  return (
    <main className={styles.container}>
      <h1>Forum</h1>
     {categories.length &&
      <>
        <CategoryCarousel categories={categories} changeCategory={changeCategory}/>
        {category !== '' ?
          <PostFeed category={category} />
          :
          <p>No Posts In this Category</p>
        }
      </>
     }
    </main>
  )
}

