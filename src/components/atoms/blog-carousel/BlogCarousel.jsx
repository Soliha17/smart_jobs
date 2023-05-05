import React, { useEffect, useState } from "react";

import "./blogCarousel.css";

import { blogDatas } from "../../../mock/blog";
import BlogCard from "../blog-card/BlogCard";
import { Carousel } from "antd";

const items = blogDatas.map(({ id, title, date, text, img }) => {
  return <BlogCard key={id} title={title} img={img} text={text} cost={date} />;
});

const BlogCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      if (windowWidth <= 800) {
        setSlidesToShow(1);
      } else if (windowWidth <= 1300) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div>
      <Carousel slidesToShow={slidesToShow}>
        {items}
      </Carousel>
    </div>
  );
};
export default BlogCarousel;
