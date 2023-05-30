import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

import "./BuildResume.css";
import BasicInfoResume from "../../components/atoms/basic-info-resume/BasicInfoResume";
import ProfessionalInformation from "../../components/atoms/professional-information/ProfessionalInformation";
import AdditionalInformation from "../../components/atoms/additional-information/AdditionalInformation";

const steps = [
  {
    title: "First",
    content: <BasicInfoResume />,
  },
  {
    title: "Second",
    content: <ProfessionalInformation />,
  },
  {
    title: "Last",
    content: <AdditionalInformation />,
  },
];

const BuildResume = () => {
  const { token } = theme.useToken();
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

  return (
    <div className="build-resume container">
      <Steps current={current} items={items} />
      <div className="content__build-resume">
        {current === 0 ? (
          <BasicInfoResume props={{ next, prev }} />
        ) : current === 1 ? (
          <ProfessionalInformation props={{ next, prev }} />
        ) : (
          <AdditionalInformation props={{ next, prev }} />
        )}
      </div>
    </div>
  );
};

export default BuildResume;
