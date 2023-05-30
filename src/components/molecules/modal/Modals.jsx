import React, { useState } from "react";
import { Modal, Steps, theme } from "antd";

import JobSeekerModal from "./JobSeeker";
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
    content: <Login />,
  },
  {
    title: "Last",
    content: <InfoFills />,
  },
];

const Modals = ({ open, setOpen }) => {
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

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
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
              next={next}
              prev={prev}
              open={open}
              setOpen={setOpen}
            />
          ) : current === 1 ? (
            <Login next={next} prev={prev} open={open} setOpen={setOpen} />
          ) : (
            <InfoFills next={next} prev={prev} open={open} setOpen={setOpen} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Modals;
