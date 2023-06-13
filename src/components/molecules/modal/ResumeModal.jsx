import React from "react";
import { Modal, Progress } from "antd";

import TemplateBg1 from "../../../assets/images/temp-img-resume-builder.png";
import ResumeTemplate from "../../../assets/images/res-temp-resume-builder.png";
import Rectangle from "../../../assets/images/rec-resume-builder.png";

const ResumeModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      wrapClassName="resume-modal"
      footer={null}
    >
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
          <button className="choose-template-btn">Shablon tanlash</button>
        </div>
      </div>
    </Modal>
  );
};

export default ResumeModal;
