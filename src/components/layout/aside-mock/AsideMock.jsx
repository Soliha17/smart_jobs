import "./asideMock.css";

import PlayIcon from "../../../assets/images/play-icon-mock.svg";
import Img from "../../../assets/images/aside-mock-img.png";
import CheckIcon from "../../../assets/images/check-black-circle.svg";
import MockVideoModal from "../../molecules/modal/MockVideoModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AsideMock = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="aside-mock container">
      <div className="left__aside-mock">
        <h2>{t("interviewingDevelopsYou")}</h2>
        <p>
          {t(
            "ourServiceWillHelpYouToAchieveGoodResultsInTheProcessOfJobPreparationOurExpertsWillHelpYouWithYourContinuity"
          )}
        </p>
        <span>
          <img src={CheckIcon} alt="CheckIcon" />
          {t("strongProfessionals")}
        </span>
        <span>
          <img src={CheckIcon} alt="CheckIcon" />
          {t("abilityToReceiveFeedback")}
        </span>
        <span>
          <img src={CheckIcon} alt="CheckIcon" />
          {t("realQuestionsAndAnswers")}
        </span>
        <button className="primary-btn">{t("conductAnInterview")}</button>
      </div>
      <div className="right__aside-mock">
        <img src={Img} alt="" />
        <img
          src={PlayIcon}
          alt="PlayIcon"
          onClick={() => setIsVideoModalOpen(true)}
        />
      </div>
      {<MockVideoModal open={isVideoModalOpen} setOpen={setIsVideoModalOpen} />}
    </div>
  );
};

export default AsideMock;
