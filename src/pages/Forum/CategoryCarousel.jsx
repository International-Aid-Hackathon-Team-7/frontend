import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import 'react-multi-carousel/lib/styles.css'
// import styles from './Forum.module.css'

import { Link } from 'react-router-dom';

export default function CatCarousel(props) {

    const settings = {
        className: 'category-carousel',
        // centerMode: true,
        dots: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // rows: 2,
        variableWidth: true,
      };

    const categoryLinks = props.categories.map((category) => (
        // <div 
        //     key={category._id}
        //     id={category._id}
        // >
        //   <Link to={`${category._id}`}>
        //     {category.category}
        //   </Link>
        // </div>
        <div className='btn btn-outline-primary' key={category._id}>
          <Link to={`${category._id}`}>{category.category}</Link>
        </div>
        // <Link className="btn btn-outline-primary rounded-pill" key={category._id} id={category._id} to={`${category._id}`}>{category.category}</Link>
    ))

    return(
        <Slider {...settings}>
          <Link className="btn btn-outline-info" to="/forum">Latest Posts</Link>
          {/* <div className='btn btn-outline-info'>
            <Link to="/forum">Latest Posts</Link>
          </div> */}
          {categoryLinks}
        </Slider>
        )
}