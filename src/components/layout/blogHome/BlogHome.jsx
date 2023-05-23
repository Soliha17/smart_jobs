import React from "react";

import "./blogHome.css";

import SectionsHeader from "../../atoms/sections-header/SectionsHeader";
import BlogCarousel from "../../atoms/blog-carousel/BlogCarousel";

const BlogHome = () => {
  return (
    <div className="home-blog container">
      <SectionsHeader
        children={{
          title: "Blog",
          text: "Ish topish va professional sohalardagi maqalalar",
          btnText: "maqolalar",
        }}
      />

      <div className="content__home-blog">
        <BlogCarousel />
      </div>
    </div>
  );
};

export default BlogHome;
