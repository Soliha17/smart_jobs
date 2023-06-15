import React, { useState } from "react";

import "./asideResumePromo.css";
import ResumePromoModal from "../../molecules/modal/ResumePromoModal";
import { useTranslation } from "react-i18next";

const AsideResumePromo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="aside__resume-promo">
        <div>
          <h2>{t("youCanCreatePriorityCVsWhenApplyingForJobs")}</h2>
          <p>
            {t(
              "quickAccessToAnyNecessaryInformationAndEasyTransitionBetweenTasksWeAreConstantlyImprovingTheInterfaceThanksToTheRecommendationsAndWishesOfHRPractitionersAndHiringManagers"
            )}
          </p>
          <button className="primary-btn">{t("creatingAResume")}</button>
          <button className="default-btn">{t("getHelp")}</button>
        </div>
        <img
          src={require("../../../assets/images/video-resume-promo.png")}
          alt="video-resume-promo"
          onClick={() => setIsVideoOpen(true)}
        />
      </div>
      {<ResumePromoModal open={isVideoOpen} setOpen={setIsVideoOpen} />}
    </>
  );
};

export default AsideResumePromo;
