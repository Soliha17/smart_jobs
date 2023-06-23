import React, { useState } from "react";
import { Steps } from "antd";

import "./createVacancy.css";

import FirstStep from "./first-step/FirstStep";
import SecondStep from "./second-step/SecondStep";
import ThirdStep from "./third-step/ThirdStep";

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
    content: <ThirdStep />,
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
          <ThirdStep props={{ next, prev }} />
        )}
      </div>
    </div>
  );
};

export default CreateVacancy;
