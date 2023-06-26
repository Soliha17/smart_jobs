import React from "react";

import "./jobSeekers.css";

import { Input, Select, Tabs } from "antd";

import SearchIcon from "../../../assets/images/search-icon-black.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
import Person from "../../../assets/images/jamshid-big.svg";
import CallIcon from "../../../assets/images/call-icon-blue.svg";
import MailIcon from "../../../assets/images/blue-email-icon.svg";
import LinkIcon from "../../../assets/images/blue-link-icon.svg";
import Youtube from "../../../assets/images/youtube-icon.svg";
import Telegram from "../../../assets/images/telegram-icon.svg";
import Instagram from "../../../assets/images/instagram-icon.svg";
import Facebook from "../../../assets/images/facebook-icon.svg";

import JobSeekerSidebarCard from "../../../components/atoms/jobseeker-sidebar-card/JobSeekerSidebarCard";
import { Link } from "react-router-dom";
import Datas from "./Datas";

const { Search } = Input;

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

const JobSeekers = () => {
  return (
    <div className="jobseekers">
      <div className="left__jobseekers jobseekers-sidebar">
        <div className="header__jobseekers-sidebar">
          <Search
            placeholder="Nomzodlar izlash"
            allowClear
            style={{ width: "100%" }}
            size="large"
            suffix={<img src={SearchIcon} alt="" width={20} />}
            // onSearch={onSearch}
          />
          <Select
            defaultValue="lucy"
            style={{
              width: "100%",
            }}
            size="large"
            options={[
              {
                value: "lucy",
                label: "Barcha vakansiyalar",
              },
            ]}
          />
          <div className="btn-group__jobseekers-sidebar">
            <button>
              Filter
              <img src={FilterIcon} alt="FilterIcon" />
            </button>
            <button>
              Saralash
              <img src={SortIcon} alt="SortIcon" />
            </button>
          </div>
        </div>
        <span className="result-text__jobseekers-sidebar">
          <p>Natijalar:</p>
          <h4>285</h4>
        </span>
        <div className="content__jobseekers-sidebar">
          <JobSeekerSidebarCard />
          <JobSeekerSidebarCard />
          <JobSeekerSidebarCard />
          <JobSeekerSidebarCard />
          <JobSeekerSidebarCard />
        </div>
      </div>
      <div className="right__jobseekers jobseekers-card">
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
        <div className="tab-group__jobseekers-card">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
