import { useState, useEffect } from 'react'
import styles from './Forum.module.css'
import * as postService from '../../services/postServices'
// import CategoryCarousel from './CategoryCarousel'

export default function Forum () {
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    postService.getAllCategories()
    .then(categories => setCategories(categories));
    console.log(categories);
  }, []);

  return (
    <main className={styles.container}>
      <h1>This is where the forum will be</h1>
      {/* <CategoryCarousel categories={categories}/> */}
    </main>
  )
}

