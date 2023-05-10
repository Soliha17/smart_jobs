import React from "react";
import Hero from "../../components/layout/hero/Hero";
import HeroHome from "../../components/atoms/hero-home/HeroHome";
import Categories from "../../components/layout/categories/Categories";
import Companies from "../../components/layout/companies/Companies";
import Cities from "../../components/layout/cities/Cities";
import Occupations from "../../components/layout/occupations/Occupations";
import Blog from "../../components/layout/blog/Blog";
import Counts from "../../components/atoms/counts/Counts";
import Footer from "../../components/layout/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero>
        <HeroHome />
      </Hero>
      <Categories />
      <Counts />
      <Companies />
      <Cities />
      <Occupations />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
