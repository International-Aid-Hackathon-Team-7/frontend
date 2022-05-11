import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GetInvolvedCarousel.css";

const GetInvolvedCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 69, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Carousel
      partialVisible={true}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <article className="getInvolved">
        <a href="https://www.oceansnorth.org/en/">
          <img
            className="orgImage"
            src="https://bridge-app-bucket.s3.amazonaws.com/oceansnorth_donate+1.png"
            alt="Ocean North thumbnail"
          />
          <p className="learn-creator">Oceans North</p>
          <p className="learn-heading">
            Supporting marine conservations in partnership with Indigenous and
            coastal communities.
          </p>
        </a>
        <form
          className="action-button1"
          action="https://www.oceansnorth.org/en/"
        >
          <input type="submit" value="Donate" />
        </form>
      </article>

      <article className="getInvolved">
        <a href="https://yourcier.org/">
          <img
            src="https://bridge-app-bucket.s3.amazonaws.com/CIER-5.png"
            alt="Centre for indigenous environmental resource logo"
          />
        </a>
        <h2 className="learn-creator">
          Centre for Indigenous Environmental Resources (CIER)
        </h2>
        <p className="learn-heading2">
          CIER’s ultimate impact will be realized when First Nations in Canada
          are leaders of positive environmental change.
        </p>
        <form className="action-button2" action="https://yourcier.org/">
          <input type="submit" value="Donate" />
        </form>
      </article>
    </Carousel>
  );
};

export default GetInvolvedCarousel;
