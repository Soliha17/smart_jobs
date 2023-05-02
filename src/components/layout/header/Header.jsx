import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Button, Drawer, Select, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./header.css";
import Logo from "../../../assets/images/logo.svg";
import ProfileImg from "../../../assets/images/profile-img.svg";

function Header() {
  const [visible, setVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState("btn1");
  const [isUser, setIsUser] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const selectButton = (btn) => {
    setSelectedButton(btn);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Smart Jobs' Logo" />
        </div>
        {isUser ? (
          <nav className="mobileHidden">
            <ul>
              <li>
                <NavLink to="/vacancies">Vakansiyalar</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Rezyume konstruktor</NavLink>
              </li>
              <li>
                <NavLink to="/help">Yordam</NavLink>
              </li>
              <li>
                <NavLink to="/addition">Qo’shimchalar</NavLink>
              </li>
            </ul>
          </nav>
        ) : (
          <div className="search-group__header">
            <Button
              type="primary"
              className={`button__search-group ${
                selectedButton === "btn1" && "selected-button__header"
              }`}
              onClick={() => selectButton("btn1")}
            >
              Ish Izlash
            </Button>
            <Button
              type="primary"
              className={`button__search-group ${
                selectedButton === "btn2" && "selected-button__header"
              }`}
              onClick={() => selectButton("btn2")}
            >
              Hodim Izlash
            </Button>
          </div>
        )}
        <div className="header__actions">
          <Space wrap className={`${isUser ? "mobileHidden" : ""}`}>
            <Select
              defaultValue="UZ"
              style={{
                width: 60,
              }}
              bordered={false}
              options={[
                {
                  value: "uz",
                  label: "UZ",
                },
                {
                  value: "ru",
                  label: "RU",
                },
                {
                  value: "en",
                  label: "EN",
                },
              ]}
            />
          </Space>
          {isUser ? (
            <div className="header__profile header__profile--none">
              <img src={ProfileImg} alt="Pofile Img" width={43} />
              <p className="profile__name">G’ayrat Rakhamtov</p>
            </div>
          ) : (
            <Button type="primary" className="enter-btn__header">Kirish</Button>
          )}
        </div>
        {isUser && (
          <div className="mobileVisible">
            <Space wrap>
              <Select
                defaultValue="UZ"
                style={{
                  width: 60,
                }}
                bordered={false}
                options={[
                  {
                    value: "uz",
                    label: "UZ",
                  },
                  {
                    value: "ru",
                    label: "RU",
                  },
                  {
                    value: "en",
                    label: "EN",
                  },
                ]}
              />
            </Space>
            <Button
              type="primary"
              onClick={showDrawer}
              className="header__hamburger-btn"
            >
              <MenuOutlined />
            </Button>
            <Drawer placement="right" onClose={onClose} visible={visible}>
              <nav>
                <ul>
                  <li>
                    <NavLink onClick={onClose} to="/">
                      <div className="header__profile">
                        <h6>G’ayrat Rakhamtov</h6>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/shop">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={onClose} to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Drawer>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
