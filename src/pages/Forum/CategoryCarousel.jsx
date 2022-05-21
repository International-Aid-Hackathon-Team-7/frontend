import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Forum.module.css'

import { Link } from 'react-router-dom';

export default function CatCarousel(props) {

  const responsive = [
    {
      breakpoint: 426,
      settings: {
        dots: false,
        arrows: false,
        draggable: true
      }
    }
  ]

  const settings = {
    className: styles.categorycarousel,
    centerMode: true,
    dots: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    responsive: responsive,
  };

  const categoryLinks = props.categories.map((category) => (
      <div className={styles.category} key={category._id}>
        <Link className="btn btn-outline-primary" to={`${category._id}`}>{category.category}</Link>
      </div>
  ))

  return(
    <Slider {...settings}>
      <div className={styles.category}>
        <Link className="btn btn-outline-info" to="/forum">Latest Posts</Link>
      </div>
      {categoryLinks}
    </Slider>
  )
}