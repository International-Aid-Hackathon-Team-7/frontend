import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Link } from 'react-router-dom';

export default function CategoryCarousel(props) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const categoryDivs = props.categories.map((category) => (
        <div 
            key={category._id}
            id={category._id}
        >
          <Link to={`${category._id}`}>
            {category.category}
          </Link>
        </div>
    ))

    return(
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            arrows={true}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Link to="/forum">Latest Posts</Link>
          </div>
          {categoryDivs}
        </Carousel>
        )
}