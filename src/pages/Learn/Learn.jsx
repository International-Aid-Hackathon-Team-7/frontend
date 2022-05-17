// import { useState } from 'react'
import videoOne from '../../../src/videos/pexels-shvets-production-7551495.mp4';
import videoTwo from '../../../src/videos/pexels-blue-bird-7241746.mp4';
import videoThree from '../../../src/videos/pexels-los-muertos-crew-8853489.mp4';
import videoFour from '../../../src/videos/pexels-sarah-chai-7250834.mp4';
import styles from './Learn.module.css';

const Climate = props => {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
    }
  
    return (
      <>
      <div className={styles.learnCard}>
          <video className='learn-video' src={videoOne} preload='auto' autoPlay type='video/mp4' width='100%' />
          <div className='learn-card-content'>
            <p className={styles.learnCreator}>Ally Dean &#8901; 5/3/2022</p>
            <h3 className={styles.learnHeading}>5 Sustainability Tips and Tricks</h3>
            <div className={styles.learnFeedback}>1.4k 300</div>
          </div>
        </div>
        <br></br>
        <div className={styles.learnCard}>
          <video className='learn-video' src={videoTwo} preload='auto' autoPlay type='video/mp4' width='100%'  />
          <div className='learn-card-content'>
            <p className={styles.learnCreator}>Dean Wright &#8901; 3/15/2022</p>
            <h3 className={styles.learnHeading}>Eco Friendly Commute</h3>
            <div className={styles.learnFeedback}>2.4k 100</div>
          </div>
        </div>
        <br></br>
        <div className={styles.learnCard}>
          <video className='learn-video' src={videoThree} preload='auto' autoPlay type='video/mp4' width='100%' />
          <div className='learn-card-content'>
            <p className={styles.learnCreator}>Jerome Delaney &#8901; 4/23/2022</p>
            <h3 className={styles.learnHeading}>Solar Basics</h3>
            <div className={styles.learnFeedback}>1.8k 350</div>
          </div>
        </div>
        <br></br>
        <div className={styles.learnCard}>
          <video className='learn-video' src={videoFour} preload='auto' autoPlay type='video/mp4' width='100%'/>
          <div className='learn-card-content'>
            <p className={styles.learnCreator}>Ally Dean &#8901; 5/3/2022</p>
            <h3 className={styles.learnHeading}>5 Sustainability Tips and Tricks</h3>
            <div className={styles.learnFeedback}>1.4k 300</div>
          </div>
        </div>
      </>
    )
  }

export default Climate