import React from "react";
import { Modal } from "antd";

const ResumePromoModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      wrapClassName="resume-promo-modal"
      footer={null}
    >
      <iframe
        width="700"
        height="400"
        src="https://www.youtube.com/embed/oGTYVEdmlj8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Modal>
  );
};

export default ResumePromoModal;
