import React from "react";
import { Modal, Progress } from "antd";

import "./chatParticipants.css";

import Girl from "../../../assets/images/hr-girl.png";
import Man from "../../../assets/images/hr-man.png";
import Boy from "../../../assets/images/designer-boy.png";

const ChatParticipants = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      wrapClassName="chat-participiants-modal"
      footer={null}
    >
      <div className="chat-participiants-wrapper">
        <h2>Chat ishtirokchilari</h2>
        <div className="chat-participiants-container">
          <div className="top__chat-participiants">
            <h4>Ish beruvchi</h4>
            <div className="profile__chat-participiants">
              <img src={Girl} alt="profile" />
              <span>
                <h2>Lilya Nasi</h2>
                <p>HR - Generalist</p>
              </span>
            </div>
            <div className="profile__chat-participiants">
              <img src={Man} alt="man" />
              <span>
                <h2>John Rakhimiy</h2>
                <p>HR - Generalist</p>
              </span>
            </div>
          </div>
          <div className="bottom__chat-participiants">
            <h4>Ish izlovchi</h4>
            <div className="profile__chat-participiants">
              <img src={Boy} alt="Boy" />
              <span>
                <h2>John Doe</h2>
                <p>Product designer</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ChatParticipants;
