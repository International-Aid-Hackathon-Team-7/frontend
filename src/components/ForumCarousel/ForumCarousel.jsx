import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ForumCarousel = (props) => {



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      partialVisible={true}
      autoPlay={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      responsive={responsive}
      showDots={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // shouldResetAutoplay={true}
      // draggable={false}
      keyBoardControl={true}
      // infinite={true}
      // autoPlaySpeed={1000}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      sliderClass='multi-carousel-track'
      // containerClass='multi-carousel-list'

    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
    </Carousel>
  )
}

export default ForumCarousel;
