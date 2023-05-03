import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./blogCarousel.css";

import { blogDatas } from "../../../mock/blog";
import BlogCard from "../blog-card/BlogCard";

const items = blogDatas.map(({ id, title, date, text, img }) => {
  return <BlogCard key={id} title={title} img={img} text={text} cost={date} />;
});

const BlogCarousel = () => {
  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        mouseTracking
        infinite
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </div>
  );
};
export default BlogCarousel;
