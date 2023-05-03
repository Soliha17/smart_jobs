import React from "react";

import "./hero.css";
import HeroArrow from "../../../assets/images/hero-arrow.svg";
import Shape1 from "../../../assets/images/shape-1.svg";
import Shape2 from "../../../assets/images/shape2.svg";
import Shape3 from "../../../assets/images/shape3.svg";
import Shape4 from "../../../assets/images/shape4.svg";
import Shape5 from "../../../assets/images/shape5.svg";
import Shape6 from "../../../assets/images/shape6.svg";
import Shape7 from "../../../assets/images/shape7.svg";
import Shape8 from "../../../assets/images/shape8.svg";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="shapes-group">
        <img src={HeroArrow} className="arrow__hero" alt="HeroArrow" />
        <img src={Shape1} className="shape1__hero" alt="Round shape" />
        <img src={Shape2} className="shape2__hero" alt="Round shape" />
        <img src={Shape3} className="shape3__hero" alt="Round shape" />
        <img src={Shape4} className="shape4__hero" alt="Round shape" />
        <img src={Shape5} className="shape5__hero" alt="Round shape" />
        <img src={Shape6} className="shape6__hero" alt="Round shape" />
        <img src={Shape7} className="shape7__hero" alt="Round shape" />
        <img src={Shape8} className="shape8__hero" alt="Round shape" />
      </div>

      <div className="container">{children}</div>
    </div>
  );
};

export default Hero;
