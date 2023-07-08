import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setSmsCode } from "src/store/auth.slice";
import { Modal, Steps } from "antd";

import JobSeekerModal from "./JobSeeker";
import Login from "./Login";
import SignUp from "./SignUp";
import InfoFills from "./FillInfos";

import SmartJobLogo from "src/assets/images/smart-logo.svg";


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
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!open) {
      setCurrent(0);
    }
  }, [open]);

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
    dispatch(setSmsCode(["", "", "", ""]));
  };

  const handleCancel = () => {
    setOpen(!open);
    dispatch(setSmsCode(["", "", "", ""]));
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
            <JobSeekerModal next={next} prev={prev} />
          ) : current === 1 ? (
            <SignUp next={next} prev={prev} />
          ) : current === 2 ? (
            <Login next={next} prev={prev} setOpen={setOpen} />
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
