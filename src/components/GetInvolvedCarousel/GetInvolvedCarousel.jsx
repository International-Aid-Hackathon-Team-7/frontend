import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './GetInvolvedCarousel.css';

const GetInvolvedCarousel = () => {

  
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
      <article className='learn-card'>
        {/* <img src={} /> */}
        <p className='learn-creator'>Ally Dean &#8901; 5/3/2022</p>
        <h3 className='learn-heading'>5 Sustainability Tips and Tricks</h3>
        <div className='learn-feedback'>1.4k 300</div>
      </article>
      <article className='learn-card'>
        {/* <img src={} /> */}
        <p className='learn-creator'>Dean Wright &#8901; 3/15/2022</p>
        <h3 className='learn-heading'>Eco Friendly Commute</h3>
        <div className='learn-feedback'>2.4k 100</div>
      </article>
      <article className='learn-card'>
        {/* <img src={} /> */}
        <p className='learn-creator'>Jerome Delaney &#8901; 4/23/2022</p>
        <h3 className='learn-heading'>Solar Basics</h3>
        <div className='learn-feedback'>1.8k 350</div>
      </article>
    </Carousel>
  )
}

export default GetInvolvedCarousel;
