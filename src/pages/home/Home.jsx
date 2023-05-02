import React from "react";
import Hero from "../../components/layout/hero/Hero";
import HeroHome from "../../components/atoms/hero-home/HeroHome";
import Categories from "../../components/layout/categories/Categories";

const Home = () => {
  return (
    <div>
      <Hero children={<HeroHome />} />
      <Categories/>
    </div>
  );
};

export default Home;
