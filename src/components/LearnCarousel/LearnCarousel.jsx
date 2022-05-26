import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './LearnCarousel.css';

import videoOne from '../../../src/videos/pexels-shvets-production-7551495.mp4';
import videoTwo from '../../../src/videos/pexels-blue-bird-7241746.mp4';
import videoThree from '../../../src/videos/pexels-los-muertos-crew-8853489.mp4';
import videoFour from '../../../src/videos/pexels-sarah-chai-7250834.mp4';

const LearnCarousel = () => {

  
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
    <Carousel
      partialVisible={true}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <article className='carousel-card learn-card'>
        <video src={videoOne} preload='auto' autoPlay type='video/mp4' width='100%' />
        <div className='carousel-card-content'>
          <p className='learn-creator'>Ally Dean &#8901; 5/3/2022</p>
          <h3 className='learn-heading'>5 Sustainability Tips and Tricks</h3>
          <div className='learn-feedback'><span className={`material-icons-outlined discuss-likes`}> compost</span> 1.4k<p></p>
          <span className={`material-icons-outlined discuss-comments`}> chat_bubble_outline</span> 300</div>
        </div>
      </article>
      <article className='carousel-card learn-card'>
        <video src={videoTwo} preload='auto' autoPlay type='video/mp4' width='100%' />
        <div className='carousel-card-content'>
          <p className='learn-creator'>Dean Wright &#8901; 3/15/2022</p>
          <h3 className='learn-heading'>Eco Friendly Commute</h3>
          <div className='learn-feedback'><span className={`material-icons-outlined discuss-likes`}> compost</span>2.4k<p></p> <span className={`material-icons-outlined discuss-comments`}> chat_bubble_outline</span>100</div>
        </div>
      </article>
      <article className='carousel-card learn-card'>
        <video src={videoThree} preload='auto' autoPlay type='video/mp4' width='100%' />
        <div className='carousel-card-content'>
          <p className='learn-creator'>Jerome Delaney &#8901; 4/23/2022</p>
          <h3 className='learn-heading'>Solar Basics</h3>
          <div className='learn-feedback'><span className={`material-icons-outlined discuss-likes`}> compost</span>1.8k<p></p> <span className={`material-icons-outlined discuss-comments`}> chat_bubble_outline</span>350</div>
        </div>
      </article>
      <article className='carousel-card learn-card'>
        <video src={videoFour} preload='auto' autoPlay type='video/mp4' width='100%' />
        <div className='carousel-card-content'>
          <p className='learn-creator'>Ally Dean &#8901; 5/3/2022</p>
          <h3 className='learn-heading'>5 Sustainability Tips and Tricks</h3>
          <div className='learn-feedback'><span className={`material-icons-outlined discuss-likes`}> compost</span>1.4k<p></p><span className={`material-icons-outlined discuss-comments`}> chat_bubble_outline</span>300</div>
        </div>
      </article>
    </Carousel>
  )
}

export default LearnCarousel;
