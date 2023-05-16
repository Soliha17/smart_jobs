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

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="build-resume container">
      <Steps current={current} items={items} />
      <div className="content__build-resume">
        <div>{steps[current].content}</div>
        <div className="footer__resume">
          {current > 0 && (
            <Button size="large" onClick={() => prev()}>
              Orqaga
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button
              size="large"
              type="primary"
              onClick={() => next()}
              style={{ marginLeft: "auto" }}
            >
              Davom etish
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              size="large"
              onClick={() => message.success("Processing complete!")}
            >
              Saqlash
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
