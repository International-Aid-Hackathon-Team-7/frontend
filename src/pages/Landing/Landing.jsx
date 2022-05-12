// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import * as postService from '../../services/postServices'
import ForumCarousel from '../../components/ForumCarousel/ForumCarousel';
import LearnCarousel from '../../components/LearnCarousel/LearnCarousel';
import GetInvolvedCarousel from '../../components/GetInvolvedCarousel/GetInvolvedCarousel';

import styles from './Landing.module.css'

export default function Landing ({ user, forumPostsData }){
  // const [forumPostsData , setForumPostsData] = useState({});
  // const [learningPostsData , setLearningPostsData] = useState({});

  // useEffect(() => {
  //   postService.getAllPosts().then((posts) => {
  //     // console.log({posts});
  //     const forumPosts = posts.filter(post => post.category !== "Learning");
  //     console.log(forumPosts);
  //     setForumPostsData(forumPosts);
  //   })
  // },[]);


  
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <section className='learning'>
        <h2>
          <Link className="landing-page-link" to="/learn">Learn &#62;</Link>
        </h2>
        <LearnCarousel />        
      </section>
      <section className='forum-posts'>
        <h2>
          <Link className="landing-page-link" to="/forum">Discuss &#62;</Link>
        </h2>
        {
          forumPostsData.length &&
          <ForumCarousel forumPostsData={forumPostsData}  />
        }
      </section>
      <section className='get-involved'>
        <h2>
          <Link className="landing-page-link" to="/about">Get Involved &#62;</Link>
        </h2>
        <GetInvolvedCarousel />  
      </section>
      
    </main>
  )
}

