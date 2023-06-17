import React from "react";

import "./heroMock.css";

import YellowRec from "../../../assets/images/yellow-rec-mock.png";
import GreenRec from "../../../assets/images/green-rec-mock.png";
import Arrow1 from "../../../assets/images/arrow-1-mock.svg";
import Arrow2 from "../../../assets/images/arrow-2-mock.svg";
import Person1 from "../../../assets/images/person-1-mock.png";
import Person2 from "../../../assets/images/person-2-mock.png";
import { useTranslation } from "react-i18next";

const HeroMock = () => {
  const { t } = useTranslation();

  return (
    <div className="mock-hero container">
      <div className="content__mock-hero">
        <p className="badge__mock-hero"> {t("jobInterviews")} </p>
        <p className="title__mock-hero">
          {t("takeItToTheNextLevelWithMockInterviews")}
        </p>
        <p className="subtitle__mock-hero">
          {t("ourMockInterviewServiceIsDesignedToHelpYouInYourJobPreparation")}
        </p>
      </div>
      <div className="group__mock-hero">
        <div className="left-group__mock-hero">
          <img src={GreenRec} alt="GreenRec" />
          <img src={Person1} alt="Person1" />
          <img src={Arrow1} className="arrow1__mock-hero" alt="Arrow1" />
        </div>
        <button> {t("conductAnInterview")} </button>

        <div className="right-group__mock-hero">
          <img src={Arrow2} className="arrow2__mock-hero" alt="Arrow2" />
          <img src={YellowRec} alt="YellowRec" />
          <img src={Person2} alt="Person2" />
        </div>
      </div>
    </div>
  );
};

export default HeroMock;
