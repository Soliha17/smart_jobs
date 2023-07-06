import React, { useState } from "react";
import { Modal, Steps } from "antd";

import JobSeekerModal from "./JobSeeker";
import Login from "./Login";
import SignUp from "./SignUp";
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
    title: "Third",
    content: <Login />,
  },
  {
    title: "Last",
    content: <InfoFills />,
  },
];

const Modals = ({ open, setOpen }) => {
  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  // const [selectedButton, setSelectedButton] = useState("btn1");
  const [data, setData] = useState("");

  const next = (stepNumber) => {
    setCurrent(current + stepNumber);
  };

  // console.log(data);

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
              next={next}
              prev={prev}
              dataHandler={{ data, setData }}
            />
          ) : current === 1 ? (
            <SignUp next={next} prev={prev} data={data} />
          ) : current === 2 ? (
            <Login next={next} prev={prev} data={data} setOpen={setOpen} />
          ) : current === 3 ? (
            <InfoFills setOpen={setOpen} next={next} prev={prev} />
          ) : (
            <InfoFills setOpen={setOpen} next={next} prev={prev} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Modals;
