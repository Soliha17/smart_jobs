import { Breadcrumb, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "../../assets/images/search-hero-input.svg";

import "./blog.css";
import BigBlogCard from "../../components/atoms/big-blog-card/BigBlogCard";
import BlogCard from "../../components/atoms/blog-card/BlogCard";

import { blogDatas } from "../../mock/blog";
import { threeBlogDatas } from "../../mock/threeBlogCard";
import Footer from "../../components/layout/footer/Footer";

const Blog = () => {
  const { Search } = Input;
  const [inputVisible, setInputVisible] = useState(false);

  const onSearch = (value) => console.log(value);

  const onButtonClick = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div className="blog-page">
      <div className="blog">
        <div className="container">
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>Bosh sahifa</Link>,
              },
              {
                title: "Blog",
              },
            ]}
          />
          <div className="header__blog">
            <div className="top-header__blog">
              <p className="title">Blog</p>
              <Search
                className={`input-group__blog ${
                  inputVisible ? "input-group__blog--visible" : ""
                }`}
                placeholder="Qidiring"
                onSearch={onSearch}
                enterButton={
                  <button className="ant-btn" onClick={onButtonClick}>
                    <img src={SearchIcon} alt="SearchIcon" />
                  </button>
                }
                prefix={<img src={SearchIcon} alt="SearchIcon" />}
              />
            </div>
            <div className="bottom-header__blog">
              <p className="circle-text__blog">Kompaniyalar</p>
              <p className="circle-text__blog">Vakansiyalar</p>
              <p className="circle-text__blog">Ish izlash haqida</p>
              <p className="circle-text__blog">Biznes</p>
              <p className="circle-text__blog">Kompaniyalar</p>
              <p className="circle-text__blog">Vakansiyalar</p>
              <p className="circle-text__blog">Ish izlash haqida</p>
              <p className="circle-text__blog">Biznes</p>
              <p className="circle-text__blog">Kompaniyalar</p>
              <p className="circle-text__blog">Vakansiyalar</p>
              <p className="circle-text__blog">Ish izlash haqida</p>
            </div>
          </div>
          <div className="content__blog">
            <BigBlogCard />

            <div className="container__blog">
              {blogDatas.map(({ id, title, date, text, img }) => {
                return (
                  <BlogCard
                    key={id}
                    title={title}
                    img={img}
                    text={text}
                    date={date}
                  />
                );
              })}
            </div>

            <BigBlogCard />

            <div className="container__blog">
              {threeBlogDatas.map(({ id, title, date, text, img }) => {
                return (
                  <BlogCard
                    key={id}
                    title={title}
                    img={img}
                    text={text}
                    date={date}
                  />
                );
              })}
            </div>
            <button className="see-all__btn">Yana ko'rsatish</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
