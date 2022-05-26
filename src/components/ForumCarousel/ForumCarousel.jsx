import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ForumCarousel.css";

const ForumCarousel = (props) => {
  const forumPosts = props.forumPostsData.slice(0, 12).map((post, i) => {
    const likeCount = post.likeLevel ? post.likeLevel : 0;
    const commentCount = post.comments ? post.comments.length : 0;
    const date = post.createdAt;
    const dateText =
      date.slice(5, 7) + "/" + date.slice(8, 10) + "/" + date.slice(0, 4);

    return (
             <a
            // className="read-more"
            href={`/forum/${post.category._id}/${post._id}`}
          >
      <article key={post._id} className="carousel-card discuss-card">
        <p className="discuss-creator">
          {post.owner.name} &#8901; {dateText}
        </p>
        <h3 className="discuss-heading">{post.title}</h3>
        {post.media && (
          <img className="discuss-img" src={post.media} alt={post.title} />
        )}
        <div className="carousel-card-content">
        {!post.media && (
          <p className="discuss-content">{post.content}</p>
          )
          }
     {/* Read more */}
          <div className="discuss-feedback">
            <span className={`material-icons-outlined discuss-likes`}>
              compost
            </span>
            {likeCount}
            <p></p>
            <span className={`material-icons-outlined discuss-comments`}>
              chat_bubble_outline
            </span>
            {commentCount}
          </div>
        </div>
      </article>
          </a>
    );
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      partialVisible={true}
      // autoPlay={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // shouldResetAutoplay={true}
      // autoPlaySpeed={1000}
      responsive={responsive}
      showDots={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // draggable={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="forum-carousel"
      // itemClass="carousel-item-padding-40-px"
      // sliderClass='multi-carousel-track'
    >
      {forumPosts}
    </Carousel>
  );
};

export default ForumCarousel;
