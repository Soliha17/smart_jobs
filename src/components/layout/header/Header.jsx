import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { Button, Drawer, Dropdown, Select, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./header.css";
import Logo from "../../../assets/images/logo.svg";
import ProfileImg from "../../../assets/images/profile-img.svg";

import { DownOutlined } from "@ant-design/icons";
import VacancyInput from "../../atoms/vacancy-input/VacancyInput";

function Header() {
  const [visible, setVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState("btn1");
  const [isUser, setIsUser] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/vacancy" || location.pathname === "/full") {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [location.pathname]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const selectButton = (btn) => {
    setSelectedButton(btn);
    console.log(setIsUser);
  };

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
  ];

  function goToVacancyPage() {
    navigate("/vacancy");
  }

  return (
    <div>
      <div className="header-wrapper">
        <header className="header container">
          <div className="header__logo">
            <img src={Logo} alt="Smart Jobs' Logo" onClick={goToVacancyPage} />
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
            <div className="select-btn-group__header">
              <button
                className={`button__search-group ${
                  selectedButton === "btn1" && "selected-button__header"
                }`}
                onClick={() => selectButton("btn1")}
              >
                Ish Izlash
              </button>
              <button
                className={`button__search-group ${
                  selectedButton === "btn2" && "selected-button__header"
                }`}
                onClick={() => selectButton("btn2")}
              >
                Hodim Izlash
              </button>
            </div>
          )}
          <div
            className={`header__actions ${isUser && "header__actions--auto"}`}
          >
            {isUser ? (
              <>
                <Space
                  wrap
                  className={`white-select ${!isUser ? "mobileHidden" : ""}`}
                >
                  <Select
                    className="white-select"
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
                <div className="header__profile header__profile--none">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <button onClick={(e) => e.preventDefault()}>
                      <Space className="profile__name">
                        <img src={ProfileImg} alt="Pofile Img" width={43} />
                        G’ayrat Rakhamtov
                        <DownOutlined />
                      </Space>
                    </button>
                  </Dropdown>
                </div>
              </>
            ) : (
              <>
                <Space
                  wrap
                  className={`white-select ${
                    isUser ? "mobileHidden" : "white-select--none"
                  }`}
                >
                  <Select
                    className="white-select"
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
                <Button type="primary" className="enter-btn__header">
                  Kirish
                </Button>
              </>
            )}
          </div>
          {isUser && (
            <div className="mobileVisible">
              <Space
                wrap
                className={`white-select ${
                  isUser ? "mobileHidden" : "white-select--none"
                }`}
              >
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
        {location.pathname === "/vacancy" && <VacancyInput />}
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
