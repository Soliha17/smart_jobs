import React from "react";
import Hero from "../../components/layout/hero/Hero";
import HeroHome from "../../components/atoms/hero-home/HeroHome";
import Categories from "../../components/layout/categories/Categories";
import Companies from "../../components/layout/companies/CompaniesSection";
import Cities from "../../components/layout/cities/Cities";
import Occupations from "../../components/layout/occupations/Occupations";
import Counts from "../../components/atoms/counts/Counts";
import Footer from "../../components/layout/footer/Footer";
import BlogHome from "../../components/layout/blogHome/BlogHome";

const Home = () => {
  return (
    <div style={{ background: "white" }}>
      <Hero>
        <HeroHome />
      </Hero>
      <Categories />
      <Counts />
      <Companies />
      <Cities />
      <Occupations />
      <BlogHome />
      <Footer />
    </div>
  );
};

export default Home;
