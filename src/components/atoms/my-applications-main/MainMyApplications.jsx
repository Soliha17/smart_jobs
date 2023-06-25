import React, { useState } from "react";

import "./mainMyApplications.css";
import { Badge, Button, Dropdown, Input } from "antd";

import ExpressLogo from "../../../assets/images/exppres-big-logo.png";
import ThreeDots from "../../../assets/images/three-dots.svg";
import Description from "../../../assets/images/description-myapplications.svg";
import People from "../../../assets/images/people-black-myapplication.svg";
import Report from "../../../assets/images/resport-icon-myapplications.svg";
import Delete from "../../../assets/images/delete-myapplications.svg";
import RightArrow from "../../../assets/images/right-arrow-black-myresumes.svg";
import Boy from "../../../assets/images/profile-boy.png";
import Girl from "../../../assets/images/girl-myapplicants.png";
import AddCircle from "../../../assets/images/add-circle-blue.svg";
import Read from "../../../assets/images/2-check-icon.svg";
import AttachFile from "../../../assets/images/attach-file-icon.svg";
import Send from "../../../assets/images/send-icon-chat.svg";
import BackIcon from "../../../assets/images/back-icon-chat.svg";
import ChatParticipants from "../../molecules/modal/ChatParticipants";
import { useTranslation } from "react-i18next";

const MainMyApplications = () => {
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
    <div className="main__my-applications">
      <div className="main-header__my-applications">
        <div>
          <span>
            <img
              src={BackIcon}
              className="back__my-applications"
              alt="BackIcon"
            />
            <img src={ExpressLogo} alt="ExpressLogo" />
          </span>
          <span>
            <h3>Worko</h3>
            <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
          </span>
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
      <div className="main-vacancy__my-applications">
        <span>
          <p>{t("vacancyName")}:</p>
          <h3>Product designer</h3>
        </span>
        <img src={RightArrow} alt="RightArrow" />
      </div>
      <div className="main-line__my-applications">
        <span></span>
        <h3>Bugun</h3>
        <span></span>
      </div>
      <div className="main-content__my-applications">
        <div className="left-content__my-applications">
          <div className="profile-main__my-applications">
            <span>
              <h2>Lilya Nasi</h2>
              <p>HR - Generalist</p>
            </span>
            <img src={Girl} alt="profile" />
          </div>
          <div className="card-main__my-applications">
            <p>
              Assalomu alaykym sizning rezyumening hozirda biz tomonimizdan
              ko’rilib chiqila....
            </p>
          </div>
        </div>
        <div className="right-content__my-applications">
          <div className="profile-main__my-applications">
            <span>
              <h2>Siz</h2>
              <p>UX/UI designer </p>
            </span>
            <img src={Boy} alt="profile" />
          </div>
          <div className="card-main__my-applications">
            <div>
              <span>
                <p>{t("resumeType")}</p>
                <h3>UX/UI dizayner</h3>
              </span>
              <img src={RightArrow} alt="RightArrow" />
            </div>
            <div className="line__my-applications"></div>
            <button>
              <img src={AddCircle} alt="AddCircle" />
              {t("coverLetter")}
            </button>
          </div>
          <div className="read__my-applications">
            <p>8:00 PM</p>
            <img src={Read} alt="Read" />
          </div>
        </div>
      </div>
      <div className="main-footer__my-applications">
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

export default MainMyApplications;
