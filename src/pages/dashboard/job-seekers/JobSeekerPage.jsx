import React from "react";

import "./jobSeekers.css";

import { Select, Tabs } from "antd";
import { Link } from "react-router-dom";
import Datas from "./Datas";

import Person from "../../../assets/images/jamshid-big.svg";
import CallIcon from "../../../assets/images/call-icon-blue.svg";
import MailIcon from "../../../assets/images/blue-email-icon.svg";
import LinkIcon from "../../../assets/images/blue-link-icon.svg";
import Youtube from "../../../assets/images/youtube-icon.svg";
import Telegram from "../../../assets/images/telegram-icon.svg";
import Instagram from "../../../assets/images/instagram-icon.svg";
import Facebook from "../../../assets/images/facebook-icon.svg";

import BackIcon from "../../../assets/images/back-icon-chat.svg";
import SmsIcon from "../../../assets/images/small-sms-icon.svg";
import ShareIcon from "../../../assets/images/share-icon.svg";
import DonwloadIcon from "../../../assets/images/download-black-icon.svg";

const items = [
  {
    key: "1",
    label: "Ma'lumotlari",
    children: <Datas />,
  },
  {
    key: "2",
    label: "Rezyumelari",
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: "Izohlar",
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: "Uchrashuvlar",
    children: `Content of Tab Pane 3`,
  },
  {
    key: "5",
    label: "Topshiriqlar",
    children: `Content of Tab Pane 3`,
  },
];

const JobSeekerPage = () => {
  return (
    <div className="jobseekers jobseeker-page">
      <div className="top__jobseekers">
        <span>
          <img src={BackIcon} alt="SmsIcon" />
          <p>
            Ish nomi: <b>Product designer</b>
          </p>
        </span>
        <div>
          <button>
            Rezyueme yuklash
            <img src={DonwloadIcon} alt="SmsIcon" />
          </button>
          <button>
            Ulashish
            <img src={ShareIcon} alt="ShareIcon" />
          </button>
          <button>
            Xabar
            <img src={SmsIcon} alt="SmsIcon" />
          </button>
          <Select
            defaultValue="lucy"
            size="large"
            style={{
              width: 102,
            }}
            options={[
              {
                value: "lucy",
                label: "Holati",
              },
            ]}
          />
        </div>
      </div>
      <div className="right__jobseekers jobseekers-card jobseeker-card">
        <div className="top__jobseeker-card">
          <div className="profile-group__jobseekers-card">
            <img src={Person} alt="Person" />
            <span>
              <h3>Jamshid Qodirov</h3>
              <p>Mahsulot menejeri</p>
            </span>
          </div>
          <div className="info-group__jobseekers-card">
            <div>
              <span>
                <img src={CallIcon} alt="CallIcon" />
                <p>Telefon raqam</p>
              </span>
              <h5>+998 99 501 67 16</h5>
            </div>
            <div>
              <span>
                <img src={MailIcon} alt="MailIcon" />
                <p>E-mail</p>
              </span>
              <h5>John_rakimiy@toto.com</h5>
            </div>
            <div>
              <span>
                <img src={LinkIcon} alt="LinkIcon" />
                <p>Qo'shimcha havolalar</p>
              </span>
              <div className="social-group__jobseekers-card">
                <Link target="_blank" to={"/"}>
                  {" "}
                  <img src={Youtube} alt="Youtube" />
                </Link>
                <Link target="_blank" to={"/"}>
                  {" "}
                  <img src={Telegram} alt="Telegram" />
                </Link>
                <Link target="_blank" to={"/"}>
                  <img src={Instagram} alt="Instagram" />
                </Link>
                <Link target="_blank" to={"/"}>
                  <img src={Facebook} alt="Facebook" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-group__jobseekers-card">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default JobSeekerPage;
