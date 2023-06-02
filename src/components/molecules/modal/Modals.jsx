import React, { useState } from "react";
import { Modal, Steps, theme } from "antd";

import JobSeekerModal from "./JobSeeker";
import SignUp from "./SignUp";
import Login from "./Login";
import InfoFills from "./FillInfos";

import SmartJobLogo from "../../../assets/images/smart-logo.svg";

// steppper
const steps = [
  {
    title: "First",
    content: <JobSeekerModal />,
  },
  {
    title: "Second",
    content: <SignUp />,
  },
  {
    title: "Last",
    content: <InfoFills />,
  },
];

const Modals = ({ open, setOpen }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [selectedButton, setSelectedButton] = useState("btn1");
  const [data, setData] = useState("");

  console.log(selectedButton);

  const next = (stepNumber) => {
    setCurrent(current + stepNumber);
  };

  console.log(data);

  const prev = (stepNumber) => {
    setCurrent(current - stepNumber);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(!open);
  };

  return (
    <div className="modals">
      <div className="stepper-none">
        <Steps current={current} items={items} />
      </div>
      <div className="login-modal-container">
        <Modal
          title={<img src={SmartJobLogo} alt="SmartJobLogo" />}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          className="login-modal"
          footer={false}
        >
          {current === 0 ? (
            <JobSeekerModal
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              next={next}
              prev={prev}
              dataHandler={{ data, setData }}
            />
          ) : current === 1 ? (
            <SignUp next={next} prev={prev} data={data} />
          ) : (
            <InfoFills
              selectedButton={selectedButton}
              next={next}
              prev={prev}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Modals;
