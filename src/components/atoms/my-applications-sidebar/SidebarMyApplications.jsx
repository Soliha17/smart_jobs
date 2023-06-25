import React, { useState } from "react";
import { Badge, Input } from "antd";

import "./sidebarMyApplications.css";

import FiltrIcon from "../../../assets/images/filtr-myapplications.svg";
import SearchIcon from "../../../assets/images/search-hero-input.svg";
import CheckIcon from "../../../assets/images/2-check-icon.svg";
import ExpressLogo from "../../../assets/images/express-24-logo.png";
import { useTranslation } from "react-i18next";

const SidebarMyApplications = () => {
  const { t } = useTranslation();

  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const [show, setShow] = useState(true);

  console.log(setShow);

  return (
    <div className="sidebar__my-applications applications-sidebar">
      <div className="top__applications-sidebar">
        <Search
          placeholder="Izlash"
          prefix={<img src={SearchIcon} alt="" />}
          onSearch={onSearch}
        />
        <button className="default-btn">
          <img src={FiltrIcon} alt="filtr" />
          {t("filter")}
        </button>
      </div>
      <div className="card__applications-sidebar">
        <div className="card-info__applications-sidebar">
          <img src={ExpressLogo} alt="ExpressLogo" />
          <span>
            <h3>Worko</h3>
            <p>Mahsulot&nbsp;manager</p>
          </span>
        </div>
        <div className="card-action__applications-sidebar">
          <span>
            <p>8:00 PM </p>
            <img src={CheckIcon} alt="CheckIcon" />
          </span>
          <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
        </div>
      </div>
      <div className="card__applications-sidebar">
        <div className="card-info__applications-sidebar">
          <img src={ExpressLogo} alt="ExpressLogo" />
          <span>
            <h3>Worko</h3>
            <p>Mahsulot&nbsp;manager</p>
          </span>
        </div>
        <div className="card-action__applications-sidebar">
          <span>
            <p>8:00 PM </p>
            <img src={CheckIcon} alt="CheckIcon" />
          </span>
          <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
        </div>
      </div>
      <div className="card__applications-sidebar">
        <div className="card-info__applications-sidebar">
          <img src={ExpressLogo} alt="ExpressLogo" />
          <span>
            <h3>Worko</h3>
            <p>Mahsulot&nbsp;manager</p>
          </span>
        </div>
        <div className="card-action__applications-sidebar">
          <span>
            <p>8:00 PM </p>
            <img src={CheckIcon} alt="CheckIcon" />
          </span>
          <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
        </div>
      </div>
      <div className="card__applications-sidebar">
        <div className="card-info__applications-sidebar">
          <img src={ExpressLogo} alt="ExpressLogo" />
          <span>
            <h3>Worko</h3>
            <p>Mahsulot&nbsp;manager</p>
          </span>
        </div>
        <div className="card-action__applications-sidebar">
          <span>
            <p>8:00 PM </p>
            <img src={CheckIcon} alt="CheckIcon" />
          </span>
          <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
        </div>
      </div>
      <div className="card__applications-sidebar">
        <div className="card-info__applications-sidebar">
          <img src={ExpressLogo} alt="ExpressLogo" />
          <span>
            <h3>Worko</h3>
            <p>Mahsulot&nbsp;manager</p>
          </span>
        </div>
        <div className="card-action__applications-sidebar">
          <span>
            <p>8:00 PM </p>
            <img src={CheckIcon} alt="CheckIcon" />
          </span>
          <Badge count={show ? "Topshirilgan" : 0} color="#E0F1FF" />
        </div>
      </div>
    </div>
  );
};

export default SidebarMyApplications;
