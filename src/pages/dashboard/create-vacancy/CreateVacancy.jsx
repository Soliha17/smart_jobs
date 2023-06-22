import React, { useState } from "react";
import { Steps } from "antd";

import "./createVacancy.css";

import AdditionalInformation from "../../../components/atoms/additional-information/AdditionalInformation";
import FirstStep from "./first-step/FirstStep";
import SecondStep from "./second-step/SecondStep";

const steps = [
  {
    title: "First",
    content: <FirstStep />,
  },
  {
    title: "Second",
    content: <SecondStep />,
  },
  {
    title: "Last",
    content: <AdditionalInformation />,
  },
];

const CreateVacancy = () => {
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

  return (
    <div className="create-vacancy container">
      <Steps current={current} items={items} />
      <div className="content__create-vacancy">
        {current === 0 ? (
          <FirstStep props={{ next, prev }} />
        ) : current === 1 ? (
          <SecondStep props={{ next, prev }} />
        ) : (
          <AdditionalInformation props={{ next, prev }} />
        )}
      </div>
    </div>
  );
};

export default CreateVacancy;
