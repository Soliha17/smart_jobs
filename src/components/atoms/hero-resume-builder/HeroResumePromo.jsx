import React from "react";

import "./heroResumePromo.css";
import ResumePromoCarousel from "../carousel-resume-promo/CarouselResumePromo";
import { useTranslation } from "react-i18next";

const HeroResumePromo = () => {
  const { t } = useTranslation();

  return (
    <div className="hero__resume-promo">
      <div className="hero-info__resume-promo">
        <h2>{t("freeResumeBuilderForJobSeekers")}</h2>
        <p>
          {t(
            "byApplyingBestPracticesAndInnovativeTechnologiesYouWillIncreaseYourChancesOfGettingABetterJobCompletelyFreeOfCharge"
          )}
        </p>
        <button className="primary-btn">{t("createAResume")}</button>
      </div>
      <div className="hero-carousel__resume-promo">
        <ResumePromoCarousel />
      </div>
    </div>
  );
};

export default HeroResumePromo;
