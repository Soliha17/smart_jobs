import { Breadcrumb, Input, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "../../assets/images/search-hero-input.svg";

import "./blog.css";
import BigBlogCard from "../../components/atoms/big-blog-card/BigBlogCard";
import BlogCard from "../../components/atoms/blog-card/BlogCard";

import { blogDatas } from "../../mock/blog";
import { threeBlogDatas } from "../../mock/threeBlogCard";
import Footer from "../../components/layout/footer/Footer";
import CheckableTag from "antd/es/tag/CheckableTag";

const tagsData = [
  "Kompaniyalar",
  "Vakansiyalar",
  "Ish izlash haqida",
  "Biznes",
  "Sport",
  "Rezyume to'ldirish",
  "Ish topish haqida",
  "Biznes yuritish",
  "Kompaniyalar rivoji",
  "Vakansiyalar holati",
  "Ish berish haqida",
  "Biznesmen",
];

const Blog = () => {
  const { Search } = Input;
  // const [inputVisible, setInputVisible] = useState(false);

  const onSearch = (value) => console.log(value);

  // const onButtonClick = () => {
  //   setInputVisible(!inputVisible);
  // };

  const [selectedTags, setSelectedTags] = useState(["Books"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
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
              <Link to="/blogfull">
                <p className="title">Blog</p>
              </Link>
              <Search
                placeholder="Qidiring"
                onSearch={onSearch}
                enterButton={
                  <button className="ant-btn">
                    <img src={SearchIcon} alt="SearchIcon" />
                  </button>
                }
                // prefix={<img src={SearchIcon} alt="SearchIcon" />}
              />
            </div>
            <div className="bottom-header__blog">
              <Space size={[16, 24]} wrap>
                {tagsData.map((tag) => (
                  <CheckableTag
                    className="circle-text__blog"
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </Space>
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
