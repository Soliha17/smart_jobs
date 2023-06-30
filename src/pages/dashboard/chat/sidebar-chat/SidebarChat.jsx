import React, { useState } from "react";
import { Input } from "antd";

import { useTranslation } from "react-i18next";

import "./sidebarChat.css";

import FiltrIcon from "../../../../assets/images/sort-icon.svg";
import SearchIcon from "../../../../assets/images/search-hero-input.svg";
import CheckIcon from "../../../../assets/images/2-check-icon.svg";
import Person from "../../../../assets/images/chat-person-img.png";

const SidebarChat = () => {
  const { t } = useTranslation();

  const onSearch = (value) => console.log(value);

  const { Search } = Input;

  const [show, setShow] = useState(true);

  console.log(setShow);

  return (
    <div className="sidebar__chat chat-sidebar">
      <div className="top__chat-sidebar">
        <Search
          placeholder="Izlash"
          prefix={<img src={SearchIcon} alt="SearchIcon" />}
          onSearch={onSearch}
          style={{ width: 207 }}
        />
        <button className="default-btn">
          <img src={FiltrIcon} alt="filtr" />
          Saralash
        </button>
      </div>
      <div className="card__chat-sidebar">
        <div className="card-info__chat-sidebar">
          <img src={Person} alt="Person" width={35} height={40} />
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Assalomu alaykym sizning rezyumening...</p>
          </span>
        </div>
        <span className="card-action__chat-sidebar">
          8:00
          <img src={CheckIcon} alt="CheckIcon" />
        </span>
      </div>
      <div className="card__chat-sidebar">
        <div className="card-info__chat-sidebar">
          <img src={Person} alt="Person" width={35} height={40} />
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Assalomu alaykym sizning rezyumening...</p>
          </span>
        </div>
        <span className="card-action__chat-sidebar">
          8:00
          <img src={CheckIcon} alt="CheckIcon" />
        </span>
      </div>
      <div className="card__chat-sidebar">
        <div className="card-info__chat-sidebar">
          <img src={Person} alt="Person" width={35} height={40} />
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Assalomu alaykym sizning rezyumening...</p>
          </span>
        </div>
        <span className="card-action__chat-sidebar">
          8:00
          <img src={CheckIcon} alt="CheckIcon" />
        </span>
      </div>
      <div className="card__chat-sidebar">
        <div className="card-info__chat-sidebar">
          <img src={Person} alt="Person" width={35} height={40} />
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Assalomu alaykym sizning rezyumening...</p>
          </span>
        </div>
        <span className="card-action__chat-sidebar">
          8:00
          <img src={CheckIcon} alt="CheckIcon" />
        </span>
      </div>
      <div className="card__chat-sidebar">
        <div className="card-info__chat-sidebar">
          <img src={Person} alt="Person" width={35} height={40} />
          <span>
            <h3>Johh Rakhimiy</h3>
            <p>Assalomu alaykym sizning rezyumening...</p>
          </span>
        </div>
        <span className="card-action__chat-sidebar">
          8:00
          <img src={CheckIcon} alt="CheckIcon" />
        </span>
      </div>
    </div>
  );
};

export default SidebarChat;
