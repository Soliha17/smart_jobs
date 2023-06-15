import React from "react";
import "./opportunityResumePromo.css";

import BlueIcon from "../../../assets/images/opportunuty-blue-icon.svg";
import GreenIcon from "../../../assets/images/opportunity-green-icon.svg";
import RedIcon from "../../../assets/images/opportunity-red-icon.svg";
import { useTranslation } from "react-i18next";

const OpportunityResumePromo = () => {
  const { t } = useTranslation();

  return (
    <div className="opportunity___resume-promo">
      <h2> {t("opportunities")} </h2>
      <p className="opportunity-subtitle">
        {t(
          "smartjobHasGotYouCoveredWithAllTheToolsYouNeedToCreateThePerfectResumeCompletelyFreeToGetStartedChooseTheResumeTemplateThatWorksBestForYou"
        )}
      </p>
      <div className="opportunity-container__resume-promo">
        <div className="opportunity-card__resume-promo">
          <img src={BlueIcon} alt="BlueIcon" />
          <h3> {t("convenientDesignOptions")} </h3>
          <p>
            {t(
              "theCandidateWillImmediatelyReceiveANotificationOfYourMessageByMailAndCanRespondToYouQuickly"
            )}
          </p>
        </div>
        <div className="opportunity-card__resume-promo">
          <img src={GreenIcon} alt="BlueIcon" />
          <h3> {t("createAResumeBasedOnDifferentTemplates")}</h3>
          <p>
            {t(
              "theCandidateWillImmediatelyReceiveANotificationOfYourMessageByMailAndCanRespondToYouQuickly"
            )}
          </p>
        </div>
        <div className="opportunity-card__resume-promo">
          <img src={RedIcon} alt="BlueIcon" />
          <h3>{t("formingANewOneBasedOnResumeSamples")}</h3>
          <p>
            {t(
              "theCandidateWillImmediatelyReceiveANotificationOfYourMessageByMailAndCanRespondToYouQuickly"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityResumePromo;
