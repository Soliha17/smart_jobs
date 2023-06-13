import React from "react";

import "./heroResumePromo.css";
import ResumePromoCarousel from "../carousel-resume-promo/CarouselResumePromo";

const HeroResumePromo = () => {
  return (
    <div className="hero__resume-promo">
      <div className="hero-info__resume-promo">
        <h2>Ish izlovchilar uchun bepul rezyume yaratuvchisi</h2>
        <p>
          Eng yaxshi tajribalar va innovatsion texnologiyalarni qo'llash orqali
          sizning yaxshiroq ishga joylashish imkoniyatingizni butunlay bepul
          oshiradi.
        </p>
        <button className="primary-btn">Rezyume yaratish</button>
      </div>
      <div className="hero-carousel__resume-promo">
        <ResumePromoCarousel />
      </div>
    </div>
  );
};

export default HeroResumePromo;
