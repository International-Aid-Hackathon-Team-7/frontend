import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import videoOne from '../../../src/videos/pexels-los-muertos-crew-8853484.mp4';
import videoTwo from '../../../src/videos/pexels-sarah-chai-7250834.mp4';
import videoThree from '../../../src/videos/pexels-shvets-production-7551495.mp4';

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
    <Carousel partialVisible={true} responsive={responsive}>
      <video src={videoOne} preload='auto' autoPlay type='video/mp4' width='85%' />
      <video src={videoTwo} preload='auto' autoPlay type='video/mp4' width='85%' />
      <video src={videoThree} preload='auto' autoPlay type='video/mp4' width='85%' />
    </Carousel>
  )
}

export default LearnCarousel;
