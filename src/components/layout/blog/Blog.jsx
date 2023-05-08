import React from "react";

import "./blog.css";

import SectionsHeader from "../../atoms/sections-header/SectionsHeader";
import BlogCarousel from "../../atoms/blog-carousel/BlogCarousel";

const Blog = () => {
  return (
    <div className="blog container">
      <SectionsHeader
        children={{
          title: "Blog",
          text: "Ish topish va professional sohalardagi maqalalar",
          btnText: "maqolalar",
        }}
      />

      <div className="content__blog">
        <BlogCarousel />
      </div>
    </div>
  );
};

export default Blog;
