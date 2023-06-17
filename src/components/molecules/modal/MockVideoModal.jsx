import React from "react";
import { Modal } from "antd";

const MockVideoModal = ({ open, setOpen }) => {
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
      <div className="iframe-container">
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/oGTYVEdmlj8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default MockVideoModal;
