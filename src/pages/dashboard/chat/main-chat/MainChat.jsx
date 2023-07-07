import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./mainChat.css";

import { Button, Dropdown, Input, Select } from "antd";

import ThreeDots from "../../../../assets/images/three-dots.svg";
import Description from "../../../../assets/images/description-myapplications.svg";
import People from "../../../../assets/images/people-black-myapplication.svg";
import Report from "../../../../assets/images/resport-icon-myapplications.svg";
import Delete from "../../../../assets/images/delete-myapplications.svg";
import Boy from "../../../../assets/images/profile-img-chat-header.png";
import Read from "../../../../assets/images/2-check-icon.svg";
import AttachFile from "../../../../assets/images/attach-file-icon.svg";
import Send from "../../../../assets/images/send-icon-chat.svg";
import BackIcon from "../../../../assets/images/back-icon-chat.svg";

import ChatParticipants from "../../../../components/molecules/modal/chat-participants/ChatParticipants";

const MainChat = () => {
  const [show, setShow] = useState(true);

  console.log(setShow);

  const [openChatParticipants, setOpenChatParticipants] = useState(false);

  function openChatParticipantsModal() {
    setOpenChatParticipants(true);
  }

  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="dropdown-item__vacancy-full"
        >
          <img src={Description} alt="Description" />
          {t("aboutVacancy")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <span
          className="dropdown-item__vacancy-full"
          onClick={openChatParticipantsModal}
        >
          <img src={People} alt="People" />
          {t("chatParticipants")}
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <a
          className="dropdown-item__vacancy-full"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <img src={Report} alt="Report" />
          {t("complaintsAboutTheApplication")}
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <p className="dropdown-item__vacancy-full">
          <img src={Delete} alt="Delete" />
          {t("deleteTheApplication")}
        </p>
      ),
    },
  ];

  return (
    <div className="main__chat">
      <div className="main-header__chat">
        <div>
          <span>
            <img src={BackIcon} className="back__chat" alt="BackIcon" />
            <img src={Boy} alt="Boy" />
          </span>
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Mahsulot manager</p>
          </span>
        </div>
        <div className="action-header__chat">
          <div>
            <p>Holati:</p>
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "lucy",
                  label: "Suhbat",
                },
              ]}
            />
          </div>
          <span className="three-dots">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
              trigger={["click"]}
            >
              <Button>
                <img src={ThreeDots} alt="ThreeDots" />
              </Button>
            </Dropdown>
          </span>
        </div>
      </div>
      <div className="main-line__chat">
        <span></span>
        <h3>Bugun</h3>
        <span></span>
      </div>
      <div className="main-content__chat">
        <div className="left-content__chat">
          <div className="card-main__chat">
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib chiqila....
            </p>
          </div>
          <div className="read__chat">
            <p>8:00 PM</p>
          </div>
        </div>
        <div className="right-content__chat">
          <div className="card-main__chat">
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko'rilib chiqila....
            </p>
          </div>
          <div className="read__chat">
            <p>8:00 PM</p>
            <img src={Read} alt="Read" />
          </div>
        </div>
      </div>
      <div className="main-footer__chat">
        <div>
          <img src={AttachFile} alt="AttachFile" />
          <Input placeholder={t("writeAMessage")} bordered={false} />
        </div>
        <img src={Send} alt="send icon" />
      </div>
      {
        <ChatParticipants
          open={openChatParticipants}
          setOpen={setOpenChatParticipants}
        />
      }
    </div>
  );
};

export default MainChat;
