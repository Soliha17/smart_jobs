import React from "react";

import "./aboutHero.css";

import AboutHeroImg from "../../../assets/images/about-hero.svg";

const AboutHero = () => {
  return (
    <div className="about-hero container">
      <div className="content__about-hero">
        <h2>
          Orzudagi ishni yoki korxonangizga iqtidorlar izlashda ko'maklashamiz
        </h2>
        <div className="tag-group__about-hero">
          <p className="circle-text__vacancy-full">#ish_izlash</p>
          <p className="circle-text__vacancy-full">#talantlarni_izlash</p>
          <p className="circle-text__vacancy-full">#turli_sohalar</p>
          <p className="circle-text__vacancy-full">#yuqori_maoshlar</p>
          <p className="circle-text__vacancy-full">#iqtidorli_kadrlar</p>
        </div>
        <div className="btn-group__about-hero">
          <button className="primary-btn">Ish izlash</button>
          <button className="default-btn">Hodim izlash</button>
        </div>
      </div>
      <div className="image__about-hero">
        <img src={AboutHeroImg} alt="AboutHeroImg" />
      </div>
    </div>
  );
};

export default AboutHero;
