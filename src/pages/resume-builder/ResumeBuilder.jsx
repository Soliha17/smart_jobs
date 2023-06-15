import React, { useState } from "react";
import { Progress, Steps } from "antd";

import "./ResumeBuilder.css";

import BasicInfoResumeBuilder from "../../components/atoms/basic-info-resume-builder/BasicInfoResumeBuilder";
import ProfessionalInformationBuilder from "../../components/atoms/professional-information-builder/ProfessionalInformationBuilder";
import AdditionalInformationBuilder from "../../components/atoms/additional-information-builder/AdditionalInformationBuilder";

import TemplateBg1 from "../../assets/images/temp-img-resume-builder.png";
import ResumeTemplate from "../../assets/images/res-temp-resume-builder.png";
import Rectangle from "../../assets/images/rec-resume-builder.png";
import { useTranslation } from "react-i18next";

const steps = [
  {
    title: "First",
    content: <BasicInfoResumeBuilder />,
  },
  {
    title: "Second",
    content: <ProfessionalInformationBuilder />,
  },
  {
    title: "Last",
    content: <AdditionalInformationBuilder />,
  },
];

const ResumeBuilder = () => {
  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = (stepNumber) => {
    setCurrent(current + stepNumber);
  };

  const prev = (stepNumber) => {
    setCurrent(current - stepNumber);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const { t } = useTranslation();

  return (
    <div className="build-resume resume-builder container">
      <div className="left__resume-builder">
        <Steps current={current} items={items} />
        <div className="content__build-resume">
          {current === 0 ? (
            <BasicInfoResumeBuilder props={{ next, prev }} />
          ) : current === 1 ? (
            <ProfessionalInformationBuilder props={{ next, prev }} />
          ) : (
            <AdditionalInformationBuilder props={{ next, prev }} />
          )}
        </div>
      </div>
      <div className="right__resume-builder">
        <div className="template-card__resume-builder">
          <div className="template-img__resume-builder">
            <img src={TemplateBg1} alt="TemplateBg1" />
          </div>
          <img
            src={ResumeTemplate}
            className="resume-template__resume-builder"
            alt="ResumeTemplate"
          />
          <div className="rectangle__resume-builder">
            <img src={Rectangle} alt="Rectangle" />
          </div>
          <div className="card-footer__resume-builder">
            <div
              style={{
                width: 230,
              }}
            >
              <Progress
                percent={25}
                size={[270, 8]}
                trailColor={"white"}
                strokeColor={"#40AAFF"}
              />
            </div>
            <button className="choose-template-btn">
              {t("chooseATemplate")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
