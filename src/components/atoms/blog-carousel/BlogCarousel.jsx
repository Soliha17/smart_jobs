import React from "react";

import "./blogCarousel.css";

import { blogDatas } from "../../../mock/blog";
import BlogCard from "../blog-card/BlogCard";
import { Carousel } from "antd";

const items = blogDatas.map(({ id, title, date, text, img }) => {
  return <BlogCard key={id} title={title} img={img} text={text} date={date} />;
});

const BlogCarousel = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Carousel {...settings}>{items}</Carousel>
    </div>
  );
};
export default BlogCarousel;
