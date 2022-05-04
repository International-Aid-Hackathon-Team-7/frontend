import styles from './Landing.module.css'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'

export default function Landing ({ user }){
  function ControlledCarousel() {
    const [index, setIndex] = useState(1);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={""} prevIcon={""} nextLabel={""}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://media.giphy.com/media/fsnF17BpCvjmE9SMTh/giphy.gif?text=First slide&bg=373940"
            alt="First slide"
            width={100}
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://media.giphy.com/media/5xtDarwd6J9RErfp5aU/giphy.gif?text=Second slide&bg=282c34"
            alt="Second slide"
            width={100}
            height={500}
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  carouselimg"
            src="https://media.giphy.com/media/Kf0cxquEm64pu0IuCw/giphy.gif?text=Third slide&bg=20232a"
            alt="Third slide"
            width={100}
            height={500}
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <ControlledCarousel/>
      
    </main>
  )
}

