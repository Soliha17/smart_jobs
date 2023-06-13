import React, { useState } from "react";

import "./takeTest.css";

import { message, Steps, theme } from "antd";
import TestContent from "../../components/atoms/test-content/TestContent";
import TestContent1 from "../../components/atoms/test-content/TestContent1";
import TestContent2 from "../../components/atoms/test-content/TestContent2";
import TestContentLast from "../../components/atoms/test-content/TestContentLast";
import FinishTestModal from "../../components/atoms/finish-test-modal/FinishTestModal";

const steps = [
  {
    title: "",
    content: <TestContent1 />,
  },
  {
    title: "",
    content: <TestContent2 />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContent />,
  },
  {
    title: "",
    content: <TestContentLast />,
  },
];

const TakeTest = () => {
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
    <div className="take-test container">
      <div className="content__take-test">
        <Steps
          current={current}
          items={items}
          className="step__take-test"
          direction="horizontal"
          onChange={(step) => setCurrent(step)}
        />
        <div>
          {current === 0 ? (
            <TestContent1 props={{ next, prev }} />
          ) : current === 1 ? (
            <TestContent2 props={{ next, prev }} />
          ) : current === 10 ? (
            <TestContentLast props={{ next, prev }} />
          ) : (
            <TestContent props={{ next, prev }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TakeTest;
